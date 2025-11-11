import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { jwt } from "@elysiajs/jwt";
// import bcrypt from "bcryptjs";
import prisma from "./db";
import { staticPlugin } from "@elysiajs/static";

const rootApi = Bun.env.ROOT_API || "/api";

const app = new Elysia({ prefix: rootApi })
  .use(cors())
  .use(swagger())
  .use(staticPlugin())
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!,
      exp: "7d", // Token มีอายุ 7 วัน
    })
  )

  // Global auth middleware
  .onBeforeHandle(async ({ headers, jwt, set, path }) => {
    // Allow unauthenticated access to login or public routes
    const publicPaths = [
      `${rootApi}/public`,
      `${rootApi}/register`,
      `${rootApi}/login`,
      `${rootApi}/user`,
      `${rootApi}/menu`,
      `${rootApi}/submenu`,
      `${rootApi}/department`,
      `${rootApi}/employee`,
      `${rootApi}/product-type`,
      `${rootApi}/metal-type`,
      `${rootApi}/unit-type`,
      `${rootApi}/customer`
    ];
    // console.log(`Current path: ${path}`);
    // if (publicPaths.includes(path)) return;
    if (publicPaths.some((p) => path.startsWith(p))) return;
    const token = headers.authorization?.split(" ")[1];
    if (!token) {
      set.status = 401;
      return { error: "Token missing" };
    }
    const payload = await jwt.verify(token);
    if (!payload) {
      set.status = 403;
      return { error: "Invalid token" };
    }
  })

  // Register a new user
  .post(
    "/register",
    async ({ body, set }) => {
      const { email, userName, password, fullName } = body;

      const existingUser = await prisma.appUser.findUnique({
        where: { email },
      });
      if (existingUser) {
        set.status = 409;
        return { error: "User already exists" };
      }

      // const hashedPassword = await bcrypt.hash(password, 10);
      const hashedPassword = await Bun.password.hash(password);
      const newUser = await prisma.appUser.create({
        data: {
          email,
          userName,
          password: hashedPassword,
          fullName,
        },
      });

      return {
        data: newUser,
        message: "User created successfully",
        success: true,
      };
    },
    {
      body: t.Object({
        email: t.String({ format: "email" }),
        userName: t.String(),
        password: t.String({ minLength: 6 }),
        fullName: t.String(),
      }),
    }
  )

  // User Login
  .post(
    "/login",
    async ({ jwt, body, set }) => {
      const { loginName, password } = body;

      const user =
        (await prisma.appUser.findUnique({
          where: { email: loginName },
        })) ||
        (await prisma.appUser.findUnique({
          where: { userName: loginName },
        }));

      if (!user) {
        set.status = 401;
        return { error: "Invalid email, userName or password" };
      }

      // console.log("User found:", user);
      // const isValid = await bcrypt.compare(password, user.password);
      const isValid = await Bun.password.verify(password, user.password);

      if (!isValid) {
        set.status = 401;
        return { error: "Invalid email, userName or password" };
      }

      const token = await jwt.sign({ id: user.userId });
      return { data: { token: token, userId: user.userId }, message: "Login successful", success: true };
    },
    {
      body: t.Object({
        loginName: t.String(),
        password: t.String({ minLength: 6 }),
      }),
    }
  )

  .get("/", () => "Hello Elysia")
  // .use(import("./user/user").then((mod) => mod.default))
  .use(import("./user/user"))
  .use(import("./menu/menu"))
  .use(import("./menu/submenu"))
  .use(import("./general/department"))
  .use(import("./general/employee"))
  .use(import("./general/productType"))
  .use(import("./general/metalType"))
  .use(import("./general/unit"))
  .use(import("./general/customer"))
  .listen({
    port: Bun.env.PORT ? Number(Bun.env.PORT) : 3000,
    // hostname: "192.168.1.116"
  });

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

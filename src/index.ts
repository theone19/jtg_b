import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { staticPlugin } from "@elysiajs/static";
import { jwt } from "@elysiajs/jwt";
import { compare, hash } from "bcryptjs";

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

  .get("/", () => "Hello Elysia")
  // .use(import("./user/user").then((mod) => mod.default))
  .use(import("./user/user"))
  .listen({
    port: Bun.env.PORT ? Number(Bun.env.PORT) : 3000,
    // hostname: "103.82.249.140"
  });

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

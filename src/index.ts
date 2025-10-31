import { Elysia } from "elysia";

const app = new Elysia()
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

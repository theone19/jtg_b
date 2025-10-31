import { Elysia, t } from "elysia";
import prisma from "../db";

const userRoutes = new Elysia({ prefix: "/user"})
    .get("/", async () => {
        const users = await prisma.appUser.findMany();
        return users;
    });

export default userRoutes;
import { Elysia, t } from "elysia";
import prisma from "../db";

const userRoutes = new Elysia({ prefix: "/user"})
    .get("/", async () => {
        const users = await prisma.user.findMany();
        return users;
    });

export default userRoutes;
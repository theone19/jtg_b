import { Elysia, t } from "elysia";
import prisma from "../db";
import { MenuListPlainInputCreate } from "../../generated/prismabox/MenuList";

const menuRoutes = new Elysia({ prefix: "/menu"})
    .get("/", async () => {
        const menus = await prisma.menuList.findMany();
        return menus;
    })
    .get("/by-id/:id", async ({ params }) => {
        const menu = await prisma.menuList.findUnique({
            where: { menuId: Number(params.id) },
        });
        return menu;
    })
    .post("/create", async ({ body }) => {
        const newMenu = await prisma.menuList.create({
            data: body,
        });
        return newMenu;
    }, {
        body: MenuListPlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedMenu = await prisma.menuList.update({
            where: { menuId: Number(params.id) },   
            data: body,
        });
        return updatedMenu;
    }, {
        body: MenuListPlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedMenu = await prisma.menuList.delete({
            where: { menuId: Number(params.id) },
        });
        return deletedMenu;
    })

export default menuRoutes;
import { Elysia, t } from "elysia";
import prisma from "../db";
// import { SubMenuPlainInputCreate } from "../../generated/prismabox/SubMenu";

const SubMenuPlainInputCreate = t.Object({
  menuId: t.Integer(),
  subMenuName: t.String(),
  subMenuIcon: t.String(),
  subMenuRoute: t.String(),
  sorting: t.Integer(),  
});

const subMenuRoutes = new Elysia({ prefix: "/submenu" })
  .get("/", async () => {
    const submenus = await prisma.subMenu.findMany();
    return submenus;
  })
  .get("/by-menu-id/:id", async ({ params }) => {
    const submenu = await prisma.subMenu.findMany({
      where: { menuId: Number(params.id) },
    });
    return submenu;
  })
  .get("/by-sub-id/:id", async ({ params }) => {
    const submenu = await prisma.subMenu.findUnique({
      where: { subMenuId: Number(params.id) },
    });
    return submenu;
  })
  .post(
    "/create",
    async ({ body }) => {
      const newSubMenu = await prisma.subMenu.create({
        data: body,
      });
      return newSubMenu;
    },
    {
      body: SubMenuPlainInputCreate,
    }
  )
  .put(
    "/update/:id",
    async ({ params, body }) => {
      const updatedSubMenu = await prisma.subMenu.update({
        where: { subMenuId: Number(params.id) },
        data: body,
      });
      return updatedSubMenu;
    },
    {
      body: SubMenuPlainInputCreate,
    }
  )
  .delete("/delete/:id", async ({ params }) => {
    const deletedSubMenu = await prisma.subMenu.delete({
      where: { subMenuId: Number(params.id) },
    });
    return deletedSubMenu;
  });

export default subMenuRoutes;

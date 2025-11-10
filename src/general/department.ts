import { Elysia, t } from "elysia";
import prisma from "../db";
import { DepartmentPlainInputCreate } from "../../generated/prismabox/Department";

const departmentRoutes = new Elysia({ prefix: "/department"})
    .get("/", async () => {
        const departments = await prisma.department.findMany();
        return departments;
    })
    .get("/by-id/:id", async ({ params }) => {
        const department = await prisma.department.findUnique({
            where: { departmentId: Number(params.id) },
        });
        return department;
    })
    .post("/create", async ({ body }) => {
        const newDepartment = await prisma.department.create({
            data: body,
        });
        return newDepartment;
    }, {
        body: DepartmentPlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedDepartment = await prisma.department.update({
            where: { departmentId: Number(params.id) },   
            data: body,
        });
        return updatedDepartment;
    }, {
        body: DepartmentPlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedDepartment = await prisma.department.delete({
            where: { departmentId: Number(params.id) },
        });
        return deletedDepartment;
    })
    
;
export default departmentRoutes;
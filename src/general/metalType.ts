import { Elysia, t } from "elysia";
import prisma from "../db";
import { MetalTypePlainInputCreate } from "../../generated/prismabox/MetalType";

const metalTypeRoutes = new Elysia({ prefix: "/metal-type"})
    .get("/", async () => {
        const metalTypes = await prisma.metalType.findMany();
        return metalTypes;
    })
    .get("/by-id/:id", async ({ params }) => {
        const metalType = await prisma.metalType.findUnique({
            where: { metalTypeId: Number(params.id) },
        });
        return metalType;
    })
    .post("/create", async ({ body }) => {
        const newMetalType = await prisma.metalType.create({
            data: body,
        });
        return newMetalType;
    }, {
        body: MetalTypePlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedMetalType = await prisma.metalType.update({
            where: { metalTypeId: Number(params.id) },   
            data: body,
        });
        return updatedMetalType;
    }, {
        body: MetalTypePlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedMetalType = await prisma.metalType.delete({
            where: { metalTypeId: Number(params.id) },
        });
        return deletedMetalType;
    })
    
;
export default metalTypeRoutes;
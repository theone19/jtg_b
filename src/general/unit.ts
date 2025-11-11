import { Elysia, t } from "elysia";
import prisma from "../db";
import { UnitTypePlainInputCreate } from "../../generated/prismabox/UnitType";

const unitTypeRoutes = new Elysia({ prefix: "/unit-type"})
    .get("/", async () => {
        const unitTypes = await prisma.unitType.findMany();
        return unitTypes;
    })
    .get("/by-id/:id", async ({ params }) => {
        const unitType = await prisma.unitType.findUnique({
            where: { unitTypeId: Number(params.id) },
        });
        return unitType;
    })
    .post("/create", async ({ body }) => {
        const newUnitType = await prisma.unitType.create({
            data: body,
        });
        return newUnitType;
    }, {
        body: UnitTypePlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedUnitType = await prisma.unitType.update({
            where: { unitTypeId: Number(params.id) },   
            data: body,
        });
        return updatedUnitType;
    }, {
        body: UnitTypePlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedUnitType = await prisma.unitType.delete({
            where: { unitTypeId: Number(params.id) },
        });
        return deletedUnitType;
    })
    
;
export default unitTypeRoutes;
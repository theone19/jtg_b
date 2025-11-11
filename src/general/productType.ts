import { Elysia, t } from "elysia";
import prisma from "../db";
import { ProductTypePlainInputCreate } from "../../generated/prismabox/ProductType";

const productTypeRoutes = new Elysia({ prefix: "/product-type"})
    .get("/", async () => {
        const productTypes = await prisma.productType.findMany();
        return productTypes;
    })
    .get("/by-id/:id", async ({ params }) => {
        const productType = await prisma.productType.findUnique({
            where: { productTypeId: Number(params.id) },
        });
        return productType;
    })
    .post("/create", async ({ body }) => {
        const newProductType = await prisma.productType.create({
            data: body,
        });
        return newProductType;
    }, {
        body: ProductTypePlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedProductType = await prisma.productType.update({
            where: { productTypeId: Number(params.id) },   
            data: body,
        });
        return updatedProductType;
    }, {
        body: ProductTypePlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedProductType = await prisma.productType.delete({
            where: { productTypeId: Number(params.id) },
        });
        return deletedProductType;
    })
    
;
export default productTypeRoutes;
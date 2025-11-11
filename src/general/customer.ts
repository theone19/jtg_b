import { Elysia, t } from "elysia";
import prisma from "../db";
import { CustomerPlainInputCreate } from "../../generated/prismabox/Customer";

const CustomerRoutes = new Elysia({ prefix: "/customer"})
    .get("/", async () => {
        const customers = await prisma.customer.findMany();
        return customers;
    })
    .get("/by-id/:id", async ({ params }) => {
        const customer = await prisma.customer.findUnique({
            where: { customerId: Number(params.id) },
        });
        return customer;
    })
    .post("/create", async ({ body }) => {
        const newCustomer = await prisma.customer.create({
            data: body,
        });
        return newCustomer;
    }, {
        body: CustomerPlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedCustomer = await prisma.customer.update({
            where: { customerId: Number(params.id) },   
            data: body,
        });
        return updatedCustomer;
    }, {
        body: CustomerPlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedCustomer = await prisma.customer.delete({
            where: { customerId: Number(params.id) },
        });
        return deletedCustomer;
    })
    
;
export default CustomerRoutes;
import { Elysia, t } from "elysia";
import prisma from "../db";
// import { JobOrderPlainInputCreate } from "../../generated/prismabox/JobOrder";
import { __nullable__ } from "../../generated/prismabox/__nullable__";

const JobOrderPlainInputCreate = t.Object(
  {
    jobOrderNumber: t.String(),
    customerId: t.Integer(),
    jobDate: __nullable__(t.Date()),    
    customerBillNumber: __nullable__(t.String()),
    customerBillItemNo: __nullable__(t.Integer()),
    productTypeId: t.Integer(),
    metalTypeId: t.Integer(),
    qty: t.Integer(),
    unitTypeId: t.Integer(),
    weight: t.Number(),
    dueDate: __nullable__(t.Date()),
    billPicture: __nullable__(t.String()),
    status: t.String(),
    remarks: t.String(),
  }
);

const JobOrderRoutes = new Elysia({ prefix: "/job-order"})
    .get("/", async () => {
        const jobOrders = await prisma.jobOrder.findMany();
        return jobOrders;
    })
    .get("/by-id/:id", async ({ params }) => {
        const jobOrder = await prisma.jobOrder.findUnique({
            where: { jobOrderId: Number(params.id) },
        });
        return jobOrder;
    })
    .post("/create", async ({ body }) => {
        const newJobOrder = await prisma.jobOrder.create({
            data: body,
        });
        return newJobOrder;
    }, {
        body: JobOrderPlainInputCreate,
    })
    .put("/update/:id", async ({ params, body }) => {
        const updatedJobOrder = await prisma.jobOrder.update({
            where: { jobOrderId: Number(params.id) },
            data: body,
        });
        return updatedJobOrder;
    }, {
        body: JobOrderPlainInputCreate,
    })
    .delete("/delete/:id", async ({ params }) => {
        const deletedJobOrder = await prisma.jobOrder.delete({
            where: { jobOrderId: Number(params.id) },
        });
        return deletedJobOrder;
    })
    
;
export default JobOrderRoutes;
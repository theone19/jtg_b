import { Elysia, t } from "elysia";
import prisma from "../db";
// import { JobOrderPlainInputCreate } from "../../generated/prismabox/JobOrder";
import { __nullable__ } from "../../generated/prismabox/__nullable__";

const JobOrderPlainInputCreate = t.Object({
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
});

const JobOrderRoutes = new Elysia({ prefix: "/job-order" })
  .get("/", async () => {
    const jobOrders = await prisma.jobOrder.findMany();
    return jobOrders;
  })
  .get("/all", async () => {
    const jobOrders = await prisma.$queryRaw<[]>`
        select		jo.*, c.customerName, pt.productTypeName, mt.metalTypeName, ut.unitTypeName
        from		JobOrder jo
			left join Customer c on jo.customerId = c.customerId
			left join ProductType pt on jo.productTypeId = pt.productTypeId
			left join MetalType mt on jo.metalTypeId = mt.metalTypeId
			left join UnitType ut on jo.unitTypeId = ut.unitTypeId
        order by	jobOrderId       
      `;

    return jobOrders;
  })
  .get("/by-id/:id", async ({ params }) => {
    const jobOrder = await prisma.jobOrder.findUnique({
      where: { jobOrderId: Number(params.id) },
    });
    return jobOrder;
  })
  .post(
    "/create",
    async ({ body }) => {
      const newJobOrder = await prisma.jobOrder.create({
        data: body,
      });
      return newJobOrder;
    },
    {
      body: JobOrderPlainInputCreate,
    }
  )
  .post(
    "/createpic",
    async ({ body, set }) => {
      const { imageData, imageSave, ...insertData } = body;

      if (imageSave && !!imageData) {
        // --- 2. แยกส่วนประกอบของ Base64 Data URI ---
        // รูปแบบที่คาดหวัง: "data:image/png;base64,iVBORw0KGgo..."
        const matches = imageData.match(
          /^data:(image\/([a-zA-Z]+));base64,(.+)$/
        );

        if (!matches || matches.length !== 4) {
          set.status = 400; // Bad Request
          return { error: "รูปแบบ Base64 (Data URI) ไม่ถูกต้อง" };
        }

        // const mimeType = matches[1]; // เช่น 'image/png'
        const extension = matches[2]; // เช่น 'png', 'jpeg'
        const base64Data = matches[3]; // ข้อมูล Base64 ที่แท้จริง

        // --- 3. สร้างชื่อไฟล์ที่ไม่ซ้ำกัน ---
        const fileName = `${crypto.randomUUID()}.${extension}`;
        const filePath = `public/images/uploads/${fileName}`;

        const billPictureUrl = `/uploads/${fileName}`;

        try {
          // --- 4. แปลง Base64 เป็น Buffer ---
          // Buffer เป็นวิธีมาตรฐานในการจัดการข้อมูลไบนารี
          const buffer = Buffer.from(base64Data, "base64");

          // --- 5. บันทึกไฟล์ (ใช้ Bun.write) ---
          // Bun.write() เป็น API ที่เร็วมากสำหรับ I/O ใน Bun
          await Bun.write(filePath, buffer);
        } catch (error) {
          console.error("เกิดข้อผิดพลาดในการบันทึกไฟล์:", error);
          set.status = 500; // Internal Server Error
          return { error: "ไม่สามารถบันทึกไฟล์ลงในเซิร์ฟเวอร์ได้" };
        }

        insertData.billPicture = billPictureUrl;
      }

      // --- 6. บันทึกข้อมูลพนักงานลงฐานข้อมูล ---

      const newJobOrder = await prisma.jobOrder.create({
        data: insertData,
      });
      return newJobOrder;
    },
    {
      body: t.Object({
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
        imageData: __nullable__(t.String()),
        imageSave: t.Boolean(),
      }),
    }
  )
  .put(
    "/update/:id",
    async ({ params, body }) => {
      const updatedJobOrder = await prisma.jobOrder.update({
        where: { jobOrderId: Number(params.id) },
        data: body,
      });
      return updatedJobOrder;
    },
    {
      body: JobOrderPlainInputCreate,
    }
  )
  .put(
    "/updatepic/:id",
    async ({ params, body, set }) => {
      const { imageData, imageSave, ...insertData } = body;

      if (imageSave && !!imageData) {
        // --- 2. แยกส่วนประกอบของ Base64 Data URI ---
        // รูปแบบที่คาดหวัง: "data:image/png;base64,iVBORw0KGgo..."
        const matches = imageData.match(
          /^data:(image\/([a-zA-Z]+));base64,(.+)$/
        );

        if (!matches || matches.length !== 4) {
          set.status = 400; // Bad Request
          return { error: "รูปแบบ Base64 (Data URI) ไม่ถูกต้อง" };
        }

        // const mimeType = matches[1]; // เช่น 'image/png'
        const extension = matches[2]; // เช่น 'png', 'jpeg'
        const base64Data = matches[3]; // ข้อมูล Base64 ที่แท้จริง

        // --- 3. สร้างชื่อไฟล์ที่ไม่ซ้ำกัน ---
        const fileName = `${crypto.randomUUID()}.${extension}`;
        const filePath = `public/images/uploads/${fileName}`;

        const billPictureUrl = `/uploads/${fileName}`;

        try {
          // --- 4. แปลง Base64 เป็น Buffer ---
          // Buffer เป็นวิธีมาตรฐานในการจัดการข้อมูลไบนารี
          const buffer = Buffer.from(base64Data, "base64");

          // --- 5. บันทึกไฟล์ (ใช้ Bun.write) ---
          // Bun.write() เป็น API ที่เร็วมากสำหรับ I/O ใน Bun
          await Bun.write(filePath, buffer);
        } catch (error) {
          console.error("เกิดข้อผิดพลาดในการบันทึกไฟล์:", error);
          set.status = 500; // Internal Server Error
          return { error: "ไม่สามารถบันทึกไฟล์ลงในเซิร์ฟเวอร์ได้" };
        }

        insertData.billPicture = billPictureUrl;
      }

      // --- 6. บันทึกข้อมูลพนักงานลงฐานข้อมูล ---

      const updatedJobOrder = await prisma.jobOrder.update({
        where: { jobOrderId: Number(params.id) },
        data: insertData,
      });
      return updatedJobOrder;
    },
    {
      body: t.Object({
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
        imageData: __nullable__(t.String()),
        imageSave: t.Boolean(),
      }),
    }
  )
  .delete("/delete/:id", async ({ params }) => {
    const deletedJobOrder = await prisma.jobOrder.delete({
      where: { jobOrderId: Number(params.id) },
    });
    return deletedJobOrder;
  });

export default JobOrderRoutes;

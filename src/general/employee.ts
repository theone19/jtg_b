import { Elysia, t } from "elysia";
import prisma from "../db";
import { __nullable__ } from "../../generated/prismabox/__nullable__";
// import { EmployeePlainInputCreate } from "../../generated/prismabox/Employee";

const EmployeePlainInputCreate = t.Object({
  namePrefix: t.String(),
  firstName: t.String(),
  lastName: t.String(),
  email: t.String(),
  phoneNumber: t.String(),
  hireDate: t.Date(),
  jobTitle: t.String(),
  departmentId: t.Integer(),
  birthDate: t.Date(),
  idCardNumber: t.String(),
  address: t.String(),
  salary: t.Number(),
  remarks: t.String(),
  isWorking: t.Boolean(),
  empPicture: t.String(),
});

const employeeRoutes = new Elysia({ prefix: "/employee" })
  .get("/", async () => {
    const employees = await prisma.employee.findMany();
    return employees;
  })
  .get("/all", async () => {
    const employees = await prisma.$queryRaw<[]>`
        SELECT e.*, d.departmentName, e.firstName+ ' ' + e.lastName AS fullName        
        FROM Employee AS e
        LEFT JOIN Department AS d ON e.departmentId = d.departmentId        
      `;

    return employees;
  })
  .get("/by-id/:id", async ({ params }) => {
    const employee = await prisma.employee.findUnique({
      where: { employeeId: Number(params.id) },
    });
    return employee;
  })
  .post(
    "/create",
    async ({ body }) => {
      console.log("Creating employee with data:", body);
      const newEmployee = await prisma.employee.create({
        data: body,
      });
      return newEmployee;
    },
    {
      body: EmployeePlainInputCreate,
    }
  )
  .post(
    "/createpic",
    async ({ body, set }) => {
      const { imageData, ...insertData } = body;

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

      const empPictureUrl = `/uploads/${fileName}`;

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

      insertData.empPicture = empPictureUrl;

      // --- 6. บันทึกข้อมูลพนักงานลงฐานข้อมูล ---

      const newEmployee = await prisma.employee.create({
        data: insertData,
      });
      set.status = 201; // Created
      return newEmployee;
    },
    {
      body: t.Object({
        namePrefix: t.String(),
        firstName: t.String(),
        lastName: t.String(),
        email: t.String(),
        phoneNumber: t.String(),
        hireDate: t.Date(),
        jobTitle: t.String(),
        departmentId: t.Integer(),
        birthDate: t.Date(),
        idCardNumber: __nullable__(t.String()),
        address: t.String(),
        salary: t.Number(),
        remarks: t.String(),
        isWorking: t.Boolean(),
        empPicture: __nullable__(t.String()),
        imageData: t.String({
          // ตรวจสอบเบื้องต้นว่ามี prefix ที่ถูกต้อง
          pattern: "^data:image\/[a-zA-Z]+;base64,",
          error: "imageData ต้องเป็น Base64 Data URI ที่ถูกต้อง",
        }),
      }),
    }
  )
  .put(
    "/update/:id",
    async ({ params, body }) => {
      const updatedEmployee = await prisma.employee.update({
        where: { employeeId: Number(params.id) },
        data: body,
      });
      return updatedEmployee;
    },
    {
      body: EmployeePlainInputCreate,
    }
  )
  .delete("/delete/:id", async ({ params }) => {
    const deletedEmployee = await prisma.employee.delete({
      where: { employeeId: Number(params.id) },
    });
    return deletedEmployee;
  });

export default employeeRoutes;

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const EmployeePlain = t.Object(
  {
    employeeId: t.Integer(),
    namePrefix: __nullable__(t.String()),
    firstName: t.String(),
    lastName: t.String(),
    email: __nullable__(t.String()),
    phoneNumber: __nullable__(t.String()),
    hireDate: __nullable__(t.Date()),
    jobTitle: __nullable__(t.String()),
    departmentId: t.Integer(),
    birthDate: __nullable__(t.Date()),
    idCardNumber: __nullable__(t.String()),
    address: __nullable__(t.String()),
    salary: __nullable__(t.Number()),
    remarks: __nullable__(t.String()),
    isWorking: t.Boolean(),
    empPicture: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const EmployeeRelations = t.Object(
  {
    department: t.Object(
      {
        departmentId: t.Integer(),
        departmentName: t.String(),
        isActive: t.Boolean(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const EmployeePlainInputCreate = t.Object(
  {
    namePrefix: t.Optional(__nullable__(t.String())),
    firstName: t.String(),
    lastName: t.String(),
    email: t.Optional(__nullable__(t.String())),
    phoneNumber: t.Optional(__nullable__(t.String())),
    hireDate: t.Optional(__nullable__(t.Date())),
    jobTitle: t.Optional(__nullable__(t.String())),
    birthDate: t.Optional(__nullable__(t.Date())),
    idCardNumber: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
    salary: t.Optional(__nullable__(t.Number())),
    remarks: t.Optional(__nullable__(t.String())),
    isWorking: t.Optional(t.Boolean()),
    empPicture: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const EmployeePlainInputUpdate = t.Object(
  {
    namePrefix: t.Optional(__nullable__(t.String())),
    firstName: t.Optional(t.String()),
    lastName: t.Optional(t.String()),
    email: t.Optional(__nullable__(t.String())),
    phoneNumber: t.Optional(__nullable__(t.String())),
    hireDate: t.Optional(__nullable__(t.Date())),
    jobTitle: t.Optional(__nullable__(t.String())),
    birthDate: t.Optional(__nullable__(t.Date())),
    idCardNumber: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
    salary: t.Optional(__nullable__(t.Number())),
    remarks: t.Optional(__nullable__(t.String())),
    isWorking: t.Optional(t.Boolean()),
    empPicture: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const EmployeeRelationsInputCreate = t.Object(
  {
    department: t.Object(
      {
        connect: t.Object(
          {
            id: t.Integer({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const EmployeeRelationsInputUpdate = t.Partial(
  t.Object(
    {
      department: t.Object(
        {
          connect: t.Object(
            {
              id: t.Integer({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    },
    { additionalProperties: false },
  ),
);

export const EmployeeWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          employeeId: t.Integer(),
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
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Employee" },
  ),
);

export const EmployeeWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { employeeId: t.Integer(), email: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ employeeId: t.Integer() }),
            t.Object({ email: t.String() }),
          ],
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              employeeId: t.Integer(),
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
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Employee" },
);

export const EmployeeSelect = t.Partial(
  t.Object(
    {
      employeeId: t.Boolean(),
      namePrefix: t.Boolean(),
      firstName: t.Boolean(),
      lastName: t.Boolean(),
      email: t.Boolean(),
      phoneNumber: t.Boolean(),
      hireDate: t.Boolean(),
      jobTitle: t.Boolean(),
      departmentId: t.Boolean(),
      birthDate: t.Boolean(),
      idCardNumber: t.Boolean(),
      address: t.Boolean(),
      salary: t.Boolean(),
      remarks: t.Boolean(),
      isWorking: t.Boolean(),
      empPicture: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      department: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const EmployeeInclude = t.Partial(
  t.Object(
    { department: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const EmployeeOrderBy = t.Partial(
  t.Object(
    {
      employeeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      namePrefix: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      firstName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      lastName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phoneNumber: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      hireDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      jobTitle: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      departmentId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      birthDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      idCardNumber: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      salary: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      remarks: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isWorking: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      empPicture: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Employee = t.Composite([EmployeePlain, EmployeeRelations], {
  additionalProperties: false,
});

export const EmployeeInputCreate = t.Composite(
  [EmployeePlainInputCreate, EmployeeRelationsInputCreate],
  { additionalProperties: false },
);

export const EmployeeInputUpdate = t.Composite(
  [EmployeePlainInputUpdate, EmployeeRelationsInputUpdate],
  { additionalProperties: false },
);

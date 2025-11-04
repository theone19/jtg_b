import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const DepartmentPlain = t.Object(
  {
    departmentId: t.Integer(),
    departmentName: t.String(),
    isActive: t.Boolean(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const DepartmentRelations = t.Object(
  {
    Employee: t.Array(
      t.Object(
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
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const DepartmentPlainInputCreate = t.Object(
  { departmentName: t.String(), isActive: t.Optional(t.Boolean()) },
  { additionalProperties: false },
);

export const DepartmentPlainInputUpdate = t.Object(
  { departmentName: t.Optional(t.String()), isActive: t.Optional(t.Boolean()) },
  { additionalProperties: false },
);

export const DepartmentRelationsInputCreate = t.Object(
  {
    Employee: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.Integer({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const DepartmentRelationsInputUpdate = t.Partial(
  t.Object(
    {
      Employee: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.Integer({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const DepartmentWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          departmentId: t.Integer(),
          departmentName: t.String(),
          isActive: t.Boolean(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Department" },
  ),
);

export const DepartmentWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { departmentId: t.Integer() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ departmentId: t.Integer() })], {
          additionalProperties: false,
        }),
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
              departmentId: t.Integer(),
              departmentName: t.String(),
              isActive: t.Boolean(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Department" },
);

export const DepartmentSelect = t.Partial(
  t.Object(
    {
      departmentId: t.Boolean(),
      departmentName: t.Boolean(),
      isActive: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      Employee: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const DepartmentInclude = t.Partial(
  t.Object(
    { Employee: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const DepartmentOrderBy = t.Partial(
  t.Object(
    {
      departmentId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      departmentName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isActive: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Department = t.Composite([DepartmentPlain, DepartmentRelations], {
  additionalProperties: false,
});

export const DepartmentInputCreate = t.Composite(
  [DepartmentPlainInputCreate, DepartmentRelationsInputCreate],
  { additionalProperties: false },
);

export const DepartmentInputUpdate = t.Composite(
  [DepartmentPlainInputUpdate, DepartmentRelationsInputUpdate],
  { additionalProperties: false },
);

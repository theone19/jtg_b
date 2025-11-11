import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const JobOrderPlain = t.Object(
  {
    jobOrderId: t.Integer(),
    jobOrderNumber: t.String(),
    customerId: t.Integer(),
    jobDate: __nullable__(t.Date()),
    customerBillNumber: __nullable__(t.String()),
    customerBillItemNo: __nullable__(t.Integer()),
    productTypeId: t.Integer(),
    metalTypeId: t.Integer(),
    qty: t.Integer(),
    weight: __nullable__(t.Number()),
    dueDate: __nullable__(t.Date()),
    status: t.String(),
    remarks: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const JobOrderRelations = t.Object({}, { additionalProperties: false });

export const JobOrderPlainInputCreate = t.Object(
  {
    jobOrderNumber: t.String(),
    jobDate: t.Optional(__nullable__(t.Date())),
    customerBillNumber: t.Optional(__nullable__(t.String())),
    customerBillItemNo: t.Optional(__nullable__(t.Integer())),
    qty: t.Optional(t.Integer()),
    weight: t.Optional(__nullable__(t.Number())),
    dueDate: t.Optional(__nullable__(t.Date())),
    status: t.Optional(t.String()),
    remarks: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const JobOrderPlainInputUpdate = t.Object(
  {
    jobOrderNumber: t.Optional(t.String()),
    jobDate: t.Optional(__nullable__(t.Date())),
    customerBillNumber: t.Optional(__nullable__(t.String())),
    customerBillItemNo: t.Optional(__nullable__(t.Integer())),
    qty: t.Optional(t.Integer()),
    weight: t.Optional(__nullable__(t.Number())),
    dueDate: t.Optional(__nullable__(t.Date())),
    status: t.Optional(t.String()),
    remarks: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const JobOrderRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const JobOrderRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const JobOrderWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          jobOrderId: t.Integer(),
          jobOrderNumber: t.String(),
          customerId: t.Integer(),
          jobDate: t.Date(),
          customerBillNumber: t.String(),
          customerBillItemNo: t.Integer(),
          productTypeId: t.Integer(),
          metalTypeId: t.Integer(),
          qty: t.Integer(),
          weight: t.Number(),
          dueDate: t.Date(),
          status: t.String(),
          remarks: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "JobOrder" },
  ),
);

export const JobOrderWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { jobOrderId: t.Integer(), jobOrderNumber: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ jobOrderId: t.Integer() }),
            t.Object({ jobOrderNumber: t.String() }),
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
              jobOrderId: t.Integer(),
              jobOrderNumber: t.String(),
              customerId: t.Integer(),
              jobDate: t.Date(),
              customerBillNumber: t.String(),
              customerBillItemNo: t.Integer(),
              productTypeId: t.Integer(),
              metalTypeId: t.Integer(),
              qty: t.Integer(),
              weight: t.Number(),
              dueDate: t.Date(),
              status: t.String(),
              remarks: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "JobOrder" },
);

export const JobOrderSelect = t.Partial(
  t.Object(
    {
      jobOrderId: t.Boolean(),
      jobOrderNumber: t.Boolean(),
      customerId: t.Boolean(),
      jobDate: t.Boolean(),
      customerBillNumber: t.Boolean(),
      customerBillItemNo: t.Boolean(),
      productTypeId: t.Boolean(),
      metalTypeId: t.Boolean(),
      qty: t.Boolean(),
      weight: t.Boolean(),
      dueDate: t.Boolean(),
      status: t.Boolean(),
      remarks: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const JobOrderInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const JobOrderOrderBy = t.Partial(
  t.Object(
    {
      jobOrderId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      jobOrderNumber: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customerId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      jobDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customerBillNumber: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customerBillItemNo: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productTypeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metalTypeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      qty: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      weight: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      dueDate: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      status: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      remarks: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const JobOrder = t.Composite([JobOrderPlain, JobOrderRelations], {
  additionalProperties: false,
});

export const JobOrderInputCreate = t.Composite(
  [JobOrderPlainInputCreate, JobOrderRelationsInputCreate],
  { additionalProperties: false },
);

export const JobOrderInputUpdate = t.Composite(
  [JobOrderPlainInputUpdate, JobOrderRelationsInputUpdate],
  { additionalProperties: false },
);

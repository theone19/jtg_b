import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const CustomerPlain = t.Object(
  {
    customerId: t.Integer(),
    customerName: t.String(),
    contactName: __nullable__(t.String()),
    address: __nullable__(t.String()),
    city: __nullable__(t.String()),
    postalCode: __nullable__(t.String()),
    country: t.String(),
    phone: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const CustomerRelations = t.Object({}, { additionalProperties: false });

export const CustomerPlainInputCreate = t.Object(
  {
    customerName: t.String(),
    contactName: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
    city: t.Optional(__nullable__(t.String())),
    postalCode: t.Optional(__nullable__(t.String())),
    country: t.Optional(t.String()),
    phone: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const CustomerPlainInputUpdate = t.Object(
  {
    customerName: t.Optional(t.String()),
    contactName: t.Optional(__nullable__(t.String())),
    address: t.Optional(__nullable__(t.String())),
    city: t.Optional(__nullable__(t.String())),
    postalCode: t.Optional(__nullable__(t.String())),
    country: t.Optional(t.String()),
    phone: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const CustomerRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const CustomerRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const CustomerWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          customerId: t.Integer(),
          customerName: t.String(),
          contactName: t.String(),
          address: t.String(),
          city: t.String(),
          postalCode: t.String(),
          country: t.String(),
          phone: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Customer" },
  ),
);

export const CustomerWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { customerId: t.Integer() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ customerId: t.Integer() })], {
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
              customerId: t.Integer(),
              customerName: t.String(),
              contactName: t.String(),
              address: t.String(),
              city: t.String(),
              postalCode: t.String(),
              country: t.String(),
              phone: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Customer" },
);

export const CustomerSelect = t.Partial(
  t.Object(
    {
      customerId: t.Boolean(),
      customerName: t.Boolean(),
      contactName: t.Boolean(),
      address: t.Boolean(),
      city: t.Boolean(),
      postalCode: t.Boolean(),
      country: t.Boolean(),
      phone: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const CustomerInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const CustomerOrderBy = t.Partial(
  t.Object(
    {
      customerId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      customerName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      contactName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      address: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      city: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      postalCode: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      country: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      phone: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const Customer = t.Composite([CustomerPlain, CustomerRelations], {
  additionalProperties: false,
});

export const CustomerInputCreate = t.Composite(
  [CustomerPlainInputCreate, CustomerRelationsInputCreate],
  { additionalProperties: false },
);

export const CustomerInputUpdate = t.Composite(
  [CustomerPlainInputUpdate, CustomerRelationsInputUpdate],
  { additionalProperties: false },
);

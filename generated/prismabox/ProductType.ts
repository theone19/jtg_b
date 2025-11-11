import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const ProductTypePlain = t.Object(
  {
    productTypeId: t.Integer(),
    productTypeName: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const ProductTypeRelations = t.Object(
  {},
  { additionalProperties: false },
);

export const ProductTypePlainInputCreate = t.Object(
  { productTypeName: t.String() },
  { additionalProperties: false },
);

export const ProductTypePlainInputUpdate = t.Object(
  { productTypeName: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const ProductTypeRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const ProductTypeRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const ProductTypeWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          productTypeId: t.Integer(),
          productTypeName: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "ProductType" },
  ),
);

export const ProductTypeWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { productTypeId: t.Integer() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ productTypeId: t.Integer() })], {
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
              productTypeId: t.Integer(),
              productTypeName: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "ProductType" },
);

export const ProductTypeSelect = t.Partial(
  t.Object(
    {
      productTypeId: t.Boolean(),
      productTypeName: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const ProductTypeInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const ProductTypeOrderBy = t.Partial(
  t.Object(
    {
      productTypeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      productTypeName: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const ProductType = t.Composite(
  [ProductTypePlain, ProductTypeRelations],
  { additionalProperties: false },
);

export const ProductTypeInputCreate = t.Composite(
  [ProductTypePlainInputCreate, ProductTypeRelationsInputCreate],
  { additionalProperties: false },
);

export const ProductTypeInputUpdate = t.Composite(
  [ProductTypePlainInputUpdate, ProductTypeRelationsInputUpdate],
  { additionalProperties: false },
);

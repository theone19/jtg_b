import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const MetalTypePlain = t.Object(
  {
    metalTypeId: t.Integer(),
    metalTypeName: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const MetalTypeRelations = t.Object({}, { additionalProperties: false });

export const MetalTypePlainInputCreate = t.Object(
  { metalTypeName: t.String() },
  { additionalProperties: false },
);

export const MetalTypePlainInputUpdate = t.Object(
  { metalTypeName: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const MetalTypeRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const MetalTypeRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const MetalTypeWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          metalTypeId: t.Integer(),
          metalTypeName: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "MetalType" },
  ),
);

export const MetalTypeWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { metalTypeId: t.Integer() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ metalTypeId: t.Integer() })], {
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
              metalTypeId: t.Integer(),
              metalTypeName: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "MetalType" },
);

export const MetalTypeSelect = t.Partial(
  t.Object(
    {
      metalTypeId: t.Boolean(),
      metalTypeName: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const MetalTypeInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const MetalTypeOrderBy = t.Partial(
  t.Object(
    {
      metalTypeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      metalTypeName: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const MetalType = t.Composite([MetalTypePlain, MetalTypeRelations], {
  additionalProperties: false,
});

export const MetalTypeInputCreate = t.Composite(
  [MetalTypePlainInputCreate, MetalTypeRelationsInputCreate],
  { additionalProperties: false },
);

export const MetalTypeInputUpdate = t.Composite(
  [MetalTypePlainInputUpdate, MetalTypeRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const UnitTypePlain = t.Object(
  {
    unitTypeId: t.Integer(),
    unitTypeName: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const UnitTypeRelations = t.Object({}, { additionalProperties: false });

export const UnitTypePlainInputCreate = t.Object(
  { unitTypeName: t.String() },
  { additionalProperties: false },
);

export const UnitTypePlainInputUpdate = t.Object(
  { unitTypeName: t.Optional(t.String()) },
  { additionalProperties: false },
);

export const UnitTypeRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const UnitTypeRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const UnitTypeWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          unitTypeId: t.Integer(),
          unitTypeName: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "UnitType" },
  ),
);

export const UnitTypeWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { unitTypeId: t.Integer() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ unitTypeId: t.Integer() })], {
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
              unitTypeId: t.Integer(),
              unitTypeName: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "UnitType" },
);

export const UnitTypeSelect = t.Partial(
  t.Object(
    {
      unitTypeId: t.Boolean(),
      unitTypeName: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const UnitTypeInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const UnitTypeOrderBy = t.Partial(
  t.Object(
    {
      unitTypeId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      unitTypeName: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const UnitType = t.Composite([UnitTypePlain, UnitTypeRelations], {
  additionalProperties: false,
});

export const UnitTypeInputCreate = t.Composite(
  [UnitTypePlainInputCreate, UnitTypeRelationsInputCreate],
  { additionalProperties: false },
);

export const UnitTypeInputUpdate = t.Composite(
  [UnitTypePlainInputUpdate, UnitTypeRelationsInputUpdate],
  { additionalProperties: false },
);

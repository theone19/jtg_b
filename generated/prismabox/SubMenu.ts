import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const SubMenuPlain = t.Object(
  {
    subMenuId: t.Integer(),
    menuId: t.Integer(),
    subMenuName: t.String(),
    subMenuIcon: t.String(),
    subMenuRoute: t.String(),
    sorting: t.Integer(),
    isActive: t.Boolean(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const SubMenuRelations = t.Object(
  {
    menuList: t.Object(
      {
        menuId: t.Integer(),
        menuName: t.String(),
        menuIcon: t.String(),
        sorting: t.Integer(),
        isActive: t.Boolean(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const SubMenuPlainInputCreate = t.Object(
  {
    subMenuName: t.String(),
    subMenuIcon: t.String(),
    subMenuRoute: t.String(),
    sorting: t.Optional(t.Integer()),
    isActive: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const SubMenuPlainInputUpdate = t.Object(
  {
    subMenuName: t.Optional(t.String()),
    subMenuIcon: t.Optional(t.String()),
    subMenuRoute: t.Optional(t.String()),
    sorting: t.Optional(t.Integer()),
    isActive: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const SubMenuRelationsInputCreate = t.Object(
  {
    menuList: t.Object(
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

export const SubMenuRelationsInputUpdate = t.Partial(
  t.Object(
    {
      menuList: t.Object(
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

export const SubMenuWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          subMenuId: t.Integer(),
          menuId: t.Integer(),
          subMenuName: t.String(),
          subMenuIcon: t.String(),
          subMenuRoute: t.String(),
          sorting: t.Integer(),
          isActive: t.Boolean(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "SubMenu" },
  ),
);

export const SubMenuWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ subMenuId: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ subMenuId: t.Integer() })], {
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
              subMenuId: t.Integer(),
              menuId: t.Integer(),
              subMenuName: t.String(),
              subMenuIcon: t.String(),
              subMenuRoute: t.String(),
              sorting: t.Integer(),
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
  { $id: "SubMenu" },
);

export const SubMenuSelect = t.Partial(
  t.Object(
    {
      subMenuId: t.Boolean(),
      menuId: t.Boolean(),
      subMenuName: t.Boolean(),
      subMenuIcon: t.Boolean(),
      subMenuRoute: t.Boolean(),
      sorting: t.Boolean(),
      isActive: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      menuList: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const SubMenuInclude = t.Partial(
  t.Object(
    { menuList: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const SubMenuOrderBy = t.Partial(
  t.Object(
    {
      subMenuId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      menuId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subMenuName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subMenuIcon: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      subMenuRoute: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      sorting: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const SubMenu = t.Composite([SubMenuPlain, SubMenuRelations], {
  additionalProperties: false,
});

export const SubMenuInputCreate = t.Composite(
  [SubMenuPlainInputCreate, SubMenuRelationsInputCreate],
  { additionalProperties: false },
);

export const SubMenuInputUpdate = t.Composite(
  [SubMenuPlainInputUpdate, SubMenuRelationsInputUpdate],
  { additionalProperties: false },
);

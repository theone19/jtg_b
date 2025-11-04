import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const MenuListPlain = t.Object(
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
);

export const MenuListRelations = t.Object(
  {
    SubMenu: t.Array(
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
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const MenuListPlainInputCreate = t.Object(
  {
    menuName: t.String(),
    menuIcon: t.String(),
    sorting: t.Optional(t.Integer()),
    isActive: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const MenuListPlainInputUpdate = t.Object(
  {
    menuName: t.Optional(t.String()),
    menuIcon: t.Optional(t.String()),
    sorting: t.Optional(t.Integer()),
    isActive: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const MenuListRelationsInputCreate = t.Object(
  {
    SubMenu: t.Optional(
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

export const MenuListRelationsInputUpdate = t.Partial(
  t.Object(
    {
      SubMenu: t.Partial(
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

export const MenuListWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
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
    { $id: "MenuList" },
  ),
);

export const MenuListWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object({ menuId: t.Integer() }, { additionalProperties: false }),
          { additionalProperties: false },
        ),
        t.Union([t.Object({ menuId: t.Integer() })], {
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
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "MenuList" },
);

export const MenuListSelect = t.Partial(
  t.Object(
    {
      menuId: t.Boolean(),
      menuName: t.Boolean(),
      menuIcon: t.Boolean(),
      sorting: t.Boolean(),
      isActive: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      SubMenu: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const MenuListInclude = t.Partial(
  t.Object(
    { SubMenu: t.Boolean(), _count: t.Boolean() },
    { additionalProperties: false },
  ),
);

export const MenuListOrderBy = t.Partial(
  t.Object(
    {
      menuId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      menuName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      menuIcon: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const MenuList = t.Composite([MenuListPlain, MenuListRelations], {
  additionalProperties: false,
});

export const MenuListInputCreate = t.Composite(
  [MenuListPlainInputCreate, MenuListRelationsInputCreate],
  { additionalProperties: false },
);

export const MenuListInputUpdate = t.Composite(
  [MenuListPlainInputUpdate, MenuListRelationsInputUpdate],
  { additionalProperties: false },
);

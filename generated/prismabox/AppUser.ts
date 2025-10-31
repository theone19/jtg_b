import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AppUserPlain = t.Object(
  {
    userId: t.Integer(),
    userName: t.String(),
    email: t.String(),
    password: t.String(),
    fullName: t.String(),
    mobileNo: __nullable__(t.String()),
    isActive: t.Boolean(),
    isAdmin: t.Boolean(),
    isLimitDevices: t.Boolean(),
    limitDeviceCount: __nullable__(t.Integer()),
    profilePic: __nullable__(t.String()),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const AppUserRelations = t.Object({}, { additionalProperties: false });

export const AppUserPlainInputCreate = t.Object(
  {
    userName: t.String(),
    email: t.String(),
    password: t.String(),
    fullName: t.String(),
    mobileNo: t.Optional(__nullable__(t.String())),
    isActive: t.Optional(t.Boolean()),
    isAdmin: t.Optional(t.Boolean()),
    isLimitDevices: t.Optional(t.Boolean()),
    limitDeviceCount: t.Optional(__nullable__(t.Integer())),
    profilePic: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const AppUserPlainInputUpdate = t.Object(
  {
    userName: t.Optional(t.String()),
    email: t.Optional(t.String()),
    password: t.Optional(t.String()),
    fullName: t.Optional(t.String()),
    mobileNo: t.Optional(__nullable__(t.String())),
    isActive: t.Optional(t.Boolean()),
    isAdmin: t.Optional(t.Boolean()),
    isLimitDevices: t.Optional(t.Boolean()),
    limitDeviceCount: t.Optional(__nullable__(t.Integer())),
    profilePic: t.Optional(__nullable__(t.String())),
  },
  { additionalProperties: false },
);

export const AppUserRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const AppUserRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const AppUserWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          userId: t.Integer(),
          userName: t.String(),
          email: t.String(),
          password: t.String(),
          fullName: t.String(),
          mobileNo: t.String(),
          isActive: t.Boolean(),
          isAdmin: t.Boolean(),
          isLimitDevices: t.Boolean(),
          limitDeviceCount: t.Integer(),
          profilePic: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "AppUser" },
  ),
);

export const AppUserWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { userId: t.Integer(), userName: t.String(), email: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ userId: t.Integer() }),
            t.Object({ userName: t.String() }),
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
              userId: t.Integer(),
              userName: t.String(),
              email: t.String(),
              password: t.String(),
              fullName: t.String(),
              mobileNo: t.String(),
              isActive: t.Boolean(),
              isAdmin: t.Boolean(),
              isLimitDevices: t.Boolean(),
              limitDeviceCount: t.Integer(),
              profilePic: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "AppUser" },
);

export const AppUserSelect = t.Partial(
  t.Object(
    {
      userId: t.Boolean(),
      userName: t.Boolean(),
      email: t.Boolean(),
      password: t.Boolean(),
      fullName: t.Boolean(),
      mobileNo: t.Boolean(),
      isActive: t.Boolean(),
      isAdmin: t.Boolean(),
      isLimitDevices: t.Boolean(),
      limitDeviceCount: t.Boolean(),
      profilePic: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const AppUserInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const AppUserOrderBy = t.Partial(
  t.Object(
    {
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      email: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      password: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      fullName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      mobileNo: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isActive: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isAdmin: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      isLimitDevices: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      limitDeviceCount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      profilePic: t.Union([t.Literal("asc"), t.Literal("desc")], {
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

export const AppUser = t.Composite([AppUserPlain, AppUserRelations], {
  additionalProperties: false,
});

export const AppUserInputCreate = t.Composite(
  [AppUserPlainInputCreate, AppUserRelationsInputCreate],
  { additionalProperties: false },
);

export const AppUserInputUpdate = t.Composite(
  [AppUserPlainInputUpdate, AppUserRelationsInputUpdate],
  { additionalProperties: false },
);

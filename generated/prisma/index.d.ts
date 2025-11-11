
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model MenuList
 * 
 */
export type MenuList = $Result.DefaultSelection<Prisma.$MenuListPayload>
/**
 * Model SubMenu
 * 
 */
export type SubMenu = $Result.DefaultSelection<Prisma.$SubMenuPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model ProductType
 * 
 */
export type ProductType = $Result.DefaultSelection<Prisma.$ProductTypePayload>
/**
 * Model MetalType
 * 
 */
export type MetalType = $Result.DefaultSelection<Prisma.$MetalTypePayload>
/**
 * Model UnitType
 * 
 */
export type UnitType = $Result.DefaultSelection<Prisma.$UnitTypePayload>
/**
 * Model JobOrder
 * 
 */
export type JobOrder = $Result.DefaultSelection<Prisma.$JobOrderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuList`: Exposes CRUD operations for the **MenuList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuLists
    * const menuLists = await prisma.menuList.findMany()
    * ```
    */
  get menuList(): Prisma.MenuListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subMenu`: Exposes CRUD operations for the **SubMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubMenus
    * const subMenus = await prisma.subMenu.findMany()
    * ```
    */
  get subMenu(): Prisma.SubMenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productType`: Exposes CRUD operations for the **ProductType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductTypes
    * const productTypes = await prisma.productType.findMany()
    * ```
    */
  get productType(): Prisma.ProductTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metalType`: Exposes CRUD operations for the **MetalType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetalTypes
    * const metalTypes = await prisma.metalType.findMany()
    * ```
    */
  get metalType(): Prisma.MetalTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitType`: Exposes CRUD operations for the **UnitType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitTypes
    * const unitTypes = await prisma.unitType.findMany()
    * ```
    */
  get unitType(): Prisma.UnitTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobOrder`: Exposes CRUD operations for the **JobOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobOrders
    * const jobOrders = await prisma.jobOrder.findMany()
    * ```
    */
  get jobOrder(): Prisma.JobOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AppUser: 'AppUser',
    MenuList: 'MenuList',
    SubMenu: 'SubMenu',
    Department: 'Department',
    Employee: 'Employee',
    Customer: 'Customer',
    ProductType: 'ProductType',
    MetalType: 'MetalType',
    UnitType: 'UnitType',
    JobOrder: 'JobOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "appUser" | "menuList" | "subMenu" | "department" | "employee" | "customer" | "productType" | "metalType" | "unitType" | "jobOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      MenuList: {
        payload: Prisma.$MenuListPayload<ExtArgs>
        fields: Prisma.MenuListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>
          }
          findFirst: {
            args: Prisma.MenuListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>
          }
          findMany: {
            args: Prisma.MenuListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>[]
          }
          create: {
            args: Prisma.MenuListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>
          }
          createMany: {
            args: Prisma.MenuListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>
          }
          update: {
            args: Prisma.MenuListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>
          }
          deleteMany: {
            args: Prisma.MenuListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuListPayload>
          }
          aggregate: {
            args: Prisma.MenuListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuList>
          }
          groupBy: {
            args: Prisma.MenuListGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuListGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuListCountArgs<ExtArgs>
            result: $Utils.Optional<MenuListCountAggregateOutputType> | number
          }
        }
      }
      SubMenu: {
        payload: Prisma.$SubMenuPayload<ExtArgs>
        fields: Prisma.SubMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          findFirst: {
            args: Prisma.SubMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          findMany: {
            args: Prisma.SubMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>[]
          }
          create: {
            args: Prisma.SubMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          createMany: {
            args: Prisma.SubMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          update: {
            args: Prisma.SubMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          deleteMany: {
            args: Prisma.SubMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          aggregate: {
            args: Prisma.SubMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubMenu>
          }
          groupBy: {
            args: Prisma.SubMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubMenuCountArgs<ExtArgs>
            result: $Utils.Optional<SubMenuCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      ProductType: {
        payload: Prisma.$ProductTypePayload<ExtArgs>
        fields: Prisma.ProductTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findFirst: {
            args: Prisma.ProductTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          findMany: {
            args: Prisma.ProductTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>[]
          }
          create: {
            args: Prisma.ProductTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          createMany: {
            args: Prisma.ProductTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          update: {
            args: Prisma.ProductTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          deleteMany: {
            args: Prisma.ProductTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductTypePayload>
          }
          aggregate: {
            args: Prisma.ProductTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductType>
          }
          groupBy: {
            args: Prisma.ProductTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductTypeCountAggregateOutputType> | number
          }
        }
      }
      MetalType: {
        payload: Prisma.$MetalTypePayload<ExtArgs>
        fields: Prisma.MetalTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetalTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetalTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>
          }
          findFirst: {
            args: Prisma.MetalTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetalTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>
          }
          findMany: {
            args: Prisma.MetalTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>[]
          }
          create: {
            args: Prisma.MetalTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>
          }
          createMany: {
            args: Prisma.MetalTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetalTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>
          }
          update: {
            args: Prisma.MetalTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>
          }
          deleteMany: {
            args: Prisma.MetalTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetalTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetalTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetalTypePayload>
          }
          aggregate: {
            args: Prisma.MetalTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetalType>
          }
          groupBy: {
            args: Prisma.MetalTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetalTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetalTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MetalTypeCountAggregateOutputType> | number
          }
        }
      }
      UnitType: {
        payload: Prisma.$UnitTypePayload<ExtArgs>
        fields: Prisma.UnitTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          findFirst: {
            args: Prisma.UnitTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          findMany: {
            args: Prisma.UnitTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>[]
          }
          create: {
            args: Prisma.UnitTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          createMany: {
            args: Prisma.UnitTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnitTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          update: {
            args: Prisma.UnitTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          deleteMany: {
            args: Prisma.UnitTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnitTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitTypePayload>
          }
          aggregate: {
            args: Prisma.UnitTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitType>
          }
          groupBy: {
            args: Prisma.UnitTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitTypeCountArgs<ExtArgs>
            result: $Utils.Optional<UnitTypeCountAggregateOutputType> | number
          }
        }
      }
      JobOrder: {
        payload: Prisma.$JobOrderPayload<ExtArgs>
        fields: Prisma.JobOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          findFirst: {
            args: Prisma.JobOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          findMany: {
            args: Prisma.JobOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>[]
          }
          create: {
            args: Prisma.JobOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          createMany: {
            args: Prisma.JobOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          update: {
            args: Prisma.JobOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          deleteMany: {
            args: Prisma.JobOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobOrderPayload>
          }
          aggregate: {
            args: Prisma.JobOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobOrder>
          }
          groupBy: {
            args: Prisma.JobOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobOrderCountArgs<ExtArgs>
            result: $Utils.Optional<JobOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    appUser?: AppUserOmit
    menuList?: MenuListOmit
    subMenu?: SubMenuOmit
    department?: DepartmentOmit
    employee?: EmployeeOmit
    customer?: CustomerOmit
    productType?: ProductTypeOmit
    metalType?: MetalTypeOmit
    unitType?: UnitTypeOmit
    jobOrder?: JobOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MenuListCountOutputType
   */

  export type MenuListCountOutputType = {
    SubMenu: number
  }

  export type MenuListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubMenu?: boolean | MenuListCountOutputTypeCountSubMenuArgs
  }

  // Custom InputTypes
  /**
   * MenuListCountOutputType without action
   */
  export type MenuListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuListCountOutputType
     */
    select?: MenuListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuListCountOutputType without action
   */
  export type MenuListCountOutputTypeCountSubMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    Employee: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | DepartmentCountOutputTypeCountEmployeeArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserAvgAggregateOutputType = {
    userId: number | null
    limitDeviceCount: number | null
  }

  export type AppUserSumAggregateOutputType = {
    userId: number | null
    limitDeviceCount: number | null
  }

  export type AppUserMinAggregateOutputType = {
    userId: number | null
    userName: string | null
    email: string | null
    password: string | null
    fullName: string | null
    mobileNo: string | null
    isActive: boolean | null
    isAdmin: boolean | null
    isLimitDevices: boolean | null
    limitDeviceCount: number | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppUserMaxAggregateOutputType = {
    userId: number | null
    userName: string | null
    email: string | null
    password: string | null
    fullName: string | null
    mobileNo: string | null
    isActive: boolean | null
    isAdmin: boolean | null
    isLimitDevices: boolean | null
    limitDeviceCount: number | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppUserCountAggregateOutputType = {
    userId: number
    userName: number
    email: number
    password: number
    fullName: number
    mobileNo: number
    isActive: number
    isAdmin: number
    isLimitDevices: number
    limitDeviceCount: number
    profilePic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppUserAvgAggregateInputType = {
    userId?: true
    limitDeviceCount?: true
  }

  export type AppUserSumAggregateInputType = {
    userId?: true
    limitDeviceCount?: true
  }

  export type AppUserMinAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    fullName?: true
    mobileNo?: true
    isActive?: true
    isAdmin?: true
    isLimitDevices?: true
    limitDeviceCount?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppUserMaxAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    fullName?: true
    mobileNo?: true
    isActive?: true
    isAdmin?: true
    isLimitDevices?: true
    limitDeviceCount?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppUserCountAggregateInputType = {
    userId?: true
    userName?: true
    email?: true
    password?: true
    fullName?: true
    mobileNo?: true
    isActive?: true
    isAdmin?: true
    isLimitDevices?: true
    limitDeviceCount?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _avg?: AppUserAvgAggregateInputType
    _sum?: AppUserSumAggregateInputType
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    userId: number
    userName: string
    email: string
    password: string
    fullName: string
    mobileNo: string | null
    isActive: boolean
    isAdmin: boolean
    isLimitDevices: boolean
    limitDeviceCount: number | null
    profilePic: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    mobileNo?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isLimitDevices?: boolean
    limitDeviceCount?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appUser"]>



  export type AppUserSelectScalar = {
    userId?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    mobileNo?: boolean
    isActive?: boolean
    isAdmin?: boolean
    isLimitDevices?: boolean
    limitDeviceCount?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "email" | "password" | "fullName" | "mobileNo" | "isActive" | "isAdmin" | "isLimitDevices" | "limitDeviceCount" | "profilePic" | "createdAt" | "updatedAt", ExtArgs["result"]["appUser"]>

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userName: string
      email: string
      password: string
      fullName: string
      mobileNo: string | null
      isActive: boolean
      isAdmin: boolean
      isLimitDevices: boolean
      limitDeviceCount: number | null
      profilePic: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const appUserWithUserIdOnly = await prisma.appUser.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppUser model
   */
  interface AppUserFieldRefs {
    readonly userId: FieldRef<"AppUser", 'Int'>
    readonly userName: FieldRef<"AppUser", 'String'>
    readonly email: FieldRef<"AppUser", 'String'>
    readonly password: FieldRef<"AppUser", 'String'>
    readonly fullName: FieldRef<"AppUser", 'String'>
    readonly mobileNo: FieldRef<"AppUser", 'String'>
    readonly isActive: FieldRef<"AppUser", 'Boolean'>
    readonly isAdmin: FieldRef<"AppUser", 'Boolean'>
    readonly isLimitDevices: FieldRef<"AppUser", 'Boolean'>
    readonly limitDeviceCount: FieldRef<"AppUser", 'Int'>
    readonly profilePic: FieldRef<"AppUser", 'String'>
    readonly createdAt: FieldRef<"AppUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AppUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to update.
     */
    limit?: number
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to delete.
     */
    limit?: number
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
  }


  /**
   * Model MenuList
   */

  export type AggregateMenuList = {
    _count: MenuListCountAggregateOutputType | null
    _avg: MenuListAvgAggregateOutputType | null
    _sum: MenuListSumAggregateOutputType | null
    _min: MenuListMinAggregateOutputType | null
    _max: MenuListMaxAggregateOutputType | null
  }

  export type MenuListAvgAggregateOutputType = {
    menuId: number | null
    sorting: number | null
  }

  export type MenuListSumAggregateOutputType = {
    menuId: number | null
    sorting: number | null
  }

  export type MenuListMinAggregateOutputType = {
    menuId: number | null
    menuName: string | null
    menuIcon: string | null
    sorting: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuListMaxAggregateOutputType = {
    menuId: number | null
    menuName: string | null
    menuIcon: string | null
    sorting: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuListCountAggregateOutputType = {
    menuId: number
    menuName: number
    menuIcon: number
    sorting: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuListAvgAggregateInputType = {
    menuId?: true
    sorting?: true
  }

  export type MenuListSumAggregateInputType = {
    menuId?: true
    sorting?: true
  }

  export type MenuListMinAggregateInputType = {
    menuId?: true
    menuName?: true
    menuIcon?: true
    sorting?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuListMaxAggregateInputType = {
    menuId?: true
    menuName?: true
    menuIcon?: true
    sorting?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuListCountAggregateInputType = {
    menuId?: true
    menuName?: true
    menuIcon?: true
    sorting?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuList to aggregate.
     */
    where?: MenuListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLists to fetch.
     */
    orderBy?: MenuListOrderByWithRelationInput | MenuListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuLists
    **/
    _count?: true | MenuListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuListMaxAggregateInputType
  }

  export type GetMenuListAggregateType<T extends MenuListAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuList[P]>
      : GetScalarType<T[P], AggregateMenuList[P]>
  }




  export type MenuListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuListWhereInput
    orderBy?: MenuListOrderByWithAggregationInput | MenuListOrderByWithAggregationInput[]
    by: MenuListScalarFieldEnum[] | MenuListScalarFieldEnum
    having?: MenuListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuListCountAggregateInputType | true
    _avg?: MenuListAvgAggregateInputType
    _sum?: MenuListSumAggregateInputType
    _min?: MenuListMinAggregateInputType
    _max?: MenuListMaxAggregateInputType
  }

  export type MenuListGroupByOutputType = {
    menuId: number
    menuName: string
    menuIcon: string
    sorting: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MenuListCountAggregateOutputType | null
    _avg: MenuListAvgAggregateOutputType | null
    _sum: MenuListSumAggregateOutputType | null
    _min: MenuListMinAggregateOutputType | null
    _max: MenuListMaxAggregateOutputType | null
  }

  type GetMenuListGroupByPayload<T extends MenuListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuListGroupByOutputType[P]>
            : GetScalarType<T[P], MenuListGroupByOutputType[P]>
        }
      >
    >


  export type MenuListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    menuId?: boolean
    menuName?: boolean
    menuIcon?: boolean
    sorting?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SubMenu?: boolean | MenuList$SubMenuArgs<ExtArgs>
    _count?: boolean | MenuListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuList"]>



  export type MenuListSelectScalar = {
    menuId?: boolean
    menuName?: boolean
    menuIcon?: boolean
    sorting?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"menuId" | "menuName" | "menuIcon" | "sorting" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["menuList"]>
  export type MenuListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubMenu?: boolean | MenuList$SubMenuArgs<ExtArgs>
    _count?: boolean | MenuListCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuList"
    objects: {
      SubMenu: Prisma.$SubMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      menuId: number
      menuName: string
      menuIcon: string
      sorting: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuList"]>
    composites: {}
  }

  type MenuListGetPayload<S extends boolean | null | undefined | MenuListDefaultArgs> = $Result.GetResult<Prisma.$MenuListPayload, S>

  type MenuListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuListCountAggregateInputType | true
    }

  export interface MenuListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuList'], meta: { name: 'MenuList' } }
    /**
     * Find zero or one MenuList that matches the filter.
     * @param {MenuListFindUniqueArgs} args - Arguments to find a MenuList
     * @example
     * // Get one MenuList
     * const menuList = await prisma.menuList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuListFindUniqueArgs>(args: SelectSubset<T, MenuListFindUniqueArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuListFindUniqueOrThrowArgs} args - Arguments to find a MenuList
     * @example
     * // Get one MenuList
     * const menuList = await prisma.menuList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuListFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListFindFirstArgs} args - Arguments to find a MenuList
     * @example
     * // Get one MenuList
     * const menuList = await prisma.menuList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuListFindFirstArgs>(args?: SelectSubset<T, MenuListFindFirstArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListFindFirstOrThrowArgs} args - Arguments to find a MenuList
     * @example
     * // Get one MenuList
     * const menuList = await prisma.menuList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuListFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuListFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuLists
     * const menuLists = await prisma.menuList.findMany()
     * 
     * // Get first 10 MenuLists
     * const menuLists = await prisma.menuList.findMany({ take: 10 })
     * 
     * // Only select the `menuId`
     * const menuListWithMenuIdOnly = await prisma.menuList.findMany({ select: { menuId: true } })
     * 
     */
    findMany<T extends MenuListFindManyArgs>(args?: SelectSubset<T, MenuListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuList.
     * @param {MenuListCreateArgs} args - Arguments to create a MenuList.
     * @example
     * // Create one MenuList
     * const MenuList = await prisma.menuList.create({
     *   data: {
     *     // ... data to create a MenuList
     *   }
     * })
     * 
     */
    create<T extends MenuListCreateArgs>(args: SelectSubset<T, MenuListCreateArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuLists.
     * @param {MenuListCreateManyArgs} args - Arguments to create many MenuLists.
     * @example
     * // Create many MenuLists
     * const menuList = await prisma.menuList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuListCreateManyArgs>(args?: SelectSubset<T, MenuListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MenuList.
     * @param {MenuListDeleteArgs} args - Arguments to delete one MenuList.
     * @example
     * // Delete one MenuList
     * const MenuList = await prisma.menuList.delete({
     *   where: {
     *     // ... filter to delete one MenuList
     *   }
     * })
     * 
     */
    delete<T extends MenuListDeleteArgs>(args: SelectSubset<T, MenuListDeleteArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuList.
     * @param {MenuListUpdateArgs} args - Arguments to update one MenuList.
     * @example
     * // Update one MenuList
     * const menuList = await prisma.menuList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuListUpdateArgs>(args: SelectSubset<T, MenuListUpdateArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuLists.
     * @param {MenuListDeleteManyArgs} args - Arguments to filter MenuLists to delete.
     * @example
     * // Delete a few MenuLists
     * const { count } = await prisma.menuList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuListDeleteManyArgs>(args?: SelectSubset<T, MenuListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuLists
     * const menuList = await prisma.menuList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuListUpdateManyArgs>(args: SelectSubset<T, MenuListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuList.
     * @param {MenuListUpsertArgs} args - Arguments to update or create a MenuList.
     * @example
     * // Update or create a MenuList
     * const menuList = await prisma.menuList.upsert({
     *   create: {
     *     // ... data to create a MenuList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuList we want to update
     *   }
     * })
     */
    upsert<T extends MenuListUpsertArgs>(args: SelectSubset<T, MenuListUpsertArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListCountArgs} args - Arguments to filter MenuLists to count.
     * @example
     * // Count the number of MenuLists
     * const count = await prisma.menuList.count({
     *   where: {
     *     // ... the filter for the MenuLists we want to count
     *   }
     * })
    **/
    count<T extends MenuListCountArgs>(
      args?: Subset<T, MenuListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuListAggregateArgs>(args: Subset<T, MenuListAggregateArgs>): Prisma.PrismaPromise<GetMenuListAggregateType<T>>

    /**
     * Group by MenuList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuListGroupByArgs['orderBy'] }
        : { orderBy?: MenuListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuList model
   */
  readonly fields: MenuListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SubMenu<T extends MenuList$SubMenuArgs<ExtArgs> = {}>(args?: Subset<T, MenuList$SubMenuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuList model
   */
  interface MenuListFieldRefs {
    readonly menuId: FieldRef<"MenuList", 'Int'>
    readonly menuName: FieldRef<"MenuList", 'String'>
    readonly menuIcon: FieldRef<"MenuList", 'String'>
    readonly sorting: FieldRef<"MenuList", 'Int'>
    readonly isActive: FieldRef<"MenuList", 'Boolean'>
    readonly createdAt: FieldRef<"MenuList", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuList findUnique
   */
  export type MenuListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * Filter, which MenuList to fetch.
     */
    where: MenuListWhereUniqueInput
  }

  /**
   * MenuList findUniqueOrThrow
   */
  export type MenuListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * Filter, which MenuList to fetch.
     */
    where: MenuListWhereUniqueInput
  }

  /**
   * MenuList findFirst
   */
  export type MenuListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * Filter, which MenuList to fetch.
     */
    where?: MenuListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLists to fetch.
     */
    orderBy?: MenuListOrderByWithRelationInput | MenuListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuLists.
     */
    cursor?: MenuListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuLists.
     */
    distinct?: MenuListScalarFieldEnum | MenuListScalarFieldEnum[]
  }

  /**
   * MenuList findFirstOrThrow
   */
  export type MenuListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * Filter, which MenuList to fetch.
     */
    where?: MenuListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLists to fetch.
     */
    orderBy?: MenuListOrderByWithRelationInput | MenuListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuLists.
     */
    cursor?: MenuListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuLists.
     */
    distinct?: MenuListScalarFieldEnum | MenuListScalarFieldEnum[]
  }

  /**
   * MenuList findMany
   */
  export type MenuListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * Filter, which MenuLists to fetch.
     */
    where?: MenuListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuLists to fetch.
     */
    orderBy?: MenuListOrderByWithRelationInput | MenuListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuLists.
     */
    cursor?: MenuListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuLists.
     */
    skip?: number
    distinct?: MenuListScalarFieldEnum | MenuListScalarFieldEnum[]
  }

  /**
   * MenuList create
   */
  export type MenuListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuList.
     */
    data: XOR<MenuListCreateInput, MenuListUncheckedCreateInput>
  }

  /**
   * MenuList createMany
   */
  export type MenuListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuLists.
     */
    data: MenuListCreateManyInput | MenuListCreateManyInput[]
  }

  /**
   * MenuList update
   */
  export type MenuListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuList.
     */
    data: XOR<MenuListUpdateInput, MenuListUncheckedUpdateInput>
    /**
     * Choose, which MenuList to update.
     */
    where: MenuListWhereUniqueInput
  }

  /**
   * MenuList updateMany
   */
  export type MenuListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuLists.
     */
    data: XOR<MenuListUpdateManyMutationInput, MenuListUncheckedUpdateManyInput>
    /**
     * Filter which MenuLists to update
     */
    where?: MenuListWhereInput
    /**
     * Limit how many MenuLists to update.
     */
    limit?: number
  }

  /**
   * MenuList upsert
   */
  export type MenuListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuList to update in case it exists.
     */
    where: MenuListWhereUniqueInput
    /**
     * In case the MenuList found by the `where` argument doesn't exist, create a new MenuList with this data.
     */
    create: XOR<MenuListCreateInput, MenuListUncheckedCreateInput>
    /**
     * In case the MenuList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuListUpdateInput, MenuListUncheckedUpdateInput>
  }

  /**
   * MenuList delete
   */
  export type MenuListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
    /**
     * Filter which MenuList to delete.
     */
    where: MenuListWhereUniqueInput
  }

  /**
   * MenuList deleteMany
   */
  export type MenuListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuLists to delete
     */
    where?: MenuListWhereInput
    /**
     * Limit how many MenuLists to delete.
     */
    limit?: number
  }

  /**
   * MenuList.SubMenu
   */
  export type MenuList$SubMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    cursor?: SubMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * MenuList without action
   */
  export type MenuListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuList
     */
    select?: MenuListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuList
     */
    omit?: MenuListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuListInclude<ExtArgs> | null
  }


  /**
   * Model SubMenu
   */

  export type AggregateSubMenu = {
    _count: SubMenuCountAggregateOutputType | null
    _avg: SubMenuAvgAggregateOutputType | null
    _sum: SubMenuSumAggregateOutputType | null
    _min: SubMenuMinAggregateOutputType | null
    _max: SubMenuMaxAggregateOutputType | null
  }

  export type SubMenuAvgAggregateOutputType = {
    subMenuId: number | null
    menuId: number | null
    sorting: number | null
  }

  export type SubMenuSumAggregateOutputType = {
    subMenuId: number | null
    menuId: number | null
    sorting: number | null
  }

  export type SubMenuMinAggregateOutputType = {
    subMenuId: number | null
    menuId: number | null
    subMenuName: string | null
    subMenuIcon: string | null
    subMenuRoute: string | null
    sorting: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubMenuMaxAggregateOutputType = {
    subMenuId: number | null
    menuId: number | null
    subMenuName: string | null
    subMenuIcon: string | null
    subMenuRoute: string | null
    sorting: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubMenuCountAggregateOutputType = {
    subMenuId: number
    menuId: number
    subMenuName: number
    subMenuIcon: number
    subMenuRoute: number
    sorting: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubMenuAvgAggregateInputType = {
    subMenuId?: true
    menuId?: true
    sorting?: true
  }

  export type SubMenuSumAggregateInputType = {
    subMenuId?: true
    menuId?: true
    sorting?: true
  }

  export type SubMenuMinAggregateInputType = {
    subMenuId?: true
    menuId?: true
    subMenuName?: true
    subMenuIcon?: true
    subMenuRoute?: true
    sorting?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubMenuMaxAggregateInputType = {
    subMenuId?: true
    menuId?: true
    subMenuName?: true
    subMenuIcon?: true
    subMenuRoute?: true
    sorting?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubMenuCountAggregateInputType = {
    subMenuId?: true
    menuId?: true
    subMenuName?: true
    subMenuIcon?: true
    subMenuRoute?: true
    sorting?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubMenu to aggregate.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubMenus
    **/
    _count?: true | SubMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubMenuMaxAggregateInputType
  }

  export type GetSubMenuAggregateType<T extends SubMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateSubMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubMenu[P]>
      : GetScalarType<T[P], AggregateSubMenu[P]>
  }




  export type SubMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithAggregationInput | SubMenuOrderByWithAggregationInput[]
    by: SubMenuScalarFieldEnum[] | SubMenuScalarFieldEnum
    having?: SubMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubMenuCountAggregateInputType | true
    _avg?: SubMenuAvgAggregateInputType
    _sum?: SubMenuSumAggregateInputType
    _min?: SubMenuMinAggregateInputType
    _max?: SubMenuMaxAggregateInputType
  }

  export type SubMenuGroupByOutputType = {
    subMenuId: number
    menuId: number
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubMenuCountAggregateOutputType | null
    _avg: SubMenuAvgAggregateOutputType | null
    _sum: SubMenuSumAggregateOutputType | null
    _min: SubMenuMinAggregateOutputType | null
    _max: SubMenuMaxAggregateOutputType | null
  }

  type GetSubMenuGroupByPayload<T extends SubMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubMenuGroupByOutputType[P]>
            : GetScalarType<T[P], SubMenuGroupByOutputType[P]>
        }
      >
    >


  export type SubMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subMenuId?: boolean
    menuId?: boolean
    subMenuName?: boolean
    subMenuIcon?: boolean
    subMenuRoute?: boolean
    sorting?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuList?: boolean | MenuListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subMenu"]>



  export type SubMenuSelectScalar = {
    subMenuId?: boolean
    menuId?: boolean
    subMenuName?: boolean
    subMenuIcon?: boolean
    subMenuRoute?: boolean
    sorting?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subMenuId" | "menuId" | "subMenuName" | "subMenuIcon" | "subMenuRoute" | "sorting" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["subMenu"]>
  export type SubMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuList?: boolean | MenuListDefaultArgs<ExtArgs>
  }

  export type $SubMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubMenu"
    objects: {
      menuList: Prisma.$MenuListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      subMenuId: number
      menuId: number
      subMenuName: string
      subMenuIcon: string
      subMenuRoute: string
      sorting: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subMenu"]>
    composites: {}
  }

  type SubMenuGetPayload<S extends boolean | null | undefined | SubMenuDefaultArgs> = $Result.GetResult<Prisma.$SubMenuPayload, S>

  type SubMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubMenuCountAggregateInputType | true
    }

  export interface SubMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubMenu'], meta: { name: 'SubMenu' } }
    /**
     * Find zero or one SubMenu that matches the filter.
     * @param {SubMenuFindUniqueArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubMenuFindUniqueArgs>(args: SelectSubset<T, SubMenuFindUniqueArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubMenu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubMenuFindUniqueOrThrowArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubMenuFindUniqueOrThrowArgs>(args: SelectSubset<T, SubMenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindFirstArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubMenuFindFirstArgs>(args?: SelectSubset<T, SubMenuFindFirstArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindFirstOrThrowArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubMenuFindFirstOrThrowArgs>(args?: SelectSubset<T, SubMenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubMenus
     * const subMenus = await prisma.subMenu.findMany()
     * 
     * // Get first 10 SubMenus
     * const subMenus = await prisma.subMenu.findMany({ take: 10 })
     * 
     * // Only select the `subMenuId`
     * const subMenuWithSubMenuIdOnly = await prisma.subMenu.findMany({ select: { subMenuId: true } })
     * 
     */
    findMany<T extends SubMenuFindManyArgs>(args?: SelectSubset<T, SubMenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubMenu.
     * @param {SubMenuCreateArgs} args - Arguments to create a SubMenu.
     * @example
     * // Create one SubMenu
     * const SubMenu = await prisma.subMenu.create({
     *   data: {
     *     // ... data to create a SubMenu
     *   }
     * })
     * 
     */
    create<T extends SubMenuCreateArgs>(args: SelectSubset<T, SubMenuCreateArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubMenus.
     * @param {SubMenuCreateManyArgs} args - Arguments to create many SubMenus.
     * @example
     * // Create many SubMenus
     * const subMenu = await prisma.subMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubMenuCreateManyArgs>(args?: SelectSubset<T, SubMenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubMenu.
     * @param {SubMenuDeleteArgs} args - Arguments to delete one SubMenu.
     * @example
     * // Delete one SubMenu
     * const SubMenu = await prisma.subMenu.delete({
     *   where: {
     *     // ... filter to delete one SubMenu
     *   }
     * })
     * 
     */
    delete<T extends SubMenuDeleteArgs>(args: SelectSubset<T, SubMenuDeleteArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubMenu.
     * @param {SubMenuUpdateArgs} args - Arguments to update one SubMenu.
     * @example
     * // Update one SubMenu
     * const subMenu = await prisma.subMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubMenuUpdateArgs>(args: SelectSubset<T, SubMenuUpdateArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubMenus.
     * @param {SubMenuDeleteManyArgs} args - Arguments to filter SubMenus to delete.
     * @example
     * // Delete a few SubMenus
     * const { count } = await prisma.subMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubMenuDeleteManyArgs>(args?: SelectSubset<T, SubMenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubMenus
     * const subMenu = await prisma.subMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubMenuUpdateManyArgs>(args: SelectSubset<T, SubMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubMenu.
     * @param {SubMenuUpsertArgs} args - Arguments to update or create a SubMenu.
     * @example
     * // Update or create a SubMenu
     * const subMenu = await prisma.subMenu.upsert({
     *   create: {
     *     // ... data to create a SubMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubMenu we want to update
     *   }
     * })
     */
    upsert<T extends SubMenuUpsertArgs>(args: SelectSubset<T, SubMenuUpsertArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuCountArgs} args - Arguments to filter SubMenus to count.
     * @example
     * // Count the number of SubMenus
     * const count = await prisma.subMenu.count({
     *   where: {
     *     // ... the filter for the SubMenus we want to count
     *   }
     * })
    **/
    count<T extends SubMenuCountArgs>(
      args?: Subset<T, SubMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubMenuAggregateArgs>(args: Subset<T, SubMenuAggregateArgs>): Prisma.PrismaPromise<GetSubMenuAggregateType<T>>

    /**
     * Group by SubMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubMenuGroupByArgs['orderBy'] }
        : { orderBy?: SubMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubMenu model
   */
  readonly fields: SubMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuList<T extends MenuListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuListDefaultArgs<ExtArgs>>): Prisma__MenuListClient<$Result.GetResult<Prisma.$MenuListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubMenu model
   */
  interface SubMenuFieldRefs {
    readonly subMenuId: FieldRef<"SubMenu", 'Int'>
    readonly menuId: FieldRef<"SubMenu", 'Int'>
    readonly subMenuName: FieldRef<"SubMenu", 'String'>
    readonly subMenuIcon: FieldRef<"SubMenu", 'String'>
    readonly subMenuRoute: FieldRef<"SubMenu", 'String'>
    readonly sorting: FieldRef<"SubMenu", 'Int'>
    readonly isActive: FieldRef<"SubMenu", 'Boolean'>
    readonly createdAt: FieldRef<"SubMenu", 'DateTime'>
    readonly updatedAt: FieldRef<"SubMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubMenu findUnique
   */
  export type SubMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu findUniqueOrThrow
   */
  export type SubMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu findFirst
   */
  export type SubMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubMenus.
     */
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu findFirstOrThrow
   */
  export type SubMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubMenus.
     */
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu findMany
   */
  export type SubMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenus to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu create
   */
  export type SubMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a SubMenu.
     */
    data: XOR<SubMenuCreateInput, SubMenuUncheckedCreateInput>
  }

  /**
   * SubMenu createMany
   */
  export type SubMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubMenus.
     */
    data: SubMenuCreateManyInput | SubMenuCreateManyInput[]
  }

  /**
   * SubMenu update
   */
  export type SubMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a SubMenu.
     */
    data: XOR<SubMenuUpdateInput, SubMenuUncheckedUpdateInput>
    /**
     * Choose, which SubMenu to update.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu updateMany
   */
  export type SubMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubMenus.
     */
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyInput>
    /**
     * Filter which SubMenus to update
     */
    where?: SubMenuWhereInput
    /**
     * Limit how many SubMenus to update.
     */
    limit?: number
  }

  /**
   * SubMenu upsert
   */
  export type SubMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the SubMenu to update in case it exists.
     */
    where: SubMenuWhereUniqueInput
    /**
     * In case the SubMenu found by the `where` argument doesn't exist, create a new SubMenu with this data.
     */
    create: XOR<SubMenuCreateInput, SubMenuUncheckedCreateInput>
    /**
     * In case the SubMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubMenuUpdateInput, SubMenuUncheckedUpdateInput>
  }

  /**
   * SubMenu delete
   */
  export type SubMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter which SubMenu to delete.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu deleteMany
   */
  export type SubMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubMenus to delete
     */
    where?: SubMenuWhereInput
    /**
     * Limit how many SubMenus to delete.
     */
    limit?: number
  }

  /**
   * SubMenu without action
   */
  export type SubMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubMenu
     */
    omit?: SubMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    departmentId: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    departmentId: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    departmentId: number | null
    departmentName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    departmentId: number | null
    departmentName: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    departmentId: number
    departmentName: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    departmentId?: true
  }

  export type DepartmentSumAggregateInputType = {
    departmentId?: true
  }

  export type DepartmentMinAggregateInputType = {
    departmentId?: true
    departmentName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    departmentId?: true
    departmentName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    departmentId?: true
    departmentName?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    departmentId: number
    departmentName: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    departmentId?: boolean
    departmentName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Employee?: boolean | Department$EmployeeArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type DepartmentSelectScalar = {
    departmentId?: boolean
    departmentName?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"departmentId" | "departmentName" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Employee?: boolean | Department$EmployeeArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      Employee: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      departmentId: number
      departmentName: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `departmentId`
     * const departmentWithDepartmentIdOnly = await prisma.department.findMany({ select: { departmentId: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Employee<T extends Department$EmployeeArgs<ExtArgs> = {}>(args?: Subset<T, Department$EmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly departmentId: FieldRef<"Department", 'Int'>
    readonly departmentName: FieldRef<"Department", 'String'>
    readonly isActive: FieldRef<"Department", 'Boolean'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.Employee
   */
  export type Department$EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    employeeId: number | null
    departmentId: number | null
    salary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    employeeId: number | null
    departmentId: number | null
    salary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    employeeId: number | null
    namePrefix: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    hireDate: Date | null
    jobTitle: string | null
    departmentId: number | null
    birthDate: Date | null
    idCardNumber: string | null
    address: string | null
    salary: number | null
    remarks: string | null
    isWorking: boolean | null
    empPicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    employeeId: number | null
    namePrefix: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    hireDate: Date | null
    jobTitle: string | null
    departmentId: number | null
    birthDate: Date | null
    idCardNumber: string | null
    address: string | null
    salary: number | null
    remarks: string | null
    isWorking: boolean | null
    empPicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    employeeId: number
    namePrefix: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    hireDate: number
    jobTitle: number
    departmentId: number
    birthDate: number
    idCardNumber: number
    address: number
    salary: number
    remarks: number
    isWorking: number
    empPicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    employeeId?: true
    departmentId?: true
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    employeeId?: true
    departmentId?: true
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    employeeId?: true
    namePrefix?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    hireDate?: true
    jobTitle?: true
    departmentId?: true
    birthDate?: true
    idCardNumber?: true
    address?: true
    salary?: true
    remarks?: true
    isWorking?: true
    empPicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    employeeId?: true
    namePrefix?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    hireDate?: true
    jobTitle?: true
    departmentId?: true
    birthDate?: true
    idCardNumber?: true
    address?: true
    salary?: true
    remarks?: true
    isWorking?: true
    empPicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    employeeId?: true
    namePrefix?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    hireDate?: true
    jobTitle?: true
    departmentId?: true
    birthDate?: true
    idCardNumber?: true
    address?: true
    salary?: true
    remarks?: true
    isWorking?: true
    empPicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    employeeId: number
    namePrefix: string | null
    firstName: string
    lastName: string
    email: string | null
    phoneNumber: string | null
    hireDate: Date | null
    jobTitle: string | null
    departmentId: number
    birthDate: Date | null
    idCardNumber: string | null
    address: string | null
    salary: number | null
    remarks: string | null
    isWorking: boolean
    empPicture: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    namePrefix?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    hireDate?: boolean
    jobTitle?: boolean
    departmentId?: boolean
    birthDate?: boolean
    idCardNumber?: boolean
    address?: boolean
    salary?: boolean
    remarks?: boolean
    isWorking?: boolean
    empPicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    employeeId?: boolean
    namePrefix?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    hireDate?: boolean
    jobTitle?: boolean
    departmentId?: boolean
    birthDate?: boolean
    idCardNumber?: boolean
    address?: boolean
    salary?: boolean
    remarks?: boolean
    isWorking?: boolean
    empPicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeId" | "namePrefix" | "firstName" | "lastName" | "email" | "phoneNumber" | "hireDate" | "jobTitle" | "departmentId" | "birthDate" | "idCardNumber" | "address" | "salary" | "remarks" | "isWorking" | "empPicture" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeId: number
      namePrefix: string | null
      firstName: string
      lastName: string
      email: string | null
      phoneNumber: string | null
      hireDate: Date | null
      jobTitle: string | null
      departmentId: number
      birthDate: Date | null
      idCardNumber: string | null
      address: string | null
      salary: number | null
      remarks: string | null
      isWorking: boolean
      empPicture: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeeWithEmployeeIdOnly = await prisma.employee.findMany({ select: { employeeId: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly employeeId: FieldRef<"Employee", 'Int'>
    readonly namePrefix: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phoneNumber: FieldRef<"Employee", 'String'>
    readonly hireDate: FieldRef<"Employee", 'DateTime'>
    readonly jobTitle: FieldRef<"Employee", 'String'>
    readonly departmentId: FieldRef<"Employee", 'Int'>
    readonly birthDate: FieldRef<"Employee", 'DateTime'>
    readonly idCardNumber: FieldRef<"Employee", 'String'>
    readonly address: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'Float'>
    readonly remarks: FieldRef<"Employee", 'String'>
    readonly isWorking: FieldRef<"Employee", 'Boolean'>
    readonly empPicture: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customerId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: number | null
    customerName: string | null
    contactName: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: number | null
    customerName: string | null
    contactName: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    country: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    customerName: number
    contactName: number
    address: number
    city: number
    postalCode: number
    country: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerId?: true
  }

  export type CustomerSumAggregateInputType = {
    customerId?: true
  }

  export type CustomerMinAggregateInputType = {
    customerId?: true
    customerName?: true
    contactName?: true
    address?: true
    city?: true
    postalCode?: true
    country?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    customerName?: true
    contactName?: true
    address?: true
    city?: true
    postalCode?: true
    country?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    customerName?: true
    contactName?: true
    address?: true
    city?: true
    postalCode?: true
    country?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: number
    customerName: string
    contactName: string | null
    address: string | null
    city: string | null
    postalCode: string | null
    country: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    customerName?: boolean
    contactName?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    customerId?: boolean
    customerName?: boolean
    contactName?: boolean
    address?: boolean
    city?: boolean
    postalCode?: boolean
    country?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerId" | "customerName" | "contactName" | "address" | "city" | "postalCode" | "country" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      customerName: string
      contactName: string | null
      address: string | null
      city: string | null
      postalCode: string | null
      country: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'Int'>
    readonly customerName: FieldRef<"Customer", 'String'>
    readonly contactName: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly postalCode: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
  }


  /**
   * Model ProductType
   */

  export type AggregateProductType = {
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  export type ProductTypeAvgAggregateOutputType = {
    productTypeId: number | null
  }

  export type ProductTypeSumAggregateOutputType = {
    productTypeId: number | null
  }

  export type ProductTypeMinAggregateOutputType = {
    productTypeId: number | null
    productTypeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductTypeMaxAggregateOutputType = {
    productTypeId: number | null
    productTypeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductTypeCountAggregateOutputType = {
    productTypeId: number
    productTypeName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductTypeAvgAggregateInputType = {
    productTypeId?: true
  }

  export type ProductTypeSumAggregateInputType = {
    productTypeId?: true
  }

  export type ProductTypeMinAggregateInputType = {
    productTypeId?: true
    productTypeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductTypeMaxAggregateInputType = {
    productTypeId?: true
    productTypeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductTypeCountAggregateInputType = {
    productTypeId?: true
    productTypeName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductType to aggregate.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductTypes
    **/
    _count?: true | ProductTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductTypeMaxAggregateInputType
  }

  export type GetProductTypeAggregateType<T extends ProductTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductType[P]>
      : GetScalarType<T[P], AggregateProductType[P]>
  }




  export type ProductTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductTypeWhereInput
    orderBy?: ProductTypeOrderByWithAggregationInput | ProductTypeOrderByWithAggregationInput[]
    by: ProductTypeScalarFieldEnum[] | ProductTypeScalarFieldEnum
    having?: ProductTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductTypeCountAggregateInputType | true
    _avg?: ProductTypeAvgAggregateInputType
    _sum?: ProductTypeSumAggregateInputType
    _min?: ProductTypeMinAggregateInputType
    _max?: ProductTypeMaxAggregateInputType
  }

  export type ProductTypeGroupByOutputType = {
    productTypeId: number
    productTypeName: string
    createdAt: Date
    updatedAt: Date
    _count: ProductTypeCountAggregateOutputType | null
    _avg: ProductTypeAvgAggregateOutputType | null
    _sum: ProductTypeSumAggregateOutputType | null
    _min: ProductTypeMinAggregateOutputType | null
    _max: ProductTypeMaxAggregateOutputType | null
  }

  type GetProductTypeGroupByPayload<T extends ProductTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProductTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productTypeId?: boolean
    productTypeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["productType"]>



  export type ProductTypeSelectScalar = {
    productTypeId?: boolean
    productTypeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productTypeId" | "productTypeName" | "createdAt" | "updatedAt", ExtArgs["result"]["productType"]>

  export type $ProductTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      productTypeId: number
      productTypeName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productType"]>
    composites: {}
  }

  type ProductTypeGetPayload<S extends boolean | null | undefined | ProductTypeDefaultArgs> = $Result.GetResult<Prisma.$ProductTypePayload, S>

  type ProductTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductTypeCountAggregateInputType | true
    }

  export interface ProductTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductType'], meta: { name: 'ProductType' } }
    /**
     * Find zero or one ProductType that matches the filter.
     * @param {ProductTypeFindUniqueArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductTypeFindUniqueArgs>(args: SelectSubset<T, ProductTypeFindUniqueArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductTypeFindUniqueOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductTypeFindFirstArgs>(args?: SelectSubset<T, ProductTypeFindFirstArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindFirstOrThrowArgs} args - Arguments to find a ProductType
     * @example
     * // Get one ProductType
     * const productType = await prisma.productType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductTypes
     * const productTypes = await prisma.productType.findMany()
     * 
     * // Get first 10 ProductTypes
     * const productTypes = await prisma.productType.findMany({ take: 10 })
     * 
     * // Only select the `productTypeId`
     * const productTypeWithProductTypeIdOnly = await prisma.productType.findMany({ select: { productTypeId: true } })
     * 
     */
    findMany<T extends ProductTypeFindManyArgs>(args?: SelectSubset<T, ProductTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductType.
     * @param {ProductTypeCreateArgs} args - Arguments to create a ProductType.
     * @example
     * // Create one ProductType
     * const ProductType = await prisma.productType.create({
     *   data: {
     *     // ... data to create a ProductType
     *   }
     * })
     * 
     */
    create<T extends ProductTypeCreateArgs>(args: SelectSubset<T, ProductTypeCreateArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductTypes.
     * @param {ProductTypeCreateManyArgs} args - Arguments to create many ProductTypes.
     * @example
     * // Create many ProductTypes
     * const productType = await prisma.productType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductTypeCreateManyArgs>(args?: SelectSubset<T, ProductTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductType.
     * @param {ProductTypeDeleteArgs} args - Arguments to delete one ProductType.
     * @example
     * // Delete one ProductType
     * const ProductType = await prisma.productType.delete({
     *   where: {
     *     // ... filter to delete one ProductType
     *   }
     * })
     * 
     */
    delete<T extends ProductTypeDeleteArgs>(args: SelectSubset<T, ProductTypeDeleteArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductType.
     * @param {ProductTypeUpdateArgs} args - Arguments to update one ProductType.
     * @example
     * // Update one ProductType
     * const productType = await prisma.productType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductTypeUpdateArgs>(args: SelectSubset<T, ProductTypeUpdateArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductTypes.
     * @param {ProductTypeDeleteManyArgs} args - Arguments to filter ProductTypes to delete.
     * @example
     * // Delete a few ProductTypes
     * const { count } = await prisma.productType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductTypeDeleteManyArgs>(args?: SelectSubset<T, ProductTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductTypes
     * const productType = await prisma.productType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductTypeUpdateManyArgs>(args: SelectSubset<T, ProductTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductType.
     * @param {ProductTypeUpsertArgs} args - Arguments to update or create a ProductType.
     * @example
     * // Update or create a ProductType
     * const productType = await prisma.productType.upsert({
     *   create: {
     *     // ... data to create a ProductType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductType we want to update
     *   }
     * })
     */
    upsert<T extends ProductTypeUpsertArgs>(args: SelectSubset<T, ProductTypeUpsertArgs<ExtArgs>>): Prisma__ProductTypeClient<$Result.GetResult<Prisma.$ProductTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeCountArgs} args - Arguments to filter ProductTypes to count.
     * @example
     * // Count the number of ProductTypes
     * const count = await prisma.productType.count({
     *   where: {
     *     // ... the filter for the ProductTypes we want to count
     *   }
     * })
    **/
    count<T extends ProductTypeCountArgs>(
      args?: Subset<T, ProductTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductTypeAggregateArgs>(args: Subset<T, ProductTypeAggregateArgs>): Prisma.PrismaPromise<GetProductTypeAggregateType<T>>

    /**
     * Group by ProductType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProductTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductType model
   */
  readonly fields: ProductTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductType model
   */
  interface ProductTypeFieldRefs {
    readonly productTypeId: FieldRef<"ProductType", 'Int'>
    readonly productTypeName: FieldRef<"ProductType", 'String'>
    readonly createdAt: FieldRef<"ProductType", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductType findUnique
   */
  export type ProductTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findUniqueOrThrow
   */
  export type ProductTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType findFirst
   */
  export type ProductTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findFirstOrThrow
   */
  export type ProductTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Filter, which ProductType to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductTypes.
     */
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType findMany
   */
  export type ProductTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Filter, which ProductTypes to fetch.
     */
    where?: ProductTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductTypes to fetch.
     */
    orderBy?: ProductTypeOrderByWithRelationInput | ProductTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductTypes.
     */
    cursor?: ProductTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductTypes.
     */
    skip?: number
    distinct?: ProductTypeScalarFieldEnum | ProductTypeScalarFieldEnum[]
  }

  /**
   * ProductType create
   */
  export type ProductTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a ProductType.
     */
    data: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
  }

  /**
   * ProductType createMany
   */
  export type ProductTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductTypes.
     */
    data: ProductTypeCreateManyInput | ProductTypeCreateManyInput[]
  }

  /**
   * ProductType update
   */
  export type ProductTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a ProductType.
     */
    data: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
    /**
     * Choose, which ProductType to update.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType updateMany
   */
  export type ProductTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductTypes.
     */
    data: XOR<ProductTypeUpdateManyMutationInput, ProductTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProductTypes to update
     */
    where?: ProductTypeWhereInput
    /**
     * Limit how many ProductTypes to update.
     */
    limit?: number
  }

  /**
   * ProductType upsert
   */
  export type ProductTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the ProductType to update in case it exists.
     */
    where: ProductTypeWhereUniqueInput
    /**
     * In case the ProductType found by the `where` argument doesn't exist, create a new ProductType with this data.
     */
    create: XOR<ProductTypeCreateInput, ProductTypeUncheckedCreateInput>
    /**
     * In case the ProductType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductTypeUpdateInput, ProductTypeUncheckedUpdateInput>
  }

  /**
   * ProductType delete
   */
  export type ProductTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
    /**
     * Filter which ProductType to delete.
     */
    where: ProductTypeWhereUniqueInput
  }

  /**
   * ProductType deleteMany
   */
  export type ProductTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductTypes to delete
     */
    where?: ProductTypeWhereInput
    /**
     * Limit how many ProductTypes to delete.
     */
    limit?: number
  }

  /**
   * ProductType without action
   */
  export type ProductTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductType
     */
    select?: ProductTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductType
     */
    omit?: ProductTypeOmit<ExtArgs> | null
  }


  /**
   * Model MetalType
   */

  export type AggregateMetalType = {
    _count: MetalTypeCountAggregateOutputType | null
    _avg: MetalTypeAvgAggregateOutputType | null
    _sum: MetalTypeSumAggregateOutputType | null
    _min: MetalTypeMinAggregateOutputType | null
    _max: MetalTypeMaxAggregateOutputType | null
  }

  export type MetalTypeAvgAggregateOutputType = {
    metalTypeId: number | null
  }

  export type MetalTypeSumAggregateOutputType = {
    metalTypeId: number | null
  }

  export type MetalTypeMinAggregateOutputType = {
    metalTypeId: number | null
    metalTypeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetalTypeMaxAggregateOutputType = {
    metalTypeId: number | null
    metalTypeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetalTypeCountAggregateOutputType = {
    metalTypeId: number
    metalTypeName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetalTypeAvgAggregateInputType = {
    metalTypeId?: true
  }

  export type MetalTypeSumAggregateInputType = {
    metalTypeId?: true
  }

  export type MetalTypeMinAggregateInputType = {
    metalTypeId?: true
    metalTypeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetalTypeMaxAggregateInputType = {
    metalTypeId?: true
    metalTypeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetalTypeCountAggregateInputType = {
    metalTypeId?: true
    metalTypeName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetalTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetalType to aggregate.
     */
    where?: MetalTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetalTypes to fetch.
     */
    orderBy?: MetalTypeOrderByWithRelationInput | MetalTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetalTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetalTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetalTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetalTypes
    **/
    _count?: true | MetalTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetalTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetalTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetalTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetalTypeMaxAggregateInputType
  }

  export type GetMetalTypeAggregateType<T extends MetalTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMetalType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetalType[P]>
      : GetScalarType<T[P], AggregateMetalType[P]>
  }




  export type MetalTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetalTypeWhereInput
    orderBy?: MetalTypeOrderByWithAggregationInput | MetalTypeOrderByWithAggregationInput[]
    by: MetalTypeScalarFieldEnum[] | MetalTypeScalarFieldEnum
    having?: MetalTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetalTypeCountAggregateInputType | true
    _avg?: MetalTypeAvgAggregateInputType
    _sum?: MetalTypeSumAggregateInputType
    _min?: MetalTypeMinAggregateInputType
    _max?: MetalTypeMaxAggregateInputType
  }

  export type MetalTypeGroupByOutputType = {
    metalTypeId: number
    metalTypeName: string
    createdAt: Date
    updatedAt: Date
    _count: MetalTypeCountAggregateOutputType | null
    _avg: MetalTypeAvgAggregateOutputType | null
    _sum: MetalTypeSumAggregateOutputType | null
    _min: MetalTypeMinAggregateOutputType | null
    _max: MetalTypeMaxAggregateOutputType | null
  }

  type GetMetalTypeGroupByPayload<T extends MetalTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetalTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetalTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetalTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MetalTypeGroupByOutputType[P]>
        }
      >
    >


  export type MetalTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metalTypeId?: boolean
    metalTypeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metalType"]>



  export type MetalTypeSelectScalar = {
    metalTypeId?: boolean
    metalTypeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetalTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"metalTypeId" | "metalTypeName" | "createdAt" | "updatedAt", ExtArgs["result"]["metalType"]>

  export type $MetalTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetalType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      metalTypeId: number
      metalTypeName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metalType"]>
    composites: {}
  }

  type MetalTypeGetPayload<S extends boolean | null | undefined | MetalTypeDefaultArgs> = $Result.GetResult<Prisma.$MetalTypePayload, S>

  type MetalTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetalTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetalTypeCountAggregateInputType | true
    }

  export interface MetalTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetalType'], meta: { name: 'MetalType' } }
    /**
     * Find zero or one MetalType that matches the filter.
     * @param {MetalTypeFindUniqueArgs} args - Arguments to find a MetalType
     * @example
     * // Get one MetalType
     * const metalType = await prisma.metalType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetalTypeFindUniqueArgs>(args: SelectSubset<T, MetalTypeFindUniqueArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetalType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetalTypeFindUniqueOrThrowArgs} args - Arguments to find a MetalType
     * @example
     * // Get one MetalType
     * const metalType = await prisma.metalType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetalTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MetalTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetalType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeFindFirstArgs} args - Arguments to find a MetalType
     * @example
     * // Get one MetalType
     * const metalType = await prisma.metalType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetalTypeFindFirstArgs>(args?: SelectSubset<T, MetalTypeFindFirstArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetalType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeFindFirstOrThrowArgs} args - Arguments to find a MetalType
     * @example
     * // Get one MetalType
     * const metalType = await prisma.metalType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetalTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MetalTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetalTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetalTypes
     * const metalTypes = await prisma.metalType.findMany()
     * 
     * // Get first 10 MetalTypes
     * const metalTypes = await prisma.metalType.findMany({ take: 10 })
     * 
     * // Only select the `metalTypeId`
     * const metalTypeWithMetalTypeIdOnly = await prisma.metalType.findMany({ select: { metalTypeId: true } })
     * 
     */
    findMany<T extends MetalTypeFindManyArgs>(args?: SelectSubset<T, MetalTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetalType.
     * @param {MetalTypeCreateArgs} args - Arguments to create a MetalType.
     * @example
     * // Create one MetalType
     * const MetalType = await prisma.metalType.create({
     *   data: {
     *     // ... data to create a MetalType
     *   }
     * })
     * 
     */
    create<T extends MetalTypeCreateArgs>(args: SelectSubset<T, MetalTypeCreateArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetalTypes.
     * @param {MetalTypeCreateManyArgs} args - Arguments to create many MetalTypes.
     * @example
     * // Create many MetalTypes
     * const metalType = await prisma.metalType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetalTypeCreateManyArgs>(args?: SelectSubset<T, MetalTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetalType.
     * @param {MetalTypeDeleteArgs} args - Arguments to delete one MetalType.
     * @example
     * // Delete one MetalType
     * const MetalType = await prisma.metalType.delete({
     *   where: {
     *     // ... filter to delete one MetalType
     *   }
     * })
     * 
     */
    delete<T extends MetalTypeDeleteArgs>(args: SelectSubset<T, MetalTypeDeleteArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetalType.
     * @param {MetalTypeUpdateArgs} args - Arguments to update one MetalType.
     * @example
     * // Update one MetalType
     * const metalType = await prisma.metalType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetalTypeUpdateArgs>(args: SelectSubset<T, MetalTypeUpdateArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetalTypes.
     * @param {MetalTypeDeleteManyArgs} args - Arguments to filter MetalTypes to delete.
     * @example
     * // Delete a few MetalTypes
     * const { count } = await prisma.metalType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetalTypeDeleteManyArgs>(args?: SelectSubset<T, MetalTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetalTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetalTypes
     * const metalType = await prisma.metalType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetalTypeUpdateManyArgs>(args: SelectSubset<T, MetalTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetalType.
     * @param {MetalTypeUpsertArgs} args - Arguments to update or create a MetalType.
     * @example
     * // Update or create a MetalType
     * const metalType = await prisma.metalType.upsert({
     *   create: {
     *     // ... data to create a MetalType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetalType we want to update
     *   }
     * })
     */
    upsert<T extends MetalTypeUpsertArgs>(args: SelectSubset<T, MetalTypeUpsertArgs<ExtArgs>>): Prisma__MetalTypeClient<$Result.GetResult<Prisma.$MetalTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetalTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeCountArgs} args - Arguments to filter MetalTypes to count.
     * @example
     * // Count the number of MetalTypes
     * const count = await prisma.metalType.count({
     *   where: {
     *     // ... the filter for the MetalTypes we want to count
     *   }
     * })
    **/
    count<T extends MetalTypeCountArgs>(
      args?: Subset<T, MetalTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetalTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetalType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetalTypeAggregateArgs>(args: Subset<T, MetalTypeAggregateArgs>): Prisma.PrismaPromise<GetMetalTypeAggregateType<T>>

    /**
     * Group by MetalType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetalTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetalTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetalTypeGroupByArgs['orderBy'] }
        : { orderBy?: MetalTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetalTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetalTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetalType model
   */
  readonly fields: MetalTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetalType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetalTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetalType model
   */
  interface MetalTypeFieldRefs {
    readonly metalTypeId: FieldRef<"MetalType", 'Int'>
    readonly metalTypeName: FieldRef<"MetalType", 'String'>
    readonly createdAt: FieldRef<"MetalType", 'DateTime'>
    readonly updatedAt: FieldRef<"MetalType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetalType findUnique
   */
  export type MetalTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * Filter, which MetalType to fetch.
     */
    where: MetalTypeWhereUniqueInput
  }

  /**
   * MetalType findUniqueOrThrow
   */
  export type MetalTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * Filter, which MetalType to fetch.
     */
    where: MetalTypeWhereUniqueInput
  }

  /**
   * MetalType findFirst
   */
  export type MetalTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * Filter, which MetalType to fetch.
     */
    where?: MetalTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetalTypes to fetch.
     */
    orderBy?: MetalTypeOrderByWithRelationInput | MetalTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetalTypes.
     */
    cursor?: MetalTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetalTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetalTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetalTypes.
     */
    distinct?: MetalTypeScalarFieldEnum | MetalTypeScalarFieldEnum[]
  }

  /**
   * MetalType findFirstOrThrow
   */
  export type MetalTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * Filter, which MetalType to fetch.
     */
    where?: MetalTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetalTypes to fetch.
     */
    orderBy?: MetalTypeOrderByWithRelationInput | MetalTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetalTypes.
     */
    cursor?: MetalTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetalTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetalTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetalTypes.
     */
    distinct?: MetalTypeScalarFieldEnum | MetalTypeScalarFieldEnum[]
  }

  /**
   * MetalType findMany
   */
  export type MetalTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * Filter, which MetalTypes to fetch.
     */
    where?: MetalTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetalTypes to fetch.
     */
    orderBy?: MetalTypeOrderByWithRelationInput | MetalTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetalTypes.
     */
    cursor?: MetalTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetalTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetalTypes.
     */
    skip?: number
    distinct?: MetalTypeScalarFieldEnum | MetalTypeScalarFieldEnum[]
  }

  /**
   * MetalType create
   */
  export type MetalTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a MetalType.
     */
    data: XOR<MetalTypeCreateInput, MetalTypeUncheckedCreateInput>
  }

  /**
   * MetalType createMany
   */
  export type MetalTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetalTypes.
     */
    data: MetalTypeCreateManyInput | MetalTypeCreateManyInput[]
  }

  /**
   * MetalType update
   */
  export type MetalTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a MetalType.
     */
    data: XOR<MetalTypeUpdateInput, MetalTypeUncheckedUpdateInput>
    /**
     * Choose, which MetalType to update.
     */
    where: MetalTypeWhereUniqueInput
  }

  /**
   * MetalType updateMany
   */
  export type MetalTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetalTypes.
     */
    data: XOR<MetalTypeUpdateManyMutationInput, MetalTypeUncheckedUpdateManyInput>
    /**
     * Filter which MetalTypes to update
     */
    where?: MetalTypeWhereInput
    /**
     * Limit how many MetalTypes to update.
     */
    limit?: number
  }

  /**
   * MetalType upsert
   */
  export type MetalTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the MetalType to update in case it exists.
     */
    where: MetalTypeWhereUniqueInput
    /**
     * In case the MetalType found by the `where` argument doesn't exist, create a new MetalType with this data.
     */
    create: XOR<MetalTypeCreateInput, MetalTypeUncheckedCreateInput>
    /**
     * In case the MetalType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetalTypeUpdateInput, MetalTypeUncheckedUpdateInput>
  }

  /**
   * MetalType delete
   */
  export type MetalTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
    /**
     * Filter which MetalType to delete.
     */
    where: MetalTypeWhereUniqueInput
  }

  /**
   * MetalType deleteMany
   */
  export type MetalTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetalTypes to delete
     */
    where?: MetalTypeWhereInput
    /**
     * Limit how many MetalTypes to delete.
     */
    limit?: number
  }

  /**
   * MetalType without action
   */
  export type MetalTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetalType
     */
    select?: MetalTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetalType
     */
    omit?: MetalTypeOmit<ExtArgs> | null
  }


  /**
   * Model UnitType
   */

  export type AggregateUnitType = {
    _count: UnitTypeCountAggregateOutputType | null
    _avg: UnitTypeAvgAggregateOutputType | null
    _sum: UnitTypeSumAggregateOutputType | null
    _min: UnitTypeMinAggregateOutputType | null
    _max: UnitTypeMaxAggregateOutputType | null
  }

  export type UnitTypeAvgAggregateOutputType = {
    unitTypeId: number | null
  }

  export type UnitTypeSumAggregateOutputType = {
    unitTypeId: number | null
  }

  export type UnitTypeMinAggregateOutputType = {
    unitTypeId: number | null
    unitTypeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitTypeMaxAggregateOutputType = {
    unitTypeId: number | null
    unitTypeName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitTypeCountAggregateOutputType = {
    unitTypeId: number
    unitTypeName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitTypeAvgAggregateInputType = {
    unitTypeId?: true
  }

  export type UnitTypeSumAggregateInputType = {
    unitTypeId?: true
  }

  export type UnitTypeMinAggregateInputType = {
    unitTypeId?: true
    unitTypeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitTypeMaxAggregateInputType = {
    unitTypeId?: true
    unitTypeName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitTypeCountAggregateInputType = {
    unitTypeId?: true
    unitTypeName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitType to aggregate.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitTypes
    **/
    _count?: true | UnitTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitTypeMaxAggregateInputType
  }

  export type GetUnitTypeAggregateType<T extends UnitTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitType[P]>
      : GetScalarType<T[P], AggregateUnitType[P]>
  }




  export type UnitTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitTypeWhereInput
    orderBy?: UnitTypeOrderByWithAggregationInput | UnitTypeOrderByWithAggregationInput[]
    by: UnitTypeScalarFieldEnum[] | UnitTypeScalarFieldEnum
    having?: UnitTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitTypeCountAggregateInputType | true
    _avg?: UnitTypeAvgAggregateInputType
    _sum?: UnitTypeSumAggregateInputType
    _min?: UnitTypeMinAggregateInputType
    _max?: UnitTypeMaxAggregateInputType
  }

  export type UnitTypeGroupByOutputType = {
    unitTypeId: number
    unitTypeName: string
    createdAt: Date
    updatedAt: Date
    _count: UnitTypeCountAggregateOutputType | null
    _avg: UnitTypeAvgAggregateOutputType | null
    _sum: UnitTypeSumAggregateOutputType | null
    _min: UnitTypeMinAggregateOutputType | null
    _max: UnitTypeMaxAggregateOutputType | null
  }

  type GetUnitTypeGroupByPayload<T extends UnitTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitTypeGroupByOutputType[P]>
            : GetScalarType<T[P], UnitTypeGroupByOutputType[P]>
        }
      >
    >


  export type UnitTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitTypeId?: boolean
    unitTypeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["unitType"]>



  export type UnitTypeSelectScalar = {
    unitTypeId?: boolean
    unitTypeName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unitTypeId" | "unitTypeName" | "createdAt" | "updatedAt", ExtArgs["result"]["unitType"]>

  export type $UnitTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      unitTypeId: number
      unitTypeName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unitType"]>
    composites: {}
  }

  type UnitTypeGetPayload<S extends boolean | null | undefined | UnitTypeDefaultArgs> = $Result.GetResult<Prisma.$UnitTypePayload, S>

  type UnitTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitTypeCountAggregateInputType | true
    }

  export interface UnitTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitType'], meta: { name: 'UnitType' } }
    /**
     * Find zero or one UnitType that matches the filter.
     * @param {UnitTypeFindUniqueArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitTypeFindUniqueArgs>(args: SelectSubset<T, UnitTypeFindUniqueArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitTypeFindUniqueOrThrowArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeFindFirstArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitTypeFindFirstArgs>(args?: SelectSubset<T, UnitTypeFindFirstArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeFindFirstOrThrowArgs} args - Arguments to find a UnitType
     * @example
     * // Get one UnitType
     * const unitType = await prisma.unitType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitTypes
     * const unitTypes = await prisma.unitType.findMany()
     * 
     * // Get first 10 UnitTypes
     * const unitTypes = await prisma.unitType.findMany({ take: 10 })
     * 
     * // Only select the `unitTypeId`
     * const unitTypeWithUnitTypeIdOnly = await prisma.unitType.findMany({ select: { unitTypeId: true } })
     * 
     */
    findMany<T extends UnitTypeFindManyArgs>(args?: SelectSubset<T, UnitTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitType.
     * @param {UnitTypeCreateArgs} args - Arguments to create a UnitType.
     * @example
     * // Create one UnitType
     * const UnitType = await prisma.unitType.create({
     *   data: {
     *     // ... data to create a UnitType
     *   }
     * })
     * 
     */
    create<T extends UnitTypeCreateArgs>(args: SelectSubset<T, UnitTypeCreateArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitTypes.
     * @param {UnitTypeCreateManyArgs} args - Arguments to create many UnitTypes.
     * @example
     * // Create many UnitTypes
     * const unitType = await prisma.unitType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitTypeCreateManyArgs>(args?: SelectSubset<T, UnitTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UnitType.
     * @param {UnitTypeDeleteArgs} args - Arguments to delete one UnitType.
     * @example
     * // Delete one UnitType
     * const UnitType = await prisma.unitType.delete({
     *   where: {
     *     // ... filter to delete one UnitType
     *   }
     * })
     * 
     */
    delete<T extends UnitTypeDeleteArgs>(args: SelectSubset<T, UnitTypeDeleteArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitType.
     * @param {UnitTypeUpdateArgs} args - Arguments to update one UnitType.
     * @example
     * // Update one UnitType
     * const unitType = await prisma.unitType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitTypeUpdateArgs>(args: SelectSubset<T, UnitTypeUpdateArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitTypes.
     * @param {UnitTypeDeleteManyArgs} args - Arguments to filter UnitTypes to delete.
     * @example
     * // Delete a few UnitTypes
     * const { count } = await prisma.unitType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitTypeDeleteManyArgs>(args?: SelectSubset<T, UnitTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitTypes
     * const unitType = await prisma.unitType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitTypeUpdateManyArgs>(args: SelectSubset<T, UnitTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnitType.
     * @param {UnitTypeUpsertArgs} args - Arguments to update or create a UnitType.
     * @example
     * // Update or create a UnitType
     * const unitType = await prisma.unitType.upsert({
     *   create: {
     *     // ... data to create a UnitType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitType we want to update
     *   }
     * })
     */
    upsert<T extends UnitTypeUpsertArgs>(args: SelectSubset<T, UnitTypeUpsertArgs<ExtArgs>>): Prisma__UnitTypeClient<$Result.GetResult<Prisma.$UnitTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeCountArgs} args - Arguments to filter UnitTypes to count.
     * @example
     * // Count the number of UnitTypes
     * const count = await prisma.unitType.count({
     *   where: {
     *     // ... the filter for the UnitTypes we want to count
     *   }
     * })
    **/
    count<T extends UnitTypeCountArgs>(
      args?: Subset<T, UnitTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitTypeAggregateArgs>(args: Subset<T, UnitTypeAggregateArgs>): Prisma.PrismaPromise<GetUnitTypeAggregateType<T>>

    /**
     * Group by UnitType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitTypeGroupByArgs['orderBy'] }
        : { orderBy?: UnitTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitType model
   */
  readonly fields: UnitTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnitType model
   */
  interface UnitTypeFieldRefs {
    readonly unitTypeId: FieldRef<"UnitType", 'Int'>
    readonly unitTypeName: FieldRef<"UnitType", 'String'>
    readonly createdAt: FieldRef<"UnitType", 'DateTime'>
    readonly updatedAt: FieldRef<"UnitType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnitType findUnique
   */
  export type UnitTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType findUniqueOrThrow
   */
  export type UnitTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType findFirst
   */
  export type UnitTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitTypes.
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitTypes.
     */
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * UnitType findFirstOrThrow
   */
  export type UnitTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Filter, which UnitType to fetch.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitTypes.
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitTypes.
     */
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * UnitType findMany
   */
  export type UnitTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Filter, which UnitTypes to fetch.
     */
    where?: UnitTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitTypes to fetch.
     */
    orderBy?: UnitTypeOrderByWithRelationInput | UnitTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitTypes.
     */
    cursor?: UnitTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitTypes.
     */
    skip?: number
    distinct?: UnitTypeScalarFieldEnum | UnitTypeScalarFieldEnum[]
  }

  /**
   * UnitType create
   */
  export type UnitTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a UnitType.
     */
    data: XOR<UnitTypeCreateInput, UnitTypeUncheckedCreateInput>
  }

  /**
   * UnitType createMany
   */
  export type UnitTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitTypes.
     */
    data: UnitTypeCreateManyInput | UnitTypeCreateManyInput[]
  }

  /**
   * UnitType update
   */
  export type UnitTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a UnitType.
     */
    data: XOR<UnitTypeUpdateInput, UnitTypeUncheckedUpdateInput>
    /**
     * Choose, which UnitType to update.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType updateMany
   */
  export type UnitTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitTypes.
     */
    data: XOR<UnitTypeUpdateManyMutationInput, UnitTypeUncheckedUpdateManyInput>
    /**
     * Filter which UnitTypes to update
     */
    where?: UnitTypeWhereInput
    /**
     * Limit how many UnitTypes to update.
     */
    limit?: number
  }

  /**
   * UnitType upsert
   */
  export type UnitTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the UnitType to update in case it exists.
     */
    where: UnitTypeWhereUniqueInput
    /**
     * In case the UnitType found by the `where` argument doesn't exist, create a new UnitType with this data.
     */
    create: XOR<UnitTypeCreateInput, UnitTypeUncheckedCreateInput>
    /**
     * In case the UnitType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitTypeUpdateInput, UnitTypeUncheckedUpdateInput>
  }

  /**
   * UnitType delete
   */
  export type UnitTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
    /**
     * Filter which UnitType to delete.
     */
    where: UnitTypeWhereUniqueInput
  }

  /**
   * UnitType deleteMany
   */
  export type UnitTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitTypes to delete
     */
    where?: UnitTypeWhereInput
    /**
     * Limit how many UnitTypes to delete.
     */
    limit?: number
  }

  /**
   * UnitType without action
   */
  export type UnitTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitType
     */
    select?: UnitTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitType
     */
    omit?: UnitTypeOmit<ExtArgs> | null
  }


  /**
   * Model JobOrder
   */

  export type AggregateJobOrder = {
    _count: JobOrderCountAggregateOutputType | null
    _avg: JobOrderAvgAggregateOutputType | null
    _sum: JobOrderSumAggregateOutputType | null
    _min: JobOrderMinAggregateOutputType | null
    _max: JobOrderMaxAggregateOutputType | null
  }

  export type JobOrderAvgAggregateOutputType = {
    jobOrderId: number | null
    customerId: number | null
    customerBillItemNo: number | null
    productTypeId: number | null
    metalTypeId: number | null
    qty: number | null
    weight: number | null
  }

  export type JobOrderSumAggregateOutputType = {
    jobOrderId: number | null
    customerId: number | null
    customerBillItemNo: number | null
    productTypeId: number | null
    metalTypeId: number | null
    qty: number | null
    weight: number | null
  }

  export type JobOrderMinAggregateOutputType = {
    jobOrderId: number | null
    jobOrderNumber: string | null
    customerId: number | null
    jobDate: Date | null
    customerBillNumber: string | null
    customerBillItemNo: number | null
    productTypeId: number | null
    metalTypeId: number | null
    qty: number | null
    weight: number | null
    dueDate: Date | null
    status: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOrderMaxAggregateOutputType = {
    jobOrderId: number | null
    jobOrderNumber: string | null
    customerId: number | null
    jobDate: Date | null
    customerBillNumber: string | null
    customerBillItemNo: number | null
    productTypeId: number | null
    metalTypeId: number | null
    qty: number | null
    weight: number | null
    dueDate: Date | null
    status: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobOrderCountAggregateOutputType = {
    jobOrderId: number
    jobOrderNumber: number
    customerId: number
    jobDate: number
    customerBillNumber: number
    customerBillItemNo: number
    productTypeId: number
    metalTypeId: number
    qty: number
    weight: number
    dueDate: number
    status: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobOrderAvgAggregateInputType = {
    jobOrderId?: true
    customerId?: true
    customerBillItemNo?: true
    productTypeId?: true
    metalTypeId?: true
    qty?: true
    weight?: true
  }

  export type JobOrderSumAggregateInputType = {
    jobOrderId?: true
    customerId?: true
    customerBillItemNo?: true
    productTypeId?: true
    metalTypeId?: true
    qty?: true
    weight?: true
  }

  export type JobOrderMinAggregateInputType = {
    jobOrderId?: true
    jobOrderNumber?: true
    customerId?: true
    jobDate?: true
    customerBillNumber?: true
    customerBillItemNo?: true
    productTypeId?: true
    metalTypeId?: true
    qty?: true
    weight?: true
    dueDate?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOrderMaxAggregateInputType = {
    jobOrderId?: true
    jobOrderNumber?: true
    customerId?: true
    jobDate?: true
    customerBillNumber?: true
    customerBillItemNo?: true
    productTypeId?: true
    metalTypeId?: true
    qty?: true
    weight?: true
    dueDate?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobOrderCountAggregateInputType = {
    jobOrderId?: true
    jobOrderNumber?: true
    customerId?: true
    jobDate?: true
    customerBillNumber?: true
    customerBillItemNo?: true
    productTypeId?: true
    metalTypeId?: true
    qty?: true
    weight?: true
    dueDate?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOrder to aggregate.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobOrders
    **/
    _count?: true | JobOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobOrderMaxAggregateInputType
  }

  export type GetJobOrderAggregateType<T extends JobOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateJobOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobOrder[P]>
      : GetScalarType<T[P], AggregateJobOrder[P]>
  }




  export type JobOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobOrderWhereInput
    orderBy?: JobOrderOrderByWithAggregationInput | JobOrderOrderByWithAggregationInput[]
    by: JobOrderScalarFieldEnum[] | JobOrderScalarFieldEnum
    having?: JobOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobOrderCountAggregateInputType | true
    _avg?: JobOrderAvgAggregateInputType
    _sum?: JobOrderSumAggregateInputType
    _min?: JobOrderMinAggregateInputType
    _max?: JobOrderMaxAggregateInputType
  }

  export type JobOrderGroupByOutputType = {
    jobOrderId: number
    jobOrderNumber: string
    customerId: number
    jobDate: Date | null
    customerBillNumber: string | null
    customerBillItemNo: number | null
    productTypeId: number
    metalTypeId: number
    qty: number
    weight: number | null
    dueDate: Date | null
    status: string
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: JobOrderCountAggregateOutputType | null
    _avg: JobOrderAvgAggregateOutputType | null
    _sum: JobOrderSumAggregateOutputType | null
    _min: JobOrderMinAggregateOutputType | null
    _max: JobOrderMaxAggregateOutputType | null
  }

  type GetJobOrderGroupByPayload<T extends JobOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobOrderGroupByOutputType[P]>
            : GetScalarType<T[P], JobOrderGroupByOutputType[P]>
        }
      >
    >


  export type JobOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jobOrderId?: boolean
    jobOrderNumber?: boolean
    customerId?: boolean
    jobDate?: boolean
    customerBillNumber?: boolean
    customerBillItemNo?: boolean
    productTypeId?: boolean
    metalTypeId?: boolean
    qty?: boolean
    weight?: boolean
    dueDate?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobOrder"]>



  export type JobOrderSelectScalar = {
    jobOrderId?: boolean
    jobOrderNumber?: boolean
    customerId?: boolean
    jobDate?: boolean
    customerBillNumber?: boolean
    customerBillItemNo?: boolean
    productTypeId?: boolean
    metalTypeId?: boolean
    qty?: boolean
    weight?: boolean
    dueDate?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"jobOrderId" | "jobOrderNumber" | "customerId" | "jobDate" | "customerBillNumber" | "customerBillItemNo" | "productTypeId" | "metalTypeId" | "qty" | "weight" | "dueDate" | "status" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["jobOrder"]>

  export type $JobOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      jobOrderId: number
      jobOrderNumber: string
      customerId: number
      jobDate: Date | null
      customerBillNumber: string | null
      customerBillItemNo: number | null
      productTypeId: number
      metalTypeId: number
      qty: number
      weight: number | null
      dueDate: Date | null
      status: string
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobOrder"]>
    composites: {}
  }

  type JobOrderGetPayload<S extends boolean | null | undefined | JobOrderDefaultArgs> = $Result.GetResult<Prisma.$JobOrderPayload, S>

  type JobOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobOrderCountAggregateInputType | true
    }

  export interface JobOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobOrder'], meta: { name: 'JobOrder' } }
    /**
     * Find zero or one JobOrder that matches the filter.
     * @param {JobOrderFindUniqueArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobOrderFindUniqueArgs>(args: SelectSubset<T, JobOrderFindUniqueArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobOrderFindUniqueOrThrowArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, JobOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderFindFirstArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobOrderFindFirstArgs>(args?: SelectSubset<T, JobOrderFindFirstArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderFindFirstOrThrowArgs} args - Arguments to find a JobOrder
     * @example
     * // Get one JobOrder
     * const jobOrder = await prisma.jobOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, JobOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobOrders
     * const jobOrders = await prisma.jobOrder.findMany()
     * 
     * // Get first 10 JobOrders
     * const jobOrders = await prisma.jobOrder.findMany({ take: 10 })
     * 
     * // Only select the `jobOrderId`
     * const jobOrderWithJobOrderIdOnly = await prisma.jobOrder.findMany({ select: { jobOrderId: true } })
     * 
     */
    findMany<T extends JobOrderFindManyArgs>(args?: SelectSubset<T, JobOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobOrder.
     * @param {JobOrderCreateArgs} args - Arguments to create a JobOrder.
     * @example
     * // Create one JobOrder
     * const JobOrder = await prisma.jobOrder.create({
     *   data: {
     *     // ... data to create a JobOrder
     *   }
     * })
     * 
     */
    create<T extends JobOrderCreateArgs>(args: SelectSubset<T, JobOrderCreateArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobOrders.
     * @param {JobOrderCreateManyArgs} args - Arguments to create many JobOrders.
     * @example
     * // Create many JobOrders
     * const jobOrder = await prisma.jobOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobOrderCreateManyArgs>(args?: SelectSubset<T, JobOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobOrder.
     * @param {JobOrderDeleteArgs} args - Arguments to delete one JobOrder.
     * @example
     * // Delete one JobOrder
     * const JobOrder = await prisma.jobOrder.delete({
     *   where: {
     *     // ... filter to delete one JobOrder
     *   }
     * })
     * 
     */
    delete<T extends JobOrderDeleteArgs>(args: SelectSubset<T, JobOrderDeleteArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobOrder.
     * @param {JobOrderUpdateArgs} args - Arguments to update one JobOrder.
     * @example
     * // Update one JobOrder
     * const jobOrder = await prisma.jobOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobOrderUpdateArgs>(args: SelectSubset<T, JobOrderUpdateArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobOrders.
     * @param {JobOrderDeleteManyArgs} args - Arguments to filter JobOrders to delete.
     * @example
     * // Delete a few JobOrders
     * const { count } = await prisma.jobOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobOrderDeleteManyArgs>(args?: SelectSubset<T, JobOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobOrders
     * const jobOrder = await prisma.jobOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobOrderUpdateManyArgs>(args: SelectSubset<T, JobOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobOrder.
     * @param {JobOrderUpsertArgs} args - Arguments to update or create a JobOrder.
     * @example
     * // Update or create a JobOrder
     * const jobOrder = await prisma.jobOrder.upsert({
     *   create: {
     *     // ... data to create a JobOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobOrder we want to update
     *   }
     * })
     */
    upsert<T extends JobOrderUpsertArgs>(args: SelectSubset<T, JobOrderUpsertArgs<ExtArgs>>): Prisma__JobOrderClient<$Result.GetResult<Prisma.$JobOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderCountArgs} args - Arguments to filter JobOrders to count.
     * @example
     * // Count the number of JobOrders
     * const count = await prisma.jobOrder.count({
     *   where: {
     *     // ... the filter for the JobOrders we want to count
     *   }
     * })
    **/
    count<T extends JobOrderCountArgs>(
      args?: Subset<T, JobOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobOrderAggregateArgs>(args: Subset<T, JobOrderAggregateArgs>): Prisma.PrismaPromise<GetJobOrderAggregateType<T>>

    /**
     * Group by JobOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobOrderGroupByArgs['orderBy'] }
        : { orderBy?: JobOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobOrder model
   */
  readonly fields: JobOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobOrder model
   */
  interface JobOrderFieldRefs {
    readonly jobOrderId: FieldRef<"JobOrder", 'Int'>
    readonly jobOrderNumber: FieldRef<"JobOrder", 'String'>
    readonly customerId: FieldRef<"JobOrder", 'Int'>
    readonly jobDate: FieldRef<"JobOrder", 'DateTime'>
    readonly customerBillNumber: FieldRef<"JobOrder", 'String'>
    readonly customerBillItemNo: FieldRef<"JobOrder", 'Int'>
    readonly productTypeId: FieldRef<"JobOrder", 'Int'>
    readonly metalTypeId: FieldRef<"JobOrder", 'Int'>
    readonly qty: FieldRef<"JobOrder", 'Int'>
    readonly weight: FieldRef<"JobOrder", 'Float'>
    readonly dueDate: FieldRef<"JobOrder", 'DateTime'>
    readonly status: FieldRef<"JobOrder", 'String'>
    readonly remarks: FieldRef<"JobOrder", 'String'>
    readonly createdAt: FieldRef<"JobOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"JobOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobOrder findUnique
   */
  export type JobOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder findUniqueOrThrow
   */
  export type JobOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder findFirst
   */
  export type JobOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOrders.
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOrders.
     */
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * JobOrder findFirstOrThrow
   */
  export type JobOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Filter, which JobOrder to fetch.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobOrders.
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobOrders.
     */
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * JobOrder findMany
   */
  export type JobOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Filter, which JobOrders to fetch.
     */
    where?: JobOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobOrders to fetch.
     */
    orderBy?: JobOrderOrderByWithRelationInput | JobOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobOrders.
     */
    cursor?: JobOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobOrders.
     */
    skip?: number
    distinct?: JobOrderScalarFieldEnum | JobOrderScalarFieldEnum[]
  }

  /**
   * JobOrder create
   */
  export type JobOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * The data needed to create a JobOrder.
     */
    data: XOR<JobOrderCreateInput, JobOrderUncheckedCreateInput>
  }

  /**
   * JobOrder createMany
   */
  export type JobOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobOrders.
     */
    data: JobOrderCreateManyInput | JobOrderCreateManyInput[]
  }

  /**
   * JobOrder update
   */
  export type JobOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * The data needed to update a JobOrder.
     */
    data: XOR<JobOrderUpdateInput, JobOrderUncheckedUpdateInput>
    /**
     * Choose, which JobOrder to update.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder updateMany
   */
  export type JobOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobOrders.
     */
    data: XOR<JobOrderUpdateManyMutationInput, JobOrderUncheckedUpdateManyInput>
    /**
     * Filter which JobOrders to update
     */
    where?: JobOrderWhereInput
    /**
     * Limit how many JobOrders to update.
     */
    limit?: number
  }

  /**
   * JobOrder upsert
   */
  export type JobOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * The filter to search for the JobOrder to update in case it exists.
     */
    where: JobOrderWhereUniqueInput
    /**
     * In case the JobOrder found by the `where` argument doesn't exist, create a new JobOrder with this data.
     */
    create: XOR<JobOrderCreateInput, JobOrderUncheckedCreateInput>
    /**
     * In case the JobOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobOrderUpdateInput, JobOrderUncheckedUpdateInput>
  }

  /**
   * JobOrder delete
   */
  export type JobOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
    /**
     * Filter which JobOrder to delete.
     */
    where: JobOrderWhereUniqueInput
  }

  /**
   * JobOrder deleteMany
   */
  export type JobOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobOrders to delete
     */
    where?: JobOrderWhereInput
    /**
     * Limit how many JobOrders to delete.
     */
    limit?: number
  }

  /**
   * JobOrder without action
   */
  export type JobOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobOrder
     */
    select?: JobOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobOrder
     */
    omit?: JobOrderOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppUserScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    mobileNo: 'mobileNo',
    isActive: 'isActive',
    isAdmin: 'isAdmin',
    isLimitDevices: 'isLimitDevices',
    limitDeviceCount: 'limitDeviceCount',
    profilePic: 'profilePic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const MenuListScalarFieldEnum: {
    menuId: 'menuId',
    menuName: 'menuName',
    menuIcon: 'menuIcon',
    sorting: 'sorting',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuListScalarFieldEnum = (typeof MenuListScalarFieldEnum)[keyof typeof MenuListScalarFieldEnum]


  export const SubMenuScalarFieldEnum: {
    subMenuId: 'subMenuId',
    menuId: 'menuId',
    subMenuName: 'subMenuName',
    subMenuIcon: 'subMenuIcon',
    subMenuRoute: 'subMenuRoute',
    sorting: 'sorting',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubMenuScalarFieldEnum = (typeof SubMenuScalarFieldEnum)[keyof typeof SubMenuScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    departmentId: 'departmentId',
    departmentName: 'departmentName',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    employeeId: 'employeeId',
    namePrefix: 'namePrefix',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    hireDate: 'hireDate',
    jobTitle: 'jobTitle',
    departmentId: 'departmentId',
    birthDate: 'birthDate',
    idCardNumber: 'idCardNumber',
    address: 'address',
    salary: 'salary',
    remarks: 'remarks',
    isWorking: 'isWorking',
    empPicture: 'empPicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customerId: 'customerId',
    customerName: 'customerName',
    contactName: 'contactName',
    address: 'address',
    city: 'city',
    postalCode: 'postalCode',
    country: 'country',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductTypeScalarFieldEnum: {
    productTypeId: 'productTypeId',
    productTypeName: 'productTypeName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductTypeScalarFieldEnum = (typeof ProductTypeScalarFieldEnum)[keyof typeof ProductTypeScalarFieldEnum]


  export const MetalTypeScalarFieldEnum: {
    metalTypeId: 'metalTypeId',
    metalTypeName: 'metalTypeName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetalTypeScalarFieldEnum = (typeof MetalTypeScalarFieldEnum)[keyof typeof MetalTypeScalarFieldEnum]


  export const UnitTypeScalarFieldEnum: {
    unitTypeId: 'unitTypeId',
    unitTypeName: 'unitTypeName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitTypeScalarFieldEnum = (typeof UnitTypeScalarFieldEnum)[keyof typeof UnitTypeScalarFieldEnum]


  export const JobOrderScalarFieldEnum: {
    jobOrderId: 'jobOrderId',
    jobOrderNumber: 'jobOrderNumber',
    customerId: 'customerId',
    jobDate: 'jobDate',
    customerBillNumber: 'customerBillNumber',
    customerBillItemNo: 'customerBillItemNo',
    productTypeId: 'productTypeId',
    metalTypeId: 'metalTypeId',
    qty: 'qty',
    weight: 'weight',
    dueDate: 'dueDate',
    status: 'status',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobOrderScalarFieldEnum = (typeof JobOrderScalarFieldEnum)[keyof typeof JobOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    userId?: IntFilter<"AppUser"> | number
    userName?: StringFilter<"AppUser"> | string
    email?: StringFilter<"AppUser"> | string
    password?: StringFilter<"AppUser"> | string
    fullName?: StringFilter<"AppUser"> | string
    mobileNo?: StringNullableFilter<"AppUser"> | string | null
    isActive?: BoolFilter<"AppUser"> | boolean
    isAdmin?: BoolFilter<"AppUser"> | boolean
    isLimitDevices?: BoolFilter<"AppUser"> | boolean
    limitDeviceCount?: IntNullableFilter<"AppUser"> | number | null
    profilePic?: StringNullableFilter<"AppUser"> | string | null
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
  }

  export type AppUserOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    mobileNo?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isLimitDevices?: SortOrder
    limitDeviceCount?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    userName?: string
    email?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    password?: StringFilter<"AppUser"> | string
    fullName?: StringFilter<"AppUser"> | string
    mobileNo?: StringNullableFilter<"AppUser"> | string | null
    isActive?: BoolFilter<"AppUser"> | boolean
    isAdmin?: BoolFilter<"AppUser"> | boolean
    isLimitDevices?: BoolFilter<"AppUser"> | boolean
    limitDeviceCount?: IntNullableFilter<"AppUser"> | number | null
    profilePic?: StringNullableFilter<"AppUser"> | string | null
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeFilter<"AppUser"> | Date | string
  }, "userId" | "userName" | "email">

  export type AppUserOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    mobileNo?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isLimitDevices?: SortOrder
    limitDeviceCount?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _avg?: AppUserAvgOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
    _sum?: AppUserSumOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"AppUser"> | number
    userName?: StringWithAggregatesFilter<"AppUser"> | string
    email?: StringWithAggregatesFilter<"AppUser"> | string
    password?: StringWithAggregatesFilter<"AppUser"> | string
    fullName?: StringWithAggregatesFilter<"AppUser"> | string
    mobileNo?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    isActive?: BoolWithAggregatesFilter<"AppUser"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"AppUser"> | boolean
    isLimitDevices?: BoolWithAggregatesFilter<"AppUser"> | boolean
    limitDeviceCount?: IntNullableWithAggregatesFilter<"AppUser"> | number | null
    profilePic?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
  }

  export type MenuListWhereInput = {
    AND?: MenuListWhereInput | MenuListWhereInput[]
    OR?: MenuListWhereInput[]
    NOT?: MenuListWhereInput | MenuListWhereInput[]
    menuId?: IntFilter<"MenuList"> | number
    menuName?: StringFilter<"MenuList"> | string
    menuIcon?: StringFilter<"MenuList"> | string
    sorting?: IntFilter<"MenuList"> | number
    isActive?: BoolFilter<"MenuList"> | boolean
    createdAt?: DateTimeFilter<"MenuList"> | Date | string
    updatedAt?: DateTimeFilter<"MenuList"> | Date | string
    SubMenu?: SubMenuListRelationFilter
  }

  export type MenuListOrderByWithRelationInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    menuIcon?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SubMenu?: SubMenuOrderByRelationAggregateInput
  }

  export type MenuListWhereUniqueInput = Prisma.AtLeast<{
    menuId?: number
    AND?: MenuListWhereInput | MenuListWhereInput[]
    OR?: MenuListWhereInput[]
    NOT?: MenuListWhereInput | MenuListWhereInput[]
    menuName?: StringFilter<"MenuList"> | string
    menuIcon?: StringFilter<"MenuList"> | string
    sorting?: IntFilter<"MenuList"> | number
    isActive?: BoolFilter<"MenuList"> | boolean
    createdAt?: DateTimeFilter<"MenuList"> | Date | string
    updatedAt?: DateTimeFilter<"MenuList"> | Date | string
    SubMenu?: SubMenuListRelationFilter
  }, "menuId">

  export type MenuListOrderByWithAggregationInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    menuIcon?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuListCountOrderByAggregateInput
    _avg?: MenuListAvgOrderByAggregateInput
    _max?: MenuListMaxOrderByAggregateInput
    _min?: MenuListMinOrderByAggregateInput
    _sum?: MenuListSumOrderByAggregateInput
  }

  export type MenuListScalarWhereWithAggregatesInput = {
    AND?: MenuListScalarWhereWithAggregatesInput | MenuListScalarWhereWithAggregatesInput[]
    OR?: MenuListScalarWhereWithAggregatesInput[]
    NOT?: MenuListScalarWhereWithAggregatesInput | MenuListScalarWhereWithAggregatesInput[]
    menuId?: IntWithAggregatesFilter<"MenuList"> | number
    menuName?: StringWithAggregatesFilter<"MenuList"> | string
    menuIcon?: StringWithAggregatesFilter<"MenuList"> | string
    sorting?: IntWithAggregatesFilter<"MenuList"> | number
    isActive?: BoolWithAggregatesFilter<"MenuList"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MenuList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuList"> | Date | string
  }

  export type SubMenuWhereInput = {
    AND?: SubMenuWhereInput | SubMenuWhereInput[]
    OR?: SubMenuWhereInput[]
    NOT?: SubMenuWhereInput | SubMenuWhereInput[]
    subMenuId?: IntFilter<"SubMenu"> | number
    menuId?: IntFilter<"SubMenu"> | number
    subMenuName?: StringFilter<"SubMenu"> | string
    subMenuIcon?: StringFilter<"SubMenu"> | string
    subMenuRoute?: StringFilter<"SubMenu"> | string
    sorting?: IntFilter<"SubMenu"> | number
    isActive?: BoolFilter<"SubMenu"> | boolean
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeFilter<"SubMenu"> | Date | string
    menuList?: XOR<MenuListScalarRelationFilter, MenuListWhereInput>
  }

  export type SubMenuOrderByWithRelationInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    subMenuName?: SortOrder
    subMenuIcon?: SortOrder
    subMenuRoute?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuList?: MenuListOrderByWithRelationInput
  }

  export type SubMenuWhereUniqueInput = Prisma.AtLeast<{
    subMenuId?: number
    AND?: SubMenuWhereInput | SubMenuWhereInput[]
    OR?: SubMenuWhereInput[]
    NOT?: SubMenuWhereInput | SubMenuWhereInput[]
    menuId?: IntFilter<"SubMenu"> | number
    subMenuName?: StringFilter<"SubMenu"> | string
    subMenuIcon?: StringFilter<"SubMenu"> | string
    subMenuRoute?: StringFilter<"SubMenu"> | string
    sorting?: IntFilter<"SubMenu"> | number
    isActive?: BoolFilter<"SubMenu"> | boolean
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeFilter<"SubMenu"> | Date | string
    menuList?: XOR<MenuListScalarRelationFilter, MenuListWhereInput>
  }, "subMenuId">

  export type SubMenuOrderByWithAggregationInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    subMenuName?: SortOrder
    subMenuIcon?: SortOrder
    subMenuRoute?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubMenuCountOrderByAggregateInput
    _avg?: SubMenuAvgOrderByAggregateInput
    _max?: SubMenuMaxOrderByAggregateInput
    _min?: SubMenuMinOrderByAggregateInput
    _sum?: SubMenuSumOrderByAggregateInput
  }

  export type SubMenuScalarWhereWithAggregatesInput = {
    AND?: SubMenuScalarWhereWithAggregatesInput | SubMenuScalarWhereWithAggregatesInput[]
    OR?: SubMenuScalarWhereWithAggregatesInput[]
    NOT?: SubMenuScalarWhereWithAggregatesInput | SubMenuScalarWhereWithAggregatesInput[]
    subMenuId?: IntWithAggregatesFilter<"SubMenu"> | number
    menuId?: IntWithAggregatesFilter<"SubMenu"> | number
    subMenuName?: StringWithAggregatesFilter<"SubMenu"> | string
    subMenuIcon?: StringWithAggregatesFilter<"SubMenu"> | string
    subMenuRoute?: StringWithAggregatesFilter<"SubMenu"> | string
    sorting?: IntWithAggregatesFilter<"SubMenu"> | number
    isActive?: BoolWithAggregatesFilter<"SubMenu"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubMenu"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentId?: IntFilter<"Department"> | number
    departmentName?: StringFilter<"Department"> | string
    isActive?: BoolFilter<"Department"> | boolean
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    Employee?: EmployeeListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Employee?: EmployeeOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    departmentId?: number
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    departmentName?: StringFilter<"Department"> | string
    isActive?: BoolFilter<"Department"> | boolean
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    Employee?: EmployeeListRelationFilter
  }, "departmentId">

  export type DepartmentOrderByWithAggregationInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    departmentId?: IntWithAggregatesFilter<"Department"> | number
    departmentName?: StringWithAggregatesFilter<"Department"> | string
    isActive?: BoolWithAggregatesFilter<"Department"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    namePrefix?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phoneNumber?: StringNullableFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    jobTitle?: StringNullableFilter<"Employee"> | string | null
    departmentId?: IntFilter<"Employee"> | number
    birthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    idCardNumber?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    salary?: FloatNullableFilter<"Employee"> | number | null
    remarks?: StringNullableFilter<"Employee"> | string | null
    isWorking?: BoolFilter<"Employee"> | boolean
    empPicture?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type EmployeeOrderByWithRelationInput = {
    employeeId?: SortOrder
    namePrefix?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    hireDate?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    idCardNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    isWorking?: SortOrder
    empPicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: number
    email?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    namePrefix?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    phoneNumber?: StringNullableFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    jobTitle?: StringNullableFilter<"Employee"> | string | null
    departmentId?: IntFilter<"Employee"> | number
    birthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    idCardNumber?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    salary?: FloatNullableFilter<"Employee"> | number | null
    remarks?: StringNullableFilter<"Employee"> | string | null
    isWorking?: BoolFilter<"Employee"> | boolean
    empPicture?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "employeeId" | "email">

  export type EmployeeOrderByWithAggregationInput = {
    employeeId?: SortOrder
    namePrefix?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    hireDate?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    departmentId?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    idCardNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    isWorking?: SortOrder
    empPicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    employeeId?: IntWithAggregatesFilter<"Employee"> | number
    namePrefix?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    departmentId?: IntWithAggregatesFilter<"Employee"> | number
    birthDate?: DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null
    idCardNumber?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    address?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    salary?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
    remarks?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    isWorking?: BoolWithAggregatesFilter<"Employee"> | boolean
    empPicture?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: IntFilter<"Customer"> | number
    customerName?: StringFilter<"Customer"> | string
    contactName?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    country?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    contactName?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerName?: StringFilter<"Customer"> | string
    contactName?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    country?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }, "customerId">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    contactName?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    country?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customer"> | number
    customerName?: StringWithAggregatesFilter<"Customer"> | string
    contactName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    country?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProductTypeWhereInput = {
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    productTypeId?: IntFilter<"ProductType"> | number
    productTypeName?: StringFilter<"ProductType"> | string
    createdAt?: DateTimeFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeFilter<"ProductType"> | Date | string
  }

  export type ProductTypeOrderByWithRelationInput = {
    productTypeId?: SortOrder
    productTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeWhereUniqueInput = Prisma.AtLeast<{
    productTypeId?: number
    AND?: ProductTypeWhereInput | ProductTypeWhereInput[]
    OR?: ProductTypeWhereInput[]
    NOT?: ProductTypeWhereInput | ProductTypeWhereInput[]
    productTypeName?: StringFilter<"ProductType"> | string
    createdAt?: DateTimeFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeFilter<"ProductType"> | Date | string
  }, "productTypeId">

  export type ProductTypeOrderByWithAggregationInput = {
    productTypeId?: SortOrder
    productTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductTypeCountOrderByAggregateInput
    _avg?: ProductTypeAvgOrderByAggregateInput
    _max?: ProductTypeMaxOrderByAggregateInput
    _min?: ProductTypeMinOrderByAggregateInput
    _sum?: ProductTypeSumOrderByAggregateInput
  }

  export type ProductTypeScalarWhereWithAggregatesInput = {
    AND?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    OR?: ProductTypeScalarWhereWithAggregatesInput[]
    NOT?: ProductTypeScalarWhereWithAggregatesInput | ProductTypeScalarWhereWithAggregatesInput[]
    productTypeId?: IntWithAggregatesFilter<"ProductType"> | number
    productTypeName?: StringWithAggregatesFilter<"ProductType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductType"> | Date | string
  }

  export type MetalTypeWhereInput = {
    AND?: MetalTypeWhereInput | MetalTypeWhereInput[]
    OR?: MetalTypeWhereInput[]
    NOT?: MetalTypeWhereInput | MetalTypeWhereInput[]
    metalTypeId?: IntFilter<"MetalType"> | number
    metalTypeName?: StringFilter<"MetalType"> | string
    createdAt?: DateTimeFilter<"MetalType"> | Date | string
    updatedAt?: DateTimeFilter<"MetalType"> | Date | string
  }

  export type MetalTypeOrderByWithRelationInput = {
    metalTypeId?: SortOrder
    metalTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetalTypeWhereUniqueInput = Prisma.AtLeast<{
    metalTypeId?: number
    AND?: MetalTypeWhereInput | MetalTypeWhereInput[]
    OR?: MetalTypeWhereInput[]
    NOT?: MetalTypeWhereInput | MetalTypeWhereInput[]
    metalTypeName?: StringFilter<"MetalType"> | string
    createdAt?: DateTimeFilter<"MetalType"> | Date | string
    updatedAt?: DateTimeFilter<"MetalType"> | Date | string
  }, "metalTypeId">

  export type MetalTypeOrderByWithAggregationInput = {
    metalTypeId?: SortOrder
    metalTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetalTypeCountOrderByAggregateInput
    _avg?: MetalTypeAvgOrderByAggregateInput
    _max?: MetalTypeMaxOrderByAggregateInput
    _min?: MetalTypeMinOrderByAggregateInput
    _sum?: MetalTypeSumOrderByAggregateInput
  }

  export type MetalTypeScalarWhereWithAggregatesInput = {
    AND?: MetalTypeScalarWhereWithAggregatesInput | MetalTypeScalarWhereWithAggregatesInput[]
    OR?: MetalTypeScalarWhereWithAggregatesInput[]
    NOT?: MetalTypeScalarWhereWithAggregatesInput | MetalTypeScalarWhereWithAggregatesInput[]
    metalTypeId?: IntWithAggregatesFilter<"MetalType"> | number
    metalTypeName?: StringWithAggregatesFilter<"MetalType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MetalType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetalType"> | Date | string
  }

  export type UnitTypeWhereInput = {
    AND?: UnitTypeWhereInput | UnitTypeWhereInput[]
    OR?: UnitTypeWhereInput[]
    NOT?: UnitTypeWhereInput | UnitTypeWhereInput[]
    unitTypeId?: IntFilter<"UnitType"> | number
    unitTypeName?: StringFilter<"UnitType"> | string
    createdAt?: DateTimeFilter<"UnitType"> | Date | string
    updatedAt?: DateTimeFilter<"UnitType"> | Date | string
  }

  export type UnitTypeOrderByWithRelationInput = {
    unitTypeId?: SortOrder
    unitTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitTypeWhereUniqueInput = Prisma.AtLeast<{
    unitTypeId?: number
    AND?: UnitTypeWhereInput | UnitTypeWhereInput[]
    OR?: UnitTypeWhereInput[]
    NOT?: UnitTypeWhereInput | UnitTypeWhereInput[]
    unitTypeName?: StringFilter<"UnitType"> | string
    createdAt?: DateTimeFilter<"UnitType"> | Date | string
    updatedAt?: DateTimeFilter<"UnitType"> | Date | string
  }, "unitTypeId">

  export type UnitTypeOrderByWithAggregationInput = {
    unitTypeId?: SortOrder
    unitTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitTypeCountOrderByAggregateInput
    _avg?: UnitTypeAvgOrderByAggregateInput
    _max?: UnitTypeMaxOrderByAggregateInput
    _min?: UnitTypeMinOrderByAggregateInput
    _sum?: UnitTypeSumOrderByAggregateInput
  }

  export type UnitTypeScalarWhereWithAggregatesInput = {
    AND?: UnitTypeScalarWhereWithAggregatesInput | UnitTypeScalarWhereWithAggregatesInput[]
    OR?: UnitTypeScalarWhereWithAggregatesInput[]
    NOT?: UnitTypeScalarWhereWithAggregatesInput | UnitTypeScalarWhereWithAggregatesInput[]
    unitTypeId?: IntWithAggregatesFilter<"UnitType"> | number
    unitTypeName?: StringWithAggregatesFilter<"UnitType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UnitType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnitType"> | Date | string
  }

  export type JobOrderWhereInput = {
    AND?: JobOrderWhereInput | JobOrderWhereInput[]
    OR?: JobOrderWhereInput[]
    NOT?: JobOrderWhereInput | JobOrderWhereInput[]
    jobOrderId?: IntFilter<"JobOrder"> | number
    jobOrderNumber?: StringFilter<"JobOrder"> | string
    customerId?: IntFilter<"JobOrder"> | number
    jobDate?: DateTimeNullableFilter<"JobOrder"> | Date | string | null
    customerBillNumber?: StringNullableFilter<"JobOrder"> | string | null
    customerBillItemNo?: IntNullableFilter<"JobOrder"> | number | null
    productTypeId?: IntFilter<"JobOrder"> | number
    metalTypeId?: IntFilter<"JobOrder"> | number
    qty?: IntFilter<"JobOrder"> | number
    weight?: FloatNullableFilter<"JobOrder"> | number | null
    dueDate?: DateTimeNullableFilter<"JobOrder"> | Date | string | null
    status?: StringFilter<"JobOrder"> | string
    remarks?: StringNullableFilter<"JobOrder"> | string | null
    createdAt?: DateTimeFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeFilter<"JobOrder"> | Date | string
  }

  export type JobOrderOrderByWithRelationInput = {
    jobOrderId?: SortOrder
    jobOrderNumber?: SortOrder
    customerId?: SortOrder
    jobDate?: SortOrderInput | SortOrder
    customerBillNumber?: SortOrderInput | SortOrder
    customerBillItemNo?: SortOrderInput | SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderWhereUniqueInput = Prisma.AtLeast<{
    jobOrderId?: number
    jobOrderNumber?: string
    AND?: JobOrderWhereInput | JobOrderWhereInput[]
    OR?: JobOrderWhereInput[]
    NOT?: JobOrderWhereInput | JobOrderWhereInput[]
    customerId?: IntFilter<"JobOrder"> | number
    jobDate?: DateTimeNullableFilter<"JobOrder"> | Date | string | null
    customerBillNumber?: StringNullableFilter<"JobOrder"> | string | null
    customerBillItemNo?: IntNullableFilter<"JobOrder"> | number | null
    productTypeId?: IntFilter<"JobOrder"> | number
    metalTypeId?: IntFilter<"JobOrder"> | number
    qty?: IntFilter<"JobOrder"> | number
    weight?: FloatNullableFilter<"JobOrder"> | number | null
    dueDate?: DateTimeNullableFilter<"JobOrder"> | Date | string | null
    status?: StringFilter<"JobOrder"> | string
    remarks?: StringNullableFilter<"JobOrder"> | string | null
    createdAt?: DateTimeFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeFilter<"JobOrder"> | Date | string
  }, "jobOrderId" | "jobOrderNumber">

  export type JobOrderOrderByWithAggregationInput = {
    jobOrderId?: SortOrder
    jobOrderNumber?: SortOrder
    customerId?: SortOrder
    jobDate?: SortOrderInput | SortOrder
    customerBillNumber?: SortOrderInput | SortOrder
    customerBillItemNo?: SortOrderInput | SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobOrderCountOrderByAggregateInput
    _avg?: JobOrderAvgOrderByAggregateInput
    _max?: JobOrderMaxOrderByAggregateInput
    _min?: JobOrderMinOrderByAggregateInput
    _sum?: JobOrderSumOrderByAggregateInput
  }

  export type JobOrderScalarWhereWithAggregatesInput = {
    AND?: JobOrderScalarWhereWithAggregatesInput | JobOrderScalarWhereWithAggregatesInput[]
    OR?: JobOrderScalarWhereWithAggregatesInput[]
    NOT?: JobOrderScalarWhereWithAggregatesInput | JobOrderScalarWhereWithAggregatesInput[]
    jobOrderId?: IntWithAggregatesFilter<"JobOrder"> | number
    jobOrderNumber?: StringWithAggregatesFilter<"JobOrder"> | string
    customerId?: IntWithAggregatesFilter<"JobOrder"> | number
    jobDate?: DateTimeNullableWithAggregatesFilter<"JobOrder"> | Date | string | null
    customerBillNumber?: StringNullableWithAggregatesFilter<"JobOrder"> | string | null
    customerBillItemNo?: IntNullableWithAggregatesFilter<"JobOrder"> | number | null
    productTypeId?: IntWithAggregatesFilter<"JobOrder"> | number
    metalTypeId?: IntWithAggregatesFilter<"JobOrder"> | number
    qty?: IntWithAggregatesFilter<"JobOrder"> | number
    weight?: FloatNullableWithAggregatesFilter<"JobOrder"> | number | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"JobOrder"> | Date | string | null
    status?: StringWithAggregatesFilter<"JobOrder"> | string
    remarks?: StringNullableWithAggregatesFilter<"JobOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobOrder"> | Date | string
  }

  export type AppUserCreateInput = {
    userName: string
    email: string
    password: string
    fullName: string
    mobileNo?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isLimitDevices?: boolean
    limitDeviceCount?: number | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppUserUncheckedCreateInput = {
    userId?: number
    userName: string
    email: string
    password: string
    fullName: string
    mobileNo?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isLimitDevices?: boolean
    limitDeviceCount?: number | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppUserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isLimitDevices?: BoolFieldUpdateOperationsInput | boolean
    limitDeviceCount?: NullableIntFieldUpdateOperationsInput | number | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isLimitDevices?: BoolFieldUpdateOperationsInput | boolean
    limitDeviceCount?: NullableIntFieldUpdateOperationsInput | number | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserCreateManyInput = {
    userName: string
    email: string
    password: string
    fullName: string
    mobileNo?: string | null
    isActive?: boolean
    isAdmin?: boolean
    isLimitDevices?: boolean
    limitDeviceCount?: number | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppUserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isLimitDevices?: BoolFieldUpdateOperationsInput | boolean
    limitDeviceCount?: NullableIntFieldUpdateOperationsInput | number | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isLimitDevices?: BoolFieldUpdateOperationsInput | boolean
    limitDeviceCount?: NullableIntFieldUpdateOperationsInput | number | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuListCreateInput = {
    menuName: string
    menuIcon: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    SubMenu?: SubMenuCreateNestedManyWithoutMenuListInput
  }

  export type MenuListUncheckedCreateInput = {
    menuId?: number
    menuName: string
    menuIcon: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    SubMenu?: SubMenuUncheckedCreateNestedManyWithoutMenuListInput
  }

  export type MenuListUpdateInput = {
    menuName?: StringFieldUpdateOperationsInput | string
    menuIcon?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubMenu?: SubMenuUpdateManyWithoutMenuListNestedInput
  }

  export type MenuListUncheckedUpdateInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    menuName?: StringFieldUpdateOperationsInput | string
    menuIcon?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubMenu?: SubMenuUncheckedUpdateManyWithoutMenuListNestedInput
  }

  export type MenuListCreateManyInput = {
    menuName: string
    menuIcon: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuListUpdateManyMutationInput = {
    menuName?: StringFieldUpdateOperationsInput | string
    menuIcon?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuListUncheckedUpdateManyInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    menuName?: StringFieldUpdateOperationsInput | string
    menuIcon?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuCreateInput = {
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    menuList: MenuListCreateNestedOneWithoutSubMenuInput
  }

  export type SubMenuUncheckedCreateInput = {
    subMenuId?: number
    menuId: number
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuUpdateInput = {
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuList?: MenuListUpdateOneRequiredWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateInput = {
    subMenuId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuCreateManyInput = {
    menuId: number
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuUpdateManyMutationInput = {
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuUncheckedUpdateManyInput = {
    subMenuId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    departmentName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: EmployeeCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    departmentId?: number
    departmentName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Employee?: EmployeeUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Employee?: EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    departmentName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    namePrefix?: string | null
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    hireDate?: Date | string | null
    jobTitle?: string | null
    birthDate?: Date | string | null
    idCardNumber?: string | null
    address?: string | null
    salary?: number | null
    remarks?: string | null
    isWorking?: boolean
    empPicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    employeeId?: number
    namePrefix?: string | null
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    hireDate?: Date | string | null
    jobTitle?: string | null
    departmentId: number
    birthDate?: Date | string | null
    idCardNumber?: string | null
    address?: string | null
    salary?: number | null
    remarks?: string | null
    isWorking?: boolean
    empPicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateInput = {
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: IntFieldUpdateOperationsInput | number
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyInput = {
    namePrefix?: string | null
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    hireDate?: Date | string | null
    jobTitle?: string | null
    departmentId: number
    birthDate?: Date | string | null
    idCardNumber?: string | null
    address?: string | null
    salary?: number | null
    remarks?: string | null
    isWorking?: boolean
    empPicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: IntFieldUpdateOperationsInput | number
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    customerName: string
    contactName?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: number
    customerName: string
    contactName?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    customerName?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyInput = {
    customerName: string
    contactName?: string | null
    address?: string | null
    city?: string | null
    postalCode?: string | null
    country?: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    customerName?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeCreateInput = {
    productTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTypeUncheckedCreateInput = {
    productTypeId?: number
    productTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTypeUpdateInput = {
    productTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeUncheckedUpdateInput = {
    productTypeId?: IntFieldUpdateOperationsInput | number
    productTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeCreateManyInput = {
    productTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductTypeUpdateManyMutationInput = {
    productTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductTypeUncheckedUpdateManyInput = {
    productTypeId?: IntFieldUpdateOperationsInput | number
    productTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetalTypeCreateInput = {
    metalTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetalTypeUncheckedCreateInput = {
    metalTypeId?: number
    metalTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetalTypeUpdateInput = {
    metalTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetalTypeUncheckedUpdateInput = {
    metalTypeId?: IntFieldUpdateOperationsInput | number
    metalTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetalTypeCreateManyInput = {
    metalTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetalTypeUpdateManyMutationInput = {
    metalTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetalTypeUncheckedUpdateManyInput = {
    metalTypeId?: IntFieldUpdateOperationsInput | number
    metalTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitTypeCreateInput = {
    unitTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitTypeUncheckedCreateInput = {
    unitTypeId?: number
    unitTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitTypeUpdateInput = {
    unitTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitTypeUncheckedUpdateInput = {
    unitTypeId?: IntFieldUpdateOperationsInput | number
    unitTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitTypeCreateManyInput = {
    unitTypeName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitTypeUpdateManyMutationInput = {
    unitTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitTypeUncheckedUpdateManyInput = {
    unitTypeId?: IntFieldUpdateOperationsInput | number
    unitTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderCreateInput = {
    jobOrderNumber: string
    customerId: number
    jobDate?: Date | string | null
    customerBillNumber?: string | null
    customerBillItemNo?: number | null
    productTypeId: number
    metalTypeId: number
    qty?: number
    weight?: number | null
    dueDate?: Date | string | null
    status?: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOrderUncheckedCreateInput = {
    jobOrderId?: number
    jobOrderNumber: string
    customerId: number
    jobDate?: Date | string | null
    customerBillNumber?: string | null
    customerBillItemNo?: number | null
    productTypeId: number
    metalTypeId: number
    qty?: number
    weight?: number | null
    dueDate?: Date | string | null
    status?: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOrderUpdateInput = {
    jobOrderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    jobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerBillNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerBillItemNo?: NullableIntFieldUpdateOperationsInput | number | null
    productTypeId?: IntFieldUpdateOperationsInput | number
    metalTypeId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderUncheckedUpdateInput = {
    jobOrderId?: IntFieldUpdateOperationsInput | number
    jobOrderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    jobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerBillNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerBillItemNo?: NullableIntFieldUpdateOperationsInput | number | null
    productTypeId?: IntFieldUpdateOperationsInput | number
    metalTypeId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderCreateManyInput = {
    jobOrderNumber: string
    customerId: number
    jobDate?: Date | string | null
    customerBillNumber?: string | null
    customerBillItemNo?: number | null
    productTypeId: number
    metalTypeId: number
    qty?: number
    weight?: number | null
    dueDate?: Date | string | null
    status?: string
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobOrderUpdateManyMutationInput = {
    jobOrderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    jobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerBillNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerBillItemNo?: NullableIntFieldUpdateOperationsInput | number | null
    productTypeId?: IntFieldUpdateOperationsInput | number
    metalTypeId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobOrderUncheckedUpdateManyInput = {
    jobOrderId?: IntFieldUpdateOperationsInput | number
    jobOrderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
    jobDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerBillNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerBillItemNo?: NullableIntFieldUpdateOperationsInput | number | null
    productTypeId?: IntFieldUpdateOperationsInput | number
    metalTypeId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    mobileNo?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isLimitDevices?: SortOrder
    limitDeviceCount?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserAvgOrderByAggregateInput = {
    userId?: SortOrder
    limitDeviceCount?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    mobileNo?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isLimitDevices?: SortOrder
    limitDeviceCount?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    mobileNo?: SortOrder
    isActive?: SortOrder
    isAdmin?: SortOrder
    isLimitDevices?: SortOrder
    limitDeviceCount?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppUserSumOrderByAggregateInput = {
    userId?: SortOrder
    limitDeviceCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SubMenuListRelationFilter = {
    every?: SubMenuWhereInput
    some?: SubMenuWhereInput
    none?: SubMenuWhereInput
  }

  export type SubMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuListCountOrderByAggregateInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    menuIcon?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuListAvgOrderByAggregateInput = {
    menuId?: SortOrder
    sorting?: SortOrder
  }

  export type MenuListMaxOrderByAggregateInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    menuIcon?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuListMinOrderByAggregateInput = {
    menuId?: SortOrder
    menuName?: SortOrder
    menuIcon?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuListSumOrderByAggregateInput = {
    menuId?: SortOrder
    sorting?: SortOrder
  }

  export type MenuListScalarRelationFilter = {
    is?: MenuListWhereInput
    isNot?: MenuListWhereInput
  }

  export type SubMenuCountOrderByAggregateInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    subMenuName?: SortOrder
    subMenuIcon?: SortOrder
    subMenuRoute?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubMenuAvgOrderByAggregateInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    sorting?: SortOrder
  }

  export type SubMenuMaxOrderByAggregateInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    subMenuName?: SortOrder
    subMenuIcon?: SortOrder
    subMenuRoute?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubMenuMinOrderByAggregateInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    subMenuName?: SortOrder
    subMenuIcon?: SortOrder
    subMenuRoute?: SortOrder
    sorting?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubMenuSumOrderByAggregateInput = {
    subMenuId?: SortOrder
    menuId?: SortOrder
    sorting?: SortOrder
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    departmentId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    departmentId?: SortOrder
    departmentName?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    departmentId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    employeeId?: SortOrder
    namePrefix?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    hireDate?: SortOrder
    jobTitle?: SortOrder
    departmentId?: SortOrder
    birthDate?: SortOrder
    idCardNumber?: SortOrder
    address?: SortOrder
    salary?: SortOrder
    remarks?: SortOrder
    isWorking?: SortOrder
    empPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    namePrefix?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    hireDate?: SortOrder
    jobTitle?: SortOrder
    departmentId?: SortOrder
    birthDate?: SortOrder
    idCardNumber?: SortOrder
    address?: SortOrder
    salary?: SortOrder
    remarks?: SortOrder
    isWorking?: SortOrder
    empPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    employeeId?: SortOrder
    namePrefix?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    hireDate?: SortOrder
    jobTitle?: SortOrder
    departmentId?: SortOrder
    birthDate?: SortOrder
    idCardNumber?: SortOrder
    address?: SortOrder
    salary?: SortOrder
    remarks?: SortOrder
    isWorking?: SortOrder
    empPicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    employeeId?: SortOrder
    departmentId?: SortOrder
    salary?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    contactName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    contactName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    customerName?: SortOrder
    contactName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customerId?: SortOrder
  }

  export type ProductTypeCountOrderByAggregateInput = {
    productTypeId?: SortOrder
    productTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeAvgOrderByAggregateInput = {
    productTypeId?: SortOrder
  }

  export type ProductTypeMaxOrderByAggregateInput = {
    productTypeId?: SortOrder
    productTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeMinOrderByAggregateInput = {
    productTypeId?: SortOrder
    productTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductTypeSumOrderByAggregateInput = {
    productTypeId?: SortOrder
  }

  export type MetalTypeCountOrderByAggregateInput = {
    metalTypeId?: SortOrder
    metalTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetalTypeAvgOrderByAggregateInput = {
    metalTypeId?: SortOrder
  }

  export type MetalTypeMaxOrderByAggregateInput = {
    metalTypeId?: SortOrder
    metalTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetalTypeMinOrderByAggregateInput = {
    metalTypeId?: SortOrder
    metalTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetalTypeSumOrderByAggregateInput = {
    metalTypeId?: SortOrder
  }

  export type UnitTypeCountOrderByAggregateInput = {
    unitTypeId?: SortOrder
    unitTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitTypeAvgOrderByAggregateInput = {
    unitTypeId?: SortOrder
  }

  export type UnitTypeMaxOrderByAggregateInput = {
    unitTypeId?: SortOrder
    unitTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitTypeMinOrderByAggregateInput = {
    unitTypeId?: SortOrder
    unitTypeName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitTypeSumOrderByAggregateInput = {
    unitTypeId?: SortOrder
  }

  export type JobOrderCountOrderByAggregateInput = {
    jobOrderId?: SortOrder
    jobOrderNumber?: SortOrder
    customerId?: SortOrder
    jobDate?: SortOrder
    customerBillNumber?: SortOrder
    customerBillItemNo?: SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderAvgOrderByAggregateInput = {
    jobOrderId?: SortOrder
    customerId?: SortOrder
    customerBillItemNo?: SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrder
  }

  export type JobOrderMaxOrderByAggregateInput = {
    jobOrderId?: SortOrder
    jobOrderNumber?: SortOrder
    customerId?: SortOrder
    jobDate?: SortOrder
    customerBillNumber?: SortOrder
    customerBillItemNo?: SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderMinOrderByAggregateInput = {
    jobOrderId?: SortOrder
    jobOrderNumber?: SortOrder
    customerId?: SortOrder
    jobDate?: SortOrder
    customerBillNumber?: SortOrder
    customerBillItemNo?: SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobOrderSumOrderByAggregateInput = {
    jobOrderId?: SortOrder
    customerId?: SortOrder
    customerBillItemNo?: SortOrder
    productTypeId?: SortOrder
    metalTypeId?: SortOrder
    qty?: SortOrder
    weight?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubMenuCreateNestedManyWithoutMenuListInput = {
    create?: XOR<SubMenuCreateWithoutMenuListInput, SubMenuUncheckedCreateWithoutMenuListInput> | SubMenuCreateWithoutMenuListInput[] | SubMenuUncheckedCreateWithoutMenuListInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuListInput | SubMenuCreateOrConnectWithoutMenuListInput[]
    createMany?: SubMenuCreateManyMenuListInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUncheckedCreateNestedManyWithoutMenuListInput = {
    create?: XOR<SubMenuCreateWithoutMenuListInput, SubMenuUncheckedCreateWithoutMenuListInput> | SubMenuCreateWithoutMenuListInput[] | SubMenuUncheckedCreateWithoutMenuListInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuListInput | SubMenuCreateOrConnectWithoutMenuListInput[]
    createMany?: SubMenuCreateManyMenuListInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUpdateManyWithoutMenuListNestedInput = {
    create?: XOR<SubMenuCreateWithoutMenuListInput, SubMenuUncheckedCreateWithoutMenuListInput> | SubMenuCreateWithoutMenuListInput[] | SubMenuUncheckedCreateWithoutMenuListInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuListInput | SubMenuCreateOrConnectWithoutMenuListInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutMenuListInput | SubMenuUpsertWithWhereUniqueWithoutMenuListInput[]
    createMany?: SubMenuCreateManyMenuListInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutMenuListInput | SubMenuUpdateWithWhereUniqueWithoutMenuListInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutMenuListInput | SubMenuUpdateManyWithWhereWithoutMenuListInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type SubMenuUncheckedUpdateManyWithoutMenuListNestedInput = {
    create?: XOR<SubMenuCreateWithoutMenuListInput, SubMenuUncheckedCreateWithoutMenuListInput> | SubMenuCreateWithoutMenuListInput[] | SubMenuUncheckedCreateWithoutMenuListInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMenuListInput | SubMenuCreateOrConnectWithoutMenuListInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutMenuListInput | SubMenuUpsertWithWhereUniqueWithoutMenuListInput[]
    createMany?: SubMenuCreateManyMenuListInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutMenuListInput | SubMenuUpdateWithWhereUniqueWithoutMenuListInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutMenuListInput | SubMenuUpdateManyWithWhereWithoutMenuListInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type MenuListCreateNestedOneWithoutSubMenuInput = {
    create?: XOR<MenuListCreateWithoutSubMenuInput, MenuListUncheckedCreateWithoutSubMenuInput>
    connectOrCreate?: MenuListCreateOrConnectWithoutSubMenuInput
    connect?: MenuListWhereUniqueInput
  }

  export type MenuListUpdateOneRequiredWithoutSubMenuNestedInput = {
    create?: XOR<MenuListCreateWithoutSubMenuInput, MenuListUncheckedCreateWithoutSubMenuInput>
    connectOrCreate?: MenuListCreateOrConnectWithoutSubMenuInput
    upsert?: MenuListUpsertWithoutSubMenuInput
    connect?: MenuListWhereUniqueInput
    update?: XOR<XOR<MenuListUpdateToOneWithWhereWithoutSubMenuInput, MenuListUpdateWithoutSubMenuInput>, MenuListUncheckedUpdateWithoutSubMenuInput>
  }

  export type EmployeeCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput> | EmployeeCreateWithoutDepartmentInput[] | EmployeeUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutDepartmentInput | EmployeeCreateOrConnectWithoutDepartmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutDepartmentInput | EmployeeUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: EmployeeCreateManyDepartmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutDepartmentInput | EmployeeUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutDepartmentInput | EmployeeUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeeInput
    connect?: DepartmentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DepartmentUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeeInput
    upsert?: DepartmentUpsertWithoutEmployeeInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutEmployeeInput, DepartmentUpdateWithoutEmployeeInput>, DepartmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SubMenuCreateWithoutMenuListInput = {
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuUncheckedCreateWithoutMenuListInput = {
    subMenuId?: number
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuCreateOrConnectWithoutMenuListInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutMenuListInput, SubMenuUncheckedCreateWithoutMenuListInput>
  }

  export type SubMenuCreateManyMenuListInputEnvelope = {
    data: SubMenuCreateManyMenuListInput | SubMenuCreateManyMenuListInput[]
  }

  export type SubMenuUpsertWithWhereUniqueWithoutMenuListInput = {
    where: SubMenuWhereUniqueInput
    update: XOR<SubMenuUpdateWithoutMenuListInput, SubMenuUncheckedUpdateWithoutMenuListInput>
    create: XOR<SubMenuCreateWithoutMenuListInput, SubMenuUncheckedCreateWithoutMenuListInput>
  }

  export type SubMenuUpdateWithWhereUniqueWithoutMenuListInput = {
    where: SubMenuWhereUniqueInput
    data: XOR<SubMenuUpdateWithoutMenuListInput, SubMenuUncheckedUpdateWithoutMenuListInput>
  }

  export type SubMenuUpdateManyWithWhereWithoutMenuListInput = {
    where: SubMenuScalarWhereInput
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyWithoutMenuListInput>
  }

  export type SubMenuScalarWhereInput = {
    AND?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
    OR?: SubMenuScalarWhereInput[]
    NOT?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
    subMenuId?: IntFilter<"SubMenu"> | number
    menuId?: IntFilter<"SubMenu"> | number
    subMenuName?: StringFilter<"SubMenu"> | string
    subMenuIcon?: StringFilter<"SubMenu"> | string
    subMenuRoute?: StringFilter<"SubMenu"> | string
    sorting?: IntFilter<"SubMenu"> | number
    isActive?: BoolFilter<"SubMenu"> | boolean
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedAt?: DateTimeFilter<"SubMenu"> | Date | string
  }

  export type MenuListCreateWithoutSubMenuInput = {
    menuName: string
    menuIcon: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuListUncheckedCreateWithoutSubMenuInput = {
    menuId?: number
    menuName: string
    menuIcon: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuListCreateOrConnectWithoutSubMenuInput = {
    where: MenuListWhereUniqueInput
    create: XOR<MenuListCreateWithoutSubMenuInput, MenuListUncheckedCreateWithoutSubMenuInput>
  }

  export type MenuListUpsertWithoutSubMenuInput = {
    update: XOR<MenuListUpdateWithoutSubMenuInput, MenuListUncheckedUpdateWithoutSubMenuInput>
    create: XOR<MenuListCreateWithoutSubMenuInput, MenuListUncheckedCreateWithoutSubMenuInput>
    where?: MenuListWhereInput
  }

  export type MenuListUpdateToOneWithWhereWithoutSubMenuInput = {
    where?: MenuListWhereInput
    data: XOR<MenuListUpdateWithoutSubMenuInput, MenuListUncheckedUpdateWithoutSubMenuInput>
  }

  export type MenuListUpdateWithoutSubMenuInput = {
    menuName?: StringFieldUpdateOperationsInput | string
    menuIcon?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuListUncheckedUpdateWithoutSubMenuInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    menuName?: StringFieldUpdateOperationsInput | string
    menuIcon?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateWithoutDepartmentInput = {
    namePrefix?: string | null
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    hireDate?: Date | string | null
    jobTitle?: string | null
    birthDate?: Date | string | null
    idCardNumber?: string | null
    address?: string | null
    salary?: number | null
    remarks?: string | null
    isWorking?: boolean
    empPicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutDepartmentInput = {
    employeeId?: number
    namePrefix?: string | null
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    hireDate?: Date | string | null
    jobTitle?: string | null
    birthDate?: Date | string | null
    idCardNumber?: string | null
    address?: string | null
    salary?: number | null
    remarks?: string | null
    isWorking?: boolean
    empPicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeCreateManyDepartmentInputEnvelope = {
    data: EmployeeCreateManyDepartmentInput | EmployeeCreateManyDepartmentInput[]
  }

  export type EmployeeUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<EmployeeCreateWithoutDepartmentInput, EmployeeUncheckedCreateWithoutDepartmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutDepartmentInput, EmployeeUncheckedUpdateWithoutDepartmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutDepartmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    employeeId?: IntFilter<"Employee"> | number
    namePrefix?: StringNullableFilter<"Employee"> | string | null
    firstName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    email?: StringNullableFilter<"Employee"> | string | null
    phoneNumber?: StringNullableFilter<"Employee"> | string | null
    hireDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    jobTitle?: StringNullableFilter<"Employee"> | string | null
    departmentId?: IntFilter<"Employee"> | number
    birthDate?: DateTimeNullableFilter<"Employee"> | Date | string | null
    idCardNumber?: StringNullableFilter<"Employee"> | string | null
    address?: StringNullableFilter<"Employee"> | string | null
    salary?: FloatNullableFilter<"Employee"> | number | null
    remarks?: StringNullableFilter<"Employee"> | string | null
    isWorking?: BoolFilter<"Employee"> | boolean
    empPicture?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type DepartmentCreateWithoutEmployeeInput = {
    departmentName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUncheckedCreateWithoutEmployeeInput = {
    departmentId?: number
    departmentName: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutEmployeeInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
  }

  export type DepartmentUpsertWithoutEmployeeInput = {
    update: XOR<DepartmentUpdateWithoutEmployeeInput, DepartmentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<DepartmentCreateWithoutEmployeeInput, DepartmentUncheckedCreateWithoutEmployeeInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutEmployeeInput, DepartmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type DepartmentUpdateWithoutEmployeeInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateWithoutEmployeeInput = {
    departmentId?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuCreateManyMenuListInput = {
    subMenuName: string
    subMenuIcon: string
    subMenuRoute: string
    sorting?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubMenuUpdateWithoutMenuListInput = {
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuUncheckedUpdateWithoutMenuListInput = {
    subMenuId?: IntFieldUpdateOperationsInput | number
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubMenuUncheckedUpdateManyWithoutMenuListInput = {
    subMenuId?: IntFieldUpdateOperationsInput | number
    subMenuName?: StringFieldUpdateOperationsInput | string
    subMenuIcon?: StringFieldUpdateOperationsInput | string
    subMenuRoute?: StringFieldUpdateOperationsInput | string
    sorting?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyDepartmentInput = {
    namePrefix?: string | null
    firstName: string
    lastName: string
    email?: string | null
    phoneNumber?: string | null
    hireDate?: Date | string | null
    jobTitle?: string | null
    birthDate?: Date | string | null
    idCardNumber?: string | null
    address?: string | null
    salary?: number | null
    remarks?: string | null
    isWorking?: boolean
    empPicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutDepartmentInput = {
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutDepartmentInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyWithoutDepartmentInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    namePrefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    hireDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    idCardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    isWorking?: BoolFieldUpdateOperationsInput | boolean
    empPicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
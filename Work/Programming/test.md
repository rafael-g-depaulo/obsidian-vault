// native express types

type Request<

  P = any,

  ResBody = any,

  ReqBody = any,

  ReqQuery = any,

  Locals extends Record<string, any> = Record<string, any>

> = object & { test: "this is just a mock for the real type" }

type Response = object & { test: "this is just a mock for the real type" }

type NextFunction = () => void

  

// custom express types

export type Optional<T extends object> = { [key in keyof T]?: T[key] }

export type QueryType = { [key: string]: undefined | string | string[] | QueryType | QueryType[] }

export type ParamsType =  { [index: string]: string; }

export type BodyType = object

export type ReqExtType = object

  

export type Req<

  ReqBody extends BodyType = {},

  ReqExtended  extends ReqExtType = {},

  ReqExtending extends ReqExtType = {},

  Params extends ParamsType = {},

  Query extends QueryType = {},

  ResBody extends BodyType = {},

> = Request<Params, ResBody, Record<keyof ReqBody, any>, Query> & Optional<ReqExtending> & ReqExtended

  

export type RouteHandler<R extends Req = Req> = (req: R, res: Response, next: NextFunction) => void

  
  

// callbackList type

type MiddlewareList<FooList extends Function[]> = MiddlewareListAux<FooList, {}>

type MiddlewareListAux<FooList extends Function[], AccReqExt extends object> =

  // base case of recursion

  FooList["length"] extends 0 ? FooList :

  // extract head middleware

  FooList extends [infer Head, ...infer Rest] ?

    Rest extends Function[] ?

      // extract middleware props

      Head extends RouteHandler<infer H_Req> ?

        H_Req extends Req<

          infer _H_ReqBody,

          infer H_ReqExtended,

          infer H_ReqExtending,

          infer _H_Params,

          infer _H_Query,

          infer _H_ResBody

        > ?

          // check that H_Req only uses Req extension that already exists

          AccReqExt extends H_ReqExtended ?

            // check next callback on the list, and add current extensions to req body

            MiddlewareListAux<[...Rest], AccReqExt | H_ReqExtending> extends never ? never : readonly [...FooList]

          : never

        : never

      : never

    : never

  : never

  
  

// test handler types

type AddUserId = RouteHandler<Req<

  { email: string, password: string },

  {},

  { userId: string }

>>

type AddRandom = RouteHandler<Req<

  {},

  {},

  { random: string }

>>

type UseUserId = RouteHandler<Req<

  {},

  { userId: string }

>>

type UseUserIdToAddToken = RouteHandler<Req<

  { email: string, password: string },

  { userId: string },

  { userToken: string }

>>

type UseToken = RouteHandler<Req<

  {},

  { userToken: string }

>>

  

type Test_00 = MiddlewareList<[() => number]>

//   ^?

// above should be never (function of wrong type)

  

type Test_01 = MiddlewareList<[AddUserId]>

//   ^?

  

type Test_02 = MiddlewareList<[UseUserId]>

//   ^?

// above should be never (use userId before it's created)

  

type Test_03 = MiddlewareList<[AddUserId, UseUserId, AddRandom]>

//   ^?

  

type Test_04 = MiddlewareList<[UseUserId, AddUserId]>

//   ^?

// above should be never (use userId before it's created)

  

type Test_05 = MiddlewareList<[UseToken]>

//   ^?

// above should be never (use userToken before it's created)

  

type Test_06 = MiddlewareList<[AddUserId, UseToken]>

//   ^?

// above should be never (use userToken before it's created)

  

type Test_061 = MiddlewareList<[AddUserId, AddUserId, UseUserId, UseUserId]>

//   ^?

// above should be never (use userToken before it's created)

  

type Test_07 = MiddlewareList<[AddUserId, UseUserId, UseToken]>

//   ^?

// above should be never (use userToken before it's created)

  

type Test_08 = MiddlewareList<[AddUserId, UseUserId, UseUserIdToAddToken]>

//   ^?

  

type Test_09 = MiddlewareList<[AddUserId, UseUserId, UseUserIdToAddToken, UseToken]>

//   ^?

  

type Test_10 = MiddlewareList<[UseUserIdToAddToken, UseToken]>

//   ^?

// above should be never (use userId before it's created)

  
  

type ParseBodyRexExtension = { formResponse: object }

type ParseFileRexExtension = { parsedFile: object }

  

type ParseBody = RouteHandler<Req<{}, {}, ParseBodyRexExtension>>

const parseBody = (...a: any): ParseBody => () => {}

type ParseFile = RouteHandler<Req<{}, {}, ParseFileRexExtension>>

const parseFile = (...a: any): ParseFile => () => {}

// const registerUser:

//   RouteHandler<Req<{}, { formResponse: object, parsedFile: object }, {}>> = () => {}

type RegisterUser = RouteHandler<Req<{}, { formResponse: object, parsedFile: object }, {}>>

const registerUser = (): RegisterUser => () => {}

  

const registerMiddlewareChain = [

  parseBody(),

  parseFile({ fieldName: "profilePicture" }),

  // registerUser, // needs request body and files to have been parsed

] as const

typeof registerMiddlewareChain

//     ^?

  

const useMiddlewareChain = <L extends Function[]> (chain: MiddlewareList<L>) => chain

  

type test__1 = MiddlewareList<[ParseFile, ParseBody]>

//   ^?

const test1 = useMiddlewareChain(registerMiddlewareChain)

const test2 = useMiddlewareChain<[ParseBody, ParseFile]>(registerMiddlewareChain)

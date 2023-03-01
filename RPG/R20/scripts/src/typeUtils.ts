export type Partial<T extends object> = { [key in keyof T]?: T[key] }

export const isNotNull = <T>(obj: T | null): obj is T => !!obj

export const isNotUndefined = <T>(obj: T | undefined): obj is T => !!obj

export const isPromise = <T>(a: T | Promise<T>): a is Promise<T> =>
  !!a && typeof (a as any).then === 'function'

export type FuncList = readonly Function[]
export type Promisify<F extends Function> = F extends (
  i: infer Input
) => infer Output
  ? Output extends Promise<infer Inner>
    ? (i: Input) => Promise<Inner>
    : (i: Input) => Promise<Output>
  : never

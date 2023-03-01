import { isPromise } from './typeUtils'

export const groupBy =
  <Item, Key extends string | number = string>(getGroup: (item: Item) => Key) =>
  (items: Item[]): { [key in Key]: Item[] } =>
    items.reduce(
      (acc, cur) => ({
        ...acc,
        [getGroup(cur)]: [...(acc[getGroup(cur)] ?? []), cur],
      }),
      {} as { [key in Key]: Item[] }
    )

type FuncList = readonly Function[]
type Promisify<F extends Function> = F extends (i: infer Input) => infer Output
  ? Output extends Promise<infer Inner>
    ? (i: Input) => Promise<Inner>
    : (i: Input) => Promise<Output>
  : never

type AsyncPipedCallback<FList extends FuncList> = FList['length'] extends 0
  ? never
  : FList extends [infer F, ...infer Ftail]
  ? Ftail['length'] extends 0
    ? F
    : Ftail extends [infer S, ...infer Stail]
    ? F extends (input: infer Fin) => infer Fout
      ? S extends (input: infer Sin) => infer Sout
        ? Fout extends Promise<infer FOutAsync>
          ? FOutAsync extends Sin
            ? Stail['length'] extends 0
              ? AsyncPipedCallback<[Promisify<(input: Fin) => Sout>]>
              : Stail extends FuncList
              ? AsyncPipedCallback<[Promisify<(input: Fin) => Sout>, ...Stail]>
              : never
            : never
          : Fout extends Sin
          ? Stail extends FuncList
            ? AsyncPipedCallback<[(input: Fin) => Sout, ...Stail]>
            : never
          : never
        : never
      : never
    : never
  : never

export const asyncPipe = <CList extends FuncList>(
  ...callbacks: CList
): AsyncPipedCallback<CList> =>
  callbacks.reduce<any>(
    (acc, cur) => (input: any) => {
      const tempValue = acc(input)
      return isPromise(tempValue)
        ? tempValue.then((output: any) => cur(output))
        : cur(acc(input))
    },
    <T>(a: T) => a
  )

export const joinInGroupsOf =
  (n: number) =>
  <T>(arr: T[]) =>
    arr.reduce<T[][]>((acc, cur, i) => {
      acc[Math.floor(i / n)] ??= []
      acc[Math.floor(i / n)].push(cur)
      return acc
    }, [])

export const range = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, k) => k + from)

export const pad = <T>(arr: T[], limit: number, filler: T) =>
  range(0, limit - 1).map(i => arr[i] ?? filler)

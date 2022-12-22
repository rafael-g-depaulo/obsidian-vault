export type Partial<T extends object> = { [key in keyof T]?: T[key] }

export const isNotNull = <T>(obj: T | null): obj is T => !!obj

export const isNotUndefined = <T>(obj: T | undefined): obj is T => !!obj

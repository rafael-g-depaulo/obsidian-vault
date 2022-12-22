export type Partial<T extends object> = { [key in keyof T]?: T[key] }

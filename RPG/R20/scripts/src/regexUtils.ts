import { isNotUndefined } from './typeUtils'

export const matchAllGroups = (str: string, reg: RegExp) =>
  [...str.matchAll(reg)].map(result => result.groups).filter(isNotUndefined)

export const matchGroups = (str: string, reg: RegExp) => str.match(reg)?.groups!

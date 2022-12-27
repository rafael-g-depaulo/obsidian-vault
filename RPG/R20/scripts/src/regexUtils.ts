import { isNotUndefined } from './typeUtils'

// TODO: fix apparent bugs with these 2 functions. it's messing up stuff like parseItem in parseMacro.ts
export const matchAllGroups = (str: string, reg: RegExp) =>
  [...str.matchAll(reg)].map(result => result.groups).filter(isNotUndefined)

// i have no idea why but it sometimes doesn't work just running it once
export const matchGroups = (str: string, reg: RegExp) =>
  reg.exec(str)?.groups! ?? reg.exec(str)?.groups!

// code taken mostly from Overcl9ck's response in https://stackoverflow.com/questions/33631041/javascript-async-await-in-replace
export const replaceAsync = async (
  str: string,
  reg: RegExp,
  transform: (match: string) => Promise<string>
) => {
  const promises: Promise<string>[] = []
  str.replace(reg, match => {
    const promise = transform(match)
    promises.push(promise)
    return match
  })
  const data = await Promise.all(promises)
  return str.replace(reg, () => data.shift() ?? '')
}

export const specialChars =
  'ÁÈôÇáèÒçÂËòâëØÑÀÐøñàðÕÅõÝåÍÖýÃíöãÎ"ÄîÚ<äÌú>ÆìÛ&æÏûïÙ®Éù©éÓÜÞÊóüþêÔß'

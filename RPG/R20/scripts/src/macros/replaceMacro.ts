import { replaceAsync } from '../regexUtils'
import { macroRegex, parseMacro } from './parseMacro'
import { Macro } from './types'

export type Replacer<
  ItemKeys extends string = string,
  Name extends string = string,
  M extends Macro<ItemKeys, Name> = Macro<ItemKeys, Name>
> = string | ((macro: M, rawContent: string) => string)
export type AsyncReplacer<
  ItemKeys extends string = string,
  Name extends string = string,
  M extends Macro<ItemKeys, Name> = Macro<ItemKeys, Name>
> = (macro: M, rawContent: string) => Promise<string>

export const replaceMacros = (replacer: Replacer) => (content: string) => {
  return content.replace(macroRegex, match => {
    const macro = parseMacro(match)
    if (!macro) return `\nMACRO PARSING ERROR!! Original "${match}"\n`

    return typeof replacer === 'string' ? replacer : replacer(macro, match)
  })
}

export const replaceMacrosAsync =
  (replacer: AsyncReplacer) =>
  (content: string): Promise<string> => {
    return replaceAsync(content, macroRegex, async match => {
      const macro = parseMacro(match)
      if (!macro) return `\nMACRO PARSING ERROR!! Original "${match}"\n`

      return replacer(macro, match)
    })
  }

export const replaceMacro = (macroName: string, replacer: Replacer) =>
  replaceMacros((m, rawContent) =>
    m.name === macroName
      ? typeof replacer === 'string'
        ? replacer
        : replacer(m, rawContent)
      : rawContent
  )

export const replaceMacroAsync = (macroName: string, replacer: AsyncReplacer) =>
  replaceMacrosAsync(async (m, rawContent) =>
    m.name === macroName ? replacer(m, rawContent) : rawContent
  )

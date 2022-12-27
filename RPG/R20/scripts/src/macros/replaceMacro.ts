import { Macro, macroRegex, parseMacro, parseMacros } from './parseMacro'

export type Replacer<
  ItemKeys extends string = string,
  Name extends string = string,
  M extends Macro<ItemKeys, Name> = Macro<ItemKeys, Name>
> = (macro: M, rawContent: string) => string
export type AsyncReplacer<
  ItemKeys extends string = string,
  Name extends string = string,
  M extends Macro<ItemKeys, Name> = Macro<ItemKeys, Name>
> = (macro: M, rawContent: string) => Promise<string>

export const replaceMacros = (replacer: Replacer) => (content: string) => {
  return content.replace(macroRegex, match => {
    const macro = parseMacro(match)
    if (!macro) return `\nMACRO PARSING ERROR!! Original "${match}"\n`

    return replacer(macro, match)
  })
}

export const replaceMacro = (macroName: string, replacer: Replacer) =>
  replaceMacros((m, rawContent) =>
    m.name === macroName ? replacer(m, rawContent) : rawContent
  )

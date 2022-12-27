import { Macro } from './parseMacro'

export type Replacer<
  ItemKeys extends string = string,
  Name extends string = string,
  M extends Macro<ItemKeys, Name> = Macro<ItemKeys, Name>
> = string | ((macro: M) => string)
export type AsyncReplacer<
  ItemKeys extends string = string,
  Name extends string = string,
  M extends Macro<ItemKeys, Name> = Macro<ItemKeys, Name>
> = (macro: M) => Promise<string>

export const replaceMacro =
  (macroName: string, replacer: Replacer) => (content: string) => {
    // const macros
    return `test`
  }

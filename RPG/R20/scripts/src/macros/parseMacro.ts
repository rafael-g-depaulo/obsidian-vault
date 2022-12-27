import { matchAllGroups } from '../regexUtils'

export type MacroItem = string | string[]
export type MacroArgument = string
export type Macro<
  ItemKeys extends string = string,
  Name extends string = string
> = {
  name: Name
  argument?: string
  items: { [key in ItemKeys]: MacroItem }
}

const createMacro = <ItemKeys extends string, Name extends string>({
  name,
  items,
  argument,
}: {
  name: Name
  items: { [key in ItemKeys]: MacroItem }
  argument?: string
}): Macro<ItemKeys, Name> => ({
  name,
  argument,
  items,
})

const macroListItemValueRegex = /(?:\-|\d+\.)[\t ]*(?<listItem>.*)\s+/gm

const macroItemRegex =
  /^\s*(?<itemKey>[\w-]+):\s*(?<itemValue>(?:(?:\-|\d+\.)[\t ]*(?<listItem>.*)\s+)+|(?<itemSimpleValue>[^\s].+))\s*/gm

const macroRegex =
  /{{(?<macroName>[\w\-]+)\s*(?:"(?<macroArgument>.+)")?\s*(?<macroBody>(?:[^}]|}[^}])+)?}}/gm

const parseItem = (item: string) =>
  !macroListItemValueRegex.test(item)
    ? item
    : matchAllGroups(item, macroListItemValueRegex)?.map(({ listItem }) =>
        listItem.trim()
      )

const parseItems = (body?: string) =>
  !body
    ? {}
    : Object.fromEntries(
        matchAllGroups(body, macroItemRegex).map(({ itemKey, itemValue }) => [
          itemKey,
          parseItem(itemValue),
        ])
      )

// TODO: fix bug where lists of 1 item are parsed as simpleValues instead of unitary lists
export const parseMacros = (content: string): Macro[] => {
  const isMacro = macroRegex.test(content)
  if (!isMacro) return []

  return matchAllGroups(content, macroRegex).map(
    ({ macroName, macroArgument, macroBody }) =>
      createMacro({
        items: parseItems(macroBody),
        name: macroName,
        argument: macroArgument,
      })
  )
}

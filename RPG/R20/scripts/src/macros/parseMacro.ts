import { matchAllGroups, matchGroups } from '../regexUtils'
import { Macro, MacroItem } from './types'

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

export const macroRegex =
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
export const parseMacro = <Name extends string, Keys extends string>(
  content: string
): Macro<Keys, Name> | null => {
  const groups = matchGroups(content, macroRegex)
  if (!groups?.macroName) return null

  const { macroName, macroArgument, macroBody } = groups

  return createMacro({
    items: parseItems(macroBody),
    name: macroName,
    argument: macroArgument,
  }) as Macro<Keys, Name>
}
export const searchMacro = <M = Macro>(
  content: string,
  macroName: string
): M extends Macro<infer Keys, infer Name> ? M | null : never => {
  const groups = matchAllGroups(content, macroRegex).filter(
    ({ macroName: name }) => name === macroName
  )[0]

  if (!groups) return null as any

  return createMacro({
    name: groups.macroName,
    argument: groups.macroArgument,
    items: parseItems(groups.macroBody),
  }) as any
}

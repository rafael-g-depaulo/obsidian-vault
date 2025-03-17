import { matchAllGroups, matchGroups } from '../regexUtils'
import { Macro, MacroItem } from './types'

const createMacro = <ItemKeys extends string, Name extends string>({
  name,
  items,
  argument,
  rawBody,
}: {
  name: Name
  items: { [key in ItemKeys]: MacroItem }
  argument?: string
  rawBody: string
}): Macro<ItemKeys, Name> => ({
  name,
  argument,
  items,
  rawBody,
})

const macroListItemValueRegex = /^\s*(?:\-|\d+\.)[\t ]*(?<listItem>.*)\s+/gm

const macroItemRegex =
  /^\s*(?<itemKey>[\w-]+):\s*(?<itemValue>(?:(?:\-|\d+\.)[\t ]*(?<listItem>.+)\s+)+|(?<itemSimpleValue>(?:^(?!\w+:).*\n)+|.+))\s*/gm

export const macroRegex =
  /{{(?<macroName>[\w\-]+)\s*(?:"(?<macroArgument>.+)")?\s*(?<macroBody>(?:[^}]|}[^}])+)?}}/gm

const parseItem = (item: string) =>
  !macroListItemValueRegex.test(item)
    ? item
    : matchAllGroups(item, macroListItemValueRegex)?.map(({ listItem }) =>
        listItem.trim()
      )

const parseItems = (body: string | undefined) =>
  !body
    ? {}
    : Object.fromEntries(
        matchAllGroups(body, macroItemRegex).map(({ itemKey, itemValue }) => [
          itemKey.toLocaleUpperCase(),
          parseItem(itemValue),
        ])
      )

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
    rawBody: macroBody,
  }) as Macro<Keys, Name>
}
export const searchMacros = <M = Macro>(
  content: string,
  macroName: string
): M extends Macro<infer Keys, infer Name> ? M[] : never => {
  const groups = matchAllGroups(content, macroRegex).filter(
    ({ macroName: name }) => name === macroName
  )

  return groups.map(group =>
    createMacro({
      name: group.macroName,
      argument: group.macroArgument,
      items: parseItems(group.macroBody),
      rawBody: group.macroBody,
    })
  ) as any
}
export const searchMacro = <M = Macro>(
  content: string,
  macroName: string
): M extends Macro<infer Keys, infer Name> ? M | null : never =>
  (searchMacros(content, macroName)[0] as any) ?? null

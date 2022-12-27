import { matchAllGroups, matchGroups } from '../regexUtils'

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

export const test = <ItemKeys extends string, Name extends string>(
  a: Macro<ItemKeys, Name>
) => ({ a })
const asd = test({
  items: {
    asd: 'dsasd',
    cum: 'sdfsdf',
  },
  name: 'FDSDFSDF',
})

const createMacro = <ItemKeys extends string, Name extends string>(
  items: { [key in ItemKeys]: string },
  name: Name,
  argument?: string
): Macro<ItemKeys, Name> => ({
  items,
  name,
  argument,
})

const macroListItemValueRegex = /(?:\-|\d+\.)[\t ]*(?<listItem>.*)\s+/gm

const macroItemRegex =
  /^\s*(?<itemKey>[\w-]+):\s*(?<itemValue>(?:(?:\-|\d+\.)[\t ]*(?<listItem>.*)\s+)+|(?<itemSimpleValue>[^\s].+))\s*/gm

const macroRegex =
  /{{\s*(?<macroName>[\w-]+)\s+(?:"(?<macroArgument>.+)")?\s*(?<macroItem>^\s*(?<itemKey>[\w-]+):\s*(?<itemValue>(?:(?:\-|\d+\.)[\t ]*(?<listItem>.*)\s+)+|(?<itemSimpleValue>[^\s].+))\s*)*\s*}}/m

// TODO: fix bug where lists of 1 item are parsed as simpleValues instead of unitary lists
export const parseMacro = <ItemKeys extends string, Name extends string>(
  content: string
): Macro<ItemKeys, Name> | null => {
  const isMacro = macroRegex.test(content)
  if (!isMacro) return null

  const { macroName, macroArgument } = matchGroups(content, macroRegex)

  const parseItem = (item: string) => {
    const test = !macroListItemValueRegex.test(item)
      ? item
      : item
          .match(macroListItemValueRegex)
          ?.map(i => matchGroups(i, macroListItemValueRegex)?.listItem)
          ?.map(i => i.trim()) ?? []

    if (test?.length === 0) {
      console.log(matchAllGroups(item, macroListItemValueRegex), item, [
        item.match(macroListItemValueRegex),
      ])
    }
    return test
  }
  const items = Object.fromEntries(
    matchAllGroups(content, macroItemRegex).map(({ itemKey, itemValue }) => [
      itemKey,
      parseItem(itemValue),
    ])
  ) as { [key in ItemKeys]: string }

  return createMacro(items, macroName as Name, macroArgument)
}

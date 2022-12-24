import { writeToFile } from './file'
import { matchGroups } from './regexUtils'
import { Spell } from './spell'
import { createTagSpellMap, makeTagSpellList } from './spellList'

export const noTagRegex = /^no\-(?<tag>\w+)/i
const tagParseRegex = /#(?<tag>[\w\-]+)/gm
export const getTags = (content: string) =>
  [...content.matchAll(tagParseRegex)].map(([, tagName]) => tagName)

type TagMap = {
  [spellname: string]: string[]
}

// TODO: maybe add option to understand groups beyond 1 level?
export type TagGroups = { group: string; tags: string[] }[]
const tagGroupItemRegex = /^(?<position>[ \t]*)- #(?<tagName>\w+)/
export const parseTagGroups = (tagGroupsMarkdown: string): TagGroups =>
  tagGroupsMarkdown
    .split('\n')
    .filter(line => /^ *- #\w+/.test(line))
    .map(tagLine => matchGroups(tagLine, tagGroupItemRegex))
    .map(({ position, tagName }) => ({
      tagName,
      isParent: position.length === 0,
    }))
    .reduce<TagGroups>((acc, cur) => {
      if (acc.length === 0 || cur.isParent)
        return [...acc, { group: cur.tagName, tags: [] }]

      const oldGroups = acc.slice(0, acc.length - 1)
      const currentGroup = acc[acc.length - 1]
      currentGroup.tags.push(cur.tagName)

      return [...oldGroups, currentGroup]
    }, [])

export const createTagMap = async (spells: Spell[]): Promise<TagMap> => {
  return spells.reduce((acc, { name, tags }) => ({ ...acc, [name]: tags }), {})
}
export const writeTagSpellLists =
  (folder: string, filename: string) => async (spells: Spell[]) => {
    const tagMap = createTagSpellMap(spells)

    const tagSpellListsContent = Object.keys(tagMap)
      .sort((a, b) => a.localeCompare(b))
      .map(tag => makeTagSpellList(tag, tagMap[tag]))
      .join('\n\n')

    await writeToFile(folder, filename, tagSpellListsContent)

    return spells
  }

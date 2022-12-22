import { readFile, writeToFile } from './file'
import { Spell } from './spell'
import { createTagSpellMap, makeTagSpellList } from './spellList'
import { isNotNull } from './typeUtils'

export const getTags = (content: string) =>
  [...content.matchAll(/#(\w+)/gm)].map(([, tagName]) => tagName)

type TagMap = {
  [spellname: string]: string[]
}

export type TagGroups = { group: string; tags: string[] }[]
export const parseTagGroups = (tagGroupsMarkdown: string): TagGroups => {
  const tagGroupRegex = /^- #(?<group>\w+)\n(?<tags>(?:^\t- #\w+.*\n)+)/gm
  const tagGroupItemRegex = /^\t- #(\w+)/

  const groups = [...tagGroupsMarkdown.matchAll(tagGroupRegex)]
    .map(r => r.groups as { group: string; tags: string })
    .filter(isNotNull)
    .map(({ group, tags }) => ({
      group,
      tags: tags
        .split('\n')
        .map(s => s.match(tagGroupItemRegex))
        .filter(isNotNull)
        .map(result => result[1]),
    }))

  return groups
}

export const createTagMap = async (spells: Spell[]): Promise<TagMap> => {
  return spells.reduce((acc, { name, tags }) => ({ ...acc, [name]: tags }), {})
}
export const writeTagSpellLists =
  (folder: string, filename: string) => async (spells: Spell[]) => {
    const tagMap = createTagSpellMap(spells)

    const tagSpellListsContent = Object.keys(tagMap)
      .map(tag => makeTagSpellList(tag, tagMap[tag]))
      .join('\n\n')

    await writeToFile(folder, filename, tagSpellListsContent)

    return spells
  }

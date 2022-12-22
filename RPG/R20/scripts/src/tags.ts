import { writeToFile } from './file'
import { Spell } from './spell'
import { createTagSpellMap, makeTagSpellList } from './spellList'

export const getTags = (content: string) =>
  [...content.matchAll(/#(\w+)/gm)].map(([, tagName]) => tagName)

type TagMap = {
  [spellname: string]: string[]
}

export type TagGroups = { [tag: string]: string[] }
export const parseTagGroups = (tagGroupsMarkdown: string): TagGroups => ({})

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

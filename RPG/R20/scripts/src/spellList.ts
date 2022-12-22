import { groupByLevel, Spell } from './spell'

type TagSpellMap = { [key in string]: Spell[] }

export const createTagSpellMap = (spells: Spell[]) => {
  return spells.reduce<TagSpellMap>((acc, cur) => {
    for (const tag of cur.tags) {
      acc[tag] = acc[tag] ?? []
      acc[tag].push(cur)
    }
    return acc
  }, {})
}

export const makeTagSpellList = (tag: string, spells: Spell[]) =>
  `## ${tag} Spells\n` +
  groupByLevel(spells)
    .map(
      (spells, level) =>
        `### Level ${level}\n` +
        spells.map(spell => `- ${spell.name}`).join('\n')
    )
    .join('\n')

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

const order = (level: number) =>
  level === 1 ? 'st' : level === 2 ? 'nd' : level === 3 ? 'rd' : 'th'

const spellLevelStr = (level: number) =>
  level === 0 ? 'Cantrip' : `${level}${order(level)} Circle`

const spellListItem = (spell: Spell) => `- ${spell.name}`

export const makeTagSpellList = (tag: string, spells: Spell[]) =>
  `## ${tag} Spells\n` +
  groupByLevel(spells)
    .map(
      (spells, level) =>
        `### ${spellLevelStr(level)}\n` + spells.map(spellListItem).join('\n')
    )
    .join('\n')

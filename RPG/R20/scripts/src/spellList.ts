import { groupBy } from './arrayUtils'
import { Spell } from './spell'

export const groupByLevel = (spells: Spell[]) =>
  Object.entries(groupBy((spell: Spell) => spell.level)(spells)).map<
    [number, Spell[]]
  >(([levelStr, spells]) => [Number(levelStr), spells])

type TagSpellMap = { [key in string]: Spell[] }

export const createTagSpellMap = (spells: Spell[]) =>
  spells.reduce<TagSpellMap>((acc, cur) => {
    for (const tag of cur.tags) {
      if (tag === 'spell') continue

      acc[tag] = acc[tag] ?? []
      acc[tag].push(cur)
    }
    return acc
  }, {})

const order = (level: number) =>
  level === 1 ? 'st' : level === 2 ? 'nd' : level === 3 ? 'rd' : 'th'

const spellLevelStr = (level: number) =>
  level === 0 ? 'Cantrip' : `${level}${order(level)} Circle`

const spellListItem = (spell: Spell) => `- [[${spell.name}]]`

export const makeTagSpellList = (tag: string, spells: Spell[]) =>
  `## ${tag[0].toUpperCase()}${tag.slice(1)} Spells\n` +
  groupByLevel(spells)
    .map(
      ([level, spells]) =>
        `### ${spellLevelStr(Number(level))}\n` +
        spells.map(spellListItem).join('\n')
    )
    .join('\n')

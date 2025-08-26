import { groupBy } from './arrayUtils'
import { Spell } from './businessLogic/spell'
import { spellListItemString } from './businessLogic/spellList'
import { spellLevelStr } from './stringOutputUtils'

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

const averageLinesPerPage = 60 * 2
type LineCounter = {
  text: string
  curLine: number
}
const breakLargeSpellList = (text: string) => text.split('\n').reduce<LineCounter>((acc, cur) => {
  return acc
}, { text: "", curLine: 0 })
export const makeTagSpellList = (tag: string, spells: Spell[]) =>
  `## ${tag[0].toUpperCase()}${tag.slice(1)} Spells\n` +
  groupByLevel(spells)
    .map(
      ([level, spells]) =>
        `### ${spellLevelStr(Number(level))}\n` +
        spells.map(spellListItemString).join('\n')
    )
    .join('\n')

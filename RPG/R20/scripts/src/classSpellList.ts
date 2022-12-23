import { matchGroups } from './regexUtils'
import { Spell } from './spell'
import { groupByLevel } from './spellList'
import { spellLevelStr, spellListItem } from './stringOutputUtils'

export const className = (filename: string) =>
  matchGroups(filename, /^Class - (?<className>.+)\.md$/).className

export const makeSpellListString = (spells: Spell[], groupName: string = '') =>
  `## ${groupName} Spells\n\n` +
  groupByLevel(spells)
    .map(
      ([level, spells]) =>
        `### ${spellLevelStr(Number(level))}\n` +
        spells.map(spellListItem).join('\n')
    )
    .join('\n\n')

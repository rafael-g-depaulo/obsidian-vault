import { joinInGroupsOf } from '../arrayUtils'
import { groupByLevel } from '../spellList'
import { spellLevelStr } from '../stringOutputUtils'
import { Spell, spellString } from './spell'

export const spellListItemString = (spell: Spell) => `- [[${spell.name}]]`

export const makeSpellListString = (spells: Spell[], groupName: string = '') =>
  `### Spell List\n` +
  `List of spells available for a ${groupName} to learn.\n\n` +
  `## ${groupName} Spells\n\n` +
  groupByLevel(spells)
    .map(
      ([level, spells]) =>
        `### ${spellLevelStr(Number(level))}\n` +
        spells.map(spellListItemString).join('\n') +
        (Number(level) === 1 ? `{{page-break}}` : '')
    )
    .join('\n\n')

export const makeSpellDescriptionsListString = (spells: Spell[]) =>
  joinInGroupsOf(4)(
    spells.sort((a, b) => a.name.localeCompare(b.name)).map(spellString)
  )
    .map(group => group.join('\n'))
    .join('{{page-break}}')

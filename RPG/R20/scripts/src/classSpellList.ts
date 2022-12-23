import { groupBy, joinInGroupsOf } from './arrayUtils'
import { matchGroups } from './regexUtils'
import { Spell, spellDescriptionItems, SpellDescriptionItems } from './spell'
import { groupByLevel } from './spellList'
import { spellLevelStr, spellListItem } from './stringOutputUtils'
import { isNotUndefined } from './typeUtils'

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

const SpellItemLabelName: { [k in SpellDescriptionItems]: string } = {
  castTime: 'Casting time',
  range: 'Alcance',
  target: 'Alvo',
  duration: 'Duração',
}

const spellDescriptionItemsString = (spell: Spell) =>
  spellDescriptionItems
    .filter(key => isNotUndefined(spell.items[key]))
    .map(key => `- **${SpellItemLabelName[key]}:** ${spell.items[key]}`)
    .join(';\n') + '.\n'

const makeSpellDescriptionString = (spell: Spell) =>
  `### ${spell.name} <span class="spell-tags">${spell.tags
    .filter(tag => tag !== 'spell')
    .join(' ')}</span>
*${spellLevelStr(spell.level)}*
${spellDescriptionItemsString(spell)}
___
${spell.description}
`
export const makeSpellDescriptionsListString = (spells: Spell[]) =>
  joinInGroupsOf(6)(
    spells
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(makeSpellDescriptionString)
  )
    .map(group => group.join('\n'))
    .join('{{page-break}}')

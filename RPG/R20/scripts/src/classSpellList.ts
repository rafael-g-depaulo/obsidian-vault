import { joinInGroupsOf } from './arrayUtils'
import { CompileRulesDeps, processContent } from './compileBook/index'
import { matchGroups } from './regexUtils'
import { Spell, spellDescriptionItems, SpellDescriptionItems } from './spell'
import { groupByLevel } from './spellList'
import { spellLevelStr, spellListItem } from './stringOutputUtils'
import { createSpellList, TagRules } from './tagRules'
import { isNotUndefined } from './typeUtils'

export const getClassname = (filename: string) =>
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
  `### ${spell.name}
  <div class="spell-tags">${spell.tags
    .filter(tag => tag !== 'spell')
    .join(' ')}</div>

*${spellLevelStr(spell.level)}*
${spellDescriptionItemsString(spell)}
___
${spell.description}
`

export const makeSpellDescriptionsListString = (spells: Spell[]) =>
  joinInGroupsOf(7)(
    spells
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(makeSpellDescriptionString)
  )
    .map(group => group.join('\n'))
    .join('{{page-break}}')

export const makeClassSpellList = (
  classname: string,
  spellRules: TagRules,
  deps: CompileRulesDeps
) => {
  const spells = createSpellList(deps.allSpells, spellRules)
  const spellList = makeSpellListString(spells, classname)

  const spellDescriptions = makeSpellDescriptionsListString(spells)

  const unproccessedString = `${spellList}\n\n## Spell Descriptions\n${spellDescriptions}`

  return processContent(deps)(unproccessedString)
}

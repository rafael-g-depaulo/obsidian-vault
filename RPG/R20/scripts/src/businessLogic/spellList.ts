import { joinInGroupsOf } from '../arrayUtils'
import { CompileRulesDeps, processContent } from '../compileBook/index'
import { breakPage } from '../compileBook/replacePageBreakMacro'
import { groupByLevel } from '../spellList'
import { spellLevelStr } from '../stringOutputUtils'
import { createSpellList, TagRules } from '../tagRules'
import { Spell, spellString } from './spell'

export const spellListItemString = (spell: Spell) => `- [[${spell.name}]]`

const tagsCss = `
<style>
.spell-tags {
	color: #ed4512;
	font-family: 'Open Sans';
	font-size: 0.8rem;
	font-weight: 600;
	margin-top: 0rem !important;
	margin-bottom: 0.25rem;
}
</style>
`

export const makeSpellListString = (spells: Spell[], groupName: string = '') =>
  tagsCss +
  `### Spell List\n` +
  `List of spells available for a ${groupName} to learn.\n\n` +
  // `## ${groupName} Spells\n\n` +
  `## Spells\n\n` +
  groupByLevel(spells)
    .map(
      ([level, spells]) =>
        `### ${spellLevelStr(Number(level))}\n` +
        spells.map(spellListItemString).join('\n') +
        (Number(level) === 1 ? `{{page-break}}` : '')
    )
    .join('\n\n')

const linkbackStr = (linkback?: string) => (!linkback ? "" : `[[${linkback}]]`)

export const makeSpellDescriptionsListString = (spells: Spell[]) =>
  linkbackStr("Spells") +
  joinInGroupsOf(4)(
    spells.sort((a, b) => a.name.localeCompare(b.name)).map(spellString)
  )
    .map(group => group.join('\n'))
    .join(breakPage + linkbackStr("Spells"))

export const getClassSpellsSection = async (
  allSpells: Spell[],
  deps: CompileRulesDeps,
  rules?: TagRules,
  className?: string,
  // linkback?: string,
) => {
  if (!className) return ''

  if (!rules) return ''

  const processClassfileContent = processContent(deps)

  const spells = createSpellList(allSpells, rules)
  // const spellListString = makeSpellListString(spells, className)
  const spellDescriptionsString = makeSpellDescriptionsListString(spells)

  // const endPageLinkbackStr = (!linkback ? "" : `[[${linkback}|Voltar]]`) + breakPage
  // console.log(endPageLinkbackStr)

  return (
    // (await processClassfileContent(spellListString + breakPage)) +
    breakPage +
    (await processClassfileContent(spellDescriptionsString))
  )
}

import {
  makeSpellDescriptionsListString,
  makeSpellListString,
} from './businessLogic/spellList'
import { CompileRulesDeps, processContent } from './compileBook/index'
import { matchGroups } from './regexUtils'

import { createSpellList, TagRules } from './tagRules'

export const getClassname = (filename: string) =>
  matchGroups(filename, /^Class - (?<className>.+)\.md$/).className

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

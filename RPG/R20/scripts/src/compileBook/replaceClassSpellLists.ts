import { getClassname, makeSpellListString } from '../classSpellList'
import { replaceMacro } from '../macros/replaceMacro'
import { Spell } from '../spell'
import { createSpellList, parseTagRules } from '../tagRules'

export const replaceClassSpellLists = (allSpells: Spell[]) =>
  replaceMacro('spell-list', (macro, match) => {
    const rules = parseTagRules(match)
    const spellList = createSpellList(allSpells, rules!)
    const spellListString = makeSpellListString(spellList)

    return spellListString
  })

import { Spell } from '../businessLogic/spell'
import { makeSpellListString } from '../businessLogic/spellList'
import { replaceMacro } from '../macros/replaceMacro'

import { createSpellList, parseTagRules } from '../tagRules'

export const replaceClassSpellLists = (allSpells: Spell[]) =>
  replaceMacro('spell-list', (_, match) => {
    const rules = parseTagRules(match)
    const spellList = createSpellList(allSpells, rules!)
    const spellListString = makeSpellListString(spellList)

    return spellListString
  })

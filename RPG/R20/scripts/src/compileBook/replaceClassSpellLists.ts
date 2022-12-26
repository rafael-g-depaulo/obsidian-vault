import { getClassname, makeSpellListString } from '../classSpellList'
import { Spell } from '../spell'
import { createSpellList, parseTagRules, rulesBlockRegex } from '../tagRules'

export const replaceClassSpellLists =
  (allSpells: Spell[]) => (content: string) =>
    content.replace(rulesBlockRegex, match => {
      const rules = parseTagRules(match)
      const spellList = createSpellList(allSpells, rules!)
      const spellListString = makeSpellListString(spellList)

      return spellListString
    })

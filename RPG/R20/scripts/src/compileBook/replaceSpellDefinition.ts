import { parseSpell, spellString } from '../businessLogic/spell'
import { replaceMacro } from '../macros/replaceMacro'

export const replaceSpellDefinition = replaceMacro('spell-definition', macro =>
  spellString(parseSpell(macro))
)

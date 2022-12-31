import {
  createSpell,
  joinErrors,
  joinErrorsStart,
  Spell,
} from './businessLogic/spell'
import { isSpellError, SpellError, spellError } from './error'
import { listFiles, readFile } from './file'
import { searchMacro } from './macros/parseMacro'
import { Macro } from './macros/types'
import { removeExtension } from './stringOutputUtils'
import { ValidatedSpells } from './validateSpell'

export const readSpells = async (
  descriptionsFolder: string,
  _spellFilenames?: string[]
): Promise<ValidatedSpells> => {
  const spellFilenames =
    _spellFilenames ?? (await listFiles(descriptionsFolder))

  const readSpell = (name: string) =>
    readFile(descriptionsFolder, name).then(
      content =>
        searchMacro(content, 'spell-definition') ??
        spellError(
          'Spell file without a definition',
          `Spell doesn't have {{spell-defitinition}} macro`,
          removeExtension(name)
        )
    )

  const spellDefinitionMacros = await Promise.all(spellFilenames.map(readSpell))

  const { errors: errs, macros } = spellDefinitionMacros.reduce<{
    macros: Macro[]
    errors: SpellError[]
  }>(
    (acc, cur) =>
      isSpellError(cur)
        ? {
            errors: [...acc.errors, cur],
            macros: [...acc.macros],
          }
        : {
            errors: [...acc.errors],
            macros: [...acc.macros, cur],
          },
    { macros: [], errors: [] }
  )

  const parsed = macros.map(createSpell).reduce(joinErrors, joinErrorsStart)

  return {
    spells: parsed.spells,
    errors: [...errs, ...parsed.errors],
  }
}

export const filterWipSpells = (spells: Spell[]) =>
  spells.filter(
    spell => spell.tags.includes('spell') && !spell.tags.includes('wip')
  )

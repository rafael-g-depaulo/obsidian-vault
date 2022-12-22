import { ErrorCheckerDeps, getErrorsWithSpell, SpellError } from './error'
import { Spell } from './spell'

export type ValidatedSpell = { spell: null | Spell; errors: SpellError[] }
export type ValidatedSpells = { spells: Spell[]; errors: SpellError[] }

export const validadeSpell =
  (deps: ErrorCheckerDeps) =>
  (spell: Spell): ValidatedSpell => ({
    spell,
    errors: getErrorsWithSpell(deps)(spell),
  })

export const validateSpells =
  (deps: ErrorCheckerDeps) => (_spells: Spell[]) => {
    const { spells, errors } = _spells
      .map(validadeSpell(deps))
      .reduce<{ spells: Spell[]; errors: SpellError[] }>(
        (acc, { errors, spell }) => ({
          spells: !spell ? acc.spells : [...acc.spells, spell],
          errors: [...acc.errors, ...errors],
        }),
        { spells: [], errors: [] }
      )

    return { spells, errors }
  }

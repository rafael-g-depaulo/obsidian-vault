import { getErrorsWithSpell, SpellError } from './error'
import { Spell } from './spell'

export type ValidatedSpell = { spell: null | Spell; errors: SpellError[] }

export const validadeSpell = (spell: Spell): ValidatedSpell => ({
  spell,
  errors: getErrorsWithSpell(spell),
})

export const validateSpells = (_spells: Spell[]) => {
  const { spells, errors } = _spells
    .map(validadeSpell)
    .reduce<{ spells: Spell[]; errors: SpellError[] }>(
      (acc, { errors, spell }) => ({
        spells: !spell ? acc.spells : [...acc.spells, spell],
        errors: [...acc.errors, ...errors],
      }),
      { spells: [], errors: [] }
    )

  return { spells, errors }
}

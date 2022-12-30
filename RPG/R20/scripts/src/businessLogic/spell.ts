import { Macro } from '../macros/types'

export interface Spell {
  name: string
}

export const parseSpell = (macro: Macro): Spell => {
  return {
    name: '',
  }
}

export const spellString = (spell: Spell) => ''

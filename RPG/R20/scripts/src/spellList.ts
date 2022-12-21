import { Spell } from './spell'

type TagSpellMap = { [tag: string]: Spell }

const createTagSpellMap = (spells: Spell[]) => {
  return spells.reduce((acc, cur) => {
    // for (const tag of cur.tags)
    // acc[tag]
    return acc
  }, {})
}

export const makeTagSpellList = (spells: Spell[]) => {}

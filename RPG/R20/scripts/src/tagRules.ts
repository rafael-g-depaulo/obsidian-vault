import { searchMacro } from './macros/parseMacro'
import { getNumber, getStringArr, SpellListMacro } from './macros/types'
import { Spell } from './businessLogic/spell'

type LevelRules = {}
export type TagRules = {
  includeTags: string[]
  excludeTags: string[]
  includeSpells: string[]
  excludeSpells: string[]
  minLevel: number
  maxLevel: number
} & LevelRules

export const createTagRules = ({
  excludeSpells = [],
  excludeTags = [],
  includeSpells = [],
  includeTags = [],
  maxLevel = 9,
  minLevel = 0,
}: Partial<TagRules> = {}): TagRules => ({
  excludeSpells,
  excludeTags,
  includeSpells,
  includeTags,
  maxLevel,
  minLevel,
})

export const parseTagRules = (content: string): TagRules | null => {
  const tagRules = searchMacro<SpellListMacro>(content, 'spell-list')
  if (!tagRules) return null

  return createTagRules({
    excludeSpells: getStringArr(tagRules.items.EXCLUDE_SPELLS),
    excludeTags: getStringArr(tagRules.items.EXCLUDE_TAGS),
    includeSpells: getStringArr(tagRules.items.INCLUDE_SPELLS),
    includeTags: getStringArr(tagRules.items.INCLUDE_TAGS),
    maxLevel: getNumber(tagRules.items?.MAX_LEVEL),
    minLevel: getNumber(tagRules.items?.MIN_LEVEL),
  })
}

export const createSpellList = (spells: Spell[], rules: TagRules): Spell[] => {
  const spellsByTag = spells
    // if a spell has one of the included tags
    .filter(spell => spell.tags.some(tag => rules.includeTags.includes(tag)))
    // and doesn't have one of the excluded tags
    .filter(spell => !spell.tags.some(tag => rules.excludeTags.includes(tag)))
    // and isn't on the excluded spells
    .filter(
      spell => !rules.excludeSpells.some(spellName => spellName === spell.name)
    )
    // and fits the level range
    .filter(
      spell => spell.level >= rules.minLevel && spell.level <= rules.maxLevel
    )

  const specificSpells = spells
    // if a spell is requested
    .filter(spell =>
      rules.includeSpells.some(spellName => spellName === spell.name)
    )
    // and isn't on the excluded list
    .filter(
      spell => !rules.excludeSpells.some(spellName => spellName === spell.name)
    )
    // and isn't already included by tag
    .filter(spell => !spellsByTag.some(s => s.name === spell.name))

  return [...spellsByTag, ...specificSpells]
}

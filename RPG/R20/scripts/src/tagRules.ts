import { matchAllGroups, matchGroups } from './regexUtils'
import { Spell } from './spell'

type LevelRules = {}
export type TagRules = {
  includeTags: string[]
  excludeTags: string[]
  includeSpells: Spell[]
  excludeSpells: Spell[]
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

export const rulesBlockRegex = /{{spell-list(?<rules>[^}]+)}}/
export const parseTagRules = (content: string): TagRules | null => {
  const tagRuleRegex = /(?<ruleName>\w+):\n(?<ruleItems>(?:\s*-\s*\w+\n)*)/g
  const levelRuleRegex = /^\s*(?<ruleName>\w+):\s*(?<ruleValue>\d+)/gm
  const ruleItemRegex = /^\s*-\s*(?<item>\w+)/

  const spellListBlock = matchGroups(content, rulesBlockRegex)?.rules
  if (!spellListBlock) return null

  const spellRulesEntries = matchAllGroups(spellListBlock, tagRuleRegex)
    .map(groups => [groups.ruleName, groups.ruleItems])
    .map(([rule, itemsString]) => [
      rule,
      itemsString
        .split('\n')
        .filter(line => line !== '')
        .map(line => matchGroups(line, ruleItemRegex))
        .map(({ item }) => item),
    ])
  const tagRules = Object.fromEntries(spellRulesEntries)
  const levelRules = Object.fromEntries(
    matchAllGroups(spellListBlock, levelRuleRegex).map(
      ({ ruleName, ruleValue }) => [ruleName, parseInt(ruleValue)]
    )
  )

  return createTagRules({
    excludeSpells: tagRules.EXCLUDE_SPELLS,
    excludeTags: tagRules.EXCLUDE_TAGS,
    includeSpells: tagRules.INCLUDE_SPELLS,
    includeTags: tagRules.INCLUDE_TAGS,
    maxLevel: levelRules?.MAX_LEVEL,
    minLevel: levelRules?.MIN_LEVEL,
  })
}

export const createSpellList = (spells: Spell[], rules: TagRules): Spell[] => {
  const spellsByTag = spells
    // if a spell has one of the included tags
    .filter(spell => spell.tags.some(tag => rules.includeTags.includes(tag)))
    // and doesn't have one of the excluded tags
    .filter(spell => !spell.tags.some(tag => rules.excludeTags.includes(tag)))
    // and isn't on the excluded spells
    .filter(spell => !rules.excludeSpells.some(s => s.name === spell.name))
    // and fits the level range
    .filter(
      spell => spell.level >= rules.minLevel && spell.level <= rules.maxLevel
    )

  const specificSpells = spells
    // if a spell is requested
    .filter(spell => rules.includeSpells.some(s => s.name === spell.name))
    // and isn't on the excluded list
    .filter(spell => !rules.excludeSpells.some(s => s.name === spell.name))
    // and isn't already included by tag
    .filter(spell => !spellsByTag.some(s => s.name === spell.name))

  return [...spellsByTag, ...specificSpells]
}

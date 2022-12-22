import { matchAllGroups, matchGroups } from './regexUtils'
import { Spell } from './spell'

export type TagRules = {
  includeTags: string[]
  excludeTags: string[]
  includeSpells: Spell[]
  excludeSpells: Spell[]
}
export const createTagRules = ({
  excludeSpells = [],
  excludeTags = [],
  includeSpells = [],
  includeTags = [],
}: Partial<TagRules> = {}): TagRules => ({
  excludeSpells,
  excludeTags,
  includeSpells,
  includeTags,
})

export const parseTagRules = (content: string): TagRules | null => {
  const rulesBlockRegex = /{{spell-list(?<rules>[^}]+)}}/
  const ruleRegex = /(?<ruleName>\w+):\n(?<ruleItems>(?:\t-\s*\w+\n)*)/g
  const ruleItemRegex = /^\s*-\s*(?<item>\w+)/

  const spellListBlock = matchGroups(content, rulesBlockRegex)?.rules
  if (!spellListBlock) return null

  const spellRulesEntries = matchAllGroups(spellListBlock, ruleRegex)
    .map(groups => [groups.ruleName, groups.ruleItems])
    .map(([rule, itemsString]) => [
      rule,
      itemsString
        .split('\n')
        .filter(line => line !== '')
        .map(line => matchGroups(line, ruleItemRegex))
        .map(({ item }) => item),
    ])
  const spellRules = Object.fromEntries(spellRulesEntries)

  return createTagRules({
    excludeSpells: spellRules.INCLUDE_TAGS,
    excludeTags: spellRules.EXCLUDE_TAGS,
    includeSpells: spellRules.INCLUDE_SPELLS,
    includeTags: spellRules.EXCLUDE_SPELLS,
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

  const specificSpells = spells
    // if a spell is requested
    .filter(spell => rules.includeSpells.some(s => s.name === spell.name))
    // and isn't on the excluded list
    .filter(spell => !rules.excludeSpells.some(s => s.name === spell.name))
    // and isn't already included by tag
    .filter(spell => !spellsByTag.some(s => s.name === spell.name))

  return [...spellsByTag, ...specificSpells]
}

import { spellError, SpellError } from '../error'
import { getString, Macro } from '../macros/types'
import { parseMarkdownTable, spellLevelStr } from '../stringOutputUtils'
import { getTags } from '../tags'

export const spellDescriptionItems = [
  'castTime',
  'range',
  'target',
  'duration',
  'crit',
  'resistance',
] as const
export type SpellDescriptionItems = typeof spellDescriptionItems[number]

type SpellIncrease = { cost: string; description: string }

export interface Spell {
  name: string
  level: number
  tags: string[]

  items: {
    [key in SpellDescriptionItems]?: string
  }
  increases: SpellIncrease[]
  description: string
}

// export type SpellSyntaxValidation = { macro: Macro; errors: SpellError[] }
export type ValidatedSpell = { spell: Spell; errors: SpellError[] }
export type ValidatedSpells = { spells: Spell[]; errors: SpellError[] }
export const joinErrorsStart: ValidatedSpells = {
  errors: [],
  spells: [],
}
export const joinErrors = (
  acc: ValidatedSpells,
  { errors, spell }: ValidatedSpell
): ValidatedSpells => {
  return { errors: [...acc.errors, ...errors], spells: [...acc.spells, spell] }
}

const SpellItemLabelName: { [k in SpellDescriptionItems]: string } = {
  castTime: 'Execução',
  range: 'Alcance',
  target: 'Alvo',
  duration: 'Duração',
  crit: 'Crítico',
  resistance: 'Resistência',
}

const parseIncreases = (content: string): SpellIncrease[] =>
  parseMarkdownTable(content).map(([cost, description]) => ({
    cost,
    description,
  }))

const validateSpellSyntax = (macro: Macro): SpellError[] => {
  const errors: SpellError[] = []

  if (!macro.argument)
    errors.push(
      spellError('Spell Definition Syntax', 'Spell missing name argument')
    )

  if (!macro.items.LEVEL)
    errors.push(
      spellError(
        'Spell Definition Syntax',
        `Missing "LEVEL" item`,
        macro.argument
      )
    )
  if (!macro.items.TAGS)
    errors.push(
      spellError(
        'Spell Definition Syntax',
        `Missing "TAGS" item`,
        macro.argument
      )
    )
  if (!macro.items.CAST_TIME)
    errors.push(
      spellError(
        'Spell Definition Syntax',
        `Missing "CAST_TIME" item`,
        macro.argument
      )
    )
  if (!macro.items.DURATION)
    errors.push(
      spellError(
        'Spell Definition Syntax',
        `Missing "DURATION" item`,
        macro.argument
      )
    )
  if (!macro.items.DESCRIPTION)
    errors.push(
      spellError(
        'Spell Definition Syntax',
        `Missing "DESCRIPTION" item`,
        macro.argument
      )
    )

  return errors
}

export const parseSpell = (spellMacro: Macro): Spell => ({
  name: spellMacro.argument ?? 'SPELL_NAME_MISSING',
  level: parseInt(getString(spellMacro.items.LEVEL) ?? '0'),
  tags: getTags(getString(spellMacro.items.TAGS) ?? ''),
  items: {
    castTime: getString(spellMacro.items.CAST_TIME),
    range: getString(spellMacro.items.RANGE),
    target: getString(spellMacro.items.TARGET),
    duration: getString(spellMacro.items.DURATION),
    crit: getString(spellMacro.items.CRIT),
    resistance: getString(spellMacro.items.RESISTANCE),
  },

  increases: parseIncreases(getString(spellMacro.items.INCREASES) ?? ''),
  description: getString(spellMacro.items.DESCRIPTION)?.trim() ?? '',
})

export const createSpell = (spellMacro: Macro): ValidatedSpell => {
  const errors = validateSpellSyntax(spellMacro)
  const spell = parseSpell(spellMacro)

  return { spell, errors }
}

const filterSpellItem = (
  entry: [string, string]
): entry is [SpellDescriptionItems, string] =>
  typeof entry[1] === 'string' && !!entry[1]

const spellItemsString = (items: Spell['items']) =>
  Object.entries(items)
    .filter(filterSpellItem)
    .map(([key, value]) => `- **${SpellItemLabelName[key]}:** ${value}\n`)
    .join('')

export const SpellBaseCostDict: { [k: number]: number } = {
  [0]: 0,
  [1]: 1,
  [2]: 2,
  [3]: 3,
  [4]: 4,
  [5]: 6,
  [6]: 8,
  [7]: 10,
  [8]: 12,
  [9]: 15,
}

const spellBaseCost = (spell: Spell) => SpellBaseCostDict[spell.level] ?? -1

export const spellString = (spell: Spell) =>
  `\n### ${spell.name} (${spellBaseCost(spell)} MP)\n` +
  `<div class="spell-tags">${spell.tags
    .filter(tag => tag !== 'spell')
    .join(' ')}</div>\n\n` +
  `*${spellLevelStr(spell.level)}*\n` +
  spellItemsString(spell.items) +
  '___\n' +
  `\n${spell.description}\n\n` +
  spell.increases
    .map(({ cost, description }) => `- **${cost}:** ${description}.`)
    .join('\n')

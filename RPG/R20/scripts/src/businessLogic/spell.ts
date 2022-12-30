import { getString, getStringArr, Macro } from '../macros/types'
import { parseMarkdownTable, spellLevelStr } from '../stringOutputUtils'
import { getTags } from '../tags'
import { isNotUndefined } from '../typeUtils'

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

export const parseSpell = (spellMacro: Macro): Spell => {
  return {
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
    description: getString(spellMacro.items.DESCRIPTION) ?? '',
  }
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

export const spellString = (spell: Spell) =>
  // spell.tags.map(t => `#${t}`).join(' ') +
  `\n### ${spell.name}\n` +
  `<div class="spell-tags">${spell.tags
    .filter(tag => tag !== 'spell')
    .join(' ')}</div>\n` +
  `*${spellLevelStr(spell.level)}*\n` +
  spellItemsString(spell.items) +
  '___\n' +
  `\n${spell.description}\n\n` +
  spell.increases
    .map(({ cost, description }) => `- **${cost}:** ${description}.`)
    .join('\n')

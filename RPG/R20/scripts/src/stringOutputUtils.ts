import { matchAllGroups } from './regexUtils'
import { Spell } from './spell'

export const order = (level: number) =>
  level === 1 ? 'st' : level === 2 ? 'nd' : level === 3 ? 'rd' : 'th'

export const spellLevelStr = (level: number) =>
  level === 0 ? 'Cantrip' : `${level}${order(level)} Circle`

export const spellListItem = (spell: Spell) => `- [[${spell.name}]]`

const markdownTableRowRegex = /^\s*\|(?<tableRow>.+)\|\s*$/gm
export const parseMarkdownTable = (content: string) =>
  matchAllGroups(content, markdownTableRowRegex)
    .map(({ tableRow }) => tableRow.split('|').map(cell => cell.trim()))
    .slice(2)

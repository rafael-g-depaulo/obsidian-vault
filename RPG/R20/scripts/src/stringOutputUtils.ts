import { matchAllGroups } from './regexUtils'

export const order = (level: number) =>
  level === 1 ? 'st' : level === 2 ? 'nd' : level === 3 ? 'rd' : 'th'

export const spellLevelStr = (level: number) =>
  level === 0 ? 'Cantrip' : `${level}${order(level)} Circle`

const markdownTableRowRegex = /^\s*\|(?<tableRow>.+)\|\s*$/gm
export const parseMarkdownTable = (
  content: string,
  withHeader: boolean = false
) => {
  const rowsArr = matchAllGroups(content, markdownTableRowRegex).map(
    ({ tableRow }) => tableRow.split('|').map(cell => cell.trim())
  )
  if (rowsArr.length < 3) return rowsArr
  if (withHeader) return [rowsArr[0], ...rowsArr.slice(2)]
  return rowsArr.slice(2)
}

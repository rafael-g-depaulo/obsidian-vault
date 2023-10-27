import { replaceMacro } from '../macros/replaceMacro'

type PagedHeading = {
  line: string,
  page: number,
}
type PagedHeadingTempObject = {
  headings: PagedHeading[],
  currentPage: number,
}
const pageCounter = (lines: string[]): PagedHeading[] => {
  return lines
    .reduce<PagedHeadingTempObject>(
      (acc, cur) => {
        if (cur === '\\page')
          return {
            headings: acc.headings,
            currentPage: acc.currentPage + 1,
          }
        else
          return {
            headings: [...acc.headings, { line: cur, page: acc.currentPage }],
            currentPage: acc.currentPage
          }
      },
      { headings: [], currentPage: 1 }
    )
    .headings// that arent h3 or below
    .filter(line => line !== '\\page')
}

export const insertSummary = (content: string) => {
  const summaryIndex = content.indexOf('{{summary}}')
  const endOfSummary = summaryIndex + '{{summary}}'.length

  const headings = content
    .slice(endOfSummary)
    .split('\n')
    // get all headings and page breaks (important for counting pages later)
    .filter(line => line[0] === '#' || line === '\\page')
    .filter(line => line.slice(0, 3) !== '###')

  console.log(headings)
  const tableOfContentsItems = headings.join('\n')

  const tableOfContentsHead = ''
  const tableOfContentsTail = ''

  const tableOfContents = `${tableOfContentsHead}${tableOfContentsItems}${tableOfContentsTail}`

  // console.log(tableOfContents)

  const insertSummary = replaceMacro('summary', (_, content) => tableOfContents)

  return insertSummary(content)
}

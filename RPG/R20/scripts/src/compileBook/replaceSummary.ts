import { groupByNumber } from '../arrayUtils'
import { replaceMacro } from '../macros/replaceMacro'

const headingsPerTocPage = 53
const tocPageSeparator = "\n"

const getHeadingLevel = (heading: string) =>
  /^#+ /.test(heading) ? heading.indexOf(' ') : -1

type PagedHeading = {
  line: string
  page: number
  level: number
}
type PagedHeadingTempObject = {
  headings: PagedHeading[]
  currentPage: number
}

const startingPageCounter = 5
const pageCounter = (lines: string[]): PagedHeading[] => {
  return lines
    .reduce<PagedHeadingTempObject>(
      (acc, cur) => {

        if (cur === '\\page')
          return {
            ...acc,
            currentPage: acc.currentPage + 1,
          }

        const heading: PagedHeading = {
          line: cur.slice(cur.indexOf(' ') + 1),
          page: acc.currentPage,
          level: getHeadingLevel(cur),
        }

        return {
          ...acc,
          headings: [
            ...acc.headings,
            heading,
          ],
        }
      },
      { headings: [], currentPage: startingPageCounter }
    )
    .headings // that arent h3 or below
    .filter(h => h.line !== '\\page')
}

const makeTocItem = (heading: PagedHeading) =>
  heading.level === 1 ? `- ### [{{ ${heading.line} }}{{ ${heading.page - 1} }}](#p${heading.page})` :
    heading.level === 2 ? `- #### [{{ ${heading.line} }}{{ ${heading.page - 1} }}](#p${heading.page})`
      : `- ${heading.line}`

const makeTocPage = (headings: PagedHeading[]) => {
  const tableOfContentsItems = headings.map(makeTocItem).join('\n')

  const tableOfContentsHead = '\n\\page\n{{toc,wide\n# Table Of Contents\n'
  const tableOfContentsTail = '\n}}'

  const tableOfContentsPage = `${tableOfContentsHead}${tableOfContentsItems}${tableOfContentsTail}`

  return tableOfContentsPage

}

export const replaceSummary = (content: string): string => {
  const summaryIndex = content.indexOf('{{summary}}')
  const endOfSummary = summaryIndex + '{{summary}}'.length

  const headings = pageCounter(content
    .substring(endOfSummary)
    .split('\n')
    // get all headings and page breaks (important for counting pages later)
    .filter(line => getHeadingLevel(line) !== -1 || line === '\\page')
    .filter(line => getHeadingLevel(line) < 3))

  const tableOfContents = groupByNumber((headings), headingsPerTocPage)
    .map(makeTocPage)
    .join(tocPageSeparator)

  // return tableOfContents
  const insertSummary = replaceMacro('summary', tableOfContents)

  return insertSummary(content)
}

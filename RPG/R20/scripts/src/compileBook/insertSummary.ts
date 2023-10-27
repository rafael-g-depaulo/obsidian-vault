import { replaceMacro } from "../macros/replaceMacro"

export const insertSummary = (content: string) => {

  const summaryIndex = content.indexOf("{{summary}}")
  const endOfSummary = summaryIndex + "{{summary}}".length

  const headings = content
    .slice(endOfSummary)
    .split('\n')
    // get all headings
    .filter(line => line[0] === '#')
    // that arent h3 or below
    .filter(line => line.slice(0, 3) !== "###")

  const tableOfContentsItems = headings
    .join('\n')

  const tableOfContentsHead = ""
  const tableOfContentsTail = ""

  const tableOfContents = `${tableOfContentsHead}${tableOfContentsItems}${tableOfContentsTail}`

  console.log(tableOfContents)

  const insertSummary = replaceMacro("summary", (_, content) => tableOfContents)

  return insertSummary(content)
}


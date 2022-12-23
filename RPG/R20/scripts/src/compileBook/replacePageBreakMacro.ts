export const breakPage = `{{pageNumber,auto}}\n\\page\n`

const pageBreakRegex = /{{\s*page-break\s*}}/g
export const replacePageBreakMacro = (content: string) =>
  content.replace(pageBreakRegex, breakPage) + `{{pageNumber,auto}}`

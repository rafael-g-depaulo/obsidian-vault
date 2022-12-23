export const numberPage = `{{pageNumber,auto}}\n`
export const breakPage = `${numberPage}\\page\n`

const pageBreakRegex = /{{\s*page-break\s*}}/g
export const replacePageBreakMacro = (content: string) =>
  content.replace(pageBreakRegex, breakPage)

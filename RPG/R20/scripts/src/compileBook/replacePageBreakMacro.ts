const pageBreakRegex = /{{\s*page-break\s*}}/g
export const replacePageBreakMacro = (content: string) =>
  content.replace(pageBreakRegex, '\n\\page\n')

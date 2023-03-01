import { breakPage } from './replacePageBreakMacro'

const h1WithoutPageBreakRegex = /(?<!\\page\n)^#\s*[^#\n]+$/gm
const isMainTitle = /^# R20$/
export const addPageBreakBeforeH1 = (content: string) =>
  content.replace(h1WithoutPageBreakRegex, match =>
    isMainTitle.test(match) ? match : `${breakPage}${match}`
  )

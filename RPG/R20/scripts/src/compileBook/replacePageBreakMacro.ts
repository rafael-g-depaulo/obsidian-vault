import { replaceMacro } from '../macros/replaceMacro'

export const numberPage = `{{pageNumber,auto}}\n`
export const breakPage = `${numberPage}\\page\n`

export const replacePageBreakMacro = replaceMacro('page-break', breakPage)

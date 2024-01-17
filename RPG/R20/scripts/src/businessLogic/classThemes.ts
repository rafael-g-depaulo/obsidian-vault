import { Macro } from '../macros/types'
import { parseMarkdownTable } from '../stringOutputUtils'

export type Themes = {
  [s: string]: {
    classes: string[]
    skills: string
  }
}

export const parseThemes = <T extends Macro>(
  archetypeMacro: T | null
): Themes => {
  const parsedTable = parseMarkdownTable(archetypeMacro?.rawBody ?? '').map(
    ([name, classes, skills]) => [name, { classes: classes.split(", "), skills }]
  )

  return Object.fromEntries(parsedTable)
}

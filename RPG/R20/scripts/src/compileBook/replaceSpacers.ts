import { replaceMacro } from '../macros/replaceMacro'

export const verticalSpacer = `{{height:40px}}\n`

// BUG: i think this isn't working
export const replaceVerticalSpacers = replaceMacro(
  'vertical-spacer',
  verticalSpacer
)

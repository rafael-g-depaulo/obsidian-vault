import { replaceMacro } from '../macros/replaceMacro'

export const replaceNotes = replaceMacro(
  'note',
  macro => `{{descriptive\n${macro.rawBody}}}`
)

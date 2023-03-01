import { replaceMacro } from '../macros/replaceMacro'

export const replaceClassNotes = replaceMacro(
  'class-note',
  macro => `{{note\n#### ${macro.argument ?? 'NO_TITLE'}\n\n${macro.rawBody}}}`
)

import { CompileRulesDeps } from '../compileBook'
import { MacroBody } from './macroAst'

const macroHandlerDict: {
  [macroName: string]: (deps: CompileRulesDeps, body: MacroBody) => string
} = {
  'page-break': () => `ppppppppppppppppppp`
}
const defaultMacroHandler =
  (macroName: string) =>
    (_deps: CompileRulesDeps, body: MacroBody) => `%pass-through-macro%\n{{${macroName} ${body.compile()} }}\n`

export const macroHandler = (macroName: string, body: MacroBody, deps: CompileRulesDeps) =>
  (macroHandlerDict[macroName] ?? defaultMacroHandler(macroName))(deps, body)


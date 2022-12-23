import { popTopFolder, readFile } from '../file'
import { replaceClasses } from './replaceClasses'
import { makeLinksGlobal, replaceLinks } from './replaceLinks'

export type CompileRulesDeps = { classesFolder: string }
export const compileRules = (filepath: string, deps: CompileRulesDeps) =>
  compileRulesRecursive(popTopFolder(filepath) ?? '', filepath, deps)

export const compileRulesRecursive = (
  currentFolder: string,
  filepath: string,
  deps: CompileRulesDeps
) =>
  readFile(filepath)
    .then(makeLinksGlobal(currentFolder))
    .then(replaceLinks(currentFolder, deps))
    .then(replaceClasses(deps.classesFolder))

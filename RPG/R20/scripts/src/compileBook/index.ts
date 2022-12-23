import { popTopFolder, readFile } from '../file'
import { Spell } from '../spell'
import { addPageBreakBeforeH1 } from './addPageBreakBeforeH1'
import { removeComments } from './removeComments'
import { replaceClasses } from './replaceClasses'
import { replaceClassSpellLists } from './replaceClassSpellLists'
import { makeLinksGlobal, replaceLinks } from './replaceLinks'

export type CompileRulesDeps = { classesFolder: string; allSpells: Spell[] }
export const compileRules = (filepath: string, deps: CompileRulesDeps) =>
  compileRulesRecursive(popTopFolder(filepath) ?? '', filepath, deps)

export const compileRulesRecursive = (
  currentFolder: string,
  filepath: string,
  deps: CompileRulesDeps
) =>
  readFile(filepath)
    .then(removeComments)
    .then(makeLinksGlobal(currentFolder))
    .then(replaceLinks(currentFolder, deps))
    .then(replaceClasses(deps.classesFolder))
    .then(replaceClassSpellLists(deps.allSpells))
    .then(addPageBreakBeforeH1)

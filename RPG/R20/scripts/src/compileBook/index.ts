import { join } from 'path'
import { asyncPipe } from '../arrayUtils'
import { readFile } from '../file'
import { Spell } from '../spell'
import { addPageBreakBeforeH1 } from './addPageBreakBeforeH1'
import { removeComments } from './removeComments'
import { replaceClasses } from './replaceClasses'
import { replaceClassSpellLists } from './replaceClassSpellLists'
import { makeLinksGlobal, replaceLinks } from './replaceLinks'

export type CompileRulesDeps = {
  currentFolder: string
  classesFolder: string
  allSpells: Spell[]
}
export const compileRules = (filepath: string, deps: CompileRulesDeps) =>
  readFile(join(deps.currentFolder, filepath)).then(processContent(deps))

export const processContent = (deps: CompileRulesDeps) =>
  asyncPipe(
    removeComments,
    makeLinksGlobal(deps.currentFolder),
    replaceLinks(deps),
    replaceClasses(deps),
    replaceClassSpellLists(deps.allSpells),
    addPageBreakBeforeH1
  )

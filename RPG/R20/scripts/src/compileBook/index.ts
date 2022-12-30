import { join } from 'path'
import { asyncPipe } from '../arrayUtils'
import { Archetype } from '../businessLogic/archetype'
import { readFile } from '../file'
import { Spell } from '../spell'
import { addPageBreakBeforeH1 } from './addPageBreakBeforeH1'
import { removeComments } from './removeComments'
import {
  removeArchetypeDefinition,
  replaceClassDefinition,
} from './replaceClassDefinition'
import { replaceClasses } from './replaceClasses'
import { replaceClassNotes } from './replaceClassNotes'
import { replaceClassSpellLists } from './replaceClassSpellLists'
import { replaceGlobalSpellList } from './replaceGlobalSpellList'
import { makeLinksGlobal, replaceLinks } from './replaceLinks'
import { numberPage, replacePageBreakMacro } from './replacePageBreakMacro'
import { replaceSpellDefinition } from './replaceSpellDefinition'

export type CompileRulesDeps = {
  currentFolder: string
  classesFolder: string
  archetypesFolder: string
  allSpells: Spell[]
  archetypes: Archetype[]
}
export const compileRules = (filepath: string, deps: CompileRulesDeps) =>
  readFile(join(deps.currentFolder, filepath))
    .then(processContent(deps))
    .then(content => `${content}\n${numberPage}`)

export const processContent = (deps: CompileRulesDeps) =>
  asyncPipe(
    removeComments,
    makeLinksGlobal(deps.currentFolder),
    replaceLinks(deps),
    replaceClasses(deps),
    replaceClassDefinition(deps),
    replaceClassNotes,
    replaceClassSpellLists(deps.allSpells),
    addPageBreakBeforeH1,
    replaceGlobalSpellList(deps),
    replaceSpellDefinition,
    replacePageBreakMacro,
    removeArchetypeDefinition
  )

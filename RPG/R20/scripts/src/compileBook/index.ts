import { join } from 'path'
import { asyncPipe } from '../arrayUtils'
import { Archetype } from '../businessLogic/archetype'
import { Spell } from '../businessLogic/spell'
import { readFile } from '../file'
import { addPageBreakBeforeH1 } from './addPageBreakBeforeH1'
import { replaceSummary } from './replaceSummary'
import { removeComments } from './removeComments'
import { removeDevComments } from './removeDevComments'
import {
  removeArchetypeDefinition,
  replaceClassDefinition,
} from './replaceClassDefinition'
import { replaceClasses } from './replaceClasses'
import { replaceClassNotes } from './replaceClassNotes'
import { replaceClassSpellLists } from './replaceClassSpellLists'
import { replaceGlobalSpellList } from './replaceGlobalSpellList'
import { makeInclusionsGlobal, replaceFileInclusions } from './replaceFileInclusions'
import { numberPage, replacePageBreakMacro } from './replacePageBreakMacro'
import { replaceVerticalSpacers } from './replaceSpacers'
import { replaceSpellDefinition } from './replaceSpellDefinition'
import { Themes } from '../businessLogic/classThemes'

export type CompileRulesDeps = {
  currentFolder: string
  classesFolder: string
  archetypesFolder: string
  allSpells: Spell[]
  archetypes: Archetype[]
  classThemes: Themes
}
export const compileRules = (filepath: string, deps: CompileRulesDeps) =>
  readFile(join(deps.currentFolder, filepath))
    .then(processContent(deps))
    .then(content => `${content}\n${numberPage}`)

export const processContent = (deps: CompileRulesDeps) =>
  asyncPipe(
    removeComments,
    removeDevComments,
    makeInclusionsGlobal(deps.currentFolder),
    replaceFileInclusions(deps),
    replaceClasses(deps),
    replaceClassDefinition(deps),
    replaceClassNotes,
    replaceClassSpellLists(deps.allSpells),
    addPageBreakBeforeH1,
    replaceGlobalSpellList(deps),
    replaceSpellDefinition,
    replacePageBreakMacro,
    replaceVerticalSpacers,
    removeArchetypeDefinition,
    replaceSummary,
  )

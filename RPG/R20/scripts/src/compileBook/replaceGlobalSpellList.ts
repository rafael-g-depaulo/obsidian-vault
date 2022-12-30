import { asyncPipe } from '../arrayUtils'
import {
  makeSpellDescriptionsListString,
  makeSpellListString,
} from '../businessLogic/spellList'
import { searchPathRecursively } from '../file'
import { searchMacro } from '../macros/parseMacro'
import { replaceMacro } from '../macros/replaceMacro'
import { filterWipSpells, readSpells } from '../spell'
import { CompileRulesDeps } from './index'

export const replaceGlobalSpellList =
  (deps: CompileRulesDeps) => async (content: string) => {
    const loadSpells = searchMacro(content, 'load-spells-folder')
    if (!loadSpells || !loadSpells.argument) return content

    return searchPathRecursively(deps.currentFolder, loadSpells.argument)
      .then(
        spellsFolder =>
          spellsFolder ?? Promise.reject('Folder not found' + spellsFolder)
      )
      .then(readSpells)
      .then(filterWipSpells)
      .then(allSpells => {
        return asyncPipe(
          replaceMacro('load-spells-folder', ''),
          replaceMacro(
            'global-spell-list',
            makeSpellListString(allSpells, 'All')
          ),
          replaceMacro(
            'all-spells-descriptions',
            makeSpellDescriptionsListString(allSpells)
          )
        )(content)
      })
      .catch(e => '######## ERROR IN READING SPELL DESCRIPTIONS #######' + e)
  }

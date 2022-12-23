import {
  makeSpellDescriptionsListString,
  makeSpellListString,
} from '../classSpellList'
import { searchPathRecursively, writeToFile } from '../file'
import { matchGroups } from '../regexUtils'
import { readSpells } from '../spell'
import { CompileRulesDeps } from './index'

const spellDescriptionsFolderRegex = /{{load-spells-folder \"(?<path>.+)\"}}/
const globalSpellListRegex = /{{global-spell-list}}/
const spellDescriptionsListRegex = /{{all-spells-descriptions\s*}}/

export const replaceGlobalSpellList =
  (deps: CompileRulesDeps) => async (content: string) => {
    if (!spellDescriptionsFolderRegex.test(content)) return content
    return searchPathRecursively(
      deps.currentFolder,
      matchGroups(content, spellDescriptionsFolderRegex).path
    )
      .then(
        spellsFolder =>
          spellsFolder ?? Promise.reject('Folder not found' + spellsFolder)
      )
      .then(readSpells)
      .then(allSpells =>
        content
          .replace(spellDescriptionsFolderRegex, '')
          .replace(globalSpellListRegex, makeSpellListString(allSpells, 'All'))
          .replace(
            spellDescriptionsListRegex,
            makeSpellDescriptionsListString(allSpells)
          )
      )
      .catch(e => '######## ERROR IN READING SPELL DESCRIPTIONS #######' + e)
  }

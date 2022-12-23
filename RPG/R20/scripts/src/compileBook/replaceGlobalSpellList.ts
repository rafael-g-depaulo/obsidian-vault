import { makeSpellListString } from '../classSpellList'
import { searchPathRecursively } from '../file'
import { matchGroups, replaceAsync } from '../regexUtils'
import { readSpells } from '../spell'
import { CompileRulesDeps } from './index'

const globalSpellListRegex = /{{global-spell-list \"(?<path>.+)\"}}/

export const replaceGlobalSpellList =
  (deps: CompileRulesDeps) => (content: string) => {
    return replaceAsync(content, globalSpellListRegex, match =>
      searchPathRecursively(
        deps.currentFolder,
        matchGroups(match, globalSpellListRegex).path
      )
        .then(
          spellsFolder => spellsFolder ?? Promise.reject('Folder not found')
        )
        .then(readSpells)
        .then(allSpells => makeSpellListString(allSpells, 'All'))
        .catch(
          () => '######## ERROR IN READING SPELL DESCRIPTIONS ############'
        )
    )
  }

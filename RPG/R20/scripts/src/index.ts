import { join } from 'path'
import { SpellError, writeOutErrors } from './error'
import { deleteFile, writeToFile } from './file'

import { readSpells } from './spell'
import { createTagSpellMap, makeTagSpellList } from './spellList'
import { validateSpells } from './validateSpell'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const ResultsFolder = join(SpellsFolder, 'Compiled')

const dealWithErrors = (errors: SpellError[]): void => {
  if (errors.length > 0)
    writeToFile(ResultsFolder, 'Errors.md', writeOutErrors(errors))
  else deleteFile(ResultsFolder, 'Errors.md')
}

readSpells(SpellDescriptionsFolder)
  // readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
  .then(validateSpells)
  .then(({ errors, spells }) => {
    dealWithErrors(errors)
    return spells
  })
  .then(createTagSpellMap)
  .then(map =>
    Object.keys(map)
      .map(tag => makeTagSpellList(tag, map[tag]))
      .join('\n\n')
  )
  .then(content => writeToFile(ResultsFolder, 'Spell List by Tag.md', content))
  // .then(console.log)
  .catch(err => console.log('asdadasdsa', err, 'WDEFSDFSDF'))

// TODO:
//  - output error validation to a file for user
//  - make logic for generating a spell list from tags
//  - validate tag groups (fire needs to have energy, etc.)

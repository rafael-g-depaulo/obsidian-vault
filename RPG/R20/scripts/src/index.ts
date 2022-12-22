import { join } from 'path'
import { writeToFile } from './file'

import { readSpells, SpellError, validateSpells } from './spell'
import { createTagSpellMap, makeTagSpellList } from './spellList'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const ResultsFolder = join(SpellsFolder, 'Compiled')

const dealWithErrors = (errors: SpellError[]): void => {
  // throw errors
}

readSpells(SpellDescriptionsFolder)
  // readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
  .then(validateSpells)
  .then(({ errors, spells }) => {
    if (errors.length > 0) dealWithErrors(errors)
    return spells
  })
  .then(createTagSpellMap)
  // .then(map => makeTagSpellList('negative', map['negative']))
  .then(map =>
    Object.keys(map)
      .map(tag => makeTagSpellList(tag, map[tag]))
      .join('\n\n')
  )
  .then(content => writeToFile(ResultsFolder, 'Spell List by Tag.md', content))
  // .then(console.log)
  .catch(err => console.log('asdadasdsa'))

// TODO:
//  - output error validation to a file for user
//  - create list of all spells of a tag
//  - make logic for generating a spell list from tags
//  -

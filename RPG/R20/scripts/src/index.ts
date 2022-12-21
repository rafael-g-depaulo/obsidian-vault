import { join } from 'path'

import { listFiles, readFile } from './file'
import { readSpells, validateSpells } from './spell'
import { createTagMap, getTags } from './tags'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')

// readSpells(SpellDescriptionsFolder)
readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
  .then(validateSpells)
  .then(a => a.spells)
  .then(console.log)
  .catch(err => console.log('asdadasdsa', err))

// TODO:
//  - validate errors and output to a file (ex: all spells should be tagged as #spell or #wip)
//  - create list of all spells of a tag
//  - make logic for generating a spell list from tags
//  -

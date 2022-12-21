import { join } from 'path'

import { listFiles, readFile } from './file'
import { readSpells } from './spell'
import { createTagMap, getTags } from './tags'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')

readSpells(SpellDescriptionsFolder, ['Acid Splash.md'])
  .then(spells => createTagMap(spells))
  .then(console.log)

// TODO:
//  - validate errors and output to a file (ex: all spells should be tagged as #spell or #wip)
//  - create list of all spells of a tag
//  - make logic for generating a spell list from tags
//  -

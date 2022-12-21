import { join } from 'path'

import { listFiles, readFile } from './file'
import { createTagMap, getTags } from './tags'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')

// what i want:
//   - map of all spell names to their tags

const SpellFileNamesPromise = listFiles(SpellDescriptionsFolder)

// SpellFileNamesPromise.then(SpellFileNames =>
//   createTagMap(SpellDescriptionsFolder, SpellFileNames)
// ).then(console.log)

createTagMap(SpellDescriptionsFolder, ['Acid Splash.md']).then(console.log)

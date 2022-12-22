import { join } from 'path'
import { dealWithErrors } from './error'

import { readSpells } from './spell'
import { writeTagSpellLists } from './tags'
import { validateSpells } from './validateSpell'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const ResultsFolder = join(SpellsFolder, 'Compiled')

const errorsFile = 'Errors.md'
const tagSpellListsFile = 'Spell List by Tag.md'

// readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
readSpells(SpellDescriptionsFolder)
  .then(validateSpells({ tagGroups: {} }))
  .then(dealWithErrors(ResultsFolder, errorsFile))
  // .then(({ spells }) => spells) // if not using "dealWithErrors" uncomment this line
  .then(writeTagSpellLists(ResultsFolder, tagSpellListsFile))
  // .then(console.log)
  .catch(err => console.log('asdadasdsa', err, 'WDEFSDFSDF'))

// TODO:
//  - validate tag groups (fire needs to have energy, etc.)

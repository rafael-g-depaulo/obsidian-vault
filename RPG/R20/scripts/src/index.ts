import { join } from 'path'
import { dealWithErrors } from './error'
import { readFile } from './file'

import { readSpells } from './spell'
import { parseTagGroups, writeTagSpellLists } from './tags'
import { validateSpells } from './validateSpell'

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const ResultsFolder = join(SpellsFolder, 'Compiled')

const errorsFile = 'Errors.md'
const tagGroupsFile = 'Spell Tags.md'
const tagSpellListsFile = 'Spell List by Tag.md'

// read, analyse and compile stuff
const compileSpells = async () => {
  const tagGroups = await readFile(SpellsFolder, tagGroupsFile).then(
    parseTagGroups
  )

  // readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
  readSpells(SpellDescriptionsFolder)
    .then(validateSpells({ tagGroups }))
    .then(dealWithErrors(ResultsFolder, errorsFile))
    // .then(({ spells }) => spells) // if not using "dealWithErrors" uncomment this line
    .then(writeTagSpellLists(ResultsFolder, tagSpellListsFile))
    // .then(console.log)
    .catch(err => console.log('asdadasdsa', err, 'WDEFSDFSDF'))
}

// run everything
compileSpells()

// TODO:
//  - validate tag groups (fire needs to have energy, etc.)

import { join } from 'path'
import { className, makeClassSpellList } from './classSpellList'
import { dealWithErrors } from './error'
import { listFiles, readFile, writeToFile } from './file'

import { readSpells } from './spell'
import { createSpellList, parseTagRules } from './tagRules'
import { parseTagGroups, writeTagSpellLists } from './tags'
import { validateSpells } from './validateSpell'

// config
const baseDir = join(__dirname, '../../')
const ClassesFolder = join(baseDir, 'Classes')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const ResultsFolder = join(SpellsFolder, 'Compiled')

const errorsFile = 'Errors.md'
const tagGroupsFile = 'Spell Tags.md'
const tagSpellListsFile = 'Spell List by Tag.md'
const compiledClassSpellList = (classname: string) =>
  `${classname} Spell List.md`

// read, analyse and compile stuff
const compileSpells = async () => {
  const tagGroups = await readFile(SpellsFolder, tagGroupsFile).then(
    parseTagGroups
  )

  // parse all spells
  // readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
  const allSpells = await readSpells(SpellDescriptionsFolder)
    .then(validateSpells({ tagGroups }))
    .then(dealWithErrors(ResultsFolder, errorsFile))
  // .then(({ spells }) => spells) // if not using "dealWithErrors" uncomment this line

  // create tag spell lists
  writeTagSpellLists(ResultsFolder, tagSpellListsFile)(allSpells)

  // create spell lists for classes
  const classFilenames = await listFiles(ClassesFolder)
  const classSpellListRules = await Promise.all(
    classFilenames.map(filename =>
      readFile(ClassesFolder, filename)
        .then(parseTagRules)
        .then(rules => ({ filename, rules }))
    )
  )

  // compile class spell lists
  classSpellListRules
    .filter(({ rules }) => !!rules)
    .map(({ filename, rules }) => ({
      classname: className(filename),
      spells: createSpellList(allSpells, rules!),
    }))
    .map(({ classname, spells }) => ({
      classname,
      spellList: makeClassSpellList(classname, spells),
    }))
    .map(({ classname, spellList }) =>
      writeToFile(ResultsFolder, compiledClassSpellList(classname), spellList)
    )
}

// run everything
compileSpells()

import { join } from 'path'
import { className, makeSpellListString } from './classSpellList'
import { compileRules } from './compileBook'
import { dealWithErrors } from './error'
import { cleanFolder, listFiles, readFile, writeToFile } from './file'

import { readSpells, Spell } from './spell'
import { createSpellList, parseTagRules, TagRules } from './tagRules'
import { parseTagGroups, writeTagSpellLists } from './tags'
import { validateSpells } from './validateSpell'

// config
const baseDir = join(__dirname, '../../')
const ClassesFolder = join(baseDir, 'Classes')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const CompiledFolder = join(baseDir, 'Compiled')
const CompiledSpelllistsFolder = join(CompiledFolder, 'Spells')

const errorsFile = 'Errors.md'
const tagGroupsFile = 'Spell Tags.md'
const tagSpellListsFile = 'Spell List by Tag.md'
const compiledClassSpellList = (classname: string) =>
  `Class - ${classname} Spell List.md`
const rootRulesFile = 'index.md'
const allSpellsFile = 'All Spells List.md'
const rulebookFile = 'R20 - rulebook.md'

// clean results
const cleanResults = async () =>
  Promise.all([
    cleanFolder(CompiledFolder),
    cleanFolder(CompiledSpelllistsFolder),
  ])

interface Content {
  allSpells: Spell[]
  classSpellListRules: {
    filename: string
    rules: TagRules | null
  }[]
}
const parseContent = async () => {
  const tagGroups = await readFile(SpellsFolder, tagGroupsFile).then(
    parseTagGroups
  )

  // parse all spells
  // readSpells(SpellDescriptionsFolder, ['Acid Splash.md', 'Bane.md'])
  const allSpells = await readSpells(SpellDescriptionsFolder)
    .then(validateSpells({ tagGroups }))
    .then(dealWithErrors(CompiledFolder, errorsFile))
  // .then(({ spells }) => spells) // if not using "dealWithErrors" uncomment this line

  // create spell lists for classes
  const classFilenames = await listFiles(ClassesFolder)
  const classSpellListRules = await Promise.all(
    classFilenames.map(filename =>
      readFile(ClassesFolder, filename)
        .then(parseTagRules)
        .then(rules => ({ filename, rules }))
    )
  )

  return {
    allSpells,
    classSpellListRules,
  } as Content
}

const compileBook = async ({ allSpells, classSpellListRules }: Content) => {
  // write all spells
  await writeToFile(
    CompiledSpelllistsFolder,
    allSpellsFile,
    makeSpellListString(allSpells, 'All')
  )

  // create tag spell lists
  await writeTagSpellLists(
    CompiledSpelllistsFolder,
    tagSpellListsFile
  )(allSpells)

  // compile class spell lists
  await Promise.all(
    classSpellListRules
      .filter(({ rules }) => !!rules)
      .map(({ filename, rules }) => ({
        classname: className(filename),
        spells: createSpellList(allSpells, rules!),
      }))
      .map(({ classname, spells }) => ({
        classname,
        spellList: makeSpellListString(spells, classname),
      }))
      .map(({ classname, spellList }) =>
        writeToFile(
          CompiledSpelllistsFolder,
          compiledClassSpellList(classname),
          spellList
        )
      )
  )

  // compile all rules
  await compileRules(rootRulesFile, {
    currentFolder: baseDir,
    classesFolder: ClassesFolder,
    allSpells,
  }).then(compiledRules =>
    writeToFile(CompiledFolder, rulebookFile, compiledRules)
  )
}

// read, analyse and compile stuff
const main = async () => {
  await cleanResults()

  const { allSpells, classSpellListRules } = await parseContent()

  await compileBook({ allSpells, classSpellListRules })
}

// run everything
main()
// TODO: add in compiled tag spell lists
// TODO: remove wip automatically (maybe not needed?)

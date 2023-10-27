import { join } from 'path'
import { Archetype, parseArchetype } from './businessLogic/archetype'
import { Spell } from './businessLogic/spell'
import { makeSpellListString } from './businessLogic/spellList'
import { getClassname, makeClassSpellList } from './classSpellList'
import { compileRules, CompileRulesDeps, processContent } from './compileBook'
import { dealWithErrors } from './error'
import { cleanFolder, listFiles, readFile, writeToFile } from './file'
import { searchMacros } from './macros/parseMacro'

import { readSpells } from './spell'
import { parseTagRules, TagRules } from './tagRules'
import { parseTagGroups, writeTagSpellLists } from './tags'
import { validateSpells } from './validateSpell'

// config
const baseDir = join(__dirname, '../../')
const ArchetypesFolder = join(baseDir, 'Archetypes')
const ClassesFolder = join(baseDir, 'Classes')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')
const CompiledFolder = join(baseDir, 'Compiled')
const CompiledSpelllistsFolder = join(CompiledFolder, 'Spells')
const CompiledClassesFolder = join(CompiledFolder, 'Classes')

const errorsFile = 'Errors.md'
const tagGroupsFile = 'Spell Tags.md'
const tagSpellListsFile = 'Spell List by Tag.md'
const compiledClassSpellList = (classname: string) =>
  `Class - ${classname} Spell List.md`
const rootRulesFile = 'index.md'
const allSpellsFile = 'All Spells List.md'
const summaryFile = 'Summary.md'
const rulebookFile = 'R20 - rulebook.md'

// clean results
const cleanResults = async () =>
  Promise.all([
    await cleanFolder(CompiledFolder),
    await cleanFolder(CompiledSpelllistsFolder),
    await cleanFolder(CompiledClassesFolder),
  ])

interface Content {
  allSpells: Spell[]
  archetypes: Archetype[]
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
  const allSpells = await readSpells(SpellDescriptionsFolder)
    .then(validateSpells({ tagGroups }))
    .then(dealWithErrors(CompiledFolder, errorsFile))
  // .then(ignoreErrors) // if not using "dealWithErrors" uncomment this line

  // create spell lists for classes
  const classFilenames = await listFiles(ClassesFolder)
  const classSpellListRules = await Promise.all(
    classFilenames.map(filename =>
      readFile(ClassesFolder, filename)
        .then(parseTagRules)
        .then(rules => ({ filename, rules }))
    )
  )

  // read and parse archetypes
  const archetypes = await listFiles(ArchetypesFolder)
    .then(archetypeFilenames =>
      Promise.all(
        archetypeFilenames.map(archetypeFilename =>
          readFile(ArchetypesFolder, archetypeFilename)
        )
      )
    )
    .then(archetypesContents => archetypesContents.join('\n'))
    .then(archetypesContent =>
      searchMacros(archetypesContent, 'define-archetype')
    )
    .then(archetypeMacros => archetypeMacros.map(parseArchetype))

  return {
    archetypes,
    allSpells,
    classSpellListRules,
  } as Content
}

const compileBook = async (
  { allSpells, classSpellListRules }: Content,
  compileDeps: CompileRulesDeps
) => {
  // write all spells
  writeToFile(
    CompiledSpelllistsFolder,
    allSpellsFile,
    makeSpellListString(allSpells, 'All')
  )

  // create tag spell lists
  writeTagSpellLists(CompiledSpelllistsFolder, tagSpellListsFile)(allSpells)

  // compile class spell lists
  const casterSpellRules = classSpellListRules
    .filter(({ rules }) => !!rules)
    .map(({ filename, rules }) => ({
      classname: getClassname(filename),
      rules,
    }))
  Promise.all(
    casterSpellRules.map(({ classname, rules }) =>
      makeClassSpellList(classname, rules!, compileDeps).then(spellList =>
        writeToFile(
          CompiledSpelllistsFolder,
          compiledClassSpellList(classname),
          spellList
        )
      )
    )
  )

  // compile all classes
  listFiles(ClassesFolder).then(classfiles =>
    Promise.all(
      classfiles.map(classfile =>
        readFile(join(ClassesFolder, classfile))
          .then(processContent(compileDeps))
          .then(processedContent =>
            writeToFile(CompiledClassesFolder, classfile, processedContent)
          )
      )
    )
  )

  // compileSummary()  
  //   .then(summary => writeToFile(CompiledFolder, summaryFile, summary))

  // compile all rules
  compileRules(rootRulesFile, compileDeps).then(compiledRules => {
    writeToFile(CompiledFolder, rulebookFile, compiledRules)
    // const tableOfContents = /{{toc,.*}}/.exec(compiledRules)?.[0]
    // console.log(tableOfContents)
  }
  )
}

// read, analyse and compile stuff
const main = async () => {
  await cleanResults()

  const { allSpells, classSpellListRules, archetypes } = await parseContent()

  const deps: CompileRulesDeps = {
    currentFolder: baseDir,
    classesFolder: ClassesFolder,
    archetypesFolder: ArchetypesFolder,
    allSpells,
    archetypes,
  }

  await compileBook({ allSpells, classSpellListRules, archetypes }, deps)
}

// run everything
main()
// auto compile classes and character sheets

// TODO: implement error warning for a spell description file without a spell definition

import { listFiles, writeToFile } from "../file"
import { makeSpellDefinitionMacroString } from "./makeSpellDefinitionMacroString"
import { readCsvFile, Spell5eToolsExport } from "./readCsv"

console.log("SDFSDFSDF")

const SpellsRootDir = `../Spells`
const SpellsListDir = `${SpellsRootDir}/Spell Descriptions`
const ParsedSpellsOutputDir = `${SpellsListDir}/compiled`

const csvFilenameToParse = `3rd-circle-Spells.csv`

const getAllSpellNames = (spellListDir: string = SpellsListDir) => listFiles(spellListDir)
  .then(spellFilenames => spellFilenames
    .map(spellFilename => spellFilename.replace('.md', ''))
  )

const filterExistingSpells = (spellNames: string[], spells: Spell5eToolsExport[]) => spells.filter(spell => !spellNames.some(spellName => spellName === spell.Name))

const spells = readCsvFile(SpellsRootDir, csvFilenameToParse)
const spellNames = getAllSpellNames()

const compileNewSpells = (spells: Spell5eToolsExport[], spellNames: string[]) => Promise
  .all([spells, spellNames])
  .then(([spells, spellNames]) => {
    // console.log("before", spells.length)
    // const afterFilter = filterExistingSpells(spellNames, spells)
    // console.log("after", afterFilter.length)
    // return afterFilter
    return filterExistingSpells(spellNames, spells)
  })
  .then(spells => spells
    .map(spell => [`${spell.Name}.md`, makeSpellDefinitionMacroString(spell)])
    .map(([filename, content]) => writeToFile(ParsedSpellsOutputDir, filename, content))
  )
  .then(fileWrites => Promise.all(fileWrites))
  .then(value => console.log(value))


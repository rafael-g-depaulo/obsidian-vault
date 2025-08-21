import { listFiles, writeToFile } from "../file"
import { makeSpellDefinitionMacroString } from "./makeSpellDefinitionMacroString"
import { readCsvFile, Spell5eToolsExport } from "./readCsv"

const SpellsRootDir = `../Spells`
const SpellsListDir = `${SpellsRootDir}/Spell Descriptions`
const ParsedSpellsOutputDir = `${SpellsListDir}/compiled`

const csvFilenameToParse = `3rd-circle-Spells.csv`

const getAllSpellNames = (spellListDir: string) => listFiles(spellListDir)
  .then(spellFilenames => spellFilenames
    .map(spellFilename => spellFilename.replace('.md', ''))
  )

const filterExistingSpells = (spellNames: string[], spells: Spell5eToolsExport[]) => spells
  .filter(spell => !spellNames.some(spellName => spellName === spell.Name))

const compileNewSpells = async (spells: Spell5eToolsExport[], spellNames: string[]) => {
  const newSpells = filterExistingSpells(spellNames, spells)
    .map(spell => [`${spell.Name}.md`, makeSpellDefinitionMacroString(spell)])
    .map(([filename, content]) => writeToFile(ParsedSpellsOutputDir, filename, content))

  return Promise.all(newSpells)
    .then(fileWrites => Promise.all(fileWrites))
    .then(() => spellNames)
}

const parseSpellsFromCsv = async (csvFileName: string) => {
  return Promise
    .all([
      readCsvFile(SpellsRootDir, csvFileName),
      getAllSpellNames(SpellsListDir),
    ])
    .then(([spells, spellNames]) => compileNewSpells(spells, spellNames))
    .then(newSpells => console.log("Compiled from csv and wrote to 'compiled' folder the following new spells", newSpells))
}

parseSpellsFromCsv(csvFilenameToParse)

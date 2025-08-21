import { listFiles } from "../file"
import { makeSpellDefinitionMacroString } from "./makeSpellDefinitionMacroString"
import { readCsvFile, Spell5eToolsExport } from "./readCsv"

console.log("SDFSDFSDF")

const SpellsRootDir = `../Spells`
const SpellsListDir = `${SpellsRootDir}/Spell Descriptions`

const csvFilenameToParse = `3rd-circle-Spells.csv`

const parseCsvFile = (...csvPath: string[]) =>
  readCsvFile(...csvPath)
    .then(spells => spells
      // .map(makeSpellDefinitionMacroString)
    )

// .then(a => console.log(a[0]))
// .then

const getAllSpellNames = (spellListDir: string = SpellsListDir) => listFiles(spellListDir)
  .then(spellFilenames => spellFilenames
    .map(spellFilename => spellFilename.replace('.md', ''))
  )


const filterExistingSpells = (spellNames: string[], spells: Spell5eToolsExport[]) => spells.filter(spell => !spellNames.some(spellName => spellName === spell.Name))


// parseCsvFile(SpellsRootDir, csvFilenameToParse).then(a => console.log(a))
// getAllSpellNames().then((a) => console.log(a))


const spells = parseCsvFile(SpellsRootDir, csvFilenameToParse)
const spellNames = getAllSpellNames()

Promise.all([spells, spellNames]).then(([spells, spellNames]) => {
  console.log("before", spells.length)
  return filterExistingSpells(spellNames, spells)
})


import { listFiles } from "../file"
import { makeSpellDefinitionMacroString } from "./makeSpellDefinitionMacroString"
import { readCsvFile } from "./readCsv"

console.log("SDFSDFSDF")

const SpellsRootDir = `../Spells`
const SpellsListDir = `${SpellsRootDir}/Spell Descriptions`

const csvFilenameToParse = `3rd-circle-Spells.csv`

const parseCsvFile = (...csvPath: string[]) =>
  readCsvFile(...csvPath)
    .then(spells => spells
      .map(makeSpellDefinitionMacroString)
    )

// .then(a => console.log(a[0]))
// .then

const getAllSpellNames = (spellListDir = SpellsListDir) => listFiles(spellListDir).then(spellFilenames => spellFilenames.map(spellFilename => spellFilename.replace('.md', '')))

// parseCsvFile(SpellsRootDir, csvFilenameToParse).then(a => console.log(a))


getAllSpellNames().then((a) => console.log(a))

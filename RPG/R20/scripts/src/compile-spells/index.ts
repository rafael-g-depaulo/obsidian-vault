import { makeSpellDefinitionMacroString } from "./makeSpellDefinitionMacroString"
import { readCsvFile } from "./readCsv"

console.log("SDFSDFSDF")

const csvPath = `../Spells/3rd-circle-Spells.csv`

readCsvFile(csvPath)
  .then(spells => spells
    .map(makeSpellDefinitionMacroString)
  )
  // .then(a => console.log(a[0]))
  // .then
  .then(a => console.log(a))

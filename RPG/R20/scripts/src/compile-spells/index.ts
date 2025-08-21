import { readCsvFile } from "./readCsv"

console.log("SDFSDFSDF")

const csvPath = `../Spells/3rd-circle-Spells.csv`

readCsvFile(csvPath)
  .then(a => console.log(a))

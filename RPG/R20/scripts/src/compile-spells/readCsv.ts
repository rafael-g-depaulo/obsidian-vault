import { parse } from "csv-parse/sync";
import { readFile } from "../file";

type Spell5eToolsExport = {
  Name: string,
  Source: string,
  Page: number,
  Level: string,
  "Casting Time": string,
  Duration: string,
  School: string,
  Range: string,
  Components: string,
  Classes: string,
  Subclasses: string,
  Text: string,
}

export const readCsvFile = (...path: string[]) => readFile(...path)
  .then(content => parse(content, { cast: true, columns: true }) as Spell5eToolsExport[])

  // .then(content => content.split('\n').map(line => line.split(',')))


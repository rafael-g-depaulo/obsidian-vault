import { parse } from "csv-parse/sync";
import { readFile } from "../file";

export type Spell5eToolsExport = {
  Name: string,
  Source: string,
  Page: number,
  Level: number,
  "Casting Time": string,
  Duration: string,
  School: string,
  Range: string,
  Components: string,
  Classes: string,
  Subclasses: string,
  Text: string,
}


const parseLevel = (str: string) => parseInt(str) || 0
export const readCsvFile = (...path: string[]) => readFile(...path)
  .then(content => parse(content, { cast: true, columns: true }) as (Spell5eToolsExport & { Level: string })[])
  .then(spells => spells.map(spell => ({ ...spell, Level: parseLevel(spell.Level) })))

  // .then(content => content.split('\n').map(line => line.split(',')))


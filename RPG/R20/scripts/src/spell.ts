import { listFiles, readFile } from './file'
import { matchAllGroups, matchGroups, specialChars } from './regexUtils'
import { getTags } from './tags'

export const spellDescriptionItems = [
  'castTime',
  'range',
  'target',
  'duration',
  'critical',
  'resistence',
] as const
export type SpellDescriptionItems = typeof spellDescriptionItems[number]

export interface Spell {
  rawDescription: string
  name: string
  tags: string[]
  level: number
  items: {
    [key in SpellDescriptionItems]?: string
  }
  description: string
}

export const getSpellname = (filename: string) => filename.replace(/.md$/, '')

const getSpellLevel = (content: string) => {
  if (
    /^[\*_](?:Truque|Cantrip) \((?:Truque|Cantrip)\)|^[\*_]Cantrip[\*_]|^[\*_]Truque[\*_]/gim.test(
      content
    )
  )
    return 0

  const matchedLevel =
    /^[\*_](\d+)[\wªº]* (?:Circle|Círculo)[\*_]/gim.exec(content) ??
    /- [\*_][\*_]Level.*[\*_][\*_]\s*(\d+)/gim.exec(content)

  return parseInt(matchedLevel?.[1] ?? '-1')
}

const spellDescriptionLabelsRegex: { [key in SpellDescriptionItems]: RegExp } =
  {
    castTime: /^Casting time|execução|execuçao|execucao/i,
    duration: /^Duração|duration|duração|duracao/i,
    range: /^Alcance|Range/i,
    target: /^Alvo|target/i,
    critical: /^crit|critical|critico|crítico/i,
    resistence: /^resist/i,
  }
const spellDescriptionItem =
  /^- \*\*(?<label>.+):\*\*\s*(?<item>[^;\n\r]+)[;\s]*$/gm
const parseSpellDescriptionItems = (content: string): Spell['items'] =>
  Object.fromEntries(
    matchAllGroups(content, spellDescriptionItem)
      .map(({ label, item }) => ({ label, item }))
      .filter(({ label }) =>
        spellDescriptionItems.some(key =>
          spellDescriptionLabelsRegex[key].test(label)
        )
      )
      .map(({ item, label }) => [
        spellDescriptionItems.find(key =>
          spellDescriptionLabelsRegex[key].test(label)
        ),
        item,
      ])
  )

const descriptionParagraphRegex =
  /^___\n(?:- \*\*.+:\*\*.+\n)+\n(?<description>[\S\s]+)/gm
export const INVALID_DESCRIPTION = 'DESCRIPTION_NOT_FOUND'
const parseDescription = (content: string): string =>
  matchGroups(content, descriptionParagraphRegex)?.description ??
  INVALID_DESCRIPTION

export const parseSpell = (name: string, content: string): Spell => {
  return {
    name,
    rawDescription: content,
    tags: getTags(content),
    level: getSpellLevel(content),
    items: parseSpellDescriptionItems(content),
    description: parseDescription(content),
  }
}

export const readSpells = async (
  descriptionsFolder: string,
  _spellFilenames?: string[]
) => {
  const spellFilenames =
    _spellFilenames ?? (await listFiles(descriptionsFolder))

  const readSpell = (name: string) =>
    readFile(descriptionsFolder, name).then(content =>
      parseSpell(getSpellname(name), content)
    )

  return Promise.all(spellFilenames.map(readSpell))
}

export const filterWipSpells = (spells: Spell[]) =>
  spells.filter(
    spell => spell.tags.includes('spell') && !spell.tags.includes('wip')
  )

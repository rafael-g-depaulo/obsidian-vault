import { listFiles, readFile } from './file'
import { matchAllGroups, specialChars } from './regexUtils'
import { getTags } from './tags'

export const spellDescriptionItems = [
  'castTime',
  'range',
  'target',
  'duration',
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
    /^\*(?:Truque|Cantrip) \((?:Truque|Cantrip)\)|^\*Cantrip\*|^\*Truque\*/gim.test(
      content
    )
  )
    return 0

  const matchedLevel =
    /^\*(\d+)[\wªº]* (?:Circle|Círculo)\*/gim.exec(content) ??
    /- \*\*Level.*\*\*\s*(\d+)/gim.exec(content)

  if (!matchedLevel || !matchedLevel[1]) {
    return -1
  }

  return parseInt(matchedLevel[1])
}

const spellDescriptionLabelsRegex: { [key in SpellDescriptionItems]: RegExp } =
  {
    castTime: /^Casting time/i,
    duration: /^Duração/i,
    range: /^Alcance/i,
    target: /^Alvo/i,
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

const descriptionParagraphRegex = new RegExp(
  `^(?<paragraph>[${specialChars}a-z0-9].+)$`,
  'gmi'
)
const parseDescription = (content: string): string =>
  matchAllGroups(content, descriptionParagraphRegex)
    .map(({ paragraph }) => paragraph)
    .join('\n')

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

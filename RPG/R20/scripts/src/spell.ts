import { listFiles, readFile } from './file'
import { getTags } from './tags'

export interface Spell {
  name: string
  description: string
  tags: string[]
  level: number
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

export const parseSpell = (name: string, content: string): Spell => {
  return {
    name,
    description: content,
    tags: getTags(content),
    level: getSpellLevel(content),
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

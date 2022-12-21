import { listFiles, readFile } from './file'
import { getTags } from './tags'

export interface Spell {
  name: string
  description: string
  tags: string[]
  level: number
}

export const getSpellname = (filename: string) => filename.replace(/.md$/, '')

export const parseSpell = (name: string, content: string): Spell => {
  return { name, description: content, tags: getTags(content), level: -1 }
}

export const readSpells = async (
  descriptionsFolder: string,
  _spellFilenames?: string[]
) => {
  const spellFilenames =
    _spellFilenames ?? (await listFiles(descriptionsFolder))

  const spells = await Promise.all(
    spellFilenames.map(name =>
      readFile(descriptionsFolder, name).then(content =>
        parseSpell(getSpellname(name), content)
      )
    )
  )

  return spells
}

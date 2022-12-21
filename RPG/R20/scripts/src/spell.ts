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
  if (/^\*Truque \(Cantrip\)\*\n/gim.test(content)) return 0

  const matchedLevel = /^\*(\d+)\w+ Circle\*/gim.exec(content)

  if (!matchedLevel || !matchedLevel[1]) return -1

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

const isError = (s: ValidatedSpell): s is SpellError => !!(s as any).spell
const isSpell = (s: ValidatedSpell): s is Spell => !isError(s)

export const validateSpells = (spells: Spell[]) => {
  const validatedSpells = spells.map(validadeSpell)
  const errors = validatedSpells.filter(isError)

  return {
    errors,
    spells: validatedSpells.filter(isSpell),
  }
}

export type SpellError = { spell: Spell; message: string }
type ValidatedSpell = Spell | SpellError

export const validadeSpell = (spell: Spell): ValidatedSpell => {
  const spellError = (message: string): SpellError => ({
    spell,
    message,
  })

  if (!spell.tags.includes('wip') && !spell.tags.includes('spell'))
    return spellError(`${spell.name} should have either "wip" or "spell" tag`)

  return spell
}

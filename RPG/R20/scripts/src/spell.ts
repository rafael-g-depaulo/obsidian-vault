import { parseSpell, Spell } from './businessLogic/spell'
import { listFiles, readFile } from './file'
import { searchMacros } from './macros/parseMacro'
export const readSpells = async (
  descriptionsFolder: string,
  _spellFilenames?: string[]
) => {
  const spellFilenames =
    _spellFilenames ?? (await listFiles(descriptionsFolder))

  const readSpell = (name: string) =>
    readFile(descriptionsFolder, name).then(
      content => searchMacros(content, 'spell-definition').map(parseSpell)
      // content =>
      // parseSpell(getSpellname(name), content)
    )

  return (await Promise.all(spellFilenames.flatMap(readSpell))).flat()
}

export const filterWipSpells = (spells: Spell[]) =>
  spells.filter(
    spell => spell.tags.includes('spell') && !spell.tags.includes('wip')
  )

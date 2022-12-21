import { readFile } from './file'

const getSpellname = (filename: string) => filename.replace(/.md$/, '')

export const getTags = (content: string) =>
  [...content.matchAll(/#(\w+)/gm)].map(([, tagName]) => tagName)

type TagMap = {
  [spellname: string]: string[]
}

export const createTagMap = async (
  descriptionsFolder: string,
  spellnames: string[]
): Promise<TagMap> => {
  const spellDescriptions = await Promise.all(
    spellnames.map(name =>
      Promise.all([getSpellname(name), readFile(descriptionsFolder, name)])
    )
  )

  return spellDescriptions.reduce(
    (acc, [name, description]) => ({ ...acc, [name]: getTags(description) }),
    {}
  )
}

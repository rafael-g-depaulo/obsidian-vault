import { Spell } from './spell'

export const getTags = (content: string) =>
  [...content.matchAll(/#(\w+)/gm)].map(([, tagName]) => tagName)

type TagMap = {
  [spellname: string]: string[]
}

export const createTagMap = async (spells: Spell[]): Promise<TagMap> => {
  return spells.reduce((acc, { name, tags }) => ({ ...acc, [name]: tags }), {})
}

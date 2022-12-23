import { readFile, searchPathRecursively } from './file'
import { matchGroups, replaceAsync } from './regexUtils'

const linkRegex = /\[\[(?<link>[^\]]+)\]\]/g
const __INVALID__LINK__ = '############ INVALID_LINK ############'

export const parsePath = (currentFolder: string, markdownLink: string) => {
  const { link } = matchGroups(markdownLink, linkRegex)
  return searchPathRecursively(currentFolder, `${link}.md`)
}

export const replaceLinks = (currentFolder: string, content: string) =>
  replaceAsync(content, linkRegex, matchStr =>
    parsePath(currentFolder, matchStr).then(
      s => `[[${s}]]` ?? __INVALID__LINK__
    )
  )

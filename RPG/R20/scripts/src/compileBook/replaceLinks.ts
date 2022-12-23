import { popTopFolder, readFile, searchPathRecursively } from '../file'
import { matchGroups, replaceAsync } from '../regexUtils'
import { CompileRulesDeps, processContent } from './index'

const markdownLinkRegex = /!\[\[(?<link>[^\]]+)\]\]/g
const __INVALID__LINK__ = (link: string | null) =>
  `############ INVALID_LINK "${link}" ############`

export const parsePath = (currentFolder: string, markdownLink: string) => {
  const link = matchGroups(markdownLink, markdownLinkRegex)?.link
  if (!link) return Promise.resolve(null)
  return searchPathRecursively(currentFolder, `${link}.md`)
}

export const makeLinksGlobal = (currentFolder: string) => (content: string) =>
  replaceAsync(content, markdownLinkRegex, matchStr =>
    parsePath(currentFolder, matchStr).then(s => {
      return s ? `{{rewrite "${s}"}}` : __INVALID__LINK__(s)
    })
  )

const globalLinkRegex = /{{rewrite "(?<path>.+)"}}/g
export const replaceLinks =
  (deps: CompileRulesDeps) =>
  (content: string): Promise<string> =>
    replaceAsync(content, globalLinkRegex, link => {
      const path = matchGroups(link, globalLinkRegex).path
      return readFile(path).then(
        processContent({
          ...deps,
          currentFolder: popTopFolder(path) ?? deps.currentFolder,
        })
      )
    })

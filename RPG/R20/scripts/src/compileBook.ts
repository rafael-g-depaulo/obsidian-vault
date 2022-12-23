import { popTopFolder, readFile, searchPathRecursively } from './file'
import { matchGroups, replaceAsync } from './regexUtils'

const markdownLinkRegex = /!\[\[(?<link>[^\]]+)\]\]/g
const globalLinkRegex = /{{rewrite "(?<path>.+)"}}/g
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

export const replaceLinks =
  (currentFolder: string) =>
  (content: string): Promise<string> =>
    replaceAsync(content, globalLinkRegex, link => {
      const path = matchGroups(link, globalLinkRegex).path
      return compileRulesRecursive(popTopFolder(path) ?? currentFolder, path)
    })

// const listClassesRegex = /{{list-classes}}/
// const listClasses = (classesFolder: string) => listFiles(classesFolder)
// const replaceClasses = (classesFolder: string) => (content: string) =>
//   replaceAsync(content, listClassesRegex, () =>
//     listClasses(classesFolder).then(classes => {
//       console.log(classes)
//       return ''
//     })
//   )

export type CompileRulesDeps = { classesFolder: string }
export const compileRules = (
  filepath: string
  // deps: CompileRulesDeps = { classesFolder: '' }
) => compileRulesRecursive(popTopFolder(filepath) ?? '', filepath)

const compileRulesRecursive = (currentFolder: string, filepath: string) =>
  readFile(filepath)
    .then(makeLinksGlobal(currentFolder))
    .then(replaceLinks(currentFolder))

import { popTopFolder, readFile, searchPathRecursively } from '../file'
import { replaceMacroAsync } from '../macros/replaceMacro'
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

export const makeInclusionsGlobal = (currentFolder: string) => (content: string) =>
  replaceAsync(content, markdownLinkRegex, matchStr =>
    parsePath(currentFolder, matchStr).then(s => {
      return s ? `{{rewrite "${s}"}}` : __INVALID__LINK__(s)
    })
  )

export const replaceFileInclusions = (
  deps: CompileRulesDeps
): ((content: string) => Promise<string>) =>
  replaceMacroAsync('rewrite', macro =>
    readFile(macro.argument ?? __INVALID__LINK__('macro rewrite')).then(
      processContent({
        ...deps,
        currentFolder:
          popTopFolder(macro.argument ?? __INVALID__LINK__('macro rewrite')) ??
          deps.currentFolder,
      })
    )
  )

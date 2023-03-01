import { listFiles, readFile } from '../file'
import { replaceMacroAsync } from '../macros/replaceMacro'
import { CompileRulesDeps, processContent } from './index'

const classFilenameRegex = /Class - (?<class>.+)\.md/
const isWipRegex = /\(WIP\)/i
const listClasses = (classesFolder: string) =>
  listFiles(classesFolder).then(list =>
    list.filter(
      filename =>
        classFilenameRegex.test(filename) && !isWipRegex.test(filename)
    )
  )
export const replaceClasses = (
  deps: CompileRulesDeps
): ((content: string) => Promise<string>) =>
  replaceMacroAsync('list-classes', async () =>
    listClasses(deps.classesFolder)
      .then(classes =>
        Promise.all(
          classes.map(classFilename =>
            readFile(deps.classesFolder, classFilename)
          )
        )
      )
      .then(classesContents => classesContents.join('\n'))
      .then(processContent(deps))
  )

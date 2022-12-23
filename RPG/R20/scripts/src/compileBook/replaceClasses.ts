import { listFiles, readFile } from '../file'
import { replaceAsync } from '../regexUtils'
import { CompileRulesDeps, processContent } from './index'

const listClassesRegex = /{{list-classes}}/
const classFilenameRegex = /Class - (?<class>.+)\.md/
const isWipRegex = /\(WIP\)/i
const listClasses = (classesFolder: string) =>
  listFiles(classesFolder).then(
    list =>
      list.filter(
        filename =>
          classFilenameRegex.test(filename) && !isWipRegex.test(filename)
      )
    // .map(filename => matchGroups(filename, classFilenameRegex).class)
  )
export const replaceClasses =
  (deps: CompileRulesDeps) =>
  (content: string): Promise<string> =>
    replaceAsync(content, listClassesRegex, () =>
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

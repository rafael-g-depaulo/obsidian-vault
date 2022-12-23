import { listFiles, readFile } from '../file'
import { replaceAsync } from '../regexUtils'

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
export const replaceClasses = (classesFolder: string) => (content: string) =>
  replaceAsync(content, listClassesRegex, () =>
    listClasses(classesFolder)
      .then(classes =>
        Promise.all(
          classes.map(classFilename => readFile(classesFolder, classFilename))
        )
      )
      .then(classesContents => classesContents.join('\n'))
  )

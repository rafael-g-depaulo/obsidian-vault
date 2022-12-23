import {
  readdir,
  readFile as fsReadFile,
  writeFile,
  rm,
  access,
  constants,
} from 'fs/promises'
import { join } from 'path'
import { matchGroups } from './regexUtils'

// util file funcions
export const listFiles = (...dirs: string[]) =>
  readdir(join(...dirs), { encoding: 'utf8' })

export const readFile = (...path: string[]) =>
  fsReadFile(join(...path), { encoding: 'utf8' })
    .then(buff => buff.toString())
    .catch(() => `ERROR READING FILE: "${join(...path)}"`)

export const writeToFile = async (
  dir: string,
  filename: string,
  content: string
) => writeFile(join(dir, filename), content, { encoding: 'utf8' })

export const deleteFile = async (...paths: string[]) => rm(join(...paths))

export const fileExists = async (...paths: string[]) =>
  access(join(...paths), constants.R_OK | constants.W_OK)
    .then(() => true)
    .catch(() => false)

const popFolderRegex = /^(?<path>.+)[\/\\](?:.+)$/
export const popTopFolder = (
  path: string,
  depth: number = 1
): string | null => {
  if (depth === 0) return path

  const groups = matchGroups(path, popFolderRegex)
  // if on bottom layer and didn't find file it doesn't exist
  if (!groups) return null
  return popTopFolder(groups.path, depth - 1)
}
export const searchPathRecursively = async (
  currentFolder: string,
  relativePath: string
): Promise<null | string> => {
  if (await fileExists(currentFolder, relativePath))
    return join(currentFolder, relativePath)
  const poppedPath = popTopFolder(currentFolder)
  if (!poppedPath) return null

  return searchPathRecursively(poppedPath, relativePath)
}

import {
  readdir,
  readFile as fsReadFile,
  writeFile,
  rm,
  access,
  constants,
  mkdir,
  rmdir,
  lstat,
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
export const deleteDir = async (...paths: string[]) => rmdir(join(...paths))

export const fileOrFolderExists = async (...path: string[]) =>
  access(join(...path), constants.R_OK | constants.W_OK)
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
  if (await fileOrFolderExists(currentFolder, relativePath))
    return join(currentFolder, relativePath)
  const poppedPath = popTopFolder(currentFolder)
  if (!poppedPath) return null

  return searchPathRecursively(poppedPath, relativePath)
}

export const searchFolderRecursively = async (
  currentFolder: string,
  relativePath: string
): Promise<null | string> => {
  if (await fileOrFolderExists(currentFolder, relativePath))
    return join(currentFolder, relativePath)
  const poppedPath = popTopFolder(currentFolder)
  if (!poppedPath) return null

  return searchFolderRecursively(poppedPath, relativePath)
}

export const createFolder = (folder: string) => mkdir(folder, {})

const isFolder = (...path: string[]) =>
  lstat(join(...path)).then(stat => stat.isDirectory())

export const deletePath = (path: string): Promise<any> =>
  isFolder(path)
    .then(isFolder =>
      !isFolder
        ? deleteFile(path)
        : (listFiles(path).then(items =>
          Promise.all(items.map(subPath => deletePath(join(path, subPath))))
        ) as Promise<never>)
    )
    .then(() => null as never)

export const cleanFolder = (folder: string) =>
  fileOrFolderExists(folder).then(exists =>
    !exists ? createFolder(folder) : deletePath(folder)
  )

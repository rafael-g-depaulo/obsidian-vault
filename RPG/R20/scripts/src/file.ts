import { readdir, readFile as fsReadFile, writeFile } from 'fs/promises'
import { join } from 'path'

// util file funcions
export const listFiles = (...dirs: string[]) =>
  readdir(join(...dirs), { encoding: 'utf8' })

export const readFile = (dir: string, filename: string) =>
  fsReadFile(join(dir, filename), { encoding: 'utf8' }).then(buff =>
    buff.toString()
  )

export const writeToFile = async (
  dir: string,
  filename: string,
  content: string
) => writeFile(join(dir, filename), content, { encoding: 'utf8' })

import { readdir, readFile as fsReadFile } from 'fs/promises'
import { join } from 'path'

// util file funcions
export const listFiles = (...dirs: string[]) =>
  readdir(join(...dirs), { encoding: 'utf8' })

export const readFile = (dir: string, filename: string) =>
  fsReadFile(join(dir, filename), { encoding: 'utf8' }).then(buff =>
    buff.toString()
  )

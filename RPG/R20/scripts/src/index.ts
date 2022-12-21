import { readdir, readFile as fsReadFile } from 'fs/promises'
import { join } from 'path'

// util file funcions
const listFiles = (...dirs: string[]) =>
  readdir(join(...dirs), { encoding: 'utf8' })

const readFile = (dir: string, filename: string) =>
  fsReadFile(join(dir, filename), { encoding: 'utf8' }).then(buff =>
    buff.toString()
  )

// business logic functions
const getTags = (content: string) =>
  [...content.matchAll(/#(\w+)/gm)].map(([, tagName]) => tagName)

// config
const baseDir = join(__dirname, '../../')
const SpellsFolder = join(baseDir, 'Spells')
const SpellDescriptionsFolder = join(SpellsFolder, 'Spell Descriptions')

// what i want:
//   - map of all spell names to their tags
const SpellFileNames = listFiles(SpellDescriptionsFolder)

SpellFileNames.then(filenames =>
  Promise.all(
    ['Acid Splash']
      // filenames
      // .map(filename => filename.replace(/\.md$/, ''))
      .map(spellname => readFile(SpellDescriptionsFolder, `${spellname}.md`))
  )
)
  .then(a => a[0])
  .then(getTags)
  // .then((a: any) => a[0])
  .then(console.log)

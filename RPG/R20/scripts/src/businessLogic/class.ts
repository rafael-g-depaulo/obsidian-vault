import { pad, separateGroups } from '../arrayUtils'
import { getString, getStringArr, Macro } from '../macros/types'
import { parseMarkdownTable } from '../stringOutputUtils'
import {
  parseFeatures,
  parseFeaturesList,
  parseMultiFeatures,
} from './features'

export type Feat = {
  name: string
  description: string
  preRequisites?: string
}

export type Feature = {
  name: string
  description: string
  level: number
}

export type ClassNote = {
  name: string
  description: string
}

export type GenericNote = {
  description: string
}

export interface Class {
  archetype: string
  name: string
  equipProficiencies: string
  saves: string[]
  mpAttribute?: string
  spellcastingAttb?: string
  features: Feature[]
  featuresList: string[][]
  multi_features: string[][]
  wide?: boolean
  feats: (Feat | string)[]
  classNote?: ClassNote
  genericNotes: { [id: string]: GenericNote }
}

const groupFeats = separateGroups((line: string) =>
  // line[0] === '|' ? 'feat' : 'raw'
  (/\|.*\|.*\|.*\|/.test(line)) ? "feat" : "raw"
)
const parseFeats = (content: string = '') => {
  const entries = groupFeats(content.split('\n'))

  const parseFeatsTable = (lines: string[]): Feat[] =>
    parseMarkdownTable(lines.join('\n')).map(
      ([featName, featDescription, featPreRequisites]) => ({
        name: featName,
        description: featDescription,
        // || here used to transform '' into undefined
        preRequisites: featPreRequisites || undefined,
      })
    )

  const featsContent = entries.map(({ group, items }) =>
    group === 'feat' ? parseFeatsTable(items) : items.join('\n')
  )

  return featsContent.flat()
}

const makeClassNote = (name: string, description: string) => ({
  name,
  description,
})

export const genericNoteRegex = /NOTE_([\w_]+)/
const getGenericNotes = (macro: Macro) =>
  Object.fromEntries(Object.entries(macro.items)
    .filter(([noteId]) => genericNoteRegex.test(noteId))
    .filter(([, note]) => typeof note === 'string')
    .map(([noteId, noteItem]) => [noteId, { description: noteItem as string }])
  )

export const parseClass = (classMacro: Macro): Class => ({
  archetype: getString(classMacro.items.ARCHETYPE) ?? 'NO_ARCHETYPE',
  equipProficiencies: getString(classMacro.items.EQUIPMENT_PROFICIENCIES) ?? '',
  featuresList: parseFeaturesList(getString(classMacro.items.FEATURES) ?? ''),
  multi_features: pad(
    parseMultiFeatures(getString(classMacro.items.MULTI_FEATURES) ?? ''),
    21,
    []
  ),
  name: classMacro.argument ?? 'CLASS NAME NOT FOUND',
  saves: getStringArr(classMacro.items.SAVES),
  mpAttribute: getString(classMacro.items.MP_ATTB),
  spellcastingAttb: getString(classMacro.items.SPELLCASTING_ATTB),
  wide: getString(classMacro.items.WIDE)
    ? getString(classMacro.items.WIDE) === 'true'
    : undefined,
  feats: parseFeats(getString(classMacro.items.FEATS)),
  features: parseFeatures(getString(classMacro.items.FEATURES)),
  classNote: makeClassNote(
    getString(classMacro.items.CLASS_NOTE_NAME)!,
    getString(classMacro.items.CLASS_NOTE_DESCRIPTION)!
  ),
  genericNotes: getGenericNotes(classMacro),
})

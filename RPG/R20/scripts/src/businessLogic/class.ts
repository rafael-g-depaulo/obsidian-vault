import { groupBy, pad, separateGroups } from '../arrayUtils'
import { getString, getStringArr, Macro } from '../macros/types'
import { parseMarkdownTable } from '../stringOutputUtils'
import { parseFeatures, parseMultiFeatures } from './features'

export type Feat =
  | {
    name: string
    description: string
    preRequisites?: string
  }
  | string

export interface Class {
  archetype: string
  name: string
  equipProficiencies: string
  saves: string[]
  mpAttribute?: string
  spellcastingAttb?: string
  features: string[][]
  multi_features: string[][]
  wide?: boolean
  feats: Feat[]
}

const groupFeats = separateGroups((line: string) =>
  line[0] === '|' ? 'feat' : 'raw'
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
    group === 'feat'
      ? parseFeatsTable(items)
      : items.join('')
  )

  return featsContent
}

export const parseClass = (classMacro: Macro): Class => {
  const x = {
    archetype: getString(classMacro.items.ARCHETYPE) ?? 'NO_ARCHETYPE',
    equipProficiencies:
      getString(classMacro.items.EQUIPMENT_PROFICIENCIES) ?? '',
    features: parseFeatures(getString(classMacro.items.FEATURES) ?? ''),
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
  }

  if (x.name === 'Witch') console.log(`AAAAAAAAAAAAAAa`, x.feats)
  return x as any
}

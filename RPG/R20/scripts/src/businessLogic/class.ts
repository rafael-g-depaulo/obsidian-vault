import { pad } from '../arrayUtils'
import { getString, getStringArr, Macro } from '../macros/types'
import { parseFeatures, parseMultiFeatures } from './features'

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
  feats: string
}

export const parseClass = (classMacro: Macro): Class => {
  const x = ({
    archetype: getString(classMacro.items.ARCHETYPE) ?? 'NO_ARCHETYPE',
    equipProficiencies: getString(classMacro.items.EQUIPMENT_PROFICIENCIES) ?? '',
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
    feats: getString(classMacro.items.FEATS)
  })
  console.log(`AAAAAAAAAAAAAAa`, x.feats)
  return x as any
}

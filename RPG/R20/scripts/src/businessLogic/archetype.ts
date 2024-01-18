import { pad } from '../arrayUtils'
import { getNumber, getString, Macro } from '../macros/types'
import { joinFeatures, parseFeatures, parseFeaturesList, parseMultiFeatures } from './features'

export interface Archetype {
  name: string
  hp_lv1: number
  hp_lv: number
  mp_lv: number
  ASI_levels: number[]
  features: { level: number, name: string, description: string }[]
  features_list: string[][]
  multi_features: string[][]
  wide: boolean
  specialization_levels: string[]
}

const makeASIFeatures = (ASI_levels: number[]) => {
  const asiFeatures = pad([], 20, [] as string[])
  for (const level of ASI_levels) {
    asiFeatures[level - 1] = ['Attribute Score Improvement']
  }

  return asiFeatures
}

export const parseArchetype = <T extends Macro>(
  archetypeMacro: T
): Archetype => {
  const ASI_levels =
    getString(archetypeMacro.items.ASI_LEVELS)
      ?.split(',')
      .map(levelStr => parseInt(levelStr)) ?? []
  const features = parseFeaturesList(getString(archetypeMacro.items.FEATURES) ?? '')

  return {
    name: archetypeMacro.argument ?? 'ERR_NO_NAME',
    hp_lv1: getNumber(archetypeMacro.items.HP_LV1) ?? 999,
    hp_lv: getNumber(archetypeMacro.items.HP_LV) ?? 999,
    mp_lv: getNumber(archetypeMacro.items.MP_LV) ?? 999,
    ASI_levels,
    features: parseFeatures(getString(archetypeMacro.items.FEATURES)),
    features_list: joinFeatures(features, makeASIFeatures(ASI_levels)),
    multi_features: parseMultiFeatures(
      getString(archetypeMacro.items.MULTI_FEATURES) ?? ''
    ),
    wide: archetypeMacro.items.HAS_MAGIC === 'true',
    specialization_levels: (getString(archetypeMacro.items.SPECIALIZATION_LEVELS) ?? "").split(", ")
  }
}

import { pad } from '../arrayUtils'
import { getNumber, getString, getStringArr, Macro } from '../macros/types'
import { parseMarkdownTable } from '../stringOutputUtils'

export interface Archetype {
  name: string
  hp_lv1: number
  hp_lv: number
  mp_lv: number
  ASI_levels: number[]
  features: string[][]
  multi_features: string[][]
  wide: boolean
}

const joinFeatures = (...features: string[][][]) =>
  features.reduce((acc, cur) =>
    acc.map((levelFeatures, i) => [...levelFeatures, ...cur[i]])
  )

export const parseFeatures = (featuresMarkdown: string) => {
  const featuresArray = parseMarkdownTable(getString(featuresMarkdown) ?? '')
    .map(([level, features]) => [parseInt(level), features.split(',')] as const)
    .reduce<string[][]>((acc, [level, features]) => {
      acc[level - 1] ??= []
      acc[level - 1] = [...acc[level - 1], ...features]
      return acc
    }, [])

  return pad(featuresArray, 20, [])
}
export const parseMultiFeatures = (multiFeaturesMarkdown: string) => {
  const featuresArray = parseMarkdownTable(multiFeaturesMarkdown, true).map(
    row => row.slice(1)
  )

  if (featuresArray.every(row => row.length === 1 && row[0] === ''))
    return pad([], 21, [])
  return pad(featuresArray, 21, [])
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
  const features = parseFeatures(getString(archetypeMacro.items.FEATURES) ?? '')

  return {
    name: archetypeMacro.argument ?? 'ERR_NO_NAME',
    hp_lv1: getNumber(archetypeMacro.items.HP_LV1) ?? 999,
    hp_lv: getNumber(archetypeMacro.items.HP_LV) ?? 999,
    mp_lv: getNumber(archetypeMacro.items.MP_LV) ?? 999,
    ASI_levels,
    features: joinFeatures(features, makeASIFeatures(ASI_levels)),
    multi_features: parseMultiFeatures(
      getString(archetypeMacro.items.MULTI_FEATURES) ?? ''
    ),
    wide: archetypeMacro.items.HAS_MAGIC === 'true',
  }
}

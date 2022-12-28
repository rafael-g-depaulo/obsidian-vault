import { pad } from '../arrayUtils'
import { getNumber, getString, Macro } from '../macros/types'
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

const parseFeatures = (featuresMarkdown: string) => {
  const featuresArray = parseMarkdownTable(getString(featuresMarkdown) ?? '')
    .map(([level, features]) => [parseInt(level), features.split(',')] as const)
    .reduce<string[][]>((acc, [level, features]) => {
      acc[level - 1] ??= []
      acc[level - 1] = [...acc[level - 1], ...features]
      return acc
    }, [])

  return pad(featuresArray, 20, [])
}
const parseMultiFeatures = (multiFeaturesMarkdown: string) => {
  const featuresArray = parseMarkdownTable(multiFeaturesMarkdown, true).map(
    row => row.slice(1)
  )

  return pad(featuresArray, 21, [])
}
export const parseArchetype = <T extends Macro>(
  archetypeMacro: T
): Archetype => ({
  name: archetypeMacro.argument ?? 'ERR_NO_NAME',
  hp_lv1: getNumber(archetypeMacro.items.HP_LV1) ?? 999,
  hp_lv: getNumber(archetypeMacro.items.HP_LV) ?? 999,
  mp_lv: getNumber(archetypeMacro.items.MP_LV) ?? 999,
  ASI_levels:
    getString(archetypeMacro.items.ASI_LEVELS)
      ?.split(',')
      .map(levelStr => parseInt(levelStr)) ?? [],
  features: parseFeatures(getString(archetypeMacro.items.FEATURES) ?? ''),
  multi_features: parseMultiFeatures(
    getString(archetypeMacro.items.MULTI_FEATURES) ?? ''
  ),
  wide: archetypeMacro.items.HAS_MAGIC === 'true',
})

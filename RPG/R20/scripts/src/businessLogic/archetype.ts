import { pad } from '../arrayUtils'
import { getNumber, getString, Macro } from '../macros/types'
import { parseMarkdownTable } from '../stringOutputUtils'

export interface Archetype {
  NAME: string
  HP_LV1: number
  HP_LV: number
  MP_LV: number
  ASI_LEVELS: number[]
  FEATURES: string[][]
  MULTI_FEATURES: string[][]
  HAS_MAGIC: boolean
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
  NAME: archetypeMacro.argument ?? 'ERR_NO_NAME',
  HP_LV1: getNumber(archetypeMacro.items.HP_LV1) ?? 999,
  HP_LV: getNumber(archetypeMacro.items.HP_LV) ?? 999,
  MP_LV: getNumber(archetypeMacro.items.MP_LV) ?? 999,
  ASI_LEVELS:
    getString(archetypeMacro.items.ASI_LEVELS)
      ?.split(',')
      .map(levelStr => parseInt(levelStr)) ?? [],
  FEATURES: parseFeatures(getString(archetypeMacro.items.FEATURES) ?? ''),
  MULTI_FEATURES: parseMultiFeatures(
    getString(archetypeMacro.items.MULTI_FEATURES) ?? ''
  ),
  HAS_MAGIC: archetypeMacro.items.HAS_MAGIC === 'true',
})

import { pad, range } from '../arrayUtils'
import { Archetype, Attb, getAttbName } from '../businessLogic/attributes'
import { proficiencyBonus } from '../businessLogic/proficiency'
import { replaceMacroAsync } from '../macros/replaceMacro'
import { ClassDefinitionMacro } from '../macros/types'
import { order } from '../stringOutputUtils'

export const replaceClassDefinition = replaceMacroAsync(
  'class-definition',
  async macro => generateClassDefinition(macro as ClassDefinitionMacro)
)

const getSaves = (saves: string[]) =>
  `**Resistências:** ${saves.map(a => getAttbName(a as Attb)).join(', ')}.`

const getClassTable = (
  archetype: Archetype,
  className: string,
  _features: string[]
) => {
  if (archetype === 'Off-Caster' || archetype === 'Caster') return 'CASTER'

  const features = pad(_features, 20, '')
    .map((levelFeatures, i) => {
      const featuresForLevel = levelFeatures
        .split(', ')
        .filter(feat => feat !== '')
      if (i > 0) return [`${className} Feat`, ...featuresForLevel]
      return featuresForLevel
    })
    .map(featuresListForLevel => featuresListForLevel.join(', '))

  const footer = '\n}}\n'
  const header =
    '{{classTable\n' +
    `##### ${className}\n` +
    '| Level | Proficiency Bonus | Features |\n' +
    '|:-----:|:-----------------:|:-------- |\n'
  return (
    header +
    range(1, 20)
      .map(level => ({
        level: level + order(level),
        proficiencyBonus: proficiencyBonus[level - 1],
        features: features[level - 1],
      }))
      .map(
        ({ features, level, proficiencyBonus }) =>
          `| ${level} | ${proficiencyBonus} | ${features} |`
      )
      .join('\n') +
    footer
  )
}

export const generateClassDefinition = (classMacro: ClassDefinitionMacro) =>
  `# ${classMacro.items.NAME} (${classMacro.items.ARCHETYPE})\n\n` +
  `**HP**: You start at 1st level with ${classMacro.items.HP_LV1} (+CON mod.) maximum hit points, and gain an extra ${classMacro.items.HP_LV} (+CON mod.) per level.\n\n` +
  `**MP**: ${
    classMacro.items.MP_ATTB
      ? `You start at 1st level with ${classMacro.items.MP_LV} (+${classMacro.items.MP_ATTB}) maximum MP, and gain an extra ${classMacro.items.MP_LV} per level`
      : `${classMacro.items.MP_LV} per level`
  }.\n\n` +
  `**Equipment Proficiencies:** ${classMacro.items.EQUIPMENT_PROFICIENCIES}.\n\n` +
  getSaves(classMacro.items.SAVES as string[]) +
  '\n\n' +
  getClassTable(
    classMacro.items.ARCHETYPE as Archetype,
    classMacro.items.NAME as string,
    classMacro.items.FEATURES as string[]
  )

import { pad, range } from '../arrayUtils'
import { Archetype } from '../businessLogic/archetype'
import { Attb, getAttbName } from '../businessLogic/attributes'
import { proficiencyBonus } from '../businessLogic/proficiency'
import { replaceMacro, replaceMacroAsync } from '../macros/replaceMacro'
import { ClassDefinitionMacro } from '../macros/types'
import { order } from '../stringOutputUtils'
import { CompileRulesDeps } from './index'

export const removeArchetypeDefinition = replaceMacro('define-archetype', '')

export const replaceClassDefinition = ({ archetypes }: CompileRulesDeps) =>
  replaceMacroAsync('class-definition', async macro => {
    const archetype = archetypes.find(
      archetype => archetype.NAME === macro.items.ARCHETYPE
    )

    return generateClassDefinition(macro as ClassDefinitionMacro, archetype)
  })

const getSaves = (saves: string[]) =>
  `**Resistências:** ${saves.map(a => getAttbName(a as Attb)).join(', ')}.`

const getClassTable = (
  archetype: Archetype,
  className: string,
  _features: string[]
) => {
  // if (archetypeName === 'Off-Caster' || archetypeName === 'Caster')
  //   return 'CASTER'

  const features = pad(_features, 20, '')
    .map((levelFeatures, i) => {
      const featuresForLevel = levelFeatures
        .split(', ')
        .filter(feat => feat !== '')
      if (i > 0)
        return [
          `${className} Feat`,
          ...featuresForLevel,
          ...archetype.FEATURES[i],
        ]
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

export const generateClassDefinition = (
  classMacro: ClassDefinitionMacro,
  archetype?: Archetype
) =>
  !archetype
    ? `ERRROR WHAT SMETHING's WRONG\n\n\`\`\`json\n${JSON.stringify(
        { archetype, classMacro },
        null,
        2
      )}\`\`\`\n\n`
    : `# ${classMacro.items.NAME} (${classMacro.items.ARCHETYPE})\n\n` +
      `**HP**: You start at 1st level with ${archetype.HP_LV1} (+CON mod.) maximum hit points, and gain an extra ${archetype.HP_LV} (+CON mod.) per level.\n\n` +
      `**MP**: ${
        classMacro.items.MP_ATTB
          ? `You start at 1st level with ${archetype.MP_LV} (+${classMacro.items.MP_ATTB}) maximum MP, and gain an extra ${archetype.MP_LV} per level`
          : `${archetype.MP_LV} per level`
      }.\n\n` +
      `**Equipment Proficiencies:** ${classMacro.items.EQUIPMENT_PROFICIENCIES}.\n\n` +
      getSaves(classMacro.items.SAVES as string[]) +
      '\n\n' +
      getClassTable(
        archetype,
        classMacro.items.NAME as string,
        classMacro.items.FEATURES as string[]
      )

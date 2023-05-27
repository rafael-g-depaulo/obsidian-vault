import { CompileRulesDeps } from '.'
import { pad, range } from '../arrayUtils'
import { Archetype } from '../businessLogic/archetype'
import { Attb, getAttbName } from '../businessLogic/attributes'
import { Class, parseClass } from '../businessLogic/class'
import { proficiencyBonus } from '../businessLogic/proficiency'
import { replaceMacro, replaceMacroAsync } from '../macros/replaceMacro'
import { order } from '../stringOutputUtils'

export const removeArchetypeDefinition = replaceMacro('define-archetype', '')

export const replaceClassDefinition = ({ archetypes }: CompileRulesDeps) =>
  replaceMacroAsync('class-definition', async macro => {
    const archetype = archetypes.find(
      archetype => archetype.name === macro.items.ARCHETYPE
    )
    const classDefinition = parseClass(macro)

    return generateClassDefinition(classDefinition, archetype)
  })

const getSaves = (saves: string[]) =>
  `**Resistências:** ${saves.map(a => getAttbName(a as Attb)).join(', ')}.`

const makeClassTable = (archetype: Archetype, classDefinition: Class) => {
  const features = classDefinition.features
    .map((levelFeatures, i) => {
      const featuresForLevel: string[] = levelFeatures
        .filter(feat => feat !== '')
        .concat(archetype.features[i])

      if (i > 0) return [`${classDefinition.name} Feat`, ...featuresForLevel]
      return featuresForLevel
    })
    .map(featuresListForLevel => featuresListForLevel.join(', '))

  const makeRow = (
    levelStr: string,
    proficiency: string,
    featureValues: string[]
  ) => `| ${levelStr} | ${proficiency} | ${featureValues.join(' | ')} |`

  const makeSeparator = (numExtraFeatures: number) =>
    `| :---: | :---------------: | :------- | ${range(1, numExtraFeatures)
      .map(() => ':----: |')
      .join('')}\n`

  const makeHeader = (additionalFatures: string[], isWide: boolean = false) =>
    (isWide
      ? '{{classTable,decoration,frame,wide\n'
      : '{{classTable,decoration,frame\n') +
    `##### ${classDefinition.name}\n` +
    `| Level | Proficiency Bonus | Features |${additionalFatures
      .map(feat => `${feat} | `)
      .join('')}\n` +
    makeSeparator(additionalFatures.length)

  const header = makeHeader(
    [...classDefinition.multi_features[0], ...archetype.multi_features[0]],
    archetype.wide || classDefinition.wide
  )
  const footer = '\n}}\n'

  const multiFeatures = archetype.multi_features
    .map((f, i) => [...classDefinition.multi_features[i], ...f])
    .slice(1)

  return (
    header +
    range(1, 20)
      .map(level => ({
        level: level + order(level),
        proficiencyBonus: proficiencyBonus[level - 1],
        classFeatures: features[level - 1],
        multiFeatures: multiFeatures[level - 1],
      }))
      .map(({ classFeatures, level, proficiencyBonus, multiFeatures }) =>
        makeRow(level, proficiencyBonus, [classFeatures, ...multiFeatures])
      )
      .join('\n') +
    footer
  )
}

export const generateClassDefinition = (
  classDefinition: Class,
  archetype?: Archetype
) =>
  !archetype
    ? `ERRROR WHAT SMETHING's WRONG\n\n\`\`\`json\n${JSON.stringify(
        { archetype, classMacro: classDefinition },
        null,
        2
      )}\`\`\`\n\n`
    : `# ${classDefinition.name} (${classDefinition.archetype})\n\n` +
      `<style>.page#p1:after{ display:none; }</style>\n` +
      `**HP**: You start at 1st level with ${archetype.hp_lv1} (+CON mod.) maximum hit points, and gain an extra ${archetype.hp_lv} (+CON mod.) per level.\n\n` +
      `**MP**: ${
        classDefinition.mpAttribute
          ? `You start at 1st level with ${archetype.mp_lv} (+${classDefinition.mpAttribute} mod.) maximum MP, and gain an extra ${archetype.mp_lv} per level`
          : `${archetype.mp_lv} per level`
      }.\n\n` +
      `**Equipment Proficiencies:** ${classDefinition.equipProficiencies}.\n\n` +
      getSaves(classDefinition.saves) +
      spellCastingModifier(classDefinition) +
      '\n\n' +
      makeClassTable(archetype, classDefinition)

const spellCastingModifier = ({ spellcastingAttb }: Class) =>
  !spellcastingAttb
    ? ''
    : `\n\n**Spellcasting Attribute:** ${spellcastingAttb}.\n`

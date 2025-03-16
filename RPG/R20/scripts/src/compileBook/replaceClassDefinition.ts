import { CompileRulesDeps } from '.'
import { range } from '../arrayUtils'
import { Archetype } from '../businessLogic/archetype'
import { Attb, getAttbName } from '../businessLogic/attributes'
import { Class, ClassNote, Feat, genericNoteRegex, parseClass } from '../businessLogic/class'
import { Themes } from '../businessLogic/classThemes'
import { proficiencyBonus } from '../businessLogic/proficiency'
import { replaceMacro, replaceMacroAsync } from '../macros/replaceMacro'
import { order } from '../stringOutputUtils'

export const removeArchetypeDefinition = replaceMacro('define-archetype', '')

export const removeThemesDefinition = replaceMacro('define-themes', '')

export const replaceClassDefinition = ({
  archetypes,
  classThemes,
}: CompileRulesDeps) =>
  replaceMacroAsync('class-definition', async macro => {
    const archetype = archetypes.find(
      archetype => archetype.name === macro.items.ARCHETYPE
    )
    const classDefinition = parseClass(macro)

    return generateClassDefinition(classDefinition, classThemes, archetype)
  })

const getSaves = (saves: string[]) =>
  `**Resistências:** ${saves.map(a => getAttbName(a as Attb)).join(', ')}.`

const makeClassTable = (archetype: Archetype, classDefinition: Class) => {
  const features = classDefinition.featuresList
    .map((levelFeatures, i) => {
      const featuresForLevel: string[] = levelFeatures
        .filter(feat => feat !== '')
        .concat(archetype.features_list[i])

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

  //   const archetypeFeatures = {
  //     [Number(archetype.specialization_levels[0])]: "Especialização",
  //     [Number(archetype.specialization_levels[1])]: "Especialização",
  //   }


  return (
    header +
    range(1, 20)
      .map(level => ({
        level: level + order(level),
        proficiencyBonus: proficiencyBonus[level - 1],
        classFeatures: features[level - 1],
        multiFeatures: multiFeatures[level - 1],
        // archetypeFeatures: archetypeFeatures[level - 1],
      }))
      .map(({ classFeatures, level, proficiencyBonus, multiFeatures }) =>
        makeRow(level, proficiencyBonus, [classFeatures, ...multiFeatures])
      )
      .join('\n') +
    footer
  )
}

const makeFeaturesSection = (archetype: Archetype, classDefinition: Class) => {
  return [...archetype.features, ...classDefinition.features]
    .sort((a, b) => a.level - b.level)
    .map(
      ({ name, description }) =>
        `**${name}.** ${description?.replaceAll('<br>', '\n')}`
    )
    .join('\n\n')
}

const singleFeatString = (feat: Feat) =>
  `- **${feat.name}.** ${feat.description}` +
  (!feat.preRequisites ? '' : ` Pre-requisites: *${feat.preRequisites}*.`)

const makeClassNote = (note?: ClassNote) =>
  !note ? '' : `{{class-note "${note.name}"\n${note.description}}}`

const makeGenericNote = (noteId: string, classDeff: Class) => {
  return !classDeff.genericNotes[noteId] ? `ERROR!!! tried to add note "${noteId}", but it doesn't exist` :
    `{{descriptive\n${classDeff.genericNotes[noteId].description}}}\n`
}

const makeFeatsSection = (archetype: string, classDefinition: Class) => {
  const macroStringReplace = (featStr: string) => {
    if (featStr.indexOf('BREAK') !== -1) return `{{page-break}}`

    if (featStr.indexOf('CLASS_NOTE') !== -1) return makeClassNote(classDefinition.classNote)
    if (featStr.indexOf("NOTE_") !== -1) return makeGenericNote(featStr.match(genericNoteRegex)?.[0] ?? "", classDefinition)

    return featStr
  }

  const featsList = classDefinition.feats
    .map(feat =>
      typeof feat === 'object' ? singleFeatString(feat) :
        feat.split('\n').map(macroStringReplace).join("")
    )
    .join('\n\n')

  return (
    `### ${classDefinition.name} Feats\n` +
    `Beginning at level 2, every time you gain a level in ${classDefinition.name} you gain a Witch Feat. You may instead of a ${classDefinition.name} feat take a ${archetype} or General Feat of your choice.` +
    `\n\n` +
    featsList
  )
}

const makeThemesSection = (
  themes: Themes,
  classDefinition: Class,
  archetype: Archetype
) => {
  // const theme = "NATURE"
  const theme = Object.entries(themes).filter(([, { classes }]) =>
    classes.includes(classDefinition.name)
  )[0]?.[0]

  const levels = archetype.specialization_levels ?? ['4', '8']

  if (!themes[theme]) return ''

  return (
    '### Especialização\n' +
    `A partir do nível ${levels[0]}, escolha uma perícia entre **${themes[theme].skills}**. Ao rolar essa perícia, você adiciona seu bonus de proficiência. No nível ${levels[1]}, escolha uma perícia adicional.`
  )
}

export const generateClassDefinition = (
  classDefinition: Class,
  themes: Themes,
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
    `**MP**: ${classDefinition.mpAttribute
      ? `You start at 1st level with ${archetype.mp_lv} (+${classDefinition.mpAttribute} mod.) maximum MP, and gain an extra ${archetype.mp_lv} per level`
      : `${archetype.mp_lv} per level`
    }.\n\n` +
    `**Equipment Proficiencies:** ${classDefinition.equipProficiencies}.\n\n` +
    getSaves(classDefinition.saves) +
    spellCastingModifier(classDefinition) +
    '\n\n' +
    makeClassTable(archetype, classDefinition) +
    '\n\n' +
    makeFeaturesSection(archetype, classDefinition) +
    '\n\n' +
    makeThemesSection(themes, classDefinition, archetype) +
    '\n\n' +
    makeFeatsSection(archetype.name, classDefinition)

const spellCastingModifier = ({ spellcastingAttb }: Class) =>
  !spellcastingAttb
    ? ''
    : `\n\n**Spellcasting Attribute:** ${spellcastingAttb}.\n`

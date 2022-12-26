import { groupBy } from './arrayUtils'
import { deleteFile, writeToFile } from './file'
import { matchGroups } from './regexUtils'
import { INVALID_DESCRIPTION, Spell } from './spell'
import { noTagRegex, TagGroups } from './tags'
import { isNotNull } from './typeUtils'
import { ValidatedSpells } from './validateSpell'

// types
export type SpellError = { spell: Spell; message: string; kind: string }
type ErrorCheck = (spell: Spell) => SpellError[] | SpellError | null
export type ErrorParser = (spell: Spell) => SpellError[]

// factories
const spellError = (
  spell: Spell,
  kind: string,
  message: string
): SpellError => ({
  message,
  kind,
  spell,
})

// error parsers
const hasSpellOrWipTag: ErrorCheck = spell =>
  !spell.tags.includes('wip') && !spell.tags.includes('spell')
    ? spellError(
        spell,
        'Spell Tag',
        `Spell should have either "wip" or "spell" tag`
      )
    : null

const spellBreaksHierarchyForGroup = (
  spell: Spell,
  group: TagGroups[number]
): boolean => {
  const noTags = spell.tags
    .map(tag => matchGroups(tag, noTagRegex)?.tag)
    .filter(isNotNull)

  const breaksHierarchy =
    // spell doesn't include one of the group's tags
    group.tags.some(tag => spell.tags.includes(tag)) &&
    // or includes a noTag of the group
    !noTags.includes(group.group) &&
    // or includes the group's tag
    !spell.tags.some(tag => tag === group.group)

  return breaksHierarchy
}
const obeysTagGroupHierarchy =
  (hierarchy: TagGroups): ErrorCheck =>
  spell => {
    return hierarchy
      .filter(({ group, tags }) =>
        spellBreaksHierarchyForGroup(spell, { group, tags })
      )
      .flatMap(({ group, tags }) =>
        tags
          .filter(tag => spell.tags.includes(tag))
          .map(tag => ({ group, tag }))
      )
      .map(({ group, tag }) =>
        spellError(
          spell,
          'Tag Group Hierarchy',
          `Spell has tag "${tag}" but is missing it's group tag "${group}" (or you can add "#no-${group}")`
        )
      )
  }
const hasDescription: ErrorCheck = spell =>
  spell.description === INVALID_DESCRIPTION
    ? spellError(
        spell,
        'Missing Description',
        `Spell is missing a description (or more likely the description is in the wrong format)`
      )
    : null

// consolidate error parsers
const isError = (e: SpellError | null): e is SpellError => !!e
const createErrorCheckerThing =
  (...checkers: ErrorCheck[]): ErrorParser =>
  spell =>
    checkers.flatMap(check => check(spell)).filter(isError)

export interface ErrorCheckerDeps {
  tagGroups: TagGroups
}
export const getErrorsWithSpell = ({
  tagGroups: hierarchy,
}: ErrorCheckerDeps) =>
  createErrorCheckerThing(
    hasSpellOrWipTag,
    obeysTagGroupHierarchy(hierarchy),
    hasDescription
  )

const writeOutError = (error: SpellError) =>
  `- [[${error.spell.name}]] ${error.message}`
export const writeOutErrors = (errors: SpellError[]): string =>
  `# Compiling Errors\nHere's a list of all of the errors found.\n\n` +
  Object.entries(groupBy((e: SpellError) => e.kind)(errors))
    .map(
      ([errorType, errors]) =>
        `## ${errorType}\n` +
        errors
          .sort((a, b) => a.kind.localeCompare(b.kind))
          .map(writeOutError)
          .join('\n')
    )
    .join('\n\n')

export const dealWithErrors =
  (folder: string, filename: string) =>
  ({ spells, errors }: ValidatedSpells) => {
    if (errors.length > 0) writeToFile(folder, filename, writeOutErrors(errors))
    else deleteFile(folder, filename)

    return spells
  }

import { groupBy } from './arrayUtils'
import { deleteFile, writeToFile } from './file'
import { matchGroups } from './regexUtils'
import { Spell } from './spell'
import { TagGroups } from './tags'
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

const noTagRegex = /^no(?<tag>\w+)/i
const spellDoesntBreakHierarchyForGroup = (
  spell: Spell,
  group: TagGroups[number]
): boolean => {
  const noTag: string | null = ''

  // look for notag of group in spell tags, and check if it follows the rules
  // // spell has one of the group tags
  // spell.tags.some(tag => tags.includes(tag))
  // // and doesn't have the group
  // && !spell.tags.includes(group) ||
  // // and doesn't have the nogroup
  return false
}
const obeysTagGroupHierarchy =
  (hierarchy: TagGroups): ErrorCheck =>
  spell => {
    return hierarchy
      .filter(({ group, tags }) =>
        spellDoesntBreakHierarchyForGroup(spell, { group, tags })
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
          `Spell has tag "${tag}" but is missing it's group tag "${group}" (or you can add "#no${group}")`
        )
      )
  }

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
  createErrorCheckerThing(hasSpellOrWipTag, obeysTagGroupHierarchy(hierarchy))

const writeOutError = (error: SpellError) =>
  `- [[${error.spell.name}]] ${error.message}`
export const writeOutErrors = (errors: SpellError[]): string =>
  `# Compiling Errors\nHere's a list of all of the errors found.\n\n` +
  Object.entries(groupBy((e: SpellError) => e.kind)(errors))
    .map(
      ([errorType, errors]) =>
        `## ${errorType}\n` + errors.map(writeOutError).join('\n')
    )
    .join('\n\n')

export const dealWithErrors =
  (folder: string, filename: string) =>
  ({ spells, errors }: ValidatedSpells) => {
    if (errors.length > 0) writeToFile(folder, filename, writeOutErrors(errors))
    else deleteFile(folder, filename)

    return spells
  }

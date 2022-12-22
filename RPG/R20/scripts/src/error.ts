import { groupBy } from './arrayUtils'
import { Spell } from './spell'

// types
export type SpellError = { spell: Spell; message: string; kind: string }
type ErrorCheck = (spell: Spell) => SpellError | null
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
        `${spell.name} should have either "wip" or "spell" tag`
      )
    : null

// consolidate error parsers
const isError = (e: SpellError | null): e is SpellError => !!e
const createErrorCheckerThing =
  (...checkers: ErrorCheck[]): ErrorParser =>
  spell =>
    checkers.map(check => check(spell)).filter(isError)

export const getErrorsWithSpell: ErrorParser =
  createErrorCheckerThing(hasSpellOrWipTag)

export const writeOutErrors = (errors: SpellError[]): string =>
  `# Compiling Errors\nHere's a list of all of the errors found.\n\n
  ` + groupBy((e: SpellError) => e.kind)(errors)

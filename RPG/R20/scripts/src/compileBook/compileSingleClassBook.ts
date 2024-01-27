import { Spell } from '../businessLogic/spell'
import { getClassSpellsSection } from '../businessLogic/spellList'
import { getPostProcessInfo, postProcess } from '../postProcessing'
import { TagRules } from '../tagRules'
import { CompileRulesDeps } from './index'
import { breakPage } from './replacePageBreakMacro'

const extraPagesCount = 1

const extraPages = (content: string, acc = extraPagesCount): string =>
  acc <= 0 ? content : extraPages(`${breakPage}\n${content}`, acc - 1)

export type GlobalTagRules = {
  filename: string
  rules: TagRules | null
}[]

const getClassSpellRules = (
  globalClassSpellRules: GlobalTagRules,
  className?: string
): TagRules | undefined => {
  if (!className) return

  return (
    globalClassSpellRules.find(rule => rule.filename.includes(className))
      ?.rules ?? undefined
  )
}

export const compileSingleClassBook =
  (
    globalClassSpellRules: GlobalTagRules,
    allSpells: Spell[],
    compileDeps: CompileRulesDeps
  ) =>
    async (content: string) => {
      const className = /^# (?<className>.*)\s+\([\w\-]+\)/gm.exec(content)
        ?.groups?.className

      const classSpellSection = await getClassSpellsSection(
        allSpells,
        compileDeps,
        getClassSpellRules(globalClassSpellRules, className),
        className,
      )

      return extraPages(content) + classSpellSection
    }

export const postProccessSingleClassBook = (processedContent: string) =>
  postProcess(processedContent, getPostProcessInfo(processedContent))

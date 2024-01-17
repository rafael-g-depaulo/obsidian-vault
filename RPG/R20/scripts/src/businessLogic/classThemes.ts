import { Macro } from "../macros/types"

export type Themes = {
  [s: string]: {
    classes: string[]
    skills: string
  }
}

export const parseThemes = <T extends Macro>(
  archetypeMacro: T | null
): Themes => {

  console.log(archetypeMacro)
  return {

  }
}

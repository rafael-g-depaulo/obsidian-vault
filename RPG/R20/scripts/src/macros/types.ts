export type MacroItem = string | string[]
export type MacroArgument = string
export type Macro<
  ItemKeys extends string = string,
  Name extends string = string
> = {
  name: Name
  argument?: string
  items: { [key in ItemKeys]: MacroItem }
  rawBody: string
}

export type SpellListMacro = Macro<
  | 'EXCLUDE_SPELLS'
  | 'EXCLUDE_TAGS'
  | 'INCLUDE_SPELLS'
  | 'INCLUDE_TAGS'
  | 'MAX_LEVEL'
  | 'MIN_LEVEL',
  'spell-list'
>

export type ArchetypeDefinitionMacro = Macro<
  'HP_LV1' | 'HP_LV' | 'MP_LV' | 'ASI_LEVELS' | 'FEATURES' | 'MULTI_FEATURES',
  'define-archetype'
>

export const getStringArr = (item: MacroItem) =>
  typeof item === 'string' ? [item] : item
export const getString = (item: MacroItem) =>
  !item ? undefined : typeof item === 'string' ? item : item.join('.')
export const getNumber = (item: MacroItem) =>
  !item ? undefined : parseInt(getString(item)!)

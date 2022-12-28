export type MacroItem = string | string[]
export type MacroArgument = string
export type Macro<
  ItemKeys extends string = string,
  Name extends string = string
> = {
  name: Name
  argument?: string
  items: { [key in ItemKeys]: MacroItem }
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

export type ClassDefinitionMacro = Macro<
  | 'ARCHETYPE'
  | 'NAME'
  | 'EQUIPMENT_PROFICIENCIES'
  | 'SAVES'
  | 'HP_LV1'
  | 'HP_LV'
  | 'MP_LV'
  | 'MP_ATTB'
  | 'FEATURES'
  | 'BASE_MECHANICS'
  | 'CLASS_FEATS',
  'class-definition'
>

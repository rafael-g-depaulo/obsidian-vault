import { Spell5eToolsExport } from "./readCsv";

export const makeSpellDefinitionMacroString = (spell: Spell5eToolsExport) =>
  `{{spell-definition "${spell.Name}"

TAGS: 
  - #spell

LEVEL: ${spell.Level}

CAST_TIME: ${spell["Casting Time"]}
RANGE: ${spell.Range}
TARGET: 
DURATION: ${spell.Duration}

%%CRIT: 20/2x%%
RESISTANCE: DEX
%%TAGS:%%

DESCRIPTION:
${spell.Text}

INCREASES:

| cost | description |
| ---- | ----------- |
| +0 PM     |    Placeholder        |


%% RANDOM
%%
%% classes, sub: ${spell.Classes}. ${spell.Subclasses}
%% school: ${spell.School}
%% upcast: ${spell["At Higher Levels"]}
%%


}}`

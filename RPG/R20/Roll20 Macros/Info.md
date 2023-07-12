# Macros
## Normal
```
&{template:default} {{name=Info @{selected|character_name} (lv @{selected|Level})}} {{HP=[[@{selected|HP}]]/[[@{selected|HP|max}]]}} {{MP=[[@{selected|MP}]]/[[@{selected|MP|max}]]}} {{Defesa= [[ #defesa ]] }} {{Evasão=[[ #dodge ]] }} {{Guarda=[[ #guard ]] }} {{Velocidade de Movimento=[[ #velocidade-movimento ]] }}
```

## Paladin
```
&{template:default} {{name=Info @{selected|character_name} (lv @{selected|Level})}} {{HP=[[@{selected|HP}]]/[[@{selected|HP|max}]]}} {{MP=[[@{selected|MP}]]/[[@{selected|MP|max}]]}} {{FP=[[@{selected|FP}]]/[[@{selected|FP|max}]]}} {{Defesa=[[ #defesa ]] }} {{Evasão=[[ #dodge ]] }} {{Guarda=[[ #guard ]] }} {{Velocidade de Movimento=[[ #velocidade-movimento ]] }}
```

## Velocidade-Movimento
```
{4,5+@{selected|STR_mod}, 8}kl2dl1 + @{selected|movespeed_bonus}
```

### Guard
```
@{selected|bonus_guard} + @{selected|CON}
```

### Dodge
```
@{selected|bonus_dodge} + @{selected|DEX}
```

### Defesa
```
10 + [[{#dodge , #guard }kh1]][max(evasão. guarda)]
```

# Attributes
## User Input
### HP/MP/FP (max)
```
[[ @{Max-HP} ]]
```

## General
### lvl
```
@{Level}[lvl]
```
### Max-HP
```
@{Starting-HP} + (@{lvl}-1)*@{Levelup-HP} + @{lvl}*@{CON}
```
### Max-MP
```
@{lvl}*@{MP-per-Level} + @{Bonus-MP}
```
### Max-FP
```
@{lvl}*5
```
### proficiency
```
[[ ceil(@{lvl}/2) ]][proficiência]
```
### STR/DEX/CON/INT/SEN/PRE
```
[[floor((@{Força}-10)/2)]][STR]
[[floor((@{Destreza}-10)/2)]][DEX]
[[floor((@{Constituição}-10)/2)]][CON]
[[floor((@{Inteligência}-10)/2)]][INT]
[[floor((@{Sensibilidade}-10)/2)]][SEN]
[[floor((@{Presença}-10)/2)]][PRE]
```
### CD-Milagres
```
[[ 8+@{proficiency}+@{milagres_attb} ]]
```
### CD-Magias
```
[[ 8+@{proficiency}+@{spellcasting_attb} ]]
```
### attack-roll
```
[[ @{wpn_amt_dice}@{wpn_dmg_dice}[base] + @{attack_dmg_bonus} + ([[ceil(floor([[1d20cs>@{wpn_crit_range} + @{attack_roll_bonus}]]/(@{wpn_crit_range} + @{attack_roll_bonus}))/1000)]]*(@{wpn_crit_mult} - 1) * @{wpn_amt_dice})@{wpn_dmg_dice}[crit] ]]
```
### attack_roll_bonus
```
@{attack_attb} + @{proficiency} + @{attack_bonus}
```
### attack_dmg_bonus
```
@{attack_attb} + @{dmg_bonus}
```
### spell_attack_roll_bonus
```
@{spellcasting_attb} + @{proficiency}
```
### guard
```
[[ @{CON} + @{bonus_guard} ]]
```
### dodge
```
[[ @{DEX} + @{bonus_dodge} ]]
```
### defense
```
[[ 10 + [[{@{guard},@{dodge}}kh1]][max(guarda, evasão)] ]]
```
### move_speed
```
[[ [[{4,5+@{STR},8}kl2dl1]][5+STR] + @{movespeed_bonus} ]]
```
### Info
```
&{template:default} {{name=Info @{character_name} (lv @{Level})}} {{HP=[[@{HP}]]/[[@{Max-HP}]]}} {{MP=[[@{MP}]]/[[@{Max-MP}]]}} {{Defesa= @{defense} }} {{Evasão= @{dodge} }} {{Guarda=@{guard} }} {{Velocidade de Movimento=@{move_speed} }}
```
### Info-Paladino
```
&{template:default} {{name=Info @{character_name} (lv @{Level})}} {{HP=[[@{HP}]]/[[@{Max-HP}]]}} {{MP=[[@{MP}]]/[[@{Max-MP}]]}} {{FP=[[@{FP}]]/[[@{Max-FP}]]}} {{Defesa= @{defense} }} {{Evasão= @{dodge} }} {{Guarda=@{guard} }} {{Velocidade de Movimento=@{move_speed} }}
``` 
### rest_supplies (para usar regra sem mantimentos, coloque um default em vez da query)
```
?{Mantimentos|Passando Fome,-3[Fome] |Racionando (2pr),-1[Racionando] |Humilde (5pr),0[Humilde] |Confortável (20pr),+1[Confortável] |Luxuoso (50pr), +2[Luxuoso] |Ostentando (15g), +3[Ostentando]}
```
### rest (lembrar de atualizar o link)
```
&{template:default} [[ [[ {-1, floor( ( [[ 1d20 + @{CON} + @{skill_survival}[bonus skill] + @{rest_supplies} ]] - ?{CD Descanso} ) / 5), 2}kl2dl1 ]][-1=ruim, 0=normal, 1=boa, 2=otima] ]] {{name=Descanso (@{character_name})}} {{Descrição=@{character_name} descansa, e rola um $[[1]], contra a CD de ?{CD Descanso} }} {{Qualidade=$[[3]] [ruim](`&lbrack;&lbrack; ?{CD Descanso}[CD Descanso] &rbrack;&rbrack; @&lbrace;@{character_name}|rest_level_minus_1&rbrace;) [normal](`@&lbrace;@{character_name}|rest_level_0&rbrace;) [boa](`@&lbrace;@{character_name}|rest_level_1&rbrace;) [ótima](`@&lbrace;@{character_name}|rest_level_2&rbrace;) }} {{Regras= [referência](http://journal.roll20.net/handout/-NFZfA6xAZfhnuPElsRH) }}
```
### skill_roll
```
?{Skill
  |Atletismo, @{character_name} rola Atletismo: [[ 1d20 + @{STR} + @{skill_atletics}[skill_bonus] ]]

  |Acrobacia, @{character_name} rola Acrobacia: [[ 1d20 + @{DEX} + @{skill_acrobatics}[skill_bonus] ]]
  |Furtividade, @{character_name} rola Furtividade: [[ 1d20 + @{DEX} + @{skill_stealth}[skill_bonus] ]]
  |Ladinagem, @{character_name} rola Ladinagem: [[ 1d20 + @{DEX} + @{skill_sleight}[skill_bonus] ]]

  |Sobrevivência, @{character_name} rola Sobrevivência: [[ 1d20 + @{CON} + @{skill_survival}[skill_bonus] ]]

  |Investigação, @{character_name} rola Investigação: [[ 1d20 + @{INT} + @{skill_investigation}[skill_bonus] ]]
  |Lógica, @{character_name} rola Lógica: [[ 1d20 + @{INT} + @{skill_logic}[skill_bonus] ]]
  |História, @{character_name} rola História: [[ 1d20 + @{INT} + @{skill_history}[skill_bonus] ]]
  |Medicina, @{character_name} rola Medicina: [[ 1d20 + @{INT} + @{skill_medicine}[skill_bonus] ]]

  |Percepção, @{character_name} rola Percepção: [[ 1d20 + @{SEN} + @{skill_perception}[skill_bonus] ]]
  |Empatia, @{character_name} rola Empatia: [[ 1d20 + @{SEN} + @{skill_empathy}[skill_bonus] ]]
  |Intuição, @{character_name} rola Intuição: [[ 1d20 + @{SEN} + @{skill_insight}[skill_bonus] ]]
  |Arcana, @{character_name} rola Arcana: [[ 1d20 + @{SEN} + @{skill_arcana}[skill_bonus] ]]
  |Natureza, @{character_name} rola Natureza: [[ 1d20 + @{SEN} + @{skill_botanic}[skill_bonus] ]]

  |Adestramento, @{character_name} rola Adestramento: [[ 1d20 + @{PRE} + @{skill_handling}[skill_bonus] ]]
  |Cozinhar, @{character_name} rola Cozinhar: [[ 1d20 + @{PRE} + @{skill_cooking}[skill_bonus] ]]
  |Enganação, @{character_name} rola Enganação: [[ 1d20 + @{PRE} + @{skill_deception}[skill_bonus] ]]
  |Intimidação, @{character_name} rola Intimidação: [[ 1d20 + @{PRE} + @{skill_intimidation}[skill_bonus] ]]
  |Persuasão, @{character_name} rola Persuasão: [[ 1d20 + @{PRE} + @{skill_persuasion}[skill_bonus] ]]
  |Performance, @{character_name} rola Performance: [[ 1d20 + @{PRE} + @{skill_performance}[skill_bonus] ]]
}
```
### resist_roll
```
?{Atributo
  |Força,
    @{token_name} rola um teste de resistência (STR) [[1d20+@{STR} + @{prof_STR}]]
  |Destreza,
    @{token_name} rola um teste de resistência (DEX) [[1d20+@{DEX} + @{prof_DEX}]]
  |Constituição,
    @{token_name} rola um teste de resistência (CON) [[1d20+@{CON} + @{prof_CON}]]
  |Inteligência,
    @{token_name} rola um teste de resistência (INT) [[1d20+@{INT} + @{prof_INT}]]
  |Sensibilidade,
    @{token_name} rola um teste de resistência (SEN) [[1d20+@{SEN} + @{prof_SEN}]]
  |Presença,
    @{token_name} rola um teste de resistência (PRE) [[1d20+@{PRE} + @{prof_PRE}]]
}
```
## Archetype

| attribute    | caster                 | off-caster             | martial | specialist |
| ------------ | ---------------------- | ---------------------- | ------- | ---------- |
| Starting-HP  | 8                      | 14                     | 18      |            |
| Levelup-HP   | 2                      | 3                      | 5       |            |
| MP-per-Level | 6                      | 4                      | 3       |            | 
| Bonus-MP     | `@{spellcasting_attb}` | `@{spellcasting_attb}` | 0       | 0          |

## Class
### prof_{ATB}
0 ou `@{proficiency}`
### spellcasting_attb
```
@{SEN}
```

## Character Specific
### movespeed_bonus
### milagres_attb
```
@{SEN}
```

### Attack Stuff

| Attribute      | value    |
| -------------- | -------- |
| attack_attb    | `@{STR}` |
| attack_bonus   | `0`      | 
| dmg_bonus      | `0`      |
| wpn_amt_dice   | `1`      |
| wpn_dmg_dice   | `d12`    |
| wpn_crit_range | `20`     |
| wpn_crit_mult  | `2`      |

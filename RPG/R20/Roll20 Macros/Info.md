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
### Max-HP
```
@{Starting-HP} + (@{level}-1)*@{Levelup-HP} + @{Level}*@{CON}
```
### Max-MP
```
@{Level}*@{MP-per-Level} + @{Bonus-MP}
```
### Max-FP
```
@{Level}*5
```
### Proficiency
```
[[ ceil(@{level}/2) ]][proficiência]
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
[[ @{wpn_amt_dice}@{wpn_dmg_dice}[base] + @{dmg_bonus} + ([[ceil(floor([[1d20cs>@{wpn_crit_range} + @{attack_bonus}]]/(@{wpn_crit_range} + @{attack_bonus}))/1000)]]*(@{wpn_crit_mult} - 1) * @{wpn_amt_dice})@{wpn_dmg_dice}[crit] ]]
```

###  attack_bonus
```
@{attack_attb} + @{proficiency}
```
### dmg_bonus
```
@{attack_attb}
```
### spell_attack_bonus
```
@{spellcasting_attb} + @{proficiency}
```

## Archetype

| attribute    | caster                 | off-caster             | martial | specialist |
| ------------ | ---------------------- | ---------------------- | ------- | ---------- |
| Starting-HP  | 8                      |                        |         |            |
| Levelup-HP   | 2                      |                        |         |            |
| MP-per-Level |                        |                        |         |            |
| Bonus-MP     | `@{spellcasting_attb}` | `@{spellcasting_attb}` | 0       | 0          |

## Class
### prof_{ATB}
0 ou `@{proficiency}`

## Character Specific
### movespeed_bonus
### milagres_attb
```
@{SEN}
```

### Attack Stuff

| Attribute      | value                             |
| -------------- | --------------------------------- |
| attack_attb    | `@{STR}`                          |
| wpn_amt_dice   | `1`                               |
| wpn_dmg_dice   | `d12`                             |
| wpn_crit_range | `20`                              |
| wpn_crit_mult  | `2`                               |

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
```

## Archetype

| attribute    | caster                                        | off-caster                                  | martial | specialist |
| ------------ | --------------------------------------------- | ------------------------------------------- | ------- | ---------- |
| CD-Magias    | `[[ 8+@{proficiency}+@{spellcasting_attb} ]]` | `[[ 8+@{proficiency}+@{spellcasting_attb]]` |         |            |
| Starting-HP  | 8                                             |                                             |         |            |
| Levelup-HP   | 2                                             |                                             |         |            |
| MP-per-Level |                                               |                                             |         |            |
| Bonus-MP     | `@{spellcasting_attb}`                        | `@{spellcasting_attb}`                      | 0       | 0           |

## Class

## Character Specific


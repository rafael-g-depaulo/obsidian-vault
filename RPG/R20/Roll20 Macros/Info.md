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
## HP/MP (max)
```
[[ @{Max-HP} ]]
```
## Max-HP
```
@{Starting-HP} + (@{level}-1)*@{Levelup-HP} + @{Level}*@{CON}
```
This requires `Starting-HP` and `Levelup-HP` to be set to a number (arquetype defined)

## Max-MP
```
```
This requires `MP-per-` and `Levelup-HP` to be set to a number (arquetype defined)

## Proficiency
```
```
## STR/DEX/CON/INT/SEN/PRE
```
[[floor((@{Força}-10)/2)]][STR]
```

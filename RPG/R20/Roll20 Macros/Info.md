# Macros
### rest_rules_link
```
http://journal.roll20.net/handout/-NZd5wTONSKl6m59y0vk
```

# Attributes
## User Input
### HP/MP/FP (max)
```
[[ @{Max-HP} ]]
```

### Stats
- Força
- Destreza
- Constituição
- Inteligência
- Sensibilidade
- Presença

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
### attack_roll
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
### attack_roll_2
```
[[ @{wpn_2_amt_dice}@{wpn_2_dmg_dice}[base] + @{attack_dmg_bonus_2} + ([[ceil(floor([[1d20cs>@{wpn_2_crit_range} + @{attack_roll_2_bonus}]]/(@{wpn_2_crit_range} + @{attack_roll_2_bonus}))/1000)]]*(@{wpn_2_crit_mult} - 1) * @{wpn_2_amt_dice})@{wpn_2_dmg_dice}[crit] ]]
```
### attack_roll_2_bonus
```
@{attack_attb} + @{attack_bonus}
```
### attack_dmg_bonus_2
```
@{dmg_bonus}
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
[[ 10 + [[{@{guard},@{dodge}}kh1]][max(guarda, evasão)] + @{bonus_defense} ]]
```
### move_speed
```
[[ [[{4,5+@{STR},8}kl2dl1]][5+STR] + @{movespeed_bonus} ]]
```
### carry_limit
```
[[ [[ {10 + @{STR} + @{CON}, 8}d1 ]][10+STR+CON] ]]
```
### Info
```
&{template:default} {{name=Info @{character_name} (lv @{Level})}} {{HP=[[@{HP}]]/[[@{Max-HP}]]}} {{MP=[[@{MP}]]/[[@{Max-MP}]]}} {{Defesa= @{defense} }} {{Evasão= @{dodge} }} {{Guarda=@{guard} }} {{Velocidade de Movimento=@{move_speed} }} {{Limite de Carga=@{carry_limit}}}
```
### Info-Paladino
```
&{template:default} {{name=Info @{character_name} (lv @{Level})}} {{HP=[[@{HP}]]/[[@{Max-HP}]]}} {{MP=[[@{MP}]]/[[@{Max-MP}]]}} {{FP=[[@{FP}]]/[[@{Max-FP}]]}} {{Defesa= @{defense} }} {{Evasão= @{dodge} }} {{Guarda=@{guard} }} {{Velocidade de Movimento=@{move_speed} }} {{Limite de Carga=@{carry_limit}}}
``` 
### De-Raspão
```
&{template:default} {{name=De Raspão (@{character_name})}} {{Execução=Reação (ao tomar dano)}} {{Custo=3PM}} {{Descrição=Você ignora o dano que ia receber, e aumenta o custo dessa habilidade em +3 PM pelo resto da cena. Você não pode executar "de Raspão" se custar mais do que a sua Evasão }} {{Evasão= @{dodge} }}
```
### Ignorar-Arranhões
```
&{template:default} {{name=Ignorar Arranhões (@{character_name})}} {{Execução=Movimento}} {{Custo=2PM}} {{Descrição=Pelo resto da cena, todo dano que você tomar igual ou inferior a @{guard} (sua Guarda) é ignorado.}}
```
### rest_roll
```
&{template:default} [[ [[ {-1, floor( ( [[ 1d20 + @{CON} + @{skill_sobrevivencia}[bonus skill] + @{rest_supplies} ]] - ?{CD Descanso} ) / 5), 2}kl2dl1 ]][-1=ruim, 0=normal, 1=boa, 2=otima] ]] {{name=Descanso (@{character_name})}} {{Descrição=@{character_name} descansa, e rola um $[[1]], contra a CD de ?{CD Descanso} }} {{Qualidade=$[[3]] [ruim](`&lbrack;&lbrack; ?{CD Descanso}[CD Descanso] &rbrack;&rbrack; @&lbrace;@{character_name}|rest_level_minus_1&rbrace;) [normal](`@&lbrace;@{character_name}|rest_level_0&rbrace;) [boa](`@&lbrace;@{character_name}|rest_level_1&rbrace;) [ótima](`@&lbrace;@{character_name}|rest_level_2&rbrace;) }} {{Regras= [referência](@{rest_rules_link}) }}
```
### rest_supplies (para usar regra sem mantimentos, coloque um default em vez da query)
```
?{Mantimentos|Passando Fome,-3[Fome] |Racionando (2pr),-1[Racionando] |Humilde (5pr),0[Humilde] |Confortável (20pr),+1[Confortável] |Luxuoso (50pr), +2[Luxuoso] |Ostentando (15g), +3[Ostentando]}
```
### rest_rules_link
```
#rest_rules_link
```
### rest_level_minus_1
```
&{template:default} {{name=Descanso (@{character_name})}} {{Qualidade=Ruim}} {{MP=  [[ [[ceil(@{level}/2)]][lv/2] ]] MP recuperado}} {{Descrição=@{character_name} descansa, e apesar de uma noite mal dormida ainda consegue se recuperar um pouco.}} {{Exaustão= Faça um [**teste de resistência (CON)**](`@&lbrace;@{character_name}|resist_roll&rbrace;) contra a CD do descanso ($[[0]]). Se falhar, ganha +1 nível de exaustão, +1 para cada 5 abaixo da CD. }}
```
### rest_level_0
```
&{template:default} {{name=Descanso (@{selected|character_name})}} {{Qualidade=Normal}} {{HP=  [[ [[ceil(@{level}/2)]][lv/2] ]] HP recuperado}} {{MP=  [[ [[ceil(@{level})]][lv] ]] MP recuperado}} {{Exaustão=Recupera de 1 nível de exaustão, se tiver}}
```
### rest_level_1
```
&{template:default} {{name=Descanso (@{selected|character_name})}} {{Qualidade=Boa}} {{HP=  [[ [[ceil(@{level})]][lv] ]] HP recuperado}} {{MP=  [[ [[ceil(@{level}*2)]][2*lv] ]] MP recuperado}} {{Exaustão=Recupera de 2 níveis de exaustão, se tiver}}
```
### rest_level_2
```
&{template:default} {{name=Descanso (@{character_name})}} {{Qualidade=Ótima}} {{HP=  [[ [[ceil(@{level}*2)]][2*lv] ]] HP recuperado}} {{MP=  [[ [[ceil(@{level}*3)]][3*lv] ]] MP recuperado}} {{Exaustão=Recupera de 2 níveis de exaustão, se tiver}}
```
### skill_roll
```
?{Skill
  |Atletismo, @{character_name} rola Atletismo: [[ 1d20 + @{STR} + @{skill_atletismo}[skill_bonus] ]]

  |Acrobacia, @{character_name} rola Acrobacia: [[ 1d20 + @{DEX} + @{skill_acrobacia}[skill_bonus] ]]
  |Furtividade, @{character_name} rola Furtividade: [[ 1d20 + @{DEX} + @{skill_furtividade}[skill_bonus] ]]
  |Ladinagem, @{character_name} rola Ladinagem: [[ 1d20 + @{DEX} + @{skill_ladinagem}[skill_bonus] ]]

  |Sobrevivência, @{character_name} rola Sobrevivência: [[ 1d20 + @{CON} + @{skill_sobrevivencia}[skill_bonus] ]]

  |Investigação, @{character_name} rola Investigação: [[ 1d20 + @{INT} + @{skill_investigacao}[skill_bonus] ]]
  |Lógica, @{character_name} rola Lógica: [[ 1d20 + @{INT} + @{skill_logica}[skill_bonus] ]]
  |História, @{character_name} rola História: [[ 1d20 + @{INT} + @{skill_historia}[skill_bonus] ]]
  |Medicina, @{character_name} rola Medicina: [[ 1d20 + @{INT} + @{skill_medicina}[skill_bonus] ]]

  |Percepção, @{character_name} rola Percepção: [[ 1d20 + @{SEN} + @{skill_percepcao}[skill_bonus] ]]
  |Empatia, @{character_name} rola Empatia: [[ 1d20 + @{SEN} + @{skill_empatia}[skill_bonus] ]]
  |Intuição, @{character_name} rola Intuição: [[ 1d20 + @{SEN} + @{skill_intuicao}[skill_bonus] ]]
  |Arcana, @{character_name} rola Arcana: [[ 1d20 + @{SEN} + @{skill_arcana}[skill_bonus] ]]
  |Natureza, @{character_name} rola Natureza: [[ 1d20 + @{SEN} + @{skill_natureza}[skill_bonus] ]]

  |Adestramento, @{character_name} rola Adestramento: [[ 1d20 + @{PRE} + @{skill_adestramento}[skill_bonus] ]]
  |Cozinhar, @{character_name} rola Cozinhar: [[ 1d20 + @{PRE} + @{skill_cozinhar}[skill_bonus] ]]
  |Enganação, @{character_name} rola Enganação: [[ 1d20 + @{PRE} + @{skill_enganacao}[skill_bonus] ]]
  |Intimidação, @{character_name} rola Intimidação: [[ 1d20 + @{PRE} + @{skill_intimidacao}[skill_bonus] ]]
  |Persuasão, @{character_name} rola Persuasão: [[ 1d20 + @{PRE} + @{skill_persuasao}[skill_bonus] ]]
  |Performance, @{character_name} rola Performance: [[ 1d20 + @{PRE} + @{skill_performance}[skill_bonus] ]]
}
```
### resist_roll
```
?{Atributo
  |Força, @{character_name} rola um teste de resistência (STR) [[1d20+@{STR} + @{prof_STR}]]
  |Destreza, @{character_name} rola um teste de resistência (DEX) [[1d20+@{DEX} + @{prof_DEX}]]
  |Constituição, @{character_name} rola um teste de resistência (CON) [[1d20+@{CON} + @{prof_CON}]]
  |Inteligência, @{character_name} rola um teste de resistência (INT) [[1d20+@{INT} + @{prof_INT}]]
  |Sensibilidade, @{character_name} rola um teste de resistência (SEN) [[1d20+@{SEN} + @{prof_SEN}]]
  |Presença, @{character_name} rola um teste de resistência (PRE) [[1d20+@{PRE} + @{prof_PRE}]]
}
```
### initiative_roll
```
@{character_name} rola iniciativa com [[ 1d20 + @{DEX} + @{skill_iniciativa}[skill] &{tracker} ]]
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

### Defense Stuff
#### bonus_dodge
#### bonus_guard
#### bonus_defense

## Descanso
```
&{template:default} ?{Mantimentos|Nada (-3),-3|Pouco (2pr, -1),-1|Normal (5pr, +0),0|Bom (20pr, +1),1|Luxuoso (50pr, +2),2|Ostentado (150pr, +3),3} [[ [[ {-1, floor( ( [[ 1d20 + @{selected|CON_mod} + @{selected|skill_sobrevivencia}[bonus skill] + ?{Mantimentos}[Mantimentos] ]] - ?{CD Descanso} ) / 5), 2}kl2dl1 ]][-1=ruim, 0=normal, 1=boa, 2=otima] ]] {{name=Descanso (@{selected|character_name})}} {{Descrição=@{selected|character_name} descansa, e rola um $[[0]], contra a CD de ?{CD Descanso} }} {{Qualidade=$[[2]] [ruim](`#descanso-ruim)  [normal](`#descanso-normal)  [bom](`#descanso-bom)  [otimo](`#descanso-otimo) }} {{Regras= [referência](http://journal.roll20.net/handout/-NZd5wTONSKl6m59y0vk) }}
```

## Versão sem mantimentos
```
&{template:default} [[ [[ {-1, floor( ( [[ 1d20 + @{CON} + @{skill_sobrevivencia}[bonus skill] + @{rest_supplies} ]] - ?{CD Descanso} ) / 5), 2}kl2dl1 ]][-1=ruim, 0=normal, 1=boa, 2=otima] ]] {{name=Descanso (@&lbrace;character_name&rbrace;)}} {{Descrição=@{character_name} descansa, e rola um $[[1]], contra a CD de ?{CD Descanso} }} {{Qualidade=$[[3]] [ruim](`[[ ?{CD Descanso}[CD Descanso] ]] @&lbrace;@{character_name}|rest_level_minus_1&rbrace;) [normal](`@&lbrace;@{character_name}|rest_level_0&rbrace;) [boa](`@&lbrace;@{character_name}|rest_level_1&rbrace;) [ótima](`@&lbrace;@{character_name}|rest_level_2&rbrace;) }} {{Regras= [referência](@{rest_rules_link}) }}
```

## Resultado por qualidade
### Ruim
```
&{template:default} {{name=Descanso (@{selected|character_name})}} {{Qualidade=Ruim}} {{MP=  [[ [[ceil(@{selected|level}/2)]][lv/2] ]] MP recuperado}} {{Descrição=@{selected|character_name} descansa, e apesar de uma noite mal dormida ainda consegue se recuperar um pouco.}} {{Exaustão= Faça um [**teste de resistência**](`@{selected|token_name} rola um teste de resistência (CON) [[ 1d20+@{selected|CON_mod} + @{selected|prof_CON} ]] ) contra a CD do descanso. Se falhar, ganha +1 nível de exaustão, +1 para cada 5 abaixo da CD.}}  
```

### Normal
```
&{template:default} {{name=Descanso (@{selected|character_name})}} {{Qualidade=Normal}} {{HP=  [[ [[ceil(@{selected|level}/2)]][lv/2] ]] HP recuperado}} {{MP=  [[ [[ceil(@{selected|level})]][lv] ]] MP recuperado}} {{Exaustão=Recupera de 1 nível de exaustão, se tiver}}
```

### Boa
```
&{template:default} {{name=Descanso (@{selected|character_name})}} {{Qualidade=Boa}} {{HP=  [[ [[ceil(@{selected|level})]][lv] ]] HP recuperado}} {{MP=  [[ [[ceil(@{selected|level}*2)]][2*lv] ]] MP recuperado}} {{Exaustão=Recupera de 2 níveis de exaustão, se tiver}}
```

### Ótima
```
&{template:default} {{name=Descanso (@{selected|character_name})}} {{Qualidade=Ótima}} {{HP=  [[ [[ceil(@{selected|level}*2)]][2*lv] ]] HP recuperado}} {{MP=  [[ [[ceil(@{selected|level}*3)]][3*lv] ]] MP recuperado}} {{Exaustão=Recupera de 2 níveis de exaustão, se tiver}}
```


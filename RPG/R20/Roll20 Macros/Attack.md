```Roll20
&{template:default} {{name=Test Attack}} {{acerto=[[ 1d20+@{selected_token|STR}+@{selected_token|proficiency}]]}} {{dano=[[ @{selected_token|weapon_dmg} + @{selected_token|STR} ]]}}
```

```
acerto: [[1d20cs>15]]. deu crit? $[[0]]. Crit dmg: [[$[[0]]d8]]
```

```
crit dmg: [[ [[floor([[1d20cs>10]]/10) * (3-1)]]d6 ]]. Dano normal: [[  1d6 ]]. acerto: $[[0]]. deu crit? $[[1]]
```

testar `[[ [[1+1]]d6 ]]`

```
/w gm crit dmg: [[ ([[floor([[1d20cs>10]]/10)]] * (3-1)*2)d6 ]]. Dano normal: [[  1d6 ]]. acerto: $[[0]]. deu crit? $[[1]]. dano total: ($[[2]]+$[[3]])
```

```
/w gm dano (crit + normal): [[ (( [[floor([[1d20cs>[[20-@{PC Template|wpn_margin}]] ]]/(20-@{PC Template|wpn_margin}))]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} ]]. acerto: $[[1]].
```

```
/w gm dano (crit + normal): [[ (( [[ceil(floor([[1d20cs>[[20-@{PC Template|wpn_margin}]] ]]/(20-@{PC Template|wpn_margin}))/100)]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} ]]. acerto: $[[1]]. is crit: $[[2]]
```

```
/w gm dano (crit + normal): [[ (( [[ceil(floor([[1d20cs>[[20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}]] + @{PC Template|STR} + @{PC Template|proficiency}]]/(20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}))/100)]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} ]]. acerto: $[[1]]. is crit: $[[2]]
```

```
/w gm dano (crit + normal): [[ (( [[ceil(floor([[1d20cs>[[20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}]] + @{PC Template|STR} + @{PC Template|proficiency}]]/(20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}))/100)]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} + @{PC Template|STR} ]]. acerto: $[[1]]. is crit? $[[2]]
```


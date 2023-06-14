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
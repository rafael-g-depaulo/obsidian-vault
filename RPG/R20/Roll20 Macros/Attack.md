## Global Macros

## Character Attack Skill
```
&{template:default} {{name=Ataque (@{chatacter_name})}} #attack-STR {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

### Attack-STR
```
[[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR}[STR] + @{selected|proficiency}[prof]]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR}[STR] ]]
```






 ?{Golpe Poderoso?|Não,|1PM (+1d10+@{STR}),{{Golpe Poderoso=[[1d10+@{STR}[STR]]]}}} 
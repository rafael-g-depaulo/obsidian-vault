Default (STR)
```
/w gm &{template:default} {{name=@{selected|token_name} ataque (STR)}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR} + @{selected|proficiency}]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

Default (DEX)
```
/w gm &{template:default} {{name=@{selected|token_name} ataque (DEX)}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|DEX} + @{selected|proficiency}]]/(20-@{selected|wpn_margin} + @{selected|DEX} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|DEX} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

Sneak Attack (by default):
```
&{template:default} {{name=ataque com skill}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR} + @{selected|proficiency}]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} {{ataque furtivo=[[?{Dice|0PM (2d6), 2d6|1PM (3d6), 3d6}]]}}
```

Optional Skill:
```
&{template:default} {{name=ataque com skill}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR} + @{selected|proficiency}]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} ?{Golpe Poderoso?|Não,|1PM (+1d8+FOR),{{Golpe Poderoso=[[1d8+@{selected|STR}]]}}}
```
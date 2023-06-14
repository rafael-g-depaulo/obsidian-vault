```
/w gm &{template:default} {{name=ataque}} [[ (( [[ceil(floor([[1d20cs>[[20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}]] + @{PC Template|STR} + @{PC Template|proficiency}]]/(20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}))/100)]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} + @{PC Template|STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

Sneak Attack (by default):
```
/w gm &{template:default} {{name=ataque com skill}} [[ (( [[ceil(floor([[1d20cs>[[20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}]] + @{PC Template|STR} + @{PC Template|proficiency}]]/(20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}))/100)]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} + @{PC Template|STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} {{ataque furtivo=[[?{Dice|0PM (2d6), 2d6|1PM (3d6), 3d6}]]}}
```

Optional Skill:
```
/w gm &{template:default} {{name=ataque com skill}} [[ (( [[ceil(floor([[1d20cs>[[20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}]] + @{PC Template|STR} + @{PC Template|proficiency}]]/(20-@{PC Template|wpn_margin} + @{PC Template|STR} + @{PC Template|proficiency}))/100)]]*(@{PC Template|wpn_mult}-1) + 1) * @{PC Template|wpn_dice})@{PC Template|wpn_dmg} + @{PC Template|STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} ?{Golpe Poderoso?|Não,|1PM (+1d8+FOR),{{Golpe Poderoso=[[1d8+@{PC Template|STR}]]}}}
```
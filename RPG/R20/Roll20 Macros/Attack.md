Custom
```
&{template:default} {{name=Ataque Custom}} [[ (( [[ceil(floor([[1d20cs>[[?{critico|20}]] + ?{bonus acerto|0}]]/(?{critico} + ?{bonus acerto} ))/100)]]*(?{multiplicador de crítico|2}-1) + 1) * ?{quantidade de dados de dano|1})?{dado de dano|d4,d4|d6,d6|d8,d8|d10,d10|d12,d12} + ?{dano bonus|0} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

Default (STR)
```
&{template:default} {{name=@{selected|token_name} ataque (STR)}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR}[STR] + @{selected|proficiency}[prof]]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR}[STR] ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

Default (DEX)
```
&{template:default} {{name=@{selected|token_name} ataque (DEX)}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|DEX}[DEX] + @{selected|proficiency}[prof]]]/(20-@{selected|wpn_margin} + @{selected|DEX} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|DEX}[DEX] ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

Sneak Attack (by default):
```
&{template:default} {{name=ataque com skill}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR}[STR] + @{selected|proficiency}[prof]]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR}[STR] ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} {{ataque furtivo=[[?{Dice|0PM (2d6), 2d6|1PM (3d6), 3d6}]]}}
```

Optional Skill:
```
&{template:default} {{name=ataque com skill}} [[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR}[STR] + @{selected|proficiency}[prof]]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR}[STR] ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} ?{Golpe Poderoso?|Não,|1PM (+1d8+FOR),{{Golpe Poderoso=[[1d8+@{selected|STR}]]}}}
```

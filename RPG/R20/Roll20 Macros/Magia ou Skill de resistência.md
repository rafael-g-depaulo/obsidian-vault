TODO

```
/w gm &{template:default} {{name=Syril Maça}} [[ (( [[ceil(floor([[1d20cs>[[20-@{wpn_margin}]] + @{STR}[STR] + @{proficiency}[prof]]]/(20-@{wpn_margin} + @{STR} + @{proficiency}))/100)]]*(@{wpn_mult}-1) + 1) * @{wpn_dice})@{wpn_dmg} + @{STR}[STR] ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }}
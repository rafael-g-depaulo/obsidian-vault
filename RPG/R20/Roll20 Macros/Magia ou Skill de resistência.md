TODO

```
/w gm &{template:default} {{name=Kaiser: Lança}} [[ (( [[ceil(floor([[1d20cs>[[20-@{wpn_margin}]] + @{STR} + @{proficiency}]]/(20-@{wpn_margin} + @{STR} + @{proficiency}))/100)]]*(@{wpn_mult}-1) + 1) * @{wpn_dice})@{wpn_dmg} + @{STR} ]]. {{acerto= $[[1]] }} {{dano=$[[3]] }} ?{Golpe Poderoso?|Não,|1PM (+1d10+FOR),{{Golpe Poderoso=[[1d10+@{STR}]]}}}
## Global Macros
```
[[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_crit_margin}]] + @{selected|attack_bonus}]]/(20-@{selected|wpn_crit_margin} + @{selected|attack_bonus}))/100)]]*(@{selected|wpn_crit_mult}-1) + 1) * @{selected|wpn_amt_dice})@{selected|wpn_dmg_dice} + @{selected|dmg_bonus} ]]
```
OBS: this needs `attack_bonus` and `dmg_bonus` properties to exist.

## Character Attack Skill
```
&{template:default} {{name=Ataque (@{character_name})}} #attack-STR {{acerto= $[[1]] }} {{dano=$[[3]] }}
```

### Attack-STR
```
[[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_margin}]] + @{selected|STR}[STR] + @{selected|proficiency}[prof]]]/(20-@{selected|wpn_margin} + @{selected|STR} + @{selected|proficiency}))/100)]]*(@{selected|wpn_mult}-1) + 1) * @{selected|wpn_dice})@{selected|wpn_dmg} + @{selected|STR}[STR] ]]
```

## Global Macros
### Main Attack
```
[[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_crit_margin}]] + @{selected|attack_bonus}]]/(20-@{selected|wpn_crit_margin} + @{selected|attack_bonus}))/100)]]*(@{selected|wpn_crit_mult}-1) + 1) * @{selected|wpn_amt_dice})@{selected|wpn_dmg_dice} + @{selected|dmg_bonus} ]]
```
OBS: this needs `attack_bonus` and `dmg_bonus` attributes to exist.
### Secondary Attack
```
[[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_2_crit_margin}]] + @{selected|attack_2_bonus}]]/(20-@{selected|wpn_2_crit_margin} + @{selected|attack_2_bonus}))/100)]]*(@{selected|wpn_2_crit_mult}-1) + 1) * @{selected|wpn_2_amt_dice})@{selected|wpn_2_dmg_dice} + @{selected|dmg_2_bonus} ]]
```
OBS: this needs `attack_bonus` and `dmg_bonus` attributes to exist.

## Character Attributes
### attack_attb
```
@{STR_mod}
```
### attack_bonus
```
@{attack_attb} + @{proficiency}
```
### dmg_bonus
```
@{attack_attb}
```
### attack_roll
```
[[ @{wpn_amt_dice}@{wpn_dmg_dice}[base] + @{dmg_bonus} + ([[ceil(floor([[1d20cs>@{wpn_crit_range} + @{attack_bonus}]]/(@{wpn_crit_range} + @{attack_bonus}))/1000)]]*(@{wpn_crit_mult} - 1) * @{wpn_amt_dice})@{wpn_dmg_dice}[crit] ]]
```
## Character Attack Skill
```
&{template:default} {{name=Ataque (@{character_name})}} #attack {{acerto= $[[2]] }} {{dano=$[[5]] }}
```

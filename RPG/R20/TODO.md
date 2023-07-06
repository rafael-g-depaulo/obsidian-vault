- [ ] think up counterspell (you can counterspell as a prepared action with a spell with at least 1 tag in common. there's a feat to be able to do it as a reaction)
- [ ] add size rules
- [ ] new spells
	- [ ] Add healing spirit
	- [ ] addapt [dust devil](https://5e.tools/spells.html#dust%20devil_xge,flstlevel:2=1,floplevel:extend,flstdamage%20type:acid=1~bludgeoning=1~cold=1~fire=1~force=1~lightning=1~necrotic=1~piercing=1~poison=1~psychic=1~radiant=1~slashing=1~thunder=1,flopdamage%20type:extend)(a lot of cool stuff there)
	- [ ] add [dragon's breath](https://5e.tools/spells.html#dragon's%20breath_xge,flstlevel:2=1,floplevel:extend,flstdamage%20type:acid=1~bludgeoning=1~cold=1~fire=1~force=1~lightning=1~necrotic=1~piercing=1~poison=1~psychic=1~radiant=1~slashing=1~thunder=1,flopdamage%20type:extend)
- [ ] Item improvement system (buff martials)
- [ ] starting equipment
- [ ] casting equipment (buff casters)
- [ ] make crafting recipes necessary
- [ ] add eclético from bardo t20 ass specialist feat
- [ ] add rule to max FP cost of miracles

```
&{template:default} {{name=Toque Chocante}}  [[ (( [[ceil(floor([[1d20cs>[[20-0]] + @{SEN}[SEN] + @{proficiency}[prof]]]/(20-0 + @{SEN}[SEN] + @{proficiency}))/100)]]*(2-1) + 1) * (?{Dano|2d8+2,2|3d8+3 (+1PM),3|4d8+4 (+2PM),4|5d8+5 (+3PM),5}))d8 + ?{Dano}]]  [[ (( [[ceil(floor([[1d20cs>[[20-@{wpn_margin}]] + @{STR}[STR] + @{proficiency}[prof]]]/(20-@{wpn_margin} + @{STR}[STR] + @{proficiency}))/100)]]*(@{wpn_mult}-1) + 1) * @{wpn_dice})@{wpn_dmg} ]] [[?{Dano}d8 + ?{Dano}]] ?{Ataque Mágico ou Ataque Físico?|Mágico, {{acerto=$[[1]]&rbrace;&rbrace; {{dano=$[[3]]&rbrace;&rbrace;| Físico (+2PM), {{acerto=$[[5]]&rbrace;&rbrace; {{dano mágico=$[[6]]&rbrace;&rbrace; {{dano físico=$[[8]]&rbrace;&rbrace; }
```


```
[[ (( [[ceil(floor([[1d20cs>[[20-@{selected|wpn_crit_margin}]] + @{selected|attack_bonus}]]/(20-@{selected|wpn_crit_margin} + @{selected|attack_bonus}))/100)]]*(@{selected|wpn_crit_mult}-1) + 1) * @{selected|wpn_amt_dice})@{selected|wpn_dmg_dice} + @{selected|dmg_bonus} ]]
```
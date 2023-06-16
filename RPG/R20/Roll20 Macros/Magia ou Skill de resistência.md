TODO

```
/w gm &{template:default} {{name=Toque Chocante}} ?{Ataque Mágico ou Ataque Físico?|Mágico, [[ (( [[ceil(floor([[1d20cs>[[20-0]] + @{Syril}[SEN] + @{Syril Quoorin|proficiency}[prof]]]/(20-0 + @{Syril Quoorin}[SEN] + @{Syril Quoorin|proficiency}))/100)]]*(2-1) + 1) * ?{Dano|2d8+2,2|3d8+3 (+1PM),3|4d8+4 (+2PM),4|5d8+5 (+3PM), 4})d8 + ?{Dano}]] {{TESTE=$[[1]]&rbrace;&rbrace;| Físico (+2PM), {{físico=asdasd&rbrace;&rbrace;}


/w gm &{template:default} {{name=Toque Chocante}} ?{Ataque Mágico ou Ataque Físico?|Mágico, [[ (( [[ceil(floor([[1d20cs>[[20-0]] + @{SEN}[SEN] + @{proficiency}[prof]]]/(20-0 + @{SEN}[SEN] + @{proficiency}))/100)]]*(2-1) + 1) * (?{Dano&#124;2d8+2&#44;2&#124;3d8+3 (+1PM)&#44;3&#124;4d8+4 (+2PM)&#44;4&#124;5d8+5 (+3PM)&#44;5&rbrace;))d8 + ?{Dano&rbrace;]] {{acerto=$[[1]]&rbrace;&rbrace; {{dano=$[[3]]&rbrace;&rbrace;| Físico (+2PM), {{físico=FALTA IMPLEMENTAR&rbrace;&rbrace;}

/w gm &{template:default} {{name=Toque Chocante}}  [[ [[ (( [[ceil(floor([[1d20cs>[[20-0]] + @{SEN}[SEN] + @{proficiency}[prof]]]/(20-0 + @{SEN}[SEN] + @{proficiency}))/100)]]*(2-1) + 1) * (?{Dano|2d8+2,2|3d8+3 (+1PM),3|4d8+4 (+2PM),4|5d8+5 (+3PM),5&rbrace;))d8 + ?{Dano&rbrace;]]  [[ (( [[ceil(floor([[1d20cs>[[20-0]] + @{SEN}[SEN] + @{proficiency}[prof]]]/(20-0 + @{SEN}[SEN] + @{proficiency}))/100)]]*(2-1) + 1) * (?{Dano|2d8+2,2|3d8+3 (+1PM),3|4d8+4 (+2PM),4|5d8+5 (+3PM),5&rbrace;))d12 ]] ]] ?{Ataque Mágico ou Ataque Físico?|Mágico, {{acerto=$[[1]]&rbrace;&rbrace; {{dano=$[[3]]&rbrace;&rbrace;| Físico (+2PM), {{físico=$[[0]]&rbrace;&rbrace; {{teste=$[[4]]&rbrace;&rbrace; }

```
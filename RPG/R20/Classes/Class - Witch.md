{{class-definition "Witch"
ARCHETYPE: Caster
EQUIPMENT_PROFICIENCIES: NONE
SAVES:
- PRE
- CON
MP_ATTB: PRE
SPELLCASTING_ATTB: PRE

FEATURES:
| LEVEL | FEATURE       |
| ----- | ------------- |
| 1     | Hex           |
| 2     | Witch's Focus | 

MULTI_FEATURES:
| Level | Witch's Focus |
| ----- | ------------- |
| 1st   | -             |
| 2nd   | 2             |
| 3rd   | 2             |
| 4th   | 2             |
| 5th   | 2             |
| 6th   | 3             |
| 7th   | 3             |
| 8th   | 3             |
| 9th   | 3             |
| 10th  | 4             |
| 11th  | 4             |
| 12th  | 4             |
| 13th  | 4             |
| 14th  | 5             |
| 15th  | 5             |
| 16th  | 5             |
| 17th  | 5             |
| 18th  | 5             |
| 19th  | 5             |
| 20th  | 5             |
}}

**Hex**. Hexes are concentration spell-like abilities. At level 1 you learn one Hex from the Witch's Hex List, and learn a new one every 4 levels.

**Witch's Focus.** With your experience (and particular focus) in long term curses and boons, you can focus on many ongoing magical effects at once. You can concentrate on 2 effects at once instead of 1. This increases by 1 when you reach 6th, 10th and 14th level, respectively. (OBS: _you still need to pay 1PM/turn for each effect you're concentrating on_).

### Witch Feats

Beginning at level 2, every time you gain a level in Witch you gain a Witch Feat. You may instead of a Witch feat take a Caster or General Feat of your choice.

- **Focused Cantrip**. Your damaging cantrips do an extra die of damage per effect you're concentrating on.

- **Scary Look.** (2PM) Action: A creature you can see rolls a Presence saving throw against your Spell DC. If they fail, they are frightened of you until the end of the scene (See: _Condition: frightened_). At every 4th level you can spend +2PM to increase the DC by 2.

- **NAME HERE.** Scary Look now targets a number of creatures of your choice equal to 1 + your Presence modifier (min 1).

- **NAME HERE.** Scary Look now makes target scared of all your allies. 13th level minimum.

- **Cantrip asdaf.** Your cantrips have +1 to their DC, and +1 for every effect you're concentrating on.

- **NAME HERE.** Advantage on CON saves to keep concentration if the save was triggered by someone affected by your Hex or Scary Look.

- **Distant Hex.** (while casting a Hex) +1PM: to double it's range.

- **Multi-Hex.** (while casting a Hex) +3PM: target an additional creature when you cast a Hex. 8th level witch.
{{page-break}}
- **Cursed Knowledge.** learn 2 hexes.

- **Tricky Spell**. (while casting a Spell) +2PM: Be able to change what attribute the target uses for a save. Pre-requisite: 10th level witch

{{dev-comment
Witche's brews.

diferenças entre isso e coisas do alquimista:
- availability
	- alquimista pode criar na hora
	- bruxa pode comprar um número por dia
- aplicação
	- alquimista pode aplicar nos outros
	- bruxa tem que dar e a pessoa tomar
- efeitos
	- bruxa só são imediatos ou duram 1 turno
	- alquimista tem coisas com duração cena
- acesso
	- bruxa tem que comprar poderes pra poder começar a distribuir
	- alquimista tem default
}}

{{class-note "Poções Misteriosas"
Algumas bruxas conseguem produzir as chamadas "poções misteriosas". Uma criatura em posse de uma poção pode beber ela como uma ação de movimento. Ao tomar uma poção misteriosa, role 2d4 e aplique um efeito primário e secundário das tabelas abaixo, que duram pela cena. Ao tomar uma nova poção misteriosa, o efeito da anterior é removido.

##### Efeitos Exotéricos

| Efeito Primário                       | 1d4 |
|:------------------------------------- |:---:|
| Recebe 2d6 cura                       |  1  |
| Recebe 2d4 MP temporário              |  2  |
| +PRE rolagens de resistência e defesa |  3  |
| +PRE velocidade de movimento e ataque |  4  |

| Efeito Secundário                      | 1d4 |
|:-------------------------------------- |:---:|
| Sofre 1d4 dano                         |  1  |
| Desvantagem em rolagens por uma rodada |  2  |
| Perde próxima ação de movimento        |  3  |
| Fica cego por 1 rodada\*               |  4  |

**\*:** uma criatura pode gastar 1 ação para limpar os olhos de uma criatura cega por esse efeito. Tomar dano também quebra esse efeito.
}}

- **poder poção misteriosa 1.** Ao final de cada descanso, ou durante tempo livre você pode escolher produzir um número de poções misteriosas, limitado pelo seu nível de Bruxa. Para cada poção produzida, 1PM e 15min de trabalho com um caldeirão são gastos. Poções misteriosas são muito voláteis, e perdem seu efeito completamente depois de 24h. 

- **poder poção misteriosa 2.** +1PM pra +1 efeito positivo +1 efeito negativo.

- **poder poção misteriosa 3.** +1PM pra -1 efeito negativo.

- **poder poção misteriosa 4.** Todo mundo pode fazer Ação: tomar até 1+PRE poções.

- **poder poção misteriosa 5.** (alguém toma sua poção) reação: re-rola os efeitos.

{{dev-comment
possible changes to witch's brews:
- negative effects
	- lower initiative
	- lose crit damage
}}

### Hex List:

A witch's Hex is an inescapable effect. While you concentrate on it, the target cannot get rid of the hex.

By default, a Hex takes a movement action to cast, has a range of 9sqr, costs 0PM and targets one creature you can see. You can change the target of your Hex for free if the original dies.

Most Hexes also gain an additional effect for each other effect you're concentrating on.

- **Hex: Ossos de gesso.** The target has -1 Defense, and -1 for each other effect you're concentrating on. *Descrição:* As extremidades do alvo começam a tremer, ele fica pálido e perde o foco.

- **Hex: Sangue de seiva.** Your first ally each turn that hits the target recovers (your Presence mod.) HP, +1 for each other effect you're concentrating on. *Descrição:* O alvo fica desidratado e fraco, como se alguém estivesse espremendo a vida dele. Um líquido branco, doce e cheiroso é jorrado das suas feridas recentes junto com sangue, o que rejuvenesce o causador da ferida.

- **Hex: Anemia Arcana.** The target has -1 to all of their saving throws, -1 for each other effect you're concentrating on. O alvo fica com profundas e escuras olheiras, seus músculos desinflam e suas juntas rangem com cada movimento tortuoso.

- **Hex: Suor de Slime.** The target has their movement speed halved. *Descrição:* A pele do alvo começa a secretar um pus verde fedido que atrapalha o movimento das suas pernas, e faz com que se mova de forma desajeitada.

- **Hex: Pele de Palha.** Your first ally each turn that hits the target deals an extra 1d6 damage, +1d6 for each other effect you're concentrating on. *Descrição:* a pele do alvo seca e racha, revelando sua vulnerável e vermelha carne viva.

## Witch's Brews

Spell List:

{{spell-list
INCLUDE_TAGS:
	- occult
	- wild
	- ilusion
	- boost
	- recovery
	- trickery
EXCLUDE_TAGS:
	- holy
	- warmagic
}}


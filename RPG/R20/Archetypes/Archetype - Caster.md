## Caster
A Caster's main strength is variety, versatility and the raw power of their spells.

### Hit Points (HP) & Mana Points (MP)
A Caster's maximum HP and MP are calculated as such:
- **HP at 1st Level:** 8 + their Constitution modifier
- **MP at 1st Level:** 6 + their spellcasting attribute modifier
- **HP gain per level after 1st:** 2 + their Constitution modifier
- **MP gain per level after 1st:** 6

### Attribute Score Increase
- **Gains ASI at levels:** 4, 8, 12, 16, 19. (5 Total)

### Feats
A Caster has access to all Caster Feats.

### Spells
- **Prepared Spells**: After every rest, a Caster choses up to half (rounded up) of their spells. Those are considered prepared, and they may only cast those spells until their next rest. If a Caster tries to cast a spell they know but have not memorized, they must pass an Arcana Check (DC 20 + the spell's MP cost). On a fail, they spend the MP and the casting time, but the skill fails.
- **Cantrips**: Casters can learn cantrips (0 MP cost spells)
- **Known Spells**: A Caster knows 3 spells at lv1, and learns a new spell every level after that. Whenever they learn a new spell, the spell's circle can't exceed the value in the table below:

##### Caster maximum spell circle per Level
| Level | Spell's Circle |     |
| :---: | :------------: | --- |
|  1-2  |       1        |     |
|  3-4  |       2        |     |
|  5-6  |       3        |     |
|  7-8  |       4        |     |
| 9-10  |       5        |     |
| 11-12 |       6        |     |
| 13-14 |       7        |     |
| 15-16 |       8        |     |
| 17-20 |       9        |     |

{{define-archetype "Caster"
HP_LV1: 8
HP_LV: 2
MP_LV: 6
ASI_LEVELS: 4, 8, 12, 16, 19
SPECIALIZATION_LEVELS: 2, 6
HAS_MAGIC: true

FEATURES:

| LEVEL | FEATURE         | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                     |
| ----- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Magia Preparada | Você pode lançar magias dessa classe. No final de cada descanso, escolha metade (arredondado pra cima) das suas magias dessa classe. Você tem essas magias preparadas até o próximo descanso.<br><br>Lançar uma magia não-preparada exige uma rolagem de Arcana de CD 10+Círculo da Magia (em uma falha, você gasta os custos da magia mas ela não tem efeito). |
| 1     | Magia Aprendida | Você pode aprender magias a partir de **Pergaminhos Mágicos** (ver: [[Spell Scrolls#Spell Scrolls]])                                                                                                                                                                                                                                                            |

MULTI_FEATURES:

| Level | Spells Known | Max Spell Circle |
| ----- |:------------:|:----------------:|
| 1st   |      3       |        1         |
| 2nd   |      4       |        1         |
| 3rd   |      5       |        2         |
| 4th   |      6       |        2         |
| 5th   |      7       |        3         |
| 6th   |      8       |        3         |
| 7th   |      9       |        4         |
| 8th   |      10      |        4         |
| 9th   |      11      |        5         |
| 10th  |      12      |        5         |
| 11th  |      13      |        6         |
| 12th  |      14      |        6         |
| 13th  |      15      |        7         |
| 14th  |      16      |        7         |
| 15th  |      17      |        8         |
| 16th  |      18      |        8         |
| 17th  |      19      |        9         |
| 18th  |      20      |        9         |
| 19th  |      21      |        9         |
| 20th  |      22      |        9         |
}}

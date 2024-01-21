## Off-Caster
An Off-Caster is a mixed-art fighter that dominates the battlefield. Their mix of physical attacks and versatile skills are sure to give them a considerable edge over most opponents.

### Hit Points (HP) & Mana Points (MP)
A Half-Caster's maximum HP and MP are calculated as such:
- **HP at 1st Level:** 14 + their Constitution modifier
- **MP at 1st Level:** 4 + their spellcasting attribute modifier
- **HP gain per level after 1st:** 3 + their Constitution modifier
- **MP gain per level after 1st:** 4

### Attribute Score Increase
- **Gains ASI at levels:** 4, 8, 10, 12, 14, 17. (6 Total)

### Feats
An off-caster has access to all Caster Feats and all Matial Featst.

### Attacks
- **Simple Weapon Proficiency**: An Off-Caster character has proficiency with Simple Weapons
- **Attack of Oportunity:** An Off-Caster Character tha reaches level 5 is able to perform [[Combat Actions#Attack of Opportunity]].
- **Extra Attack**: An Off-Caster Character that reaches level 7 can attack 2 times on their turn when they use the attack action.

### Spells
- **Innate Knowledge**: An Off-Caster always has all of their spells prepared at all times.
- **No Cantrips**: An Off-Caster can't learn cantrips (0 MP cost spells) {{page-break}}
- **Known Spells**: An Off-Caster starts with 1 known spell, and learns a new spell every at every even level. Whenever they learn a new spell, the spell's circle can't exceed the value in the table below:

##### Off Caster maximum spell circle per Level
| Level | Spell's Circle |
|:-----:|:--------------:|
|  1-4  |       1        |
|  5-7  |       2        |
| 8-10  |       3        |
| 11-12 |       4        |
| 13-14 |       5        |
| 15-16 |       6        |
| 17-20 |       7        |


{{define-archetype "Off-Caster"
HP_LV1: 14
HP_LV: 3
MP_LV: 4
ASI_LEVELS: 4, 8, 10, 12, 14, 17
SPECIALIZATION_LEVELS: 3, 6
HAS_MAGIC: true

FEATURES:

| LEVEL | FEATURE |  |
| ---- | ---- | ---- |
| 1 | Magia Inata | Você pode lançar magias dessa classe. Você não pode aprender Truques (magias de 0º Círculo). |
| 5 | Attack of Opportunity | (um inimigo sai da sua área de alcance corpo-a-corpo) Reação: Faça um ataque corpo-a-corpo contra o inimigo. |
| 7 | Extra Attack | Ao tomar a ação Atacar (ver [[Combat Actions]]), você pode fazer 2 ataques em vez de 1. |

MULTI_FEATURES:

| Level | Spells Known | Max Spell Circle |
| ----- |:------------:|:----------------:|
| 1st   |      1       |        1         |
| 2nd   |      2       |        1         |
| 3rd   |      2       |        1         |
| 4th   |      3       |        1         |
| 5th   |      3       |        2         |
| 6th   |      4       |        2         |
| 7th   |      4       |        2         |
| 8th   |      5       |        3         |
| 9th   |      5       |        3         |
| 10th  |      6       |        3         |
| 11th  |      6       |        4         |
| 12th  |      7       |        4         |
| 13th  |      7       |        5         |
| 14th  |      8       |        5         |
| 15th  |      8       |        6         |
| 16th  |      9       |        6         |
| 17th  |      9       |        7         |
| 18th  |      10      |        7         |
| 19th  |      10      |        7         |
| 20th  |      11      |        7         |
}}

%% this file is the root used by the scripts to compile markdown into a single file. all files linked will be recursively imported by order %%

{{frontCover}}


{{logo ![](/assets/naturalCritLogoRed.svg)}}

# R20
## Sistema Completo compatível com D&D 5e
___

{{banner HOMEBREW}}

%%
{{footnote
  In a land of corruption, two cyberneticists and a dungeon delver search for freedom.
}}
%%

![background image](https://i.imgur.com/IwHRrbF.jpg){position:absolute,bottom:0,left:0,height:100%}

\page

<style>
.page#p1{ text-align:center; counter-increment: none; }
.page#p1:after{ display:none; }
.page:nth-child(2n) .pageNumber { left: inherit !important; right: 2px !important; }
.page:nth-child(2n+1) .pageNumber { right: inherit !important; left: 2px !important; }
.page:nth-child(2n)::after { transform: scaleX(1); }
.page:nth-child(2n+1)::after { transform: scaleX(-1); }
.page:nth-child(2n) .footnote { left: inherit; text-align: right; }
.page:nth-child(2n+1) .footnote { left: 80px; text-align: left; }

.spell-tags {
	color: #ed4512;
	font-family: 'Open Sans';
	font-size: 0.8rem;
	font-weight: 600;
	margin-top: 0rem !important;
	margin-bottom: 0.25rem;
}
</style>

{{margin-top:225px}}

# R20

{{margin-top:25px}}

{{wide
##### A fantasy TTRPG system strong on character design options and customization, with a special focus on meaningful, strategical battles big and small based on resource management.
}}


{{summary}}

# Attributes

## Description
### Physical Attributes
These are primarily responsible in determining a character's physical capabilities.

**Strength**: direct physical power and athelitic prowess.

**Dexterity**: agility.

**Constituition**: endurance.

### Mental Attributes

**Intelligence**: reasoning. memory.

**Sensibility**: perceiving, receiving and understanding. empathy, perception, getting a gut feeling, attuning to a magic item, reading an "aura", stuff like that.

**Presence**: imposing your will, intimidating, convincing, deceiving, manipulating, communicating your intentions, getting others to understand you, manifesting an "aura", stuff like that.

## Determining Base Attribute Scores
### Rolling (discouraged)
I don't recommend this because it has a lot of variance and has a really high average. this system gives characters way more ways to increase their attributes as they level, so a stat rolling system that works well for D&D or T20 isn't really well suited for this. Example: a T20 character is expected to increase their attribute scores by ~6 in 16 levels, a D&D character by about ~6 also, and a character in this system by 8-10.

Buuut... if you really want to do it, I recommend using either a "8, 16 and 4 times 3d6", or a "6 times 3d6, repeat until modifier total is >=3"

### Score buy
You have 27 points to spend on your ability scores. The cost is shown in the table below.

##### Score buy

| Score | Cost |
|:-----:|:-----|
| 8     | 0    |
| 9     | 1    |
| 10    | 2    |
| 11    | 3    |
| 12    | 4    |
| 13    | 5    |
| 14    | 7    |
| 15    | 9    |

### Standard array
15, 14, 13, 12, 10, 8

## Modifiers

##### Attribute score modifiers

| Score | Modifier | Score | Modifier |
|:-----:|:---------|:-----:|:---------|
| 1     | -5       | 16-17 | +3       |
| 2-3   | -4       | 18-19 | +4       |
| 4-5   | -3       | 20-21 | +5       |
| 6-7   | -2       | 22-23 | +6       |
| 8-9   | -1       | 24-25 | +7       |
| 10-11 | +0       | 26-27 | +8       |
| 12-13 | +1       | 28-29 | +9       |
| 14-15 | +2       | 30+   | +10      |

## Effects
Besides skill checks, attacks, ability and spell DCs and other class features, most Attributes also have other effects for your character.

**Strength**: Your movement speed is increased by 5ft (1 square) times your strength modifier.

**Dexterity**: Your Dodge is increased by your dexterity modifier (see: Attack rolls, Defense and save DCs).

**Constituition**: Your maximum HP gain each time you level up is X + your constituition modifier, where X is determined by your class' archetype (see: Archetypes). Your Guard is increased by your constituition modifier  (see: Attack rolls, Defense and save DCs).

**Intelligence**: You know a number of aditional languages equal to your intelligence modifier. You gain extra skill proficiency points every level up equal to your intelligence modifier.

**Sensibility**: *nothing yet*

**Presence**: *nothing yet*


# Skills & Skill Checks

## Skills:
blablabla do this intro paragraph later.

Description of skills below:

%%
## Considerando
Jogar Arcana para INT e adicionar misticismo (separar "vibe" de conhecimento)
%%

## Skills by Attributes
### Str
#### Atletismo / Athletics
### Dex
#### Acrobacia / Acrobatics
#### Iniciativa / Initiative
#### Furtividade / Stealth
#### Ladinagem / Sleight of Hand
### Con
#### Sobrevivência / Survival
### Int
#### Investigação / Investigation
#### Lógica / Logic
#### História / History
#### Medicina / Medicine
#### Religião / Religion
### Sen
#### Percepção / Perception
#### Empatia / Empathy
#### Intuição / Insight
#### Arcana / Arcana
#### Natureza / Nature
### Pre
#### Adestramento / Animal Handling
#### Cozinhar / Cooking
#### Enganação / Deception
#### Intimidação / Intimidation
#### Persuasão / Persuasion
#### Performance / Performance

## Skills by group
### Physical Stuff
#### Athletics (STR)
#### Acrobatics (DEX)
#### Initiative (DEX)

### Perceiving Stuff
#### Perception (SEN)
See sudden movements. look for something in the distance. react to something
#### Empathy (SEN)
Understand someone's motivations or feelings about a subject
#### Insight (SEN)
Spider Sense. feel energy. perceive magic. identify magical items.

### Convincing Others
#### Deception (PRE)
#### Intimidation (PRE)
#### Persuasion (PRE)
#### Performance (PRE)
While performance is used mainly for displays or artistic expression, it can also be used to roll for a character's ability to express their feelings/ideas/intentions.

### Finding/Remembering/Acquiring information
#### Investigation (INT)
look for something physically
#### Logic (INT)
#### History (INT)
#### Arcana (SEN)
Figuring out magic spells or items, understanding mystical beings.
#### Religion (INT)

{{page-break}}
### Production
Production skills are used mainly for crafting items (see: crafting). To perform it a character needs to use a set of tools for that specific trade. Tools cost 50g and can be acquired in most cities and villages. If attempting to make a roll without the respective tool, a character receives a -5 penalty to the roll.
#### Smithing (STR)
#### Alquemy (DEX)
#### Scribing (INT)
#### Herbalism (SEN)
#### Rune Crafting (PRE)

## Skill Checks
When a character makes a skill check, they roll against a pre-determined CR set by the DM. Their roll is determined as follows:

- **Skill Check:** 1d20 + Attribute Modifier + Skill Bonus

Where "Attribute Modifier" is the modifier to the character's corresponding main attribute of the skill (e.g. when rolling an Insight Skill Check a character with 17 SEN would use +3 as their Attribute Modifier). Skill Bonuses are explained below.

In rare circumstances the DM might ask for a different attribute to be used instead of the skill's normal one. Example: Intimidation through a show of force or visual display of apparent strength might use CON or STR as a substitute of PRE, if the DM agrees.

### Using a different attribute for a skill check

### Using a different skill for a skill check
Many situations allow for different ways for a character to achieve their goals, even if there is a "more common" or "easier" one. A character might want to melt away a locked mechanism with their Alchemist's tools instead of lockpicking it. Another might want to perform crazy stunts and roll acrobatics instead of performance to try to convince The Great Master Artist Cain Delarrouse™ that he should accept them as an apprentice dancer. A third one could try to roll intimidation instead of persuasion to let the guards in the post let them through, convincing them that it's not worth the trouble to get their asses beat for a random traveler just minding their business.

{{page-break}}
It's recommended that the DM encourage the player's creativity and ingenuity, and allow them to substitute a skill check (but not a saving throw!) for another one. The DM themselves can suggest it, but it's recommended to leave that to the player's initiative, instead of just presenting them with the option. When using a different skill than the original one for a check, the DM chooses how much more difficult the task or objective is with the new approach. Then consult the table below for adjusting the DC of the check for that character.

##### DC for using a different skill for a task

| Aditional Dificulty            | DC  |
| ------------------------------ | --- |
| about the same or a bit harder | +2  | 
| considerably harder            | +5  |

Whether the character is allowed to roll a different skill is always at the DM's discretion.

## Skill Bonus & Skill Points
When a character levels up they gain skill points, which they may distribute among their skills. These represent a character's growth, training and experience. A character starts with **5 + their Inteligence Modifier** skill points at level 1, and gains **2** every even levelup and **2 + their Inteligence Modifier** (min 2) every odd level up.

A character's skill bonus for any given skill can only reach up to the maximum defined in the following table.
##### Maximum Skill Bonus per level

| Level | Max Skill Bonus |
|:-----:|:---------------:|
|   1   |       +2        |
|   2   |       +3        |
|   3   |       +3        |
|   4   |       +4        |
|   5   |       +5        |
|   6   |       +5        |
|   7   |       +7        |
|   8   |       +7        |
|   9   |       +7        |
|  10   |       +9        |
|  11   |       +9        |
|  12   |       +9        |
|  13   |       +12       |
|  14   |       +12       |
|  15   |       +12       |
|  16   |       +15       |
|  17   |       +15       |
|  18   |       +15       |
|  19   |       +15       |
|  20   |       +15       |



## Passive Skill Rolls

A character's passive, neutral ability in a skill means that even when not actively trying, they succeed in all checks of DC smaller than or equal to:

- **8 + ATB + Bonus**, with ATB being their bonus with the relevant attribute, and Bonus being their proficiency in that skill.

Example: Ada, the Rogue, has 17 DEX and 4 points in stealth. Her passive stealth, then, is 8 + 3 + 4 = 15.



# Archetypes
All player characters have a class they belong to. That class, whichever it may be, is associated with an archetype. A class' archetype determines what weapons they have access to, their maximum HP and MP, their spellcasting capability (if any), among other things. A complete list of the archetypes and their characteristics can be seen below.

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
| 1     | Magia Aprendida | Você pode aprender magias a partir de **Pergaminhos Mágicos** (ver: [Spell Scrolls](#p2))                                                                                                                                                                                                                                                            |

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
- **Attack of Oportunity:** An Off-Caster Character tha reaches level 5 is able to perform [Attack of Opportunity](#p2).
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

| LEVEL | FEATURE               | DESCRIPTION                                                                                                  |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1     | Magia Inata           | Você pode lançar magias dessa classe. Você não pode aprender Truques (magias de 0º Círculo).                 |
| 5     | Attack of Opportunity | (um inimigo sai da sua área de alcance corpo-a-corpo) Reação: Faça um ataque corpo-a-corpo contra o inimigo. |
| 7     | Extra Attack          | Ao tomar a ação Atacar (ver [Combat Actions](#p2)), você pode fazer 2 ataques em vez de 1.                      |

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


## Specialist
Specialists are exactly what the name implies, incredibly specialized combatants that, instead of focusing on complete mastery of the arcane, martial combat or even a balance of both, have a single niche proficiency or knowledge they use to dominate the battlefield in their own way. Rogues, Artificers, Gunslingers, Alchemists, all of these are primary examples of how a Specialist Class works.

### Hit Points (HP) & Mana Points (MP)
A Specialist's maximum HP and MP are calculated as such:
- **HP at 1st Level:** 10 + their Constitution modifier
- **MP at 1st Level:** 5
- **HP gain per level after 1st:** 3 + their Constitution modifier
- **MP gain per level after 1st:** 5

### Attribute Score Increase
- Specialist **Gains ASI at levels:** 4, 6, 8, 10, 12, 15, 17, 19. (8 Total)

### Feats
A specialist has access to all Specialist Feats.

### Expertise
Starting at 2nd level, a Specialist gains the **Expertise** feature.

**Expertise.** Choose a number of skills equal to you inteligence modifier (min 1). Before performing a non-attack roll with one of those skills, you may spend 1PM to add your inteligence modifier to the roll. At levels 6, 10, 14 and 18 you chose another skill, and can spend +1PM, and the total added to the roll equals the MP cost times your inteligence modifier.

### Attacks
- **Simple Weapon Proficiency**: Any Specialist character has proficiency with Simple Weapons

### Spells
None by default

{{define-archetype "Specialist"
HP_LV1: 10
HP_LV: 3
MP_LV: 5
ASI_LEVELS: 4, 6, 8, 10, 12, 15, 17, 19

SPECIALIZATION_LEVELS: 1, 5

FEATURES:

| LEVEL | FEATURE | DESCRIPTION |
| ---- | ---- | ---- |
| 2 | Expertise | Choose a number of skills equal to you inteligence modifier (min 1). Before performing a non-attack roll with one of those skills, you may spend 1PM to add your inteligence modifier to the roll. At levels 6, 10, 14 and 18 you chose another skill, and can spend +1PM, and the total added to the roll equals the MP cost times your inteligence modifier. |

MULTI_FEATURES:

| Level |     | 
| ----- | --- |
| 1st   |     |
| 2nd   |     |
| 3rd   |     |
| 4th   |     |
| 5th   |     |
| 6th   |     |
| 7th   |     |
| 8th   |     |
| 9th   |     |
| 10th  |     |
| 11th  |     |
| 12th  |     |
| 13th  |     |
| 14th  |     |
| 15th  |     |
| 16th  |     |
| 17th  |     |
| 18th  |     |
| 19th  |     |
| 20th  |     |
}}



## Martial
Martial characters are masters of physical combat. Short range, long range, unarmed, bladed weapons, name a style of fighting and there is a martial class that excels at it. They're also extremely well built physically, and are considerably tougher to take down on a 1-on-1 fight.

### Hit Points (HP) & Mana Points (MP)
A Martial character's maximum HP and MP are calculated as such:
- **HP at 1st Level:** 18 + their Constitution modifier
- **MP at 1st Level:** 3
- **HP gain per level after 1st:** 5 + their Constitution modifier
- **MP gain per level after 1st:** 3

### Attribute Score Increase
- **Gains ASI at levels:** 4, 6, 9, 12, 15, 17, 19. (7 Total)

### Feats
A character from a martial class has access to all Matial Feats.

### Attacks
- **Simple Weapon Proficiency**: Any Martial character has proficiency with Simple Weapons
- **Martial Weapon Proficiency**: Any Martial character has proficiency with Martial weapons by default.
- **Extra Attack**: A Martial Character that reaches level 5 can attack 2 times on their turn when they use the attack action.
- **Attack of Oportunity:** a Martial Character is able to perform [Attack of Opportunity](#p2).

<!-- idea: since caster scaling is usually quadratic and really strong (and off-casters above lv7 also have 2 attacks), maybe giving martial classes exclusive access to 3 attacks per turn could be cool -->

{{define-archetype "Martial"
HP_LV1: 18
HP_LV: 5
MP_LV: 3
ASI_LEVELS: 4, 6, 9, 12, 15, 17, 19
SPECIALIZATION_LEVELS: 4, 8
HAS_MAGIC: false

FEATURES:

| LEVEL | FEATURE | Description |
| ---- | ---- | ---- |
| 1 | Attack of Opportunity  | (um inimigo sai da sua área de alcance corpo-a-corpo) Reação: Faça um ataque corpo-a-corpo contra o inimigo. |
| 5 | Extra Attack | Ao tomar a ação Atacar (ver [Combat Actions](#p2)), você pode fazer 2 ataques em vez de 1. |

MULTI_FEATURES:

| Level |     |
| ----- | --- |
| 1st   |     |
| 2nd   |     |
| 3rd   |     |
| 4th   |     |
| 5th   |     |
| 6th   |     |
| 7th   |     |
| 8th   |     |
| 9th   |     |
| 10th  |     |
| 11th  |     |
| 12th  |     |
| 13th  |     |
| 14th  |     |
| 15th  |     |
| 16th  |     |
| 17th  |     |
| 18th  |     |
| 19th  |     |
| 20th  |     |
}}


# Classes
classes are always from one of the archetypes, and add additional abilities that the character earns as they level. they also offer powers that the character may take at each level up after the first.

## List of Classes
Below is a list of all classes and a brief description of their abilities.

### Martial Classes
#### Fighter
###### Description
Mestres do campo de batalha, com ações rápidas, precisas e poderosas. Os mestres absolutos de combate direto.

###### Mechanics
Action surge. Powerful Strike (flat bonus to hit/dmg)

#### Beast Warrior
###### Description
Lutadores selvagens, com resistência inigualável. Guerreiros bestiais lutam sem nenhuma resguarda, ficando mais poderosos e imparáveis quanto mais dano eles recebem.

###### Mechanics
Beastly Rage. Savage Attack

#### Juggernaut
###### Description
"Eu sou Juggernaut, bitch" - Jonathan U. Gernaut, o primeiro Juggernaut. A fortaleza impenetrável no centro do combate, com poder absoluto e defesa ainda melhor.

###### Mechanics
Raise Guard. Powerful Strike.

#### Champion
###### Description
O protagonista de toda batalha, que inspira aliados e amedronta inimigos. Campeões são o centro da atenção não porquê tratam lutas como espetáculos (tirando os que tratam luta como espetáculos), mas porquê sua presença e habilidade fascina todos que tem o privilégio de presenciar sua dominação total.

###### Mechanics
Smite! Lay on Hands

### Off-Caster Classes
#### Spelgard
###### Description
O equilíbrio absoluto de proficiência marcial, magias de suporte e magias ofensivas. Spelgards são considerados "batalhões de um homem só", que se adaptam a qualquer grupo e situação, e se sentem confortáveis em qualquer posição, seja em grupo ou agindo solo.

###### Mechanics
Spiritual Weapon. Lay on Hands

#### Enhancer (TBI)
off-caster who fights and can apply temporary buffs that make them hit harder and stronger. add random elemental damage to attack after spell cast.

#### Blood Mage (TBI)
can use HP for spells, and has a lot of regen and life leech. skills use a ton of MP.

#### Bard (TBI)
Inspiration (flat bonus or dice? AoE or single target?). off-caster. Can substitue an attack for a trick using artistic instrument. talvez usar a ideia do [multi-form changing guy|multi-form changing guy (link not found)]()

### Caster Classes
#### Witch
###### Description
Mestres de maldições, veneno, invocação e cura, Bruxos e Bruxas tem uma presença absoluta e misteriosa, com poderes variados e domínios sobre a vida e morte.

###### Mechanics
Witch's Focus (Pode se concentrar em vários efeitos por vez). Hex (amaldiçoa inimigos enquanto manter concentração). Witch's Brews (Poções mágicas com efeitos positivos e negativos).

#### Channeler
###### Description
"A melhor defesa é explodir seu inimigo, sua família e todo o seu continente" - Megumin, Canalizadora focada em magias de fogo. Grande tempo de concentração seguido por um resultado explosivo e obliterador, esse é o método de um canalizador.

###### Mechanics
Summon (invoca uma magia ofensiva de forma aleatória em um inimigo).

#### Plantomancer
###### Description
Controladores das plantas e das florestas, Plantomancers manipulam o campo de batalha, reconstruindo o terreno, atacando, defendendo e curando de todos os lados ao mesmo tempo com sua magia e suas plantas mágicas.

###### Mechanics
Herbomancia (criação de plantas mágicas)

{{page-break}}

#### Wordsmith (TBI)
###### Description
Avatares do arcano, Wordsmiths moldam e constroem magia dinamicamente para se adaptar a sua situação.

###### Mechanics
NOME_PENDENTE (Creates spells at will with magic radicals and afixes)

### Specialist Classes
#### Rogue
###### Description
Sorrateiros e mortais, Ladinos tem ataques precisos e boa mobilidade, com grande capacidade para furtividade, veneno e trapaças.

###### Mechanics
sneak attack

#### Werebeast
###### Description
Seja por sua linhagem sanguínea, maldição, magia, experimentação científica ou outro motivo misterioso, esses indivíduos tem essa estranha habilidade de transformar seu corpo em uma fera poderosa.

###### Mechanics
Forma Bestial (transforma em uma besta forte e resistente).
Corpo Aberrante (skills com efeitos diferentes na forma humana e de besta)

#### Dancer
###### Description
Dancers são, primeiramente, artistas. Suas habilidades são usadas para performances e danças, mas sua agilidade e precisão de movimentos trazem consigo habilidades valiosas em combate.

###### Mechanics
Passos de Vento (velocidade de movimento a mais e dá mais dano com ataques físicos quando se movimenta)

#### Alquimist
###### Description
"Hey, toma um gole disso" -David, o Alquimista, prestes a curar seu aliado ou fazer seu oponente explodir em uma poça de gosma verde.

###### Mechanics
**Elixir Experimental.** (Spend PM, get potion with random positive effect.)

%%
### Probably cut off
#### Symbiote (Martial probably, or maybe off-caster) (WIP)
Can suck off energy from enemies or host (self-damage). uses a lot of MP for abilities (buffs, attacks, utility skills) (adapted this into blood mage)
#### Beast Master (or maybe Symbiote) (TBI)
Can summon and control low CR animals. Probably kill it in favor of expanding the Companion system.
%%
{{wide
## Resumo e comparação das classes

##### Casters
____

| Classe             | need to Buff/Nerf? | Foco em Concentração | Controle    | Utilidade   | Dano  | Habilidades de Cura |
|:------------------ | ------------------ |:-------------------- |:----------- |:----------- |:----- |:------------------- |
| Witch              |                    | Alto                 | Médio-Baixo | Alta        | Médio | Muito               |
| Plantomancer       |                    | Baixo                | Alto        | Média-Alta  | Médio | Médio               |
| Wordsmith          |                    | Baixo                | Médio-Alto  | Média-Baixa | Alto  | -                   |
| Channeler          |                    | Alto                 | Baixo       | Baixa       | Alto  | -                   |
| Chronomancer (TBI) |                    | Médio                | Médio-Alto  | Alta        | Baixo | Baixo               |

##### Off-Casters
____

| Classe              | need to Buff/Nerf? | Defesa      | Utilidade   | Dano físico | Magia Ofensiva | Cura  |
|:------------------- | ------------------ |:----------- |:----------- |:----------- |:-------------- |:----- |
| Spelgard            |                    | Média-Alta  | Média-Alta  | Média       | Baixa          | Média |
| Enhancer  (TBI)     |                    | Média       | Média       | Alta        | Média          | -     |
| Bard       (TBI)    |                    | Baixa       | Alta        | Baixa       | Alta           | Alta  |
| Blood Mage (TBI)    |                    | Média-Baixa | Média-Baixa | Média-Alta  | Média-Alta     | Média |
| Ice/Fire dude (TBI) |                    | Baixa       | Média       | Média       | Alta           | -     |

##### Marciais
____

| Classe        | need to Buff/Nerf? | Defesa      | Mobilidade | Utilidade | Cura              |
|:------------- | ------------------ |:----------- |:---------- |:--------- |:----------------- |
| Fighter       | buff dmg           | Média       | Média      | Média     | -                 |
| Beast Warrior | buff dmg?          | Média-Alta  | Média-Alta | Baixa     | Alta (só própria) |
| Juggernaut    | maybe buff mana    | Alta        | Baixa      | Média     | -                 |
| Champion      |                    | Média-Baixa | Média      | Alta      | Média-Alta        |
| Hunter (TBI)  |                    | Baixa       | Alta       | Média     | Média             |

##### Specialists
____

| Classe            | need to Buff/Nerf? | Dano Físico | Dano não-físico | Defesa     | Mobilidade | Utilidade   | Cura  |
|:----------------- | ------------------ |:----------- |:--------------- |:---------- |:---------- |:----------- |:----- |
| Ladino            |                    | Alto        | Baixo           | Média      | Baixa      | Média-Alta  | -     |
| Dancer            |                    | Médio-Alto  | -               | Média-Alta | Alta       | Baixa       | -     |
| Alquimista        |                    | -           | Alto            | Baixa      | Baixa      | Alta        | Alta  |
| Inventor (TBI)    |                    | Médio-Baixo | Médio-Alto      | Média      | Baixa      | Média-Alta  | -     |
| Werebeast         |                    | Médio       | Médio           | Média-Alta | Média      | Média-Baixa | Média |
| Pugilista   (TBI) |                    | Alto        | -               | Alta       | Média-Alta | Baixa       | -     |

}}

{{page-break}}

## Creating a Class
1. Think of an interesting concept for what your class is and what Theme it plays to, what you want a character of that class to **feel like**, to whoever is playing it (from now referred as the class' **Theme**).
2. Decide if that class needs access to magic or not (and thus if it should be a caster/off-caster or a martial/specialist)
	1. It's common that as you progress with refining the idea and basic design of a class to come back to this step and rethink if you'd like or not for it to use spells (or whatever you reflavor them as) as their main way of interacting with the world as their class.
3. Think of 1 main mechanic (from now referred as the **Core Mechanic**) that character's from that class would use mainly to affect combat. This is the main way to express the **Theme**. Now express that Mechanic as a first level feature.
	1. Example: Beast Warrior's Rage, Rogue's Sneak Attack, Champion's Smite, Plantomancer's Herbology, Werebeast's Bestial Transformation.
4. Figure out what archetype works best with it's **Theme** 
5. Think of a level-1 feature (almost always should be a skill that uses MP) to incorporate the main way that class expresses their **Theme**, and interacts with their **Core Mechanic**.
6. Then, if the class isn't from the Caster Archetype: Think of another feature relating to the class' **Theme** (but not necessarily it's **Core Mechanic**), and add that either as a level 2 or 3 class feature.
	1. In specific when designing Caster Classes it may make sense to add the class' **Core Mechanic** at a later level (such as with the Witch class' **Witch's Focus**). In that case this supplementary feature should be made, and added as a first level class feature.
7. Then think of 1 other feature to round out the **Theme** (something that also adds some non-combat flavor/utility). Add them as mid-game class features.
8. Now think of additional interesting new features and modifications to existing features that play to the class' **Theme**. Observe that while the **Core Mechanic** always has a combat effect, these mechanics don't necessarily have to all have to be obviously useful in combat (though most of them should have some in-combat use). This is a good place to think up of possible variations and specializations within members of the class. Add those as class feats.
	1. **Feat Groups:** In this effort of reinforcing class identity, it's interesting to think of a unique feat template and naming scheme, and apply that to create some different feats for the class, different from the singular feats created previously. Example: Plantomancer's **Herbomancy: \[Blank\]**, Spellgard's **Aura of \[Blank\]** and Beast Warrior's **Wild Rage: \[Blank\]**. It's recommended to have between 0 and 1 Feat groups per class.

### Recommended levels to add class features by archetype

| Archetype  | Core Feature | Auxiliary Feature | Mid-Game Feature |
| ---------- | ------------ | ----------------- | ---------------- |
| Martial    | 1st          | 2nd               | 7th              |
| Specialist | 1st          | 3rd               | 7th              |
| Off-Caster | 1st          | 2nd               | 6th/8th          |
| Caster     | 1st          | -                 | 6th/8th          | 

Important tips:
- Class features should always scale with levels, usually as an optional additional MP cost to improve it's effect.
- Most class features should be active skills that cost MP to use (or rarely some other resource). Passive effects and skills that have no cost should exist as the exception, not the rule.
- Feats not from a feat group, on the other hand, usually aren't skills in and of themselves, but instead modify other class features or add in some passive effect or alternative way of using existing skills (possibly costing additional MP).




{{list-classes}}

# Combat
## Round
For each round of combat (equivalent to ~6s of real time), each character takes their turn, in initiative order. Some items, spells and abilities might affect these numbers, but by default every character has, during their turn, access to:

- 1 Action
- 1 Movement Action
- Any number of Free Actions

## Combat Actions

### Endurance

%%
English
**Endurance (Ignorar Arranhões):** Movement action (2MP): for the rest of the scene, all non-psychic damage you take that's equal or below your Guard is reduced to 0. This does not affect "DoT" or environmental damage (e.g.: burning, walking on a corrosive substance, bleeding, gradual poisoning, etc.)

OBS: the DM may rule that any specific instance of damage may or may not ignore Endurance depending on the situation, at their discretion.
%%

**Ignorar Arranhões:** Movimento (2PM): Pelo resto da cena, todo dano que você tomar igual ou inferior a sua **Guarda** (limitado por seu nível \* 2 + 2) é ignorado. **Ignorar Arranhões** não é aplicado em dano psíquico, "DoT" ou dano ambiental (estar em chamas, andar em ácido, sangramento, etc.).

### Uncanny Dodge
Below is the definition of the Uncanny Dodge ability, that all characters can perform:

%%
English
**Uncanny Dodge ("de Raspão"):** (when taking damage) Reaction (3PM): ignore the damage, and increase the cost of this by 3PM. You can't use Uncanny Dodge if it costs more than your **Dodge**.
%%

**"de Raspão".** (tomando dano) Reação (3PM): Ignore o dano, caia no chão (ver condição: caído), e aumente o custo dessa habilidade em +3PM pela cena. Você não pode usar **"de Raspão"** se custar mais que a sua **Evasão**.

Example Use: Fibi has 8 Guard and 7 Dodge. Fibi has 18 AC (someone trying to attack them has to roll a 18 or higher to hit them), can use Uncanny Dodge up to 2 times per scene, and their Endurance allows them to shrug off attacks of 8 or less points of damage. If they use Endurance and take 3 attacks dealing 7, 14 and 5 damage, the first and third attacks have their damage reduced to 0.

### Attack of Opportunity
If your character has the ability to do so, they can perform an attack of opportunity.

**Attack of Opportunity**: Reaction (An enemy leaves your melee range, 0MP): You can make an attack against the enemy immediately as they leave your melee range.
**Ataque de Oportunidade**: (Um inimigo sai do seu alcance corpo-a-corpo) Reação: Você realiza um ataque corpo-a-corpo contra esse inimigo.

### Movement
During their turn, a character can spend their movement action to move up to their movement speed. (to calculate PC's movement speed, check [Movement](#p2)). 

### Dash
Any character can use their Major Action in combat to perform another movement action.

### Attack
Any character can use their Major Action in combat to perform the Attack Action. When doing so, they can perform a melee or ranged attack (unarmed or with a weapon they are wielding), or perform a [Maneuvers](#p2)


## Attacking and Defending
### Attacking
##### Physical Attacks
To make a physical attack you first roll to hit. If you're proficient with the weapon being used, you add your [Proficiency](#p2) bonus for your current level (copy of the proficiency table included at the end of the page).

If making a melee attack:
  - **1d20 + proficiency bonus + Strength modifier**

If making a ranged attack:
  - **1d20 + proficiency bonus + Dexterity modifier**

If a melee weapon has the *finesse* property you can use Dexterity for the attack roll instead of Strength. (see: Equipment section).

If the attack hit, you deal damage equal to the damage dice for the weapon, plus the modifier used for the attack roll.

Example: Molly, an 8th level character proficient with simple weapons and 15(+2) DEX would have the following attack and damage rolls with a dagger:
- Attack Roll: 1d20+6
- Damage Roll: 1d4+2

###### Dual Wielding
If a character is holding 2 weapons and at least one of them has the light property they can make 2 attacks when using the attack action. they don't add their relevant attribute to the damage for the attack made with the second weapon.

##### Spell Attacks
To make a spell attack you first roll to hit. The roll is determined by the following formula:
- **1d20 + proficiency bonus + Spellcasting modifier**
	
Unlike physical attacks, spell attacks in general don't add the caster's spellcasting modifier to the damage roll.

{{page-break}}

Some spells use a spell save DC instead. For that, see the Save DC Section below.

As there is no weapon involved, each spell has it's own critical information, that determines the extra damage it deals when it critically hits, and the range for it to critically strike.

#### Saves
For some spell and other abilities certain classes have an enemy has to roll to try to escape from the ability. The DC for that roll is determined by the formula below:

- **8 + proficiency modifier + relevant attribute modifier**

Example: Ynit, a level 6 Mage with 15 INT (their spellcasting attribute) would have a spell save DC of 8 + 3 + 2 = 13.

##### Rolling Saves
Whenever a player character has to resist an effect, they perform a Save Roll with a certain attribute. A character's class determines what attributes they have proficiency in saves with. If a character is proficient with a save, the roll formula is:

- **1d20 + proficiency modifier + relevant attribute modifier**

If they aren't proficient in saves with that attribute, the roll is:

- **1d20 + relevant attribute modifier**

### Defending Against an Attack, Spell or Ability

#### Defense (AC)
<div></div>
When an attack or spell has a roll instead of a save DC, the chalenge rating it should meet to hit the target is the target's Defense. The target's defense (also known as armor class) is calculated as:

- **10 + Maximum(Dodge, Guard) + Defense Bonus**

Defense Bonus is given by items, spells, abilities, circumstances (e.g. cover), etc.

##### Guard
The formula for a character's Guard is:

- **Equipment bonus + Constituition modifier**

Besides contributing to a character's Defense, Guard also allows them to use [Endurance](#p2).

##### Dodge
The formula for a character's Dodge is:

- **Equipment bonus + Dexterity modifier**

Besides contributing to a character's Defense, Dodge also allows them to use [Uncanny Dodge](#p2).


## Movement

A PC's movement speed (in squares of size 1.5m/5ft) is calculated by:
  - **5 + STR** (min 4 total, max 8 total)



# Iniciativa e Turnos

## Iniciativa
No início de um combate, todos os participantes rolam iniciativa, e a primeira rodada inicia. Cada um recebe seu turno em ordem decrescente. Quando participante com a menor iniciativa termina o seu turno,  a rodada acaba e a próxima rodada inicia. Se um novo participante entrar em um combate já ocorrendo ele rola iniciativa e entra na próxima rodada.

## Turnos
Em cada turno, um personagem tem:
- 1 Ação Principal
- 1 Ação de Movimento

O personagem tomando o seu turno pode executar quaisquer ações ele quiser das quais ele tem acesso, gastando sua Ação Principal e Ação de Movimento para realizar ações com o tipo de execução correspondente. Durante o seu turno, um personagem pode gastar sua Ação e Movimento em qualquer ordem que quiser.

Ações com o tipo de execução "Livre" podem ser executados sem gastar nenhuma das ações do personagem, mas uma mesma Ação Livre só pode ser feita uma vez por turno.

{{dev-comment

possivelmente mudar a descrição acima para
"uma mesma Ação Livre só pode ser feita uma vez por turno, **a não ser que a descrição dela diga o contrário.**"
}}

## Maneuvers

### Grappling
Grappling is a kind of melee attack. The target of your grapple must be no more than one size larger than you, and it must be within your reach. Using at least one free hand, you try to seize the target by making a grapple check, an Athletics check contested by the target’s Athletics or Acrobatics check (the target chooses the skill to use).


## Manobras
Manobras são tipos especiais de ataques corpo-a-corpo que podem ser executadas. Rolam para acerto como um ataque normal, mas em vez de dar dano, causam um efeito especial:

### Derrubar
Você deixa o alvo caído (Veja a condição de caído: [Conditions](#p2)). Esta queda normalmente não causa dano.

### Empurrar
Você empurra a criatura 1 quadrado. Para cada 5 pontos de diferença entre o ataque e a defesa, você empurra o alvo mais 1 quadrado

FROM THE DMG:

#### OVERRUN
When a creature tries to move through a hostile creature's space, the mover can try to force its way through by overrunning the hostile creature. As an action or a bonus action, the mover makes a Strength (Athletics) check contested by the hostile creature's Strength (Athletics) check. The creature attempting the overrun has advantage on this check if it is larger than the hostile creature, or disadvantage if it is smaller. If the mover wins the contest, it can move through the hostile creature's space once this turn.

#### SHOVE ASIDE
With this option, a creature uses the special shove attack from the Player's Handbook to force a target to the side, rather than away. The attacker has disadvantage on its Strength (Athletics) check when it does so. If that check is successful, the attacker moves the target 5 feet to a different space within its reach.

#### TUMBLE
A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent. As an action or a bonus action, the tumbler makes a Dexterity {{page-break}} (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check. If the tumbler wins the contest, it can move through the hostile creature's space once this turn.

#### CLIMB ONTO A BIGGER CREATURE
If one creature wants to jump onto another creature, it can do so by grappling. A Small or Medium creature has little chance of making a successful grapple against a Huge or Gargantuan creature, however, unless magic has granted the grappler supernatural might.

As an alternative, a suitably large opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb. After making any ability checks necessary to get into position and onto the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check. If it wins the contest, the smaller creature successfully moves into the target creature's space and clings to its body. While in the target's space, the smaller creature moves with the target and has advantage on attack rolls against it.

The smaller creature can move around within the larger creature's space, treating the space as difficult terrain. The larger creature's ability to attack the smaller creature depends on the smaller creature's location, and is left to your discretion. The larger creature can dislodge the smaller creature as an action- knocking it off, scraping it against a wall, or grabbing and throwing it- by making a Strength (Athletics) check contested by the smaller creature's Strength (Athletics) or Dexterity (Acrobatics) check. The smaller creature chooses which ability to use.

#### DISARM
A creature can use a weapon attack to knock a weapon or another item from a target's grasp. The attacker makes an attack roll contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check. If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender drops the item. The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands. The target has advantage on its ability check if it is larger than the attacking creature, or disadvantage if it is smaller.


## Tamanho

O tamanho de uma criatura é classificado em seis categorias: Minúsculo, Pequeno, Médio, Grande, Enorme e Colossal. Por padrão, seu tamanho é Médio ou Pequeno, definido na criação do personagem.

Quando uma maior que tamanho médio tenta se esconder, ela recebe -2 na rolagem de furtividade por cada categoria de tamanho acima de Médio. 

Quando uma criatura tenta fazer uma manobra (veja: Maneuvers/Manobras) contra uma de tamanho diferente, ganha +2 na rolagem para cada categoria de tamanho que for maior que o alvo, ou -2 para cada categoria de tamanho que for menor que o alvo.

| Categoria | Espaço Ocupado |
|:--------- |:--------------:|
| Minúsculo |      1sqr      |
| Pequeno   |      1sqr      |
| Médio     |      1sqr      |
| Grande    |      2sqr      |
| Enorme    |      3sqr      |
| Colossal  |      4sqr      |


# Death & Dying
When a character reaches or goes below 0hp they start rolling death saving throws at the start of their turns. (1d20 no modifiers, DC 10). If a character goes below half of their maximum HP into the negatives, they instantly die.

Nat1 means 2 failures, Nat20 means the character stabilizes at 0.

Any attack received adds 1 failure, and deals one extra die of damage.

Being healed removes 1 failed save, or gives 1 successful save if there are no failed ones. If the character goes above 0HP they regain consciousness.

If they hit 3 successes, they stabilize at 1HP and regain consciousness at the end of the scene. An ally can perform a Medicine check as an Action (DC 10) to wake up a stabilized unconscious character.

An ally can also perform a Medicine check as an action (DC 15) to remove one failed save. For every 5 above the DC remove one aditional fail. This does not add successes.

## Resumo
1. Quando um personagem chega em 0 ou menos HP, ele cai inconsciente e está morrendo.
2. HP pode ir pro negativo, e o HP de um personagem chegar em metade do máximo negativo, é morte instantânea.
3. Se o personagem subir para acima de 0HP por qualquer motivo, ele deixa de estar morrendo e recupera consciência
4. No início de seus turnos, um personagem morrendo rola 1 teste de resistência de morte (1d20 puro, CD 10) (recomendado de ser uma rolagem secreta feita pelo mestre). Conte o número de falhas e sucessos.
5. 1 Natural conta como 2 falhas. 20 natural dá 3 sucessos.
6. Qualquer dano contra um personagem morrendo acumula +1 falha, e dá 1 dado a mais de dano
7. Receber cura remove 1 falha, ou adiciona 1 sucesso se não tiver nenhuma falha acumulada.
8. Com 3 falhas acumuladas: o personagem morre.
9. Com 3 sucessos acumulados: o personagem deixa de estar morrendo, estabiliza em 1hp e ao final da cena recupera a consciência.
10. Um aliado pode usar uma ação padrão para fazer um teste de Medicina em um personagem estabilizado com 3 sucessos acumulados (CD 10) para recuperar a consciência.
11. Um aliado pode usar uma ação padrão para fazer um teste de Medicina em um personagem morrendo para remover 1 falha acumulada (CD 15). Para cada 5 acima da CD, remove uma falha adicional. Isso não pode acumular sucessos.
12. Quando um personagem deixa de estar morrendo, por qualquer motivo, ele acumula 1 nível de exaustão (exaustão em R20 funciona que nem no One D&D)


# Origins
{{}}
(Act in a similar way to races in other fantasy TTRPGs)

Origins usually give +2, +1 and -1 to 3 attributes, and the equivalent of ~1 feats.

## Origin Lists
Here's a list of origins:

### Generalist
**Attributes**: +1 to 3 different attributes.
**Feats**: 1 general or archetype feat of your choice.

### Brute
**Attributes**: +2 STR, +1 CON, -1 SEN.
**Tough it out!**: Can spend movement action and 1PM to gain +2 Guard for scene.

### Old Soul
**Attributes**: CON +2, SEN +1, DEX -1.
**Darn these old legs**: your base movement speed is 1 square (5ft/1.5m) lower.
**Built over time**: +3 maximum HP at lv1, and +1 maximum HP per levelup

### Tinkerer
**Attributes**: DEX +2, INT +1, PRE -1.
**Tool Expert**: no negative when performing a skill check without it's kit. +1 if using kit.

### Student
**Attributes**: INT +2, DEX +1, CON -1.
**Caffeine-powered soul**: +1 maximum MP per level.
**Sorry, i wasn't paying attention**: -1 to Initiative rolls.

### Animal Friend
**Attributes**: SEN +2, DEX +1, INT -1. Either **Abunak Enbassador** or **Companion: Pet**.
**Animal Embassador**: double SEN mod in animal handling checks. can comunicate with animals through body language.
**Companion: Pet**: You have a cute pet that kinda listens to you... sometimes.

### Initiate
**Attributes**: PRE +2, INT +1, STR -1.
**Initiate Magic**: Choose 1 1st level spell. You can cast it (PRE is the attribute).

### Loner
**Attributes**: +2 STR, +1 SEN, -1 PRE.
**Lone wolf**: +1 DEF when you have no allies within 6sqr of you.

### Schemer
**Attributes**: +2 DEX, +1 PRE, -1 CON
**I saw that one before!**: you have +1 on investigation checks to find traps, and to see if someone is trying to decieve you.

### Nature Explorer
**Attributes**: +2 CON, +1 STR, -1 PRE
**Forest Walker**: You can move through natural environments with dificult terrain as if they were of normal terrain.

### Researcher
**Attributes**: +2 INT, +1 CON, -1 DEX
**Field Expert**: Choose either History, Arcana, Nature or Medicine. You add double your Inteligence modifier when rolling that skill.

### Gladiator
You did a lot of arena fighting in your younger days. You might have gotten a bit wiser (or not), but one thing you won't forget is your first-hand combat experience, and ability to get a crowd roaring!

**Attributes**: +2 PRE, +1 STR, -1 INT
**Show fight**: You can choose to cause non-lethal damage with your attacks without taking the usual -5 to the attack roll.

### Merchant
**Attributes**: +2 SEN, +1 PRE, -1 STR
**Bargain Bin Buyer**: You can buy non-magical items for half price (DM may rule against this for technologically complex, rare or unique items, according to the situation).
**Salesman**: You sell items for 10% more.

### Shunned
**Attributes**: +1 in 3 non-Presence attributes. Presence -1.
**Intimidating**. +2 to intimidation.

### Dropout
You went out and got yourself a proper education in a fancy shmancy school! Well... you tried, at least.

**Atributes**: +1 to 3 attributes except Intelligence.
**Skills**: +2 to Intelligence based skill checks to recall information (some things stuck. Not many, but some).

%% Ideas
cum
%%

# Proficiency
Proficiency is used mainly for 3 things:
	- determining the DC for a skill's effect (i.e.: the DC to resist a character's magic)
	- making attack rolls
	- making saving throws with an attribute a character is proficient in

A character's proficiency is directly determined by their overall level, following the formula below.

- **Proficiency: char's level / 2 (rounded up) **

Here's a table with the proficiency levels for all levels from 1 to 20.

##### Proficiency Bonus per level
| Level | Proficiency Bonus |
|:-----:|:------------------|
| 1     | +1                |
| 2     | +1                |
| 3     | +2                |
| 4     | +2                |
| 5     | +3                |
| 6     | +3                |
| 7     | +4                |
| 8     | +4                |
| 9     | +5                |
| 10    | +5                |
| 11    | +6                |
| 12    | +6                |
| 13    | +7                |
| 14    | +7                |
| 15    | +8                |
| 16    | +8                |
| 17    | +9                |
| 18    | +9                |
| 19    | +10               |
| 20    | +10               |

D&D's formula: ceiling(lv / 4) + 1
  - lv1-4 -> 2, lv5-8 -> 3, lv9-12 -> 4, etc.
 
T20's formula: floor(lv/2) + (2/4/7 depending on level)
  - lv1: 0, lv2-3 -> 1, lv4-5 -> 2, lv6-7 -> 3, lv8-9 -> 4, etc.

R20's formula: ceil(lv/2)


# General Feats
{{}}
**Proficiência.** Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.

**Forçar Reservas.** Livre: Ganhe PRE + seu nível de MP temporário e +1 nível de exaustão.

**Saque Rápido.** Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar uma arma de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).

**Vitalidade.** Você recebe +1 HP por nível de personagem. *Pré-requisito*: Con 13.

**Vontade de Ferro.** Você recebe +1 PM para cada dois níveis de personagem. *Pré-requisito*: Sab 13.

**Acrobático.** Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas. *Pré-requisito*: Des 15.

**Aparência Inofensiva.** A primeira criatura inteligente (Int 3 ou mais) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes. *Pré-requisito*: Car 13.

**Atlético.** Você recebe +2 em Atletismo e +2sqr em seu deslocamento. *Pré-requisito*: For 15.

**Atraente.** Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você. *Pré-requisito*: Car 13.

**Foco em Perícia.** Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. *Pré-requisito*: treinado na perícia escolhida.

**Investigador.** Você recebe +2 em Investigação e soma seu bônus de Inteligência em Intuição. *Pré-requisito*: Int 13.

**Inventário Organizado.** Você soma sua Inteligência no limite de espaços que pode carregar. Para você, itens muito leves ou pequenos, que normalmente ocupam meio espaço, em vez disso ocupam 1/4 de espaço. *Pré-requisito:* Int 13.

**Sentidos Aguçados.** Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem ou camuflagem total, pode rolar mais uma vez o dado da chance de falha. *Pré-requisitos*: SEN 13, treinado em Percepção.

**Linguista.** Você aprende 2 línguas a sua escolha.

**Proficiência com Armas Marciais.** Você ganha proficiência com armas marciais (e ganha proficiência com armas simples se não tem).

**Proficiência com Armas Exóticas.** Você ganha proficiência com armas exóticas. *Pré-requisito*: Proficiência com Armas Marciais.

**Lobo Solitário.** Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto (6sqr). Você não sofre penalidade por usar a perícia Cura em si mesmo.

**Alert.** Always on the lookout for danger, you gain the following benefits:
  - You gain a +3 bonus to initiative.
  - You can’t be surprised while you are conscious.
  - Other creatures don’t gain advantage on attack rolls against you as a result of being hidden from you.

**Healer.** As an action, you can spend one use of a healer’s kit to tend to a creature and restore 1d6 + 4 hit points to it, plus additional hit points equal to the creature’s maximum number of Hit Dice. The creature can’t regain hit points from this feat again until it finishes a short or long rest. *Pré-requisitos*: definir depois

**Resilient.** Choose one attribute. You gain proficiency in saving throws using the chosen attribute.

**Começo Forte.** Você ganha +2 Dodge no início de uma cena, e perde esse bonus na primeira vez que toma dano durante ela. *Pré-requisito*: 11 Dex.

**Reflexos de Desvio.** Você pode se esconder como ação livre imediatamente após usar "**de Raspão**".

**Liberdade de Movimento**. When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn. When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.

**Reflexos de Combate**. Você ganha uma ação de movimento extra no seu primeiro turno de cada combate. *Pré-requisito*: Des 13.

**Atraente**. Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você. *Pré-requisito*: Car 13.

**Confiança Absoluta.** (ao fazer um ataque) X PM (limitado pela sua proficiência): Você pode escolher tomar uma penalidade de -1 no ataque, e aumentar a sua margem de ameaça em +1 no ataque por cada PM gasto. Pré-requisito: Dex 15



# Martial Feats
{{}}
**Athlete.** You have undergone extensive physical training to gain the following benefits:
  - Increase your Strength or Dexterity score by 1, to amaximum of 20.
  - When you are prone, standing up uses half of your movement.
  - Climbing doesn’t halve your speed.
  - You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.

**Defensive Duelist.** (você é atacado enquanto empunha uma arma leve com a qual é proficiente) reação: some sua proficiência na sua defesa contra esse ataque. Prerequisite: Dexterity 13 or higher

**Reflexos de Combate.** Você ganha uma ação de movimento extra no seu primeiro turno de cada combate. *Pré-requisito*: Des 13.

**Ataque Poderoso.** Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. *Pré-requisito*: For 13.

**Arremesso Potente.** Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. *Pré-requisitos*: For 13, Estilo de Arremesso.

**Foco na Simplicidade.** Você tem +2 margem de ameaça em ataques com armas simples.

**Ataque Pesado.** Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra). *Pré-requisito*: Estilo de Duas Mãos.

**Estilo de Duas Mãos.** Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves. *Pré-requisitos*: For 15.

**Estilo de Uma Arma.** Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados). *Pré-requisito*: treinado em Luta.

**Ataque Preciso.** Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico. *Pré-requisito*: Estilo de Uma Arma.

%% 
**Estilo de Duas Armas.** Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se você possuir Ambidestria, não sofre essa penalidade. *Pré-requisito*: Des 15, treinado em Luta.

**Arma Secundária grande.** Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas. *Pré-requisito*: Estilo de Duas Armas.
 %%
 
**Estilo de Arremesso.** Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas.

**Disparo Preciso.** Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque.

**Desarmar Aprimorado.** Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante, em sentido horário) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). *Pré-requisito*: Combate Defensivo.

**Foco em Arma.** Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes. *Pré-requisito*: proficiência com a arma

**Mira Apurada.** Você pode gastar uma ação de movimento para mirar. Se fizer isso, recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno. *Pré-requisitos*: Sab 13, Disparo Preciso.

**Sentinel.** When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn. Pre-requisite: Opportunity Attack

**Estilo de Escudo.** Você ganha +2 em Defesa se estiver empunhando um escudo.

**Defensor.** (um aliado adjacente a você é atacado) Reação: aumente a defesa do aliado em +2 para esse ataque. Se o ataque ainda acertar, diminua o dano infligido em 4.

**Piqueiro.** (um inimigo entra no seu alcance enquanto você empunha uma arma corpo-a-corpo alongada) Reação (1PM): Realize um ataque contra o inimigo.

{{note
#### Estilos de Combate
Um personagem só pode usar um poder "Estilo de \_\_\_\_\_\_\_".
}}

# Caster Feats
{{}}
**Celebrar Ritual.** Você pode lançar magias na forma de rituais. Isso dobra seu limite de PM, mas muda a execução para 1 hora (ou o dobro, o que for maior). Você gasta 2 moedas de ouro em incensos, oferendas etc. por PM do custo total. Após esse gasto, paga apenas metade do custo em PM da magia (após aplicar quaisquer outros efeitos de redução). *Pré-requisitos*: definir depois.

**Foco em Magia.** Escolha uma magia. Seu custo diminui em –1 PM (cumulativo com outras reduções de custo). Você pode escolher este poder outras vezes para magias diferentes.

**Magia Acelerada (Aprimoramento).** Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, padrão ou completa e só pode lançar uma magia como ação livre por rodada. *Custo*: +4 PM. *Pré-requisito*: lançar magias de 2º círculo.

**Magia Ampliada (Aprimoramento).** Aumenta o alcance da magia em um passo (de curto para médio, de médio para longo) ou dobra a área de efeito da magia. Por exemplo, uma Bola de Fogo ampliada tem seu alcance aumentado para longo ou sua área aumentada para 12m de raio. *Custo*: +2 PM. Re-escrever de forma que faça sentido com o sistema

**Magia Discreta (Aprimoramento).** Você lança a magia sem gesticular e falar, usando apenas concentração. Isso permite lançar magias com as mãos presas, amordaçado etc. Também permite lançar magias arcanas usando armadura sem teste de Misticismo. Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). *Custo*: +2 PM.

**Magia Ilimitada.** Você soma seu modificador do atributo-chave no limite de PM que pode gastar numa magia.

**Elemental Adept.** Choose one of the following damage types: acid, cold, fire, lightning. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times. Each time you do so, you must choose a different damage type

**Magia Pungente.** Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.


# Specialist Feats
{{}}

- *nome1*. De Raspão aumenta de custo em 2PM, não 3PM. Pré-requisito: nome2
- *nome2*. Você ganha 2 PM temporários ao usar De Raspão
- *nome*. Você pode gastar 1PM e fazer uma Ação Padrão imediatamente após usar de raspão. Pré-requisito: nome2
- *nome.* (Você foi atacado e o ataque errou) reação: Faça um ataque contra o atacante.
- *nome.* livre 1PM: você não provoca ataques de oportunidade até o próximo turno
- bonus to stealth?
- *jack of all trades* 2PM: você pode usar seu INT em vez do seu bonus de skill (ex: se tem +1 STR, +2 atletismo e +4 INT, pode rolar +5 em vez de +3 em atletismo)
- **Cunning Action (Ação Ardilosa)**. Free Action (2PM): You can Hide or Dash as a free action (see combat actions).
- *Swift Artesan*. You can produce 50gp more worth of items with a week of crafting.

# Companion Feats
**Companion: Helper.** The companion gains the Help action.

**Companion: Skillful.** Chose 4 skills. The Companion gains proficiency with them, and the master adds their proficiency to any skill their companion is proficient with when rolling them while adjacent to their companion.

**Companion: Chonky.** The companion's size and maximum size increase by 1. The companion's maximum HP increases by 5 * their tier.

**Companion: Defender.** The companion gains the Defend skill

**Companion: Mobile.** The companion gains one of:
- 10sqr movement speed
- 15sqr swiming speed
- 6sqr flying speed

**Companion: Steed**. The companion's speed increases by 2sqr, and they can carry up to 2 characters of Medium or lower size. *Pre-requisite: Companion: Mobile*

**Companion: Attack Initiate.** The companion gains the Simple Attack Skill (See Companion skills). Chose either slashing, piercing or bludgeoning damage for the attacks damage type.

**Companion: Power Attack.** When making an attack, you can spend +1PM to add another dice to the damage (limited by half of the companion's tier). *Pre-requisite: Companion: Attack Initiate*.

**Companion: Trick Attack.** When making an attack, you can spend 1PM to make a Combat Maneuver instead (see: combat maneuvers), or +3PM to make the normal attack and a Combat Maneuver. *Pre-requisite: Companion: Attack Initiate*.

**Companion: Attack Specialist.** Build 2 Special Attacks (see: Special Attack companion skill). The Companion learns them. *Pre-requisite: Companion: Attack Initiate*.

**Companion: Defensive.** The companion's Defense increases by 5, and their HP increases by 4 times it's tier.

**Companion: Magic Initiate.** The companion can learn and cast cantrips. The companion learns 1 cantrip. The companion learns one spell they can cast at every Tier.

**Companion: Advanced Magic.** The companion learns 1 new 1st circle spell, and gains access to new spell circles depending on their master's level. *Pre-requisite: Magic Iniciate*
| Master Level | Companion Maximum Spell Circle |
|:------------:|:------------------------------:|
|     1-5      |               1                |
|     6-9      |               2                |
|    10-14     |               3                |
|     15+      |               4                |

**Companion: Master Magic.** The companion learns 1 new spell, and gains access to new spell circles depending on their master's level. *Pre-requisite: Advanced Magic*
| Master Level | Companion Maximum Spell Circle |
| :------------: |:------------------------------: |
| 1-3          | 1                              |
| 4-6          | 2                              |
| 7-9          | 3                              |
| 10-12        | 4                              |
| 13-15        | 5                              |
| 16+          | 6                              |


%% Basic Rules %%
# Carga
A quantidade de equipamento que um personagem consegue levar consigo enquanto se aventura é medida em espaços no seu inventário. Um personagem por padrão possui **10 + FOR  + CON** (mínimo: 8) espaços no seu inventário. A maioria dos itens ocupa 1 espaço, porém:

- Ingredientes, matérias primas e outros itens minúsculos ocupam 1/2 espaço.
- Itens alquímicos, poções, pergaminhos e outros itens consumíveis ocupam 1 espaço.
- Armas de duas mãos, escudos, criaturas minúsculas e armaduras leves e médias ocupam 2 espaços.
- Armaduras pesadas e criaturas pequenas ocupam 5 espaços.

## Sobrecarga
Se um personagem ultrapassar seu limite de carga, ele fica sobrecarregado. Um personagem sobrecarregado tem -2sqr de movimento. Um personagem não consegue carregar mais do que o dobro do seu limite.

# Coins
All items and services referred to in this book are measured in copper, silver, gold and platinum coins. These are the currencies the system expects you to use, though your table may adapt this to something more suitable for your setting.

In it's original intention, copper and silver are the coins of the populous. when you buy groceries, pay tolls, or get a new set of tools for your job, you use silvers and get some coppers for change. gold is used for rent, buying a horse, a weapon or other substantial expenses, which are usually worth multiple days' worth of an average person's wage. Platinum is then the coin of the rich, of institutions and of governments. It's the choice for those who only don't use gold because they're dealing with sums of money so astronomical that the weight of the gold itself would be a hassle.

The conversion between the currencies follows the ratio:
- 50 copper = 10 silver = 1 gold = 1/5 platinum

These units are usually shortened using the following symbols:

| Coin     | Shortened version |
| -------- | ----------------- |
| copper   | c                 |
| silver   | s                 | 
| gold     | g                 |
| platinum | p                 |

## Item Level
All adventuring equipment has a specific level assigned to it, from 0-20. That level roughly indicates what level of adventurer would have access to that item, which helps DMs choose appropriate loot for the party, set rarity for certain items, etc. The level of the item is also important when it comes to crafting, as it both limits the minimum level of the crafter and helps determine how difficult it would be to craft (see: [Crafting](#p2).).

# Starting Items
When starting an adventure, you can chose your character's initial equipment by choosing items whose total value are within the table below for that specific level (but remember to validate with your DM if those items are setting and context appropriate for your character to have access to at that point).

##### Starting gold
{{column-count:2

| Level | Starting Gold |
|:----- |:-------------:|
| 1-2   |     100g      | 
| 3-4   |     200g      |
| 5-6   |     400g      |
| 7-8   |     800g      |
| 9-10  |     2000g     |

| Level | Starting Gold |
|:----- |:-------------:|
| 11-12 |    5.000g     |
| 13-14 |    15.000g    |
| 15-16 |    30.000g    |
| 17-18 |    45.000g    |
| 19-20 |    60.000g    |
}}


%% Main Equipment %%
# Equipment

A lv1 character starts with 100gp (around 3 month's worth of a normal working person's living wage, representing them selling most of their posetions and using their saved up money to go on an adventure).
## Simple Weapons

| Melee Weapons  | Damage | Crit |           Properties            | Preço |
|:--------------:|:------:|:----:|:-------------------------------:| ----- |
|     Dagger     |  1d4   |  -   | finesse, light, thrown (20/60)  | 2gp   |
| Unarmed Attack |  1d2   |  -   |                -                | -     |
|      Club      |  1d4   |  -   |              light              | 1sp   |
|   Greatclub    |  1d8   |  -   |            2-handed             | 2sp   |
|    Handaxe     |  1d6   |  -   |      light, thrown (20/60)      | 5gp   |
|    Javelin     |  1d6   |  -   |         thrown (30/120)         | 5sp   |
|  Light Hammer  |  1d4   |  -   |      light, thrown (20/60)      | 2gp   |
|      Mace      |  1d6   |  19  |                                 | 5gp   |
|  Quarterstaff  |  1d6   |  -   |         versatile (1d8)         | 2sp   |
|     Spear      |  1d6   |  x3  | Thrown (20/60), versatile (1d8) | 1gp   |
|     Scythe     |  1d4   |  x4  |             finesse             | 1gp   |
|      Claw      |  1d4   |  19  |         light, finesse          | 5sp   |

| Ranged Weapons  | Damage | Crit |                    Properties                    | Preço |
|:---------------:|:------:|:----:|:------------------------------------------------:|:-----:|
| Crossbow, light |  1d8   |  19  | Range (10sqr/20sqr), loading(movement), 2-handed |  25gp     | 
|    Shortbow     |  1d6   |  x3  |          Range (15sqr/30sqr), 2-handed           |  25gp     |

## Martial Weapons

| Melee Weapons | Damage | Crit | Properties       | Preço |
|:-------------:|:------:|:----:|:---------------- | ----- |
|   Battleaxe   |  1d8   |  19  | light            | 10gp  |
|  Shortsword   |  1d6   |  x3  | Finesse, light   | 10gp  |
|     Flail     |  1d8   |  -   | Reach            | 10gp  |
|     Lance     |  1d10  |  -   | Reach, Mounted   | 10gp  |
|   Longsword   |  1d8   |  19  | Versatile (1d10) | 15gp  |
|    Rapier     |  1d6   |  18  | Finesse          | 25gp  |
|   Greataxe    |  1d12  |  x3  | 2-handed         | 30gp  |
|  Greatsword   |  2d6   |  19  | 2-handed         | 50gp  |

| Ranged Weapons  | Damage | Crit |                   Properties                   | Preço |
|:---------------:|:------:|:----:|:----------------------------------------------:| ----- |
| Crossbow, hand  |  1d6   |  x3  |   Range (6sqr/24sqr), light, loading(action)   | 75gp  |
| Crossbow, heavy |  1d10  |  x3  | Range (20sqr/40sqr), loading(action), 2-handed | 50gp  |
|     Longbow     |  1d8   |  18  |         Range (25sqr/50sqr), 2-handed          | 50gp  |

## Armor
{{dev-comment

**TODO:** figure out how to introduce stealth penalties back into this, possibly joined with movement penalty in some way

}}

| Light Armor                    | Dodge | Guard | Cost | STR |
| ------------------------------ | ----- | ----- | ---- | --- |
| Padded (Acolchoada)            | 2     | 0     | 10g  | -   |
| Leather (Couro)                | 3     | -2    | 50g  | -   |
| Studded leather (Couro Batido) | 4     | -3    | 500g | -   |
| Entskin Hide (Pele de Ente)    | 6     | -5    | 850g | -   |

| Medium Armor                       | Dodge | Guard | Cost | STR |
| ---------------------------------- | ----- | ----- | ---- | --- |
| Hide (Gibão de peles)              | 1     | 1     | 10g  | 8   |
| Camisa de couro de Cobra           | 2     | 1     | 75g  | 8   |
| Camisa de couro de Crocodilo       | 1     | 2     | 75g  | 9   |
| Scale Mail (Brunea)                | 3     | 2     | 150g | 9   |
| Chain shirt (Cota de malha)        | 2     | 3     | 150g | 11  |
| Breast Plate (Armadura Segmentada) | 3     | 3     | 400g | 11  |
| Half plate (Meia Armadura)         | 4     | 4     | 750g | 13  |

| Heavy Armor                    | Dodge | Guard | Cost   | STR | Movement |
| ------------------------------ | ----- | ----- | ------ | --- | -------- |
| Ring mail                      | -1    | 2     | 30g    | 12  | 0        |
| Chain mail                     | -2    | 3     | 75g    | 13  | 0        |
| Splint                         | -3    | 4     | 200g   | 14  | -1sqr    |
| Full Plate (Armadura completa) | -5    | 5     | 1,500g | 16  | -2sqr    |

| Shield       | Dodge | Guard | Cost | STR |
| ------------ | ----- | ----- | ---- | --- |
| Buckler      | 2     | 1     | 5g   | -   |
| Light Shield | -1    | 2     | 15g  | -   |
| Heavy Shield | -4    | 3     | 200g | 13  |

\**STR*: The minimum strength score requirement to wear the armor.

\*Movement: Movement speed penalty while wearing.

**Finesse**. When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.

**Heavy**. Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon’s size and bulk make it too large for a Small creature to use effectively.

**Light**. A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.

**Loading**. This weapons needs to be reloaded before it can be fired again.

**Thrown**. If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.

**Two-Handed**. This weapon requires two hands to use.

{{page-break}}

**Range**. A weapon that can be used to make a ranged attack has a range shown in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon’s normal range in feet, and the second indicates the weapon’s maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can’t attack a target beyond the weapon’s long range.

**Reach**. This weapon adds 5 feet to your reach when you attack with it.

**Versatile**. This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack.

**Mounted**. This weapon is considered Two-Handed unless the user is mounted.

## Magic Staves

Cajados mágicos são itens mágicos relativamente comuns. Eles são usados por aqueles que possuem alguma habilidade mágica. Ele funciona como um quarterstaff (versátil (1d6/1d8), crit 20/2x). Cajados mágicos funcionam como focos de magia. Além disso, quando um personagem com um Cajado Mágico equipado lança uma magia, parte da Mana gasta é absorvida pelo cajado, e ele ganha 1 carga por círculo da magia lançada. Como uma ação de movimento, você pode gastar um número cargas para executar a habilidade do cajado. Cargas desaparecem no final da cena. Podem existir versões pequenas do cajado, chamadas de varinhas mágicas. Uma varinha ocupa só 1 espaço no inventário, mas não pode ser usada como arma física e custa 50% a mais que um Cajado equivalente.

| Name               | Cost | Max Charges | Effect                                                                                                                                                              |
| ------------------ | ---- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ferro Encantado    | 30g  | 3           | Lança 1 dardo de Magic Missile por carga usada.                                                                                                                     |
| Casco de Tartaruga | 20g  | 5           | Ganha 2 HP temporário por carga usada.                                                                                                                              | 
| Cajado de Batalha  | 45g  | 3           | Dá 1d8 de dano de impacto a mais no próximo ataque com o cajado por carga usada.                                                                                    |
| Galho Queimado     | 50g  | 4           | Lança 1 raio da magia Scorching Ray para cada 2 cargas usadas.                                                                                                      |
| Cajado Vampírico   | 200g | 6           | Passivo: Você toma 1 dano necrótico no início de cada turno por carga. Ativo (min 3): 1 criatura a sua escolha em 18sqr recupera 3d6 HP (por cada 3 cargas gastas). |

<!-- Ideas:
- bees: insect swarm.
- charm: charm
- ilusion: + DC to ilusion spells
- something wholesome: buffs alliess' saves or something
- swiftness: gives you an extra movement action
- web: web
-->

%% Common support items %%
## Itens de aventura
Itens mundanos, não-mágicos e relativamente comuns, que mesmo assim ajudam muito qualquer aventureiro.

| Item                          | Valor     | Efeito                                                                                                                                                                                                                                                                |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tocha                         | 5 silver  | Quando acesa, ilumina uma região de 10sqr de raio. Precisa ser segurada com 1 mão para ser eficaz.                                                                                                                                                                    |
| Algemas                       | 10 silver | Prende alguém. CD 5 DEX save para evitar ser pego, CD 20 atletismo para quebrar                                                                                                                                                                                       |
| Mochila de Aventureiro        | 50 silver | Ajuda a organizar seus itens. Dá +2 espaços de inventário e -2 em Furtividade                                                                                                                                                                                         |
| Organizador de Pergaminhos    | 30 silver | Pasta segmentada para guardar pergaminhos. Pode sacar pergaminhos como ação livre                                                                                                                                                                                     |
| Bandoleira de Poções          | 30 silver | Bolsa de couro para organizar poções. Pode sacar itens alquímicos como ação livre                                                                                                                                                                                     |
| Saco de Ingredientes          | 30 silver | Sacola desorganizada que de alguma forma não danifica materiais. Pode guardar até 5 espaços de materiais brutos dentro dela, mas só conta por 1 espaço                                                                                                                |
| Aljava Reforçada              | 80 silver | Bolsa de couro especializada para guardar munições especiais. Pode sacar munições especiais como ação livre. Pode guardar até 10 unidades de munição especial de qualquer tipo.                                                                                       |
| Healer’s Kit                  | 10 gold   | This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Medicine check.                                  |
| Caixa de Merenda Profissional | 15 gold   | Uma bolsa grande intricadamente construída de couro especialmente tratado para resistência e compressão, limitando também apodrecimento. Ela ocupa 2 espaços de inventário, e consegue guardar o equivalente de 10 espaços de inventário de mantimentos (500 pratas). |




## Mantimento

Ao realizar um descanso (Ver: [Rest & Recovery](#p2)), um personagem usa uma quantidade de mantimentos (comida e agua). Esses mantimentos são medidos e controlados não como rações individuais, mas com o seu valor total. Por exemplo, Rafiqi o bruxo saiu em sua viagem de perigrinação, levando consigo comida e agua equivalendo a 80 pratas (8 ouro). Ele ao longo da sua aventura vai usando seus mantimentos, e mecanicamente fazemos o controle disso levando com esse valor equivalente.

Um aventureiro carregando seus mantimentos com si mesmo usa 1 espaço de inventário para cada 100 pratas equivalente de mantimentos.
## Comidas Especiais
Comer mantimentos preservados é ok, mas cadê a aventura nisso? cadê o prazer? cadê o tûmpero? {{page-break}}{{}}Pra isso existem comidas especiais, feitas de ingredientes cheios de Mana e preparadas por chefes experientes.

### Produzir uma **Comida Especial**
A maioria das **Comidas Especiais** que existem não estão disponíveis em qualquer cidade (**Comidas Especiais** com nível maior que 3 raramente podem ser compradas), mas pra que comprar quando você tem as suas próprias mãos! Criar comidas especiais é um tipo particular de [Crafting](#p2) usando a perícia *cozinhar*. Fora as regras padrão, as seguintes diferenças são aplicadas para criação:

- A tentativa de criar uma **Comida Especial** é feita durante um [Rest & Recovery](#p2), e um personagem só pode tentar cozinhar uma **Comida Especial** uma vez por descanso.
- Os materiais necessários são mantimentos comuns (ver: [Provisions](#p2)), mas para certos itens de alto nível o mestre pode requer que certos itens ou temperos especiais e raros sejam usados como parte dos materiais para uma **Comida Especial**.
- Com a quantia necessária de materiais gastos, a rolagem de crafting é feita como normalmente, contra a CD do item a ser criado (12 + nível do item / 2).
- Se o teste passar, uma porção da comida é produzida. Para cada 3 acima da CD, mais uma porção é produzida.
- **Comidas Especiais** acima do nível 2 são consideradas iguarias raras, especiais e difíceis de fazer. Para conseguir cozinhar uma **Comida Especial** acima do nível 2 o cozinheiro precisa ter aprendido a receita dessa **Comida Especial** específica. Receitas podem ser compradas em cidades grandes, achadas em grimórios antigos guardados em ruínas ou aprendidas de primeira mão com um cozinheiro mais experiente te ensinando. Receitas custam 10x o preço da respectiva **Comida Especial**

### Consumir uma **Comida Especial**
Uma **Comida Especial** pode ser consumida no mesmo descanso que foi produzida, e quaisquer efeitos que tenha relativos ao "próximo descanso" são ativados. Uma criatura só pode receber o efeito de uma **Comida Especial** por vez. Caso não seja especificado de outra forma, o efeito de uma **Comida Especial** dura até o seu próximo descanso. Comer uma **Comida Especial** não conta como uso de provisões no descanso.

### Guardar uma **Comida Especial**
Uma porção de **Comida Especial** ocupa meio espaço de inventário. Depois de 24 horas ela perde seu efeito e pode ser usada como uma porção de comida comum para provisão, valendo 20 moedas de prata. Depois de 1 semana ela apodrece e perde completamente seu valor.

### Comidas Especiais
| Nome                 | Nível | Custo | Efeito                                                         |
| -------------------- | ----- | ----- | -------------------------------------------------------------- |
| Carreteiro Reforçado | 1     | 10g   | Dá +2 para a rolagem de sobrevivência para o próximo descanso. |
| Pudim de Café        | 2     | 8g    | Você ganha +5 na próxima rolagem de iniciativa.                |
| Sopa de Atum Lutador | 2     | 16g   | Recupera +3d4 HP no próximo descanso.                          |
| Salada de Mandrágora | 3     | 20g   | Recupera +2d6 MP no próximo descanso.                          |
| Gatotuille           | 5     | 5g    | Dá +3 para a rolagem de sobrevivência para o próximo descanso. |
| Manjar dos Deuses    | 6     | 40g   | Recupera +2d12 FP no próximo descanso.                         |
| Chá de Calmo-mila    | 4     | 16g   | Recebe vantagem em rolagens para resistir efeitos mentais.     |
| Burrito Flamejante   | 3     | 10g   | Recebe +1sqr velocidade de movimento.                          |

%% Battle Consumables %% 
## Munição Especial
Munições especiais são flechas, dardos, balas, etc. especiais com efeitos específicos, feitos para serem usados com uma arma a distância respectiva. Eles são consumidos no uso, e não é possível recuperar seus efeitos, mesmo se o ataque errar. Sacar uma munição especial é uma ação de movimento. Um "pacote" de munição ocupa 1 espaço de inventário, e a quantidade de unidades por "pacote" é definida por marcador.

| Name               | Cost | Restrição | Pacote      |
| ------------------ | ---- | --------- | ----------- |
| Marcador           | 2gp  | -         | 5 unidades  |
| Ponta de Obsidiana | 20gp | -         | 10 unidades |

**Marcador.** Efeito: ao ser disparada, a munição acende e emite uma luz forte com alcance 2sqr, e luz fraca em outros 2sqr. Mesmo depois de acertar o alvo ela continua brilhando por 2d4 turnos. O alvo pode remover a munição com uma ação padrão.

**Ponta de Obsidiana.** Uma munição extremamente delicada, que pode tanto quebrar no caminho com a pressão do ar quanto rasgar completamente o alvo. *Efeito:* Se o ataque acertar criticamente, ele dá 6d6 de dano perfurante adicional, conforme a ponta da munição explode dentro da ferida ao penetrar o alvo.
## Óleos
Óleos são itens consumíveis de uso único. Como uma ação de movimento, um personagem pode despejar um óleo que já esteja segurando em uma peça de armadura, arma ou munição que esteja segurando ou de uma criatura adjacente. Uma criatura pode tentar evitar o óleo, fazendo um teste de resistência de Destreza contra uma CD 8+prof+DEX de quem estiver tentando espalhar o óleo. O óleo escorre e perde seu efeito no final da cena.

{{page-break}}
### Oils

| Name     | price | target                  |
| -------- | ----- | ----------------------- |
| Fadaísca | 5g    | Armadura, Arma, Munição |
| Firucum  | 10g   | Arma, Munição           |

- **Fadaísca.** Efeito: Um impacto forte (um ataque acertando) acende o óleo, que gera um brilho cegante em um raio de 1sqr. Todas as criaturas (fora você) no alcance devem passar em um teste de resistência SEN (CD 10), ou ficam cegos até o final do seu próximo turno.
- **Firucum.** Um líquido viscoso, levemente laranja e com um cheiro agridoce. Ele é extremamente volátil, e pega fogo com o menor impacto. *Efeito:* O próximo ataque dá 3d6 dano de fogo adicional.

### Alchemical Items

Itens alquímicos possuem um efeito.
- Caso o efeito tenha como alvo uma criatura ou objeto: você faz um ataque a distância contra a criatura (usa destreza, é proficiente), e se acertar o efeito ocorre.
- Caso o efeito tenha como alvo um ponto no espaço: o efeito ocorre automaticamente, e criaturas dentro da sua área podem fazer um teste de resistência de destreza para minimizar ou evitar o efeito.

#### Acid
- *Descrição:*
- *Alvo:* criatura ou objeto
- *Alcance:* 4sqr
- *Efeito:* o alvo toma 2d6 de dano ácido.
- *Valor:* 25g

#### Fogo Alquímico
- *Descrição:* This sticky, adhesive fluid ignites when exposed to air
- *Alvo:* criatura ou objeto
- *Alcance:* 4sqr
- *Efeito:* O alvo toma 1d4 de dano de fogo no início dos seus turnos. O alvo pode gastar uma ação para fazer um teste de resistência de **DEX (CD 10)**, e se passar terminar o efeito em si mesmo.
- *Valor:* 15g

#### Bolsa Explosiva
- *Descrição:* Um pequeno pacote com um pó cinza altamente volátil e explosivo.
- *Alvo:* ponto
- *Alcance:* 6sqr
- *Área:* raio 1sqr
- *Efeito:* Todas as criaturas na área tomam **3d6** dano de impacto
- *Resistência:* **DEX (CD 14)** reduz o dano pela metade.
- *Valor:* 45g

#### Graxa
- *Descrição:* 
- *Alvo:* ponto
- *Alcance:* 10sqr
- *Área:* quadrado 2sqr
- *Efeito:* Criaturas que falharem no teste caem no chão (ver condição: caído). Criaturas que entrarem na área ou começarem o seu turno na área fazem o teste ou caem.
- *Resistência:* **DEX (CD 15)**
- *Valor:* 15g


## Poisons
#### Basic Poison
_Potion, Common, lv1. 10g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d12 poison damage.

#### Grude Verde
_Potion, Common, lv2. 20g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 12 Constitution saving throw or take 1d8 poison damage and be slowed for the scene.

#### Peçonha Concentrada
_Potion, Common, lv3. 45g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 16 Constitution saving throw or take 3d6 poison damage.

## Potions
Drinking a potion requires an Action, and if it has a long-lasting effect it's duration is scene, unless it states otherwise.

### Curative Potions
#### Healing Potion
_Potion, Common_
A character who drinks the magical red fluid in this vial regains hit points. Drinking or administering a potion takes an action.

| Potion of ...    | Rarity    | Price  | HP      |
| ---------------- | --------- | ------ | ------- |
| Healing          | Common    | 50g    | 3d4+3   |
| Greater healing  | Uncommon  | 200g   | 6d4+6   |
| Superior healing | Rare      | 2000g  | 9d4+9   |
| Supreme healing  | Very rare | 20000g | 12d4+40 |
{{page-break}}
#### Mana Potion
_Potion, Common_
A character who drinks the magical purple fluid in this vial regains MP. Drinking or administering a potion takes an action.

| Essence of ... | Rarity   | Price | MP  |
| -------------- | -------- | ----- | --- |
| Mana           | Common   | 25g   | 3d4 |
| Greater Mana   | Uncommon | 150g  | 6d4 |

### Miscelaneous Potions
| Name            | Rarity   | Price |
| --------------- | -------- | ----- |
| climbing        | common   | 100g  |
| fire breath     | uncommon | 150g  |
| Troll Strength  | uncommon | 400g  |
| growth          | uncommon | 200g  |
| water breathing | common   | 100g  |

### Effects
#### Potion of Climbing
Você tem +10 para testes de Atletismo para escalar.

#### Potion of Fire Breath
Você pode executar **Bafo de Dragão** até 3x durante a duração.

**Bafo de Dragão.** Ação: Você toma 1d6 de dano de fogo, e uma criatura que você pode ver em até 6sqr de você toma 5d6 dano de fogo se falhar num teste de resistência de Destreza (CD 13). Se passar, toma metade do dano.

#### Potion of Troll Strength
Pela duração, sua Força é sempre pelo menos 21

#### Potion of Growth
Você aumenta de tamanho em uma categoria.

#### Potion of Water Breathing
Você consegue respirar de baixo d'água, e tem velocidade de nado 9sqr.

<!--
heroism rare 500
invulnerability rare 4000
-->
# Spell Scrolls

Spell Scrolls are consumable items that contain a spell. They can be used either to:

- Cast the spell
- Learn the spell

All spell scrolls have a tier. The tier of a spell scroll is equal to the MP cost of the spell stored inside it (including all spell modifiers).

## Casting a Spell from a Scroll

Any sentient creature may attempt to cast a spell from a scroll.

**Read Spell Scroll.** Action: make an Arcana skill check (DC 5 + tier). On a success the spell is cast, and the scroll is destroyed. On a failure by 5 or more, the scroll is destroyed. On a failure by 10 or more, the stored mana explodes in a 5sqr side square centered on the scroll, dealing 1d6 energy damage times the scroll tier and destroying the scroll.

If the creature reading the spell doesn't already have a spellcasting ability, they have -5 to their check. If the creature knows the language used to write the scroll, they have +2 to the check.

If the spell uses a spellcasting ability the caster can use one they already have. If the caster doesn't have one, they use PRE.

## Learning a Spell from a Scroll

A spellcaster may attempt to learn the spell stored in the scroll, if they have that ability (All Casters have this ability, while Off-casters don't by default). The reader must already be able to learn spells from that circle (a level 1 caster can only learn scrolls that contain spells of first circle or cantrips).

To attempt it the reader must spend 4 hours reading the scroll for each tier. They also spend 10g worth of magic incense every 4 hours. At the end of this study (that can happen over multiple sessions), the reader makes an Arcana  check, with DC 12 + tier. If they succeed, the reader learns that spell, and adds it to their spell list.

## Creating Spell Scrolls

At the start of the crafting attempt, the spellcaster decides on what spell and what modifiers to use. The total MP cost of the spell (that the spellcaster should be able to cast) becomes the intended spell scroll's tier. To craft a spell scroll, the caster must have ready materials (special parchment, magic ink, etc.) equal to 5gp per MP cost of the spell (including all spell modifiers, that the crafter decides during the crafting process). They then spend 3 hours and 1MP per tier transcribing the spell. At the end of the process, they make an Arcana check (DC 10 + tier). If they succeed, the materials are expended and scroll is created. If they fail by 5 or more, the crafting materials are expended.

## Buying Spell Scrolls

In general, Spell Scrolls sold by merchants and other casters cost ~10gp per tier.

## Ideas for change
Maybe make it be different checks instead of all Arcana?

Change cost to like $circle*tier*10gp$ (5gp for cantrips), so a tier 2 darkness (circle 1) would cost 10gp, a tier 2 hold person (circle 2) would cost 20gp and a tier 6 fireball (circle 3) would cost 180gp.

Ignore the previous crafting rules and use the simpler general ones.

## Working with item levels.
The level of an item would be equal to the spell's circle (then you can have characters having access to higher spells as a consumable, but not having lv1's casting wish).


%% Magic Items %%
# Magic Items

### MAGIC ITEM RARITY
| Rarity    | Character Level | Value           |
| --------- | --------------- | --------------- |
| Common    | 1st or higher   | 50-100 gp       |
| Uncommon  | 1st or higher   | 101-500 gp      |
| Rare      | 5th or higher   | 501-5,000 gp    |
| Very rare | 11th or higher  | 5,001-50,000 gp |
| Legendary | 17th or higher  | 50,001+ gp      |
### Magic item list

#### Corda da Escalada
_Common (50gp), lv2_
Esta corda de 16m é bastante fina, mas forte o suficiente para suportar até 1.500 kg. Com um comando (uma ação de movimento), a corda se move em qualquer direção (incluindo para cima) a 3m por rodada, fixando-se firmemente onde seu usuário desejar. Ela pode se desamarrar e voltar da mesma forma.

#### Garrafa da Fumaça Eterna
_Common (50g) lv2_
Quando a tampa desta ânfora de metal é retirada, uma grande quantidade de fumaça é liberada, deixando toda a áera em 12m de raio obscura. A fumaça persiste até a garrafa ser tampada. Após isso, dissipa-se no fim da cena (ou após 4 rodadas, sob vento forte, ou 1 rodada, sob um vendaval).

#### Gema da Luminosidade.
*Common (50gp) lv2*
Este cristal tem a aparência de um longo prisma. Com um comando (movimento), emite luz equivalente a uma tocha ou então um raio brilhante, que força uma criatura em alcance (6sqr) a passar em um teste de resistência de Sensibilidade (CD 12) ou ficar cega por 1d4 rodadas.

#### Manto Élfico
*Uncommon (100gp-350gp) lv3-lv7*
Indistinguível de um manto cinza comum. Entretanto, quando usado com o capuz cobrindo o rosto, fornece +2/+5 em Furtividade.

#### Mochila de Carga (Bag of Holding)
*Uncommon (100gp-500gp) lv3/lv6*
Este item, que parece uma simples mochila de pano, está na verdade ligado a um espaço interdimensional — fazendo com que seja maior por dentro do que por fora. Você pode guardar até 100 kg dentro de uma mochila de carga, mas ela pesará no máximo 5 kg. Se a mochila for rasgada, os objetos em seu interior são destruídos. Criaturas vivas colocadas no interior da mochila podem sobreviver até 10 minutos, mas depois disso ficarão sem ar. Ter uma mochila de carga equipada dá 5/10 espaços a mais de inventário.

#### Chapéu do Estilo
*Common (50gp) lv0*
Esse chapéu preto simples mas bem cuidado não parece fora do comum. Como ação quem estiver usando o chapéu pode tocar nele, e ele se transforma em qualquer tipo de chapéu ou adereço de usar na cabeça. Role um d20 ao colocar ou transformar o chapéu. Se tirar 10+, você tem +2 em rolagens de presença enquanto usar o chapéu. Se tirar 20, esse bônus dobra. (hidden until players roll 1: Se você tirar 1, o chapéu fica preso em você por 1 dia, você tem desvantagem em rolagens de presença e ele vira um fedora)

### Enciclopédia do Biólogo Sumido
_Common (50gp) lv1_
Livro mágico de um antigo biólogo que morreu fazendo o que ele amava: catalogando criaturas poderosas e bizarras. Rolagens de Arcana/Natureza para identificar criaturas recebem +5 enquanto você tem esse livro aberto. Usar o livro faz com que ele grite em voz alta a informação desejada, alertando todas as criaturas não-surdas em um raio de 10sqr.

### Deque de algumas coisas
_Common (80gp) lv2_
Um pequeno e levemente danificado deque de cartas (faltando a maioria delas). Dele é fácil notar uma leve aura mágica. Ele começa com 10 cartas, e se um personagem sacar uma carta com uma Ação, ele ativa um dos efeitos abaixo (role 1d6) e a carta se desintegra.

| d6  | Efeito                                                                           |
| --- | -------------------------------------------------------------------------------- |
| 1   | Você é afetado por Vicious Mockery (falha automática).                           |
| 2   | Você e um alvo a sua escolhe são afetador por Toll the Dead.                     |
| 3   | A magia Thunderclap é executada pela carta (você pode ser afetado).              |
| 4   | Você e um alvo a sua escolha são afetados por Guidance.                          |
| 5   | 3 bolas de vidro aparecem na sua frente e te orbitam, com efeito de Magic Stone. |
| 6   | Fire Bolt, Word of Radiance e Frostbite são executadas em 3 alvos a sua escolha. |

OBS: Se o efeito requer o seu atributo de magia use o seu normal se tiver um, se não use PRE.

### Rolo de Papel de Embrulho Espacial
*Common (100gp) lv4*
Um rolo de papel de embrulho com fundo preto e ilustrações de estrelas. Você pode gastar 10 minutos para embrulhar um conjunto de itens que pese até 50kg e ocupe até 5m³ com o Papel de Embrulho Espacial. Você produz um embrulho de presente que cabe na palma da sua mão, e é um item minúsculo (1/2 espaços) e pesa no máximo 100g. Se o papel for rasgado todos os itens guardados nele são despejados pra fora, e o papel usado perde o efeito. O Rolo de Papel de Embrulho Espacial tem 10 usos.

{{page-break}}
### Braceletes da Falsa Força
_Uncommon (150gp) lv2_
Braceletes reforçados que parecem aumentar a resistência de quem os usar. O material usado é menos útil do que parece, e acaba não tendo o efeito desejado, apesar de ainda ser de alguma ajuda. *Efeito:* -3 Defesa, +2 Guarda

### Botas da Falsa Dextreza
_Uncommon (150gp) lv2_
Botas decoradas que parecem dar mobilidade e agilidade adicional para o usuário, o deixando desviar com mais facilidade. Na verdade o couro inflexível e baixa anti-aderência da sola acabam não ajudando muito. *Efeito:* -3 Defesa, +2 Evasão

### Estatueta da Coruja
_Common (150gp) lv3_
Uma estátua pequena em mármore de uma coruja. Como uma ação, você pode acordar a coruja, que se transforma por até um dia em uma coruja de verdade que ouve aos seus comandos e segue eles. Ela consegue se comunicar telepaticamente com você se estiver a menos que 200m de distância. Ela reverte ao formato de estátua se tomar dano, e uma vez revertida se torna inativa por 3 dias.

### Lança de Raios
_Uncommon (1000gp) lv7_
Uma Lança brilhante com detalhes em ouro e uma ponta cerrada no formato de um raio. Um personagem equipado com a Lança de Raios que seja proficiente com ela tem acesso à habilidade **Zeus**.

**Zeus.** Ação: você joga a Lança de Raios na direção de um alvo que vê em um alcance de 25sqr. Cada criatura entre você e o alvo toma 4d6 dano elétrico, ou metade se passar em uma resistência de Destreza (CD 13). Faça um ataque de arremesso contra o alvo, e se acertar ele toma 4d6 de dano adicional. A lança perde sua carga, e recupera ela depois de 1 dia.

### Lança de Raios (Menor)
*Comum (90gp) lv4*
Mesmo efeito da lança de raios, mas ao usar a habilidade **Zeus**, se algum dos dados do dano elétrico rolado for 6, a lança é destruída.

### Nine Lives Stealer
_Rare (900gp) lv5_
Uma adaga simples, com um relevo de um gato no punhal, com 1d8+1 caudas. Se você acertar um ataque crítico com a adaga contra uma criatura e ela ficou com 30 HP ou menos, ela deve passar numa resistência de Constituição (CD 14) ou morrer instantaneamente. Quando uma criatura morre por esse efeito, uma das caudas do gato some. Se o gato perder todas as caudas, o item reverte para uma adaga normal.

<!--
### Ninety Nine Lives Stealer
_Very Rare (9000gp)_

### Nine Hundred Ninety Nine Lives Stealer
_Legendary (9999gp)_
-->

## Runes
You can enchant an item with runes to add a special effect to it. You create runes by rolling Arcana. Each rune has a number of uses, and after that it must be recharged with MP during a rest.

<!-- have runes that allow you to cast spells as actions, and some as reactions to being hit or when crit -->

Rune effects:

| Name | Item Level | Avg. Price | Max Charges | Recharge rate | Effect |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Damage Type Change 1 | 1 | 40g | 4 | 1PM per Charge | (Movement, 1 Charge): change the damage type of a weapon to another physical type for the scene |
| Damage Add Elemental 1 | 3 | 100g | 2 | 1PM per 2 Charges | (Movement, 1-2 Charges): add 1d6 (+1d6 per charge spent) of the element of the rune to the weapon's damage for next attack |
| Elemental Reflect | 3 | 80g | 3 | 1PM per 3 Charges | (Reaction, 1 Charge): Deal 1d8 damage of the type back to the attacker |
| Defense Tier 1 | 2 | 50g | 1 | 1PM per Charge | (Movement, 1 Charge): Your defense can't be less than 15 for the scene |
| Defense Tier 2 | 4 | 150g | 3 | 1PM per Charge | (Movement, 1-2 Charge): Your defense can't be less than 16 for the scene (17 if you spent 2 charges) |
| Defense Tier 3 | 7 | 450g | 8 | 1PM per Charge | (Movement, 2-4 Charges): Your defense can't be less than 17 for the scene, +1 per charge spent after the second |


%% Advanced Rules %%
# Crafting

%% **IDEA:** Maybe steal pathfinder's idea of magic item levels and use it here for ingredient and roll CD. %%

<!--
basic rules:
- needs 25% of the item's value worth of ingredients
- 50gp worth of item/workweek. (increase to more gp/week at later levels.)
- 1 check per workweek

use tools. costs 500silver for a set of tools (-5 without tools)
-->

## Crafting Rolls and time to produce an item
Some items are relatively simple and quick to produce, while others become a huge project spanning multiple months. A character can spend their downtime working to craft one or more items. For that, they spend time and materials, and need to use a specific crafting skill and tools. A set of tools of any craft are worth 500 silver.

### Materials
When crafting an item, a character needs to have prepared materials for it, worth 25% of the items total value. The materials must be proper for the item in question, and some items might have particularly hard to acquire materials.

Depending on how the crafter rolls on the skill checks for the item creation, materials may be saved or wasted.

### Time
Crafting an item might be quick or complex, depending on the item. The expected crafting time equals 1 week of work per 50 gold of the item's worth. This time can be taken while adventuring, (during downtime and/or while resting).

If the item being crafted is worth 50 gold or less, then at the end of the crafting time you roll a skill check with the relevant skill. If the item is worth more than 50 gold, at the end of every week spend working on it you roll a new skill check. That check may improve the item's progress, do nothing, regress it or even completely destroy the partially built item.
### Skill
Below is a list of all crafting-related skills. 

| Skill         | Relevant Attribute | Items crafted using it                                |
| ------------- | ------------------ | ----------------------------------------------------- |
| Alchemy       | DEX                | Poisons, explosives, oils and other alchemical items. |
| Herbalism     | SEN                | Potions and poisons.                                  |
| Rune Crafting | INT                | Standalone runes and imbuing runes into items.        |
| Scribing      | INT                | Spell Scrolls.                                        |
| Smithing      | STR                | Armor, weapons and ammunition.                        |
| Cooking       | PRE                | Food.                                                 |

When rolling a skill check for crafting, a character should use a set of tools specific for that skill (alchemy set, smithing's tools, etc.). If they don't have the kit, they have a -5 to the roll.

*OBS:* note that poisons can be made either through herbalism or alchemy.

The CD for the skill roll to craft an item is determined by the item's level, according to the formula:
- **CD = 12 + Item level/2 (rounded down)**

After rolling and comparing against the item CD, the materials spent and the progress in the production are as follows:

| Skill check result | Crafting progress                      | Materials spent  |
| ------------------ | -------------------------------------- | ---------------- |
| Passed by 5+       | Item crafting progresses.              | 50% of expected* |
| Passed             | Item crafting progresses.              | 100% of expected |
| Failed             | Item crafting doesn't progress.        | 0                |
| Failed by 5+       | Item crafting doesn't progress.        | 100% of expected |
| Failed by 10+      | Item crafting regresses by 2 workweeks | 100% of expected |

**\*Note:** when crafting a consumable item the character crafting may choose to instead of spending 50% materials to produce the intended amount of items, produce twice the amount with 100% of materials consumed.

## Crafting in Bulk
One may choose to work in many items in series. For example, Frizz the rogue halfling wants to craft 1x portion of **Peçonha Concentrada** (60g/vial), and 2x of **Grude Verde**(30g/vial), in that order, totaling 120g worth of items. He then sets to work for the 3 weeks necessary for that. Lets see the journey taken by him:

He only needs to prepare 15g of materials at first, but he decides to get all 30g before starting. Then he spends a few weeks working on it, with the following results

{{page-break}}

{{wide

| week | intended production                             | alchemy roll | craft CD | result      | item progress                                    | materials at start of week           | materials spent |     |
| ---- | ----------------------------------------------- | ------------ | -------- | ----------- | ------------------------------------------------ | ------------------------------------ | --------------- | --- |
| 1    | progress on **Peçonha Concentrada** (0g -> 50g) | 10           | 13       | Failure     | none                                             | 30g worth                            | none            |     |
| 2    | progress on **Peçonha Concentrada** (0g -> 50g) | 13           | 13       | Success     | **Peçonha Concentrada** partially done (50g/60g) | 30g worth                            | 12,5g worth     |     |
| 3.1  | Finish **Peçonha Concentrada** (50g -> 60g)     | 14           | 13       | Success     | **Peçonha Concentrada** done                     | 17,5g                                | 2,5g worth      |     |
| 3.2  | make 1x **Grude Verde**                         | 17           | 12       | Success(5+) | **Grude Verde** (2x) done                        | 17,5g                                | 7,5g worth      |     |
| 3.3  | progress on **Grude Verde** (0 -> 10g)          | 5            | 12       | Failure(5+) | none                                             | 17,5g                                | 2,5g worth      |     |
| 4    | make 1x **Grude Verde**                         | 15           | 12       | Success     | **Grude Verde** done                             | 5g worth + 5g worth (newly acquired) | 7,5g worth      |     |
}}

As a result Frizz took 4 weeks to spend his 30g worth of materials, plus 10g extra he had to buy during the process, to produce 1x **Peçonha Concentrada** and 3x **Grude Verde**, with 2,5g worth of materials left over. it was a weird process filled with ups and downs, but considering that he spent 37,5g to produce 150g worth of items, he sleeps happily thinking about how many bad guys he's gonna take down with his creations.

## Crafting Materials (Took mostly from D&D)
An item invariably re quires an exotic material to complete it. This material can range from the s kin of a yeti to a vial of water taken from a whirlpool o n the Elemental Plane of Water. Finding that material should take place as part of an adventure. The Magic Item Ingredients table suggests the challenge rating of a creature that the characters need to face to acquire the materials for an item. Note that facing a creature does not necessarily mean that the characters must collect items from its corpse. Rather, the creature might guard a location or a resource that the characters need access to. 

#### MAGIC ITEM INGREDIENTS
| Item Rarity | CR Range |
| ----------- | -------- |
| Common      | 1-3      |
| Uncommon    | 4-8      | 
| Rare        | 9-12     |
| Very rare   | 13- 18   |
| Legendary   | 19+      |

<!--
#### MAGIC ITEM CRAFTING TIME AND COST
| Item Rarity | Workweeks\* | Cost\*      | 
| ----------- | ----------- | ----------- |
| Common      | 1           | 50 gp       |
| Uncommon    | 2           | 200 gp      |
| Rare        | 10          | 2,000 gp    |
| Very rare   | 25          | 20,000 gp   |
| Legendary   | 50          | 100, 000 gp |
\*Halved for a consumable item like a potion or scroll
-->

# Spells

## Learning Spells
As characters level up, they learn new spells. The amount of spells and maximum spell level for a character's known spells can be seen according to the table below (info also available in Archetypes).

Full-casters and Off-Casters start at level 1 knowing 3 and 1 known spells, respectively. Full-Casters learn a new spell at every level up and Off-Casters learn a new one at every even level. Casters can learn cantrips (0-level spells), while Off-Casters cannot learn them.

The maximum level of a spell a character can learn is given by the below table (see also: Spell Levels).

##### Maximum circle of known spells
| Char Level | Full-Caster | Off-Caster |
|:----------:|:-----------:|:----------:|
| 1          | 1           | 1          |
| 2          | 1           | 1          |
| 3          | 2           | 1          |
| 4          | 2           | 1          |
| 5          | 3           | 2          |
| 6          | 3           | 2          |
| 7          | 4           | 2          |
| 8          | 4           | 3          |
| 9          | 5           | 3          |
| 10         | 5           | 3          |
| 11         | 6           | 4          |
| 12         | 6           | 4          |
| 13         | 7           | 5          |
| 14         | 7           | 5          |
| 15         | 8           | 6          |
| 16         | 8           | 6          |
| 17         | 9           | 7          |
| 18         | 9           | 7          |
| 19         | 9           | 7          |
| 20         | 9           | 7          |

## Prepared vs. Learned Spells
Personagens do arquétipo Caster são magos do tipo "preparado", enquanto Off-Casters são magos inatos. O que isso significa é que enquanto Off-Casters tem um número mais limitado de magias conhecidas que eles conseguem usar a qualquer momento, Casters possuem um acervo consideravelmente maior de magias, mas só tem acesso a um número limitado delas por dia.

### Preparing Spells
Ao terminar um descanso longo, um Caster pode escolher até metade (arredondado pra cima) das suas magias conhecidas. As magias escolhidas são consideradas preparadas até seu próximo descanso longo. Como mencionado antes, todas as magias que um Off-Caster conhece são consideradas preparadas o tempo todo.

### Casting a Non-Prepared Spell
Ao tentar usar uma magia não-preparada, o mago deve realizar um teste de Misticismo com dificuldade igual a 10 + o custo em PM da magia. Se passar no teste, a magia ocorre como desejado. Se falhar no teste os custos da magia ainda ocorrem, mas o efeito dela não.


## Casting Spells

### Magic Focus
TODO: explicar foco mágico

### Casting while wearing armor
Because of the mental focus and precise gestures required for spellcasting, you must be proficient with the armor you are wearing to cast a spell. You are otherwise too distracted and physically hampered by your armor for spellcasting.

### Concentration
Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. If a spell must be maintained with concentration, that fact appears in its Duration entry, and the spell specifies how long you can concentrate on it. You can end concentration at any time (no action required).

- **Casting another spell that requires concentration**. You lose concentration on a spell if you cast another spell that requires concentration. You can’t concentrate on two spells at once.

- **Taking damage**. Whenever you take damage while you are concentrating on a spell, you must make a Constituition saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher. If you take damage from multiple sources, such as an arrow and a dragon’s breath, you make a separate saving throw for each source of damage.

- **Being incapacitated or killed**. You lose concentration on a spell if you are incapacitated or if you die.

## Spell levels
Spells are divided into 9 levels and cantrips (0-level spells).
{{page-break}}

| Spell Circle | Base MP Cost |
| :----------: | :----------: |
|   cantrips   |      0       |
|      1       |      1       |
|      2       |      2       |
|      3       |      3       |
|      4       |      4       |
|      5       |      6       |
|      6       |      8       |
|      7       |      10      |
|      8       |      12      |
|      9       |      15      |

## Spell Tags
All spells have one or more tags where they fit. The spell [Toque Chocante (link not found)](), for example, has the lightning, battle & energy tags. Tags are most useful for designers when creating spell lists for new classes.

For example, let's pretend we're creating a "blaster" caster class. That class is 110% ofensive, with only elemental, attack and some utility spells, while most of it's non-attacking abilities come from the class features, not it's spells. So, when creating the spell list for the class we can (instead of checking hundreds of spells manually and deciding if they work with the idea or not) take the 'energy', 'evocation' and 'decay' tags, and just say that the spell list consists of all spells with at least 1 of those tags.

It's important to point out that you're not tied to using only this to create a spell list. Are you mostly fine with using tags to define it, but also REALLY want characters from that class to be able to use Leomund's Tiny Hut? Just add it to the list, ignoring the tags. Don't want a class to have access to one specific spell from a tag you're allowing them? Remove that single spell. Do you just want to manually pick spells? Have at it. This tag system was made to aid the designer in speeding up the process of making a spell list, not to constrain your ideas in any way

## Flavor
TODO TALK ABOUT REFLAVORING AND STUFF. USE PLANTOMANCER AS EXAMPLE

%%
------ considering ------
### Level 1 & 2
check exported 5e.tools list in .json file in this folder

### Level 3
- plant growth
- speak with dead
- speak with plants
- stinking cloud
- call lightning
- daylight
- meld into stone
- sleet storm
- wind wall
- aura of vitality
- elemental weapon
- lightning arrow
- blink
- fear
- fireball
- fly
- gaseous form
- haste
- lightning bolt
- slow
- stinking cloud
- vampiric touch
- bestow curse
- blink
- clairvoyance
- leomund's tiny hut
- phantom steed
- remove curse
- sending
%%

# Spell Tags

## Tags

OBS: nothing stops spells from overlapping groups (e.g.: a spell can be wild, negative and arcane at once).
OBS2: it's possible for a spell to belong to a group without belonging to one of it's sub-tags. ex: Mage hand isn't ilusion, divination or enchantment, but it's trickery

### Considering:
- maybe separate curse into 2 different tags if the need arises (considering... sounds like maybe a good idea)
- remove physical tags. hasn't been an example yet of it being useful
- maybe add a tag specifically for self combat buffs?
- maybe remove summon from wild group. only do it after a concrete example shows up
- maybe split up boost? like body modifying stuff and added energy/extra stuff

### Tag descriptions

1. arcane: (general magic stuff. grease, prestidigitation, tiny hut and shit)

- #occult
  - #curse (debuf)
  - #unholy (warlock stuff)
  - #necromancy
- #sacred
  - #recovery (heals)
  - #boost
  - #holy (sunlight, radiant, cleric stuff)
- #arcane
  - #transmutation
  - #creation
  - #divination (also all communication stuff)
- #trickery
  - #ilusion
  - #enchantment
  - #speech
- #thaumaturgy (general attack stuff + defense)
  - #warmagic (self buffs, weapon attacks, summoning blades and shit. stuff that a fighter would like)
  - #evocation
  - #abjuration
- #wild
  - #plant
  - #feral
  - #summon
- #nature (does physical damage)
  - #wind
  - #water
  - #earth
- #elemental (fire+ice+lighning)
  - #fire
  - #lighning
  - #cold
- #decay
  - #poison
  - #acid
  - #necrotic
- #energy (special damage types)
  - #radiant
  - #psyquic
  - #force (force/magic/pure damage?)
- #physical (maybe not needed. hasn't been needed yet)
  - #slashing
  - #bludgeoning
  - #piercing


idea for counterspell cycle:
occult -> sacred -> occult
thaumaturgy -> trickery -> arcane -> thaumaturgy
nature -> elemental -> wild -> nature


# Spell List
. Global list of all spells, divided by circle:

{{load-spells-folder "./Spell Descriptions"}}

{{global-spell-list}}

# Spells
. Here is a list of all spells, sorted alphabetically
{{all-spells-descriptions}}

%%
Spells considering adapting:
- color spray
- alter self

%%

# Contracts, Paladins & Entities

Warlocks. Paladins. Clerics. Priests. That one fool who made a deal with the devil. The bard with the Dragon sugar daddy. What do they all have in common? They all have a contract with a powerful being, an "Entity".

## Paladins

In R20 any character that, willingly or not, finds themselves in a contract with a powerful being is called a "Paladin". That being is, until the contract is broken (an extremely rare occurrence), that Paladin's Entity.

## Contract
The contract, also known as their Oath, is what defines the relationship between a Paladin and their Entity, and grants them access to their Entity's miracles. The contract is rarely an explicitly defined thing, and even less commonly an actual, physical item.

While not all contracts are alike, nearly all of them follow a common pattern, with things a Paladin can do to earn Favor, and things that would make them lose Favor.

## Favor
Favor is the concept of how much an Entity cares for and is willing to help their Paladin. In gameplay terms, that is represented by Favor Points, or FP. At the moment that the contract is made, the Paladin starts with 0 FP. They gain FP by a variety of ways, and spend FP to gain their Entity's help and perform Miracles. A Paladin's maximum FP is equal to 5 times their level.

The following are the usual ways in which a Paladin earns the Favor of their entity, according to their contract.

### "The Mana Tax"
Every time a Paladin expends energy, they unconsciously send a portion of that energy to their Entity through the link their contract gives them. Mecanically, they have higher MP costs for all of their spells and abilities. The Paladin gains 1FP for every MP used towards "The Mana Tax".

A common rule for the "Mana Tax", as it's commonly refered to, is "+1 to the first skill used every turn that costs MP".

Other alternatives:
- "the maximum between 1 and half of the skill's cost, rounded down" (e.g.: 1 -> +1, 2 -> +1, 3 -> +1, 4 -> +2, 5 -> +2, 6 -> +3, etc.). 
- "+1 to all abilities and +X to all spells, where X is the spell's circle".

"The Mana Tax" doesn't count towards the maximum MP a character may use for a skill.

### Working towards their Mission
Though not common, some Paladins are given a specific mission by their Entity. Working towards that goal may earn them Favor with their Entity.

### Upholding the Entity's values
Doing something their Entity likes. Working towards their Entity's goals (if they have any), or helping them in general, is an obvious and very effective way of gaining their Favor, and improving the relationship between them and their Paladin.

### Losing Favor
Just as upholding their Entity's values and working towards their mission can help a Paladin earn their Favor, going against their values, helping their enemies or simply getting on their Entity's bad side can cause a Paladin to lose Favor (FP) with their Entity.

## Miracles
Every entity has a set of miracles their Paladins can perform with their help. All miracles work like active abilities a Paladin may use by spending their Entity's energy (and usually also their own). Mechanically, this means that performing Miracles always spends FP, and sometimes also MP/HP (the MP cost of a Miracle is exempt from the Mana Tax).

### Learning Miracles
By default, a Paladin knows up to 1 + their proficiency modifier of their Entity's Miracles for which they have the pre-requisites, and they can perform them. Every level up, they may choose to change one of those miracles for another one they have the pre-requisites for.

### Using Miracles
By default, you can spend up to 2 + your level FP on a single miracle. If it costs more than that, you cannot perform it.

### Spells as Miracles
Most miracles mechanically function as spells. When adding a spell as one of the miracles a god grants access to, it's recommended to make it's cost **(1 + orignal MP cost) FP**. So a cantrip would cost 1FP, a 1st level spell 2FP, a 6th level spell 9FP, etc. Unless stated otherwise, a Miracle version of a Spell can't be used with the original spell's modifications.

### Miracle casting attribute
Many miracles involve a character's "miracle casting attribute". That attribute is determined when the{{page-break}} {{}}contract is formed, and is usually either Presence or Sensibility.
### Miracle DC
The DC to resist your miracles is equal to **8 + proficiency bonus + Miracle casting attribute mod.**

## Blessings
Entities also have blessings, which are Feats that only their paladins have access to. A Paladin may on level up choose to gain a Blessing instead of one of their classe's feats.

## General Blessings
Toda benção tem como pré-requisito ser paladino.

**Conhecimento Sagrado.** Você aprende 2 Milagres do seu deus.

**NAME_HERE.** Você ganha +1FP por nível de personagem ao final de um descanso.

**NAME_HERE.** Ao fazer um teste de uma perícia de atributo mental (X FP, limitado pela sua proficiência): Você ganha +2 no teste por FP gasto. Os casos de uso válido desse Milagre passam pela discrição do mestre.

## Entity Specific Blessings

### Rosa Maria

### Lyf


# Entities
%% ! [Atarp - Treos (link not found)]() %%

############ INVALID_LINK "null" ############
############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############


{{dev-comment
## Designer Only

### Comparing gods

| God               | Element                 | Offensive Magic | Offensive Buffs | Defensive Buffs | Debuffs    | Utility     | Healing     |
| ----------------- | ----------------------- | --------------- | --------------- | --------------- | ---------- | ----------- | ----------- |
| Treos             | Metal (Silver)          | Médio           | Médio-Alto      | -               | Médio      | Média-Alta  | -           |
| Odrel             | Metal (Gold)            | Médio           | Médio           | Médio           | -          | Alta        | -           |
| Lyf               | Necrotic                | Médio-Alto      | Médio           | Médio           | Médio-Alto | Baixa       | Médio-Baixo |
| Auvetre           | Light, the sun and wind | -               | Baixo           | Médio           | -          | Alta        | Baixo       |
| Forisaltus        | Darkness/Moon           | Médio-Alto      | Baixo           | -               | Alto       | Média       | Alto        |
| Rosa Maria        | Plant                   | Baixo           | -               | Baixo           | Super-Alto | Média-Baixa | Médio       |
| Fênix Imortal     | Fire                    | Alto            | Alto            | -               | -          | Baixa       | Alto        |
| Orfã              | Ice                     | Alto            | -               | Médio           | Médio-Alto | Média       | -           |
| Wuzei             | Water                   | Médio-Alto      | Médio           | Médio           | Alto       | Média-Alta  | -           |
| Physical Strength | Earth                   | -               | Alto            | Alto            | -          | Média-Alta  | -           |

Names:
- Wuzei: chinese for squid
- forisaltus: foris: floresta + saltus: bosque (latin)

Entity Ideas:
- **Rat king.** buncha rats together. god of secrets, sneaking, filth, truth, keeping deals. worshipped by thieves, spies, judges, lawyers, some merchants.
- **Auvetre.** humanoid mass of light covered in broken chains. god of freedom, wind, destruction, sun.
- **FFXIII tunnel guy.** looks kinda like the fal'cie + a mole + armored bits. raw strength. earth. kindness and charity. technology, metal, weapons and progress.
- **Lost Child.** small 4-8yo child with oversized black clothes and snow white pale skin (not like white person white, but bone white), ocean blue eyes and dirty black hair with snow on top. goddess of ice, the moon, curiosity, knowledge, children, orfans, tracking, hunger.
- **Some lovecraftian name.** huge squid larger than the universe, covered in eyes and with 10k tentacles. it swims in the ocean, the horizon and the night sky. god of the sea, water, stars (every star is one of it's eyes), madness, art (inspires artists), lovers (invisibly connects fated lovers and has one eye for each one, that shines brighter when they first meet and join as one).


### Descrições pro gris

Esqueci ontem, então vai aqui os deuses (a maioria tá bem incompleta pq não tive motivo pra expandir neles até agora. se vc curtir de algum dá pra expandir ele). Começando com os que já são relevantes pra party atual:

*Treos.* Deus da sorte, do destino (especificamente de deixar as coisas para o destino) e de apostas. Seu símbolo é uma moeda de prata, e ele tem a forma de um humano de 30-50 anos com roupas casuais. Re-rolar dados, habilidades high risk/high rewards, etc.

*Lyf.* Deus da putridão e decomposição. Ele domina larvas, insetos, moscas, fungos, cogumelos, e outras formas de decomposição. Ele só busca satisfazer seu apetite infinito, devorando tudo que morre e permitindo que o ciclo da vida recomece por sua reciclagem. Seu símbolo é um desenho simplificado de uma mosca. Um dos personagens foi forçado a virar paladino de Lyf pq outro char ia morrer e Lyf interviu e salvou ele em troca do outro virar paladino dele e destruir uma organização necromântica que também é no momento um dos antagonistas principais pra party (pq eles "roubam a comida dele"). Ele dá umas habilidades de cura, debuffs, algumas magias ofensivas e de utilidade.

*Odrel.* Não conta pro resto do povo pfv pq eles não descobriram isso, mas um dos NPCs que eles conhecem é um deus. Odrel é um humanóide de uns 2,3m com pele azul e que fala de forma muito lenta e calma. ele é um comerciante de itens de aventura variados (em especial itens mágicos únicos) que atua na maioria das cidades do mundo pq na verdade tem várias cópias dele. O Odrel que a party conhece é o dono de uma loja da cidade local que opera ela com 3 outros Odrel's (a party não gosta mto dele pq eles roubaram a loja dele uma vez e ele fez um contrato mágico com eles pra pagarem de volta eventualmente. uma das formas principais de virar paladino dele é trabalhar pra ele e ser oficialmente contratado como empregado). Odrel é deus dos comerciantes e viajantes, que eles oram pra ele pra protegê-los de bandidos e acidentes.

*Rosa Maria (n recomendo essa mas já boto aqui pra dar uma ideia das possibilidades).* Essa é a fada que casou com um dos pcs. Ela é uma fada responsável por cuidar de uma grande parte da floresta mágica que expande tipo 1/3 do continente onde eles estão. Ela é deusa de plantas, mentira, pegadinhas e amor. A história dela com a party é que quando eles tavam viajando na floresta em questão eles viram ela disfarçada de exploradora humana sendo atacada por uma planta carnívora. Quando salvaram ela ela pediu pelo nome deles. 2 deles deram o nome e foram controlados por ela, aí começou o combate. Ela derrotou a party mas não deu dano fatal pq só tava brincando com eles. Como ela gostou do mago de plantas da party ela resolveu "pegar a mão dele com esse lindo dedo verde" como preço por deixar todos irem livres. A party não entendeu o sentido que ela tava usando em "pegar a mão dele", e em vez dele perder o braço ele ganhou um anél de noivado. Ela tem habilidades de encantamento, cura, crowd control, debuffs e dano.

*José.* Deus dos animais de estimação, animais, companheirismo, força e compaixão. A cidade onde a party está tem um templo da Ordem de José, e alguns NPCs que são bem amigáveis com a party são parte da ordem. Todo paladino da ordem tem um parceiro animal com quem o paladino divide suas habilidades. A história da Ordem é que a muito tempo atrás teve um grande guerreiro que teve origens como um fazendeiro, e seu boi de estimação (José) foi morto, e isso começou a jornada do companheiro do José para proteger os fracos e os laços importantes para que outros não sofressem como ele. É dito que a alma de José virou um Auroque Sagrado inspirado pelo seu companheiro, e a partir daí a ordem surgiu. O símbolo da ordem é um chifre.

Agora os outros deuses que já tem uma ideia mas não tão super bem definidos pq não tem nenhum impacto na história até agora:

*Wuzei.* Uma lula gigante cósmica com infinitos olhos ao longo de todo seu corpo e seus 10 mil tentáculos, que nada no céu, no mar e no vazio. Deus com vibe de horror cósmico bloodbourne-iano. Wuzei é deus do infinito, do mar, do horizonte, das águas, da arte, da loucura e do amor (é dito que Wuzei tem um olho olhando para cada indivíduo de um casal destinado, e quando eles se veem pela primeira vez os dois olhos de Wuzi brilham e se fundem, e esse novo olho observa e protege o casal por toda a sua vida).

*Auvetre.* Deus dos escravos, liberdade, vento, sol, movimento e destruição. Auvetre é representado como uma bola de luz coberta de correntes quebradas. Possui habilidades de remover debuffs, ataque e utilidade geral (principalmente movimento)

*Forisaltus.* Forisaltus costumava ser um elfo protetor de um bosque. Ele e seu bosque foram removidos desse plano material quando um lorde vampiro local e seu reino (onde seu bosque estava) foram banidos (sim, é Straahd. esse deus foi criado pra mesa de straahd que to preparando faz tempo). Cheio de raiva e corrompido pela energia negativa que vinha para o seu bosque do castelo maldito do morto-vivo e sem esperança por estar preso nesse reino sem luz nem dia, Forisaltus pouco a pouco foi ganhando mais rancor e virando o que ele é hoje (ele continua eternamente preso, mas a energia dele ainda consegue se manifestar no mundo material). Ele é deus das florestas, da noite e da lua, da vingança, dos animais e da violência. Possui habilidades de cura, debuffs, dano e crowd control.

*Orfã.* Uma criança pequena de cabelo branco longo usando farrapos e descalça no meio da neve, sempre procurando sua família e um lugar quente e aconchegante para descansar. A orfã é deusa do gelo e neve, conhecimento, tracking(esqueci o termo em pt), curiosidade, orfãos e crianças, fome e abundância. Ela é louvada por mães e parteiras, estudiosos, magos, pesquisadores, caçadores, mendigos e orfãos. Habilidades de gelo, com dano e debuffs e manipulação de Mana no geral.

*Rei Rato.* Todos os ratos do mundo fazem parte do Rei Rato. Quando ele decide se mostrar para alguém, centenas de ratos se juntam e formam uma massa enorme no formato de um rato gigante. O Rei Rato ouve tudo que um rato ouve, então ele sabe de quase tudo. Ele adora ouvir segredos novos, então ele está sempre aberto para te contar o que você quiser se você oferecer um segredo equivalente como preço. O Rei Rato é o deus dos segredos, de stealth, da verdade e de cumprir contratos. Ele é louvado por ladinos, advogados, juízes, ladrões, comerciantes, espiões e algumas nobrezas e realezas. Habilidades de stealth, observação e controle sobre ratos.

}}

# Miracle List

## Lyf
**Offer**. 1minute (1PM): Rot a body and give it as food to lyf. Mold, insects and larvae eat away at it. Gain +4FP, +1HP.

**Rot**. (As part of an attack, or Action) 2FP: you enhance your weapon with necrotic energy, or make a ranged spell attack (range: 8sqr). If you hit the attack, you deal 3d6 necrotic damage (or +2d6 if it was as part of an attack), and rot away at your opponents defense, giving them -1 Defense for the rest of the scene.
+1MP, +2FP: increase the damage by +2d6

**Eat/Devorar**. 2FP. melee spell. PRE save
if alive: 4d6 dmg, heal for half.
if corpse: 4d6 healing.

**Benção de Bael.** Ação (2FP, 1MP): Escolha uma aliado que você consegue ver em 10sqr. Ele recupera 3d4 HP. Você pode gastar +1FP e +1MP para aumentar a cura em 2d4.

**Maldição de Zehbub.** Ação (2FP, 1MP): Escolha uma criatura com corpo orgânico que consegue ver em 10sqr. Um enxame de insetos começa a devorar o alvo vivo, causando 5d4 de dano. Você pode concentrar nesse milagre, causando 2d4 de dano adicional no início de cada um dos seus turnos.

**Aura of Decay**. 3FP, 0MP. Enemies in the aura have -2 Defense, and allies deal an extra 2d4 necrotic damage on their first damaging ability in their turn. Pré-requisito: ser Spelgard.

**Path of Mycelium/Caminho do Micélio**. Ação (4FP): Um portal de micélios se forma na sua frente, e ao passar por ele você sai em um portal equivalente que aparece em um ponto a sua escolha que possa ver em até 30sqr de distância do original.

**Detonar Corpo.** Ação (5FP): Um cadaver a sua escolha em 18sqr é devorado de dentro pra fora por uma massa de vermes e bactérias. O cadaver incha com um buildup de ácido, gás, mana e outros resultados da digestão do corpo. O corpo explode, jorrando uma mistura escura e espessa em um raio de 2sqr. Todas as criaturas acertadas pela mistura recebem 6d6 dano necrótico, ou metade se passarem num teste de resistência de CON.

## Auvetre

## Rosa Maria

**Herbomancia: Nhac.** Ação (3FP, 2MP, concentração):

Nasce uma planta piranha. Ela ataca um inimigo a sua escolha em 1sqr de alcance. A planta faz um ataque mágico usando seu atributo mágico +3 para acertar. Se acertar ela causa 3d6 de dano perfurante, e restringe o alvo (condição agarrado). O alvo pode usar uma ação maior em cada turno para realizar um teste de resistência de força (CD milagre) para tentar escapar. Nos seus turnos o alvo toma 3d8 de dano ácido. Se você perder concentração a planta morre e o alvo é solto.

**Sleep**. Ação (2FP): [Sleep (link not found)]() Spell

**Charm Person**. Ação (2FP) [Charm Person (link not found)]() Spell

[Healing Spirit (link not found)]()

## Wuzei

### 1 FP
**Visão limitada de Wuzei.** Você usa a magia [Guidance (link not found)]().

### 2FP
**Inspirar Medo.** Você usa a magia [Cause Fear (link not found)]().

**Detectar Ameaças.** Você usa a magia [Detectar Ameaças (link not found)](), Você pode usar aprimoramentos (gasta FP em vez de MP nos aprimoramentos).

**Suspiros do Infinito.** Você usa a magia [Dissonant Whispers (link not found)]().

**Escuridão.** Você usa a magia [Escuridão (link not found)]().

**Raio do Caminho.** Você usa a magia [Guiding Bolt (link not found)](). O milagre dá dano psiquico em vez de de fogo.

**Realização Fútil.** Você usa a magia [Hideous Laughter (link not found)]().

**Turbilhão de Wuzei.** Você usa a magia [Tentacle Twister (link not found)](). Você pode usar aprimoramentos (gasta FP em vez de MP nos aprimoramentos).

**Blindness (pensar num nome depois).** Você usa a magia [Blindness Deafness (link not found)]() (só pode cegar).

### 3FP
**Crown of Madness.** Você usa a magia [Crown of Madness (link not found)]().

**Darkvision.** Você usa a magia [Darkvision (link not found)]().

**Hold Person.** Você usa a magia [Hold Person (link not found)]().

**Laço Protetor.** Você usa a magia [Laço Protetor (link not found)]().

**Mind Whip.** Você usa a magia [Mind Whip (link not found)]().

**See Invisibility.** Você usa a magia [See Invisibility (link not found)]().

# Blessing List


# Companions
This is an optional rule. With this rule, a character can acquire and train a Companion to aid them in their adventures, growing stronger as they do.

To gain a Companion the character must gain one or more **Companion: \_\_\_\_** Feats. (See: Companion Feats). The companion's **Tier** is equal to the ammount of **Companion: \_\_\_\_** Feats the companion's master has for that companion.

During combat, the Companion acts on the same initiative as their master. The Companion has one move action. The Companion's master has the **Command** ability.

**Command.** Movement: your Companion follows a simple order or performs one of their abilities of your choice.

## Stats
The Companion's maximum HP is calculated by:
- **3 \* PC\_Level + (Companion\_Tier \* PC\_SEN\_MOD)**
The Companion has no MP, and uses their master's MP for their ability that cost MP.

The Companion has Defense equal to:
- **10 + Player\_Proficiency\_Bonus**

The Companion by default has either:
- 4sqr ground movement speed
- 3sqr flying movement speed

When the Companion is acquired, the DM choses 2 attributes. The Companion has proficiency with those saving throws, using their master's proficiency. The companion also has proficiency with 2 skills of the DM's choice.

Attributes: Distribute 12, 12, 10, 8, 7, 5 between the Companion's attributes. Every Tier after the first gives the Companion an ASI.

##### Maximum Attributes

| Master Level | Max Attribute Score |
|:------------:|:-------------------:|
|     1-3      |         14          |
|     4-5      |         16          |
|     6-7      |         18          |
|     8-10     |         20          |
|     11+      |         22          |

The companion's size is small or tiny. The DM may chose to have the companion grow (by time passing, when their master levels up, when it increases in tier, etc.). The maximum size a companion can have is determined by the table below

| Companion Tier | Companion Maximum Size |
|:--------------:|:----------------------:|
|       1        |         Small          |
|       2        |         Medium         |
|      3-5       |         Large          |
|       6+       |          Huge          |

## Companion death
Companion death rules work the same as PC death rules (can be one-shot, have death saves). If a Companion dies then their master can in their next Full Reset (see: Rest rules) either catch a new Companion with the same stats or lose their **Companion: \_\_\_\_** and gain new Feats of their choice that they have access to.

## Rest
The Companion recovers as much HP as their master does whenever both of them rest.

## Companion Skills
This is a list of all companion skills

**Simple Attack.** The companion attacks an enemy within melee range. This attack counts as a finesse attack (see: finesse weapons). *Pre-requisite: Companion: Attack Initiate*.

The damage dice of the attack depends on the companion's tier:

| Tier | Damage Dice |
|:----:|:-----------:|
|  1   |     1d6     |
|  2   |     1d8     |
|  3   |    1d10     |
|  4+  |    1d12     |

**Special Attack.** The companion attacks an enemy. The attack has either:

|      Range       | Base Cost |
|:----------------:|:---------:|
| Melee 1sqr reach |   -1 PM   |
| Melee 2sqr reach |   0 PM    |
|   Ranged 4sqr    |   1 PM    |
|    Line 6sqr     |   2 PM    |
|    cone 4sqr     |   3 PM    |
|   radius 4sqr    |   3 PM    |

If it's a line, cone or radius then instead of an attack roll it becomes a DEX save with DC = 10 + player proficiency + Companion Tier. On save, the target ignores the damage.

|     Damage Type     | Cost  |
|:-------------------:|:-----:|
|      physical       | +0 PM |
|       poison        | +0 PM |
|        acid         | +1 PM |
| fire, ice, electric | +1 PM |

{{page-break}}

| Damage Dice | Cost  |
|:-----------:|:-----:|
|      1      | -1 PM |
|      2      | 0 PM  |
|      3      | 1 PM  |
|      4      | 2 PM  |
|      5      | 4 PM  |

**Cast Magic.** The companion casts one of the spells they know (MP Cost: 1 + the spells circle + the spells cost). *Pre-requisite: Companion: Magic Initiate*.

**Help.** Give one character advantage on their next skill check, attack or saving throw.

**Defend.** 1PM: add +3 to an adjacent character's Defense and saving throws. +1 PM to use as a reaction. *Pre-requisite: Companion: Defender*


# Conditions

### Caído (Prone)
Um personagem caído tem metade da sua velocidade de movimento, tem -2 de defesa contra ataques corpo-a-corpo e +2 contra ataques a distância. Se levantar requer uma ação de movimento. Um personagem pode tentar se levantar como ação livre, e consegue se passar em um teste de acrobacia (CD 14)

Prone target has movement speed halved, -2 defense against melee attacks and +2 against ranged ones. Standing up from prone takes a movement action. A prone target can once per turn attempt to stand up as a free action, if they pass a DC 14 Acrobatics test

### Exaustão (Exhaustion)
Para cada nível de exaustão (até 10) que um personagem tiver, ele tem:
- -1 em todas as rolagens de d20
- -1 para os CDs de suas habilidades e magias
Se um personagem ganhar um nível de exaustão quando já tem 10, ele morre.

For every level of exhaustion (up to 10) a character has, they have:
- -1 to all d20 rolls
- -1 all of their Save DCs
If a character reaches 11th level of exhaustion, they die.

### Vulnerable
-2 Defense.

### Burning
Burning targets take damage at the start of their turn and have disadvantage on concentration checks. Any creature can put out a burning creature by spending their action to pat them out (unless the burn effect specifies otherwise). By default, the burn damage is 1d6 per turn.

### Amedrontado (Frightened)
Uma criatura amedrontada tem:
- desvantagem em rolagens em ações contra a fonte do medo
- gasta todo o seu movimento disponível fugindo da fonte do medo, a não ser que passe em um teste de resistência de Presença (CD max(10, CD do efeito que causou medo -5))\*
	- OBS: Se o efeito do medo envolver um teste de resistência a cada turno, a criatura amedrontada só faz um teste, e usa o resultado para o efeito de medo e para o movimento forçado

A frightened has disadvantage on all rolls made against the source of their fright. At the start of their turn, the frightened creature must succeed on a DC 10 Presence save (or the DC of the fear effect -5, whichever is higher), or they spend all their movement running away from the source of their fear. If the fear effect involves a save each turn, the creature makes one save and considers its result for both the effect save and the "run away" save.

### Paralyzed
A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.

### Charmed
A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.

### Cego (Blinded)
• A blinded creature can’t see and automatically fails any ability check that requires sight.
• Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.

### Light and vision
A given area might be lightly or heavily obscured. In a lightly obscured area, such as dim light, patchy fog, or moderate foliage, creatures have disadvantage on Perception checks that rely on sight.

A heavily obscured area—such as darkness, opaque
fog, or dense foliage—blocks vision entirely. A creature in a heavily obscured area effectively suffers from the blinded condition

Bright light lets most creatures see normally. Even gloomy days provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius. Dim light, also called shadows, creates a lightly obscured area. Darkness creates a heavily obscured area.

### Agarrado (Grapple)
The target is Grappled, and the grapple’s escape DC equals **8 + your Strength modifier + your Proficiency Bonus**. This grapple is possible only if the target is no more than one Size larger than you and if you have a hand free to grab the target. Shove. You either push the target 5 feet away or knock the target Prone. This shove is possible only if the target is no more than one Size larger than you. (See: [Manobras](#p2))


# Rest & Recovery
An adventuring character recovers HP and MP mainly through resting.

## Provisions
Food, firewood, water... to properly rest, a party needs to expend some provisions. To avoid tracking everything individually, it's recommended to simply have recorded how much money the party has in supplies.

## How to recover
When the party decides to rest, they set up camp for the night.

### Difficulty and Rest CR
The DM chooses the base difficulty for the rest. Chose a base condition level for the situation, with 8 being a favorable and easy condition, and the higher the number, the more harsh the conditions.

### Expending Provisions
When resting, expending more or less resources has an effect on the quality of the teams' sleep. This gives that character a bonus for their Survival Roll for the rest.

| Description       | amount spent per person | Bonus to Roll |
| ----------------- | ----------------------- | ------------- |
| Passando Fome     | 0                       | -3            |
| Racionando Comida | 2 silver                | -1            |
| Humilde           | 5 silver                | 0             |
| Confortável       | 20 silver               | +1            |
| Luxuoso           | 50 silver               | +2            |
| Ostentando        | 150 silver              | +3            |

### Improving the condition
A character may attempt to use a skill to improve their rest condition (cooking and survival being the most common ones). The DC is equal to the rest DC.

If they pass the check, all who eat their cooking receive a +2 bonus on this rest. For every 5 above the CD, increase that by +2.

### Result
After expending provisions and optionally trying to improve the condition with a skill roll, all characters roll Survival against the Rest DC. The overall rest condition is determined as such:

| Roll                 | Condition             |
| -------------------- | --------------------- |
| Failed               | Poor Condition        |
| Passed               | Normal Condition      |
| Passed by 5 or more  | Good Condition        |
| Passed by 10 or more | Exceptional Condition |

Consult the table below to see how the rest affected the characters.

| Condition             | HP Recovery | MP Recovery | Duration | Exhaustion        |
| --------------------- | ----------- | ----------- | -------- | ----------------- |
| Poor Condition        | 0           | level/2     | 5 hours  | See below         |
| Normal Condition      | level/2     | level       | 8 hours  | recovers 1 level  |
| Good Condition        | level       | level\*2    | 8 hours  | recovers 2 levels |
| Exceptional Condition | level\*2    | level\*3    | 8 hours  | recovers 2 levels |
| Full Reset            | 100%        | 100%        | 1 week   | fully recovers    |

**Poor Condition Rest.** At the end of the rest you must pass a CON save (DC: Rest DC) or gain 1 level of Exhaustion. Gain +1 level for every 5 below the CD.

#### Descriptions and examples of resting conditions
- **Bad Condition**: Sleeping outdoors without proper equipment and on an empty stomach doesn't give the body, mind and soul the ease and support to properly recover. Takes 5 hours.
- **Normal Condition**: Sleeping outdoors in a sleeping bag and doing a night-watch rotation shift is enough to give a moment of rest and recovery. Takes 8 hours.
- **Good Condition**: Having hearty meal, not taking night watch, sleeping in a cozy tent or next to a warm fire for a long time really makes a difference out there in the wild. Takes 8 hours.
- **Exceptional Condition**: Having a feast, not taking night watch, sleeping in a warm and comfortable condition reinvigorates someone's spirits entirely! Takes 8 hours.
- **Full Reset**: Completely recover's a character's HP & MP, and removes any debilitating conditions except for diseases and curses. Takes 1 week of rest with no adverse conditions (having time off in a Town in between adventures). Recovers fully from exhaustion.

## Skipping a Rest
When skipping a Rest, a character needs to roll a CON or PRE saving throw with DC equal to:
- **15 + 5 \* \# of consecutive days not having slept** 
(1st day: 15, 2nd -> 20, 3rd -> 25,...)

If they fail the character gains 1 level of exhaustion, +1 for every 5 points below the DC. (e.g. a 10 roll against a DC of 20 would give a character +3 exhaustion levels)

{{page-break}}
## Regra Opcional: Mantimentos automáticos
Para grupos que preferirem não lidar com gerenciamento de mantimentos ao longo de viagens longas, uma opção recomendada é ignorar as regras de mantimentos, e considerar que todas as rolagens de descanso são feitas com 5 ou 20 pratas.


# Companions
This is an optional rule. With this rule, a character can acquire and train a Companion to aid them in their adventures, growing stronger as they do.

To gain a Companion the character must gain one or more **Companion: \_\_\_\_** Feats. (See: Companion Feats). The companion's **Tier** is equal to the ammount of **Companion: \_\_\_\_** Feats the companion's master has for that companion.

During combat, the Companion acts on the same initiative as their master. The Companion has one move action. The Companion's master has the **Command** ability.

**Command.** Movement: your Companion follows a simple order or performs one of their abilities of your choice.

## Stats
The Companion's maximum HP is calculated by:
- **3 \* PC\_Level + (Companion\_Tier \* PC\_SEN\_MOD)**
The Companion has no MP, and uses their master's MP for their ability that cost MP.

The Companion has Defense equal to:
- **10 + Player\_Proficiency\_Bonus**

The Companion by default has either:
- 4sqr ground movement speed
- 3sqr flying movement speed

When the Companion is acquired, the DM choses 2 attributes. The Companion has proficiency with those saving throws, using their master's proficiency. The companion also has proficiency with 2 skills of the DM's choice.

Attributes: Distribute 12, 12, 10, 8, 7, 5 between the Companion's attributes. Every Tier after the first gives the Companion an ASI.

##### Maximum Attributes

| Master Level | Max Attribute Score |
|:------------:|:-------------------:|
|     1-3      |         14          |
|     4-5      |         16          |
|     6-7      |         18          |
|     8-10     |         20          |
|     11+      |         22          |

The companion's size is small or tiny. The DM may chose to have the companion grow (by time passing, when their master levels up, when it increases in tier, etc.). The maximum size a companion can have is determined by the table below

| Companion Tier | Companion Maximum Size |
|:--------------:|:----------------------:|
|       1        |         Small          |
|       2        |         Medium         |
|      3-5       |         Large          |
|       6+       |          Huge          |

## Companion death
Companion death rules work the same as PC death rules (can be one-shot, have death saves). If a Companion dies then their master can in their next Full Reset (see: Rest rules) either catch a new Companion with the same stats or lose their **Companion: \_\_\_\_** and gain new Feats of their choice that they have access to.

## Rest
The Companion recovers as much HP as their master does whenever both of them rest.

## Companion Skills
This is a list of all companion skills

**Simple Attack.** The companion attacks an enemy within melee range. This attack counts as a finesse attack (see: finesse weapons). *Pre-requisite: Companion: Attack Initiate*.

The damage dice of the attack depends on the companion's tier:

| Tier | Damage Dice |
|:----:|:-----------:|
|  1   |     1d6     |
|  2   |     1d8     |
|  3   |    1d10     |
|  4+  |    1d12     |

**Special Attack.** The companion attacks an enemy. The attack has either:

|      Range       | Base Cost |
|:----------------:|:---------:|
| Melee 1sqr reach |   -1 PM   |
| Melee 2sqr reach |   0 PM    |
|   Ranged 4sqr    |   1 PM    |
|    Line 6sqr     |   2 PM    |
|    cone 4sqr     |   3 PM    |
|   radius 4sqr    |   3 PM    |

If it's a line, cone or radius then instead of an attack roll it becomes a DEX save with DC = 10 + player proficiency + Companion Tier. On save, the target ignores the damage.

|     Damage Type     | Cost  |
|:-------------------:|:-----:|
|      physical       | +0 PM |
|       poison        | +0 PM |
|        acid         | +1 PM |
| fire, ice, electric | +1 PM |

{{page-break}}

| Damage Dice | Cost  |
|:-----------:|:-----:|
|      1      | -1 PM |
|      2      | 0 PM  |
|      3      | 1 PM  |
|      4      | 2 PM  |
|      5      | 4 PM  |

**Cast Magic.** The companion casts one of the spells they know (MP Cost: 1 + the spells circle + the spells cost). *Pre-requisite: Companion: Magic Initiate*.

**Help.** Give one character advantage on their next skill check, attack or saving throw.

**Defend.** 1PM: add +3 to an adjacent character's Defense and saving throws. +1 PM to use as a reaction. *Pre-requisite: Companion: Defender*

{{pageNumber,auto}}

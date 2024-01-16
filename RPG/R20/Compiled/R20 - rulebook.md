

{{frontCover}}


{{logo ![](/assets/naturalCritLogoRed.svg)}}

# R20
## Sistema Completo compatível com D&D 5e
___

{{banner HOMEBREW}}



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



\page
{{toc,wide
# Table Of Contents
- ### [{{ Attributes }}{{ 6 }}](#p6)
- #### [{{ Description }}{{ 6 }}](#p6)
- #### [{{ Determining Base Attribute Scores }}{{ 6 }}](#p6)
- #### [{{ Modifiers }}{{ 6 }}](#p6)
- #### [{{ Effects }}{{ 6 }}](#p6)
- ### [{{ Skills & Skill Checks }}{{ 7 }}](#p7)
- #### [{{ Skills: }}{{ 7 }}](#p7)
- #### [{{ Skills by Attributes }}{{ 7 }}](#p7)
- #### [{{ Skills by group }}{{ 7 }}](#p7)
- #### [{{ Skill Checks }}{{ 8 }}](#p8)
- #### [{{ Skill Bonus & Skill Points }}{{ 9 }}](#p9)
- #### [{{ Passive Skill Rolls }}{{ 9 }}](#p9)
- ### [{{ Archetypes }}{{ 10 }}](#p10)
- #### [{{ Caster }}{{ 10 }}](#p10)
- #### [{{ Off-Caster }}{{ 10 }}](#p10)
- #### [{{ Specialist }}{{ 11 }}](#p11)
- #### [{{ Martial }}{{ 11 }}](#p11)
- ### [{{ Classes }}{{ 12 }}](#p12)
- #### [{{ List of Classes }}{{ 12 }}](#p12)
- #### [{{ Resumo e comparação das classes }}{{ 13 }}](#p13)
- #### [{{ Creating a Class }}{{ 14 }}](#p14)
- ### [{{ Alquimist (Specialist) }}{{ 15 }}](#p15)
- ### [{{ Beast Warrior (Martial) }}{{ 16 }}](#p16)
- ### [{{ Champion (Martial) }}{{ 18 }}](#p18)
- ### [{{ Channeler (Caster) }}{{ 20 }}](#p20)
- #### [{{  Spells }}{{ 22 }}](#p22)
- ### [{{ Dancer (Specialist) }}{{ 24 }}](#p24)
- ### [{{ Fighter (Martial) }}{{ 26 }}](#p26)
- ### [{{ Juggernaut (Martial) }}{{ 27 }}](#p27)
- ### [{{ Plantomancer (Caster) }}{{ 29 }}](#p29)
- #### [{{  Spells }}{{ 30 }}](#p30)
- ### [{{ Rogue (Specialist) }}{{ 32 }}](#p32)
- ### [{{ Spelgard (Off-Caster) }}{{ 34 }}](#p34)
- #### [{{  Spells }}{{ 35 }}](#p35)
- ### [{{ Werebeast (Specialist) }}{{ 37 }}](#p37)
- ### [{{ Witch (Caster) }}{{ 39 }}](#p39)
- #### [{{  Spells }}{{ 40 }}](#p40)
- ### [{{ Combat }}{{ 42 }}](#p42)
- #### [{{ Round }}{{ 42 }}](#p42)
- #### [{{ Combat Actions }}{{ 42 }}](#p42)
- #### [{{ Attacking and Defending }}{{ 42 }}](#p42)
- #### [{{ Movement }}{{ 43 }}](#p43)
- #### [{{ Maneuvers }}{{ 43 }}](#p43)
- #### [{{ Manobras }}{{ 43 }}](#p43)
- #### [{{ Tamanho }}{{ 44 }}](#p44)
- ### [{{ Origins }}{{ 45 }}](#p45)
- #### [{{ Origin Lists }}{{ 45 }}](#p45)
- ### [{{ Proficiency }}{{ 46 }}](#p46)
- ### [{{ General Feats }}{{ 47 }}](#p47)
- ### [{{ Martial Feats }}{{ 48 }}](#p48)
- ### [{{ Caster Feats }}{{ 49 }}](#p49)
- ### [{{ Specialist Feats }}{{ 50 }}](#p50)
- ### [{{ Companion Feats }}{{ 51 }}](#p51)
}}

\page
{{toc,wide
# Table Of Contents
- ### [{{ Starting Items }}{{ 52 }}](#p52)
- ### [{{ Carga }}{{ 53 }}](#p53)
- #### [{{ Sobrecarga }}{{ 53 }}](#p53)
- ### [{{ Coins }}{{ 54 }}](#p54)
- ### [{{ Equipment }}{{ 55 }}](#p55)
- #### [{{ Simple Weapons }}{{ 55 }}](#p55)
- #### [{{ Martial Weapons }}{{ 55 }}](#p55)
- #### [{{ Armor }}{{ 55 }}](#p55)
- #### [{{ Magic Staves }}{{ 56 }}](#p56)
- ### [{{ Consumable Items }}{{ 57 }}](#p57)
- #### [{{ Potions }}{{ 57 }}](#p57)
- #### [{{ Poisons }}{{ 57 }}](#p57)
- #### [{{ Óleos }}{{ 58 }}](#p58)
- ### [{{ Spell Scrolls }}{{ 59 }}](#p59)
- #### [{{ Casting a Spell from a Scroll }}{{ 59 }}](#p59)
- #### [{{ Learning a Spell from a Scroll }}{{ 59 }}](#p59)
- #### [{{ Creating Spell Scrolls }}{{ 59 }}](#p59)
- #### [{{ Buying Spell Scrolls }}{{ 59 }}](#p59)
- #### [{{ Ideas for change }}{{ 59 }}](#p59)
- #### [{{ Working with item levels. }}{{ 59 }}](#p59)
- ### [{{ Magic Items }}{{ 60 }}](#p60)
- #### [{{ Runes }}{{ 61 }}](#p61)
- ### [{{ Crafting }}{{ 62 }}](#p62)
- #### [{{ Crafting Rolls and time to produce an item }}{{ 62 }}](#p62)
- #### [{{ Crafting in Bulk }}{{ 62 }}](#p62)
- #### [{{ Crafting Materials (Took mostly from D&D) }}{{ 62 }}](#p62)
- ### [{{ Spells }}{{ 63 }}](#p63)
- #### [{{ Learning Spells }}{{ 63 }}](#p63)
- #### [{{ Prepared vs. Learned Spells }}{{ 63 }}](#p63)
- #### [{{ Casting Spells }}{{ 63 }}](#p63)
- #### [{{ Spell levels }}{{ 63 }}](#p63)
- #### [{{ Spell Tags }}{{ 64 }}](#p64)
- #### [{{ Flavor }}{{ 64 }}](#p64)
- ### [{{ Spell Tags }}{{ 65 }}](#p65)
- #### [{{ Tags }}{{ 65 }}](#p65)
- ### [{{ Spell List }}{{ 66 }}](#p66)
- #### [{{ All Spells }}{{ 66 }}](#p66)
- ### [{{ Spells }}{{ 68 }}](#p68)
- ### [{{ Contracts, Paladins & Entities }}{{ 103 }}](#p103)
- #### [{{ Paladins }}{{ 103 }}](#p103)
- #### [{{ Contract }}{{ 103 }}](#p103)
- #### [{{ Favor }}{{ 103 }}](#p103)
- #### [{{ Losing Favor }}{{ 103 }}](#p103)
- #### [{{ Miracles }}{{ 103 }}](#p103)
- ### [{{ Companions }}{{ 104 }}](#p104)
- #### [{{ Stats }}{{ 104 }}](#p104)
- #### [{{ Companion death }}{{ 104 }}](#p104)
- #### [{{ Rest }}{{ 104 }}](#p104)
- #### [{{ Companion Skills }}{{ 104 }}](#p104)
- ### [{{ Conditions }}{{ 106 }}](#p106)
- ### [{{ Rest & Recovery }}{{ 107 }}](#p107)
- #### [{{ Provisions }}{{ 107 }}](#p107)
- #### [{{ How to recover }}{{ 107 }}](#p107)
}}

\page
{{toc,wide
# Table Of Contents
- #### [{{ Skipping a Rest }}{{ 107 }}](#p107)
- #### [{{ Regra Opcional: Mantimentos automáticos }}{{ 107 }}](#p107)
- ### [{{ Companions }}{{ 108 }}](#p108)
- #### [{{ Stats }}{{ 108 }}](#p108)
- #### [{{ Companion death }}{{ 108 }}](#p108)
- #### [{{ Rest }}{{ 108 }}](#p108)
- #### [{{ Companion Skills }}{{ 108 }}](#p108)
}}

{{pageNumber,auto}}
\page
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


{{pageNumber,auto}}
\page
# Skills & Skill Checks

## Skills:
blablabla do this intro paragraph later.

Description of skills below:



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

{{pageNumber,auto}}
\page

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

{{pageNumber,auto}}
\page

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



{{pageNumber,auto}}
\page
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
| Level | Spell's Circle |
|:-----:|:--------------:|
|  1-2  |       1        |
|  3-4  |       2        |
|  5-6  |       3        |
|  7-8  |       4        |
| 9-10  |       5        |
| 11-12 |       6        |
| 13-14 |       7        |
| 15-16 |       8        | 
| 17-20 |       9        |




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
- **No Cantrips**: An Off-Caster can't learn cantrips (0 MP cost spells) {{pageNumber,auto}}
\page

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
- **Attack of Oportunity:** a Martial Character is able to perform [[Combat Actions#Attack of Opportunity]].

<!-- idea: since caster scaling is usually quadratic and really strong (and off-casters above lv7 also have 2 attacks), maybe giving martial classes exclusive access to 3 attacks per turn could be cool -->




{{pageNumber,auto}}
\page
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
Inspiration (flat bonus or dice? AoE or single target?). off-caster. Can substitue an attack for a trick using artistic instrument. talvez usar a ideia do [[RPG/R20/Compiled/Classes/multi-form changing guy|multi-form changing guy]]

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

{{pageNumber,auto}}
\page


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

{{pageNumber,auto}}
\page


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




{{pageNumber,auto}}
\page
# Alquimist (Specialist)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 10 (+CON mod.) maximum hit points, and gain an extra 3 (+CON mod.) per level.

**MP**: 5 per level.

**Equipment Proficiencies:** NONE.

**Resistências:** Strength.

{{classTable,decoration,frame
##### Alquimist
| Level | Proficiency Bonus | Features |
| :---: | :---------------: | :------- | 
| 1st | +1 | Make Concoction? |
| 2nd | +1 | Alquimist Feat, Expertise |
| 3rd | +2 | Alquimist Feat |
| 4th | +2 | Alquimist Feat, Attribute Score Improvement |
| 5th | +3 | Alquimist Feat |
| 6th | +3 | Alquimist Feat, Attribute Score Improvement |
| 7th | +4 | Alquimist Feat |
| 8th | +4 | Alquimist Feat, Attribute Score Improvement |
| 9th | +5 | Alquimist Feat |
| 10th | +5 | Alquimist Feat, Attribute Score Improvement |
| 11th | +6 | Alquimist Feat |
| 12th | +6 | Alquimist Feat, Attribute Score Improvement |
| 13th | +7 | Alquimist Feat |
| 14th | +7 | Alquimist Feat |
| 15th | +8 | Alquimist Feat, Attribute Score Improvement |
| 16th | +8 | Alquimist Feat |
| 17th | +9 | Alquimist Feat, Attribute Score Improvement |
| 18th | +9 | Alquimist Feat |
| 19th | +10 | Alquimist Feat, Attribute Score Improvement |
| 20th | +10 | Alquimist Feat |
}}


**Make Concoction?.** undefined

### Alquimist Feats
Beginning at level 2, every time you gain a level in Alquimist you gain a Witch Feat. You may instead of a Alquimist feat take a Specialist or General Feat of your choice.




**Elixir Experimental.** Spend PM, get potion with random benefitial effect.

| d6  | Efeito Positivo                                                                                         |
|:---:|:------------------------------------------------------------------------------------------------------- |
|  1  | 2d4+INT PV                                                                                              |
|  2  | +2sqr (3m) velocidade de movimento                                                                      |
|  3  | +1 Defesa pela cena                                                                                     |
|  4  | +1d4 em rolagens de ataque e testes de resistência                                                      |
|  5  | 1d4 PM temporários                                                                                      |
|  6  | 50% de chance de perder sua ação de movimento ou ganhar uma ação padrão extra no início dos seus turnos |

**Poison.** Spend PM, get poison.

**Ingredients.** Can store up to X ingredients. If you use them, the MP cost of your stuff is decreased.

Ideia: cada dia tem x poções positivas/negativas, limitado pelos ingredientes que coletou.

---

### Alquimist Feats

Begining at level 2, every time you gain a level in Alquimist you gain a Alquimist Feat. You may instead of a Alquimist feat take a Martial or General Feat of your choice.

- **Feat Example**. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

- **Feat Example**. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

- **Feat Example**. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.

- **Alcóolito.**
{{pageNumber,auto}}
\page
# Beast Warrior (Martial)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 5 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons. Light and medium armor.

**Resistências:** Constituition, Sensibility.

{{classTable,decoration,frame
##### Beast Warrior
| Level | Proficiency Bonus | Features |Savage Attack | 
| :---: | :---------------: | :------- | :----: |
| 1st | +1 | Rage (+2) | - |
| 2nd | +1 | Beast Warrior Feat, Savage Attack | 1d4+CON |
| 3rd | +2 | Beast Warrior Feat, Defesa Animal | 1d4+CON |
| 4th | +2 | Beast Warrior Feat, Attribute Score Improvement | 1d4+CON |
| 5th | +3 | Beast Warrior Feat, Extra Attack | 1d4+CON |
| 6th | +3 | Beast Warrior Feat, Attribute Score Improvement | 2d4+CON |
| 7th | +4 | Beast Warrior Feat, Rage (+3) | 2d4+CON |
| 8th | +4 | Beast Warrior Feat, Wild Senses (3) | 2d4+CON |
| 9th | +5 | Beast Warrior Feat, Attribute Score Improvement | 2d4+CON |
| 10th | +5 | Beast Warrior Feat | 3d4+CON |
| 11th | +6 | Beast Warrior Feat, Rage (+4) | 3d4+CON |
| 12th | +6 | Beast Warrior Feat, Attribute Score Improvement | 3d4+CON |
| 13th | +7 | Beast Warrior Feat, Wild Senses (4) | 3d4+CON |
| 14th | +7 | Beast Warrior Feat | 4d4+CON |
| 15th | +8 | Beast Warrior Feat, Attribute Score Improvement | 4d4+CON |
| 16th | +8 | Beast Warrior Feat, Rage (+5) | 4d4+CON |
| 17th | +9 | Beast Warrior Feat, Attribute Score Improvement | 4d4+CON |
| 18th | +9 | Beast Warrior Feat, Wild Senses (5) | 5d4+CON |
| 19th | +10 | Beast Warrior Feat, Attribute Score Improvement | 5d4+CON |
| 20th | +10 | Beast Warrior Feat | 5d4+CON |
}}


**Rage (+2).** undefined

**Savage Attack.** undefined

**Defesa Animal.** undefined

**Rage (+3).** undefined

**Wild Senses (3).** undefined

**Rage (+4).** undefined

**Wild Senses (4).** undefined

**Rage (+5).** undefined

**Wild Senses (5).** undefined

### Beast Warrior Feats
Beginning at level 2, every time you gain a level in Beast Warrior you gain a Witch Feat. You may instead of a Beast Warrior feat take a Martial or General Feat of your choice.



**Rage.** While in combat, you can spend 2 MP to enter a rage. While raging, you have +2 to melee attack rolls and damage, -1 to Defense, and can't cast spells. Rage ends at the start of your turn if you have not taken damage or attacked something since the start of your last turn. Rage's attack roll and damage bonus is doubled if you're below half maximum HP. Every 5 levels you can spend an extra 2 MP to increase both bonuses by +1.

**Savage Attack.** Once per turn, when you make an attack, you can spend 1 MP to increase the damage by 1d4 + your constituition modifier. At levels 6, 10, 14 and 18 you can spend +1PM to add 1d4 to the damage. If you're raging, you can spend HP instead of MP.

**Defesa Animal.** Enquanto você está com metade ou menos do seu HP máximo e em fúria, você dobra seu bônus de constituição na guard, e de destreza na evasão, se não estiver usando armadura (limitado pelo seu nível).

**Wild Senses.** Choose 3 between Athletics, Acrobatics, Reflexes, Perception, Insight, Nature, Animal Handling. While raging you add your CON mod. to rolls with those skill. When not raging you can spend 3 MP to gain the Wild Senses bonus in a roll, as if you were raging. Every 5 levels you can add another skill.

### Beast Warrior Feats

Begining at level 2, every time you gain a level in Beast Warrior you gain a Beast Warrior Feat. You may instead of a Beast Warrior feat take a Martial or General Feat of your choice.

- **Keen Reflexes**. Whenever you're raging, you add your SEN mod to defense if you're not wearing heavy armor.

- **Thick Hide**. You can spend a movement action and 1 PM to gain 1d12 temporary HP. For every aditional 2PM you spend, increase that ammount by another +1d12.

- **Blood Healing**. While below HP and raging, the first attack you hit on your turn heals you for your CON mod. Pré-requisito: lv5 de Beast Warrior.

- **Hibernation**. During a rest, you can spend any multiple of 2PM. For every 2PM, you recover aditional HP equal to your CON mod (ex: 2PM -> CON mod. 4PM -> 2*CON mod. 6PM -> 3*CON mod.)

- **Powerful Savage Attacks**. When using a Savage Attack you re-roll 1's on the damage dice. Pre-requisites: Level 8 Beast Warrior.

- **Alma de Bronze**. Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a metade do seu nível + mod. Constituição.

- **Sangue dos Inimigos**. Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.

{{pageNumber,auto}}
\page


{{note
#### Wild Rage animal forms

Some powers are wild rage animal forms. While raging and below half HP, you can spend a free action and 5 HP to enter a Wild Rage. Only one kind of Wild Rage can be active at a time.

A wild rage has a passive effect, and adds a bonus feature to your Savage Attacks
}}

- **Wild Rage: Owlbear**. Passive: Gain your STR mod as extra Guard. Savage Attack: Add +1 dice to the damage of your weapon for this attack.

- **Wild Rage: Direwolf**. Passive: Gain your CON mod as extra movement speed. Savage Attack: if you're flanking the attacked enemy, you have +2 in the attack roll, and lower your critical hit threshold by 2 (you crit on 18-20 instead of 20).

- **Wild Rage: Sharkodile**. Passive: You add your SEN mod to your attack rolls against bleeding enemies. Savage Attack: you can spend 1PM or 2HP to make an extra bite attack that deals 1d4 damage and heals you for your CON mod. (An enemy is bleeding if they have blood, are below half their max HP and has been damaged this scene).

- **Superstição**. Você odeia magia arcana, o que faz com que seja mais resistente a ela. Você recebe +2 em testes de resistência contra magias que não tiverem a tag "wild".

- **Ímpeto**. Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.

- **Espírito Inquebrável**. Enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida (você ainda morre se chegar em um valor negativo igual à metade de seus PV máximos). Pré-requisito: Alma de Bronze.

- **Esquiva Sobrenatural**. Seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.

- **Fúria Raivosa**. Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente.

{{pageNumber,auto}}
\page
# Champion (Martial)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 5 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons and all kinds of armor..

**Resistências:** Strength, Presence.

{{classTable,decoration,frame,wide
##### Champion
| Level | Proficiency Bonus | Features |Smite | Lay on Hands | 
| :---: | :---------------: | :------- | :----: |:----: |
| 1st | +1 | Smite | 1d6+PRE | - |
| 2nd | +1 | Champion Feat, Lay on Hands | 1d6+PRE | 1d8+1 |
| 3rd | +2 | Champion Feat | 1d6+PRE | 1d8+1 |
| 4th | +2 | Champion Feat, Attribute Score Improvement | 1d6+PRE | 1d8+1 |
| 5th | +3 | Champion Feat, Extra Attack | 2d6+PRE | 1d8+1 |
| 6th | +3 | Champion Feat, Attribute Score Improvement | 2d6+PRE | 1d8+1 |
| 7th | +4 | Champion Feat | 2d6+PRE | 2d8+2 |
| 8th | +4 | Champion Feat | 2d6+PRE | 2d8+2 |
| 9th | +5 | Champion Feat, Attribute Score Improvement | 3d6+PRE | 2d8+2 |
| 10th | +5 | Champion Feat | 3d6+PRE | 3d8+3 |
| 11th | +6 | Champion Feat | 3d6+PRE | 3d8+3 |
| 12th | +6 | Champion Feat, Attribute Score Improvement | 3d6+PRE | 3d8+3 |
| 13th | +7 | Champion Feat | 4d6+PRE | 3d8+3 |
| 14th | +7 | Champion Feat | 4d6+PRE | 4d8+4 |
| 15th | +8 | Champion Feat, Attribute Score Improvement | 4d6+PRE | 4d8+4 |
| 16th | +8 | Champion Feat | 4d6+PRE | 4d8+4 |
| 17th | +9 | Champion Feat, Attribute Score Improvement | 5d6+PRE | 4d8+4 |
| 18th | +9 | Champion Feat | 5d6+PRE | 5d8+5 |
| 19th | +10 | Champion Feat, Attribute Score Improvement | 5d6+PRE | 5d8+5 |
| 20th | +10 | Champion Feat | 5d6+PRE | 5d8+5 |
}}


**Smite.** undefined

**Lay on Hands.** undefined

### Champion Feats
Beginning at level 2, every time you gain a level in Champion you gain a Witch Feat. You may instead of a Champion feat take a Martial or General Feat of your choice.



**SMITE (GOLPE DESTRUIDOR).** (once per turn) During an attack (2PM): infuse your attack with all your might! Add your Presence modifier to the attack roll, and you Presence modifier +1d6 to the damage. At 5th, 9th, 13th and 17th level, you can spend +1PM to add another +1d6 to the damage.

**LAY ON HANDS (CURAR PELAS MÃOS).** You may spend a major action and 1PM to touch one creature, and heal them for 1d8+1. At 7th, 10th, 14th and 18th level respectively, you can spend +1PM to add another 1d8+1 to the healing. **Ideia:** mudar para ranged para dar mais opções interessantes e diferenciar do spelgard.

### Champion Feats

Begining at level 2, every time you gain a level in Champion you gain a Champion Feat. You may instead of a Champion feat take a Martial or General Feat of your choice.

- **Golpe Ilustre**. Quando usa Golpe Destruidor, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno (-2 ataque/Percepção).

- **Golpe Inspirador**. Ao usar Golpe Destruidor, você pode gastar +1PM, e, se acertar, os seus aliados que verem o golpe ser feito tem +2 em testes de ataque contra o mesmo alvo.

- **Curar Aprimorado**. Quando usar Curar Pelas Mãos, você adiciona o seu modificador de Presença no total da cura.

- **Curar Distante**. Quando usar Curar Pelas Mãos, você pode gastar +1PM para aumentar o alcanse de toque para curto.

{{note
#### Julgamento

Alguns poderes do paladino são Julgamentos. Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário. Julgamentos que não têm um efeito instantâneo duram até o fim da cena. Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam.
}}

- **Julgamento: Coragem**. Ação de movimento (2 PM): marque uma criatura em alcance curto (X quadrados). A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.
{{pageNumber,auto}}
\page

- **Julgamento: Vindicação**. Ação de movimento (2 PM): marque um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.


- **Estrategista.** Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pela sua Presença). No próximo turno do aliado, ele ganha uma Ação de Movimento adicional. Pré-requisitos: 6º nível de Champion.

- **General.** Quando você usa o poder Estrategista, aliados direcionados recebem 1d4 PM temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM. Pré-requisitos: Estrategista, 12º nível de Champion.

- **Inspirar Confiança.** Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode  gastar 2 PM para fazer com que ele possa rolar esse teste novamente.

- **Inspirar Glória.** Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado. Pré-requisitos: Inspirar  Confiança, 8º nível de champion.

- **Liderar pelo Exemplo.** Você pode gastar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado do seu teste em vez de fazer o seu próprio. Pré-requisito: 6º nível de champion. 

- **Palavras Afiadas.** Você pode gastar uma ação padrão e 1 PM para fazer uma criatura inteligente fazer um teste de resistência de Presença. Se el falhar, você causa 2d6 pontos de dano psíquico não letal à criatura. Se ela passar, causa metade deste dano. Se a criatura for reduzida a 0 ou menos HP, em vez de cair inconsciente, ela se rende ou fica apavorada e foge de você da maneira mais eficiente possível. A cada quatro níveis, você pode gastar +1 PM para aumentar o dano em +1d6.

**TODO:** Mais poderes para palavras afiadas

{{pageNumber,auto}}
\page
# Channeler (Caster)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 8 (+CON mod.) maximum hit points, and gain an extra 2 (+CON mod.) per level.

**MP**: You start at 1st level with 6 (+PRE mod.) maximum MP, and gain an extra 6 per level.

**Equipment Proficiencies:** NONE.

**Resistências:** Constituition.

**Spellcasting Attribute:** PRE.


{{classTable,decoration,frame,wide
##### Channeler
| Level | Proficiency Bonus | Features |Cargas Arcanas | Spells Known | Max Spell Circle | 
| :---: | :---------------: | :------- | :----: |:----: |:----: |
| 1st | +1 | Invocar Feitiço | - | 3 | 1 |
| 2nd | +1 | Channeler Feat | - | 4 | 1 |
| 3rd | +2 | Channeler Feat, Juntar Energia, Faísca Mágica: Poder | 3 | 5 | 2 |
| 4th | +2 | Channeler Feat, Attribute Score Improvement | 4 | 6 | 2 |
| 5th | +3 | Channeler Feat | 5 | 7 | 3 |
| 6th | +3 | Channeler Feat | 6 | 8 | 3 |
| 7th | +4 | Channeler Feat | 7 | 9 | 4 |
| 8th | +4 | Channeler Feat, Attribute Score Improvement | 8 | 10 | 4 |
| 9th | +5 | Channeler Feat | 9 | 11 | 5 |
| 10th | +5 | Channeler Feat | 10 | 12 | 5 |
| 11th | +6 | Channeler Feat | 11 | 13 | 6 |
| 12th | +6 | Channeler Feat, Attribute Score Improvement | 12 | 14 | 6 |
| 13th | +7 | Channeler Feat | 13 | 15 | 7 |
| 14th | +7 | Channeler Feat | 14 | 16 | 7 |
| 15th | +8 | Channeler Feat | 15 | 17 | 8 |
| 16th | +8 | Channeler Feat, Attribute Score Improvement | 16 | 18 | 8 |
| 17th | +9 | Channeler Feat | 17 | 19 | 9 |
| 18th | +9 | Channeler Feat | 18 | 20 | 9 |
| 19th | +10 | Channeler Feat, Attribute Score Improvement | 19 | 21 | 9 |
| 20th | +10 | Channeler Feat | 20 | 22 | 9 |
}}


**Invocar Feitiço.** undefined

**Juntar Energia, Faísca Mágica: Poder.** undefined

### Channeler Feats
Beginning at level 2, every time you gain a level in Channeler you gain a Witch Feat. You may instead of a Channeler feat take a Caster or General Feat of your choice.



**Invocar Feitiço.** Ação Completa, concentração (0PM): O Canalizador se concentra para conjurar uma magia poderosa (é considerado **Canalizando**, e exige concentração para se manter nesse estado). No final da rodada, se ainda estiver **Canalizando**, ele escolhe um alvo que consiga ver em 12sqr e rola um feitiço na tabela de invocação. O feitiço correspondente da tabela de invocação é usado no alvo. A cada círculo de magia acima do 1º que conseguir usar, pode gastar +1PM para aumentar o círculo da magia usada em 1.

**Juntar Energia.** Movimento: Ganha 2 **Cargas Arcanas**, +1 por círculo de magia usada no turno. Você pode ter um máximo de **Cargas Arcanas** igual ao seu nível de Canalizador.

**Faísca Mágica: Poder** (magia causa dano) **+X Cargas Arcanas:** Aumenta o dano inicial em +1d6 por **Carga Arcana** usada. (Ver: **Faíscas Mágicas e Potenciais Arcanos**).

### Tabela de invocação
| d6  |        Magia        |
|:---:|:-------------------:|
| 1-2 | Truque (0º Círculo) |
| 3-5 |     1º Círcuio      |
|  6  |     2º Círculo      |

Para cada PM gasto na invocação aumente o círculo da magia invocada em um. Uma vez definido qual círculo de magia vai ser usado, role 1d10 e determine qual magia é invocada.

### Truque
| d10  |     Magia      |
|:----:|:--------------:|
| 1-3  |  Energy Blast  |
| 4-8  | Chilling Touch |
| 9-10 |    Firebolt    |

### 1º Círculo
| d10  |     Magia     |
|:----:|:-------------:|
| 1-3  |     Bane      |
| 4-6  | Magic Missile |
| 7-8  |     Sleep     |
| 9-10 |  Witch Bolt   |

### 2º Círculo
| d10  |           Magia            |
|:----:|:--------------------------:|
| 1-2  |       Scorching Ray        |
| 3-4  |        Hold Person         |
| 5-7  | Maximilian's Earthen Grasp |
| 8-10 |      Wither and Bloom      |
{{pageNumber,auto}}
\page

### Channeler Feats

Begining at level 2, every time you gain a level in Channeler you gain a Channeler Feat. You may instead of a Channeler feat take a Castert or General Feat of your choice.

- **Canalização Defensiva.** Enquanto estiver **Canalizando**, reduz qualquer dano que toma em PRE+lv/2.

- **Canalização Concentrada.** Enquanto estiver **Canalizando**, ganha resistência em rolagens de resistência de CON e STR. Pré-requisito: *Canalização Defensiva*.

- **Canalização Mística.** Enquanto estiver **Canalizando**, ganha resistência a efeitos mágicos enquanto canaliza. Pré-requisito: *Canalização Defensiva*.

- **Reinforçamento Mágico.** Invocar uma magia ao final de **Invocar Feitiço**, você pode lançar uma magia com alvo: pessoal.

- **Transmutação de Mana.** Pode gastar **Carga Arcana** em vez de MP em aprimoramentos de **Invocar Feitiço**.

- **Magia Energizante.**  toda magia pode ser aumentada com **+2PM:** ganha energia igual ao círculo da magia.

- **Retribuição Arcana.** (ao ser atacado enquanto **Canalizando**) Reação: um jato de energia ricocheteia e acerta o atacante, dando 1d6 de dano. Por cada Círculo de magia que você pode lançar, você pode gastar +1PM para aumentar o número de dados em +1d6. Escolha 1 dos dados rolados. O tipo do dano é determinado pelo valor rolado, segundo a tabela abaixo. Você ganha **Cargas Arcanas** igual ao número de dados rolados.

| d6  |   dano   |
|:---:|:--------:|
|  1  | impacto  |
|  2  | cortante |
|  3  |   gelo   |
|  4  | elétrico |
|  5  |   fogo   |
|  6  | psíquico |

- **Controle do Destino.** cada dia, pode trocar 1 linha das tabelas de invocação de cada círculo por uma magia que você sabe. Pré-requisito: *Level 6 Canalizador*.

- **Energia.** Se você gastou pelo menos uma **Carga Arcana** em uma magia, a CD dela aumenta em +2.

- **Invocação Sortuda.** Durante **Invocar Feitiço**, você pode pagar 1PM uma vez para re-rolar o círculo da magia lançada.

{{note
#### Faíscas Mágicas e Potenciais Arcanos

Misturando sua capacidade mágica e habilidade de invocar magias perdidas no plano arcano, Canalizadores tem acesso a **Faíscas Mágicas** e **Potenciais Arcanos**.

Se você possui uma **Faísca Mágica**, você pode usar ela como modificador ao usar qualquer magia de Canalizador aplicável, usando um número de **Cargas Arcanas**. Se você possui um **Potencial Arcano**, ao final de **Invocar Feitiço** você pode escolher usar ele como modificador, usando um número de **MP**.
}}

- **Potencial Arcano: Absoluto.** X PM: pode usar uma magia de Xº Círculo (não truque) quando lançar a canalização. Pré-requisito: *Level 8 em Canalizador*. (ainda tem que pagar o custo normal da magia)

- **Potencial Arcano: Múltiplo.** 2 PM: Conjure 2 magias em vez de 1 (todas do mesmo círculo). O segundo vai em um alvo diferente a sua escolha. Para cada 4 níveis de Canalizador, você pode gastar +1PM para aumentar o número de magias em 1. Os feitiços adicionais não aumentam de círculo com o MP gasto para aprimorar o primeiro.

- **Potencial Arcano: Focado.** 2 PM: As magias conjuradas podem ter o mesmo alvo. Pré-requisito: *Potencial Arcano: Múltiplo*.

- **Potencial Arcano: Recursão.** 2 PM: Ganha **Carga Arcana** igual ao círculo de magia invocada.

- **Faísca Mágica: Velocidade.**  5 **Carga Arcana**: diminui execução em um passo (completa -> padrão, padrão -> movimento, movimento -> livre).

- **Faísca Mágica: Dispersão.**  3 **Cargas Arcanas**: aumenta o número de alvos em +1.

- **Faísca Mágica: Visão.**  1 **Carga Arcana**: dobra o alcance.

- **Faísca Mágica: Recuperar.** X **Cargas Arcanas**. Você e o alvo recuperam 1d4 HP por **Carga Arcana** usada nesse modificador.

- **Escudo Arcano.** Movimento: Se você gastou pelo menos 1 **Carga Arcana** nesse turno, você ganha hp temporário igual a metade do seu nível de canalizador (arredondado pra baixo) mais 2 por **Carga Arcana** usada. Esse hp temporário some no início do seu próximo turno.

### Spell List

List of spells available for a Chaneler to learn.

{{pageNumber,auto}}
\page


##  Spells

### Cantrip
- [[Acid Splash]]
- [[Chill Touch]]
- [[Control Flames]]
- [[Energy Blast]]
- [[Fire Bolt]]
- [[Frostbite]]
- [[Guidance]]
- [[Lightning Lure]]
- [[Magic Stone]]
- [[Message]]
- [[Poison Spray]]
- [[Ray of Frost]]
- [[Resistance]]
- [[Shape Water]]
- [[Thunderclap]]
- [[Toll the Dead]]
- [[Vicious Mockery]]

### 1st Circle
- [[Benção]]
- [[Burning Hands]]
- [[Catapult]]
- [[Chaos Bolt]]
- [[Despedaçar]]
- [[Dissonant Whispers]]
- [[Earth Tremor]]
- [[Escuridão]]
- [[Explosão de chamas]]
- [[Feather Fall]]
- [[Hellish Rebuke]]
- [[Imagem Espelhada]]
- [[Infligir Ferimentos]]
- [[Longstrider]]
- [[Mage Armor]]
- [[Magic Missile]]
- [[Ray of Sickness]]
- [[Thunderwave]]
- [[Witch Bolt]]
- [[Área Escorregadia]]{{pageNumber,auto}}
\page


### 2nd Circle
- [[Aid]]
- [[Binding Ice]]
- [[Blindness Deafness]]
- [[Calm Emotions]]
- [[Continual Flame]]
- [[Crown of Madness]]
- [[Explosão Sonora]]
- [[Heat Metal]]
- [[Hold Person]]
- [[Manto de Vento]]
- [[Maximilian's Earthen Grasp]]
- [[Mind Whip]]
- [[Ray of Enfeeblement]]
- [[Scorching Ray]]
- [[See invisibility]]

### 3rd Circle
- [[Flecha Ácida]]
- [[Relâmpago]]
- [[Sopro das Uivantes]]


ideas change initiative of self (cost and buff) and others (buff and debuff)

### basic skill:
-  **change initiative**: movement (1PM): increase or decrease a creature's initiative by 1d8
- has feats to change it
	- heal with increase
	- dmg with decrease
	- add movement buff
	- do it while casting spell
### skill 2:
- **Speed Up:** movement (4PM): Give a free movement action to 2 different allies of your choice

feats:
- **change initiative** also damages enemies
- **change initiative** can heal allies
- **change initiative** can target many at the same time
- gain more movement actions
- switch initiative order (from high->low to low->high)

{{pageNumber,auto}}
\page
# Dancer (Specialist)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 10 (+CON mod.) maximum hit points, and gain an extra 3 (+CON mod.) per level.

**MP**: 5 per level.

**Equipment Proficiencies:** Simple weapons. Light Armor..

**Resistências:** Dexterity, Sensibility, Presence.

{{classTable,decoration,frame
##### Dancer
| Level | Proficiency Bonus | Features |Ritmo de Batalha | 
| :---: | :---------------: | :------- | :----: |
| 1st | +1 | Ritmo de Batalha, Passos de Vento | 2 |
| 2nd | +1 | Dancer Feat, Expertise | 2 |
| 3rd | +2 | Dancer Feat, Dança Ilusória | 3 |
| 4th | +2 | Dancer Feat, Attribute Score Improvement | 3 |
| 5th | +3 | Dancer Feat | 4 |
| 6th | +3 | Dancer Feat, Attribute Score Improvement | 4 |
| 7th | +4 | Dancer Feat, Confie na Estrela | 5 |
| 8th | +4 | Dancer Feat, Attribute Score Improvement | 5 |
| 9th | +5 | Dancer Feat | 6 |
| 10th | +5 | Dancer Feat, Attribute Score Improvement | 6 |
| 11th | +6 | Dancer Feat | 7 |
| 12th | +6 | Dancer Feat, Attribute Score Improvement | 7 |
| 13th | +7 | Dancer Feat | 8 |
| 14th | +7 | Dancer Feat | 8 |
| 15th | +8 | Dancer Feat, Attribute Score Improvement | 9 |
| 16th | +8 | Dancer Feat | 9 |
| 17th | +9 | Dancer Feat, Attribute Score Improvement | 10 |
| 18th | +9 | Dancer Feat | 10 |
| 19th | +10 | Dancer Feat, Attribute Score Improvement | 11 |
| 20th | +10 | Dancer Feat | 11 |
}}


**Ritmo de Batalha.** undefined

**Passos de Vento.** undefined

**Dança Ilusória.** undefined

**Confie na Estrela.** undefined

### Dancer Feats
Beginning at level 2, every time you gain a level in Dancer you gain a Witch Feat. You may instead of a Dancer feat take a Specialist or General Feat of your choice.



**Ritmo de Batalha.** Ação Livre: Você ganha 2 **Passos de Vento** (1 se usando armadura). A Cada 2 níveis você pode gastar +1PM para ganhar +1 **Passo de Vento**.

**Passos de vento.** Ao se movimentar com uma Ação de Movimento, você pode gastar um número de passos do vento (limitado pelo seu nível + 1) e se mover um número de quadrados adicional igual ao número de passos gastos. Quando você gasta passos de vento seu próximo ataque desarmado ou com uma arma leve dá +1d4 de dano pra cada **Passo de Vento** usado

**Expertise.** Choose a number of skills equal to you intelligence modifier (min 1). Before performing a non-attack roll with one of those skills, you may spend 1PM to add your intelligence modifier to the roll. At levels 6, 10, 14 and 18 you chose another skill, and can spend +1PM, and the total added to the roll equals the MP cost times your intelligence modifier.

**Dança Ilusória.** Você ganha+3 de Evasão (+2 se usando armadura) até o início do seu próximo turno na primeira vez na rodada que você gasta **Passos de Vento**.

**Confie na Estrela.** Você pode gastar 1PM e usar Performance em vez de Intimidação, Persuasão ou Enganação para convencer alguém.

### Dancer Feats
Beginning at level 2, every time you gain a level in Dancer you gain a Dancer Feat. You may instead of a Dancer feat take a Specialist or General Feat of your choice.

- *NOME*. Você pode gastar 1PM para substituir uma rolagem de atletismo ou acrobacia por performance
- *NOME.* ao fazer uma rolagem social (1PM): +PRE para a rolagem.
- *NOME*. +PRE de evasão se você não estiver usando armadura (limitado pelo seu nível);
- *NOME.* Você ganha 2 **Passos de Vento** ao usar **De Raspão**

#### Feat Ideas
- ganha coisas com reação
- no damage on dex saves, half on fail (specialist, dex minimum)
- gain steps on ally crit/enemy down
- gain steps on initiative
- steps can be spent to use skills that use Movement Actions as a Free Action
- roll performance instead of initiative
- steps + other stuff on "de raspão"
- +PRE to dodge 
- gain extra elemental dmg (duration? or scene?)
- dont provoke opportunity attacks with movement (move to specialist feat)
- scale movement with level
	- add PRE to movement (default?) (nah i'm killing this idea)
	- add DEX to movement (feat?)

{{pageNumber,auto}}
\page


{{note
#### Danças Marciais

Técnicas fascinantes que os tornam experts e dominantes no combate, alguns dos poderes de Dancer são as "Danças Marciais". Elas tem a nomenclatura de "**Dança da(o) \_\_\_\_**"

Esses poderes funcionam como habilidades ativas que custam uma Ação, 2PM e 2 **Passos de Vento** para executar (a não ser que a descrição do poder diga outra coisa). 
maybe add option to upcast?

}}
- **Dança da Restauração.** Escolha até 2 aliados que consegue ver. eles ganham PRE+2d4 de HP temporário.
- **Dança da Inspiração.** Seus aliados que conseguem te ver ganham o seu bônus dos passos do Vento gastos com essa habilidade, e ganham vantagem na próxima ação até o seu próximo turno. Você pode escolher gastar mais que 2 **Passos de Vento** ao executar essa dança (o total é limitado pelo seu nível).
- **Dança da Velocidade.** ganha +PRE move speed pela cena para você, e para o próximo turno dos seus aliados 
- **Dança do Desespero.** Gasta todos os passos. dá dano dobrado. custa HP e causa exaustão.
- **Dança do Vento.** Ganhe 4 **Passos do Vento**.
- **Dança do Enxame**. Ação (X\*3 **Passos de Vento**, X\*2MP). Você pode realizar X ataques esse turno, cada um com o efeito de 3 **Passos de Vento**. Reword to something better later
- **Dança do Trance.** Você Ganha +PRE em rolagens de ataque e +2d4 de dano. Duração: sustentada.
- **Dança Incorpórea.** Você se move em linha reta para algum ponto livre no alcance do seu movimento máximo. Você ignora quaisquer obstáculos no seu caminho, incluindo paredes. Faça um ataque. Todas as criaturas a sua escolha entre o ponto de partida e destino sofrem esse ataque.

#### outras danças:
- temp MP (self)
- "Dança a Dois". Buffs pra um aliado e tal.
- dance through enemies and damage them
- whirlwind attack (on future levels can increase radius)

#### Feat ideas continuação
- move through people
- increase AC temporarily
	- if you spent steps, gain +AC equal to steps spent until next turn
	- +AC if moved this turn
- transform INT/SEN resist to PRE resist
- gain adv on resist rolls??? prolly not
- transform STR/CON resist to DEX resist? prolly not
- +PM to dance as movement action

### Conceito
Acrobatas são, primeiramente, artistas. Suas habilidades são usadas para performances e danças, mas sua agilidade e precisão de movimentos trazem consigo habilidades valiosas em combate.

O estilo de luta se baseia principalmente no movimento. As habilidades de combate de um acrobata são decorrentes de sua movimentação no campo, e por conta disso eles costumam estar sempre mudando de posicionamento para se manterem relevantes em batalha. Isso faz com que muitas vezes, acrobatas sejam focados por inimigos por chamarem muita atenção, ou que acrobatas precisem entrar em alcance dos inimigos para usarem suas habilidades.

### Classificação
A liberdade de movimento se espelha na sua liberdade de atuação em batalha. Alguns acrobatas incorporam danças e movimentos que catalizam magias, outros acrobatas aproveitam da sua agilidade para desferir golpes letais com armas leves. Outros até aproveitam de sua característica provocatória para proteger aliados.



{{pageNumber,auto}}
\page
# Fighter (Martial)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 5 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons and all kinds of armor..

**Resistências:** Strength, Dexterity.

{{classTable,decoration,frame
##### Fighter
| Level | Proficiency Bonus | Features |Precise Strike | 
| :---: | :---------------: | :------- | :----: |
| 1st | +1 | Precise Strike | +4 |
| 2nd | +1 | Fighter Feat, Action Surge | +4 |
| 3rd | +2 | Fighter Feat | +4 |
| 4th | +2 | Fighter Feat, Attribute Score Improvement | +4 |
| 5th | +3 | Fighter Feat, Extra Attack | +4 |
| 6th | +3 | Fighter Feat, Attribute Score Improvement | +4 |
| 7th | +4 | Fighter Feat | +8 |
| 8th | +4 | Fighter Feat | +8 |
| 9th | +5 | Fighter Feat, Attribute Score Improvement | +8 |
| 10th | +5 | Fighter Feat | +8 |
| 11th | +6 | Fighter Feat | +8 |
| 12th | +6 | Fighter Feat, Attribute Score Improvement | +8 |
| 13th | +7 | Fighter Feat | +12 |
| 14th | +7 | Fighter Feat, Action Surge (2) | +12 |
| 15th | +8 | Fighter Feat, Attribute Score Improvement | +12 |
| 16th | +8 | Fighter Feat | +12 |
| 17th | +9 | Fighter Feat, Attribute Score Improvement | +16 |
| 18th | +9 | Fighter Feat | +16 |
| 19th | +10 | Fighter Feat, Attribute Score Improvement | +16 |
| 20th | +10 | Fighter Feat, Action Surge (3) | +16 |
}}


**Precise Strike.** undefined

**Action Surge.** undefined

**Action Surge (2).** undefined

**Action Surge (3).** undefined

### Fighter Feats
Beginning at level 2, every time you gain a level in Fighter you gain a Witch Feat. You may instead of a Fighter feat take a Martial or General Feat of your choice.



**PRECISE STRIKE.** When you make an attack, you may spend 1 PM to add +4 to the attack roll or damage. At levels 7, 13 and 17 you may spend +1 MP to increase the bonus by +4. You can also choose to split the bonus evenly between the damage and attack rolls (ex: if you spend 3PM you can either get +12 to the attack, +12 to the damage or +6 to the attack and +6 to the damage).

**ACTION SURGE.** Once per turn, you may spend 3PM and use an Action Surge. If you do, you gain one aditional main action this turn. At levels 14 and 20 you may spend an extra +3PM per aditional action to gain 2 or 3 aditional actions instead of 1, respectively

### Fighter Feats

Begining at level 2, every time you gain a level in Fighter you gain a Fighter Feat. You may instead of a Fighter feat take a Martial or General Feat of your choice.

- **Ambidestria**. Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de a

- **Arqueiro**. Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 13.

- **Bater e Correr**. Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.

- **Destruidor**. Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma. Pré-requisito: For 13

- **Esgrimista**. Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 13.

- **Golpe de Raspão**. Quando erra um ataque, você pode gastar 1 PM. Se fizer isso, causa 1d8 pontos de dano (do tipo da arma) no alvo do ataque.

- **Golpe Demolidor**. Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a RD dele.

- **Ímpeto**. Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.

- **Planejamento Marcial**. Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro.

- **Solidez**. Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.

- **Tornado de Dor**. Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a corpo e compare-o com a Defesa de cada inimigo adjacente. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro.

- **Valentão**. Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.



Skill: Pyrexia (heat meter that goes positive and negative and increases the max with level)


{{pageNumber,auto}}
\page
# Juggernaut (Martial)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 5 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons, medium and heavy armor..

**Resistências:** Strength, Constituition.

{{classTable,decoration,frame,wide
##### Juggernaut
| Level | Proficiency Bonus | Features |Levantar Guarda | Max Guts | Golpe Poderoso | 
| :---: | :---------------: | :------- | :----: |:----: |:----: |
| 1st | +1 | Raise Guard, Guts | CON | 2 | 1d10+STR |
| 2nd | +1 | Juggernaut Feat, Powerful Strike | CON+1 | 3 | 1d10+STR |
| 3rd | +2 | Juggernaut Feat | CON+1 | 4 | 1d10+STR |
| 4th | +2 | Juggernaut Feat, Attribute Score Improvement | CON+2 | 5 | 1d10+STR |
| 5th | +3 | Juggernaut Feat, Extra Attack | CON+2 | 6 | 2d10+STR |
| 6th | +3 | Juggernaut Feat, Attribute Score Improvement | CON+3 | 7 | 2d10+STR |
| 7th | +4 | Juggernaut Feat | CON+3 | 8 | 2d10+STR |
| 8th | +4 | Juggernaut Feat | CON+4 | 9 | 2d10+STR |
| 9th | +5 | Juggernaut Feat, Attribute Score Improvement | CON+4 | 10 | 3d10+STR |
| 10th | +5 | Juggernaut Feat | CON+5 | 11 | 3d10+STR |
| 11th | +6 | Juggernaut Feat | CON+5 | 12 | 3d10+STR |
| 12th | +6 | Juggernaut Feat, Attribute Score Improvement | CON+6 | 13 | 3d10+STR |
| 13th | +7 | Juggernaut Feat | CON+6 | 14 | 4d10+STR |
| 14th | +7 | Juggernaut Feat | CON+7 | 15 | 4d10+STR |
| 15th | +8 | Juggernaut Feat, Attribute Score Improvement | CON+7 | 16 | 4d10+STR |
| 16th | +8 | Juggernaut Feat | CON+8 | 17 | 4d10+STR |
| 17th | +9 | Juggernaut Feat, Attribute Score Improvement | CON+8 | 18 | 5d10+STR |
| 18th | +9 | Juggernaut Feat | CON+9 | 19 | 5d10+STR |
| 19th | +10 | Juggernaut Feat, Attribute Score Improvement | CON+9 | 20 | 5d10+STR |
| 20th | +10 | Juggernaut Feat | CON+10 | 21 | 5d10+STR |
}}


**Raise Guard, Guts.** undefined

**Powerful Strike.** undefined

### Juggernaut Feats
Beginning at level 2, every time you gain a level in Juggernaut you gain a Witch Feat. You may instead of a Juggernaut feat take a Martial or General Feat of your choice.



**RAISE GUARD (LEVANTAR GUARDA).** Movement Action (1PM): Gain CON mod. (minimum 1) + your level/2 temporary HP, and +1 **Guts**. While you have this temporary HP, you're considered as "On Guard".

**Guts.** You have +1 Strength and -1 movement speed (down to a minimum of 3sqr) for each Guts point you have. You lose all Guts at the end of the scene. You can have up to your Juggernaut level + 1 Guts points. Every 5 Guts you increase your size by 1 category, up to large.

**Powerful Strike (Golpe Poderoso)**. Movement Action (1PM): Your next melee attack until the end of your next turn deals an extra 1d10 + STR mod. damage. At 5th, 9th, 13th and 17th levels you can spend +2PM to increase the damage by 1d10

### Juggernaut Feats

Begining at level 2, every time you gain a level in Champion you gain a Juggernaut Feat. You may instead of a Juggernaut Feat take a Martial or General Feat of your choice.

- **Tanque de Combate**. Se você está de Guarda Alta, pode gastar 1PM e executar um ataque como ação de movimento"

- **Vingança**. Se um inimigo tirar a sua guarda, seu próximo ataque contra ele até o fim do seu próximo turno tem vantagem na rolagem do ataque, e dá +FOR mod. de dano (mínimo 1).

- **"Tragam o próximo"**. Quando levar um inimigo a 0, você pode gastar +1PM e usar "Levantar Guarda" como ação livre, e ganha +1 Guts até o final da cena.

- **"A Melhor Defesa..."**. (Guarda Alta) Ação de Movimento (1 PM): Você abaixa a guarda, tem -1 de Guard pela cena e ganha +2 Guts até o final da cena. A cada 3 níveis pode gastar +1PM para receber -1 Guard e +2 Guts.

- **Crítico Fortificador**. Quando acertar um ataque crítico, você ganha +2 Guts.

- **Crítico Brutal**. Sua arma dá +1 dado de dano nos seus críticos de estiver de guarda alta.

- **Crítico Poderoso**. (Guarda Alta) ao realizar um ataque crítico: Você pode realizar um Golpe Poderoso como parte do ataque atual (você ainda tem que pagar PM pelo golpe poderoso).

- **Golpe Brutal**. (durante ataque crítico) Ao usar Golpe Poderoso (+2PM): Multiplique os dados do Golpe Poderoso pelo seu multiplicador de crítico, como se fossem os dados do dano base da sua arma.

{{pageNumber,auto}}
\page


- **Golpe Derrubador**. Ao usar Golpe Poderoso (+2PM): Se o golpe acertar, você derruba o alvo. (Veja: [[RPG/R20/Combat/Battle Maneuvers#Derrubar]])

- **Golpe em Arco**. Ao usar Golpe Poderoso (+1PM): Você ataca todos os inimigos no seu alcance (que estejam na sua frente).

- **Defesa Imbatível**. Enquanto estiver de Guarda Alta, você tem +2 Guard. Pré-requisito: Defesa Impenetrável.

- **Defesa Imediata.** No início da iniciativa, se você não está surpreso você pode levantar a guarda como ação livre.

- **Defesa Impenetrável**. Some seu modificador de força no HP temporário recebido por **Levantar Guarda** (limitado pelo seu nível) .

- **Defesa Implacável**. Ao Levantar Guarda (+1PM): Você pode pode usar [[Combat Actions#Endurance]] como ação livre, sem custo adicional. Pré-requisito: Defesa Impenetrável. Pré-requisito: Defesa Impenetrável.
  
- **Defesa Intocável**. (Você negou um ataque com [[Combat Actions#Endurance]]) (Guarda Alta) Reação (1PM): Você pode imediatamente fazer um ataque de oportunidade contra o atacante. Se acertar, ganha +1 Guts. Pré-requisito: Defesa Impenetrável.

- **Defesa Impregnável**. (Guarda Alta) reação (2PM): você pode somar sua Guard num teste de resistência físico. Após a ação que causou o teste se resolver, você abaixa a guarda. Pré-requisito: Defesa Impenetrável.

- **Defesa Inabalável**. (Guarda Alta) Você pode gastar 3PM para adicionar sua Guard em qualquer teste de resistência de um atributo mental. Após a ação que causou o teste se resolver, você abaixa a guarda. Pré-requisito: 1 poder que tem Defesa Impenetrável como pré-requisito.

- **Defesa Impermeável** (Guarda Alta) (Um aliado adjacente é atacado) Reação (1PM): Diminua o dano pela sua Guard. Pré-requisito: Defesa Impenetrável.

- **Defesa Indestrutível**. (Guarda Alta) Reação (2PM): Quando você receber dano que quebraria a sua Guarda, imediatamente após tomar o dano Levante Guarda como ação livre. Pré-requisito: 2 poderes que tem Defesa Impenetrável como pré-requisito.



{{pageNumber,auto}}
\page
# Plantomancer (Caster)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 8 (+CON mod.) maximum hit points, and gain an extra 2 (+CON mod.) per level.

**MP**: You start at 1st level with 6 (+SEN mod.) maximum MP, and gain an extra 6 per level.

**Equipment Proficiencies:** NONE..

**Resistências:** Sensibility.

**Spellcasting Attribute:** SEN.


{{classTable,decoration,frame,wide
##### Plantomancer
| Level | Proficiency Bonus | Features |Magic Seed | Spells Known | Max Spell Circle | 
| :---: | :---------------: | :------- | :----: |:----: |:----: |
| 1st | +1 | Summon Sapling | 2 | 3 | 1 |
| 2nd | +1 | Plantomancer Feat | 3 | 4 | 1 |
| 3rd | +2 | Plantomancer Feat | 3 | 5 | 2 |
| 4th | +2 | Plantomancer Feat, Attribute Score Improvement | 4 | 6 | 2 |
| 5th | +3 | Plantomancer Feat | 4 | 7 | 3 |
| 6th | +3 | Plantomancer Feat | 5 | 8 | 3 |
| 7th | +4 | Plantomancer Feat | 5 | 9 | 4 |
| 8th | +4 | Plantomancer Feat, Attribute Score Improvement | 6 | 10 | 4 |
| 9th | +5 | Plantomancer Feat | 6 | 11 | 5 |
| 10th | +5 | Plantomancer Feat | 7 | 12 | 5 |
| 11th | +6 | Plantomancer Feat | 7 | 13 | 6 |
| 12th | +6 | Plantomancer Feat, Attribute Score Improvement | 8 | 14 | 6 |
| 13th | +7 | Plantomancer Feat | 8 | 15 | 7 |
| 14th | +7 | Plantomancer Feat | 9 | 16 | 7 |
| 15th | +8 | Plantomancer Feat | 9 | 17 | 8 |
| 16th | +8 | Plantomancer Feat, Attribute Score Improvement | 10 | 18 | 8 |
| 17th | +9 | Plantomancer Feat | 10 | 19 | 9 |
| 18th | +9 | Plantomancer Feat | 11 | 20 | 9 |
| 19th | +10 | Plantomancer Feat, Attribute Score Improvement | 11 | 21 | 9 |
| 20th | +10 | Plantomancer Feat | 12 | 22 | 9 |
}}


**Summon Sapling.** undefined

### Plantomancer Feats
Beginning at level 2, every time you gain a level in Plantomancer you gain a Witch Feat. You may instead of a Plantomancer feat take a Caster or General Feat of your choice.



**Semente Mágica (Magic Seed).** You grow and maintain a small garden of magical plants. That garden provides you at the start of the day with a number of seeds filled with magical potential (they rot away if not used by the end of the day). Your garden produces 2 per day at level 1, and its production increases by 1 at every even level.

**Criar Muda.** As a movement or main action on your turn, you may spend 1PM and a Magic Seed to summon a sappling to an unnocupied space withing short distance (6sqr) of you. You can cast spells through the sappling, and percieve its surroundings as if you were standing there. (This counts as a Herbomancy power)

### Plantomancer Feats

Begining at level 2, every time you gain a level in Plantomancer you gain a Plantomancer Feat. You may instead of a Plantomancer feat take a Caster or General Feat of your choice.

- **Planta Resistente**. Aumente o HP inicial das suas plantas em 2\* seu nível de Plantomancer, e a defesa delas em 4.

- **Planta Explosiva**. Você pode gastar uma ação maior e 2PM. Escolha uma planta sua em alcance médio. Ela explode violentamente, lançando sua seiva corrosiva em todas as criaturas adjacentes (quadrado de lado 3, centrado na planta), causando 4d6 de dano ácido. A cada 3 níveis você pode gastar mais 2PM e aumentar o dano em 2d6 e o tamanho do quadrado em 2.

- **Planta Ajudante**. Suas plantas contam como aliados para fins de flanqueamento. Seus aliados recebem +1 na defesa quando adjacentes às suas plantas.

- **Lanchinho Mágico**. Você pode gastar uma ação maior e um número de sementes mágicas até metade do seu nível. Você enfia essas sementes na boca e mastiga elas, recuperando sua essência mágica e recuperando +1d4 PM por semente.

- **Plantas Conduentes Arcanas**. Quando você usa um truque (feitiço nível 0), você pode escolher um número das suas Plantas Mágicas ativas, limitado pelo seu nível. Gaste essa quantidade de PM, e o truque é executado por você e pelas plantas selecionadas ao mesmo tempo (você escolhe os alvos).
  {{pageNumber,auto}}
\page

- **Herbomancia: Raizes Mágicas**. 3 PM. escolha 3 cubos contíguos de 1,5m a partir do ponto onde a semente foi plantada. De lá crescem raízes mágicas. Elas podem funcionar como rampas, escadas, paredes, cobertura e/ou terreno difícil. Você pode gastar +2PM para aumentar o número de cubos em 3. Pré-requisitos: nível 5 de Plantomancer.

- **Crescimento Acelerado**. Você pode criar plantas com Herbomancia como uma reação, gastando +2PM.

- **Herbomancia: Samambaia Recuperadora**. Ao fazer um descanso num ambiente natural, você pode gastar 2 Semente Mágica para invocar uma samambaia mágica, que acalma e reinvigora quem ficar embaixo dela. até 6 alvos a sua escolha recuperam um adicional de 1d4 PM nesse descanso. Você pode gastar mais sementes (até metade do seu nível), e para cada semente adicional os alvos recuperam +1d4 de PM. Pré-requisitos: nível 4 de Plantomancer. (As sementes gastas contam como parte das sementes que você receberia ao final do descanso).

{{note
#### Herbomancia e Plantas Mágicas

Alguns dos poderes de Plantomancer envolvem usar suas Sementes Mágicas para criar plantas mágicas, por meio de Herbomancia.

Habilidades de Herbomancia envolvem gastar uma ou mais sementes mágicas, uma quantidade de PM e uma ação de movimento ou padrão (sua escolha). Para fazer a Planta Mágica crescer você escolhe um lugar que consegue ver em alcance curto (9 quadrados). Se for um local natural a planta cresce automaticamente, mas se for inospício você tem que passar num teste de Botânica (CD 15, 20 ou 25, dependendo da dificuldade)

As plantas criadas por Herbomancia tem 5 + 2\*o seu nível de Plantomancer de HP, 14 + o seu modificador de SEN de Defesa, resistência a dano de impacto e perfurante e fraqueza contra dano cortante, de fogo e gelo.
}}

- **Herbomancia: Troco Paredão**. 1PM. O tronco de uma árvore mágica começa a crescer de lado, numa linha de 4,5m de comprimento, a partir do local onde a semente foi plantada. Troco Paredão funciona como cobertura parcial (+5 Defesa) enquanto está sendo erguida, e cobertura total uma vez erguida.

- **Herbomancia: Trepadeira da Batata de Aço**. 2PM. A planta te protege como uma armadura, e toma dano por você. Dura 1 turno. Pré-requisitos: Crescimento Acelerado.

- **Raízes Ambulantes.** Suas plantas criadas com Herbomancia tem velocidade de movimento 1sqr (elas se movem no seu turno).

- **Tunnel pelo solo.** Ação livre (1PM): Você pode mover uma planta que você plantou com Herbomancia para um lugar que você consiga ver em 12sqr de distância de onde ela está.

- **Braço Treinado.** dobra o alcance das plantas que você pode plantar.

- **Raiz come-asfalto.** você recebe +5 em testes de Botânica para Herbomancia.

- **Se é verde faz bem**. Você ignora resistência a veneno e ácido de inimigos. Pré-requisitos: 4º nível de Plantomancer.

- **Herbomancia: Raizes Enredantes**. 2PM. alcance: círculo com XX raio. terreno difícil e prende todos que entram. Pré-requisito: Herbomancia: Raizes Mágicas.

### Spell List

List of spells available for a Plantomancer to learn.

##  Spells

### Cantrip
- [[Acid Splash]]
- [[Blade Ward]]
- [[Guidance]]
- [[Lightning Lure]]
- [[Magic Stone]]
- [[Poison Spray]]
- [[Resistance]]
- [[Shape Water]]
- [[Shillelagh]]
- [[Sword Burst]]
- [[Thorn Whip]]
- [[Thunderclap]]

### 1st Circle
- [[Armor of Agathys]]
- [[Caminhos da Natureza]]
- [[Canhão de Ervilha]]
- [[Catapult]]
- [[Cause Fear]]
- [[Charm Person]]
- [[Compelled Duel]]
- [[Controlar Plantas]]
- [[Curar Ferimentos]]
- [[Despedaçar]]
- [[Detect Poison and Disease (Ritual)]]
- [[Earth Tremor]]
- [[Enfeitiçar]]
- [[Entangle]]
- [[Escudo]]
- [[Feather Fall]]
- [[Fog Cloud]]
- [[Goodberry]]
- [[Hail of Thorns]]
- [[Mage Armor]]
- [[Magic Missile]]
- [[Ray of Sickness]]
- [[Sleep]]
- [[Thunderwave]]
- [[Tranquilidade]]
- [[Área Escorregadia]]{{pageNumber,auto}}
\page


### 2nd Circle
- [[Barkskin]]
- [[Blindness Deafness]]
- [[Calm Emotions]]
- [[Crown of Madness]]
- [[Darkvision]]
- [[Earthbind]]
- [[Enlarge/Reduce]]
- [[Explosão Sonora]]
- [[Flechas Sentinelas]]
- [[Hold Person]]
- [[Laço Protetor]]
- [[Lesser Restoration]]
- [[Manto de Vento]]
- [[Maximilian's Earthen Grasp]]
- [[Mind Whip]]
- [[Ray of Enfeeblement]]
- [[See invisibility]]
- [[Spike Growth]]
- [[Sugestion]]

### 3rd Circle
- [[Campo de Força]]
- [[Flecha Ácida]]
- [[Físico Divino]]
- [[Sopro das Uivantes]]

{{pageNumber,auto}}
\page
# Rogue (Specialist)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 10 (+CON mod.) maximum hit points, and gain an extra 3 (+CON mod.) per level.

**MP**: 5 per level.

**Equipment Proficiencies:** Simple weapons, light and medium armor..

**Resistências:** Dexterity, Inteligence.

{{classTable,decoration,frame
##### Rogue
| Level | Proficiency Bonus | Features |Sneak Attack | Cunning Strike | 
| :---: | :---------------: | :------- | :----: |:----: |
| 1st | +1 | Sneak Attack | 1d6 | - |
| 2nd | +1 | Rogue Feat, Expertise | 1d6 | - |
| 3rd | +2 | Rogue Feat, Cunning Action | 3d6 (1PM) | 2 |
| 4th | +2 | Rogue Feat, Attribute Score Improvement | 3d6 1PM) | 2 |
| 5th | +3 | Rogue Feat | 3d6 1PM) | 2 |
| 6th | +3 | Rogue Feat, Attribute Score Improvement | 5d6 (2PM) | 2 |
| 7th | +4 | Rogue Feat | 5d6 (2PM) | 3 |
| 8th | +4 | Rogue Feat, Attribute Score Improvement | 5d6 (2PM) | 3 |
| 9th | +5 | Rogue Feat | 7d6 (3PM) | 3 |
| 10th | +5 | Rogue Feat, Attribute Score Improvement | 7d6 (3PM) | 3 |
| 11th | +6 | Rogue Feat | 7d6 (3PM) | 4 |
| 12th | +6 | Rogue Feat, Attribute Score Improvement | 9d6 (4PM) | 4 |
| 13th | +7 | Rogue Feat | 9d6 (4PM) | 4 |
| 14th | +7 | Rogue Feat | 9d6 (4PM) | 4 |
| 15th | +8 | Rogue Feat, Attribute Score Improvement | 11d6 (5PM) | 5 |
| 16th | +8 | Rogue Feat | 11d6 (5PM) | 5 |
| 17th | +9 | Rogue Feat, Attribute Score Improvement | 11d6 (5PM) | 5 |
| 18th | +9 | Rogue Feat | 13d6 (6PM) | 5 |
| 19th | +10 | Rogue Feat, Attribute Score Improvement | 13d6 (6PM) | 6 |
| 20th | +10 | Rogue Feat | 13d6 (6PM) | 6 |
}}


**Sneak Attack.** undefined

**Cunning Action.** undefined

### Rogue Feats
Beginning at level 2, every time you gain a level in Rogue you gain a Witch Feat. You may instead of a Rogue feat take a Specialist or General Feat of your choice.



**SNEAK ATTACK.** Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack, if you were hidden or the enemy was flanked by one of your allies. The attack must use a simple or ranged weapon. Starting at level 3, every 3 levels you can spend +1PM to increases the damage by +2d6.

**EXPERTISE.** Choose a number of skills equal to you inteligence modifier (min 1). Before performing a non-attack roll with one of those skills, you may spend 1PM to add your inteligence modifier to the roll. At levels 6, 10, 14 and 18 you chose another skill, and can spend +1PM, and the total added to the roll equals the MP cost times your inteligence modifier.

**Ataque Ardiloso (Cunning Strike)**. No nível 3 você aprende 2 **Ataques Ardilosos** a sua escolha. a cada 4 níveis você aprende outro **Ataque Ardiloso** a sua escolha. Cada vez que você sobe de nível pode trocar um dos Ataques Ardilosos que você sabe por outro.

### Rogue Feats

Begining at level 2, every time you gain a level in Rogue you gain a Rogue Feat. You may instead of a Rogue feat take a Martial or General Feat of your choice.

- **Ataque Extra**. Você pode atacar 2 vezes no seu turno quando toma a ação de ataque. Pré-requisitos: 7º nível de ladino.

- **Assassinate**. Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados. Pré-requisito: 5º nível de ladino.

- **Crítico Furtivo**. Quando você acerta um ataque crítico com um Ataque Furtivo, você muda o dado de dano de 1d6 para 1d8. Você pode escolher esse poder de novo para aumentar o dado para 1d10. Pré-requisitos: 8º e 12º nível de ladino para a primeira e segunda vez, respectivamente.

- **Disparo Preciso.** Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque.

- **Emboscar**. Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate. Pré-requisito: DEX 15.

- **Escapista**. Você recebe +5 em testes de Acrobacia para escapar e em testes para resistir a efeitos que restrinjam seu movimento.

- **Gatuno**. Você recebe +2 em Atletismo. Quando escala, avança seu deslocamento normal, em vez de metade dele. Pré-requisito: FOR 11.

- **Capitalizar Distrações**. Você tem vantagem em ataques contra inimigos que não tiveram um turno ainda no combate. Ao acertar um ataque contra um inimigo distraído, você pode gastar 4PM para tornar o acerto um crítico. Pré-requisito: DEX 17, SEN 13
  {{pageNumber,auto}}
\page

- **Mão na Boca**. Você recebe +2 em testes de agarrar. Quando faz um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada. Pré-requisito: FOR 13.

- **Mente Criminosa**. Você soma seu bônus de Inteligência em Ladinagem e Furtividade. Pré-requisito: Int 13.

- **Oportunismo**. Você recebe +2 em testes de ataque contra inimigos que já sofreram dano desde seu último turno.

- **Saqueador de Tumbas**. Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de Reflexos para evitá-las.

- **Sombra**. Você recebe +2 em Furtividade. Além disso, pode se mover com seu deslocamento normal enquanto usa Furtividade sem sofrer penalidades no teste de perícia. Pré-requisito: DEX 15.



- **Veneno Persistente**. Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um). Pré-requisito: Veneno Potente, 8º nível de ladino.

- **Veneno Potente**. A CD para resistir aos venenos que você usa aumenta em +2 e esses venenos causam +1 ponto de dano por dado de dano. Pré-requisito: INT 15

- **Ataque Ardiloso.** Você aprende 2 ataques ardilosos.

- **Ardiloso ao Quadrado.** Você pode fazer 2 ataques ardilosos no mesmo ataque furtivo  (somando o custo dos 2).

- **Confiança Absoluta.** (ao fazer um ataque) X PM (limitado pela sua proficiência): Você pode escolher tomar uma penalidade de -1 no ataque, e aumentar a sua margem de ameaça em +1 no ataque por cada PM gasto.

### Ataque Ardiloso

A partir do nível 3, um ladino executando um ataque furtivo pode escolher em vez disso executar um ataque ardiloso. Ataques ardilosos são como Ataques Furtivos normais, mas um número de dados de dano do Ataque Furtivo é sacrificado para afligir o alvo com um efeito debilitante. O efeito tem duração Cena. A CD para o alvo resistir ao efeito do ataque é definida com a sua Inteligência:

- **CD Ataque Ardiloso:**  8 + proficiência + INT

{{wide
{{}}
#### Ataque Ardiloso

| Nome                | Custo | Efeito                                                           | Resistência | Pre-requisitos |
| ------------------- | ----- | ---------------------------------------------------------------- | ----------- | -------------- |
| Acertar Nervo       | 3d6   | Atordoado até o final do seu\* próximo turno, ou até tomar dano. | CON         | Ladino nível 5 |
| Mirar nos Olhos     | 2d6   | Cego até tomar dano.                                             | DEX         |                |
| Cortar Tendões      | 1d6   | Lento  (velocidade/2)                                            | CON         |                |
| Quebrar Armadura    | 2d6   | Vulnerável (-2 defesa)                                           | DEX         | Ladino nível 6 |
| Distrair            | 1d6   | Diminui a iniciativa em 5                                        | STR         |                |
| Tropeçar            | 2d6   | Caído (Prone)                                                    | STR         |                |
| Sangramento Extremo | 2d6   | Ganha 1 nível de Exaustão                                        | CON         | Ladino nível 8 |
| Lâmina Envenenada   | 1d6   | O ataque também aplica um item alquímico de sua escolha          | -           | INT 13         |

\*OBS: "seu" aqui é o ladino, não o alvo
}}
{{pageNumber,auto}}
\page
# Spelgard (Off-Caster)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 14 (+CON mod.) maximum hit points, and gain an extra 3 (+CON mod.) per level.

**MP**: You start at 1st level with 4 (+SEN mod.) maximum MP, and gain an extra 4 per level.

**Equipment Proficiencies:** Simple weapons and all kinds of armor..

**Resistências:** Sensibility, Dexterity.

**Spellcasting Attribute:** SEN.


{{classTable,decoration,frame,wide
##### Spelgard
| Level | Proficiency Bonus | Features |Spiritual Weapon | Lay on Hands | Spells Known | Max Spell Circle | 
| :---: | :---------------: | :------- | :----: |:----: |:----: |:----: |
| 1st | +1 | Lay on Hands | - | 1d8+1 | 1 | 1 |
| 2nd | +1 | Spelgard Feat, Spiritual Weapon | 2d8+SEN | 1d8+1 | 2 | 1 |
| 3rd | +2 | Spelgard Feat | 2d8+SEN | 1d8+1 | 2 | 1 |
| 4th | +2 | Spelgard Feat, Attribute Score Improvement | 2d8+SEN | 1d8+1 | 3 | 1 |
| 5th | +3 | Spelgard Feat, Attack of Opportunity | 2d8+SEN | 1d8+1 | 3 | 2 |
| 6th | +3 | Spelgard Feat | 3d8+SEN | 1d8+1 | 4 | 2 |
| 7th | +4 | Spelgard Feat, Extra Attack | 3d8+SEN | 2d8+2 | 4 | 2 |
| 8th | +4 | Spelgard Feat, Attribute Score Improvement | 3d8+SEN | 2d8+2 | 5 | 3 |
| 9th | +5 | Spelgard Feat | 3d8+SEN | 2d8+2 | 5 | 3 |
| 10th | +5 | Spelgard Feat, Attribute Score Improvement | 3d8+SEN | 3d8+3 | 6 | 3 |
| 11th | +6 | Spelgard Feat | 4d8+SEN | 3d8+3 | 6 | 4 |
| 12th | +6 | Spelgard Feat, Attribute Score Improvement | 4d8+SEN | 3d8+3 | 7 | 4 |
| 13th | +7 | Spelgard Feat | 4d8+SEN | 3d8+3 | 7 | 5 |
| 14th | +7 | Spelgard Feat, Attribute Score Improvement | 4d8+SEN | 4d8+4 | 8 | 5 |
| 15th | +8 | Spelgard Feat | 4d8+SEN | 4d8+4 | 8 | 6 |
| 16th | +8 | Spelgard Feat | 5d8+SEN | 4d8+4 | 9 | 6 |
| 17th | +9 | Spelgard Feat, Attribute Score Improvement | 5d8+SEN | 4d8+4 | 9 | 7 |
| 18th | +9 | Spelgard Feat | 5d8+SEN | 5d8+5 | 10 | 7 |
| 19th | +10 | Spelgard Feat | 5d8+SEN | 5d8+5 | 10 | 7 |
| 20th | +10 | Spelgard Feat | 5d8+SEN | 5d8+5 | 11 | 7 |
}}


**Lay on Hands.** undefined

**Spiritual Weapon.** undefined

### Spelgard Feats
Beginning at level 2, every time you gain a level in Spelgard you gain a Witch Feat. You may instead of a Spelgard feat take a Off-Caster or General Feat of your choice.



**LAY ON HANDS (CURAR PELAS MÃOS).** You may spend a major action and 1PM to touch one creature, and heal them for 1d8+1. At levels 4, 9, 15 and 18, you can spend +1PM to increate the heal amount by 1d8+1

**SPIRITUAL WEAPON.** Movement action (1PM): You create a floating, spectral weapon within range (2sqr radius of you). When you take the attack action, you can substitute one of your attacks for a Spiritual Weapon Attack. For a Spiritual Weapon Attack, you make a melee spell attack, and it deals 2d8 + SEN physical damage of the weapon's type if it hits. The weapon follows your movement, but you can move it to another spot within the ability's range as a free action once per turn. At levels 6, 11 and 16 you can spend +2PM to increase the weapon's damage by 1d8. **Either nerf damage or add concentration.**

---

### Spelgard Feats

Begining at level 2, every time you gain a level in Spelgard you gain a Spelgard Feat. You may instead of a Spelgard feat take a Martial or General Feat of your choice.

- **Arma Espiritual teleguiada**. O alcanse inicial da sua Arma Espiritual aumenta para 6 quadrados (9m).

- **Spiritual Strike**. You can spend a movement action and 1 PM to use a Spiritual Weapon Attack. Pre-requisite: 5th level Spelgard

- **Spiritual Magic**. Whenever you cast a Spell or Ability with a range of touch or self, you can cast it through your Spiritual Weapon. (isso inclui curar pelas mãos e auras)

- **Magically Powered**. Whenver you cast a spell of first circle or higher, you can spend another 2PM to perform a Spiritual Weapon Attack as a free action.

- **Defensive Spiritual Weapon**. While your Spiritual Weapon is adjacent to an ally, that ally has +2 to their defense. Pre-requisites: 7th level Spelgard.

- **Retaliating Spiritual Weapon**. When an opponent attacks an ally while your Spiritual Weapon is adjacent to the attacker, you can use yout reaction and 1PM to perform a Spiritual Weapon Attack on the attack immediately after the attack goes off. Pre-requisites: Defensive Spiritual Weapon.

**TODO: PODERES PARA AUMENTAR CRÍTICO DA ARMA ESPIRITUAL**

- **Curar Aprimorado**. Quando usar Curar Pelas Mãos, você adiciona o seu modificador de Sensibilidade no total da cura.
{{pageNumber,auto}}
\page


{{note
#### Auras

A Spelgard is always ready to use their unique combo of physique and magic to aid themselves and their allies' combat prowess!

Some Spelgard Feats are Auras. Auras work as spell-like abilities, with the following stats (unless stated otherwise):

Movement (2PM): For 2 turns (until the end of your second next turn), you and all your allies within 2sqr (3m) of you get a buff, depending on the aura. The aura only affects allies while they are within it's range. Only one aura may be active at a time.
}}

- **Aura of Retaliation**. Effect: Whenever one of your allies is damaged, your and their next damaging ability deals an aditional 1d8 damage (of the ability's damage type).

- **Aura of Irradiation**. Effect: Whenever an enemy enters or starts their turn inside the aura they must make a Presence saving throw. They take 1d6 fire damage, or half on a save.

- **Aura of Regeneration**. Effect: Your allies recover 1d4 HP whenever they first enter or start their turn within the aura.

- **Curar Distante**. Quando usar Curar Pelas Mãos, você pode gastar +1PM para aumentar o alcanse de toque para curto. Você também pode usar Curar Pelas Mãos pela sua Arma Espiritual

- **Multi-Aura**. You can have multiple auras active at once. Pre-requisites: At least 1 "Aura of" power

- **Defensive Aura**. You and your allies have +1 Defense while affected by one of your auras. Pre-requisites: At least 1 "Aura of" power

- **Weakening Aura**. Non-allies have disadvantage to resist your spells and abilities while inside one of your auras.

- **Spiritual Aura**. Your Spiritual Weapon also radiates your aura.

- **Long Range Aura**. Your aura's radius is increased to 3sqr (4.5m)

- **Um-Dois**. Reação (você acertou um oponente com uma magia de primeiro círculo ou maior, 1PM): Um resquício da sua magia fica no inimigo e marca ele. Se você acertar ele com um ataque físico ou com a sua **Arma Espiritual** até o final do seu próximo turno você usa o resquício de energia para aumentar o impacto, e dá +2d6 de dano adicional. A cada 4 níveis você pode gastar +2PM e aumentar o dano em +2d6.

- **Explosão Espiritual**. Ao realizar um golpe com a **Arma Espiritual** (+1PM): Em vez de fazer um ataque, sua Arma Espiritual explode em uma onda de energia, aumentando o dano em +3d8. O seu alvo original e todos da sua escolha em um quadrado de lado 3sqr centrado na Arma Espiritual são atingidos. Se os alvos passarem em um teste de Presença, eles tomam metade do dano

- **Conhecimento de Combate.** Você aprende 2 magias de spellgard a sua escolha

- **Combatente Arcano.** Você consegue aprender truques. Aprenda 1 truque de Spelgard.

- **Golpe Arcano.** Quando você usa um truque que não envolva um ataque físico e com casting time padrão você pode gastar 2PM para realizar um ataque como ação livre.

### Spell List

List of spells available for a Spelgard to learn.

##  Spells

### Cantrip
- [[Acid Splash]]
- [[Blade Ward]]
- [[Energy Blast]]
- [[Fire Bolt]]
- [[Green Flame Blade]]
- [[Guidance]]
- [[Poison Spray]]
- [[Ray of Frost]]
- [[Resistance]]
- [[Sword Burst]]
- [[Word of Radiance]]

### 1st Circle
- [[Arma Mágica]]
- [[Armor of Agathys]]
- [[Benção]]
- [[Burning Hands]]
- [[Chaos Bolt]]
- [[Concentração de Combate]]
- [[Curar Ferimentos]]
- [[Detect Poison and Disease (Ritual)]]
- [[Detectar Ameaças]]
- [[Divine Favor]]
- [[Escudo]]
- [[Explosão de chamas]]
- [[Guiding Bolt]]
- [[Healing Word]]
- [[Longstrider]]
- [[Mage Armor]]
- [[Magic Missile]]
- [[Primor Atlético]]
- [[Ray of Sickness]]
- [[Searing Smite]]
- [[Thunderous Smite]]
- [[Toque Chocante]]
- [[Witch Bolt]]
- [[Zephyr Strike]]{{pageNumber,auto}}
\page


### 2nd Circle
- [[Aid]]
- [[Binding Ice]]
- [[Continual Flame]]
- [[Darkvision]]
- [[Enhance Ability]]
- [[Enlarge/Reduce]]
- [[Flame Blade]]
- [[Flechas Sentinelas]]
- [[Laço Protetor]]
- [[Lesser Restoration]]
- [[Moonbeam]]
- [[Prayer of Healing]]
- [[Scorching Ray]]
- [[See invisibility]]
- [[Spider Climb]]

{{pageNumber,auto}}
\page
# Werebeast (Specialist)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 10 (+CON mod.) maximum hit points, and gain an extra 3 (+CON mod.) per level.

**MP**: 5 per level.

**Equipment Proficiencies:** Light armor and light weapons..

**Resistências:** Presence, Inteligence.

{{classTable,decoration,frame
##### Werebeast
| Level | Proficiency Bonus | Features |Wild Dice | 
| :---: | :---------------: | :------- | :----: |
| 1st | +1 | Beast Form, Wild Dice | 2d8 |
| 2nd | +1 | Werebeast Feat, Monstruous Blood, Expertise | 2d8 |
| 3rd | +2 | Werebeast Feat | 2d8 |
| 4th | +2 | Werebeast Feat, Attribute Score Improvement | 2d8 |
| 5th | +3 | Werebeast Feat | 3d8 |
| 6th | +3 | Werebeast Feat, Attribute Score Improvement | 3d8 |
| 7th | +4 | Werebeast Feat | 3d8 |
| 8th | +4 | Werebeast Feat, Attribute Score Improvement | 3d8 |
| 9th | +5 | Werebeast Feat | 4d8 |
| 10th | +5 | Werebeast Feat, Attribute Score Improvement | 4d8 |
| 11th | +6 | Werebeast Feat | 4d8 |
| 12th | +6 | Werebeast Feat, Attribute Score Improvement | 4d8 |
| 13th | +7 | Werebeast Feat | 4d8 |
| 14th | +7 | Werebeast Feat | 5d8 |
| 15th | +8 | Werebeast Feat, Attribute Score Improvement | 5d8 |
| 16th | +8 | Werebeast Feat | 5d8 |
| 17th | +9 | Werebeast Feat, Attribute Score Improvement | 5d8 |
| 18th | +9 | Werebeast Feat | 5d8 |
| 19th | +10 | Werebeast Feat, Attribute Score Improvement | 5d8 |
| 20th | +10 | Werebeast Feat | 5d8 |
}}


**Beast Form, Wild Dice.** undefined

**Monstruous Blood.** undefined

### Werebeast Feats
Beginning at level 2, every time you gain a level in Werebeast you gain a Witch Feat. You may instead of a Werebeast feat take a Specialist or General Feat of your choice.



**Wild Dice (2).** Most of your abilities as a Werebeast are based off of your Wild Dice, which is a d8. You start of with 2 Wild Dice, and gain another at 5th, 9th and 14th levels.

**Beast Form. Full Action (2PM):** You go through a violent transformation, becoming a wild, untamed beast. You gain 1 **Wild Dice** + your Werebeast level temporary hit points. You can spend +1 PM, up to your Wild Dice Ammount, to increase that by 2 **Wild Dice**. You also lose all weapon/armor proficiencies and ignore all bonuses from armor you were wearing until you leave your **Beast Form**.

While on beast form you gain a natural weapon of your **Wild Dice** slashing damage (crit 20/2x).

While on your beast form, you switch your physical and mental attributes. Strength <-> Inteligence, Dexterity <-> Sensibility, Constitution <-> Presence.

While on beast form, you add your proficiency modifier to guard and dodge.

If you lose your temporary hit points, you revert back to your human form. You can also voluntarily turn back as a Movement Action.

**Monstruous Blood. Action (1PM+, up to your Wild Dice):** 
- Human form: Choose an ally you can see within 6sqr of you. They recover 1 **Wild Dice** HP per PM spent.
- Beast form: Make a ranged attack (DEX) against an enemy you can see within 6sqr of you. On a hit they take 2 **Wild Dice** poison damage, +1 **Wild Dice** per PM spent after the first.

**Saves.** All werebeast abilities that require the target to make a saving throw use your Human form Presence as the stat for the DC.

### Werebeast Feats

Begining at level 2, every time you gain a level in Werebeast you gain a Werebeast Feat. You may instead of a Werebeast feat take a Martial or General Feat of your choice.

- **NOME.** Human form: Sua defesa aumenta em +2.
- **Garras Precisas.** Você pode usar DEX nos seus ataques na forma bestial, e eles tem +1 de margem de ameaça. 
- **Garras Enormes.** Aumente o multiplicador de crítico dos seus ataques em forma bestial em 1.
- **NOME.** Seus ataques bestiais dão 1 dado de dano a mais em inimigos afetados pelo seu sangue monstruoso.
- **Sangue Corrosivo.** Seu sangue monstruoso pode dar dano ácido em vez de veneno. Você pode gastar +1PM ao usar Sangue Monstruoso, e inimigos afetados tem que passar um teste de resistência CON, ou ficam cegos (podem repetir o teste no início dos seus turnos).
- **Garras Velozes.** (Beast Form, ao realizar um ataque) 2PM: Faça um ataque adicional contra o mesmo alvo. Pré-requisito: 3º lvl de Werebeast.
- **Transformação Veloz.** *Beast Form:* Você tem um bonus de velocidade de movimento igual ao seu número de **Wild Dice**.
- **Transfuzão Resistente.** Aliados afetados pelo seu sangue monstruoso tem vantagem no próximo teste de resistência que fizerem.
- **Transfusão Selvagem.** Aliados afetados pelo seu sangue monstruoso dão 1 **Wild Dice** de dano a mais na próxima habilidade ou ataque deles.

{{pageNumber,auto}}
\page

{{note
#### Corpo Aberrante

Alguns poderes de Werebeast são do tipo "Corpo Aberrante". Esses poderes tem efeitos diferentes na sua forma humana e forma bestial.  Poderes de Corpo Aberrante funcionam como habilidades ativas que custam uma Ação Maior e 1PM para uma forma, e um modificador passivo para a outra forma. (a não ser que a descrição do poder diga outra coisa).
}}

- **Corpo Aberrante: Garras Escalantes.** *Beast Form:* (passivo) Você ganha uma velocidade de escalada igual a sua velocidade normal. *Human Form:* Você ganha +5 em um teste de atletismo para escalar.
- **Corpo Aberrante: Quadrupede.** *Beast Form:* Dobre a sua velocidade de movimento pelo resto da cena. *Human Form: (passivo)* sua velocidade de movimento aumenta em 2sqr.
- **Corpo Aberrante: Escamas.** Beast Form: *(passivo)* Você tem velocidade de nado igual a sua velocidade de movimento. *Human Form (reação):* Ganhe +5 de Defesa até o final do seu próximo turno.
- **Corpo Aberrante: Alado.** *Beast Form: (passivo)* Você tem uma velocidade de voo de 4sqr. *Human Form:* Ganhe velocidade de voo igual a sua velocidade de movimento até o final do seu próximo turno. Pré-requisito: 1 outro poder de **Corpo Aberrante**.
- **Transformação Parcial.** Você pode gastar +2PM e usar uma habilidade de forma humana na forma bestial, ou vice-versa.
- **Garras Mortais.** Seus ataques na forma bestial tem +2 de margem de ameaça. *Pré-requisito:* Garras Precisas, 5º lvl de Werebeast. 
- **Mente Corrompida.** Você tem resistência a efeitos mentais (INT/SEN/PRE) na forma humana.
- **Corpo Corrompido.** Você tem resistência a efeitos físicos (STR/DEX/CON) na forma bestial.
- 
- **Olhar da Besta.** (ao fazer um teste de intimidação) +XPM, limitado pelo seu **Wild Dice**: Você ganha um bonus de +3\*PM gasto.
- **Purificar Linha Sanguínea.** Ação Completa (4PM, 4HP): Até o final da cena você perde 2HP no início de cada turno, e seu **Wild Dice** aumenta em um passo (d8 -> d10, d10 -> d12). Você pode cancelar esse efeito como ação livre. Quando o efeito de **Purificar Linha Sanguínea** acaba, seu **Wild Dice** se torna d6 até o final da cena, e você ganha 1 nível de Exaustão. *Pré-requisito:* 8º level de Werebeast. 



{{pageNumber,auto}}
\page
# Witch (Caster)

<style>.page#p1:after{ display:none; }</style>
**HP**: You start at 1st level with 8 (+CON mod.) maximum hit points, and gain an extra 2 (+CON mod.) per level.

**MP**: You start at 1st level with 6 (+PRE mod.) maximum MP, and gain an extra 6 per level.

**Equipment Proficiencies:** NONE.

**Resistências:** Presence, Constituition.

**Spellcasting Attribute:** PRE.


{{classTable,decoration,frame,wide
##### Witch
| Level | Proficiency Bonus | Features |Witch's Focus | Spells Known | Max Spell Circle | 
| :---: | :---------------: | :------- | :----: |:----: |:----: |
| 1st | +1 | Hex | - | 3 | 1 |
| 2nd | +1 | Witch Feat, Witch's Focus | 2 | 4 | 1 |
| 3rd | +2 | Witch Feat | 2 | 5 | 2 |
| 4th | +2 | Witch Feat, Attribute Score Improvement | 2 | 6 | 2 |
| 5th | +3 | Witch Feat | 2 | 7 | 3 |
| 6th | +3 | Witch Feat | 3 | 8 | 3 |
| 7th | +4 | Witch Feat | 3 | 9 | 4 |
| 8th | +4 | Witch Feat, Attribute Score Improvement | 3 | 10 | 4 |
| 9th | +5 | Witch Feat | 3 | 11 | 5 |
| 10th | +5 | Witch Feat | 4 | 12 | 5 |
| 11th | +6 | Witch Feat | 4 | 13 | 6 |
| 12th | +6 | Witch Feat, Attribute Score Improvement | 4 | 14 | 6 |
| 13th | +7 | Witch Feat | 4 | 15 | 7 |
| 14th | +7 | Witch Feat | 5 | 16 | 7 |
| 15th | +8 | Witch Feat | 5 | 17 | 8 |
| 16th | +8 | Witch Feat, Attribute Score Improvement | 5 | 18 | 8 |
| 17th | +9 | Witch Feat | 5 | 19 | 9 |
| 18th | +9 | Witch Feat | 5 | 20 | 9 |
| 19th | +10 | Witch Feat, Attribute Score Improvement | 5 | 21 | 9 |
| 20th | +10 | Witch Feat | 5 | 22 | 9 |
}}


**Hex.** Hexes are concentration spell-like abilities. At level 1 you learn one Hex from the Witch's Hex List, and learn a new one every 4 levels.

**Witch's Focus.** With your experience (and particular focus) in long term curses and boons, you can focus on many ongoing magical effects at once. You can concentrate on 2 effects at once instead of 1. This increases by 1 when you reach 6th, 10th and 14th level, respectively. (OBS: _you still need to pay 1PM/turn for each effect you're concentrating on_).

### Witch Feats
Beginning at level 2, every time you gain a level in Witch you gain a Witch Feat. You may instead of a Witch feat take a Caster or General Feat of your choice.

- **Focused Cantrip.** Your damaging cantrips do an extra die of damage per effect you're concentrating on

- **Scary Look.** (2PM) Action: A creature you can see rolls a Presence saving throw against your Spell DC. If they fail, they are frightened of you until the end of the scene (See: _Condition: frightened_)

- **NAME HERE.** Scary Look now targets a number of creatures of your choice equal to 1 + your Presence modifier (min 1).

- **NAME HERE.** Scary Look now makes target scared of all your alliesPre-requisites: *13th level in Witch*.

- **Cantrip asdaf.** Your cantrips have +1 to their DC, and +1 for every effect you're concentrating on

- **NAME HERE.** Advantage on CON saves to keep concentration if the save was triggered by someone affected by your Hex or Scary Look

- **Distant Hex.** double the range of your Hexes

- **Multi-Hex.** (while casting a Hex) +2PM: target an additional creature when you cast a HexPre-requisites: *5th level witch.*.

{{pageNumber,auto}}
\page


- **Cursed Knowledge.** learn 2 hexes

- **Tricky Spell.** while casting a Spell) +2PM: Be able to change what attribute the target uses for a save.Pre-requisites: *10th level witch*.

- **poder poção misteriosa 1.** Ao final de cada descanso, ou durante tempo livre você pode escolher produzir um número de poções misteriosas, limitado pelo seu nível de Bruxa. Para cada poção produzida, 1PM e 15min de trabalho com um caldeirão são gastos. Poções misteriosas são muito voláteis, e perdem seu efeito completamente depois de 24h.

- **poder poção misteriosa 2.** +1PM pra +1 efeito positivo +1 efeito negativo.

- **poder poção misteriosa 3.** +1PM pra -1 efeito negativo.

- **poder poção misteriosa 4.** Todo mundo pode fazer Ação: tomar até 1+PRE poções.

- **poder poção misteriosa 5.** Você pode escolher quais resultados dos d4 rolados são positivos e quais são negativos (o número de positivos e negativos não pode mudar)Pre-requisites: *2 poderes de poção misteriosa*.

- **poder poção misteriosa 6.** (alguém toma sua poção) reação: re-rola os efeitos.

- **poder poção misteriosa 7.** Quando alguém toma uma poção sua e rolar pelo menos 2 resultados iguais nos d4 rolados, você e quem consumiu a poção recebem PM temporário igual ao seu modificador de PRE + metade do seu nível de bruxa.Pre-requisites: *2 poderes de poção misteriosa*.

{{note
#### Poções Misteriosas

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







### Hex List:

A witch's Hex is an inescapable effect. While you concentrate on it, the target cannot get rid of the hex.

By default, a Hex takes a movement action to cast, has a range of 9sqr, costs 0PM and targets one creature you can see. You can change the target of your Hex for free if the original dies.

Most Hexes also gain an additional effect for each other effect you're concentrating on.

- **Hex: Ossos de gesso.** The target has -1 Defense, and -1 for each other effect you're concentrating on. *Descrição:* As extremidades do alvo começam a tremer, ele fica pálido e perde o foco.

- **Hex: Sangue de seiva.** Your first ally each turn that hits the target recovers (your Presence mod.) HP, +1 for each other effect you're concentrating on. *Descrição:* O alvo fica desidratado e fraco, como se alguém estivesse espremendo a vida dele. Um líquido branco, doce e cheiroso é jorrado das suas feridas recentes junto com sangue, o que rejuvenesce o causador da ferida.

- **Hex: Anemia Arcana.** The target has -1 to all of their saving throws, -1 for each other effect you're concentrating on. O alvo fica com profundas e escuras olheiras, seus músculos desinflam e suas juntas rangem com cada movimento tortuoso.

- **Hex: Suor de Slime.** The target has their movement speed halved. *Descrição:* A pele do alvo começa a secretar um pus verde fedido que atrapalha o movimento das suas pernas, e faz com que se mova de forma desajeitada.

- **Hex: Pele de Palha.** Your first ally each turn that hits the target deals an extra 1d6 damage, +1d6 for each other effect you're concentrating on. *Descrição:* a pele do alvo seca e racha, revelando sua vulnerável e vermelha carne viva.

##  Spells

### Cantrip
- [[Booming Blade]]
- [[Chill Touch]]
- [[Control Flames]]
- [[Frostbite]]
- [[Infestation]]
- [[Minor Ilusion]]
- [[Toll the Dead]]
- [[Vicious Mockery]]

### 1st Circle
- [[Bane]]
- [[Casca da Cigarra]]
- [[Cause Fear]]
- [[Chaos Bolt]]
- [[Command]]
- [[Curar Ferimentos]]
- [[Detect Poison and Disease (Ritual)]]
- [[Dissonant Whispers]]
- [[Escuridão]]
- [[Fog Cloud]]
- [[Healing Word]]
- [[Hellish Rebuke]]
- [[Hideous Laughter]]
- [[Imagem Espelhada]]
- [[Infligir Ferimentos]]
- [[Luz]]
- [[Perdição]]
- [[Ray of Sickness]]
- [[Sleep]]
- [[Snare]]
- [[Tentacle Twister]]{{pageNumber,auto}}
\page


### 2nd Circle
- [[Blindness Deafness]]
- [[Crown of Madness]]
- [[Earthbind]]
- [[Hold Person]]
- [[Lesser Restoration]]
- [[Pass Without a Trace]]
- [[Prayer of Healing]]
- [[Ray of Enfeeblement]]
- [[Wither and Bloom ]]

### 3rd Circle
- [[Camuflagem ilusória]]
- [[Flecha Ácida]]
- [[Invisibilidade]]
- [[Life Transference]]
- [[Mass Healing Word]]
- [[Oração]]
- [[Toque Vampírico]]



{{pageNumber,auto}}
\page
# Combat
## Round
For each round of combat (equivalent to ~6s of real time), each character takes their turn, in initiative order. Some items, spells and abilities might affect these numbers, but by default every character has, during their turn, access to:

- 1 Action
- 1 Movement Action
- Any number of Free Actions

## Combat Actions

### Endurance



**Ignorar Arranhões:** Movimento (2PM): Pelo resto da cena, todo dano que você tomar igual ou inferior a sua **Guarda** é ignorado. **Ignorar Arranhões** não é aplicado em dano psíquico, "DoT" ou dano ambiental (estar em chamas, andar em ácido, sangramento, etc.)

### Uncanny Dodge
Below is the definition of the Uncanny Dodge ability, that all characters can perform:



**"de Raspão".** (tomando dano) Reação (3PM): Ignore o dano, caia no chão (ver condição: caído), e aumente o custo dessa habilidade em +3PM pela cena. Você não pode usar **"de Raspão"** se custar mais que a sua **Evasão**.

Example Use: Fibi has 8 Guard and 7 Dodge. Fibi has 18 AC (someone trying to attack them has to roll a 18 or higher to hit them), can use Uncanny Dodge up to 2 times per scene, and their Endurance allows them to shrug off attacks of 8 or less points of damage. If they use Endurance and take 3 attacks dealing 7, 14 and 5 damage, the first and third attacks have their damage reduced to 0.

### Attack of Opportunity
If your character has the ability to do so, they can perform an attack of opportunity.

**Attack of Opportunity**: Reaction (An enemy leaves your melee range, 0MP): You can make an attack against the enemy immediately as they leave your melee range.
**Ataque de Oportunidade**: (Um inimigo sai do seu alcance corpo-a-corpo) Reação: Você realiza um ataque corpo-a-corpo contra esse inimigo.

### Movement
During their turn, a character can spend their movement action to move up to their movement speed. (to calculate PC's movement speed, check [[Movement]]). 

### Dash
Any character can use their Major Action in combat to perform another movement action.

### Attack
Any character can use their Major Action in combat to perform the Attack Action. When doing so, they can perform a melee or ranged attack (unarmed or with a weapon they are wielding), or perform a [[Maneuvers]]


## Attacking and Defending
### Attacking
##### Physical Attacks
To make a physical attack you first roll to hit. If you're proficient with the weapon being used, you add your [[RPG/R20/Proficiency]] bonus for your current level (copy of the proficiency table included at the end of the page).

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

{{pageNumber,auto}}
\page


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

Besides contributing to a character's Defense, Guard also allows them to use [[Combat Actions#Endurance]].

##### Dodge
The formula for a character's Dodge is:

- **Equipment bonus + Dexterity modifier**

Besides contributing to a character's Defense, Dodge also allows them to use [[Combat Actions#Uncanny Dodge]].


## Movement

A PC's movement speed (in squares of size 1.5m/5ft) is calculated by:
  - **5 + STR** (min 4 total, max 8 total)



## Maneuvers

### Grappling
Grappling is a kind of melee attack. The target of your grapple must be no more than one size larger than you, and it must be within your reach. Using at least one free hand, you try to seize the target by making a grapple check, an Athletics check contested by the target’s Athletics or Acrobatics check (the target chooses the skill to use).


## Manobras
Manobras são tipos especiais de ataques corpo-a-corpo que podem ser executadas. Rolam para acerto como um ataque normal, mas em vez de dar dano, causam um efeito especial:

### Derrubar
Você deixa o alvo caído (Veja a condição de caído: [[Conditions]]). Esta queda normalmente não causa dano.

### Empurrar
Você empurra a criatura 1 quadrado. Para cada 5 pontos de diferença entre o ataque e a defesa, você empurra o alvo mais 1 quadrado

FROM THE DMG:

#### OVERRUN
When a creature tries to move through a hostile creature's space, the mover can try to force its way through by overrunning the hostile creature. As an action or a bonus action, the mover makes a Strength (Athletics) check contested by the hostile creature's Strength (Athletics) check. The creature attempting the overrun has advantage on this check if it is larger than the hostile creature, or disadvantage if it is smaller. If the mover wins the contest, it can move through the hostile creature's space once this turn.

#### SHOVE ASIDE
With this option, a creature uses the special shove attack from the Player's Handbook to force a target to the side, rather than away. The attacker has disadvantage on its Strength (Athletics) check when it does so. If that check is successful, the attacker moves the target 5 feet to a different space within its reach.

#### TUMBLE
A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent. As an action or a bonus action, the tumbler makes a Dexterity {{pageNumber,auto}}
\page
 (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check. If the tumbler wins the contest, it can move through the hostile creature's space once this turn.

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


{{pageNumber,auto}}
\page
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



{{pageNumber,auto}}
\page
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


{{pageNumber,auto}}
\page
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

**Começo Forte.** Você ganha +2 Dodge no início de uma cena, e perde esse bonus na primeira vez que toma dano durante ela. *Pré-requisito*: 12 Dex.

**Reflexos de Desvio.** Você pode se esconder como ação livre imediatamente após usar "**de Raspão**".

**Liberdade de Movimento**. When you use the Dash action, difficult terrain doesn’t cost you extra movement on that turn. When you make a melee attack against a creature, you don’t provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.

**Reflexos de Combate**. Você ganha uma ação de movimento extra no seu primeiro turno de cada combate. *Pré-requisito*: Des 13.

**Atraente**. Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você. *Pré-requisito*: Car 13.

**Confiança Absoluta.** (ao fazer um ataque) X PM (limitado pela sua proficiência): Você pode escolher tomar uma penalidade de -1 no ataque, e aumentar a sua margem de ameaça em +1 no ataque por cada PM gasto. Pré-requisito: Dex 15



{{pageNumber,auto}}
\page
# Martial Feats
{{}}
**Athlete.** You have undergone extensive physical training to gain the following benefits:
  - Increase your Strength or Dexterity score by 1, to amaximum of 20.
  - When you are prone, standing up uses half of your movement.
  - Climbing doesn’t halve your speed.
  - You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet.

**Defensive Duelist.** (você é atacado enquanto empunha uma arma leve com a qual é proficiente) reação: some sua proficiência na sua defesa contra esse ataque. Prerequisite: Dexterity 13 or higher

**Reflexos de Combate.** Você ganha uma ação de movimento extra no seu primeiro turno de cada combate. *Pré-requisito*: Des 13.

**Acuidade com Arma.** Quando usa uma arma leve de corpo a corpo ou uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano. *Pré-requisito*: Des 13.

**Ataque Poderoso.** Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano. *Pré-requisito*: For 13.

**Arremesso Potente.** Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso. *Pré-requisitos*: For 13, Estilo de Arremesso.

**Foco na Simplicidade.** Você tem +2 margem de ameaça em ataques com armas simples.

**Ataque Pesado.** Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra). *Pré-requisito*: Estilo de Duas Mãos.

**Estilo de Duas Mãos.** Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves. *Pré-requisitos*: For 15.

**Estilo de Uma Arma.** Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados). *Pré-requisito*: treinado em Luta.

**Ataque Preciso.** Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico. *Pré-requisito*: Estilo de Uma Arma.

**Estilo de Duas Armas.** Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se você possuir Ambidestria, não sofre essa penalidade. *Pré-requisito*: Des 15, treinado em Luta.

**Arma Secundária grande.** Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas. *Pré-requisito*: Estilo de Duas Armas.

**Estilo de Arremesso.** Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas.

**Disparo Preciso.** Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque.

**Desarmar Aprimorado.** Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante, em sentido horário) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). *Pré-requisito*: Combate Defensivo.

**Foco em Arma.** Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes. *Pré-requisito*: proficiência com a arma

**Mira Apurada.** Você pode gastar uma ação de movimento para mirar. Se fizer isso, recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno. *Pré-requisitos*: Sab 13, Disparo Preciso.

**Sentinel.** When you hit a creature with an opportunity attack, the creature’s speed becomes 0 for the rest of the turn. Pre-requisite: Opportunity Attack


{{pageNumber,auto}}
\page
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


{{pageNumber,auto}}
\page
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

{{pageNumber,auto}}
\page
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


{{pageNumber,auto}}
\page
# Starting Items
When starting an adventure, you can chose your character's initial equipment by choosing items whose total value are within the table below for that specific level (but remember to validate with your DM if those items are setting and context appropriate for your character to have access to at that point).

##### Typical Difficulty Classes
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



{{pageNumber,auto}}
\page
# Carga
A quantidade de equipamento que um personagem consegue levar consigo enquanto se aventura é medida em espaços no seu inventário. Um personagem por padrão possui **10 + FOR  + CON** (mínimo: 8) espaços no seu inventário. A maioria dos itens ocupa 1 espaço, porém:

- Ingredientes, matérias primas e outros itens minúsculos ocupam 1/2 espaço.
- Itens alquímicos, poções, pergaminhos e outros itens consumíveis ocupam 1 espaço.
- Armas de duas mãos, escudos, criaturas minúsculas e armaduras leves e médias ocupam 2 espaços.
- Armaduras pesadas e criaturas pequenas ocupam 5 espaços.

## Sobrecarga
Se um personagem ultrapassar seu limite de carga, ele fica sobrecarregado. Um personagem sobrecarregado tem -2sqr de movimento. Um personagem não consegue carregar mais do que o dobro do seu limite.


{{pageNumber,auto}}
\page
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


{{pageNumber,auto}}
\page
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
| Light Shield | -3    | 2     | 15g  | -   |
| Heavy Shield | -4    | 3     | 200g | 13  |

\**STR*: The minimum strength score requirement to wear the armor.

\*Movement: Movement speed penalty while wearing.

**Finesse**. When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.

**Heavy**. Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon’s size and bulk make it too large for a Small creature to use effectively.

**Light**. A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.

**Loading**. This weapons needs to be reloaded before it can be fired again.

**Thrown**. If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.

**Two-Handed**. This weapon requires two hands to use.

{{pageNumber,auto}}
\page


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

{{pageNumber,auto}}
\page
# Consumable Items

| Name              | Tool              | Price |
|:----------------- | ----------------- | -----:|
| Acid              | Alchemist's tools |   25g |
| Alchemist's Fire  | Alchemist's tools |   50g | 
| Potion of Healing | Alchemist's tools |   50g |
| Poison, basic     | Alchemist's tools |  100g |
| Healer’s Kit      | -                 |    5g |

Poisons and Healing potions have their own sections.

**Healer’s Kit.** This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Medicine check.

############ INVALID_LINK "null" ############

## Potions
Drinking a potion requires an Action, and if it has a long-lasting effect it's duration is scene, unless it states otherwise.

### Curative Potions
#### Healing Potion
_Potion, Common_
A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.

| Potion of ...    |     | Rarity    | Price  | HP      |
| ---------------- | --- | --------- | ------ | ------- |
| Healing          |     | Common    | 50g    | 2d4+2   |
| Greater healing  |     | Uncommon  | 200g   | 4d4+4   |
| Superior healing |     | Rare      | 2000g  | 8d4+8   |
| Supreme healing  |     | Very rare | 20000g | 10d4+20 |

#### Mana Potion
_Potion, Common_
A character who drinks the magical purple fluid in this vial regains 2d4 MP. Drinking or administering a potion takes an action.

| Essence of ... | Rarity   | Price | MP  |
| -------------- | -------- | ----- | --- |
| Mana           | Common   | 25g   | 2d4 |
| Greater Mana   | Uncommon | 150g  | 4d4 | 

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

## Poisons
#### Basic Poison
_Potion, Common, lv1. 20g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d12 poison damage.

#### Grude Verde
_Potion, Common, lv2. 30g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 12 Constitution saving throw or take 1d8 poison damage and be slowed for the scene.

#### Peçonha Concentrada
_Potion, Common, lv3. 60g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition {{pageNumber,auto}}
\page
{{}}must make a DC 16 Constitution saving throw or take 3d6 poison damage.


## Óleos
Óleos são itens consumíveis de uso único. Como uma ação de movimento, um personagem pode despejar um óleo que já esteja segurando em uma peça de armadura, arma ou munição que esteja segurando ou de uma criatura adjacente. Uma criatura pode tentar evitar o óleo, fazendo um teste de resistência de Destreza contra uma CD 8+prof+DEX de quem estiver tentando espalhar o óleo. O óleo escorre e perde seu efeito no final da cena.

### Oils
| Name     | price | target                  |
| -------- | ----- | ----------------------- |
| Fadaísca | 5g    | Armadura, Arma, Munição |
| Firucum  | 10g   | Arma, Munição           | 

- **Fadaísca.** Efeito: Um impacto forte (um ataque acertando) acende o óleo, que gera um brilho cegante em um raio de 1sqr. Todas as criaturas (fora você) no alcance devem passar em um teste de resistência SEN (CD 10), ou ficam cegos até o final do seu próximo turno.
- **Firucum.** Um líquido viscoso, levemente laranja e com um cheiro agridoce. Ele é extremamente volátil, e pega fogo com o menor impacto. *Efeito:* O próximo ataque dá 3d6 dano de fogo adicional.


{{pageNumber,auto}}
\page
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

To attempt it the reader must spend 4 hours reading the scroll for each tier. At the end of this study (that can happen over multiple sessions), the reader makes an Arcana  check, with DC 14 + tier. If they succeed, the reader learns that spell, and adds it to their spell list.

## Creating Spell Scrolls

At the start of the crafting attempt, the spellcaster decides on what spell and what modifiers to use. The total MP cost of the spell (that the spellcaster should be able to cast) becomes the intended spell scroll's tier. To craft a spell scroll, the caster must have ready materials (special parchment, magic ink, etc.) equal to 5gp per MP cost of the spell (including all spell modifiers, that the crafter decides during the crafting process). They then spend 3 hours and 1MP per tier transcribing the spell. At the end of the process, they make an Arcana check (DC 10 + tier). If they succeed, the materials are expended and scroll is created. If they fail by 5 or more, the crafting materials are expended.

## Buying Spell Scrolls

In general, Spell Scrolls sold by merchants and other casters cost ~10gp per tier.

## Ideas for change
Maybe make it be different checks instead of all Arcana?

Change cost to like $circle*tier*5gp$, so a tier 2 darkness (circle 1) would cost 10gp, a tier 2 hold person (circle 2) would cost 20gp and a tier 6 fireball (circle 3) would cost 180gp.

Ignore the previous crafting rules and use the simpler general ones.

## Working with item levels.
The level of an item would be equal to the spell's circle (then you can have characters having access to higher spells as a consumable, but not having lv1's casting wish).



{{pageNumber,auto}}
\page
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

{{pageNumber,auto}}
\page

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


{{pageNumber,auto}}
\page
# Crafting

**IDEA:** Maybe steal pathfinder's idea of magic item levels and use it here for ingredient and roll CD.

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
| Rune Crafting | PRE                | Standalone runes and imbuing runes into items.        |
| Scribing      | INT                | Spell Scrolls.                                        |
| Smithing      | STR                | Armor, weapons and ammunition.                        |

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

| week | intended production                                                                                                  | alchemy roll    | craft CD      | result                               | item progress                                                | materials at start of week        | materials spent | 
| ---- | -------------------------------------------------------------------------------------------------------------------- | --------------- | ------------- | ------------------------------------ | ------------------------------------------------------------ | --------------------------------- | --------------- |
| 1    | progress on **Peçonha Concentrada** (0g -> 50g)                                                                      | 10              | 13            | Failure                              | none                                                         | 30g worth                         | none     |
| 2    | progress on **Peçonha Concentrada** (0g -> 50g)                                                                      | 13              | 13            | Success                              | **Peçonha Concentrada** partially done (50g/60g)             | 30g worth                       | 12,5g worth      |
| 3.1    | Finish **Peçonha Concentrada** (50g -> 60g) | 14 | 13 | Success | **Peçonha Concentrada** done | 17,5g | 2,5g worth                |
| 3.2    | make 1x **Grude Verde**                                                                                                                     | 17                | 12              | Success(5+)                                      | **Grude Verde** (2x) done                                                             | 17,5g                                  | 7,5g worth                |
| 3.3    | progress on **Grude Verde** (0 -> 10g)                                                                                                                     | 5                | 12              | Failure(5+)                                     | none                                                             | 17,5g                                  | 2,5g worth                |
| 4    | make 1x **Grude Verde**                                                                                                                     | 15                | 12              | Success                                     | **Grude Verde** done                                                             | 5g worth + 5g worth (newly acquired)                                  | 7,5g worth                |
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


{{pageNumber,auto}}
\page
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
{{pageNumber,auto}}
\page

| Spell Level | Base MP Cost |
|:-----------:|:------------:|
|  cantrips   |      0       |
|      1      |      1       |
|      2      |      2       |
|      3      |      3       |
|      4      |      4       |
|      5      |      6       |
|      6      |      8       |
|      7      |      10      |
|      8      |      12      |
|      9      |      15      |

## Spell Tags
All spells have one or more tags where they fit. The spell [[Toque Chocante]], for example, has the lightning, battle & energy tags. Tags are most useful for designers when creating spell lists for new classes.

For example, let's pretend we're creating a "blaster" caster class. That class is 110% ofensive, with only elemental, attack and some utility spells, while most of it's non-attacking abilities come from the class features, not it's spells. So, when creating the spell list for the class we can (instead of checking hundreds of spells manually and deciding if they work with the idea or not) take the 'energy', 'evocation' and 'decay' tags, and just say that the spell list consists of all spells with at least 1 of those tags.

It's important to point out that you're not tied to using only this to create a spell list. Are you mostly fine with using tags to define it, but also REALLY want characters from that class to be able to use Leomund's Tiny Hut? Just add it to the list, ignoring the tags. Don't want a class to have access to one specific spell from a tag you're allowing them? Remove that single spell. Do you just want to manually pick spells? Have at it. This tag system was made to aid the designer in speeding up the process of making a spell list, not to constrain your ideas in any way

## Flavor
TODO TALK ABOUT REFLAVORING AND STUFF. USE PLANTOMANCER AS EXAMPLE



{{pageNumber,auto}}
\page
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
  - #warmagic (self buffs, weapon attacks. stuff that a fighter would like)
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


{{pageNumber,auto}}
\page
# Spell List
. Global list of all spells, divided by circle:



## All Spells

### Cantrip
- [[Acid Splash]]
- [[Blade Ward]]
- [[Booming Blade]]
- [[Chill Touch]]
- [[Control Flames]]
- [[Create Bonfire]]
- [[Energy Blast]]
- [[Fire Bolt]]
- [[Frostbite]]
- [[Green Flame Blade]]
- [[Guidance]]
- [[Infestation]]
- [[Lightning Lure]]
- [[Magic Stone]]
- [[Message]]
- [[Minor Ilusion]]
- [[Poison Spray]]
- [[Primal Savagery]]
- [[Ray of Frost]]
- [[Resistance]]
- [[Shape Water]]
- [[Shillelagh]]
- [[Sword Burst]]
- [[Thorn Whip]]
- [[Thunderclap]]
- [[Toll the Dead]]
- [[Vicious Mockery]]
- [[Word of Radiance]]

### 1st Circle
- [[Abençoar Alimentos]]
- [[Animal Friendship]]
- [[Arma Mágica]]
- [[Armor of Agathys]]
- [[Bane]]
- [[Beast Bont]]
- [[Benção]]
- [[Burning Hands]]
- [[Caminhos da Natureza]]
- [[Canhão de Ervilha]]
- [[Casca da Cigarra]]
- [[Catapult]]
- [[Cause Fear]]
- [[Chaos Bolt]]
- [[Charm Person]]
- [[Command]]
- [[Compelled Duel]]
- [[Concentração de Combate]]
- [[Controlar Plantas]]
- [[Curar Ferimentos]]
- [[Despedaçar]]
- [[Detect Poison and Disease (Ritual)]]
- [[Detectar Ameaças]]
- [[Dissonant Whispers]]
- [[Divine Favor]]
- [[Earth Tremor]]
- [[Enfeitiçar]]
- [[Entangle]]
- [[Escudo]]
- [[Escuridão]]
- [[Explosão de chamas]]
- [[Feather Fall]]
- [[Fog Cloud]]
- [[Goodberry]]
- [[Guiding Bolt]]
- [[Hail of Thorns]]
- [[Healing Word]]
- [[Hellish Rebuke]]
- [[Hideous Laughter]]
- [[Imagem Espelhada]]
- [[Infligir Ferimentos]]
- [[Longstrider]]
- [[Luz]]
- [[Mage Armor]]
- [[Mage Hand]]
- [[Magic Missile]]
- [[Perdição]]
- [[Primor Atlético]]
- [[Ray of Sickness]]
- [[Searing Smite]]
- [[Sleep]]
- [[Snare]]
- [[Teia]]
- [[Tentacle Twister]]
- [[Thunderous Smite]]
- [[Thunderwave]]
- [[Toque Chocante]]
- [[Tranquilidade]]
- [[Witch Bolt]]
- [[Zephyr Strike]]
- [[Área Escorregadia]]{{pageNumber,auto}}
\page


### 2nd Circle
- [[Aid]]
- [[Barkskin]]
- [[Beast Sense]]
- [[Binding Ice]]
- [[Blindness Deafness]]
- [[Calm Emotions]]
- [[Continual Flame]]
- [[Crown of Madness]]
- [[Darkvision]]
- [[Earthbind]]
- [[Enhance Ability]]
- [[Enlarge/Reduce]]
- [[Explosão Sonora]]
- [[Flame Blade]]
- [[Flechas Sentinelas]]
- [[Heat Metal]]
- [[Hold Person]]
- [[Laço Protetor]]
- [[Lesser Restoration]]
- [[Manto de Vento]]
- [[Maximilian's Earthen Grasp]]
- [[Mind Whip]]
- [[Moonbeam]]
- [[Pass Without a Trace]]
- [[Prayer of Healing]]
- [[Ray of Enfeeblement]]
- [[Scorching Ray]]
- [[See invisibility]]
- [[Spider Climb]]
- [[Spike Growth]]
- [[Sugestion]]
- [[Web]]
- [[Wither and Bloom ]]

### 3rd Circle
- [[Campo de Força]]
- [[Camuflagem ilusória]]
- [[Espelho do Pântano]]
- [[Flecha Ácida]]
- [[Físico Divino]]
- [[Invisibilidade]]
- [[Life Transference]]
- [[Mass Healing Word]]
- [[Oração]]
- [[Raio Solar]]
- [[Relâmpago]]
- [[Soco de Arsenal]]
- [[Sopro das Uivantes]]
- [[Toque Vampírico]]

### 5th Circle
- [[Transformação de Guerra]]

{{pageNumber,auto}}
\page
# Spells
. Here is a list of all spells, sorted alphabetically

### Abençoar Alimentos (1 MP)
<div class="spell-tags">holy sacred plant feral wild</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto;
- **Alvo:** alimento para 1 criatura;
- **Duração:** cena.
___

Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia. Truque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido.

- **+1 PM:** aumenta o número de alvos em +1..
- **+1 PM:** muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta..

### Acid Splash (0 MP)
<div class="spell-tags">acid decay evocation thaumaturgy</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** imediata
- **Resistência:** DEX
___

You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.

- **+1PM:** Aumenta o dano em 1d6 (limitado pelo círculo máximo de magia que você tem).
- **+3PM:** Muda o alcance para 18m.

### Aid (2 MP)
<div class="spell-tags">boost sacred</div>

*2nd Circle*
- **Execução:** 1 Action
- **Alcance:** 30 feet
- **Duração:** 8 hours
___

Your spell bolsters your allies with toughness and resolve.
Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration.

- **+3 PM:** aumenta o efeito em 5..

### Animal Friendship (1 MP)
<div class="spell-tags">wild feral enchantment trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** 24 horas.
___

This spell lets you convince a beast that you mean it no harm.  
Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spell ends.

- **+2PM:** you can affect one additional beast for each slot level above 1st..{{pageNumber,auto}}
\page

### Área Escorregadia (1 MP)
<div class="spell-tags">arcane creation trickery water nature</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto
- **Alvo:** quadrado de 2sqr ou 1 objeto
- **Duração:** cena
- **Resistência:** Dex
___

Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10).

Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.

- **+1 PM:** aumenta a área em +1 quadrado de 1,5m..
- **+2PM:** a área conta como terreno difícil.
- **+2 PM:** muda a CD dos testes para 15..
- **+5 PM:** muda a CD dos testes para 20..

### Arma Mágica (1 MP)
<div class="spell-tags">boost sacred warmagic thaumaturgy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Duração:** cena
___

A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica. Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque.

- **+2 PM:** aumenta o bônus em +1..
- **+2 PM:** a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada..

### Armor of Agathys (1 MP)
<div class="spell-tags">cold elemental abjuration warmagic creation arcane thaumaturgy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Duração:** cena.
___

A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear.

You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.

- **+1PM:** aumenta os PV temporários em 5.
- **+1PM:** aumenta o dano em 5.

### Bane (1 MP)
<div class="spell-tags">curse occult</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** 30 feet
- **Duração:** Concentration
___

Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.

{{pageNumber,auto}}
\page

### Barkskin (2 MP)
<div class="spell-tags">plant wild boost sacred abjuration thaumaturgy warmagic</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You touch a willing creature. Until the spell ends, the target’s skin has a rough, bark-like appearance, and the target’s Defense can’t be less than 16, regardless of what kind of armor it is wearing.

- **+2PM:** increase the minimum Defense by +1.
- **+3PM:** increase the number of targets by 1.

### Beast Bont (1 MP)
<div class="spell-tags">feral divination arcane enchantment wild trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** cena (1h).
___

You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast’s Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.

- **+2PM:** increase the maximum intelligence by +1.

### Beast Sense (2 MP)
<div class="spell-tags">wild feral divination arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You touch a willing beast. For the duration of the spell, you can use your action to see through the beast’s eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses.



### Benção (1 MP)
<div class="spell-tags">boost sacred speech no-trickery</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** 30 feet
- **Duração:** cena
___

You bless up to three creatures of your choice within range. Each target gains a d4. Whenever a target makes an attack roll or a saving throw before the spell ends, the target spend that d4 and add the number rolled to the attack roll or saving throw.

- **+2 PM:** aumenta o número de alvos em 1.
- **+2 PM:** aumenta o número de dados de auxílio em +1..
- **+3 PM:** muda o tipo dos dados de auxílio para d6..
- **+4 PM:** muda o tipo dos dados de auxílio para d8. Requer 2º círculo.
- **+1 PM:** muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo pela duração da magia..{{pageNumber,auto}}
\page

### Binding Ice (2 MP)
<div class="spell-tags">cold elemental thaumaturgy evocation</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** self (cone 6sqr)
- **Duração:** imediata
- **Resistência:** CON
___

A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its speed reduced to 0. On a successful save, a creature takes half as much damage and isn't hindered by ice.

- **+1PM:** +1d8 dano.

### Blade Ward (0 MP)
<div class="spell-tags">abjuration warmagic thaumaturgy</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** pessoal
- **Duração:** 1 rodada.
___

You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.



### Blindness Deafness (2 MP)
<div class="spell-tags">curse transmutation trickery occult arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.

- **+3PM:** target an additional creature..

### Booming Blade (0 MP)
<div class="spell-tags">warmagic wind trickery curse occult nature thaumaturgy</div>

*Cantrip*
- **Execução:** padrão
- **Alvo:** pessoal
- **Duração:** imediata.
___

As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails.  
On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves be- fore then, it immediately takes 1d8 thunder damage, and the spell ends.  
This spell's damage increases when you reach higher levels.

{{pageNumber,auto}}
\page

### Burning Hands (1 MP)
<div class="spell-tags">fire elemental evocation thaumaturgy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** cone (3sqr)
- **Duração:** imediato
- **Resistência:** DEX
___

As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.

The fire ignites any flammable objects in the area that aren’t being worn or carried.

- **+1 PM:** dano +1d6..
- **+2PM:** aumenta o tamanho do cone em +1sqr.

### Calm Emotions (2 MP)
<div class="spell-tags">enchantment trickery boost sacred</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You attempt to suppress strong emotions in a group of people.  
Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.  
  
Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.



### Caminhos da Natureza (1 MP)
<div class="spell-tags">wild summon enchantment trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto;
- **Alvo:** criaturas escolhidas;
- **Duração:** 1 dia.
___

Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.

- **+0 PM:** muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.
- **+1 PM:** além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.
- **+2 PM:** aumenta o bônus de deslocamento em +3m.

### Campo de Força (3 MP)
<div class="spell-tags">abjuration thaumaturgy boost sacred warmagic</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Alvo:** você
- **Duração:** concentração.
___

Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano de corte, impacto ou perfuração.

- **+1 PM:** muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe resistência 30 contra o próximo dano que sofrer até o fim do turno atual..
- **+1 PM:** aumenta os PV temporários em +5 ou a resistência a dano em +10..{{pageNumber,auto}}
\page

### Camuflagem ilusória (3 MP)
<div class="spell-tags">ilusion trickery</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem.

- **+3 PM:** a imagem do alvo fica mais distorcida, oferecendo camuflagem total..
- **+7 PM:** muda o alcance para curto e o alvo para criaturas escolhidas. Requer 7º círculo..

### Canhão de Ervilha (1 MP)
<div class="spell-tags">summon plant wild</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto;
- **Alvo:** 1 criatura ou objeto mundano Pequeno;
- **Duração:** instantânea;
- **Resistência:** CON
___

Você convoca uma planta mágica, que cospe ervilhas no seu alvo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (resistência reduz o dano à metade e evita o atordoamento). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído.

- **+2 PM:** aumenta o dano em +1d8+2..
- **+2 PM:** muda o alvo para objeto mundano Médio. Requer 2º círculo..
- **+5 PM:** muda o alvo para objeto mundano Grande. Requer 3º círculo..
- **+9 PM:** muda o alvo para objeto mundano Enorme. Requer 4º círculo..
- **+14 PM:** muda o alvo para objeto mundano Colossal. Requer 5º círculo..

### Casca da Cigarra (1 MP)
<div class="spell-tags">occult abjuration necromancy wild feral thaumaturgy arcane</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Duração:** cena.
___

Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.

- **+1PM:** aumenta +1d4 nos PV temporários.

### Catapult (1 MP)
<div class="spell-tags">transmutation earth nature arcane</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.

- **+2PM:** aumenta o dano em +1d8, e o peso máximo do objeto em 5lb.{{pageNumber,auto}}
\page

### Cause Fear (1 MP)
<div class="spell-tags">curse trickery enchantment occult</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

- **+2PM:** target one additional creature.

### Chaos Bolt (1 MP)
<div class="spell-tags">occult evocation elemental fire lighning cold thaumaturgy psyquic energy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** imediato.
- **Crítico:** 20/3x
___

You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attacks damage type, as shown below.

| d8  | Damage Type |
| --- | ----------- |
| 1   | Acid        |
| 2   | Cold        |
| 3   | Fire        |
| 4   | Force       |
| 5   | Lightning   |
| 6   | Poison      |
| 7   | Psychic     |
| 8   | Thunder     |



### Charm Person (1 MP)
<div class="spell-tags">enchantment trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.

- **+2PM:** target one additional creature.

### Chill Touch (0 MP)
<div class="spell-tags">cold elemental unholy occult</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 18m (12 quadrados de 1,5m)
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You create a ghostly, skeletal hand in the space of a creature within range.  
Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d6 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn..

- **+2 PM:** Increase the damage by 1d6..{{pageNumber,auto}}
\page

### Command (1 MP)
<div class="spell-tags">enchantment speech trickery curse occult</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** 1 rodada.
___

**Approach** The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you..**Drop** The target drops whatever it is holding and then ends its turn..**Flee** The target spends its turn moving away from you by the fastest available means..**Grovel** The target falls prone and then ends its turn..**Halt** The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.

- **+2PM:** target an additional creature.

### Compelled Duel (1 MP)
<div class="spell-tags">warmagic holy enchantment trickery sacred thaumaturgy</div>

*1st Circle*
- **Execução:** movimento
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn.  
  
The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.

- **+XPM:** you gain an offensive buff against the target.
- **+XPM:** both you and the target have +# movement speed when running towards eachother.

### Concentração de Combate (1 MP)
<div class="spell-tags">boost no-sacred thaumaturgy warmagic</div>

*1st Circle*
- **Execução:** livre
- **Alcance:** pessoal
- **Alvo:** você
- **Duração:** 1 rodada.
___

Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, você rola dois dados e usa o melhor resultado.

- **+2 PM:** muda a execução para padrão e a duração para cena. Requer 3º círculo..
- **+5 PM:** além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 5º círculo..

### Continual Flame (2 MP)
<div class="spell-tags">creation fire thaumaturgy evocation arcane elemental thaumaturgy</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** indeterminada (até ser destruída).
___

A flame, equivalent in brightness to a torch, springs forth from an object that you touch.  
The effect looks like a regular flame, but it creates no heat and doesn’t use oxygen. A continual flame can be covered or hidden but not smothered or quenched.

{{pageNumber,auto}}
\page

### Control Flames (0 MP)
<div class="spell-tags">evocation fire ilusion trickery thaumaturgy elemental</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** imediato ou 1 hora.
___

You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location..You instantaneously extinguish the flames within the cube..You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour..You cause simple shapes — such as the vague form of a creature, an inanimate object, or a location — to appear within the flames and animate as you like. The shapes last for 1 hour.



### Controlar Plantas (1 MP)
<div class="spell-tags">plant wild enchantment trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto;
- **Alvo:** quadrado com 9m de lado;
- **Duração:** cena;
- **Resistência:** Dex.
___

Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.

- **Truque:** muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador..

### Create Bonfire (0 MP)
<div class="spell-tags">fire summon wild transmutation arcane elemental</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** concentration.
___

You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire’s space for the first time on a turn or ends its turn there.  
The bonfire ignites flammable objects in its area that aren’t being worn or carried.

- **+2PM:** increase damage by +1d8.

### Crown of Madness (2 MP)
<div class="spell-tags">enchantment curse unholy trickery occult psyquic energy</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration.  
While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.  
  
The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.  
  
On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.

- **+1PM:** the target also takes 1d8 psychic damage at the start of their turns.
- **+2PM:** increase the damage by +1d8.{{pageNumber,auto}}
\page

### Curar Ferimentos (1 MP)
<div class="spell-tags">recovery sacred</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** instantânea.
___

Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. Como mortos-vivos usam energia egativa, esta magia causa dano de luz a eles (Vontade reduz à metade). Curar Ferimentos anula Infligir Ferimentos. Truque: em vez do normal, estabiliza uma criatura. Truque: muda o alvo para 1 morto- vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).

- **+1 PM:** aumenta a cura em +1d8+1..
- **+2 PM:** também remove uma condição de adiga do alvo..
- **+2 PM:** muda o alcance para curto..
- **+5 PM:** muda o alcance para curto e o alvo para criaturas escolhidas..

### Darkvision (2 MP)
<div class="spell-tags">holy divination transmutation sacred arcane boost</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** Toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You touch a willing creature to grant it the ability to see in the dark.  
For the duration, that creature has darkvision out to a range of 12sqr (18m).

- **+2 PM:** +1 alvo.
- **+1 PM:** +4sqr (+6m)..

### Despedaçar (1 MP)
<div class="spell-tags">wind nature arcane transmutation</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura ou objeto mundano Pequeno
- **Duração:** instantânea
- **Resistência:** CON.
___

Esta magia emite um som alto e agudo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (resistência reduz o dano à metade e evita o atordoamento). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído.

- **+2 PM:** aumenta o  ano em +1d8+2..
- **+2 PM:** muda o alvo para objeto mundano Médio. Requer 3º círculo..
- **+5 PM:** muda o alvo para objeto mundano Grande. Requer 5º círculo..
- **+9 PM:** muda o alvo para objeto mundano Enorme. Requer 7º círculo..
- **+14 PM:** muda o alvo para  bjeto mundano Colossal. Requer 9º círculo..

### Detect Poison and Disease (Ritual) (1 MP)
<div class="spell-tags">sacred holy recovery</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** Self
- **Duração:** 10 minutes
___

For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.

{{pageNumber,auto}}
\page

### Detectar Ameaças (1 MP)
<div class="spell-tags">divination feral wild warmagic thaumaturgy arcane</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** pessoal;
- **Alvo:** esfera de 9m de raio;
- **Duração:** instantânea.
___

Você percebe a presença e a localização de criaturas inamistosas ou hostis na área, mesmo através de barreiras físicas.

- **+0 PM:** em vez de criaturas, você percebe a presença e localização de venenos..
- **+1 PM:** muda a execução para ação completa. Você descobre também a raça ou espécie e o poder das criaturas (determinado pela aura delas). Criaturas de 1º a 6º nível geram uma aura tênue, criaturas de 7º a 12º nível geram uma aura moderada e criaturas de 13º ao 20º nível geram uma aura poderosa. Criaturas acima do 20º nível geram uma aura avassaladora..
- **+2 PM:** em vez de criaturas, você percebe a presença e localização de armadilhas..
- **+5 PM:** muda a área para esfera de 30m de raio. Requer 3º círculo..

### Dissonant Whispers (1 MP)
<div class="spell-tags">curse unholy trickery occult psyquic energy occult speech</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain.  

The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction , if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save.

- **+2PM:** +1d6 dmg.

### Divine Favor (1 MP)
<div class="spell-tags">warmagic holy sacred radiant energy thaumaturgy</div>

*1st Circle*
- **Execução:** Movimento
- **Alcance:** pessoal
- **Duração:** concentração.
___

Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal and extra 1d6 radiant damage on a hit.

- **+2PM:** +1d6 damage.

### Earth Tremor (1 MP)
<div class="spell-tags">earth nature transmutation arcane</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** Self (2sqr radius)
- **Duração:** Instantaneous
___

You cause a tremor in the ground in a 2sqr radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.

- **+2PM:** increase the damage by +1d6.
- **+3PM:** increase the radius by 1sqr.{{pageNumber,auto}}
\page

### Earthbind (2 MP)
<div class="spell-tags">earth nature wind enchantment curse occult trickery</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 30sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends.



### Energy Blast (0 MP)
<div class="spell-tags">energy evocation thaumaturgy</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** 1 criatura
- **Duração:** instantânea.
- **Crítico:** 20/2x
___

A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 radiant damage.

- **+1 PM:** +2sqr alcance..
- **+2 PM:** você lança +1 raio contra mais um alvo a sua escolha.
- **+3 PM:** você lança +1 raio contra o alvo principal.
- **+2 PM:** margem de ameaça +2.

### Enfeitiçar (1 MP)
<div class="spell-tags">enchantment trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto
- **Alvo:** 1 humanoide
- **Duração:** concentração
- **Resistência:** PRE anula
___

Esta magia torna o alvo prestativo (veja a página 118). Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com a vítima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).

- **+2 PM:** em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar..
- **+5 PM:** muda o alvo para 1 espírito ou monstro. Requer 3º círculo..
- **+5 PM:** afeta todos os alvos dentro do alcance..

### Enhance Ability (2 MP)
<div class="spell-tags">transmutation abjuration warmagic boost feral sacred wild thaumaturgy arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

Bear’s Endurance. The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends..Bull’s Strength. The target has advantage on Strength checks, and his or her carrying capacity doubles..Cat’s Grace. The target has advantage on Dexterity checks. It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated..Eagle’s Splendor. The target has advantage on Charisma checks..Fox’s Cunning. The target has advantage on Intelligence checks..Owl’s Wisdom. The target has advantage on Wisdom checks.

- **+2PM:** aumente o número de alvos em 1.{{pageNumber,auto}}
\page

### Enlarge/Reduce (2 MP)
<div class="spell-tags">transmutation boost sacred warmagic thaumaturgy arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect. If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.  
  
**Enlarge**. The target’s size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category – from Medium to Large, for example. If there isn’t enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target’s weapons also grow to match its new size. While these weapons are enlarged, the target’s attack with them deal 1d4 extra damage.  
  
**Reduce**. The target’s size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category – from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target’s weapons also shrink to match its new size. While these weapons are reduced, the target’s attacks with them deal 1d4 less damage (this can’t reduce the damage below 1).



### Entangle (1 MP)
<div class="spell-tags">plant wild trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 10sqr 
- **Alvo:** quadrado de lado 4sqr com centro no ponto escolhido
- **Duração:** concentração.
- **Resistência:** Força
___

Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area
into difficult terrain.

A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.

When the spell ends, the conjured plants wilt away.

- **+2 PM:** Aumenta a CD em 1..
- **+2 PM:** Aumenta o tamanho do quadrado em 1sqr..

### Escudo (1 MP)
<div class="spell-tags">boost sacred abjuration thaumaturgy warmagic</div>

*1st Circle*
- **Execução:** reação
- **Alcance:** pessoal
- **Duração:** 1 turno.
___

Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +5 na Defesa.

- **+1PM:** muda o alcance para 6sqr, o alvo para 1 criatura e diminui o bonus na defesa em 2.
- **+1 PM:** muda a execução para ação padrão, o alcance para toque, a duração para cena e diminui o bonus na defesa em 3..
- **+1 PM:** também fornece ao alvo camuflagem contra ataques à distância..
- **+2 PM:** aumenta o bônus na Defesa em +1..
- **+2 PM:** muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se a qualquer momento o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo..
- **+3 PM:** muda a duração para 1 dia. Requer 2º círculo..

### Escuridão (1 MP)
<div class="spell-tags">occult unholy trickery ilusion</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 objeto
- **Duração:** cena
- **Resistência:** Vontade anula (veja texto).
___

O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem amuflagem por escuridão. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser uardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. e lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. scuridão anula Luz.

- **+1 PM:** aumenta a área da escuridão em +1,5m de raio..
- **+2 PM:** muda o efeito para fornecer camuflagem otal por escuridão..
- **+2 PM:** muda a duração para 1 dia..
- **+2 PM:** muda o alvo para 1 criatura e a resistência para Fortitude arcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego or 1 rodada. Requer 3º círculo..
- **+5 PM:** muda o alcance para pessoal e o alvo para você. Em vez do normal, você é oberto or sombras, recebendo +10 em testes de Furtividade e camuflagem por escuridão. Requer 3º círculo..{{pageNumber,auto}}
\page

### Espelho do Pântano (3 MP)
<div class="spell-tags">divination no-arcane trickery summon wild</div>

*3rd Circle*
- **Execução:** 1 minuto
- **Alcance:** infinito
- **Alvo:** 1 criatura
- **Duração:** cena.
___

Você recita o encanto bullywug na poça pensando em alguém que conheça. Perto da pessoa escolhida uma superfície d'agua fica suja e vira um espelho do pântano. Imagens, sons e objetos pequenos não-mágicos podem ser passados pelo espelho. 

O espelho pode ser destruído com uma leve agitação da água. Se o alvo não tiver uma superfície de água próxima de si (até 20 metros) a magia falha. Se o espelho for criado com sucesso, o alvo nota a existência dele, mesmo que esteja fora do seu campo de visão.



### Explosão de chamas (1 MP)
<div class="spell-tags">fire elemental evocation thaumaturgy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 4sqr
- **Alvo:** cone
- **Duração:** instantânea
- **Resistência:** DEX.
___

Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área. Resitência reduz o dano a metade.

- **cost:** description.

### Explosão Sonora (2 MP)
<div class="spell-tags">wind nature arcane transmutation</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 ponto que pode ver
- **Duração:** instantânea
- **Resistência:** CON.
___

Um som grave atordoante explode em um quadrado de tamanho 3sqr (centrado no ponto escolhido). Todas as criaturas nessa área devem passar em um teste de resistência, ou tomam 3d8 dano de impacto (quem passar toma metade do dano). Criaturas inorgânicas e objetos são vulneráveis a esse dano (dano dobrado).

- **+2 PM:** aumenta o  ano em +1d8..
- **+2 PM:** aumenta diâmetro da explosão em 1sqr..

### Feather Fall (1 MP)
<div class="spell-tags">transmutation wind arcane no-thaumaturgy nature</div>

*1st Circle*
- **Execução:** reação
- **Alcance:** 12sqr
- **Alvo:** 1-5 criaturas
- **Duração:** 1 minuto.
___

Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.

{{pageNumber,auto}}
\page

### Fire Bolt (0 MP)
<div class="spell-tags">fire elemental evocation thaumaturgy</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
- **Crítico:** 20/2x
___

You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.

- **+2PM:** aumente o dano em +1d10.

### Físico Divino (3 MP)
<div class="spell-tags">boost sacred transmutation thaumaturgy warmagic arcane</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

O alvo se torna uma versão mais poderosa de si  esmo. O alvo recebe +4 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.

- **+3 PM:** em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 5º círculo..
- **+7 PM:** muda o alcance para  urto e o alvo para criaturas escolhidas..
- **+7 PM:** aumenta o bônus em +2. Requer 7º círculo..

### Flame Blade (2 MP)
<div class="spell-tags">elemental fire warmagic thaumaturgy</div>

*2nd Circle*
- **Execução:** Movimento
- **Alcance:** Self
- **Duração:** Concentração
- **Crítico:** 19/2x
___

You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.

You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 4d6 fire damage.

The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.

- **+2PM:** +1d6 dano.
- **+2PM:** +1 acerto com ataque com a espada.
- **+1PM:** +1 margem de ameaça.

### Flecha Ácida (3 MP)
<div class="spell-tags">decay acid evocation arcane curse occult thaumaturgy creation arcane</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** 1 criatura ou objeto
- **Duração:** instantânea
- **Crítico:** 18/2x
- **Resistência:** CON.
___

Você dispara um projétil que causa 4d6 pontos de dano de ácido (ataque mágico). Se falhar no teste de resistência, o alvo ambém fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de ácido no início de seus turnos. Se lançada contra um objeto livre (que não esteja em posse de uma criatura) a agia causa dano dobrado e ignora a RD do objeto.

- **cost:** description.{{pageNumber,auto}}
\page

### Flechas Sentinelas (2 MP)
<div class="spell-tags">warmagic thaumaturgy transmutation arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 1sqr
- **Alvo:** círculo de diâmetro 1sqr
- **Duração:** 8 horas/cena
- **Resistência:** DEX
___

You plant four pieces of nonmagical ammunition—arrows or crossbow bolts—in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 6sqr of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.

- **+1PM:** +1 flecha.

### Fog Cloud (1 MP)
<div class="spell-tags">unholy occult summon wild creation arcane wind nature</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** 20sqr
- **Duração:** Concentration
___

You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured, It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.



### Frostbite (0 MP)
<div class="spell-tags">curse elemental cold unholy curse occult</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.

- **+2PM:** aumente o dano em 1d6.

### Goodberry (1 MP)
<div class="spell-tags">plant wild summon</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Duração:** instantâneo.
___

Up to 10 berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.

- **+1 PM:** Increase the number of berries by 2..{{pageNumber,auto}}
\page

### Green Flame Blade (0 MP)
<div class="spell-tags">warmagic thaumaturgy fire elemental</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier. This spell's damage increases when you reach higher levels.

- **+3PM:** increase both damages by +1d8.

### Guidance (0 MP)
<div class="spell-tags">divination boost sacred arcane</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.



### Guiding Bolt (1 MP)
<div class="spell-tags">holy sacred fire elemental warmagic thaumaturgy</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** 60 feet
- **Duração:** 1 round
- **Crítico:** 19/2x
___

A flash of light streaks toward a creature of your choice within range.
Make a ranged spell attack against the target. On a hit, the target takes 2d6 fire damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.

- **+1 PM:** aumenta o dano em +1d6.
- **+3 PM:** o alvo faz um teste de SEN. se falhar, fica cego por 1 turno..

### Hail of Thorns (1 MP)
<div class="spell-tags">warmagic plant wild thaumaturgy</div>

*1st Circle*
- **Execução:** livre (durante um ataque a distância)
- **Alcance:** pessoal
- **Duração:** imediata.
- **Crítico:** 2x
___

The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one. The spells damage is increased if the weapon attack critically hit

- **cost:** description.{{pageNumber,auto}}
\page

### Healing Word (1 MP)
<div class="spell-tags">recovery sacred speech no-trickery</div>

*1st Circle*
- **Execução:** 1 Movement Action
- **Alcance:** 60 feet
- **Duração:** Instantaneous
___

A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

- **+2 PM:** aumenta a cura em 1d4.
- **+3 PM:** muda o casting para reação.

### Heat Metal (2 MP)
<div class="spell-tags">transmutation arcane fire elemental trickery</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 15sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, every creature touching it takes damage again at the start of your turn.  

If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.

- **+2PM:** the damage increases by +1d8.

### Hellish Rebuke (1 MP)
<div class="spell-tags">curse occult fire elemental speech trickery</div>

*1st Circle*
- **Execução:** reação
- **Alcance:** 30sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
- **Resistência:** PRE
___

Em resposta a uma criatura te ferir. You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.

- **+2PM:** increase the damage by +1d10.

### Hideous Laughter (1 MP)
<div class="spell-tags">enchantment trickery curse occult speech</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected.  
  
At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by damage. On a success, the spell ends.

{{pageNumber,auto}}
\page

### Hold Person (2 MP)
<div class="spell-tags">enchantment trickery arcane curse occult</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 15sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.

- **+1PM:** aumenta o alcance em +5sqr.
- **+3PM:** aumenta o número de alvos em +1.

### Imagem Espelhada (1 MP)
<div class="spell-tags">ilusion trickery abjuration thaumaturgy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Alvo:** você
- **Duração:** cena.
___

Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).

- **+2 PM:** aumenta o número de cópias em +1 (e o bônus na Defesa em +2)..
- **+2 PM:** além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 3º círculo..

### Infestation (0 MP)
<div class="spell-tags">summon wild unholy occult</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1., north; 2, south; 3, east; or 4, west. This movement doesn’t provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.

- **+1PM:** increases the damage by 1d6 (limitado por círculo máximo).

### Infligir Ferimentos (1 MP)
<div class="spell-tags">unholy occult necrotic decay</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** instantânea
- **Resistência:** Fortitude reduz à metade.
___

Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano necrótico (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos.

- **+1 PM:** além do normal, se falhar na resistência, o alvo fica fraco pela cena..
- **+2 PM:** aumenta o dano em 1d8+1..
- **+2 PM:** como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia..
- **+5 PM:** muda o alcance para curto e o alvo para criaturas escolhidas..{{pageNumber,auto}}
\page

### Invisibilidade (3 MP)
<div class="spell-tags">ilusion trickery</div>

*3rd Circle*
- **Execução:** livre
- **Alcance:** pessoal
- **Alvo:** você
- **Duração:** 1 rodada.
___

O alvo fica invisível, incluindo seu equipamento. Ele recebe camuflagem total e +20 em testes de Furtividade. Como o normal, criaturas que não possam vê-lo ficam desprevenidas contra seus ataques. A magia termina se o alvo faz um ataque ou usa uma habilidade hostil. Ações contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque. Objetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Uma luz transportada pelo alvo nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.

- **+1 PM:** muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou 1 objeto..
- **+3 PM:** muda a duração para cena. Requer 5º círculo..
- **+3 PM:** muda a duração para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a até 3m dele se tornam invisíveis, como no efeito normal da magia (ainda ficam visíveis caso façam uma ação hostial). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica visível. Requer 5º círculo..
- **+7 PM:** muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça um ataque ou use uma habilidade ofensiva. Requer 7º círculo..

### Laço Protetor (2 MP)
<div class="spell-tags">abjuration warmagic boost sacred thaumaturgy</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends.  
  
While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.  
  
The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.



### Lesser Restoration (2 MP)
<div class="spell-tags">holy recovery sacred holy</div>

*2nd Circle*
- **Execução:** 1 Action
- **Alcance:** Touch
- **Duração:** Instantaneous
___

You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.



### Life Transference (3 MP)
<div class="spell-tags">unholy occult feral wild necromancy necrotic decay recovery no-sacred</div>

*3rd Circle*
- **Execução:** 1 Action
- **Alcance:** 30 feet
- **Duração:** Instantaneous
___

You sacrifice some of your health to mend another creature’s injuries. You take 4d8 necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take.

- **+1 PM:** aumenta o dano em 1d8.{{pageNumber,auto}}
\page

### Lightning Lure (0 MP)
<div class="spell-tags">lighning elemental transmutation arcane</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 3sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You create a lash of lightning energy that strikes at one creature of your choice that you can see within range.  
The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.

- **+2PM:** increase damage by +1d8.

### Longstrider (1 MP)
<div class="spell-tags">boost sacred thaumaturgy</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You touch a creature. The target’s speed increases by 2sqr until the spell ends.

- **+1PM:** increase the movement speed by another +1sqr.
- **+1PM:** increase the target by +1.

### Luz (1 MP)
<div class="spell-tags">holy trickery ilusion evocation thaumaturgy creation arcane sacred</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** 1 objeto;
- **Duração:** cena;
___

O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.

- **+1 PM:** aumenta a área iluminada em +3m de raio..
- **+2 PM:** muda a duração para 1 dia..
- **+2 PM:** muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Requer 2º círculo..

### Mage Armor (1 MP)
<div class="spell-tags">abjuration thaumaturgy boost sacred</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** Toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target gains +2 Defense. The spell ends it if the target dons armor or if you dismiss the spell as an action.

{{pageNumber,auto}}
\page

### Mage Hand (1 MP)
<div class="spell-tags">trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 9m (6 quadrados)
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

A spectral, floating hand appears at a point you choose within range.  
The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.  

You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.

- **+X PM:** Torna a mão invisível.
- **+Y PM:** Aumenta a carga máxima em X kilos.

### Magic Missile (1 MP)
<div class="spell-tags">creation arcane evocation thaumaturgy energy force</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 30sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.

- **+1PM:** crie um míssil adicional (Limitado pelo círculo máximo de magia que você pode lançar).

### Magic Stone (0 MP)
<div class="spell-tags">transmutation arcane</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 a 3 pedras pequenas
- **Duração:** cena.
___

You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged attack (DEX) with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 12sqr. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Whether the attack hits or misses, the spell then ends on the stone.

- **+3 PM:** Increase the damage by 1d6..
- **+1 PM:** Increase the number of pebbles by 1..

### Manto de Vento (2 MP)
<div class="spell-tags">wind nature abjuration thaumaturgy transmutation arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Duração:** concentração.
___

It deafens you and other creatures in its area..It extinguishes unprotected flames in its area that are torch-sized or smaller..The area is difficult terrain for creatures other than you..The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind..It hedges out vapor, gas, and fog that can be dispersed by strong wind.

{{pageNumber,auto}}
\page

### Mass Healing Word (3 MP)
<div class="spell-tags">recovery sacred speech no-trickery</div>

*3rd Circle*
- **Execução:** 1 Movement Action
- **Alcance:** 30 feet
- **Duração:** Instantaneous
___

As you call out words of restoration equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

- **+1 PM:** aumenta o alcanse em 1 passo.
- **+2 PM:** aumenta a cura em 1d4.
- **+2 PM:** aumenta o número de alvos em 2.

### Maximilian's Earthen Grasp (2 MP)
<div class="spell-tags">earth creation arcane nature</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell’s duration.

As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.

To break out, the restrained target can make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.  

As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.

- **+3PM:** increase all damage by +1d6.

### Message (0 MP)
<div class="spell-tags">divination arcane speech trickery</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 60sqr
- **Alvo:** 1 criatura
- **Duração:** 1 rodada.
___

You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.  
  
You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.



### Mind Whip (2 MP)
<div class="spell-tags">trickery enchantment energy psyquic</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 18sqr
- **Alvo:** 1 criatura
- **Duração:** 1 rodada
- **Resistência:** INT
___

You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must spend it's movement action trying to resist the confusion. On a successful save, the target takes half as much damage and suffers none of the spell's other effects.

- **+1:** +1d6.{{pageNumber,auto}}
\page

### Minor Ilusion (0 MP)
<div class="spell-tags">ilusion trickery</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.  
  
If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.  
  
If you create an image of an object such as a chair, muddy footprints, or a small chest it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.  
  
If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.



### Moonbeam (2 MP)
<div class="spell-tags">wild energy radiant holy sacred</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 18sqr
- **Alvo:** quadrado de tamanho 2sqr
- **Duração:** concentração
- **Resistência:** PRE
___

A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.

When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a saving throw. It takes 3d10 radiant damage on a failed save, or half as much damage on a successful one.

A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.

On each of your turns after you cast this spell, you can use a movement action to move the beam up to 60 feet in any direction.

- **+2:** aumente o dano em +1d10.

### Oração (3 MP)
<div class="spell-tags">sacred boost occult holy curse enchantment trickery speech</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** todas as criaturas (veja texto)
- **Duração:** sustentada
___

Todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esses bônus e penalidades são cumulativos com outras magias.

- **+2 PM:** aumenta os bônus em +1..
- **+2 PM:** aumenta as penalidades em –1..
- **+7 PM:** muda o alcance para médio. Requer 5º círculo..
- **+12 PM:** muda a duração para cena. Requer 7º círculo.

### Pass Without a Trace (2 MP)
<div class="spell-tags">abjuration thaumaturgy ilusion trickery wild</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Duração:** concentração.
___

A veil of shadows and silence radiates from you, masking you and your companions from detection.

For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Stealth checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.

{{pageNumber,auto}}
\page

### Perdição (1 MP)
<div class="spell-tags">curse occult</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** criaturas escolhidas
- **Duração:** concentração
- **Resistência:** nenhuma.
___

Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.

- **+2 PM:** aumenta as penalidades em –1.

### Poison Spray (0 MP)
<div class="spell-tags">poison decay evocation thaumaturgy</div>

*Cantrip*
- **Execução:** 1 Action
- **Alcance:** 2sqr
- **Duração:** Instantaneous
___

You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.

- **+2 PM:** Aumenta o dano em 1d12..

### Prayer of Healing (2 MP)
<div class="spell-tags">speech holy recovery sacred no-trickery</div>

*2nd Circle*
- **Execução:** 10 Minutes
- **Alcance:** 30 feet
- **Duração:** Instantaneous
___

Up to 3 creatures of your choice that you can see within range each regain hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

- **+2 PM:** aumenta a cura em 1d8.
- **+2 PM:** aumenta o número de alvos em 2.

### Primal Savagery (0 MP)
<div class="spell-tags">wild feral</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** Pessoal
- **Alvo:** Pessoal.
- **Duração:** instantânea.
- **Crítico:** 19/2x
___

You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d8 acid damage. After you make the attack, your teeth or fingernails return to normal.

- **+2 PM:** +1d8 acid damage..
- **+1 PM:** +1 margem de ameaça..{{pageNumber,auto}}
\page

### Primor Atlético (1 MP)
<div class="spell-tags">boost sacred thaumaturgy warmagic</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

Você modifica os limites físicos do alvo, que recebe deslocamento +6sqr e +10 em testes de Atletismo.

- **+1 PM:** além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30)..
- **+1 PM:** além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala..
- **+1 PM:** muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura nesta rodada, recebe os benefícios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo durante este ataque..
- **+3 PM:** além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 3º círculo..

### Raio Solar (3 MP)
<div class="spell-tags">holy sacred</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** linha
- **Duração:** instantânea
- **Resistência:** Reflexos (veja texto).
___

Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas. Truque: muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre.

- **+2 PM:** aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos)..
- **+3 PM:** em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente..
- **+3 PM:** criaturas que falhem na resistência ficam cegas por 1d4 rodadas.

### Ray of Enfeeblement (2 MP)
<div class="spell-tags">curse occult unholy trickery enchantment</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 15sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

A black beam of enervating energy springs from your finger toward a creature within range.  

Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.  
  
At the end of each of the target’s turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.



### Ray of Frost (0 MP)
<div class="spell-tags">curse no-occult evocation cold thaumaturgy elemental</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.

- **+2PM:** increase the damage by +1d8.{{pageNumber,auto}}
\page

### Ray of Sickness (1 MP)
<div class="spell-tags">curse occult poison decay evocation thaumaturgy</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** 60 feet
- **Duração:** Instantaneous
___

A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.



### Relâmpago (3 MP)
<div class="spell-tags">lighning elemental evocation thaumaturgy</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** linha
- **Duração:** instantânea
- **Resistência:** DEX.
___

Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.

- **cost:** description.

### Resistance (0 MP)
<div class="spell-tags">abjuration thaumaturgy boost sacred</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends.



### Scorching Ray (2 MP)
<div class="spell-tags">evocation thaumaturgy elemental fire</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** criaturas dentro do alcance que você pode ver
- **Duração:** imediata
- **Crítico:** 20/2x
___

You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.

Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.

- **+2PM:** +1 raio.
- **+4PM:** +1d6 por raio.{{pageNumber,auto}}
\page

### Searing Smite (1 MP)
<div class="spell-tags">fire elemental warmagic thaumaturgy</div>

*1st Circle*
- **Execução:** movimento
- **Alcance:** pessoal
- **Duração:** 1 rodada.
___

The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensitity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames.  
  
At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.

- **+1PM:** aumente o dano inicial em +1d6.

### See invisibility (2 MP)
<div class="spell-tags">divination arcane boost sacred</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Duração:** cena
___

For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.



### Shape Water (0 MP)
<div class="spell-tags">transmutation arcane water nature</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 6sqp
- **Alvo:** área de 1sqr
- **Duração:** imediato ou cena.
___

You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:  
  
• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.  
  
• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.  
  
• You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.
  
• You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.

If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.



### Shillelagh (0 MP)
<div class="spell-tags">warmagic thaumaturgy plant wild</div>

*Cantrip*
- **Execução:** movimento
- **Alcance:** toque
- **Alvo:** 1 arma de madeira
- **Duração:** cena.
___

The wood of a club or quarterstaff you are holding is imbued with nature’s power.  
For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon’s damage die becomes a d8. The weapon also becomes magical, if it isn’t already. The spell ends if you cast it again or if you let go of the weapon

{{pageNumber,auto}}
\page

### Sleep (1 MP)
<div class="spell-tags">curse occult enchantment trickery</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** 90 feet
- **Duração:** 1 minute
___

This spell sends creatures into a magical slumber. Roll 5d8, the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected.

- **+1PM:** Add +1d8 to the dice rolled..

### Snare (1 MP)
<div class="spell-tags">trickery ilusion ilusion curse occult</div>

*1st Circle*
- **Execução:** 1 minuto
- **Alcance:** Toque
- **Alvo:** Quadrado 1,5mx1,5m no chão
- **Duração:** 8 Horas.
___

As you cast this spell, you use the rope to create a circle with a 1sqr radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap. This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned. The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell’s radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends. A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends. After the trap is triggered, the spell ends when no creature is restrained by it.



### Soco de Arsenal (3 MP)
<div class="spell-tags">summon wild wind nature warmagic thaumaturgy</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** 20sqr
- **Alvo:** 1 criatura
- **Duração:** instantânea
- **Crítico:** 20/2x
___

Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6+ mod. Força pontos de dano de impacto. A vítima é empurrada 3m na direção oposta à sua (ou 1,5m se passar na resistência).

- **cost:** description.

### Sopro das Uivantes (3 MP)
<div class="spell-tags">wind nature cold elemental creation arcane</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** 4sqr
- **Alvo:** cone
- **Duração:** instantânea
- **Resistência:** Fortitude parcial.
___

Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre 1d6 pontos de dano de impacto.

- **+2 PM:** aumenta o dano de frio em +2d6..
- **+2 PM:** além do normal, criaturas que falhem no teste de Fortitude ficam caídas..
- **+3 PM:** aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 5º círculo..{{pageNumber,auto}}
\page

### Spider Climb (2 MP)
<div class="spell-tags">feral transmutation wild arcane earth nature boost no-sacred</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** cena.
___

Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.



### Spike Growth (2 MP)
<div class="spell-tags">plant wild creation arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 30sqr
- **Alvo:** quadrado de lado 4sqr
- **Duração:** concentração.
___

The ground in the radius centered twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.  
  
The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is case must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.



### Sugestion (2 MP)
<div class="spell-tags">enchantment trickery</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can’t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.  
  
The target must make a Wisdom saving throw. On a failed save, it purses the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.  
  
You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn’t met before the spell expires, the activity isn’t preformed.  
  
If you or any of your companions damage the target, the spell ends.



### Sword Burst (0 MP)
<div class="spell-tags">creation warmagic thaumaturgy arcane</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** raio de 1sqr centrado em você
- **Duração:** imediata.
___

You create a momentary circle of spectral blades that sweep around you.  
Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage.

- **+2PM:** increase the damage by +1d6.{{pageNumber,auto}}
\page

### Teia (1 MP)
<div class="spell-tags">arcane creation feral wild</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto
- **Alvo:** cubo com 6m de lado
- **Duração:** cena
- **Resistência:** Dex
___

Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil. A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas (veja Condições, no Apêndice).

- **+1 PM:** além do normal, criaturas que falhem na resistência também ficam imóveis..
- **+2 PM:** além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo..
- **+2 PM:** aumenta a área em +1 cubo de 1,5m..

### Tentacle Twister (1 MP)
<div class="spell-tags">occult unholy summon wild</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 2sqr radius
- **Alvo:** pessoal
- **Duração:** imediata.
___

You invoke the power of Hadar, the Dark Hunger.  
Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can’t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.

- **+1PM:** increase damage by +1d6.
- **+3PM:** increase the radius by 1sqr.

### Thorn Whip (0 MP)
<div class="spell-tags">wild plant summon creation arcane</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 3m (2 quadrados de 1,5m)
- **Alvo:** 1 criatura
- **Duração:** instantânea.
- **Crítico:** 19/2x
___

You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if you pass the creature's Defense by 5 or more (+5 for every size category difference between you), you may pull the creature up to 10 feet closer to you.

- **cost:** description.

### Thunderclap (0 MP)
<div class="spell-tags">wind nature transmutation arcane</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** raio de 1sqr centrado em você
- **Duração:** imediata.
___

You create a burst of thunderous sound, which can be heard 100 feet away.  
Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage.

- **+2PM:** increase the damage by 1d6.{{pageNumber,auto}}
\page

### Thunderous Smite (1 MP)
<div class="spell-tags">warmagic wind nature thaumaturgy</div>

*1st Circle*
- **Execução:** movimento
- **Alcance:** pessoal
- **Duração:** 1 rodada.
___

The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.

- **+1PM:** Aumenta o dano inicial em +1d6.

### Thunderwave (1 MP)
<div class="spell-tags">transmutation arcane elemental wind nature</div>

*1st Circle*
- **Execução:** 1 Action
- **Alcance:** Self (3sqr cube)
- **Duração:** Instantaneous
___

A wave of thunderous force sweeps out from you.
Each creature in a 3sqr-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d6 bludgeoning damage and is pushed 2sqr away from you. On a successful save, the creature takes half as much damage and isn’t pushed.

- **+2PM:** increse the size of the cube by 1sqr..
- **+1PM:** increase the damage by 1d6..

### Toll the Dead (0 MP)
<div class="spell-tags">occult unholy decay necrotic wind no-nature</div>

*Cantrip*
- **Execução:** 1 Action
- **Alcance:** 60 feet
- **Alvo:** 1 criatura
- **Duração:** Instantaneous
___

You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d4 necrotic damage. If the target is missing any of its hit points, it instead takes 1d8 necrotic damage.

- **+3 PM:** increase the damage by 2 dice.

### Toque Chocante (1 MP)
<div class="spell-tags">lighning elemental evocation thaumaturgy warmagic</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** instantânea
- **Crítico:** 20/3x
___

Arcos elétricos envolvem sua mão. Faça um melee spell attack contra o alvo, causando 2d8+2 pontos de dano de eletricidade num acerto. Se o alvo usa armadura de metal você tem vantagem no ataque.

- **cost:** description.{{pageNumber,auto}}
\page

### Toque Vampírico (3 MP)
<div class="spell-tags">necrotic decay feral wild unholy occult</div>

*3rd Circle*
- **Execução:** padrão
- **Alcance:** toque
- **Alvo:** 1 criatura
- **Duração:** instantânea
- **Resistência:** Fortitude reduz à metade.
___

Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano).

- **+1 PM:** como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia..
- **+2 PM:** aumenta o dano em +2d6..
- **+2 PM:** muda o alcance para pessoal, o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 5º círculo..

### Tranquilidade (1 MP)
<div class="spell-tags">enchantment trickery</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** curto;
- **Alvo:** 1 animal ou humanoide;
- **Duração:** cena;
- **Resistência:** Vontade parcial.
___

Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar à atitude que tinha antes (ou pior, de acordo com o mestre).

- **+1 PM:** muda o alvo para 1 criatura..
- **+1 PM:** aumenta o número de alvos em +1..
- **+2 PM:** aumenta a penalidade em –1..
- **+5 PM:** muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo..

### Transformação de Guerra (6 MP)
<div class="spell-tags">boost sacred arcane abjuration thaumaturgy</div>

*5th Circle*
- **Execução:** padrão
- **Alcance:** pessoal
- **Alvo:** você
- **Duração:** sustentada
___

Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas.

- **+2 PM:** aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10..
- **+2 PM:** adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Além do normal, você recebe resistência a dano 10 e imunidade a atordoamento, doenças, encantamento, fadiga, paralisia, necromancia, sangramento, sono e veneno, e não precisa respirar..

### Vicious Mockery (0 MP)
<div class="spell-tags">trickery occult curse psyquic energy speech</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** 9sqr
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You unleash a string of insults laced with subtle enchantments at a creature you can see within range.  
If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.

- **+1PM:** increase damage by +1d4 (limitado por círculo máximo).{{pageNumber,auto}}
\page

### Web (2 MP)
<div class="spell-tags">feral wild trickery creation arcane</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Duração:** cena.
___

You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.

Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.

The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.



### Witch Bolt (1 MP)
<div class="spell-tags">lighning elemental thaumaturgy evocation</div>

*1st Circle*
- **Execução:** padrão
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
- **Crítico:** 20/3x
___

A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on the end of each of your turns for the duration, you deal 1d12 lightning damage to the target automatically. The spell ends if the target is ever outside the spell’s range or if it has total cover from you.

- **+1PM:** increase the initial damage by +1d12.

### Wither and Bloom  (2 MP)
<div class="spell-tags">occult curse unholy recovery sacred decay necrotic</div>

*2nd Circle*
- **Execução:** padrão
- **Alcance:** 12sqr
- **Alvo:** ponto (raio de 2sqr)
- **Duração:** imediata
- **Resistência:** CON
___

You invoke both death and life upon a 10-foot-radius sphere centered on a point within range. Each creature of your choice in that area must make a Constitution saving throw, taking 2d6 necrotic damage on a failed save, or half as much damage on a successful one. Nonmagical vegetation in that area withers.

In addition, one creature of your choice in that area can regain HP equal to their level.

- **+2PM:** Aumente o dano em +1d6.
- **+2PM:** Escolha uma criatura a mais para recuperar HP.

### Word of Radiance (0 MP)
<div class="spell-tags">holy sacred radiant energy speech no-trickery</div>

*Cantrip*
- **Execução:** padrão
- **Alcance:** raio de 1sqr (centrado em você)
- **Alvo:** 1 criatura
- **Duração:** imediata.
___

You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.

- **+1PM:** increase the damage by +1d6.{{pageNumber,auto}}
\page

### Zephyr Strike (1 MP)
<div class="spell-tags">warmagic energy force thaumaturgy boost no-sacred wind nature</div>

*1st Circle*
- **Execução:** movimento
- **Alcance:** 6sqr
- **Alvo:** 1 criatura
- **Duração:** concentração.
___

You move like the wind. Until the spell ends, your movement doesn’t provoke opportunity attacks.

Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn.





{{pageNumber,auto}}
\page
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

## Losing Favor
Just as upholding their Entity's values and working towards their mission can help a Paladin earn their Favor, going against their values, helping their enemies or simply getting on their Entity's bad side can cause a Paladin to lose Favor (FP) with their Entity.

## Miracles
Every entity has a set of miracles their Paladins can perform with their help. All miracles work like active abilities a Paladin may use by spending their Entity's energy (and usually also their own). Mechanically, this means that performing Miracles always spends FP, and sometimes also MP/HP (the MP cost of a Miracle is exempt from the Mana Tax).

By default, you can spend up to 2 + your level FP on a single miracle. If it costs more than that, you cannot perform it.

### Spells as Miracles
Most miracles mechanically function as spells. When adding a spell as one of the miracles a god grants access to, it's recommended to make it's cost **(1 + orignal MP cost) FP**. So a cantrip would cost 1FP, a 1st level spell 2FP, a 6th level spell 9FP, etc.

### Miracle casting attribute
Many miracles involve a character's "miracle casting attribute". That attribute is determined when the contract is formed, and is usually either Presence or Sensibility.

### Miracle DC
The DC to resist your miracles is equal to **8 + proficiency bonus + Miracle casting attribute mod.**


{{pageNumber,auto}}
\page
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

{{pageNumber,auto}}
\page


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
\page
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
The target is Grappled, and the grapple’s escape DC equals **8 + your Strength modifier + your Proficiency Bonus**. This grapple is possible only if the target is no more than one Size larger than you and if you have a hand free to grab the target. Shove. You either push the target 5 feet away or knock the target Prone. This shove is possible only if the target is no more than one Size larger than you. (See: [[RPG/R20/Combat/Battle Maneuvers]])


{{pageNumber,auto}}
\page
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

| amount spent per person | Bonus to Roll |
| ----------------------- | ------------- |
| 0                       | -3            |
| 2 silver                | -1            |
| 5 silver                | 0             |
| 20 silver               | +1            |
| 50 silver               | +2            |
| 150 silver              | +3            |

### Levar Mantimentos
Cada 100 silver de mantimentos requer 1 espaço de inventário para guardar.

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
| Poor Condition         | 0           | level/2     | 5 hours  | See below         |
| Normal Condition      | level/2     | level       | 8 hours  | recovers 1 level  |
| Good Condition        | level       | level\*2    | 8 hours  | recovers 2 levels |
| Exceptional Condition | level\*2    | level\*3    | 12 hours | recovers 2 levels |
| Full Reset            | 100%        | 100%        | 1 week   | fully recovers    |

**Poor Condition Rest.** At the end of the rest you must pass a CON save (DC: Rest DC) or gain 1 level of Exhaustion. Gain +1 level for every 5 below the CD.

#### Descriptions and examples of resting conditions
- **Bad Condition**: Sleeping outdoors without proper equipment and on an empty stomach doesn't give the body, mind and soul the ease and support to properly recover. Takes 5 hours.
- **Normal Condition**: Sleeping outdoors in a sleeping bag and doing a night-watch rotation shift is enough to give a moment of rest and recovery. Takes 8 hours.
- **Good Condition**: Having hearty meal, not taking night watch, sleeping in a cozy tent or next to a warm fire for a long time really makes a difference out there in the wild. Takes 8 hours.
- **Exceptional Condition**: Having a feast, not taking night watch, sleeping in a warm and comfortable condition reinvigorates someone's spirits entirely! Takes 12 hours.
- **Full Reset**: Completely recover's a character's HP & MP, and removes any debilitating conditions except for diseases and curses. Takes 1 week of rest with no adverse conditions (having time off in a Town in between adventures). Recovers fully from exhaustion.

## Skipping a Rest
When skipping a Rest, a character needs to roll a CON or PRE saving throw with DC equal to:
- **15 + 5 \* \# of consecutive days not having slept** 
(1st day: 15, 2nd -> 20, 3rd -> 25,...)

If they fail the character gains 1 level of exhaustion, +1 for every 5 points below the DC. (e.g. a 10 roll against a DC of 20 would give a character +3 exhaustion levels)

## Regra Opcional: Mantimentos automáticos
Para grupos que preferirem não lidar com gerenciamento de mantimentos ao longo de viagens longas, uma opção recomendada é ignorar as regras de mantimentos, e considerar que todas as rolagens de descanso são feitas com 5 ou 20 pratas.

{{pageNumber,auto}}
\page
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

{{pageNumber,auto}}
\page


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

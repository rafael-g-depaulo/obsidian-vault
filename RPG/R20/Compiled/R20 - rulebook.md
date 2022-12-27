

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

**Presence**: imposing your will, intimidating, convincing, getting others to understand you, manifesting an "aura", stuff like that.

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
Spider Sense. feel energy. percieve magic. identify magical items.

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

### Miscellaneous
#### Stealth (DEX)
#### Sleight of Hand (DEX)
#### Medicine (INT)
#### Nature (INT)
#### Animal Handling (SEN)

### Rest
#### Survival (SEN)
#### Cooking (PRE)

### Tools
#### Smith's Tools (INT)
#### Alquemist's Tools (INT)
#### Herbalist's Tools (INT)

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

It's recommended that the DM encourage the player's creativity and ingenuity, and allow them to substitute a skill check (but not a saving throw!) for another one. The DM themselves can suggest it, but it's recommended to leave that to the player's initiative, instead of just presenting them with the option. When using a different skill than the original one for a check, the DM choses how much more difficult the task or objective is with the new approach. Then consult the table below for adjusting the DC of the check for that character.

##### DC for using a different skill for a task
| Aditional Dificulty            | DC  |
| ------------------------------ | --- |
| about the same or a bit harder | +2  | 
| considerably harder            | +5  |

Whether the character is allowed to roll a different skill is always at the DM's discretion.

### Skill Bonus & Skill Points
When a character levels up they gain skill points, which they may distribute among their skills. These represent a character's growth, training and experience. A character starts with **5 + their Inteligence Modifier** skill points at level 1, and gains **2 + their Inteligence Modifier** (min 2) every levelup after that.

A character's skill bonus for any given skill can only reach up to the maximum defined in the following table.

OBS: most likely this will need to change to 2 every levelup + INT mod every even level up

##### Maximum Skill Bonus per level
| Level | Max Skill Bonus |
|:-----:|:--------------- |
|   1   | +2              |
|   2   | +3              |
|   3   | +3              |
|   4   | +4              |
|   5   | +5              | 
|   6   | +5              |
|   7   | +7              |
|   8   | +7              |
|   9   | +7              |
|  10   | +9              |
|  11   | +9              |
|  12   | +9              |
|  13   | +12             |
|  14   | +12             |
|  15   | +12             |
|  16   | +15             |
|  17   | +15             |
|  18   | +15             |
|  19   | +15             |
|  20   | +15             |


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

### Rogue
[[Class - Rogue]]
sneak attack

### Fighter
[[Class - Warrior]]
Extra Attack(2-3). Action surge

### Beast Warrior
[[Class - Beast Warrior]]
Beastly Rage. Savage Attack

### Juggernaut
[[Class - Juggernaut]]
Raise Guard. Powerful Strike.

### Battle Mage
[[Class - Spelgard]]
Spiritual Weapon. Lay on Hands

### Champion
[[Class - Champion]]
Smite! Lay on Hands

### Enhancer (Off-caster) (WIP)
off-caster who fights and can apply temporary buffs that make them hit harder and stronger. This could also be implemented as a Martial archetype, but i think it would be cooler as an Enhancer.

### Symbiote (Martial) (WIP)
Can suck off energy from enemies or host (self-damage). uses a lot of MP for abilities (buffs, attacks, utility skills)

### Beast Master (Off-Caster? really complicated) (WIP)
Can summon and control low CR animals.

### Medium/Summoner (WIP)
Can spend some time channeling and roll to see what comes out (who's available to be summoned). doesn't actually have long-term summons, it's just usual black magic.

### Bard (WIP)
Inspiration (flat bonus or dice? AoE or single target?). off-caster

### Witch
A caster with many curses and concentration effects, destroying enemies and supporting (and healing) allies, including the mysterious witch's brews.

### Werebeast
has the ability to transform into a wild, untamed beast form, witch flips it's physical and mental abilities and gaining an array of special skills.

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
7. Then think of 1 other feature to round out the **Theme** (something that also adds some non-combat flavor/utility). Add them as mid-game class features. {{pageNumber,auto}}
\page

8. Now think of additional interesting new features and modifications to existing features that play to the class' **Theme**. Observe that while the **Core Mechanic** always has a combat effect, these mechanics don't necessarily have to all have to be obviously useful in combat (though most of them should have some in-combat use). This is a good place to think up of possible variations and specializations within members of the class. Add those as class feats.
	1. **Feat Groups:** In this effort of reinforcing class identity, it's interesting to think of a unique feat template and naming scheme, and apply that to create some different feats for the class, different from the singular feats created previously. Example: Plantomancer's **Herbomancy: \[Blank\]**, Spellgard's **Aura of \[Blank\]** and Beast Warrior's **Wild Rage: \[Blank\]**. It's recommended to have between 1 and 2 Feat groups per class.

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
# Beast Warrior
##### [[Archetype - Martial]]

**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 4 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons. Light and medium armor

**Save Roll Proficiencies:** CON, SEN.

\<div class='classTable'>
##### Beast Warrior
| Level | Proficiency Bonus | Features                                                                 |
|:-----:|:-----------------:|:------------------------------------------------------------------------ |
|  1st  |        +1         | Rage (+2)                                                                |
|  2nd  |        +1         | Beast Warrior Feat, Savage Attack (1d4+CON)                              |
|  3rd  |        +2         | Beast Warrior Feat, Defesa Animal                                        |
|  4th  |        +2         | Beast Warrior Feat, Attribute Score Improvement                          |
|  5th  |        +3         | Beast Warrior Feat, Extra Attack                                         |
|  6th  |        +3         | Beast Warrior Feat, Attribute Score Improvement, Savage Attack (2d4+CON) |
|  7th  |        +4         | Beast Warrior Feat, Rage (+3)                                            |
|  8th  |        +4         | Beast Warrior Feat, Wild Senses (3)                                          |
|  9th  |        +5         | Beast Warrior Feat, Attribute Score Improvement                          |
| 10th  |        +5         | Beast Warrior Feat, Savage Attack (3d4+CON)                              |
| 11th  |        +6         | Beast Warrior Feat, Rage (+4)                                            |
| 12th  |        +6         | Beast Warrior Feat, Attribute Score Improvement                          |
| 13th  |        +7         | Beast Warrior Feat, Wild Senses (4)                                         |
| 14th  |        +7         | Beast Warrior Feat, Savage Attack (4d4+CON)                              |
| 15th  |        +8         | Beast Warrior Feat, Attribute Score Improvement                          |
| 16th  |        +8         | Beast Warrior Feat, Rage (+5)                                            |
| 17th  |        +9         | Beast Warrior Feat, Attribute Score Improvement                          |
| 18th  |        +9         | Beast Warrior Feat, Savage Attack (5d4+CON), Wild Senses (5)             |
| 19th  |        +10        | Beast Warrior Feat, Attribute Score Improvement                          |
| 20th  |        +10        | Beast Warrior Feat                                                       |
\</div>

**Rage.** While in combat, you can spend 2 MP to enter a rage. While raging, you have +2 to melee attack rolls and damage, and can't cast spells. Rage ends at the start of your turn if you have not taken damage or attacked something since the start of your last turn. Rage's damage bonus is doubled if you're below half maximum HP. Every 5 levels you can spend an extra 2 MP to increase both bonuses by +1.

**Savage Attack.** Once per turn, when you make an attack, you can spend 1 MP to increase the damage by 1d4 + your constituition modifier. At levels 6, 10, 14 and 18 you can spend +1PM to add 1d4 to the damage. If you're raging, you can spend HP instead of MP.

**Defesa Animal.** Enquanto você está com metade ou menos do seu HP máximo e em fúria, você dobra seu bônus de constituição na guard, e de destreza na evasão, se não estiver usando armadura (limitado pelo seu nível). (lv3)

**Wild Senses.** Choose 3 between Athletics, Acrobatics, Reflexes, Perception, Insight, Nature, Animal Handling. While raging you add your CON mod. to rolls with those skill. When not raging you can spend 3 MP to gain the Wild Senses bonus in a roll, as if you were raging. (lv8)

### Beast Warrior Feats

Begining at level 2, every time you gain a level in Beast Warrior you gain a Beast Warrior Feat. You may instead of a Beast Warrior feat take a Martial or General Feat of your choice.

- *Keen Reflexes*. Whenever you're raging, you add your SEN mod to defense if you're not wearing heavy armor.

- *Thick Hide*. You can spend a movement action and 1 PM to gain 1d12 temporary HP. For every aditional 2PM you spend, increase that ammount by another +1d12.

- *Blood Healing*. While below HP and raging, the first attack you hit on your turn heals you for your CON mod.

- *Hibernation*. During a rest, you can spend any multiple of 2PM. For every 2PM, you recover aditional HP equal to your CON mod (ex: 2PM -> CON mod. 4PM -> 2*CON mod. 6PM -> 3*CON mod.)

- *Powerful Savage Attacks*. When using a Savage Attack you re-roll 1's on the damage dice. Pre-requisites: Level 8 Beast Warrior.

- *Alma de Bronze*. Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a metade do seu nível + mod. Constituição.

- *Pele de Aço*. O bônus de Pele de Ferro aumenta para +5. Pré-requisitos: Pele de Ferro, 8º nível de Beast Warrior.

- *Pele de Ferro*. Você recebe +2 na Defesa, mas apenas se não estiver usando armadura pesada.

- *Sangue dos Inimigos*. Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.

- *Superstição*. Você odeia magia arcana, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +2.
{{pageNumber,auto}}
\page


> ##### Wild Rage animal forms
> Some powers are wild rage animal forms. While raging and below half HP, you can spend a free action and 5 HP to enter a Wild Rage. Only one kind of Wild Rage can be active at a time.
> 
> A wild rage has a passive effect, and adds a bonus feature to your Savage Attacks
>

- *Wild Rage: Owlbear*. Passive: Gain your STR mod as extra Guard. Savage Attack: Add +1 dice to the damage of your weapon for this attack.

- *Wild Rage: Direwolf*. Passive: Gain your CON mod as extra movement speed. Savage Attack: if you're flanking the attacked enemy, you have +2 in the attack roll, and lower your critical hit threshold by 1 (you crit on 19-20 instead of 20).

- *Wild Rage: Sharkodile*. Passive: You add your SEN mod to your attack rolls against bleeding enemies. Savage Attack: you can spend 1PM or 2HP to make an extra bite attack that deals 1d4 damage and heals you for your CON mod. (An enemy is bleeding if they have blood, are below half their max HP and has been damaged this scene).

- *Ímpeto*. Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.

- *Espírito Inquebrável*. Enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida (você ainda morre se chegar em um valor negativo igual à metade de seus PV máximos). Pré-requisito: Alma de Bronze.

- *Esquiva Sobrenatural*. Seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.

- *Fúria Raivosa*. Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente.

{{pageNumber,auto}}
\page
# Champion
##### [[Archetype - Martial]]

**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 4 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons and all kinds of armor.

**Save Roll Proficiencies:** Strength, Presence.

##### Champion
| Level | Proficiency Bonus | Features                                   |
|:-----:|:---:|:---------------------------------------------------------|
| 1st   | +1  | Smite (+1d6)                                             |
| 2nd   | +1  | Champion Feat, Lay on Hands (1d8+1)                      |
| 3rd   | +2  | Champion Feat                                            |
| 4th   | +2  | Champion Feat, Attribute Score Improvement               |
| 5th   | +3  | Champion Feat, Extra Attack (1), Smite (+2d6)            |
| 6th   | +3  | Champion Feat, Attribute Score Improvement               |
| 7th   | +4  | Champion Feat, Lay on Hands (2d8+2)                      |
| 8th   | +4  | Champion Feat                                            |
| 9th   | +5  | Champion Feat, Attribute Score Improvement, Smite (+3d6) |
| 10th  | +5  | Champion Feat  Lay on Hands (3d8+3)                      |
| 11th  | +6  | Champion Feat, Extra Attack (2)                          |
| 12th  | +6  | Champion Feat, Attribute Score Improvement               |
| 13th  | +7  | Champion Feat, Smite (+4d6)                              |
| 14th  | +7  | Champion Feat  Lay on Hands (4d8+4)                      |
| 15th  | +8  | Champion Feat, Attribute Score Improvement               |
| 16th  | +8  | Champion Feat                                            |
| 17th  | +9  | Champion Feat, Attribute Score Improvement, Smite (+5d6) |
| 18th  | +9  | Champion Feat, Lay on Hands (4d8+4)                      |
| 19th  | +10 | Champion Feat, Attribute Score Improvement               |
| 20th  | +10 | Champion Feat                                            |

**SMITE (GOLPE DESTRUIDOR).** (once per turn) During an attack (2PM):  infuse your attack with all your might! Add your Presence modifier to the attack roll, and you Presence modifier +1d6 to the damage. At 5th, 9th, 13th and 17th level respectively, you can spend +1PM to add another +1d6 to the damage.

**LAY ON HANDS (CURAR PELAS MÃOS).** You may spend a major action and 1PM to touch one creature, and heal them for 1d8+1. At 7th, 10th, 14th and 18th level respectively, you can spend +1PM to add another 1d8+1 to the healing.

### Champion Feats

Begining at level 2, every time you gain a level in Champion you gain a Champion Feat. You may instead of a Champion feat take a Martial or General Feat of your choice.

- *Golpe Ilustre*. Quando usa Golpe Destruidor, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno (-2 ataque/Percepção).

- *Golpe Inspirador*. Ao usar Golpe Destruidor, você pode gastar +1PM, e, se acertar, os seus aliados que verem o golpe ser feito tem +2 em testes de ataque contra o mesmo alvo.

- *Curar Aprimorado*. Quando usar Curar Pelas Mãos, você adiciona o seu modificador de Presença no total da cura.

- *Curar Distante*. Quando usar Curar Pelas Mãos, você pode gastar +1PM para aumentar o alcanse de toque para curto.


> ##### Julgamento
> 
>Alguns poderes do paladino são Julgamentos. Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário. Julgamentos que não têm um efeito instantâneo duram até o fim da cena. Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam.

- *Julgamento: Coragem*. Ação de movimento (2 PM): marque uma criatura em alcance curto (X quadrados). A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.

- *Julgamento: Vindicação*. Ação de movimento (2 PM): marque um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.

{{pageNumber,auto}}
\page
# Juggernaut
##### [[Archetype - Martial]]

**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 4 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons and all kinds of armor.

**Save Roll Proficiencies:** Strength, Constitution.

{{classTable
##### Juggernaut
| Level | Proficiency Bonus | Features                                                                 |
|:-----:|:-----------------:|:------------------------------------------------------------------------ |
|  1st  |        +1         | Raise Guard, Guts                                                        |
|  2nd  |        +1         | Juggernaut Feat, Powerful Strike (1d10+STR)                              |
|  3rd  |        +2         | Juggernaut Feat                                                          |
|  4th  |        +2         | Juggernaut Feat, Attribute Score Improvement                             |
|  5th  |        +3         | Juggernaut Feat, Extra Attack (1), Powerful Strike (2d10+STR)            |
|  6th  |        +3         | Juggernaut Feat, Attribute Score Improvement                             |
|  7th  |        +4         | Juggernaut Feat                                                          |
|  8th  |        +4         | Juggernaut Feat                                                          |
|  9th  |        +5         | Juggernaut Feat, Attribute Score Improvement, Powerful Strike (3d10+STR) |
| 10th  |        +5         | Juggernaut Feat                                                          |
| 11th  |        +6         | Juggernaut Feat, Extra Attack (2)                                        |
| 12th  |        +6         | Juggernaut Feat, Attribute Score Improvement                             |
| 13th  |        +7         | Juggernaut Feat, Powerful Strike (4d10+STR)                              |
| 14th  |        +7         | Juggernaut Feat                                                          |
| 15th  |        +8         | Juggernaut Feat, Attribute Score Improvement                             |
| 16th  |        +8         | Juggernaut Feat                                                          |
| 17th  |        +9         | Juggernaut Feat, Attribute Score Improvement, Powerful Strike (5d10+STR) |
| 18th  |        +9         | Juggernaut Feat                                                          |
| 19th  |        +10        | Juggernaut Feat, Attribute Score Improvement                             |
| 20th  |        +10        | Juggernaut Feat                                                          | 
}}

**RAISE GUARD (LEVANTAR GUARDA).** Movement Action (1PM): Gain your level + CON mod. temporary HP (minimum 1), and +1 **Guts**. While you have this temporary HP, you're considered as "On Guard".

**Guts.** You have +1 Strength and -1 movement speed (down to a minimum of 3sqr) for each Guts point you have. You lose all Guts at the end of the scene. You can have up to your Juggernaut level + 1 Guts points. Every 5 Guts you increase your size by 1 category, up to large.

**Powerful Strike (Golpe Poderoso)**. Movement Action (1PM): Your next melee attack until the end of your next turn deals an extra 1d10 + STR mod. damage. At 5th, 9th, 13th and 17th levels you can spend +2PM to increase the damage by 1d10

### Juggernaut Feats

Begining at level 2, every time you gain a level in Champion you gain a Juggernaut Feat. You may instead of a Juggernaut Feat take a Martial or General Feat of your choice.

- *Tanque de Combate*. Se você está de Guarda Alta, pode gastar 1PM e executar um ataque como ação de movimento"

- *Vingança*. Se um inimigo tirar a sua guarda, seu próximo ataque contra ele até o fim do seu próximo turno tem vantagem na rolagem do ataque, e dá +FOR mod. de dano (mínimo 1).

- *"Tragam o próximo"*. Quando levar um inimigo a 0, você pode gastar +1PM e usar "Levantar Guarda" como ação livre, e ganha +1 Guts até o final da cena.

- *"A Melhor Defesa..."*. (Guarda Alta) Ação de Movimento (2PM): Você perde todos os PV temporários da guarda, tem -1 de Guard pela cena e ganha +2 Guts até o final da cena. A cada 3 níveis pode gastar +1PM para receber -1 Guard e +2 Guts.

- *Crítico Fortificador*. Quando acertar um ataque crítico, você ganha +2 Guts.

- *Crítico Brutal*. Sua arma dá +1 dado de dano nos seus críticos de estiver de guarda alta.

- *Crítico Poderoso*. (Guarda Alta) ao realizar um ataque crítico: Você pode realizar um Golpe Poderoso como parte do ataque atual (você ainda tem que pagar PM pelo golpe poderoso).

- *Golpe Brutal*. (durante ataque crítico) Ao usar Golpe Poderoso (+2PM): Multiplique os dados do Golpe Poderoso pelo seu multiplicador de crítico, como se fossem os dados do dano base da sua arma.

- *Golpe Derrubador*. Ao usar Golpe Poderoso (+2PM): Se o golpe acertar, você derruba o alvo. (Veja: [[Battle Maneuvers#Derrubar]])

- *Golpe em Arco*. Ao usar Golpe Poderoso (+1PM): Você ataca todos os inimigos no seu alcance (que estejam na sua frente).

- *Defesa Imbatível*. Enquanto estiver de Guarda Alta, você tem +2 Guard. Pré-requisito: Defesa Impenetrável.

- *Defesa Impenetrável*. Some seu modificador de força no HP temporário recebido por **Levantar Guarda**.

- *Defesa Implacável*. Ao Levantar Guarda (+1PM): Você pode pode usar [[Combat Actions#Endurance]] como ação livre, sem custo adicional. Pré-requisito: Defesa Impenetrável. Pré-requisito: Defesa Impenetrável.
{{pageNumber,auto}}
\page

- *Defesa Intocável*. (Você negou um ataque com [[Combat Actions#Endurance]]) (Guarda Alta) Reação (1PM): Você pode imediatamente fazer um ataque de oportunidade contra o atacante. Se acertar, ganha +1 Guts. Pré-requisito: Defesa Impenetrável.

- *Defesa Impregnável*. (Guarda Alta) Você pode gastar 2PM e somar sua Guard num teste de resistência físico. Após a ação que causou o teste se resolver, você abaixa a guarda. Pré-requisito: Defesa Impenetrável.

- *Defesa Inabalável*. (Guarda Alta) Você pode gastar 3PM para adicionar sua Guard em qualquer teste de resistência de um atributo mental. Após a ação que causou o teste se resolver, você abaixa a guarda. Pré-requisito: 1 poder que tem Defesa Impenetrável como pré-requisito.

- *Defesa Impermeável* (Guarda Alta) (Um aliado adjacente é atacado) Reação: Diminua o dano pela sua Guard. Pré-requisito: Defesa Impenetrável.

- *Defesa Indestrutível*. (Guarda Alta) Reação (2PM): Quando você receber dano que quebraria a sua Guarda, imediatamente após tomar o dano Levante Guarda como ação livre. Pré-requisito: 2 poderes que tem Defesa Impenetrável como pré-requisito.



{{pageNumber,auto}}
\page
# Plantomancer
##### [[Archetype - Caster]]

**HP**: You start at 1st level with 8 (+CON mod.) maximum hit points, and gain an extra 2 (+CON mod.) per level.

**MP**: You start at 1st level with 6 (+INT mod.) maximum MP, and gain 6 extra per level.

**Equipment Proficiencies:** none.

**Save Roll Proficiencies:** SEN.

**Spellcasting Modifier:** INT

\<div class='classTable wide'>
##### Plantomancer
| Level | Proficiency Bonus | Features                                                        | Magic Seed | Spells Known | Max Spell Circle |
|:-----:|:-----------------:|:--------------------------------------------------------------- |:----------:|:------------:|:----------------:|
|  1st  |        +1         | Magic Seed (2), Summon Sapling                                  |     2      |      3       |        1         |
|  2nd  |        +1         | Plantomancer Feat, Magic Seed (3)                               |     3      |      4       |        1         |
|  3rd  |        +2         | Plantomancer Feat                                               |     3      |      5       |        2         |
|  4th  |        +2         | Plantomancer Feat, Attribute Score Improvement, Magic Seed (4)  |     4      |      6       |        2         |
|  5th  |        +3         | Plantomancer Feat                                               |     4      |      7       |        3         |
|  6th  |        +3         | Plantomancer Feat, Magic Seed (5)                               |     5      |      8       |        3         |
|  7th  |        +4         | Plantomancer Feat                                               |     5      |      9       |        4         |
|  8th  |        +4         | Plantomancer Feat, Attribute Score Improvement, Magic Seed (6)  |     6      |      10      |        4         |
|  9th  |        +5         | Plantomancer Feat                                               |     6      |      11      |        5         |
| 10th  |        +5         | Plantomancer Feat, Magic Seed (7)                               |     7      |      12      |        5         |
| 11th  |        +6         | Plantomancer Feat                                               |     7      |      13      |        6         |
| 12th  |        +6         | Plantomancer Feat, Attribute Score Improvement, Magic Seed (8)  |     8      |      14      |        6         |
| 13th  |        +7         | Plantomancer Feat                                               |     8      |      15      |        7         |
| 14th  |        +7         | Plantomancer Feat, Magic Seed (9)                               |     9      |      16      |        7         |
| 15th  |        +8         | Plantomancer Feat                                               |     9      |      17      |        8         |
| 16th  |        +8         | Plantomancer Feat, Attribute Score Improvement, Magic Seed (10) |     10     |      18      |        8         |
| 17th  |        +9         | Plantomancer Feat                                               |     10     |      19      |        9         |
| 18th  |        +9         | Plantomancer Feat, Magic Seed (11)                              |     11     |      20      |        9         |
| 19th  |        +10        | Plantomancer Feat, Attribute Score Improvement                  |     11     |      21      |        9         |
| 20th  |        +10        | Plantomancer Feat, Magic Seed (12)                              |     12     |      22      |        9         |
</div>

**Semente Mágica.** You grow and maintain a small garden of magical plants. That garden provides you at the start of the day with a number of seeds filled with magical potential (they rot away if not used by the end of the day). Your garden produces 2 per day at level 1, and its production increases by 1 at every even level.

**Criar Muda.** As a movement or main action on your turn, you may spend 1PM and a Magic Seed to summon a sappling to an unnocupied space withing short distance (6sqr) of you. You can cast spells through the sappling, and percieve its surroundings as if you were standing there. (This counts as a Herbomancy power)

### Plantomancer Feats

Begining at level 2, every time you gain a level in Plantomancer you gain a Plantomancer Feat. You may instead of a Plantomancer feat take a Caster or General Feat of your choice.

- *Planta Resistente*. Aumenta o HP inicial das suas plantas em XX, e a defesa delas em XX.

- *Planta Explosiva*. Você pode gastar uma ação maior e 2PM. Escolha uma planta sua em alcance médio. Ela explode violentamente, lançando sua seiva corrosiva em todas as criaturas adjacentes (quadrado de lado 3, centrado na planta), causando 4d6 de dano ácido. A cada 3 níveis você pode gastar mais 2PM e aumentar o dano em 2d6 e o tamanho do quadrado em 2.

- *Planta Ajudante*. Suas plantas contam como aliados para fins de flanqueamento. Seus aliados recebem +1 na defesa quando adjacentes às suas plantas.

- *Lanchinho Mágico*. Você pode gastar uma ação maior e um número de sementes mágicas até metade do seu nível. Você enfia essas sementes na boca e mastiga elas, recuperando sua essência mágica e recuperando +1d4 PM por semente.

- *Plantas Conduentes Arcanas*. Quando você usa um truque (feitiço nível 0), você pode escolher um número das suas Plantas Mágicas ativas, limitado pelo seu nível. Gaste essa quantidade de PM, e o truque é executado por você e pelas plantas selecionadas ao mesmo tempo (você escolhe os alvos).

- *Herbomancia: Raizes Mágicas*. 3 PM. escolha 3 cubos contíguos de 1,5m a partir do ponto onde a semente foi plantada. De lá crescem raízes mágicas. Elas podem funcionar como rampas, escadas, paredes, cobertura e/ou terreno difícil. Você pode gastar +2PM para aumentar o número de cubos em 3. Pré-requisitos: nível 5 de Plantomancer.

- *Crescimento Acelerado*. Você pode criar plantas com Herbomancia como uma reação, gastando +2PM.
{{pageNumber,auto}}
\page

- *Herbomancia: Samambaia Recuperadora*. Ao fazer um descanso num ambiente natural, você pode gastar 2 Semente Mágica para invocar uma samambaia mágica, que acalma e reinvigora quem ficar embaixo dela. até 6 alvos a sua escolha recuperam um adicional de 1d4 PM nesse descanso. Você pode gastar mais sementes (até metade do seu nível), e para cada semente adicional os alvos recuperam +1d4 de PM. Pré-requisitos: nível 4 de Plantomancer. (As sementes gastas contam como parte das sementes que você receberia ao final do descanso).

> ##### Herbomancia e Plantas Mágicas
> Alguns dos poderes de Plantomancer envolvem usar suas Sementes Mágicas para criar plantas mágicas, por meio de Herbomancia.
> 
> Habilidades de Herbomancia envolvem gastar uma ou mais sementes mágicas, uma quantidade de PM e uma ação de movimento ou padrão (sua escolha). Para fazer a Planta Mágica crescer você escolhe um lugar que consegue ver em alcance curto (9 quadrados). Se for um local natural a planta cresce automaticamente, mas se for inospício você tem que passar num teste de Natureza (CD 15, 20 ou 25, dependendo da dificuldade)
>
> As plantas criadas por Herbomancia tem 5 + 2\*o seu nível de Plantomancer de HP, 14 + o seu modificador de INT de Defesa, resistência a dano de impacto e perfurante e fraqueza contra dano cortante, de fogo e gelo.

- *Herbomancia: Troco Paredão*. 1PM. O tronco de uma árvore mágica começa a crescer de lado, numa linha de 4,5m de comprimento, a partir do local onde a semente foi plantada. Troco Paredão funciona como cobertura parcial (+5 Defesa) enquanto está sendo erguida, e cobertura total uma vez erguida. 

- *Herbomancia: Trepadeira da Batata de Aço*. 2PM. A planta te protege como uma armadura, e toma dano por você. Dura 1 turno. Pré-requisitos: Cresimento Acelerado.

- braço treinado. dobra o alcance das plantas que vc pode plantar.

- Raíz come-asfalto. você recebe +5 em testes de Natureza para Herbomancia.

- *Se é verde faz bem*. Você ignora resistência a veneno e ácido de inimigos. Pré-requisitos: 4º nível de Plantomancer.

- *Herbomancia: Raizes Enredantes*. 2PM. alcance: círculo com XX raio. terreno difícil e prende todos que entram. Pré-requisito: Herbomancia: Raizes Mágicas.

### Spell List
List of spells available for a Plantomancer to learn.

##  Spells

### Cantrip
- [[Acid Splash]]
- [[Blade Ward]]
- [[Booming Blade]]
- [[Magic Stone]]
- [[Poison Spray]]
- [[Thorn Whip]]

### 1st Circle
- [[Abençoar Alimentos]]
- [[Armor of Agathys]]
- [[Caminhos da Natureza]]
- [[Canhão de Ervilha]]
- [[Catapult]]
- [[Controlar Plantas]]
- [[Curar Ferimentos]]
- [[Detect Poison and Disease]]
- [[Detectar Ameaças]]
- [[Earth Tremor]]
- [[Enfeitiçar]]
- [[Entangle]]
- [[False Life]]
- [[Feather Fall]]
- [[Fog Cloud]]
- [[Goodberry]]
- [[Hail of Thorns]]
- [[Healing Word]]
- [[Ray of Sickness]]
- [[Sleep]]
- [[Teia]]
- [[Thunderwave]]
- [[Toque Chocante]]
- [[Tranquilidade]]
- [[Área Escorregadia]]

### 2nd Circle
- [[Earthbind]]
- [[Lesser Restoration]]
- [[Maximilian's Earthen Grasp]]
- [[Prayer of Healing]]
- [[Ray of Enfeeblement]]
- [[Web]]

### 3rd Circle
- [[Flecha Ácida]]
- [[Mass Healing Word]]
- [[Soco de Arsenal]]
- [[Sopro das Uivantes]]


{{pageNumber,auto}}
\page
# Rogue
##### [[Archetype - Specialist]]

**HP**: You start at 1st level with 10 (+CON mod.) maximum hit points, and gain an extra 3 (+CON mod.) per level.

**MP**: 5 per level.

**Equipment Proficiencies:** Simple weapons, light and medium armor.

**Save Roll Proficiencies:** DEX, INT.

{{classTable,decoration,frame
##### Rogue
| Level | Proficiency Bonus | Features                                                                                |
|:-----:|:-----------------:|:--------------------------------------------------------------------------------------- |
|  1st  |        +1         | Sneak Attack (2d6)                                                                      |
|  2nd  |        +1         | Rogue Feat, Expertise (INT skills, 1PM: +INT to roll)                                   |
|  3rd  |        +2         | Rogue Feat, Sneak Attack (1PM, 3d6), Cunning Action                                                     |
|  4th  |        +2         | Rogue Feat, Attribute Score Improvement                                                 |
|  5th  |        +3         | Rogue Feat, Sneak Attack (2PM, 4d6)                                                     |
|  6th  |        +3         | Rogue Feat, Attribute Score Improvement, Expertise (INT+1 skills, 2PM: +INT\*2 to roll) |
|  7th  |        +4         | Rogue Feat, Sneak Attack (3PM, 5d6)                                                     |
|  8th  |        +4         | Rogue Feat, Attribute Score Improvement, Cunning Action                                                 |
|  9th  |        +5         | Rogue Feat, Sneak Attack (4PM, 6d6)                                                     |
| 10th  |        +5         | Rogue Feat, Attribute Score Improvement, Expertise (INT+3 skills, 3PM: +INT\*3 to roll) | 
| 11th  |        +6         | Rogue Feat, Extra Attack (2), Sneak Attack (5PM, 7d6)                                   |
| 12th  |        +6         | Rogue Feat, Attribute Score Improvement                                                 |
| 13th  |        +7         | Rogue Feat, Sneak Attack (6PM, 8d6)                                                     |
| 14th  |        +7         | Rogue Feat, Expertise (INT+4 skills, 4PM: +INT\*4 to roll)                              |
| 15th  |        +8         | Rogue Feat, Attribute Score Improvement, Sneak Attack (7PM, 9d6)                        |
| 16th  |        +8         | Rogue Feat                                                                              |
| 17th  |        +9         | Rogue Feat, Attribute Score Improvement, Sneak Attack (8PM, 10d6)                       |
| 18th  |        +9         | Rogue Feat, Expertise (INT+5 skills, 5PM: +INT\*5 to roll)                              |
| 19th  |        +10        | Rogue Feat, Attribute Score Improvement, Sneak Attack (9PM, 11d6)                       |
| 20th  |        +10        | Rogue Feat                                                                              |
}}

**SNEAK ATTACK.** Once per turn, you can deal an extra 2d6 damage to one creature you hit with an attack, if you were hidden or the enemy was flanked by one of your allies. The attack must use a simple or ranged weapon. At every odd level you can spend 1PM this damage increases by +1d6.

**EXPERTISE.** Choose a number of skills equal to you inteligence modifier (min 1). Before performing a non-attack roll with one of those skills, you may spend 1PM to add your inteligence modifier to the roll. At levels 6, 10, 14 and 18 you chose another skill, and can spend +1PM, and the total added to the roll equals the MP cost times your inteligence modifier.

**Cunning Action (Ação Ardilosa)**. (Once per turn) Free Action (1PM): You can Hide or Dash as a free action (see combat actions).

### Rogue Feats

Begining at level 2, every time you gain a level in Rogue you gain a Rogue Feat. You may instead of a Rogue feat take a Martial or General Feat of your choice.

- *Ataque Extra*. Você pode atacar 2 vezes no seu turno quando toma a ação de ataque. Pré-requisitos: 7º nível de ladino.

- *Assassinate*. Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados. Pré-requisito: 5º nível de ladino.

- *Crítico Furtivo*. Quando você acerta um ataque crítico com um Ataque Furtivo, você muda o dado de dano de 1d6 para 1d8. Você pode escolher esse poder de novo para aumentar o dado para 1d10. Pré-requisitos: 8º e 12º nível de ladino para a primeira e segunda vez, respectivamente.

- *Disparo Preciso.* Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque.

- *Emboscar*. Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate. Pré-requisito: DEX 15.

- *Escapista*. Você recebe +5 em testes de Acrobacia para escapar e em testes para resistir a efeitos que restrinjam seu movimento.

- *Gatuno*. Você recebe +2 em Atletismo. Quando escala, avança seu deslocamento normal, em vez de metade dele. Pré-requisito: FOR 11.

- *Capitalizar Distrações*. Você tem vantagem em ataques contra inimigos que não tiveram um turno ainda no combate. Ao acertar um ataque contra um inimigo distraído, você pode gastar 4PM para tornar o acerto um crítico. Pré-requisito: DEX 17, SEN 13
{{pageNumber,auto}}
\page

- *Mão na Boca*. Você recebe +2 em testes de agarrar. Quando faz um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada. Pré-requisito: FOR 13.

- *Mente Criminosa*. Você soma seu bônus de Inteligência em Ladinagem e Furtividade. Pré-requisito: Int 13.

- *Oportunismo*. Você recebe +2 em testes de ataque contra inimigos que já sofreram dano desde seu último turno.

- *Saqueador de Tumbas*. Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de Reflexos para evitá-las.

- *Sombra*. Você recebe +2 em Furtividade. Além disso, pode se mover com seu deslocamento normal enquanto usa Furtividade sem sofrer penalidades no teste de perícia. Pré-requisito: DEX 15.

- *Velocidade Ladina*. Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno. Pré-requisito: DEX 15.

- *Veneno Persistente*. Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um). Pré-requisito: Veneno Potente, 8º nível de ladino.

- *Veneno Potente*. A CD para resistir aos venenos que você usa aumenta em +2 e esses venenos causam +1 ponto de dano por dado de dano. Pré-requisito: INT 15

{{pageNumber,auto}}
\page
# Spelgard
##### [[Archetype - Off-Caster]]

**HP**: You start at 1st level with 14 (+CON mod.) maximum hit points, and gain an extra 4 (+CON mod.) per level.

**MP**: You start at 1st level with 4 (+SEN mod.) maximum MP, and gain 4 extra per level.

**Equipment Proficiencies:** Simple weapons and all kinds of armor.

**Save Roll Proficiencies:** SEN, DEX.

**Spellcasting Modifier:** SEN

{{classTable,decoration,wide
##### Spelgard
| Level | Proficiency Bonus | Features                                                          | Spells Known | Max Spell Circle |
|:-----:|:-----------------:|:----------------------------------------------------------------- |:------------:|:----------------:|
|  1st  |        +1         | Lay on Hands (1d8+1)                                              |      1       |        1         |
|  2nd  |        +1         | Spelgard Feat, Spiritual Weapon (1d8+SEN)                         |      2       |        1         |
|  3rd  |        +2         | Spelgard Feat                                                     |      2       |        1         |
|  4th  |        +2         | Spelgard Feat, Lay on Hands (2d8+2)                               |      3       |        1         |
|  5th  |        +3         | Spelgard Feat, Attribute Score Improvement, Attack of Opportunity |      3       |        2         |
|  6th  |        +3         | Spelgard Feat, Spiritual Weapon (2d8+SEN)                         |      4       |        2         |
|  7th  |        +4         | Spelgard Feat, Attribute Score Improvement, Extra Attack          |      4       |        2         |
|  8th  |        +4         | Spelgard Feat                                                     |      5       |        3         |
|  9th  |        +5         | Spelgard Feat, Lay on Hands (3d8+3)                               |      5       |        3         |
| 10th  |        +5         | Spelgard Feat, Attribute Score Improvement                        |      6       |        3         |
| 11th  |        +6         | Spelgard Feat, Spiritual Weapon (3d8+SEN)                         |      6       |        4         |
| 12th  |        +6         | Spelgard Feat, Attribute Score Improvement                        |      7       |        4         |
| 13th  |        +7         | Spelgard Feat                                                     |      7       |        5         |
| 14th  |        +7         | Spelgard Feat, Attribute Score Improvement                        |      8       |        5         |
| 15th  |        +8         | Spelgard Feat, Lay on Hands (4d8+4)                               |      8       |        6         |
| 16th  |        +8         | Spelgard Feat, Spiritual Weapon (4d8+SEN)                         |      9       |        6         |
| 17th  |        +9         | Spelgard Feat, Attribute Score Improvement                        |      9       |        7         |
| 18th  |        +9         | Spelgard Feat, Lay on Hands (5d8+5)                               |      10      |        7         |
| 19th  |        +10        | Spelgard Feat                                                     |      10      |        7         |
| 20th  |        +10        | Spelgard Feat                                                     |      11      |        7         |
}}

**LAY ON HANDS (CURAR PELAS MÃOS).** You may spend a major action and 1PM to touch one creature, and heal them for 1d8+1. At levels 4, 9, 15 and 18, you can spend +1PM to increate the heal amount by 1d8+1

**SPIRITUAL WEAPON.** Movement action (1PM): You create a floating, spectral weapon within range (2sqr radius of you). When you take the attack action, you can substitute one of your attacks for a Spiritual Weapon Attack. For a Spiritual Weapon Attack, you make a melee spell attack, and it deals 2d8 + SEN physical damage of the weapon's type if it hits. The weapon follows your movement, but you can move it to another spot within the ability's range as a free action once per turn. At levels 6, 11 and 16 you can spend +2PM to increase the weapon's damage by 1d8.
****
### Spelgard Feats

Begining at level 2, every time you gain a level in Spelgard you gain a Spelgard Feat. You may instead of a Spelgard feat take a Martial or General Feat of your choice.

- *Arma Espiritual teleguiada*. O alcanse inicial da sua Arma Espiritual aumenta para 6 quadrados (9m).

- *Spiritual Strike*. You can spend a movement action and 1 PM to use a Spiritual Weapon Attack. Pre-requisite: 5th level Spelgard

- *Spiritual Magic*. Whenever you cast a Spell or Ability with a range of touch or self, you can cast it through your Spiritual Weapon. (isso inclui curar pelas mãos e auras)

- *Magically Powered*. Whenver you cast a spell of first circle or higher, you can spend another 2PM to perform a Spiritual Weapon Attack as a free action.

- *Defensive Spiritual Weapon*. While your Spiritual Weapon is adjacent to an ally, that ally has +2 to their defense. Pre-requisites: 7th level Spelgard.

- *Retaliating Spiritual Weapon*. When an opponent attacks an ally while your Spiritual Weapon is adjacent to the attacker, you can use yout reaction and 1PM to perform a Spiritual Weapon Attack on the attack immediately after the attack goes off. Pre-requisites: Defensive Spiritual Weapon.

- *Curar Aprimorado*. Quando usar Curar Pelas Mãos, você adiciona o seu modificador de Sensibilidade no total da cura.

- *Curar Distante*. Quando usar Curar Pelas Mãos, você pode gastar +1PM para aumentar o alcanse de toque para curto. Você também pode usar Curar Pelas Mãos pela sua Arma Espiritual
{{pageNumber,auto}}
\page

{{note
##### Auras

A Spelgard is always ready to use their unique combo of physique and magic to aid themselves and their allies' combat prowess! 

Some Spelgard Feats are Auras. Auras work as spell-like abilities, with the following stats (unless stated otherwise):

Movement (2PM): For 2 turns (until the end of your second next turn), you and all your allies within 2sqr (3m) of you get a buff, depending on the aura. The aura only affects allies while they are within it's range. Only one aura may be active at a time.
}}

- *Aura of Retaliation*. Effect: Whenever one of your allies is damaged, your and their next damaging ability deals an aditional 1d8 damage (of the ability's damage type).

- *Aura of Irradiation*. Effect: Whenever an enemy enters or starts their turn inside the aura they must make a Presence saving throw. They take 1d6 fire damage, or half on a save.

- *Aura of Regeneration*. Effect: Your allies recover 1d4 HP whenever they first enter or start their turn within the aura.

- *Multi-Aura*. You can have multiple auras active at once. Pre-requisites: At least 1 "Aura of" power

- *Defensive Aura*. You and your allies have +1 Defense while affected by one of your auras. Pre-requisites: At least 1 "Aura of" power

- *Weakening Aura*. Non-allies have disadvantage to resist your spells and abilities while inside one of your auras.

- *Spiritual Aura*. Your Spiritual Weapon also radiates your aura.

- *Long Range Aura*. Your aura's radius is increased to 3sqr (4.5m)

- *Um-Dois*. Reação (você acertou um oponente com uma magia de primeiro círculo ou maior, 1PM): Um resquício da sua magia fica no inimigo e marca ele. Se você acertar ele com um ataque físico ou com a sua **Arma Espiritual** até o final do seu próximo turno você usa o resquício de energia para aumentar o impacto, e dá +2d6 de dano adicional. A cada 4 níveis você pode gastar +2PM e aumentar o dano em +2d6.

- *Explosão Espiritual*. Ao realizar um golpe com a **Arma Espiritual** (+1PM): Em vez de fazer um ataque, sua Arma Espiritual explode em uma onda de energia, aumentando o dano em +3d8. O seu alvo original e todos da sua escolha em um quadrado de lado 3sqr centrado na Arma Espiritual são atingidos. Se os alvos passarem em um teste de Presença, eles tomam metade do dano

### Spell List
List of spells available for a Spelgard to learn.

##  Spells

### 1st Circle
- [[Arma Mágica]]
- [[Armor of Agathys]]
- [[Bless]]
- [[Burning Hands]]
- [[Bênção]]
- [[Chaos Bolt]]
- [[Concentração de Combate]]
- [[Curar Ferimentos]]
- [[Detect Poison and Disease]]
- [[Escudo]]
- [[Explosão de chamas]]
- [[Guiding Bolt]]
- [[Healing Word]]
- [[Primor Atlético]]
- [[Ray of Sickness]]
- [[Toque Chocante]]

### 2nd Circle
- [[Aid]]
- [[Enhance Ability]]
- [[Enlarge Reduce]]
- [[Lesser Restoration]]
- [[Prayer of Healing]]
{{pageNumber,auto}}
\page
# Warrior
##### [[Archetype - Martial]]

**HP**: You start at 1st level with 18 (+CON mod.) maximum hit points, and gain an extra 4 (+CON mod.) per level.

**MP**: 3 per level.

**Equipment Proficiencies:** Simple weapons, martial weapons and all kinds of armor.

**Save Roll Proficiencies:** STR, CON.

\<div class='classTable'>
##### Warrior
| Level | Proficiency Bonus | Features                    |
|:-----:|:---:|:------------------------------------------|
| 1st   | +1  | Precise Strike +4                         |
| 2nd   | +1  | Warrior Feat, Action Surge                |
| 3rd   | +2  | Warrior Feat                              |
| 4th   | +2  | Warrior Feat, Attribute Score Improvement |
| 5th   | +3  | Warrior Feat, Extra Attack (1)            |
| 6th   | +3  | Warrior Feat, Attribute Score Improvement |
| 7th   | +4  | Warrior Feat, Precise Strike +8           |
| 8th   | +4  | Warrior Feat                              |
| 9th   | +5  | Warrior Feat, Attribute Score Improvement |
| 10th  | +5  | Warrior Feat                              |
| 11th  | +6  | Warrior Feat                              |
| 12th  | +6  | Warrior Feat, Attribute Score Improvement |
| 13th  | +7  | Warrior Feat, Precise Strike +12          |
| 14th  | +7  | Warrior Feat  Action Surge (2)            |
| 15th  | +8  | Warrior Feat, Attribute Score Improvement |
| 16th  | +8  | Warrior Feat                              |
| 17th  | +9  | Warrior Feat, Attribute Score Improvement |
| 18th  | +9  | Warrior Feat, Precise Strike +16          |
| 19th  | +10 | Warrior Feat, Attribute Score Improvement |
| 20th  | +10 | Warrior Feat, Action Surge (3)            |
\</div>

**PRECISE STRIKE.** When you make an attack, you may spend 1 PM to add +4 to the attack roll or damage. At levels 7, 13 and 17 you may spend +1 MP to increase the bonus by +4. You can also choose to split the bonus evenly between the damage and attack rolls (ex: if you spend 3PM you can either get +12 to the attack, +12 to the damage or +6 to the attack and +6 to the damage).

**ACTION SURGE.** Once per turn, you may spend 3PM and use an Action Surge. If you do, you gain one adicional main action this turn. At levels 14 and 20 you may spend an extra +3PM per aditional action to gain 2 or 3 aditional actions instead of 1, respectively

### Warrior Feats

Begining at level 2, every time you gain a level in Warrior you gain a Warrior Feat. You may instead of a Warrior feat take a Martial or General Feat of your choice.

- *Ambidestria*. Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de a

- *Arqueiro*. Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 13.

- *Bater e Correr*. Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.

- *Destruidor*. Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma. Pré-requisito: For 13

- *Esgrimista*. Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 13.

- *Golpe de Raspão*. Quando erra um ataque, você pode gastar 1 PM. Se fizer isso, causa 1d8 pontos de dano (do tipo da arma) no alvo do ataque.

- *Golpe Demolidor*. Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 2 PM para ignorar a RD dele.

- *Ímpeto*. Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.

- *Planejamento Marcial*. Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro.

- *Solidez*. Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.

- *Tornado de Dor*. Você pode gastar uma ação padrão e 2 PM para desferir uma série de golpes giratórios. Faça um ataque corpo a corpo e compare-o com a Defesa de cada inimigo adjacente. Então faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro.

- *Valentão*. Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos. 

{{pageNumber,auto}}
\page
# Witch
##### [[Archetype - Caster]]

**HP**: You start at 1st level with 8 (+CON mod.) maximum hit points, and gain an extra 8 (+CON mod.) per level.

**MP**: 6 + PRE at lv1, +6 per level.

**Equipment Proficiencies:** None.

**Save Roll Proficiencies:** Presence, Constituition.

**Spellcasting Modifier:** PRE

{{classTable
##### Witch
| Level | Proficiency Bonus | Features                                |
|:-----:|:-----------------:|:--------------------------------------- |
|  1st  |        +1         | Hex                                     | 
|  2nd  |        +1         | Witch Feat, Witch's Focus (2 effects)   |
|  3rd  |        +2         | Witch Feat                              |
|  4th  |        +2         | Witch Feat, Attribute Score Improvement |
|  5th  |        +3         | Witch Feat, Scary Look (+2)             |
|  6th  |        +3         | Witch Feat, Witch's Focus (3 effects)   |
|  7th  |        +4         | Witch Feat                              |
|  8th  |        +4         | Witch Feat, Attribute Score Improvement |
|  9th  |        +5         | Witch Feat                              |
| 10th  |        +5         | Witch Feat, Witch's Focus (4 effects)   |
| 11th  |        +6         | Witch Feat, Scary Look (+4)             |
| 12th  |        +6         | Witch Feat, Attribute Score Improvement |
| 13th  |        +7         | Witch Feat                              |
| 14th  |        +7         | Witch Feat, Witch's Focus (5 effects)   |
| 15th  |        +8         | Witch Feat                              |
| 16th  |        +8         | Witch Feat, Attribute Score Improvement |
| 17th  |        +9         | Witch Feat                              |
| 18th  |        +9         | Witch Feat, Scary Look (+6)             |
| 19th  |        +10        | Witch Feat, Attribute Score Improvement |
| 20th  |        +10        | Witch Feat                              |
}}

**Hex**. Hexes are concentration spell-like abilities. At level 1 you learn one Hex from the Witch's Hex List, and learn a new one every 4 levels.  

**Witch's Focus.** With your experience (and particular focus) in long term curses and boons, you can focus on many ongoing magical effects at once. You can concentrate on 2 effects at once instead of 1. This increases by 1 when you reach 6th, 10th and 14th level, respectively. (OBS: *you still need to pay 1PM/turn for each effect you're concentrating on*).

TODO: add witches brews (out of combat potions with healing and random effects. good way to spend more PM)
Witches Brew: combination of effects (decide some, roll for most). all effects have a positive and a negative.

ex:
- bonus on skill checks & take damage
- heal + disadvantage on initiative
- mana + no extra crit damage (too weak? prolly change)


### Witch Feats
Beginning at level 2, every time you gain a level in Witch you gain a Witch Feat. You may instead of a Witch feat take a Caster or General Feat of your choice.

- **Focused Cantrip**. Your damaging cantrips do an extra die of damage per effect you're concentrating on.

- **Scary Look.** (2PM) Action: A creature you can see rolls a Presence saving throw against your Spell DC. If they fail, they are frightened of you until the end of the scene (See: *Condition: frightened*). At every 4th level you can spend +2PM to increase the DC by 2.

- **NAME HERE.** Scary Look now targets a number of creatures of your choice equal to 1 + your Presence modifier (min 1).

- **NAME HERE.** Scary Look now makes target scared of all your allies. 13th level minimum.

- **Cantrip asdaf.** Your cantrips have +1 to their DC, and +1 for every effect you're concentrating on.

- **NAME HERE.** Advantage on CON saves to keep concentration if the save was triggered by someone affected by your Hex or Scary Look.

- **Distant Hex.** (while casting a Hex) +1PM: to double it's range.

- **Multi-Hex.** (while casting a Hex) +3PM: target an additional creature when you cast a Hex. 8th level witch.

- **Cursed Knowledge.** learn 2 hexes.

- **Tricky Spell**. (while casting a Spell) +2PM: Be able to change what attribute the target uses for a save. Pre-requisite: 10th level witch

TODO: give all the hexes some cool, gross descriptions and names. like they should make the target weird, slimy, neurotic and shit. really up the flavor of it

### Hex List:
A witch's Hex is an inescapable effect. While you concentrate on it, the target cannot get rid of the hex.
 
By default, a Hex takes a movement action to cast, has a range of 9sqr, costs 0PM and targets one creature you can see. You can change the target of your Hex for free if the original dies.
 
Most Hexes also gain an additional effect for each other effect you're concentrating on.

- *Hex: Frail.* The target has -1 Defense, and -1 for each other effect you're concentrating on.

- *Hex: Drain.* Your first ally each turn that hits the target recovers (your Presence mod.) HP, +1 for each other effect you're concentrating on.

- *Hex: Weakened.* The target has -1 to all of their saving throws, -1 for each other effect you're concentrating on.

- *Hex: Slowed.* The target has their movement speed halved.

- *Hex: Fragile.* Your first ally each turn that hits the target deals an extra 1d6 damage, +1d6 for each other effect you're concentrating on.

Spell List:

##  Spells

### Cantrip
- [[Chill Touch]]
- [[Primal Savagery]]
- [[Thorn Whip]]
- [[Toll the Dead]]

### 1st Circle
- [[Bane]]
- [[Bless]]
- [[Bênção]]
- [[Caminhos da Natureza]]
- [[Canhão de Ervilha]]
- [[Chaos Bolt]]
- [[Controlar Plantas]]
- [[Curar Ferimentos]]
- [[Enfeitiçar]]
- [[Entangle]]
- [[Escuridão]]
- [[False Life]]
- [[Fog Cloud]]
- [[Goodberry]]
- [[Healing Word]]
- [[Imagem Espelhada]]
- [[Infligir Ferimentos]]
- [[Mage Hand]]
- [[Perdição]]
- [[Ray of Sickness]]
- [[Sleep]]
- [[Snare]]
- [[Tranquilidade]]

### 2nd Circle
- [[Aid]]
- [[Earthbind]]
- [[Ray of Enfeeblement]]
- [[Web]]

### 3rd Circle
- [[Camuflagem ilusória]]
- [[Flecha Ácida]]
- [[Invisibilidade]]
- [[Life Transference]]
- [[Mass Healing Word]]
- [[Oração]]
- [[Soco de Arsenal]]
- [[Toque Vampírico]]

### 5th Circle
- [[Transformação de Guerra]]

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
**Endurance:** Movement action (2MP): for the rest of the scene, all non-psychic damage you take that's equal or below your Guard is reduced to 0. This does not affect "DoT" or environmental damage (e.g.: burning, walking on a corrosive substance, bleeding, gradual poisoning, etc.)

OBS: the DM may rule that any specific instance of damage may or may not ignore Endurance depending on the situation, at their discretion.

### Uncanny Dodge
Below is the definition of the Uncanny Dodge ability, that all characters can perform:

**Uncanny Dodge:** (when taking damage) Reaction (3PM): ignore the damage, and increase the cost of this by 3PM. You can't use Uncanny Dodge if it costs more than your **Dodge**.

Example Use: Fibi has 8 Guard and 7 Dodge. Fibi has 18 AC (someone trying to attack them has to roll a 18 or higher to hit them), can use Uncanny Dodge up to 2 times per scene, and their Endurance allows them to shrug off attacks of 8 or less points of damage. If they use Endurance and take 3 attacks dealing 7, 14 and 5 damage, the first and third attacks have their damage reduced to 0.

### Attack of Opportunity
If your character has the ability to do so, they can perform an attack of opportunity.

**Attack of Opportunity**: Reaction (An enemy leaves your melee range, 0MP): You can make an attack against the enemy immediately as they leave your melee range.

### Movement
During their turn, a character can spend their movement action to move up to their movement speed. (to calculate PC's movement speed, check [[Movement]])

### Attack
Any character can use their Major Action in combat to perform the Attack Action. When doing so, they can perform a melee or ranged attack (unarmed or with a weapon they are wielding), or perform a [[Maneuvers]]


## Attacking and Defending
### Attacking
##### Physical Attacks
To make a physical attack you first roll to hit. If you're proficient with the weapon being used, you add your [[Proficiency]] bonus for your current level (copy of the proficiency table included at the end of the page).

If making a melee attack:
  - **1d20 + proficiency bonus + Strength modifier**

If making a ranged attack:
  - **1d20 + proficiency bonus + Dexterity modifier**

If a melee weapon has the *finesse* property you can use Dexterity for the attack roll instead of Strength. (see: Equipment section).

If the attack hit, you deal damage equal to the damage dice for the weapon, plus the modifier used for the attack roll.

Example: Molly, an 8th level character proficient with simple weapons and 15(+2) DEX would have the following attack and damage rolls with a dagger:
- Attack Roll: 1d20+6
- Damage Roll: 1d4+2

##### Spell Attacks
To make a spell attack you first roll to hit. The roll is determined by the following formula:
- **1d20 + proficiency bonus + Spellcasting modifier**
	
Unlike physical attacks, spell attacks in general don't add the caster's spellcasting modifier to the damage roll.

Some spells use a spell save DC instead. For that, see the Save DC Section below.

#### Saves
For some spell and other abilities certain classes have an enemy has to roll to try to escape from the ability. The DC for that roll is determined by the formula below:

- **8 + proficiency modifier + relevant attribute modifier**
{{pageNumber,auto}}
\page

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
A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent. As an action or a bonus action, the tumbler makes a Dexterity (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check. If the tumbler wins the contest, it can move through the hostile creature's space once this turn.

{{pageNumber,auto}}
\page


#### CLIMB ONTO A BIGGER CREATURE
If one creature wants to jump onto another creature, it can do so by grappling. A Small or Medium creature has little chance of making a successful grapple against a Huge or Gargantuan creature, however, unless magic has granted the grappler supernatural might.

As an alternative, a suitably large opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb. After making any ability checks necessary to get into position and onto the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check. If it wins the contest, the smaller creature successfully moves into the target creature's space and clings to its body. While in the target's space, the smaller creature moves with the target and has advantage on attack rolls against it.

The smaller creature can move around within the larger creature's space, treating the space as difficult terrain. The larger creature's ability to attack the smaller creature depends on the smaller creature's location, and is left to your discretion. The larger creature can dislodge the smaller creature as an action- knocking it off, scraping it against a wall, or grabbing and throwing it- by making a Strength (Athletics) check contested by the smaller creature's Strength (Athletics) or Dexterity (Acrobatics) check. The smaller creature chooses which ability to use.

#### DISARM
A creature can use a weapon attack to knock a weapon or another item from a target's grasp. The attacker makes an attack roll contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check. If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender drops the item. The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands. The target has advantage on its ability check if it is larger than the attacking creature, or disadvantage if it is smaller.


{{pageNumber,auto}}
\page
# Origins
(Act in a similar way to races in other fantasy TTRPGs)

Origins usually give +2, +1 and -1 to 3 attributes, and the equivalent of ~2 powers.

## Origin Lists
Here's a list of origins: (e em parênteses qual raça do T20 eu quibei pra montar elas)

### Generalist
**Attributes**: +1 to 3 different attributes.
**Powers**: 2 general powers of your choice.

### Brute
**Attributes**: +2 STR, +1 CON, -1 SEN.
**Powers**: 1 Combat power of your choice. Tough it Out!.

**Tough it out!**: Can spend movement action and 1PM to gain +1 Guard for scene.

### Old Soul
**Attributes**: CON +2, SEN +1, DEX -1.
**Powers**: 1 general power of your choice. Darn these old legs. Built over time.

**Darn these old legs**: your base movement speed is 1 square (5ft/1.5m) lower.
**Built over time**: +3 maximum HP at lv1, and +1 maximum HP per levelup

### Tinkerer
**Attributes**: DEX +2, INT +1, PRE -1.
**Powers**: 1 general power. Tool Expert.

**Tool Expert**: no negative when performing a skill check without it's kit. +1 if using kit.

### Student
**Attributes**: INT +2, DEX +1, CON -1.
**Powers**: 1 general power. Caffeine-powered soul.

**Caffeine-powered soul**: +1 maximum MP per level.

### Animal Friend
**Attributes**: SEN +2, DEX +1, INT -1.
**Powers**: 1 general power. Animal Embassador.

**Animal Embassador**: double SEN mod in animal handling checks. can comunicate with animals through body language.

### Initiate
**Attributes**: PRE +2, INT +1, STR -1.
**Powers**: 1 general power. Initiate Magic.

**Initiate Magic**: Choose 1 1st level spell. You can cast it (PRE is the attribute).

### Loner
**Attributes**: +2 STR, +1 SEN, -1 PRE.
**Powers**: 1 General Power of your choice. Lone wolf.

**Lone wolf**: +1 DEF when you have no allies within short range of you.

### Schemer
**Attributes**: +2 DEX, +1 PRE, -1 CON
**Powers**: 1 General Power of your choice.

**I saw that one before!**: you have +1 on investigation checks to find traps, and to see if someone is trying to decieve you.

### Nature Explorer
**Attributes**: +2 CON, +1 STR, -1 PRE
**Powers**: 1 General Power of your choice. Forest Walker.

**Forest Walker**: You can move through natural environments with dificult terrain as if they were of normal terrain.

### Researcher
**Attributes**: +2 INT, +1 CON, -1 DEX
**Powers**: 1 General Power of your choice. Field Expert

**Field Expert**: Choose either History, Arcana, Nature or Medicine. You add double your Inteligence modifier when rolling that skill.

### Gladiator
<!-- You did a lot of arena fighting in your younger days. You might have gotten a bit wiser (or not), but one thing you won't forget is your first-hand combat experience, and ability to get a crowd roaring! -->
**Attributes**: +2 PRE, +1 STR, -1 INT
**Powers**: 1 Combat power of your choice. Show fight

**Show fight**: You can choose to cause non-lethal damage with your attacks without taking the usual -5 to the attack roll.

### Merchant
**Attributes**: +2 SEN, +1 PRE, -1 STR
**Powers**: 1 General Power of your choice. Bargain Bin Buyer. Salesman.

**Bargain Bin Buyer**: You can buy non-magical items for half price (DM may rule against this for technologically complex, rare or unique items, according to the situation).
**Salesman**: You sell items for 10% more.

### Shunned
**Attributes**: +1 in 3 non-Presence attributes. Presence -1.
**Powers**: 1 General Power. Intimidating.

**Intimidating**. +2 to intimidation.

### Dropout
You went out and got yourself a propper education in a fancy shmancy school! Well... you tried, at least.

**Atributes**: +1 to 3 attributes except Intelligence.
**Powers**: 1 Combat Power of your choice.

**Skills**: +1 to Intelligence based skill checks to recall information (some things stuck. Not many, but some).


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
# Equipment
## Simple Weapons
| Melee Weapons  | Damage | Crit |            Properties            |
|:--------------:|:------:|:----:|:--------------------------------:|
| Dagger         |   1d4  |   -  |  finesse, light, thrown (20/60)  |
| Unarmed Attack |   1d2  |   -  |                -                 |
| Club           |   1d4  |   -  |              light               |
| Greatclub      |   1d8  |   -  |             2-handed             |
| Handaxe        |   1d6  |   -  |      light, thrown (20/60)       |
| Javelin        |   1d6  |   -  |         thrown (30/120)          |
| Light Hammer   |   1d4  |   -  |      light, thrown (20/60)       |
| Mace           |   1d6  |  19  |                                  |
| Quarterstaff   |   1d6  |   -  |         versatile (1d8)          |
| Spear          |   1d6  |  x3  | Thrown (20/60), versatile (1d8)  |
| Scythe         |   1d4  |  x4  |              light               |

| Ranged Weapons | Damage | Crit |            Properties            |
|:--------------:|:------:|:----:|:--------------------------------:|
| Crossbow, light|   1d8  |  19  | Range (10sqr/20sqr), loading(movement), 2-handed|
| Shortbow       |   1d6  |  x3  | Range (15sqr/30sqr), 2-handed         |

## Martial Weapons
| Melee Weapons		 	| Damage 	| Crit 	| Properties       |
|:-----------------:|:-------:|:-----:|:-----------------|
| Battleaxe       	| 1d8    	|   - 	| light            |
| Shortsword       	| 1d6    	|   x3 	| Finesse, light   |
| Flail           	| 1d8    	|   - 	| Reach            |
| Lance           	| 1d12   	|   -  	| Reach, Mounted   |
| Longsword       	| 1d8    	|   19 	| Versatile (1d10) |
| Rapier          	| 1d6    	|   18 	| Finesse          |
| Greataxe        	| 1d12   	|   x3 	| Heavy, 2-handed  |
| Greatsword      	| 2d6    	|   19 	| Heavy, 2-handed  |

| Ranged Weapons    | Damage | Crit |            Properties                       |
|:-----------------:|:------:|:----:|:-------------------------------------------:|
| Crossbow, heavy 	| 1d10   |  x3 	| Range (20sqr/40sqr), heavy, loading(action), 2-handed 	|
| Longbow         	| 1d8    |  19 	| Range (25sqr/50sqr), heavy, 2-handed          	|

## Armor

| Light Armor                    | Dodge | Guard | Cost | STR | Penalty  |
|--------------------------------|-------|-------|------|-----|----------|
| Padded (Acolchoada)            | 2     | -1    |  10g | -   | 0        |
| Leather (Couro)                | 3     | -2    |  50g | -   | 0        |
| Studded leather (Couro Batido) | 4     | -3    | 500g | -   | 0        |
| Entskin Hide (Pele de Ente)    | 6     | -5    | 850g | -   | 0        |

| Medium Armor                       | Dodge | Guard | Cost | STR | Penalty | 
| ---------------------------------- | ----- | ----- | ---- | --- | ------- |
| Hide (Gibão de peles)              | 1     | 1     | 10g  | 8   | 0       |
| Camisa de couro de Cobra           | 2     | 1     | 75g  | 8   | 0       |
| Camisa de couro de Crocodilo       | 1     | 2     | 75g  | 9   | 0       |
| Scale Mail (Brunea)                | 3     | 2     | 150g | 9   | -1      |
| Chain shirt (Cota de malha)        | 2     | 3     | 150g | 11  | -2      |
| Breast Plate (Armadura Segmentada) | 3     | 3     | 400g | 11  | -3      |
| Half plate (Meia Armadura)         | 4     | 4     | 750g | 13  | -3      |

| Heavy Armor                    | Dodge | Guard | Cost   | STR | Penalty | Movement |
| ------------------------------ | ----- | ----- | ------ | --- | ------- | -------- |
| Ring mail                      | -1    | 2     | 30g    | 12  | -3      | 0        |
| Chain mail                     | -2    | 3     | 75g    | 13  | -4      | 0        |
| Splint                         | -3    | 4     | 200g   | 14  | -5      | -1sqr    |
| Full Plate (Armadura completa) | -5    | 5     | 1,500g | 16  | -5      | -2sqr    |

| Shield       | Dodge | Guard | Cost | STR | Penalty | 
| ------------ | ----- | ----- | ---- | --- | ------- |
| Buckler      | 2     | 1     | 5g   | -   | 0       |
| Light Shield | -3    | 2     | 15g  | -   | -1      |
| Heavy Shield | -4    | 3     | 200g | 13  | -2      |

\**STR*: The minimum strength score requirement to wear the armor.

\**Penalty (deprecated? probably gonna remove/rework it)*: The negative modifier that wearing the armor gives to a character attempting a skill check for which armor is a hinderance (e.g.: stealth)

\*Movement: Movement speed penalty while wearing.

**Finesse**. When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.

**Heavy**. Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon’s size and bulk make it too large for a Small creature to use effectively.

**Light**. A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.

**Loading**. This weapons needs to be reloaded before it can be fired again.

**Thrown**. If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.

**Two-Handed**. This weapon requires two hands to use.

**Range**. A weapon that can be used to make a ranged attack has a range shown in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon’s normal range in feet, and the second indicates the weapon’s maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can’t attack a target beyond the weapon’s long range.

**Reach**. This weapon adds 5 feet to your reach when you attack with it.

**Versatile**. This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack.

{{pageNumber,auto}}
\page


**Mounted**. This weapon is considered Two-Handed unless the user is mounted.


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

**Healer’s Kit.** This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Medicine check.

**Acid.** As an action, you can splash the contents of this vial onto a creature within 1sqr of you or throw the vial up to 4sqr, shattering it on impact. In either case, make a ranged attack against a creature or object. On a hit, the target takes 2d6 acid damage.

**Alchemist’s Fire.** This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 4sqr, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a **DC 10 Dexterity** check to extinguish the flames.

## Potions
#### Healing Potion
_Potion, Common_
A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.

| Potion of ...    | Rarity    | Price  | HP      |
| ---------------- | --------- | ------ | ------- |
| Healing          | Common    | 50g    | 2d4+2   |
| Greater healing  | Uncommon  | 200g   | 4d4+4   |
| Superior healing | Rare      | 2000g  | 8d4+8   |
| Supreme healing  | Very rare | 20000g | 10d4+20 |


## Poisons
#### Basic Poison
_Potion, Common. 100g_

You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.



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
_Common (50gp)_

Esta corda de 15m é bastante fina, mas forte o suficiente para suportar até 1.500 kg. Com um comando (uma ação de movimento), a corda se move em qualquer direção (incluindo para cima) a 3m por rodada, fixando-se firmemente onde seu usuário desejar. Ela pode se desamarrar e voltar da mesma forma.

#### Garrafa da Fumaça Eterna
_Common (50g)_
Quando a tampa desta ânfora de metal é retirada, uma grande quantidade de fumaça é liberada, deixando toda a áera em 12m de raio obscura. A fumaça persiste até a garrafa ser tampada. Após isso, dissipa-se no fim da cena (ou após 4 rodadas, sob vento forte, ou 1 rodada, sob um vendaval).

#### Gema da Luminosidade.
*Common (50gp)*
Este cristal tem a aparência de um longo prisma. Com um comando (movimento), emite luz equivalente a uma tocha ou então um raio brilhante, que força uma criatura em alcance (6sqr) a passar em um teste de Fortitude ou ficar cega por 1d4 rodadas

#### Manto Élfico
*Uncommon (100gp-350gp)*
Indistinguível de um manto cinza comum. Entretanto, quando usado com o capuz cobrindo o rosto, fornece +2/+5 em Furtividade.

### Mochila de Carga (Bag of Holding)
*Uncommon (100gp-500gp)*
Este item, que parece uma simples mochila de pano, está na verdade ligado a um espaço interdimensional — fazendo com que seja maior por dentro do que por fora. Você pode guardar até 100 kg dentro de uma mochila de carga, mas ela pesará no máximo 5 kg. Se a mochila for rasgada, os objetos em seu interior são destruídos. Criaturas vivas colocadas no interior da mochila podem sobreviver até 10 minutos, mas depois disso ficarão sem ar.

### Chapéu do Estilo
*Common (50gp)*
Esse chapéu preto simples mas bem cuidado não parece fora do comum. Como ação quem estiver usando o chapéu pode tocar nele, e ele se transforma em qualquer tipo de chapéu ou adereço de usar na cabeça. Role um d20 ao colocar ou transformar o chapéu. Se tirar 10+, você tem +2 em rolagens de presença enquanto usar o chapéu. Se tirar 20, esse bônus dobra. (hidden until players roll 1: Se você tirar 1, o chapéu fica preso em você por 1 dia, você tem desvantagem em rolagens de presença e ele vira um fedora)

### Enciclopédia do Biólogo Sumido
_Common (50gp)_
Livro mágico de um antigo biólogo que morreu fazendo o que ele amava: catalogando criaturas poderosas e bizarras. Rolagens de Arcana/Natureza para identificar criaturas recebem +5 enquanto você tem esse livro aberto.



{{pageNumber,auto}}
\page
# Runes
You can enchant an item with runes to add a special effect to it. You create runes by rolling Arcana. Each rune has a number of uses, and after that it must be recharged with MP during a rest.

Rune effects:

| Name                 | Avg. Price | Max Charges | Recharge rate     | Effect                                                                                                                     |
| -------------------- | ---------- | ----------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Damage Type Change   | 40g        | 4           | 1PM per Charge    | (Movement, 1 Charge): change the damage type of a weapon to another physical type for the scene                            |
| Damage Add Elemental | 100g       | 2           | 1PM per 2 Charges | (Movement, 1-2 Charges): add 1d6 (+1d6 per charge spent) of the element of the rune to the weapon's damage for next attack |
| Elemental Reflect    | 80g        | 3           | 1PM per 3 Charges | (Reaction, 1 Charge): Deal 1d8 damage of the type back to the attacker                                                     | 


{{pageNumber,auto}}
\page
# Crafting

**IDEA:** Maybe steal pathfinder's idea of magic item levels and use it here for ingredient and roll CD.

basic rules:

needs 25% of the item's worth of ingredients

50gp worth of item/workweek. (increase to more gp/week at later levels.)

1 check per workweek

use tools. costs 500silver (-5 without tools)

## Crafting Roll
1 roll per workweek. if it takes multiple weeks you can roll again, but after 3 fails the item breaks and all materials are lost. fails can maybe add other adversities (build fail table).

The CD is defined by the item rarity.

#### Crafting roll CD by item rarity
| Item Rarity | CD  |
| ----------- | --- |
| Common      | 10  |
| Uncommon    | 15  |
| Rare        | 18  |
| Very rare   | 20  |
| Legendary   | 25  | 

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


#### MAGIC ITEM CRAFTING TIME AND COST
| Item Rarity | Workweeks\* | Cost\*      | 
| ----------- | ----------- | ----------- |
| Common      | 1           | 50 gp       |
| Uncommon    | 2           | 200 gp      |
| Rare        | 10          | 2,000 gp    |
| Very rare   | 25          | 20,000 gp   |
| Legendary   | 50          | 100, 000 gp |
\*Halved for a consumable item like a potion or scroll


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

## Learning a Spell from a Scroll
A spellcaster may attempt to learn the spell stored in the scroll, if they have that ability (All Casters have this ability, while Off-casters don't by default). The reader must already be able to learn spells from that circle (a level 1 caster can only learn scrolls that contain spells of first circle or cantrips).

To attempt it the reader must spend 4 hours reading the scroll for each tier. At the end of this study (that can happen over multiple sessions), the reader makes an Arcana (INT) check, with DC 14 + tier. If they succeed, the reader learns that spell, and adds it to their spell list.

## Creating Spell Scrolls
At the start of the crafting attempt, the spellcaster decides on what spell and what modifiers to use. The total MP cost of the spell (that the spellcaster should be able to cast) becomes the intended spell scroll's tier. To craft a spell scroll, the caster must have ready materials (special parchment, magic ink, etc.) equal to 2gp per MP cost of the spell (including all spell modifiers, that the crafter decides during the crafting process). They then spend 2 hours and 1MP per tier transcribing the spell. At the end of the process, they make an Arcana check (DC 10 + tier). If they succeed, the materials are expended and scroll is created. If they fail by 5 or more, the crafting materials are expended.

## Buying Spell Scrolls
In general, Spell Scrolls sold by merchants and other casters cost ~6gp per tier

OBS: maybe make it be different checks instead of all Arcana?


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

## Casting Spells

### Casting while wearing armor
Because of the mental focus and precise gestures required for spellcasting, you must be proficient with the armor you are wearing to cast a spell. You are otherwise too distracted and physically hampered by your armor for spellcasting.

### Concentration
Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. If a spell must be maintained with concentration, that fact appears in its Duration entry, and the spell specifies how long you can concentrate on it. You can end concentration at any time (no action required).

- **Casting another spell that requires concentration**. You lose concentration on a spell if you cast another spell that requires concentration. You can’t concentrate on two spells at once.

- **Taking damage**. Whenever you take damage while you are concentrating on a spell, you must make a Constituition saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher. If you take damage from multiple sources, such as an arrow and a dragon’s breath, you make a separate saving throw for each source of damage.

- **Being incapacitated or killed**. You lose concentration on a spell if you are incapacitated or if you die.

## Spell levels
Spells are divided into 9 levels and cantrips (0-level spells).

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

It's important to point out that you're not tied to using only this to create a spell list. Are you mostly fine with using tags to define it, but also REALLY want characters from that class to be able to use Leomund's Tiny Hut? Just add it to the list, ignoring the tags. Don't want a class to have access to one specific spell from a tag you're allowing them? Remove that single spell. Do you just want to manually pick spells? Have at it. This tag system was made to aid the designer in speeding up {{pageNumber,auto}}
\page
 the process of making a spell list, not to constrain your ideas in any way

## Flavor
TODO TALK ABOUT REFLAVORING AND STUFF. USE PLANTOMANCER AS EXAMPLE

------ considering ------
### Level 1
- dissonant whispers
- faerie fire
- feather fall
- sleep
- speak with animals
- entangle
- fog cloud
- jump
- thunderwave
- compelled duel?
- command
- detect magic?
- heroism
- chromatic orb
- witch bolt
- armor of agathis
- arms of hadar
- hellish rebuke
- burning hands
- charm person
- grease
- jump
- mage armor
- magic missile
- ray of sickness
### Level 2
- calm emotions
- cloud of daggers
- crown of madness]
- heat metal
- invisibility
- lesser restoration
- locate object
- see invisibility
- shatter
- silence
- sugestion
- blindness/deafness
- calm emotions
- continual flame
- enhance ability
- hold person
- animal messenger
- bark skin
- beast sense
- dark vision
- locate animals or plants
- moonbeam
- pass without a trace
- spike growth
- magic weapon (compare com o arma mágica do T20)
- crescer diminuir do t20
- levitate
- scorching ray
- spider climb
- web
- crescer/reduzir do T20
- flaming sphere
- magic mouth
- melf's acid arrow
- misty step
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

{{pageNumber,auto}}
\page
# Spell Tags

## Tags

list of tags:
OBS: nothing stops spells from overlapping groups (e.g.: a spell can be wild, negative and arcane at once).
OBS2: it's possible for a spell to belong to a group without belonging to one of it's sub-tags. ex: Mage hand isn't ilusion, divination or enchantment, but it's trickery

### Considering:

- maybe remove summon from wild group. only do it after a concrete example shows up
- maybe separate curse into 2 different tags if the need arises
- remove physical tags. hasn't been an example yet of it being useful
- maybe add a tag specifically for self combat buffs?

### Tag descriptions

1. arcane: (general magic stuff. grease, prestidigitation, tiny hut and shit)

by nature:

- #wild
  - #plant
  - #feral
  - #summon
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
  - #warmagic (self buffs, weapon attacks. stuff that a fighter would like)
  - #creation
- #trickery
  - #ilusion
  - #divination (also all communication stuff)
  - #enchantment
- #thaumaturgy (general attack stuff + defense and time magic)
  - #chronomancy
  - #evocation
  - #abjuration
- #energy (fire+ice+lighning)
  - #fire
  - #lighning
  - #cold
- #nature (does physical damage)
  - #wind
  - #water
  - #earth
- #decay
  - #poison
  - #acid
  - #necrotic
- #physical (maybe not needed)
  - #slashing
  - #bludgeoning
  - #piercing


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
- [[Guidance]]
- [[Magic Stone]]
- [[Poison Spray]]
- [[Primal Savagery]]
- [[Thorn Whip]]
- [[Toll the Dead]]

### 1st Circle
- [[Abençoar Alimentos]]
- [[Animal Friendship]]
- [[Arma Mágica]]
- [[Armor of Agathys]]
- [[Bane]]
- [[Bless]]
- [[Burning Hands]]
- [[Bênção]]
- [[Caminhos da Natureza]]
- [[Canhão de Ervilha]]
- [[Catapult]]
- [[Chaos Bolt]]
- [[Concentração de Combate]]
- [[Controlar Plantas]]
- [[Curar Ferimentos]]
- [[Despedaçar]]
- [[Detect Poison and Disease]]
- [[Detectar Ameaças]]
- [[Earth Tremor]]
- [[Enfeitiçar]]
- [[Entangle]]
- [[Escudo]]
- [[Escuridão]]
- [[Explosão de chamas]]
- [[False Life]]
- [[Feather Fall]]
- [[Fog Cloud]]
- [[Goodberry]]
- [[Guiding Bolt]]
- [[Hail of Thorns]]
- [[Healing Word]]
- [[Imagem Espelhada]]
- [[Infligir Ferimentos]]
- [[Luz]]
- [[Mage Hand]]
- [[Perdição]]
- [[Primor Atlético]]
- [[Ray of Sickness]]
- [[Sleep]]
- [[Snare]]
- [[Teia]]
- [[Thunderwave]]
- [[Toque Chocante]]
- [[Tranquilidade]]
- [[Área Escorregadia]]

### 2nd Circle
- [[Aid]]
- [[Barkskin]]
- [[Earthbind]]
- [[Enhance Ability]]
- [[Enlarge Reduce]]
- [[Lesser Restoration]]
- [[Maximilian's Earthen Grasp]]
- [[Prayer of Healing]]
- [[Ray of Enfeeblement]]
- [[Web]]

### 3rd Circle
- [[Campo de Força]]
- [[Camuflagem ilusória]]
- [[Flecha Ácida]]
- [[Físico Divino]]
- [[Invisibilidade]]
- [[Life Transference]]
- [[Mass Healing Word]]
- [[Oração]]
- [[Raio Solar]]
- [[Relâmpago]]
- [[Revivify]]
- [[Soco de Arsenal]]
- [[Sopro das Uivantes]]
- [[Toque Vampírico]]

### 5th Circle
- [[Contagion]]
- [[Dawn]]
- [[Flame Strike]]
- [[Greater Restoration]]
- [[Heroísmo]]
- [[Holy Weapon]]
- [[Insect Plague]]
- [[Mass Cure Wounds]]
- [[Pele de Pedra]]
- [[Potência Divina]]
- [[Sopro da Salvação]]
- [[Transformação de Guerra]]

### 6th Circle
- [[Blade Barrier]]
- [[Harm]]
- [[Heal]]

### 7th Circle
- [[Desintegrar]]
- [[Fire Storm]]
- [[Manto do Cruzado]]
- [[Regenerate]]

### -1th Circle
- [[Arms of Hadar]]
- [[Beast Bond]]
- [[Calm Emotions]]
- [[Cause Fear]]
- [[Command]]
- [[Control Flames]]
- [[Create Bonfire]]
- [[Crown of Madness]]
- [[Darkvision]]
- [[Divine Favor]]
- [[Eldritch Blast]]
- [[Enthrall]]
- [[Fire Bolt]]
- [[Frostbite]]
- [[Green Flame Blade]]
- [[Gust]]
- [[Healing Spirit]]
- [[Hellish Rebuke]]
- [[Hold Person]]
- [[Ice Knife]]
- [[Infestation]]
- [[Jump]]
- [[Levitate]]
- [[Lightning Lure]]
- [[Longstrider]]
- [[Mage Armor]]
- [[Magic Missile]]
- [[Message]]
- [[Minor Ilusion]]
- [[Pass Without a Trace]]
- [[Ray of Frost]]
- [[Resistance]]
- [[Sanctuary]]
- [[Searing Smite]]
- [[See Invisibilityt]]
- [[Shadow Blade]]
- [[Shape Water]]
- [[Shatter]]
- [[Shillelagh]]
- [[Silent Image]]
- [[Snowball Swarm]]
- [[Spider Climb]]
- [[Spike Growth]]
- [[Sugestion]]
- [[Sword Burst]]
- [[Tasha's Hideous Laughter]]
- [[Thunderclap]]
- [[Thunderous Smite]]
- [[Vicious Mockery]]
- [[Warding Bond]]
- [[Warding Wind]]
- [[Witch Bolt]]
- [[Word of Radiance]]
- [[Zephyr Strike]]

{{pageNumber,auto}}
\page
# Spells
. Here is a list of all spells, sorted alphabetically
### Abençoar Alimentos
  <div class="spell-tags">holy sacred plant no-wild</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** alimento para 1 criatura;
- **Duração:** cena..

___
Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia. Truque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido.

- **+1 PM:** aumenta o número de alvos em +1.
- **+1 PM:** muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.

### Acid Splash
  <div class="spell-tags">acid decay evocation thaumaturgy</div>

*Cantrip*
- **Execução:** padrão.;
- **Alcance:** 9m (6 quadrados de 1,5m).;
- **Alvo:** 1 criatura.;
- **Duração:** instantânea..

___
You hurl a bubble of acid.  
Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.  

- **+1 PM:** Aumenta o dano em 1d6 (limitado pelo círculo máximo de magia que você tem).
- **+3 PM:** Muda o alcance para 18m.


### Aid
  <div class="spell-tags">boost sacred</div>

*2nd Circle*
- **Execução:** 1 Action;
- **Alcance:** 30 feet;
- **Duração:** 8 hours.

___
Your spell bolsters your allies with toughness and resolve.
Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration.

- **+3 PM:** aumenta o efeito em 5.


### Animal Friendship
  <div class="spell-tags"></div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 12sqr;
- **Alvo:** 1 criatura;
- **Duração:** 24 horas..

___
This spell lets you convince a beast that you mean it no harm.  
Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spell ends.

- **+2PM:** you can affect one additional beast for each slot level above 1st.

{{pageNumber,auto}}
\page
### Área Escorregadia
  <div class="spell-tags">arcane creation</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** quadrado de 3m ou 1 objeto;
- **Duração:** cena;
- **Resistência:** Dex.

___
Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10).
Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.

- **+1 PM:** aumenta a área em +1 quadrado de 1,5m.
- **+2 PM:** muda a CD dos testes para 15.
- **+5 PM:** muda a CD dos testes para 20.


### Arma Mágica
  <div class="spell-tags">arcane transmutation boost sacred warmagic</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Duração:** cena.

___
A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica. Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque.

- **+2 PM:** aumenta o bônus em +1.
- **+2 PM:** a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada.


### Armor of Agathys
  <div class="spell-tags">cold energy abjuration warmagic arcane thaumaturgy</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Duração:** cena..

___
A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear.  

You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage. 

- **+1PM:** aumenta os PV temporários em 5
- **+1PM:** aumenta o dano em 5

### Arms of Hadar
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Arms of Hadar

Conjuration

Level: **1**  
Casting time: **1 Action**  
Range: **Self (10-foot radius)**  
Components: **V, S**  
Duration: **Instantaneous**  

---

You invoke the power of Hadar, the Dark Hunger.  
Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can’t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect. 

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.

---

Page: 215 Players Handbook

---

A [Warlock](https://www.dnd-spells.com/spells/class/Warlock), spell
{{pageNumber,auto}}
\page
### Bane
  <div class="spell-tags">curse occult</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** 30 feet;
- **Duração:** Concentration.

___
Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.


### Barkskin
  <div class="spell-tags">plant wild boost sacred abjuration no-thaumaturgy arcane warmagic</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
You touch a willing creature. Until the spell ends, the target’s skin has a rough, bark-like appearance, and the target’s Defense can’t be less than 16, regardless of what kind of armor it is wearing.

- **+2PM:** increase the minimum Defense by +1
- **+3PM:** increase the number of targets by 1

### Beast Bond
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

{{pageNumber,auto}}
\page
# Beast Bond

A Elemental Evil spell

Divination

Level: **1**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (a bit of fur wrapped in a cloth)**  
Duration: **Concentration, up to 10 minutes**  

---

You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast’s Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.

---

Page: 15 from EE Players Companion

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), spell

### Bênção
  <div class="spell-tags">boost sacred</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** criaturas escolhidas;
- **Duração:** concentração.

___
Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.

- **+1 PM:** muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo pela duração da magia.
- **+2 PM:** aumenta os bônus em +1

{{pageNumber,auto}}
\page
### Blade Barrier
  <div class="spell-tags"></div>

*6th Circle*
- **Execução:** 1 Action;
- **Alcance:** 90 feet;
- **Duração:** Concentration.

___
You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.

When a creature enters the wall’s area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 5d10 slashing damage. On a successful save, the creature takes half as much damage.

### Blade Ward
  <div class="spell-tags">abjuration warmagic thaumaturgy arcane</div>

*Cantrip*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Duração:** 1 rodada..

___
You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.


### Bless
  <div class="spell-tags">boost sacred</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** 30 feet;
- **Duração:** cena.

___
You bless up to three creatures of your choice within range. Each target gains a d4. Whenever a target makes an attack roll or a saving throw before the spell ends, the target spend that d4 and add the number rolled to the attack roll or saving throw.

- **+2 PM:** aumenta o número de alvos em 1
- **+2 PM:** aumenta o número de dados de auxílio em +1.
- **+3 PM:** muda o tipo dos dados de auxílio para d6.
- **+4 PM:** muda o tipo dos dados de auxílio para d8. Requer 2º círculo


### Booming Blade
  <div class="spell-tags">warmagic wind trickery curse occult arcane nature</div>

*Cantrip*
- **Execução:** padrão;
- **Alvo:** pessoal;
- **Duração:** imediata..

___
As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails.  
On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves be- fore then, it immediately takes 1d8 thunder damage, and the spell ends.  
This spell's damage increases when you reach higher levels. 

{{pageNumber,auto}}
\page
### Burning Hands
  <div class="spell-tags">fire energy evocation thaumaturgy</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** cone (3sqr);
- **Duração:** imediato;
- **Resistência:** DEX.

___
As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.  

The fire ignites any flammable objects in the area that aren’t being worn or carried. 

- **+1 PM:** dano +1d6.
- **+2PM:** aumenta o tamanho do cone em +1sqr


### Calm Emotions
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Calm Emotions

Enchantment

Level: **2**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

You attempt to suppress strong emotions in a group of people.  
Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.  
  
Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.

---

Page: 221 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Cleric](https://www.dnd-spells.com/spells/class/Cleric), spell

### Caminhos da Natureza
  <div class="spell-tags">wild summon enchantment trickery</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Duração:** 1 dia..

___
Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.

- **+0 PM**: muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.
- **+1 PM**: além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.
- **+2 PM**: aumenta o bônus de deslocamento em +3m.

### Campo de Força
  <div class="spell-tags">abjuration thaumaturgy arcane boost sacred warmagic</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** concentração..

___
Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano de corte, impacto ou perfuração.

- **+1 PM:** muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe resistência 30 contra o próximo dano que sofrer até o fim do turno atual.
- **+1 PM:** aumenta os PV temporários em +5 ou a resistência a dano em +10.
{{pageNumber,auto}}
\page
### Camuflagem ilusória
  <div class="spell-tags">ilusion trickery</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem.

- **+3 PM:** a imagem do alvo fica mais distorcida, oferecendo camuflagem total.
- **+7 PM:** muda o alcance para curto e o alvo para criaturas escolhidas. Requer 7º círculo.

### Canhão de Ervilha
  <div class="spell-tags">summon plant wild</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** 1 criatura ou objeto mundano Pequeno;
- **Duração:** instantânea;
- **Resistência:** Fortitude parcial ou Reflexos anula..

___
Você convoca uma planta mágica, que cospe ervilhas no seu alvo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (Fortitude reduz o dano à metade e evita o atordoamento). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído (Reflexos anula).

- **+2 PM:** aumenta o dano em +1d8+2.
- **+2 PM:** muda o alvo para objeto mundano Médio. Requer 2º círculo.
- **+5 PM:** muda o alvo para objeto mundano Grande. Requer 3º círculo.
- **+9 PM:** muda o alvo para objeto mundano Enorme. Requer 4º círculo.
- **+14 PM:** muda o alvo para objeto mundano Colossal. Requer 5º círculo.

### Catapult
  <div class="spell-tags">transmutation earth nature arcane</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 20sqr;
- **Alvo:** 1 criatura;
- **Duração:** imediata..

___
Choose one object weighing 1 to 5 pounds within range that isn’t being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.  

- **+2PM:** aumenta o dano em +1d8, e o peso máximo do objeto em 5lb


### Cause Fear
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Cause Fear

A spell from Xanathar's Guide To Everything

Necromancy

Level: **1**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V**  
Duration: **Concentration, up to 1 minute**  

---

You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above lst. The creatures must be within 30 feet of each other when you target them.

---

Page: 151 from Xanathar's Guide To Everything

---

A [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

---

[](https://www.dnd-spells.com/auth/register)
{{pageNumber,auto}}
\page
### Chaos Bolt
  <div class="spell-tags">occult unholy evocation energy fire lighning cold thaumaturgy</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 12sqr;
- **Alvo:** 1 criatura;
- **Duração:** imediato..

___
You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attacks damage type, as shown below.  
d8 / Damage Type  
1 / Acid  
2 / Cold  
3 / Fire  
4 / Force  
5 / Lightning  
6 / Poison  
7 / Psychic  
8 / Thunder  
If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again. A creature can be targeted only once by each casting of this spell.

- **+1PM:** aumenta o dano em 1d6


### Chill Touch
  <div class="spell-tags">cold energy unholy occult</div>

*Cantrip*
- **Execução:** padrão;
- **Alcance:** 18m (12 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
You create a ghostly, skeletal hand in the space of a creature within range.  
Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d6 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn..

- **+2 PM:** Increase the damage by 1d6.


### Command
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Command

Enchantment

Level: **1**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V**  
Duration: **1 round**  

---

You speak a one-word command to a creature you can see within range.  
The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn’t understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can’t follow your command, the spell ends.  
**Approach** The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.  
**Drop** The target drops whatever it is holding and then ends its turn.  
**Flee** The target spends its turn moving away from you by the fastest available means.  
**Grovel** The target falls prone and then ends its turn.  
**Halt** The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air. 

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them

### Concentração de Combate
  <div class="spell-tags">boost no-sacred chronomancy thaumaturgy warmagic arcane</div>

*1st Circle*
- **Execução:** livre;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** 1 rodada..

___
Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, você rola dois dados e usa o melhor resultado.

- **+2 PM:** muda a execução para padrão e a duração para cena. Requer 3º círculo.
- **+5 PM:** além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 5º círculo.

{{pageNumber,auto}}
\page
### Contagion
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Action;
- **Alcance:** Touch;
- **Duração:** 7 days.

___
DESCRIPTION_NOT_FOUND

### Control Flames
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.


{{pageNumber,auto}}
\page
#   
Create Bonfire

A Elemental Evil spell

Conjuration

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S**  
Duration: **instantaneous or 1hour**  

---

You choose a nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:  
- You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.  
- You instantaneously extinguish the flames within the cube.  
- You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.  
- You cause simple shapes — such as the vague form of a creature, an inanimate object, or a location — to appear within the flames and animate as you like. The shapes last for 1 hour.  
If you cast this spell multiple times, you can have up to three non-instantaneous

---

Page: 16 from EE Players Companion

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Controlar Plantas
  <div class="spell-tags">plant wild enchantment trickery</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto.

___
DESCRIPTION_NOT_FOUND

### Create Bonfire
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

{{pageNumber,auto}}
\page
#   
Create Bonfire

A Elemental Evil spell

Conjuration

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire’s space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire’s space for the first time on a turn or ends its turn there.  
The bonfire ignites flammable objects in its area that aren’t being worn or carried.  
The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).

---

Page: 16 from EE Players Companion
{{pageNumber,auto}}
\page
### Crown of Madness
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Crown of Madness

Enchantment

Level: **2**  
Casting time: **1 Action**  
Range: **120 feet**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration.  
While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.  
  
The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach.  
  
On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.

---

Page: 229 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

---

[](https://www.dnd-spells.com/auth/register)

### Curar Ferimentos
  <div class="spell-tags">recovery sacred</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** instantânea..

___
Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. Como mortos-vivos usam energia egativa, esta magia causa dano de luz a eles (Vontade reduz à metade). Curar Ferimentos anula Infligir Ferimentos. Truque: em vez do normal, estabiliza uma criatura. Truque: muda o alvo para 1 morto- vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).

- **+1 PM:** aumenta a cura em +1d8+1.
- **+2 PM:** também remove uma condição de adiga do alvo.
- **+2 PM:** muda o alcance para curto.
- **+5 PM:** muda o alcance para curto e o alvo para criaturas escolhidas.


### Darkvision
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Darkvision

Transmutation

Level: **2**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (either a pinch of dried carrot or an agate)**  
Duration: **8 hours**  

---

You touch a willing creature to grant it the ability to see in the dark.  
For the duration, that creature has darkvision out to a range of 60 feet.

---

Page: 230 Players Handbook

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), spell

### Dawn
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Concentration.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Desintegrar
  <div class="spell-tags"></div>

*7th Circle*
- **Execução:** padrão;
- **Alcance:** 20sqr;
- **Alvo:** 1 criatura ou objeto;
- **Duração:** instantânea;
- **Resistência:** Fortitude parcial..

___
Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do  lvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó. 

- **+4 PM:** aumenta o dano total em +2d12 e o dano mínimo em +1d12.


### Despedaçar
  <div class="spell-tags">wind nature</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** 1 criatura ou objeto mundano Pequeno;
- **Duração:** instantânea;
- **Resistência:** Fortitude parcial ou Reflexos anula..

___
DESCRIPTION_NOT_FOUND

### Detect Poison and Disease
  <div class="spell-tags">sacred holy recovery</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** Self;
- **Duração:** 10 minutes.

___
For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.

### Detectar Ameaças
  <div class="spell-tags">divination feral wild trickery arcane warmagic</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Duração:** instantânea..

___
Você percebe a presença e a localização de criaturas inamistosas ou hostis na área, mesmo através de barreiras físicas.

- **+0 PM:** em vez de criaturas, você percebe a presença e localização de venenos.
- **+1 PM:** muda a execução para ação completa. Você descobre também a raça ou espécie e o poder das criaturas (determinado pela aura delas). Criaturas de 1º a 6º nível geram uma aura tênue, criaturas de 7º a 12º nível geram uma aura moderada e criaturas de 13º ao 20º nível geram uma aura poderosa. Criaturas acima do 20º nível geram uma aura avassaladora.
- **+2 PM:** em vez de criaturas, você percebe a presença e localização de armadilhas.
- **+5 PM:** muda a área para esfera de 30m de raio. Requer 3º círculo.
{{pageNumber,auto}}
\page
### Divine Favor
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Divine Favor

Evocation

Level: **1**  
Casting time: **1 Bonus Action**  
Range: **Self**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal and extra 1d4 radiant damage on a hit.

---

Page: 234 Players Handbook

---

A [Paladin](https://www.dnd-spells.com/spells/class/Paladin), spell

### Earth Tremor
  <div class="spell-tags">earth nature transmutation arcane</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** Self (2sqr radius);
- **Duração:** Instantaneous.

___
You cause a tremor in the ground in a 2sqr radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.

- **+2PM:** increase the damage by +1d6
- **+3PM:** increase the radius by 1sqr

### Earthbind
  <div class="spell-tags">earth nature wind enchantment curse occult trickery</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** 30sqr;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw or its flying speed (if any) is reduced to 0 feet for the spell’s duration. An airborne creature affected by this spell descends at 60 feet per round until it reaches the ground or the spell ends.


### Eldritch Blast
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

Evocation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **120 feet**  
Components: **V, S**  
Duration: **Instantaneous**  

---

A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. 

#### At higher level

The spell creates more than one beam when you reach higher levels:  
Two beams at 5th level  
Three beams at 11th level  
Four beams at 17th level.  
You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.

---

Page: 237 Players Handbook
{{pageNumber,auto}}
\page
### Enfeitiçar
  <div class="spell-tags">enchantment trickery</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** 1 humanoide;
- **Duração:** concentração;
- **Resistência:** Vontade anula.

___
DESCRIPTION_NOT_FOUND

### Enhance Ability
  <div class="spell-tags">transmutation abjuration warmagic boost feral sacred wild arcane thaumaturgy</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects: the target gains the effect until the spell ends.  
- Bear’s Endurance. The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.  
- Bull’s Strength. The target has advantage on Strength checks, and his or her carrying capacity doubles.  
- Cat’s Grace. The target has advantage on Dexterity checks. It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated.  
- Eagle’s Splendor. The target has advantage on Charisma checks.  
- Fox’s Cunning. The target has advantage on Intelligence checks.  
- Owl’s Wisdom. The target has advantage on Wisdom checks.  

- **+2PM:** aumente o número de alvos em 1

### Enlarge Reduce
  <div class="spell-tags">transmutation boost sacred warmagic warmagic arcane</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
TODO: comparar com a versão do t20 e decidir qual usar

You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.  
  
If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.  
  
**Enlarge**   
The target’s size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category – from Medium to Large, for example. If there isn’t enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target’s weapons also grow to match its new size. While these weapons are enlarged, the target’s attack with them deal 1d4 extra damage.  
  
**Reduce**   
The target’s size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category – from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target’s weapons also shrink to match its new size. While these weapons are reduced, the target’s attacks with them deal 1d4 less damage (this can’t reduce the damage below 1).


### Entangle
  <div class="spell-tags">plant wild trickery</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 10sqr ;
- **Alvo:** quadrado de lado 4sqr com centro no ponto escolhido;
- **Duração:** concentração.;
- **Resistência:** Força.

___
Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area
into difficult terrain.

A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.

When the spell ends, the conjured plants wilt away.

- **+2 PM:** Aumenta a CD em 1.
- **+2 PM:** Aumenta o tamanho do quadrado em 1sqr.

{{pageNumber,auto}}
\page
### Enthrall
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Enthrall

Enchantment

Level: **2**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S**  
Duration: **1 minute**  

---

You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can’t be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak.

---

Page: 238 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), spell

### Escudo
  <div class="spell-tags">boost sacred abjuration arcane thaumaturgy warmagic</div>

*1st Circle*
- **Execução:** reação;
- **Alcance:** pessoal;
- **Duração:** 1 turno..

___
Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +5 na Defesa. 

- **+1PM:** muda o alcance para 6sqr, o alvo para 1 criatura e diminui o bonus na defesa em 2
- **+1 PM:** muda a execução para ação padrão, o alcance para toque, a duração para cena e diminui o bonus na defesa em 3. 
- **+1 PM:** também fornece ao alvo camuflagem contra ataques à distância. 
- **+2 PM:** aumenta o bônus na Defesa em +1.
- **+2 PM:** muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se a qualquer momento o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo. 
- **+3 PM:** muda a duração para 1 dia. Requer 2º círculo.


### Escuridão
  <div class="spell-tags">occult unholy trickery ilusion</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** 1 objeto;
- **Duração:** cena;
- **Resistência:** Vontade anula (veja texto)..

___
O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem amuflagem por escuridão. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser uardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. e lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. scuridão anula Luz.

- **+1 PM:** aumenta a área da escuridão em +1,5m de raio.
- **+2 PM:** muda o efeito para fornecer camuflagem otal por escuridão.
- **+2 PM:** muda a duração para 1 dia.
- **+2 PM:** muda o alvo para 1 criatura e a resistência para Fortitude arcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego or 1 rodada. Requer 3º círculo.
- **+5 PM:** muda o alcance para pessoal e o alvo para você. Em vez do normal, você é oberto or sombras, recebendo +10 em testes de Furtividade e camuflagem por escuridão. Requer 3º círculo.


### Explosão de chamas
  <div class="spell-tags">fire energy evocation thaumaturgy</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 4sqr;
- **Duração:** instantânea;
- **Resistência:** Reflexos reduz à metade..

___
Um leque de chamas irrompe de suas mãos,  ausando 2d6 pontos de dano de fogo às criaturas na área. Truque: muda o alcance para curto, a área para alvo de 1  bjeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela,  ocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.

- **+1 PM:** aumenta o  ano em +1d6.
- **+1 PM:** muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar,  ica em chamas (veja Condições, no Apêndice). 


{{pageNumber,auto}}
\page
### False Life
  <div class="spell-tags">occult abjuration necromancy thaumaturgy arcane</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Duração:** cena..

___
Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration. 

- **+1PM:** aumenta +1d4 nos PV temporários

### Feather Fall
  <div class="spell-tags">transmutation wind chronomancy arcane no-thaumaturgy nature</div>

*1st Circle*
- **Execução:** reação;
- **Alcance:** 12sqr;
- **Alvo:** 1-5 criaturas;
- **Duração:** 1 minuto..

___
Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.


### Fire Bolt
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

Evocation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **120 feet**  
Components: **V, S**  
Duration: **Instantaneous**  

---

You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.

#### At higher level

This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).

### Fire Storm
  <div class="spell-tags"></div>

*7th Circle*
- **Execução:** 1 Action;
- **Alcance:** 150 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Físico Divino
  <div class="spell-tags">boost sacred transmutation arcane warmagic</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
O alvo se torna uma versão mais poderosa de si  esmo. O alvo recebe +4 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.

- **+3 PM:** em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 5º círculo.
- **+7 PM:** muda o alcance para  urto e o alvo para criaturas escolhidas.
- **+7 PM:** aumenta o bônus em +2. Requer 7º círculo.

### Flame Strike
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND

### Flecha Ácida
  <div class="spell-tags">decay acid evocation arcane curse occult thaumaturgy creation arcane</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** 20sqr;
- **Alvo:** 1 criatura ou objeto;
- **Duração:** instantânea;
- **Resistência:** Reflexos parcial..

___
Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo ambém fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de ácido no início de seus turnos. Se lançada contra um objeto livre (que não esteja em posse de uma criatura) a agia causa dano dobrado e ignora a RD do objeto.

- **+1 PM:** além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item ode ser consertado, restaurando seu bônus.
- **+2 PM:** aumenta a redução na Defesa em 1.
- **+2 PM:** aumenta o dano inicial e o dano por rodada em +1d6.


### Fog Cloud
  <div class="spell-tags">unholy occult summon wild creation arcane wind nature</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** 20sqr;
- **Duração:** Concentration.

___
You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured, It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.
{{pageNumber,auto}}
\page
### Frostbite
  <div class="spell-tags"></div>

*-1th Circle*
.

___
DESCRIPTION_NOT_FOUND

### Goodberry
  <div class="spell-tags">plant wild summon</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Duração:** instantâneo..

___
Up to 10 berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.

- **+1 PM:** Increase the number of berries by 2.


### Greater Restoration
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Action;
- **Alcance:** Touch;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND

### Green Flame Blade
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
  
Level: **Cantrip**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.
{{pageNumber,auto}}
\page
### Guidance
  <div class="spell-tags"></div>

*Cantrip*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
  
Level: **Cantrip**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.

### Guiding Bolt
  <div class="spell-tags">holy sacred fire energy warmagic arcane</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** 1 round.

___
A flash of light streaks toward a creature of your choice within range.
Make a ranged spell attack against the target. On a hit, the target takes 2d6 fire damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.

- **+1 PM:** aumenta o dano em +1d6
- **+3 PM:** o alvo faz um teste de XXXXX. se falhar, fica cego por 1 turno.


### Gust
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
A Elemental Evil spell

Transmutation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **V, S**  
Duration: **Instantaneous**  

---

You seize the air and compel it to create one of the following effects at a point you can see within range:  
• One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.  
• You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn’t pushed with enough force to cause damage.  
• You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.

---

Page: 19 from EE Players Companion

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Hail of Thorns
  <div class="spell-tags">warmagic plant wild no-arcane</div>

*1st Circle*
- **Execução:** livre (durante um ataque a distância);
- **Alcance:** pessoal;
- **Duração:** imediata..

___
The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.

- **+2PM:** aumenta o dano em 1d10
{{pageNumber,auto}}
\page
### Harm
  <div class="spell-tags"></div>

*6th Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND

### Heal
  <div class="spell-tags"></div>

*6th Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND

### Healing Spirit
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Healing Spirit

A spell from Xanathar's Guide To Everything

Conjuration

Level: **2**  
Casting time: **1 Bonus Action**  
Range: **60 feet**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice). Until the spell ends, whenever you or a creature you can see moves into the spirits space for the first time on a turn or starts its turn there, you can cause the spirit to restore ld6 hit points to that creature (no action required). The spirit can’t heal constructs or undead. As a bonus action on your turn, you can move the Spirit up to 30 feet to a space you can see.

#### At higher level

When you cast this spell using a spell slot of 3rd level or higher, the healing increases 1d6 for each slot level above 2nd.

---

Page: 157 from Xanathar's Guide To Everything

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), spell

### Healing Word
  <div class="spell-tags">recovery sacred wind nature</div>

*1st Circle*
- **Execução:** 1 Movement Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

- **+2 PM:** aumenta a cura em 1d4
- **+3 PM:** muda o casting para reação

{{pageNumber,auto}}
\page
### Hellish Rebuke
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Hellish Rebuke

Evocation

Level: **1**  
Casting time: **Special**  
Range: **60 feet**  
Components: **V, S**  
Duration: **Instantaneous**  

---

Reaction: you are being damaged by a creature within 60 feet of you that you can see.  
  
You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.

---

Page: 250 Players Handbook

---

A [Warlock](https://www.dnd-spells.com/spells/class/Warlock), spell

### Heroísmo
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe +4 em testes de ataque e rolagens de dano contra inimigos com ND maior que seu nível.

- **+4 PM:** muda o bônus para +6.

### Hold Person
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Hold Person

Enchantment

Level: **2**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S, M (a small, straight piece of iron)**  
Duration: **Concentration, up to 1 minute**  

---

Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.

#### At higher level

When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.

---

Page: 251 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Cleric](https://www.dnd-spells.com/spells/class/Cleric), [Druid](https://www.dnd-spells.com/spells/class/Druid), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Holy Weapon
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Movement Action;
- **Alcance:** Touch;
- **Duração:** Concentration.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Ice Knife
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Ice Knife

A Elemental Evil spell

Conjuration

Level: **1**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **S, M**  
Duration: **Instantaneous**  

---

!!!!! add high crit

(a drop of water or piece of ice)  
You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage.  
At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.

---

Page: 19 from EE Players Companion

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Imagem Espelhada
  <div class="spell-tags">ilusion trickery abjuration thaumaturgy</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** cena..

___
Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).

- **+2 PM:** aumenta o número de cópias em +1 (e o bônus na Defesa em +2).
- **+2 PM:** além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 3º círculo. 

### Infestation
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Infestation

A spell from Xanathar's Guide To Everything

Conjuration

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **V, S, M (a living flea)**  
Duration: **Instantaneous**  

---

You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1., north; 2, south; 3, east; or 4, west. This movement doesn’t provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.  
The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).

---

Page: 158 from Xanathar's Guide To Everything

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Infligir Ferimentos
  <div class="spell-tags">unholy occult necrotic decay</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** instantânea;
- **Resistência:** Fortitude reduz à metade..

___
Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano necrótico (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos.

- **+1 PM:** além do normal, se falhar na resistência, o alvo fica fraco pela cena.
- **+2 PM:** aumenta o dano em 1d8+1.
- **+2 PM:** como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia.
- **+5 PM:** muda o alcance para curto e o alvo para criaturas escolhidas.

{{pageNumber,auto}}
\page
### Insect Plague
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Action;
- **Alcance:** 300 feet;
- **Duração:** Concentration.

___
DESCRIPTION_NOT_FOUND

### Invisibilidade
  <div class="spell-tags">ilusion trickery</div>

*3rd Circle*
- **Execução:** livre;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** 1 rodada..

___
O alvo fica invisível, incluindo seu equipamento. Ele recebe camuflagem total e +20 em testes de Furtividade. Como o normal, criaturas que não possam vê-lo ficam desprevenidas contra seus ataques. A magia termina se o alvo faz um ataque ou usa uma habilidade hostil. Ações contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque. Objetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Uma luz transportada pelo alvo nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.

- **+1 PM:** muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou 1 objeto.
- **+3 PM:** muda a duração para cena. Requer 5º círculo.
- **+3 PM:** muda a duração para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a até 3m dele se tornam invisíveis, como no efeito normal da magia (ainda ficam visíveis caso façam uma ação hostial). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica visível. Requer 5º círculo.
- **+7 PM:** muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça um ataque ou use uma habilidade ofensiva. Requer 7º círculo.

### Jump
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Jump

Transmutation

Level: **1**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (a grasshopper’s hind leg)**  
Duration: **1 minute**  

---

You touch a creature. The creature’s jump distance is tripled until the spell ends.

---

Page: 254 Players Handbook

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Lesser Restoration
  <div class="spell-tags">holy recovery sacred holy</div>

*2nd Circle*
- **Execução:** 1 Action;
- **Alcance:** Touch;
- **Duração:** Instantaneous.

___
You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.

{{pageNumber,auto}}
\page
### Levitate
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

{{pageNumber,auto}}
\page
# Levitate

Transmutation

Level: **2**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)**  
Duration: **Concentration, up to 10 minutes**  

---

One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.  
  
The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target’s altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell’s range.  
  
When the spell ends, the target floats gently to the ground if it is still aloft.

---

Page: 255 Players Handbook

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Life Transference
  <div class="spell-tags">unholy occult feral wild necromancy necrotic decay recovery no-sacred</div>

*3rd Circle*
- **Execução:** 1 Action;
- **Alcance:** 30 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND

### Lightning Lure
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

{{pageNumber,auto}}
\page
# Lightning Lure

A spell from Sword Coast Adventure's Guide

Evocation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **15 feet**  
Components: **V**  
Duration: **Instantaneous**  

---

You create a lash of lightning energy that strikes at one creature of your choice that you can see within range.  
The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you. 

#### At higher level

This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).

---

Page: 143 from Sword Coast Adventure's Guide

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Longstrider
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

{{pageNumber,auto}}
\page
# Longstrider

Transmutation

Level: **1**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (a pinch of dirt)**  
Duration: **1 hour**  

---

You touch a creature. The target’s speed increases by 10 feet until the spell ends.

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.

---

Page: 256 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell
{{pageNumber,auto}}
\page
### Luz
  <div class="spell-tags">holy trickery ilusion evocation thaumaturgy creation arcane sacred</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** 1 objeto;
- **Duração:** cena.

___
O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.
 

- **+1 PM:** aumenta a área iluminada em +3m de raio.
- **+2 PM:** muda a duração para 1 dia.
- **+2 PM:** muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Requer 2º círculo.


### Mage Armor
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Mage Armor

Abjuration

Level: **1**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (a piece of cured leather)**  
Duration: **8 hours**  

---

You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends it if the target dons armor or if you dismiss the spell as an action.

---

Page: 256 Players Handbook

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Mage Hand
  <div class="spell-tags">trickery</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
A spectral, floating hand appears at a point you choose within range.  
The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.  

You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.  

- **+| PM:** Torna a mão invisível.
- **+Y PM:** Aumenta a carga máxima em X kilos.
- **+X PM (Needs X circle):** turn into Big B's hand.


### Magic Missile
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Magic Missile

Evocation

Level: **1**  
Casting time: **1 Action**  
Range: **120 feet**  
Components: **V, S**  
Duration: **Instantaneous**  

---

You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously and you can direct them to hit one creature or several.

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.

---

Page: 257 Players Handbook

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell
{{pageNumber,auto}}
\page
### Magic Stone
  <div class="spell-tags">transmutation arcane</div>

*Cantrip*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 a 3 pedras pequenas;
- **Duração:** cena..

___
DESCRIPTION_NOT_FOUND

### Manto do Cruzado
  <div class="spell-tags"></div>

*7th Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** sustentada..

___
DESCRIPTION_NOT_FOUND

### Mass Cure Wounds
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND

### Mass Healing Word
  <div class="spell-tags">recovery sacred wind nature</div>

*3rd Circle*
- **Execução:** 1 Movement Action;
- **Alcance:** 30 feet;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Maximilian's Earthen Grasp
  <div class="spell-tags">earth creation arcane nature</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** 1 criatura;
- **Duração:** cena..

___
You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell’s duration.

As an action, you can cause the hand to crush the restrained target, who must make a Strength saving throw. It takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.

To break out, the restrained target can make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.  

As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.

- **+3PM:** increase all damage by +1d6

### Message
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Message

Transmutation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **120 feet**  
Components: **V, S, M (a short piece of copper wire)**  
Duration: **1 round**  

---

You point your finger toward a creature within range and whisper a message.  
The target (and only the target) hears the message and can reply in a whisper that only you can hear.  
  
You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.

---

Page: 259 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Minor Ilusion
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.

{{pageNumber,auto}}
\page
# Minor Illusion

Illusion

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **S, M (a bit of fleece)**  
Duration: **1 minute**  

---

You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.  
  
If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.  
  
If you create an image of an object such as a chair, muddy footprints, or a small chest it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.  
  
If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.

---

Page: 260 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Oração
  <div class="spell-tags">wind nature sacred boost occult curse enchantment trickery</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** todas as criaturas (veja texto);
- **Duração:** sustentada.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Pass Without a Trace
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Pass Without Trace

Abjuration

Level: **2**  
Casting time: **1 Action**  
Range: **Self**  
Components: **V, S, M (ashes from a burned leaf of mistletoe and a sprig of spruce)**  
Duration: **Concentration, up to 1 hour**  

---

A veil of shadows and silence radiates from you, masking you and your companions from detection.  
For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.

---

Page: 264 Players Handbook

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), spell

---

[](https://www.dnd-spells.com/auth/register)

### Pele de Pedra
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** Fortitude anula..

___
DESCRIPTION_NOT_FOUND

### Perdição
  <div class="spell-tags">curse occult</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** 6sqr;
- **Alvo:** criaturas escolhidas;
- **Duração:** concentração;
- **Resistência:** nenhuma..

___
Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.

- **+2 PM:** aumenta as penalidades em –1


### Poison Spray
  <div class="spell-tags">poison decay evocation thaumaturgy</div>

*Cantrip*
- **Execução:** 1 Action;
- **Alcance:** 2sqr;
- **Duração:** Instantaneous.

___
You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.

- **+2 PM:** Aumenta o dano em 1d12.

{{pageNumber,auto}}
\page
### Potência Divina
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** sustentada..

___
Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo). Além disso, você recebe Força +8 e resistência a dano 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.

- **+2 PM:** aumenta o bônus de Força em +2.
- **+2 PM:** aumenta a resistência a dano em +2.
- **+2 PM:** muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo não seguir a mesma divindade que você.

### Prayer of Healing
  <div class="spell-tags">wind nature holy recovery sacred</div>

*2nd Circle*
- **Execução:** 10 Minutes;
- **Alcance:** 30 feet;
- **Duração:** Instantaneous.

___
Up to 3 creatures of your choice that you can see within range each regain hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.

- **+2 PM:** aumenta a cura em 1d8
- **+2 PM:** aumenta o número de alvos em 2


### Primal Savagery
  <div class="spell-tags">wild feral</div>

*Cantrip*
- **Execução:** padrão;
- **Alcance:** Pessoal;
- **Alvo:** Pessoal.;
- **Duração:** instantânea..

___
DESCRIPTION_NOT_FOUND

### Primor Atlético
  <div class="spell-tags">boost sacred transmutation arcane warmagic</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Você modifica os limites físicos do alvo, que recebe deslocamento +6sqr e +10 em testes de Atletismo.

- **+1 PM:** além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30).
- **+1 PM:** além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala.
- **+1 PM:** muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura nesta rodada, recebe os benefícios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo durante este ataque.
- **+3 PM:** além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 3º círculo.

{{pageNumber,auto}}
\page
### Raio Solar
  <div class="spell-tags">holy sacred</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** 20sqr;
- **Duração:** instantânea;
- **Resistência:** Reflexos (veja texto)..

___
Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas. Truque: muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre.

- **+2 PM:** aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos).
- **+3 PM:** em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente.
- **+3 PM:** criaturas que falhem na resistência ficam cegas por 1d4 rodadas


### Ray of Enfeeblement
  <div class="spell-tags">curse occult unholy trickery enchantment</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** 15sqr;
- **Alvo:** 1 criatura;
- **Duração:** imediata..

___
A black beam of enervating energy springs from your finger toward a creature within range.  

Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.  
  
At the end of each of the target’s turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.


### Ray of Frost
  <div class="spell-tags"></div>

*-1th Circle*
.

___
DESCRIPTION_NOT_FOUND

### Ray of Sickness
  <div class="spell-tags">curse occult poison decay evocation thaumaturgy</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
A ray of sickening greenish energy lashes out toward a creature within range.
Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.
{{pageNumber,auto}}
\page
### Regenerate
  <div class="spell-tags"></div>

*7th Circle*
- **Execução:** 1 Minute;
- **Alcance:** Touch;
- **Duração:** 1 hour.

___
DESCRIPTION_NOT_FOUND

### Relâmpago
  <div class="spell-tags">lighning energy evocation thaumaturgy</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** 20sqr;
- **Duração:** instantânea;
- **Resistência:** Reflexos reduz à metade..

___
Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.

- **+2 PM:** aumenta o dano em +2d6.
- **+3 PM:** muda a área para alvo (criaturas escolhidas). Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 6d6 pontos de dano de eletricidade. Requer 5º círculo.


### Resistance
  <div class="spell-tags"></div>

*-1th Circle*
.

___
DESCRIPTION_NOT_FOUND

### Revivify
  <div class="spell-tags"></div>

*3rd Circle*
- **Execução:** 1 Action;
- **Alcance:** Touch;
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Sanctuary
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Sanctuary

Abjuration

Level: **1**  
Casting time: **1 Bonus Action**  
Range: **30 feet**  
Components: **V, S, M (a small silver mirror)**  
Duration: **1 minute**  

---

You ward a creature within range against attack.  
Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball.  
  
If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.

---

Page: 272 Players Handbook

---

A [Cleric](https://www.dnd-spells.com/spells/class/Cleric), spell

### Searing Smite
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Searing Smite

Evocation

Level: **1**  
Casting time: **1 Bonus Action**  
Range: **Self**  
Components: **V**  
Duration: **Concentration, up to 1 minute**  

---

The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensitity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames.  
  
At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot

---

Page: 274 Players Handbook

---

A [Paladin](https://www.dnd-spells.com/spells/class/Paladin), spell

### See Invisibilityt
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
See invisibility

Divination

Level: **2**  
Casting time: **1 Action**  
Range: **Self**  
Components: **V, S, M (a pinch of talc and a small sprinkling of powdered silver)**  
Duration: **1 hour**  

---

For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.

---

Page: 274 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Shadow Blade
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Shadow Blade

A spell from Xanathar's Guide To Everything

Illusion

Level: **2**  
Casting time: **1 Bonus Action**  
Range: **Self**  
Components: **V, S**  
Duration: **Concentration, up to 1 minute**  

---

You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.  
If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.

#### At higher level

When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8.

---

Page: 164 from Xanathar's Guide To Everything

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell
{{pageNumber,auto}}
\page
### Shape Water
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Shape Water

A Elemental Evil spell

Transmutation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **S**  
Duration: **Instantaneous or 1 hour**  

---

You choose an area of water that you can see within range and that fits within a 5-foot cube.  
You manipulate it in one of the following ways:  
  
• You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn’t have enough force to cause damage.  
  
• You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.  
  
• You change the water’s color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.  
  
• You freeze the water, provided that there are no crea- tures in it. The water unfreezes in 1 hour.  
If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.

---

Page: 21 from EE Players Companion

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Shatter
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Shatter

Evocation

Level: **2**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S, M (a chip of mica)**  
Duration: **Instantaneous**  

---

A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.  
  
A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area.

#### At higher level

When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.

---

Page: 275 Players Handbook

### Shillelagh
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Shillelagh

Transmutation

Level: **Cantrip**  
Casting time: **1 Bonus Action**  
Range: **Touch**  
Components: **V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)**  
Duration: **1 minute**  

---

The wood of a club or quarterstaff you are holding is imbued with nature’s power.  
For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon’s damage die becomes a d8. The weapon also becomes magical, if it isn’t already. The spell ends if you cast it again or if you let go of the weapon

---

Page: 275 Players Handbook

### Silent Image
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Silent Image

Illusion

Level: **1**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V, S, M (a bit of fleece)**  
Duration: **Concentration, up to 10 minutes**  

---

You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects.  
  
You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.  
  
Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.

---

Page: 276 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell
{{pageNumber,auto}}
\page
### Sleep
  <div class="spell-tags">curse occult enchantment trickery</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** 90 feet;
- **Duração:** 1 minute.

___
DESCRIPTION_NOT_FOUND

### Snare
  <div class="spell-tags">trickery ilusion ilusion curse occult</div>

*1st Circle*
- **Execução:** 1 minuto;
- **Alcance:** Toque;
- **Alvo:** Quadrado 1,5mx1,5m no chão;
- **Duração:** 8 Horas..

___
As you cast this spell, you use the rope to create a circle with a 1sqr radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap. This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned. The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell’s radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends. A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends. After the trap is triggered, the spell ends when no creature is restrained by it.


### Snowball Swarm
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Snilloc’s Snowball Swarm

A Elemental Evil spell

Evocation

Level: **2**  
Casting time: **1 Action**  
Range: **90 feet**  
Components: **V, S, M**  
Duration: **Instantaneous**  

---

(a piece of ice or a small white rock chip)  
A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.  
At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.

---

Page: 22 from EE Players Companion

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Soco de Arsenal
  <div class="spell-tags">arcane creation unholy summon wild occult</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** 20sqr;
- **Alvo:** 1 criatura;
- **Duração:** instantânea;
- **Resistência:** Fortitude reduz à metade..

___

Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6+ mod. Força pontos de dano de impacto. A vítima é empurrada 3m na direção oposta à sua (ou 1,5m se passar na resistência).

- **+1 PM:** muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo.
- **+2 PM:** aumenta o dano em +1d6.
- **+4 PM:** aumenta a distância do efeito de empurrar em +3m.
- **+5 PM:** muda o tipo do dano para essência.

{{pageNumber,auto}}
\page
### Sopro da Salvação
  <div class="spell-tags"></div>

*5th Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Duração:** instantânea.

___
DESCRIPTION_NOT_FOUND

### Sopro das Uivantes
  <div class="spell-tags">wind nature cold energy creation arcane</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** 4sqr;
- **Duração:** instantânea;
- **Resistência:** Fortitude parcial..

___
Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre 1d6 pontos de dano de impacto.

- **+2 PM:** aumenta o dano de frio em +2d6.
- **+2 PM:** além do normal, criaturas que falhem no teste de Fortitude ficam caídas.
- **+3 PM:** aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 5º círculo.


### Spider Climb
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Spider Climb

Transmutation

Level: **2**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (a drop of bitumen and a spider)**  
Duration: **Concentration, up to 1 hour**  

---

Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.

---

Page: 277 Players Handbook

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Spike Growth
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Spike Growth

Transmutation

Level: **2**  
Casting time: **1 Action**  
Range: **150 feet**  
Components: **V, S, M (seven sharp thorns or seven small twigs, each sharpened to a point)**  
Duration: **Concentration, up to 10 minutes**  

---

The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.  
  
The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is case must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.

---

Page: 277 Players Handbook

---

A [Druid](https://www.dnd-spells.com/spells/class/Druid), [Ranger](https://www.dnd-spells.com/spells/class/Ranger), spell
{{pageNumber,auto}}
\page
### Sugestion
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Suggestion

Enchantment

Level: **2**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **V, M (a snake’s tongue and either a bit of honeycomb or a drop of sweet oil)**  
Duration: **Concentration, up to 8 hours**  

---

You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can’t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.  
  
The target must make a Wisdom saving throw. On a failed save, it purses the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.  
  
You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn’t met before the spell expires, the activity isn’t preformed.  
  
If you or any of your companions damage the target, the spell ends.

---

Page: 279 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Sword Burst
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Sword Burst

A spell from Sword Coast Adventure's Guide

Conjuration

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **5 feet**  
Components: **V**  
Duration: **Instantaneous**  

---

You create a momentary circle of spectral blades that sweep around you.  
Each creature within range, other than you, must succeed on a Dexterity saving throw or take 1d6 force damage. 

#### At higher level

This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).

### Tasha's Hideous Laughter
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Tasha’s Hideous Laughter

Enchantment

Level: **1**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **V, S, M (tiny tarts and a feather that is waved in the air)**  
Duration: **Concentration, up to 1 minute**  

---

A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected.  
  
At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw ifit’s triggered by damage. On a success, the spell ends.

---

Page: 280 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Teia
  <div class="spell-tags">arcane creation</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Duração:** cena;
- **Resistência:** Dex.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Thorn Whip
  <div class="spell-tags">wild plant summon creation arcane</div>

*Cantrip*
- **Execução:** padrão;
- **Alcance:** 3m (2 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** instantânea..

___
You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if you pass the creature's Defense by 5 or more (+5 for every size category difference between you), you may pull the creature up to 10 feet closer to you.

- **+2 PM:** Increase damage by +2d6. 
- **+1PM:** +2 to hit.


### Thunderclap
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Thunderclap

A Elemental Evil spell

Evocation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **5 feet**  
Components: **S**  
Duration: **Instantaneous**  

---

You create a burst of thunderous sound, which can be heard 100 feet away.  
Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage.  
The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).

---

Page: 22 from EE Players Companion

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Druid](https://www.dnd-spells.com/spells/class/Druid), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Thunderous Smite
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Thunderous Smite

Evocation

Level: **1**  
Casting time: **1 Bonus Action**  
Range: **Self**  
Components: **V**  
Duration: **Concentration, up to 1 minute**  

---

The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.

---

Page: 282 Players Handbook

---

A [Paladin](https://www.dnd-spells.com/spells/class/Paladin), spell

---

[](https://www.dnd-spells.com/auth/register)

### Thunderwave
  <div class="spell-tags">transmutation arcane lighning wind nature no-energy</div>

*1st Circle*
- **Execução:** 1 Action;
- **Alcance:** Self (3sqr cube);
- **Duração:** Instantaneous.

___
DESCRIPTION_NOT_FOUND
{{pageNumber,auto}}
\page
### Toll the Dead
  <div class="spell-tags">occult unholy decay necrotic</div>

*Cantrip*
- **Execução:** 1 Action;
- **Alcance:** 60 feet;
- **Duração:** Instantaneous.

___
You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d4 necrotic damage. If the target is missing any of its hit points, it instead takes 1d8 necrotic damage.

- **+3 PM:** increase the damage by 2 dice


### Toque Chocante
  <div class="spell-tags">lighning energy evocation thaumaturgy warmagic arcane</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** instantânea;
- **Crítico:** 20/2x.

___
Arcos elétricos envolvem sua mão. Faça um melee spell attack contra o alvo, causando 2d8+2 pontos de dano de eletricidade num acerto. Se o alvo usa armadura de metal você tem vantagem no ataque.

- **+1 PM:** aumenta o dano em 1d8+1.
- **+2 PM:** Você encanta uma arma que esteja segurando em vez das suas mãos. Em vez de um ataque de feitiço, faça um ataque com a arma e dê o dano da arma e da magia.
- **+2 PM:** muda o alcance para pessoal e o alvo para **área:** explosão com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área


### Toque Vampírico
  <div class="spell-tags">necrotic decay feral wild unholy occult</div>

*3rd Circle*
- **Execução:** padrão;
- **Alcance:** toque;
- **Alvo:** 1 criatura;
- **Duração:** instantânea;
- **Resistência:** Fortitude reduz à metade..

___
Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano).

- **+1 PM:** como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia.
- **+2 PM:** aumenta o dano em +2d6.
- **+2 PM:** muda o alcance para pessoal, o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 5º círculo.

### Tranquilidade
  <div class="spell-tags">enchantment trickery</div>

*1st Circle*
- **Execução:** padrão;
- **Alcance:** curto;
- **Alvo:** 1 animal ou humanoide;
- **Duração:** cena;
- **Resistência:** Vontade parcial..

___
Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar à atitude que tinha antes (ou pior, de acordo com o mestre).

- **+1 PM:** muda o alvo para 1 criatura.
- **+1 PM:** aumenta o número de alvos em +1.
- **+2 PM:** aumenta a penalidade em –1.
- **+5 PM:** muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo.
{{pageNumber,auto}}
\page
### Transformação de Guerra
  <div class="spell-tags">boost sacred transmutation arcane abjuration thaumaturgy</div>

*5th Circle*
- **Execução:** padrão;
- **Alcance:** pessoal;
- **Alvo:** você;
- **Duração:** sustentada.

___
Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas.

- **+2 PM:** aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10.
- **+2 PM:** adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Além do normal, você recebe resistência a dano 10 e imunidade a atordoamento, doenças, encantamento, fadiga, paralisia, necromancia, sangramento, sono e veneno, e não precisa respirar.


### Vicious Mockery
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
Enchantment

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **60 feet**  
Components: **V**  
Duration: **Instantaneous**  

---

You unleash a string of insults laced with subtle enchantments at a creature you can see within range.  
If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.

#### At higher level

This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).

---

Page: 285 Players Handbook

---

A [Bard](https://www.dnd-spells.com/spells/class/Bard), spell

### Warding Bond
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Warding Bond

Abjuration

Level: **2**  
Casting time: **1 Action**  
Range: **Touch**  
Components: **V, S, M (a pair of platinum rings worth at least 50 gp each, which you and target must wear for the duration)**  
Duration: **1 hour**  

---

This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends.  
  
While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.  
  
The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.

---

Page: 287 Players Handbook

---

A [Cleric](https://www.dnd-spells.com/spells/class/Cleric), spell

### Warding Wind
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Warding Wind

A Elemental Evil spell

Evocation

Level: **2**  
Casting time: **1 Action**  
Range: **Self**  
Components: **V**  
Duration: **Concentration, up to 10 minutes**  

---

A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell’s duration.  
The wind has the following effects:  
• It deafens you and other creatures in its area.  
• It extinguishes unprotected flames in its area that are torch-sized or smaller.  
• The area is difficult terrain for creatures other than you.  
• The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind.  
• It hedges out vapor, gas, and fog that can be dispersed by strong wind.

---

Page: 23 from EE Players Companion
{{pageNumber,auto}}
\page
### Web
  <div class="spell-tags">feral wild trickery creation arcane</div>

*2nd Circle*
- **Execução:** padrão;
- **Alcance:** 12sqr;
- **Duração:** cena..

___
You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.

Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free. A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.

The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.


### Witch Bolt
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Witch Bolt

Evocation

Level: **1**  
Casting time: **1 Action**  
Range: **30 feet**  
Components: **V, S, M (a twig from a tree that has been struck by lightning)**  
Duration: **Concentration, up to 1 minute**  

---

A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target.  
Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you.

#### At higher level

When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.

---

Page: 289 Players Handbook

---

A [Sorcerer](https://www.dnd-spells.com/spells/class/Sorcerer), [Warlock](https://www.dnd-spells.com/spells/class/Warlock), [Wizard](https://www.dnd-spells.com/spells/class/Wizard), spell

### Word of Radiance
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
#   
Word of Radiance

A spell from Xanathar's Guide To Everything

Evocation

Level: **Cantrip**  
Casting time: **1 Action**  
Range: **5 feet**  
Components: **V, M (a holy symbol)**  
Duration: **Instantaneous**  

---

You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.  
The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).

---

Page: 171 from Xanathar's Guide To Everything

---

A [Cleric](https://www.dnd-spells.com/spells/class/Cleric), spell

### Zephyr Strike
  <div class="spell-tags"></div>

*-1th Circle*
- **Execução:** padrão;
- **Alcance:** 9m (6 quadrados de 1,5m);
- **Alvo:** 1 criatura;
- **Duração:** concentração..

___
Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui. Descrição da magia aqui.

- **+1 PM:** Upgrade 1.
- **+3 PM:** Upgrade 2.
{{pageNumber,auto}}
\page
# Zephyr Strike

A spell from Xanathar's Guide To Everything

Transmutation

Level: **1**  
Casting time: **1 Bonus Action**  
Range: **Self**  
Components: **V**  
Duration: **Concentration, up to 1 minute**  

---

You move like the wind. Until the spell ends, your movement doesn’t provoke opportunity attacks.  
Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn.

---

Page: 171 from Xanathar's Guide To Everything

---

A [Ranger](https://www.dnd-spells.com/spells/class/Ranger), spell


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

A common rule for the "Mana Tax", as it's commonly refered to, is "the maximum between 1 and half of the skill's cost, rounded down" (e.g.: 1 -> +1, 2 -> +1, 3 -> +1, 4 -> +2, 5 -> +2, 6 -> +3, etc.). Another one is "+1 to all abilities and +X to all spells, where X is the spell's level".

"The Mana Tax" doesn't count towards the maximum MP a character may use for a skill.

### Working towards their Mission
Though not common, some Paladins are given a specific mission by their Entity. Working towards that goal may earn them Favor with their Entity.

### Upholding the Entity's values
Doing something their Entity likes. Working towards their Entity's goals (if they have any), or helping them in general, is an obvious and very effective way of gaining their Favor, and improving the relationship between them and their Paladin.

## Losing Favor
<!-- Flavor text: FP is usually only spent to perform Miracles, but a Paladin that's going against their Entity's wishes may see themselves drawing the short end of the straw later on, as their Entity loses faith on them and becomes less likely to help them in the future. -->
Just as upholding their Entity's values and working towards their mission can help a Paladin earn their Favor, going against their values, helping their enemies or simply getting on their Entity's bad side can cause a Paladin to lose Favor (FP) with their Entity.

## Miracles
Every entity has a set of miracles their Paladins can perform with their help. All miracles work like active abilities a Paladin may use by spending their Entity's energy (and usually also their own). Mecanically, this means that performing Miracles always spends FP, and sometimes also MP/HP (the MP cost of a Miracle is exempt from the Mana Tax).


{{pageNumber,auto}}
\page
# Conditions

### Prone
Prone target has movement speed halved, -2 defense against melee attacks and +2 against ranged ones. Standing up from prone takes a movement action. A prone target can once per turn attempt to stand up as a free action, if they pass a DC 14 Acrobatics test

### Burning
Burning targets take damage at the start of their turn and have disadvantage on concentration checks. Any creature can put out a burning creature by spending their action to pat them out (unless the burn effect specifies otherwise). By default, the burn damage is 1d6 per turn.

### Frightened
A frightened has disadvantage on all rolls made against the source of their fright. At the start of there turn, the frightened creature must succeed on a DC 10 Presence save (or the DC of the fear effect -5, whichever is higher), or they spend all their movement running away from the source of their fear. If the fear effect involves a save each turn, the creature makes one save and considers its result for both the effect save and the "run away" save.

### Paralyzed
A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.

### Charmed
A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.

### Blinded
• A blinded creature can’t see and automatically fails any ability check that requires sight.
• Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.

## Light and vision
A given area might be lightly or heavily obscured. In a lightly obscured area, such as dim light, patchy fog, or moderate foliage, creatures have disadvantage on Perception checks that rely on sight.

A heavily obscured area—such as darkness, opaque
fog, or dense foliage—blocks vision entirely. A creature in a heavily obscured area effectively suffers from the blinded condition

Bright light lets most creatures see normally. Even gloomy days provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius. Dim light, also called shadows, creates a lightly obscured area. Darkness creates a heavily obscured area.

## Grapple
The target is Grappled, and the grapple’s escape DC equals **8 + your Strength modifier + your Proficiency Bonus**. This grapple is possible only if the target is no more than one Size larger than you and if you have a hand free to grab the target. Shove. You either push the target 5 feet away or knock the target Prone. This shove is possible only if the target is no more than one Size larger than you. (See: [[Battle Maneuvers]])


{{pageNumber,auto}}
\page
# Rest & Recovery
An adventuring character recovers HP and MP mainly through resting. There are 5 different kinds of resting conditions:

- **Bad Condition**: Sleeping outdoors without proper equipment and on an empty stomach doesn't give the body, mind and soul the ease and support to properly recover. Takes 5 hours.
- **Normal Condition**: Sleeping outdoors in a sleeping bag and doing a nightwatch rotation shift is enough to give a moment of rest and recovery. Takes 8 hours.
- **Good Condition**: Having hearty meal, not taking night watch, sleeping in a cozy tent or next to a warm fire for a long time really makes a difference out there in the wild. Takes 8 hours.
- **Exceptional Condition**: Having a feast, not taking night watch, sleeping in a warm and comfortable condition reinvigorates someone's spirits entirely! Takes 12 hours.
- **Full Reset**: Completely recover's a character's HP & MP, and removes any debilitating conditions except for diseases and curses. Takes 1 week of rest with no adverse conditions (having time off in a Town in between adventures). Recovers fully from exhaustion.

## Mantimentos/Rations
Food, firewood, water... to properly rest, a party needs to expend some resources. To avoid tracking everything individually, it's recommended to simply have recorded how much money the party has in supplies.

## How to recover
When the party decides to rest, they set up camp for the night.

### Base Level and Rest CR
The DM chooses the base condition for the rest, which may be Bad, Normal or even worse. Chose a base condition level for the situation. That number can be a negative or positive one, with 1 being normal, and the lesser the number, the worse the condition is.

The DM also chooses secretly the CR of the rest, considering the location, time, weather and other adverse conditions that may apply.

Recommendation for CR: 15 - (5* base level of rest)

### Expending Resources
When resting, expending more or less resources has an effect on the quality of the teams' sleep. This is how the amount of resources spent affects the level of the recovery. 

**Experiment with different prices**
| amount spent per person | bonus |
| ----------------------- | ----- |
| 0                       | -3    |
| 2 silver                | -1    |
| 5 silver                | 0     |
| 20 silver               | +1    |
| 50 silver               | +2    |
| 150 silver              | +3    |

### Skills
A character may attempt to use a skill to improve their rest condition (cooking and survival being the most common ones). 

The character then rolls a skill check against the Rest CR chosen by the DM. If they pass it, the Rest Level is increased by 1. For every 5 above the CR, the level is increased by another 1 point.

### Result
Do the following calculation to find out the level of the rest:

rest condition level = base level + resource bonus + skill bonus

Consult the table below to see how the rest affected the characters.

| Level | Condition             | HP Recovery | MP Recovery | Duration | Exaustion                                   |
| ----- | --------------------- | ----------- | ----------- | -------- | ------------------------------------------- |
| <=0   | Bad Condition         | 0           | level/2     | 5 hours  | DC 10-5\*condition CON save or gain 1 level |
| 1     | Normal Condition      | level/2     | level       | 8 hours  | recovers 1 level                            |
| 2     | Good Condition        | level       | level\*2    | 8 hours  | recovers 2 levels                           |
| 3     | Exceptional Condition | level\*2    | level\*3    | 12 hours | recovers 2 levels                           |
| -     | Full Reset            | 100%        | 100%        | 1 week   | fully recovers                              |


{{pageNumber,auto}}

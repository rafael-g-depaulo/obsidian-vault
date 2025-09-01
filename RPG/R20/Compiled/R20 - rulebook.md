

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
- ### [{{ Origins }}{{ 5 }}](#p6)
- #### [{{ Origin Lists }}{{ 5 }}](#p6)
- ### [{{ Companions }}{{ 6 }}](#p7)
- #### [{{ Stats }}{{ 6 }}](#p7)
- #### [{{ Companion death }}{{ 6 }}](#p7)
- #### [{{ Rest }}{{ 6 }}](#p7)
- #### [{{ Companion Skills }}{{ 6 }}](#p7)
- ### [{{ Conditions }}{{ 8 }}](#p9)
- ### [{{ Companions }}{{ 9 }}](#p10)
- #### [{{ Stats }}{{ 9 }}](#p10)
- #### [{{ Companion death }}{{ 9 }}](#p10)
- #### [{{ Rest }}{{ 9 }}](#p10)
- #### [{{ Companion Skills }}{{ 9 }}](#p10)
}}

############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

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



############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

############ INVALID_LINK "null" ############

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
The target is Grappled, and the grapple’s escape DC equals **8 + your Strength modifier + your Proficiency Bonus**. This grapple is possible only if the target is no more than one Size larger than you and if you have a hand free to grab the target. Shove. You either push the target 5 feet away or knock the target Prone. This shove is possible only if the target is no more than one Size larger than you. (See: [Manobras (link not found)]())


############ INVALID_LINK "null" ############

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

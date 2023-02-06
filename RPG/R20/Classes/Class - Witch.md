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

TODO: add witches brews (out of combat potions with healing and random effects. good way to spend more PM)
Witches Brew: combination of effects (decide some, roll for most). all effects have a positive and a negative.

ex:

- bonus on skill checks & take damage
- heal + disadvantage on initiative
- mana + no extra crit damage (too weak? prolly change)

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

TODO: give all the hexes some cool, gross descriptions and names. like they should make the target weird, slimy, neurotic and shit. really up the flavor of it

### Hex List:

A witch's Hex is an inescapable effect. While you concentrate on it, the target cannot get rid of the hex.

By default, a Hex takes a movement action to cast, has a range of 9sqr, costs 0PM and targets one creature you can see. You can change the target of your Hex for free if the original dies.

Most Hexes also gain an additional effect for each other effect you're concentrating on.

- **Hex: Frail.** The target has -1 Defense, and -1 for each other effect you're concentrating on.

- **Hex: Drain.** Your first ally each turn that hits the target recovers (your Presence mod.) HP, +1 for each other effect you're concentrating on.

- **Hex: Weakened.** The target has -1 to all of their saving throws, -1 for each other effect you're concentrating on.

- **Hex: Slowed.** The target has their movement speed halved.  

- **Hex: Fragile.** Your first ally each turn that hits the target deals an extra 1d6 damage, +1d6 for each other effect you're concentrating on.

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


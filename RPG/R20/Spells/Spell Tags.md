# Spell Tags
asdasdasd

TODO: code JS script to read all spells and check if tags respect hierarchy (e.g. all plant spells should also be wild spells). it should only give warnings

## Tags
list of tags:
OBS: nothing stops spells from overlapping groups (e.g.: a spell can be wild, negative and arcane at once).
OBS2: it's possible for a spell to belong to a group without belonging to one of it's sub-tags. ex: Mage hand isn't ilusion, divination or enchantment, but it's trickery

by nature:
- #wild
	- #plant
	- #feral
	- #summon (maybe remove summon from here. only do it after a concrete example shows up)
- #negative
	- #curse (debuf. consider separating into 2 different tags if the need arises)
	- #unholy (warlock stuff. cosmic horror, demons and shit)
	- #necromancy
- #positive
	- #recovery
	- #boost
	- #holy (sunlight, radiant, cleric stuff)
- #arcane  (general magic stuff. grease, prestidigitation, tiny hut and shit)
	- #transmutation
	- #ilusion
	- #divination 
	- #abjuration (shields and some self-buffs)
	- #creation
- #trickery
	- #ilusion
	- #divination (also all comunication stuff)
	- #enchantment
- #chronomancy
- #evocation


by damage type:
- #energy (fire+ice+lighning)
	- #fire
	- #lighning
	- #cold
- #physical (maybe not needed)
	- #slashing
	- #bludgeoning
	- #piercing
- #nature (does physical damage)
	- #wind
	- #water
	- #earth
- #decay
	- #poison
	- #acid
	- #necrotic
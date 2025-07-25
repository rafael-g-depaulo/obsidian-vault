{{class-definition "Spelgard"
ARCHETYPE: Off-Caster
EQUIPMENT_PROFICIENCIES: Simple weapons and all kinds of armor.
SAVES:
- SEN
- DEX
MP_ATTB: SEN
SPELLCASTING_ATTB: SEN

FEATURES:

%%
**Either nerf damage or add concentration to spiritual weapon.**

Reverse order of spiritual weapon and heal, and buff heal amount
%%

| LEVEL | FEATURE          | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Cura de Combate  | **Movement (2PM):** touch one creature, and heal them for 2d8+2. At levels 4, 9, 15 and 18, you can spend +1PM to increate the heal amount by 1d8+1                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2     | Spiritual Weapon | **Movement action (1PM):** You create a floating, spectral weapon within range (2sqr radius of you). When you take the attack action, you can substitute one of your attacks for a Spiritual Weapon Attack. For a Spiritual Weapon Attack, you can move the Spiritual Weapon up to 4sqr, make a melee spell attack, and it deals 2d8 + SEN physical damage of the weapon's type if it hits. The weapon follows your movement, but you can move it to another spot within the ability's range as a free action once per turn. At levels 6, 11 and 16 you can spend +2PM to increase the weapon's damage by 1d8. |

MULTI_FEATURES:

| Level | Spiritual Weapon | Lay on Hands |
| ----- | ---------------- | ------------ |
| 1st   | -                | 2d8+2        |
| 2nd   | 2d8+SEN          | 2d8+2        |
| 3rd   | 2d8+SEN          | 2d8+2        |
| 4th   | 2d8+SEN          | 2d8+2        |
| 5th   | 2d8+SEN          | 2d8+2        |
| 6th   | 3d8+SEN          | 2d8+2        |
| 7th   | 3d8+SEN          | 3d8+3        |
| 8th   | 3d8+SEN          | 3d8+3        |
| 9th   | 3d8+SEN          | 3d8+3        |
| 10th  | 3d8+SEN          | 4d8+4        |
| 11th  | 4d8+SEN          | 4d8+4        |
| 12th  | 4d8+SEN          | 4d8+4        |
| 13th  | 4d8+SEN          | 4d8+4        |
| 14th  | 4d8+SEN          | 5d8+5        |
| 15th  | 4d8+SEN          | 5d8+5        |
| 16th  | 5d8+SEN          | 5d8+5        |
| 17th  | 5d8+SEN          | 5d8+5        |
| 18th  | 5d8+SEN          | 6d8+6        |
| 19th  | 5d8+SEN          | 6d8+6        |
| 20th  | 5d8+SEN          | 6d8+6        |


FEATS:

| NAME                       | DESCRIPTION                                                                                                                                                   | PRE_REQUISITES     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Arma Espiritual teleguiada | O alcanse inicial da sua Arma Espiritual aumenta para 6 quadrados (9m).                                                                                       |                    |
| Spiritual Strike           | You can spend a movement action and 1 PM to use a Spiritual Weapon Attack                                                                                     | 5th level Spelgard |
| Spiritual Magic            | Whenever you cast a Spell or Ability with a range of touch or self, you can cast it through your Spiritual Weapon. (isso inclui curar pelas mãos e auras)<br> |                    |



%%
**TODO: PODERES PARA AUMENTAR CRÍTICO DA ARMA ESPIRITUAL**
%%

BREAK

CLASS_NOTE

| NAME                         | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                 | PRE_REQUISITES             |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Aura of Retaliation          | Effect: Whenever one of your allies is damaged, your and their next damaging ability deals an aditional 1d8 damage (of the ability's damage type).                                                                                                                                                                                                                                                          |                            |
| Aura of Irradiation          | Effect: Whenever an enemy enters or starts their turn inside the aura they must make a Presence saving throw. They take 1d6 fire damage, or half on a save                                                                                                                                                                                                                                                  |                            |
| Aura of Regeneration         | Effect: Your allies recover 1d4 HP whenever they first enter or start their turn within the aura                                                                                                                                                                                                                                                                                                            |                            |
| Everlasting Aura             | Even if someone moves away from your Aura, they are still affected by it until the end of the round                                                                                                                                                                                                                                                                                                         |                            |
| Extended Aura                | Your auras last 1 more round.                                                                                                                                                                                                                                                                                                                                                                               |                            |
| Retaliating Spiritual Weapon | When an opponent attacks an ally while your Spiritual Weapon is adjacent to the attacker, you can use yout reaction and 1PM to perform a Spiritual Weapon Attack on the attack immediately after the attack goes off                                                                                                                                                                                        | Defensive Spiritual Weapon |
| Defensive Spiritual Weapon   | While your Spiritual Weapon is adjacent to an ally, that ally has +2 to their defense.                                                                                                                                                                                                                                                                                                                      |                            |
| Curar Aprimorado             | Quando usar Curar Pelas Mãos, você adiciona o seu modificador de Sensibilidade no total da cura                                                                                                                                                                                                                                                                                                             |                            |
| Curar Distante               | Quando usar Curar Pelas Mãos, você pode gastar +1PM para aumentar o alcanse de toque para curto. Você também pode usar Curar Pelas Mãos pela sua Arma Espiritual                                                                                                                                                                                                                                            |                            |
| Magically Powered            | Whenver you cast a spell of first circle or higher, you can spend another 2PM to perform a Spiritual Weapon Attack as a free action.                                                                                                                                                                                                                                                                        |                            |
| Multi-Aura                   | You can have multiple auras active at once                                                                                                                                                                                                                                                                                                                                                                  |                            |
| Defensive Aura               | You and your allies have +1 Defense while affected by one of your auras                                                                                                                                                                                                                                                                                                                                     | Um poder de Aura.          |
| Weakening Aura               | Non-allies have disadvantage to resist your spells and abilities while inside one of your auras                                                                                                                                                                                                                                                                                                             |                            |
| Spiritual Aura               | Your Spiritual Weapon also radiates your aura                                                                                                                                                                                                                                                                                                                                                               |                            |
| Long Range Aura              | Your aura's radius is increased to 3sqr (4.5m)                                                                                                                                                                                                                                                                                                                                                              |                            |
| Um-Dois                      | Reação (você acertou um oponente com uma magia de primeiro círculo ou maior, 1PM): Um resquício da sua magia fica no inimigo e marca ele. Se você acertar ele com um ataque físico ou com a sua **Arma Espiritual** até o final do seu próximo turno você usa o resquício de energia para aumentar o impacto, e dá +2d6 de dano adicional. A cada 4 níveis você pode gastar +2PM e aumentar o dano em +2d6. |                            |
| Explosão Espiritual          | Ao realizar um golpe com a **Arma Espiritual** (+1PM): Em vez de fazer um ataque, sua Arma Espiritual explode em uma onda de energia, aumentando o dano em +3d8. O seu alvo original e todos da sua escolha em um quadrado de lado 3sqr centrado na Arma Espiritual são atingidos. Se os alvos passarem em um teste de Presença, eles tomam metade do dano                                                  |                            |
| Conhecimento de Combate      | Você aprende 2 magias de spellgard a sua escolha                                                                                                                                                                                                                                                                                                                                                            |                            |
| Combatente Arcano            | Você consegue aprender truques. Aprenda 1 truque de Spelgard.                                                                                                                                                                                                                                                                                                                                               |                            |
| Golpe Arcano                 | Quando você usa um truque que não envolva um ataque físico e com casting time padrão você pode gastar 2PM para realizar um ataque como ação livre                                                                                                                                                                                                                                                           |                            |

CLASS_NOTE_NAME: Auras
CLASS_NOTE_DESCRIPTION:
A Spelgard is always ready to use their unique combo of physique and magic to aid themselves and their allies' combat prowess!

Some Spelgard Feats are Auras. Auras work as spell-like abilities, with the following stats (unless stated otherwise):

**Movement (2PM):** For 2 turns (until the end of your second next turn), you and all your allies within 2sqr (3m) of you get a buff, depending on the aura. The aura only affects allies while they are within it's range. Only one aura may be active at a time.
}}

{{page-break}}

{{spell-list
INCLUDE_TAGS:
- recovery
- boost
- evocation
- energy
- warmagic
EXCLUDE_TAGS:
- trickery
- necromancy
- plant
- ilusion
- summon
- unholy
MIN_LEVEL: 0
MAX_LEVEL: 2
}}

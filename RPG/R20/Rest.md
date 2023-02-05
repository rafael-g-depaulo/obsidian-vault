# Rest & Recovery
An adventuring character recovers HP and MP mainly through resting. There are 5 different kinds of resting conditions:

- **Bad Condition**: Sleeping outdoors without proper equipment and on an empty stomach doesn't give the body, mind and soul the ease and support to properly recover. Takes 5 hours.
- **Normal Condition**: Sleeping outdoors in a sleeping bag and doing a nightwatch rotation shift is enough to give a moment of rest and recovery. Takes 8 hours.
- **Good Condition**: Having hearty meal, not taking night watch, sleeping in a cozy tent or next to a warm fire for a long time really makes a difference out there in the wild. Takes 8 hours.
- **Exceptional Condition**: Having a feast, not taking night watch, sleeping in a warm and comfortable condition reinvigorates someone's spirits entirely! Takes 12 hours.
- **Full Reset**: Completely recover's a character's HP & MP, and removes any debilitating conditions except for diseases and curses. Takes 1 week of rest with no adverse conditions (having time off in a Town in between adventures). Recovers fully from exhaustion.

## Provisions
Food, firewood, water... to properly rest, a party needs to expend some provisions. To avoid tracking everything individually, it's recommended to simply have recorded how much money the party has in supplies.

## How to recover
When the party decides to rest, they set up camp for the night.

### Difficulty and Rest CR
The DM chooses the base difficulty for the rest. Chose a base condition level for the situation, with 0 being a favorable and easy condition, and the higher the number, the more harsh the conditions (recommended 0-2 range for inexperienced adventurers, and to never go above 3).

### Expending Provisions
When resting, expending more or less resources has an effect on the quality of the teams' sleep. This is how the amount of resources spent affects the condition of the recovery. 

| amount spent per person | bonus |
| ----------------------- | ----- |
| 0                       | -3    |
| 2 silver                | -1    |
| 5 silver                | 0     |
| 20 silver               | +1    |
| 50 silver               | +2    |
| 150 silver              | +3    |

### Skills
A character may attempt to use a skill to improve their rest condition (cooking and survival being the most common ones). The DC for this roll is:
- **5 + (5 \* difficulty)**

If they pass the check, their rest condition improves by 1. For every 5 above the CR, it improves by +1.

### Result
Do the following calculation to find out the condition of the rest:

rest condition level = resource bonus + skill bonus - difficulty

Consult the table below to see how the rest affected the characters.

| Level | Condition             | HP Recovery | MP Recovery | Duration | Exaustion                                     |
| ----- | --------------------- | ----------- | ----------- | -------- | --------------------------------------------- |
| <0    | Bad Condition         | 0           | level/2     | 5 hours  | DC 10 + 5\*condition CON save or gain 1 level |
| 0     | Normal Condition      | level/2     | level       | 8 hours  | recovers 1 level                              |
| 1     | Good Condition        | level       | level\*2    | 8 hours  | recovers 2 levels                             | 
| 2     | Exceptional Condition | level\*2    | level\*3    | 12 hours | recovers 2 levels                             |
| -     | Full Reset            | 100%        | 100%        | 1 week   | fully recovers                                |

## Skipping a Rest
When skipping a Rest, a character needs to roll a CON or PRE saving throw with DC equal to:
- **15 + 5 \* # of consecutive days not having slept** 
(1st day: 15, 2nd -> 20, 3rd -> 25,...)

If they fail the character gains 1 level of exaustion, +1 for every 5 points below the DC. (e.g. a 10 roll against a DC of 20 would give a character +3 exaustion levels)

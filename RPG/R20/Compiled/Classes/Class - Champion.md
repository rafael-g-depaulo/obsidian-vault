{{pageNumber,auto}}
\page

{{class-definition "Champion"
ARCHETYPE: Martial
EQUIPMENT_PROFICIENCIES: Simple weapons, martial weapons and all kinds of armor.
SAVES:
- STR
- PRE

FEATURES:

| LEVEL | FEATURE               | DESCRIPTION                                                                                                                                                                                                                                                              |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1     | Golpe Destruidor      | **(once per turn) During an attack (2PM):** infuse your attack with all your might! Add your Presence modifier to the attack roll, and you Presence modifier +1d6 to the damage. At 5th, 9th, 13th and 17th level, you can spend +1PM to add another +1d6 to the damage. |
| 2     | Palavras Inspiradoras | **Movement (1PM):** heal one creature of your choice in 9sqr for 1d8+1. At 7th, 10th, 14th and 18th level respectively, you can spend +1PM to add another 1d8+1 to the healing.                                                                                          |

WIDE: true
MULTI_FEATURES:

| Level | Smite   | Palavras Inspiradoras |     |
| ----- | ------- | --------------------- | --- |
| 1st   | 1d6+PRE | -                     |     |
| 2nd   | 1d6+PRE | 1d8+1                 |     |
| 3rd   | 1d6+PRE | 1d8+1                 |     |
| 4th   | 1d6+PRE | 1d8+1                 |     |
| 5th   | 2d6+PRE | 1d8+1                 |     |
| 6th   | 2d6+PRE | 1d8+1                 |     |
| 7th   | 2d6+PRE | 2d8+2                 |     |
| 8th   | 2d6+PRE | 2d8+2                 |     |
| 9th   | 3d6+PRE | 2d8+2                 |     |
| 10th  | 3d6+PRE | 3d8+3                 |     |
| 11th  | 3d6+PRE | 3d8+3                 |     |
| 12th  | 3d6+PRE | 3d8+3                 |     |
| 13th  | 4d6+PRE | 3d8+3                 |     |
| 14th  | 4d6+PRE | 4d8+4                 |     |
| 15th  | 4d6+PRE | 4d8+4                 |     |
| 16th  | 4d6+PRE | 4d8+4                 |     |
| 17th  | 5d6+PRE | 4d8+4                 |     |
| 18th  | 5d6+PRE | 5d8+5                 |     |
| 19th  | 5d6+PRE | 5d8+5                 |     |
| 20th  | 5d6+PRE | 5d8+5                 |     |

FEATS:

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Golpe Ilustre | Quando usa Golpe Destruidor, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno (-2 ataque/Percepção). |  |
| Golpe Inspirador | Ao usar Golpe Destruidor, você pode gastar +1PM, e, se acertar, os seus aliados que verem o golpe ser feito tem +2 em testes de ataque contra o mesmo alvo. |  |
| Curar Aprimorado | Quando usar Curar Pelas Mãos, você adiciona o seu modificador de Presença no total da cura.<br> |  |
| Estrategista | Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pela sua Presença). No próximo turno do aliado, ele ganha uma Ação de Movimento adicional. | 6º nível de Champion. |
| General | Quando você usa o poder Estrategista, aliados direcionados recebem 1d4 PM temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM. | Estrategista, 12º nível de Champion |

BREAK
CLASS_NOTE

| NAME                   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | PRE_REQUISITES                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Julgamento: Coragem    | Ação de movimento (2 PM): marque uma criatura. A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.                                                                                                                                                                                                                                                                                                               |                                                                                                                                       |
| Julgamento: Vindicação | Ação de movimento (2 PM): marque um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.                            |                                                                                                                                       |
| Inspirar Confiança     | Sua presença faz as pessoas darem o melhor de si. Quando um aliado em alcance curto faz um teste, você pode  gastar 2 PM para fazer com que ele possa rolar esse teste novamente. (*TODO:* renomear para não confundir com os poderes relacionados com **Palavras Inspiradoras**)                                                                                                                                                                                               |                                                                                                                                       |
| Inspirar Glória        | Uma vez por rodada, você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado.                                                                                                                                                                                                                                                                      | Inspirar  Confiança, 8º nível de champion. (*TODO:* renomear para não confundir com os poderes relacionados com **Palavras Afiadas**) |
| Liderar pelo Exemplo   | Você pode gastar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado do seu teste em vez de fazer o seu próprio.                                                                                                                                                                                                            | 6º nível de champion                                                                                                                  |
| Palavras Afiadas       | Você pode gastar uma ação padrão e 1 PM para fazer uma criatura inteligente fazer um teste de resistência de Presença. Se el falhar, você causa 2d6 pontos de dano psíquico não letal à criatura. Se ela passar, causa metade deste dano. Se a criatura for reduzida a 0 ou menos HP, em vez de cair inconsciente, ela se rende ou fica apavorada e foge de você da maneira mais eficiente possível. A cada quatro níveis, você pode gastar +1 PM para aumentar o dano em +1d6. |                                                                                                                                       |
| Schadenfreude          | (um inimigo falhou na resistência contra suas **Palavras Afiadas**) livre (1 PM): uma criatura a sua escolha que consegue ver o inimigo ganha PV temporários igual a metade do dano inflingido.                                                                                                                                                                                                                                                                                 | Palavras Afiadas                                                                                                                      |
| "Paus e Pedras"        | Você tem +2 de acerto em ataques e causa +2d6 de dano com **Golpe Destruidor** contra um inimigo que falhou na resistência contra suas **Palavras Afiadas**. %% (*TODO*: rework with "desmoralizado" debuff to make it easier to track in table and add more feats that interact with "desmoralizado") %%                                                                                                                                                                       | Palavras Afiadas                                                                                                                      |
| Voz Distante           | O alcance das suas **Palavras Afiadas** aumenta em 6sqr.                                                                                                                                                                                                                                                                                                                                                                                                                        | Palavras Afiadas                                                                                                                      |
| Multi-insulto          | Você pode gastar +3 PM ao usar **Palavras Afiadas** e escolher 1 alvo a mais.                                                                                                                                                                                                                                                                                                                                                                                                   | Palavras Afiadas, 6º nível de Champion                                                                                                |
| Inspirar Velocidade    | (ao usar **Palavras Inspiradoras**) +2PM: o alvo ganha uma ação de Movimento a mais no seu próximo turno.                                                                                                                                                                                                                                                                                                                                                                       | 6º nível de Champion                                                                                                                  |
| Inpirar Força          | (ao usar **Palavras Inspiradoras**) +1PM: o alvo tem +2 no acerto no próximo ataque que realizar até o fim do próximo turno dele, e dá +1 dado de dano da arma caso seja um ataque físico.                                                                                                                                                                                                                                                                                      |                                                                                                                                       |
| Inspirar Energia       | (ao usar **Palavras Inspiradoras**) +2PM: o alvo recebe PM temporários igual a seu modificador de Presença (min: 1). Você só pode afetar um mesmo alvo com **Inspirar Energia** uma vez por cena.                                                                                                                                                                                                                                                                               | 11º nível de Champion                                                                                                                 |


CLASS_NOTE_NAME: Julgamentos
CLASS_NOTE_DESCRIPTION:

Alguns poderes do paladino são Julgamentos. Proferir um julgamento gasta uma ação de movimento, a menos que a descrição diga o contrário. Julgamentos que não têm um efeito instantâneo duram até o fim da cena. Uma mesma criatura pode ser alvo de vários julgamentos diferentes, mas efeitos do mesmo julgamento não se acumulam.

}}

%% 
- **Curar Distante**. Quando usar Curar Pelas Mãos, você pode gastar +1PM para aumentar o alcanse de toque para curto.
 %%

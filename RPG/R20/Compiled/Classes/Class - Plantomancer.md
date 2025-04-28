{{pageNumber,auto}}
\page

{{class-definition "Plantomancer"
ARCHETYPE: Caster
EQUIPMENT_PROFICIENCIES: NONE.
MP_ATTB: SEN
SPELLCASTING_ATTB: SEN
SAVES:
- SEN

FEATURES:

| LEVEL | FEATURE | DESCRIPTION |
| ---- | ---- | ---- |
| 1 | Sementes Mágicas | You grow and maintain a small garden of magical plants. That garden provides you at the start of the day with a number of seeds filled with magical potential (they rot away if not used by the end of the day). Your garden produces 2 per day at level 1, and its production increases by 1 at every even level. |
| 1 | Herbomancia: Muda Mágica | 1PM. Você consegue usar seus sentidos através da Muda Mágica, e pode usar magias e habilidades de Plantomancer através dela. (ver: **Herbomancia e Plantas Mágicas**) |

MULTI_FEATURES:

| Level | Magic Seed |
| ----- |:----------:|
| 1st   |     2      |
| 2nd   |     3      |
| 3rd   |     3      |
| 4th   |     4      |
| 5th   |     4      |
| 6th   |     5      |
| 7th   |     5      |
| 8th   |     6      |
| 9th   |     6      |
| 10th  |     7      |
| 11th  |     7      |
| 12th  |     8      |
| 13th  |     8      |
| 14th  |     9      |
| 15th  |     9      |
| 16th  |     10     |
| 17th  |     10     |
| 18th  |     11     |
| 19th  |     11     |
| 20th  |     12     |

FEATS:

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Planta Resistente | Aumente o HP inicial das suas plantas mágicas em 2\* seu nível de Plantomancer, e a defesa delas em 4. |  |
| Planta Explosiva | Você pode gastar uma ação maior e 2PM. Escolha uma planta mágica sua em alcance médio. Ela explode violentamente, lançando sua seiva corrosiva em todas as criaturas adjacentes (quadrado de lado 3, centrado na planta), causando 4d6 de dano ácido. A cada 3 níveis você pode gastar mais 2PM e aumentar o dano em 2d6 e o tamanho do quadrado em 2. |  |


BREAK

CLASS_NOTE

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Planta Ajudante | Suas plantas contam como aliados para fins de flanqueamento. Seus aliados recebem +1 na defesa quando adjacentes às suas plantas. |  |
| Lanchinho Mágico | Você pode gastar uma ação maior e um número de sementes mágicas até metade do seu nível. Você enfia essas sementes na boca e mastiga elas, recuperando sua essência mágica e recuperando +1d4 PM por semente. |  |
| Plantas Conduentes Arcanas | Quando você usa um truque (feitiço nível 0), você pode escolher um número das suas Plantas Mágicas ativas, limitado pelo seu nível. Gaste essa quantidade de PM, e o truque é executado por você e pelas plantas selecionadas ao mesmo tempo (você escolhe os alvos). |  |
| Herbomancia: Raizes Mágicas | 3 PM. escolha 3 cubos contíguos de 1,5m a partir do ponto onde a semente foi plantada. De lá crescem raízes mágicas. Elas podem funcionar como rampas, escadas, paredes, cobertura e/ou terreno difícil. Você pode gastar +2PM para aumentar o número de cubos em 3. |  |
| Crescimento Acelerado | Você pode criar plantas com Herbomancia como uma reação, gastando +2PM. |  |
| Herbomancia: Samambaia Recuperadora | Ao fazer um descanso num ambiente natural, você pode gastar 2 Semente Mágica para invocar uma samambaia mágica, que acalma e reinvigora quem ficar embaixo dela. até 6 alvos a sua escolha recuperam um adicional de 1d4 PM nesse descanso. Você pode gastar mais sementes (até metade do seu nível), e para cada semente adicional os alvos recuperam +1d4 de PM. %%(As sementes gastas contam como parte das sementes que você receberia ao final do descanso). <- removed for now%% | nível 4 de Plantomancer |
| Herbomancia: Troco Paredão | 1 PM. O tronco de uma árvore mágica começa a crescer de lado, numa linha de 3sqr de comprimento, a partir do local onde a semente foi plantada. Troco Paredão funciona como cobertura parcial (+5 Defesa) enquanto está sendo erguida, e cobertura total uma vez erguida. |  |
| Herbomancia: Trepadeira da Batata de Aço | 2PM. A planta te protege como uma armadura, e toma dano por você. Dura até o final do seu próximo turno. |  |
| Raízes Ambulantes | Suas Plantas Mágicas tem velocidade de movimento 1sqr (elas se movem no seu turno). |  |
| Tunnel pelo solo | Livre (1PM): Você pode mover uma planta que você plantou com Herbomancia para um lugar que você consiga ver em 12sqr de distância de onde ela está. |  |
| Crescimento Acelerado | Você pode gastar +1 PM para usar uma habilidade de **Herbomancia** como reação. |  |
| Braço Treinado | Dobra o alcance das suas habilidades de **Herbomancia**. |  |
| Se é verde faz bem | Você ignora resistência a veneno e ácido de inimigos, e dá metade de dano em inimigos imunes a ácido e veneno | 4º nível de Plantomancer |
| Herbomancia: Raizes Enredantes | 2PM. área: círculo com 2sqr raio. terreno difícil e prende todos que entram. |  |

CLASS_NOTE_NAME: Herbomancia e Plantas Mágicas
CLASS_NOTE_DESCRIPTION:
Alguns dos poderes de Plantomancer envolvem usar suas Sementes Mágicas para criar plantas mágicas, por meio de Herbomancia.

Habilidades de Herbomancia, exceto quando o poder especificar, são habilidades com execução de **Movimento**, custam 1 **Semente Mágica** e um número de **PM**. Uma planta mágica cresce em um espaço visível a sua escolha num alcance de **9 sqr**.

As plantas criadas por Herbomancia tem 5 + 2\*o seu nível de Plantomancer de HP, 14 + o seu modificador de SEN de Defesa, resistência a dano de impacto e perfurante e fraqueza contra dano cortante, de fogo e gelo.
}}

{{page-break}}

{{spell-list
INCLUDE_TAGS:
- plant
- arcane
- decay
- recovery
- abjuration
- enchantment
- earth

EXCLUDE_TAGS:
- fire
- necrotic
- ilusion
- speech
- feral

MAX_LEVEL: 3
}}

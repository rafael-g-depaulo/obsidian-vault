{{pageNumber,auto}}
\page

{{class-definition "Channeler"
ARCHETYPE: Caster
EQUIPMENT_PROFICIENCIES: NONE
MP_ATTB: PRE
SPELLCASTING_ATTB: PRE
SAVES:
- CON

FEATURES:

| LEVEL | FEATURE              | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Invocar Feitiço      | **Ação Completa, concentração (0PM):** O Canalizador se concentra para conjurar uma magia poderosa (é considerado **Canalizando**, e exige concentração para se manter nesse estado). No final da rodada, se ainda estiver **Canalizando**, ele escolhe um alvo que consiga ver em 13sqr e rola um feitiço na tabela de invocação. O feitiço correspondente da tabela de invocação é usado no alvo. A cada círculo de magia acima do 1º que conseguir usar, pode gastar +1PM para aumentar o círculo da magia usada em 1. |
| 3     | Juntar Energia       | **Movimento:** Ganha 2 **Cargas Arcanas**, +1 por círculo de magia usada no turno. Você pode ter um máximo de **Cargas Arcanas** igual ao seu nível de Canalizador.<br>                                                                                                                                                                                                                                                                                                                                                   |
| 3     | Faísca Mágica: Poder | (magia causa dano) **+X Cargas Arcanas:** Aumenta o dano em +1d6 por **Carga Arcana** usada. (Ver: **Faíscas Mágicas e Potenciais Arcanos**).                                                                                                                                                                                                                                                                                                                                                                             |


MULTI_FEATURES:

| Level | Cargas Arcanas |
| ----- | -------------- |
| 1st   | -              |
| 2nd   | -              |
| 3rd   | 3               |
| 4th   | 4               |
| 5th   | 5               |
| 6th   | 6               |
| 7th   | 7               |
| 8th   | 8               |
| 9th   | 9               |
| 10th  | 10               |
| 11th  | 11               |
| 12th  | 12               |
| 13th  | 13               |
| 14th  | 14               |
| 15th  | 15               |
| 16th  | 16               |
| 17th  | 17               |
| 18th  | 18               |
| 19th  | 19               |
| 20th  | 20               |

FEATS:

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Canalização Defensiva | Enquanto estiver **Canalizando**, reduz qualquer dano que toma em PRE+lv/2. |  |
| Canalização Concentrada | Enquanto estiver **Canalizando**, ganha resistência em rolagens de resistência de CON e STR. | Canalização Defensiva |
| Canalização Mística | Enquanto estiver **Canalizando**, ganha resistência a efeitos mágicos enquanto canaliza. | Canalização Defensiva |



BREAK
CLASS_NOTE

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Reinforçamento Mágico | Ao invocar uma magia ao final de **Invocar Feitiço**, você pode lançar uma magia com alvo: pessoal e execução: completa/ação/movimento como ação livre. |  |
| Transmutação de Mana | Pode gastar **Carga Arcana** em vez de MP em aprimoramentos de **Invocar Feitiço**. |  |
| Magia Energizante | toda magia pode ser aumentada com **+2PM:** ganha **Cargas Arcanas** igual ao círculo da magia. |  |
| Retribuição Arcana | (ao ser atacado enquanto **Canalizando**) Reação: um jato de energia ricocheteia e acerta o atacante, dando 1d6 de dano. Por cada Círculo de magia que você pode lançar, você pode gastar +1PM para aumentar o número de dados em +1d6. Escolha 1 dos dados rolados. O tipo do dano é determinado pelo valor rolado, segundo a tabela abaixo. Você ganha **Cargas Arcanas** igual ao número de dados rolados. |  |

| d6 | dano |
| :--: | :--: |
| 1 | impacto |
| 2 | cortante |
| 3 | gelo |
| 4 | elétrico |
| 5 | fogo |
| 6 | psíquico |

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Controle do Destino | cada dia, pode trocar 1 linha das tabelas de invocação de cada círculo por uma magia que você sabe. | Level 6 Canalizador |
| Magia Energizada | Se você gastou pelo menos uma **Carga Arcana** em uma magia, a CD dela aumenta em +2. |  |
| Invocação Sortuda | Durante **Invocar Feitiço**, você pode pagar 1PM uma vez para re-rolar o círculo da magia lançada. |  |
| Potencial Arcano: Absoluto | X PM: pode usar uma magia de Xº Círculo (não truque) quando lançar a canalização. (vc ainda tem que pagar o custo normal da magia) | Level 8 em Canalizador |
| Potencial Arcano: Múltiplo | 2 PM: Conjure 2 magias em vez de 1 (todas do mesmo círculo). O segundo vai em um alvo diferente a sua escolha. Para cada 4 níveis de Canalizador, você pode gastar +1PM para aumentar o número de magias em 1. Os feitiços adicionais não aumentam de círculo com o MP gasto para aprimorar o primeiro. |  |
| Potencial Arcano: Focado | 2 PM: As magias conjuradas podem ter o mesmo alvo. | Potencial Arcano: Múltiplo |
| Potencial Arcano: Recursão | 2 PM: Ganha **Carga Arcana** igual ao círculo de magia invocada. |  |
| Faísca Mágica: Velocidade | 5 **Carga Arcana**: diminui execução em um passo (completa -> padrão, padrão -> movimento, movimento -> livre). |  |
| Faísca Mágica: Dispersão | 3 **Cargas Arcanas**: aumenta o número de alvos em +1. |  |
| Faísca Mágica: Visão | 1 **Carga Arcana**: dobra o alcance. |  |
| Faísca Mágica: Recuperar | X **Cargas Arcanas**. Você e o alvo recuperam 1d4 HP por **Carga Arcana** usada nesse modificador. |  |
| Escudo Arcano | **Movimento:** Se você gastou pelo menos 1 **Carga Arcana** nesse turno, você ganha hp temporário igual a metade do seu nível de canalizador (arredondado pra baixo) mais 2 por **Carga Arcana** usada. Esse hp temporário some no início do seu próximo turno.<br> |  |


CLASS_NOTE_NAME: Faíscas Mágicas e Potenciais Arcanos
CLASS_NOTE_DESCRIPTION:
Misturando sua capacidade mágica e habilidade de invocar magias perdidas no plano arcano, Canalizadores tem acesso a **Faíscas Mágicas** e **Potenciais Arcanos**.

Se você possui uma **Faísca Mágica**, você pode usar ela como modificador ao usar qualquer magia de Canalizador aplicável, usando um número de **Cargas Arcanas**. Se você possui um **Potencial Arcano**, ao final de **Invocar Feitiço** você pode escolher usar ele como modificador, usando um número de **MP**.

}}

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
{{page-break}}
### 2º Círculo
| d10  |           Magia            |
|:----:|:--------------------------:|
| 1-2  |       Scorching Ray        |
| 3-4  |        Hold Person         |
| 5-7  | Maximilian's Earthen Grasp |
| 8-10 |      Wither and Bloom      |

### Spell List

List of spells available for a Chaneler to learn.



{{spell-list
INCLUDE_TAGS:
- unholy
- boost
- arcane
- thaumaturgy
- elemental
- decay
- energy

EXCLUDE_TAGS:
- recovery
- holy
- warmagic
- wild

MAX_LEVEL: 3
}}

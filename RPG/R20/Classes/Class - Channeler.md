{{class-definition "Channeler"
ARCHETYPE: Caster
EQUIPMENT_PROFICIENCIES: NONE
SAVES:
- PRE

FEATURES:

| LEVEL | FEATURE |
| ---- | ---- |
| 1 | Invocar Feitiço |
| 3 | Juntar Energia |


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
}}

<!-- talvez mudar pra chaneler?? -->

**Invocar Feitiço.** Ação Completa, concentração (0PM): O Canalizador se concentra para conjurar uma magia poderosa (é considerado **Canalizando**, e exige concentração para se manter nesse estado). No final da rodada, se ainda estiver **Canalizando**, ele escolhe um alvo que consiga ver em 12sqr e rola um feitiço na tabela de invocação. O feitiço correspondente da tabela de invocação é usado no alvo. A cada círculo de magia acima do 1º que conseguir usar, pode gastar +1PM para aumentar o círculo da magia usada em 1).

**Juntar Energia.** Movimento: Ganha 2 **Cargas Arcanas**, +1 por círculo de magia usada no turno. Você pode ter um máximo de **Cargas Arcanas** igual ao seu nível de Canalizador.

**Faísca Mágica: Poder** (magia causa dano) **+X Cargas Arcanas:** Aumenta o dano inicial em +1d6 do elemento da magia. (Ver: **Faíscas Mágicas e Potenciais Arcanos**)

### Tabela de invocação
rola 1d6:
- 6: segundo círculo
- 3-5: primeiro círculo
- 1-2: truque

Para cada PM gasto na invocação aumente o círculo rolado em um. Uma vez definido qual círculo de magia vai ser usado, role 1d10 e determine qual magia é invocada.

### Truque
| d10  | Magia          |
| ---- | -------------- |
| 1-3  | Energy Blast   |
| 4-8  | Chilling Touch |
| 9-10 | Firebolt       | 

### 1º Círculo
| d10  | Magia         |
| ---- | ------------- |
| 1-3  | Bane          |
| 4-6  | Magic Missile |
| 7-8  | Sleep         |
| 9-10 | Witch Bolt    |

### 2º Círculo
| d10  | Magia                      |
| ---- | -------------------------- |
| 1-2  | Scorching Ray              |
| 3-4  | Hold Person                |
| 5-7  | Maximilian's Earthen Grasp |
| 8-10 | Wither and Bloom           |

- **Potencial Arcano: XXXXXXXXX.** 1PM: pode re-rolar a tabela

- **Potencial Arcano: XXXXXXXXXX.** XPM: pode usar uma magia de Xº Círculo (não truque) quando lançar a canalização. Pré-requisito: level XXX

- **Canalização Defensiva.** Enquanto estiver **Canalizando**, reduz qualquer dano que toma em PRE+lv/2.

- **Canalização Concentrada.** Enquanto estiver **Canalizando**, ganha resistência em rolagens de resistência de CON e STR. Pré-requisito: *Canalização Defensiva*.

- **Canalização Mística.** Enquanto estiver **Canalizando**, ganha resistência a efeitos mágicos enquanto canaliza. Pré-requisito: *Canalização Defensiva*.

- **PODER 6.** (ao ser atacado enquanto **Canalizando**) Reação: um jato de energia ricocheteia e acerta o atacante, dando 1d6 de dano.

- **PODER 7.** gasta energia pra canalizar 2x em uma rodada. level 12

- **PODER 7.** Pode gastar **Carga Arcana** em vez de MP em **Invocar Feitiço**.

- **PODER 7.** +2PM Ganha **Carga Arcana** igual ao círculo de magia invocada.

- **PODER 8.** cada dia, pode trocar 1 linha das tabelas de invocação de cada círculo por um feitiço que vc sabe.

- **Energia.** Se você gastou pelo menos uma **Carga Arcana** em uma magia, a CD dela aumenta em +2.

{{class-note "Faíscas Mágicas e Potenciais Arcanos"
Misturando sua capacidade mágica e habilidade de invocar magias perdidas no plano arcano, Canalizadores tem acesso a **Faíscas Mágicas** e **Potenciais Arcanos**.

Se você possui uma **Faísca Mágica**, você pode usar ela como modificador ao usar qualquer magia de Canalizador aplicável, usando um número de **Cargas Arcanas**. Se você possui um **Potencial Arcano**, ao final de **Invocar Feitiço** você pode escolher usar ele como modificador, usando um número de **MP**.
}}

- **Energia Diferente.**  toda magia pode ser aumentada com +2PM: ganha energia igual ao círculo da magia

- **Energia Diferente.**  toda magia pode ser aumentada com +X energia: diminui execução em um passo

- **Energia Diferente.**  toda magia single target pode ser aumentada com +X energia: aumenta o número de alvos

- **Energia Diferente.**  toda magia single target pode ser aumentada com +X energia: dobra o alcance.

- **Energia Diferente.**  ao canalisar, pode gastar X energia: execute uma magia com alvo: pessoal.

- **Energia Diferente.** ao canalisar, pode gastar X energia: cura Y.

- **Energia Diferente.** Movimento: Se você gastou pelo menos 1 **Carga Arcana** nesse turno, você ganha hp temporário igual a metade do seu nível de canalizador (arredondado pra baixo) mais 2 por **Carga Arcana** usada. Esse hp temporário some no início do seu próximo turno.

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

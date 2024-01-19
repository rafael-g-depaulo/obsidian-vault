{{class-definition "Juggernaut"
ARCHETYPE: Martial
EQUIPMENT_PROFICIENCIES: Simple weapons, martial weapons, medium and heavy armor.
SAVES:
- STR
- CON

FEATURES:

| LEVEL | FEATURE | DESCRIPTION |
| ---- | ---- | ---- |
| 1 | Guts | You have +1 Strength and -1 movement speed (down to a minimum of 3sqr) for each Guts point you have. You lose all Guts at the end of the scene. You can have up to your Juggernaut level + 1 Guts points. Every 5 Guts you increase your size by 1 category, up to large. |
| 1 | Raise Guard | Movement (1PM): Gain CON mod. (minimum 0) + your level/2 (rounded down) temporary HP, and +1 **Guts**. While you have this temporary HP, you're considered as "On Guard". |
| 2 | Powerful Strike | Movement Action (1PM): Your next melee attack until the end of your next turn deals an extra 1d10 + STR mod. damage. At 5th, 9th, 13th and 17th levels you can spend +1PM to increase the damage by 1d10 |

WIDE: true
MULTI_FEATURES:

| Level | Levantar Guarda | Max Guts | Golpe Poderoso |
| ----- | --------------- | -------- | -------------- |
| 1st   | CON             | 2        | 1d10+STR       |
| 2nd   | CON+1           | 3        | 1d10+STR       |
| 3rd   | CON+1           | 4        | 1d10+STR       |
| 4th   | CON+2           | 5        | 1d10+STR       |
| 5th   | CON+2           | 6        | 2d10+STR       |
| 6th   | CON+3           | 7        | 2d10+STR       |
| 7th   | CON+3           | 8        | 2d10+STR       |
| 8th   | CON+4           | 9        | 2d10+STR       |
| 9th   | CON+4           | 10       | 3d10+STR       |
| 10th  | CON+5           | 11       | 3d10+STR       |
| 11th  | CON+5           | 12       | 3d10+STR       |
| 12th  | CON+6           | 13       | 3d10+STR       |
| 13th  | CON+6           | 14       | 4d10+STR       |
| 14th  | CON+7           | 15       | 4d10+STR       |
| 15th  | CON+7           | 16       | 4d10+STR       |
| 16th  | CON+8           | 17       | 4d10+STR       |
| 17th  | CON+8           | 18       | 5d10+STR       |
| 18th  | CON+9           | 19       | 5d10+STR       |
| 19th  | CON+9           | 20       | 5d10+STR       |
| 20th  | CON+10          | 21       | 5d10+STR       |

FEATS:

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Tanque de Combate | Se você está de Guarda Alta, pode gastar 1PM e executar um ataque como ação de movimento"<br> |  |
| Vingança | Se um inimigo tirar a sua guarda, seu próximo ataque contra ele até o fim do seu próximo turno tem vantagem na rolagem do ataque, e dá +FOR mod. de dano (mínimo 1).<br> |  |
| "Tragam o próximo" | Quando levar um inimigo a 0, você pode gastar +1PM e usar "Levantar Guarda" como ação livre, e ganha +1 Guts até o final da cena. |  |
| "A Melhor Defesa..." | (Guarda Alta) Ação de Movimento (1 PM): Você abaixa a guarda, tem -1 de Guard pela cena e ganha +2 Guts até o final da cena. A cada 3 níveis pode gastar +1PM para receber -1 Guard e +2 Guts. |  |
| Crítico Paciente | Você ganha metade do seu **Guts** (arrendondado pra baixo) de margem de ameaça |  |
| Crítico Fortificador | Quando acertar um ataque crítico, você ganha +2 Guts. | Crítico Paciente |
| Crítico Brutal | Sua arma dá +1 dado de dano nos seus críticos de estiver de guarda alta.<br> | Crítico Paciente |



BREAK

| NAME | DESCRIPTION | PRE_REQUISITES |
| ---- | ---- | ---- |
| Crítico Poderoso | (Guarda Alta) ao realizar um ataque crítico: Você pode realizar um Golpe Poderoso como parte do ataque atual (você ainda tem que pagar PM pelo golpe poderoso). | Crítico Paciente |
| Golpe Brutal | (durante ataque crítico) Ao usar Golpe Poderoso (+2PM): Multiplique os dados do Golpe Poderoso pelo seu multiplicador de crítico, como se fossem os dados do dano base da sua arma. | Crítico Paciente |
| Golpe Derrubador | Ao usar Golpe Poderoso (+1PM): Se o golpe acertar, você derruba o alvo. (Veja: [[RPG/R20/Combat/Battle Maneuvers#Derrubar]]) |  |
| Golpe em Arco | Ao usar Golpe Poderoso (+1PM): Você ataca todos os inimigos no seu alcance (que estejam na sua frente). |  |
| Defesa Impenetrável | Some seu modificador de força no HP temporário recebido por **Levantar Guarda** (limitado pelo seu nível) . |  |
| Defesa Imbatível | Enquanto estiver de Guarda Alta, você tem +2 Guard. <br> | Defesa Impenetrável |
| Defesa Imediata | No início da iniciativa, se você não está surpreso você pode levantar a guarda como ação livre (e sem custo de PM). | Defesa Impenetrável |
| Defesa Implacável | Ao Levantar Guarda (+1PM): Você pode pode usar [[Combat Actions#Endurance]] como ação livre, sem custo adicional. | Defesa Impenetrável |
| Defesa Intocável | (Você negou um ataque com [[Combat Actions#Endurance]]) (Guarda Alta) Reação (1PM): Você pode imediatamente fazer um ataque de oportunidade contra o atacante. Se acertar, ganha +1 Guts. | Defesa Impenetrável |
| Defesa Impregnável | (Guarda Alta) reação (2PM): você pode somar sua Guard num teste de resistência físico. Após a ação que causou o teste se resolver, você abaixa a guarda. | Defesa Impenetrável |
| Defesa Impermeável | (Guarda Alta) (Um aliado adjacente é atacado) Reação (2PM): Diminua o dano pela sua Guard. | Defesa Impenetrável. |
| Defesa Inabalável | (Guarda Alta) Você pode gastar 3PM para adicionar sua Guard em qualquer teste de resistência de um atributo mental. Após a ação que causou o teste se resolver, você abaixa a guarda. | 1 poder que tem Defesa Impenetrável como pré-requisito. |
| Defesa Indestrutível | (Guarda Alta, ao receber dano que quebraria sua guarda) Reação (2PM): imediatamente após tomar o dano, **Levante Guarda**. | 2 poderes que tem Defesa Impenetrável como pré-requisito. |

}}


%%
TODO: Add more stuff that uses guts, or buff guts. - dar a possibilidade de gastar Guts em vez de PM

- **Terremoto**. Ação Completa (10PM): Você acerta o chão com o maior Golpe Poderoso que pode usar e o solo treme com o seu enorme poder. Todas as criaturas de sua escolha em um raio de (1+Guts) quadrados de você precisam fazer um teste de resistência de Força (CD: 10 + seu bônus de Proficiência + seu Guts). Aqueles que falharem sofrem os efeitos do seu Golpe Poderoso mais potente +1d10 de dano por cada Guts que você tem (o dano de terremoto é de impacto). Terremoto ativa todos os seus poderes com nome "Golpe \_\_\_\_". Você perde todo seu Guts. Pré-requisito: 10º nível em Juggernaut.
- **Placeholder**. **Golpe Poderoso** dá seu Guts de dano adicional.
  %%

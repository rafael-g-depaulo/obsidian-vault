## Intro
Partindo da contração de *routing* e *magic*, chegamos no nome ragic para a biblioteca, procurando enfatizar a melhoria de DX ao usar a biblioteca, sobre como idealmente o sentimento do usuário da biblioteca é como se ela estivesse fazendo mágica para simplesmente saber a lógica de negócios do app, validar e auto-completar o código enquanto ele escreve.

Ao longo do desenvolvimento da biblioteca, passamos por algumas situações específicas que trouxeram problemas particularmente complexos de resolver, ou que nos fez repensar parcialmente sobre o conceito ou *API* externa da biblioteca.

### Situação 1: Representar a árvore de rotas como um tipo
Como exploramos superficialmente na seção XXX, um dos problemas centrais à biblioteca é a construção do tipo *string Unit Tuple* que vai ser usado para a validação de tipo das rotas da aplicação em lugares como a propriedade *"to"* do componente de Link. Dado o foco em eliminação de duplicação de código, precisamos extrair essa informação da definição das rotas, já que esse é um lugar que o desenvolvedor necessariamente tem que inserir essas informações, e não queremos fazer com que ele tenha que duplicar isso.

Nesse estágio não existe uma API bem definida da biblioteca. Isso é proposital, para focar primeiro na lógica central dela, e permitir que a API flua naturalmente disso. Mesmo assim, a partir dos pensamentos anteriores uma proto-API já começa a tomar forma. O usuário de alguma forma vai definir qual a lógica de roteamento do app, descrevendo a árvore de segmentos de rota e também quais componentes de rota são mapeados a quais rotas. Disso, é extraída a informação necessária tanto de tipos (compile time) quanto de valores (run time). A biblioteca recebe essa informação de alguma forma e gera o Router, o componente de Link e qualquer outra ferramenta necessária para a lógica de roteamento e navegação dentro do app. Temos então um modelo mental de algo como:
```ts
import { defineRoutes, makeLink, makeRouter } from "ragic"
const routes = defineRoutes(/* informação de roteamento aqui */)
export const Link = makeLink(routes)
export const Router = makeRouter(routes)
```
. Com essa ideia mental, mergulhamos no primeiro problema: "como construir um tipo que contenha as informações da árvore de rotas".

Começando com uma ideia minimalista, usamos os conceitos de tuplas e string literals para construir um tipo similar com o seguinte:
![[Pasted image 20231017154334.png]]
. Aqui definimos uma árvore de roteamento como um nó de rota, e um nó de rota é uma tupla com dois elementos: o nome do segmento de rota como uma string literal
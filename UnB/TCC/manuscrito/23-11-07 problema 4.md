
## Situação 4: Finalização da tipagem do builder
Entrando mais a fundo na extração da tipagem que mencionamos no desafio 2, começamos a desenvolver a API final do builder para a definição da árvore de roteamento.

Definimos os seguintes objetivos para a tipagem inicial do builder:

- uma chamada para uma função `createRoutes` criará um 
- Método de ***step*** `path`, que recebe o nome de um segmento de rota, e um objeto de opções.
- o nome do segmento de rota recebido por `path` pode ser um segmento simples ou de índice.
- o objeto de opções tem o componente react da página a ser associada com aquela rota, se for concreta
- se o segmento tiver nós filhos na árvore de roteamento, o objeto de opções terá os filhos representados por uma chamada do próprio builder, associados com uma propriedade `children`
- para facilidade de escrita e leitura, existirá
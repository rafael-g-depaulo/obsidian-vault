## Funcionamento da biblioteca
Depois de todo o processo de pesquisa e desenvolvimento da ferramenta, vamos explorar como ficou o resultado final do mínimo produto final de ragic.

### Definição da árvore de roteamento
Definimos os seguintes objetivos para a tipagem inicial do builder:

- uma chamada para uma função `createRoutes` criará o ***objeto nulo***(conferir a nomenclatura correta, e checar que a contextualização teórica tá feita) do builder.
- Método de ***step*** `path`, que recebe o nome de um segmento de rota, e um objeto de opções.
- o nome do segmento de rota recebido por `path` pode ser um segmento simples ou de índice.
- o objeto de opções tem o componente react da página a ser associada com aquela rota, se for concreta
- se o segmento tiver nós filhos na árvore de roteamento, o objeto de opções terá os filhos representados por uma chamada do próprio builder, associados com uma propriedade `children`
- para facilidade de escrita e leitura, existirá uma função apelido `path`, que quando chamada será equivalente a chamar `createRoutes().path`

Com esse objetivos definidos, queremos chegar numa tipagem final que permita um uso como o seguinte.

![[Pasted image 20231108104901.png]]

para a construção tanto de `path` quanto `createRoutes().path`, criamos a fábrica `makePathFunc` abaixo:
![[Pasted image 20231108185324.png]]

Nela, usamos os conceitos de contexto, informação atual e informação de filhos. No exemplo da figura XXXX, durante a chamada de `.path()`  na linha 3, temos a informação da chamada de `path` da linha 2 como contexto, a informação da chamada da linha 5 como informação de filhos, e os parâmetros atuais (a string `"/blog"` e o componente da linha 4) como informação atual.

![[Pasted image 20231108185749.png]]

O builder assume um contexto existente, tipado como uma RouteTree. As informações correntes são designadas 
![[Pasted image 20231108190121.png]]
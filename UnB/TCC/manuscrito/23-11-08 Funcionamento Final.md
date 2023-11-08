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

O builder assume um contexto existente, tipado como uma RouteTree. As informações correntes são recebidas como o caminho do segmento de rota atual (path) e o resto das opções do segmento de rota (opts).
![[Pasted image 20231108190121.png]]

Para garantir que o compilador typescript só aceite tipos unitários de string e não o tipo string em si como o tipo de `path`, usamos o tipo auxiliar EnsureLiteral, definido como:

```ts
export type EnsureLiteral<L extends string> = string extends L ? never : string;
```

. Essa definição garante que o tipo `L` dado tem que extender string, mas não pode ser string. A única forma de se fazer isso em typescript é com uma união de tipos unitários string.

`opts` é tipado como Options, que é um superset de `SegmentKindOpts`, definido como:

```ts
type SegmentKindOpts =
  | EmptyObject // empty path (also optional, can just not give opts)
  | { component: Component } // concrete path (with "Page" or "Index" component)
  | { link_to: string }; // link path
```

No início da lógica da função, as rotas concretas existentes em opts.children são extraídas, e é criado um dicionário com elas, re-contextualizando o nome delas usando o segmento atual como pai para o caminho.
```ts
      const concreteChildRoutes =
        'children' in opts
          ? Object.fromEntries(
            Object
              // get all concrete routes from children
              .entries<Component>(opts.children as Record<string, Component>)
              // only routes, not methods and stuff
              .filter(([key]) => key[0] === '/')
              // append the current path as it's parent
              .map(([key, value]) => [`${path}${key}`, value])
          )
          : {};
```

Se o segmento atual é concreto, criamos um dicionário unitário com o caminho e componente dele.

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
```ts
// if current segment is a concrete route, add it
const concreteCurrentRoute =
	'component' in opts ? { [path]: opts.component } : {};
```

Juntamos então as rotas atual, dos filhos e do contexto anterior
```ts
// compile new concrete routes based on context, children and current
const concreteRoutes = {
	...context,
	...concreteCurrentRoute,
	...concreteChildRoutes,
} as Record<
	ConcretePaths<NewRouteTree<RouteTree, PathName, Options>>,
	Component
>
```

e esse novo dicionário de rotas vira o contexto para qualquer chamada futura do builder.

```ts
const pathFunc = makePathFunc(concreteRoutes as RouteTree)
```

Com o dicionário de rotas, o método `.path` do builder construídos, só é necessário inserir a type_brand equivalente da árvore de roteamento criada, construir um novo objeto com todas as informações necessárias e retornar ele.

```ts
const newRoutes = {
	[type_brand_key]: {} as NewRouteTree<RouteTree, PathName, Options>,
	path: pathFunc,
	...concreteRoutes,
	// explicit conversion below needed to ensure proper typing
} as unknown as PathFuncReturnByOpts<Options, RouteTree, PathName>

return newRoutes
```

A informação de tipo é construída corretamente pelo uso de 2 tipos auxiliares, `PathFuncReturnByOpts` e `NewRouteTree`.

```ts
import { EmptyObject, ExtractRouteTree } from './globals';
import { Routes } from './route';
import {
  ConcreteSegment,
  EmptySegment,
  LinkSegment,
  Segment,
  SegmentKindOpts,
  SegmentOpts,
} from './segment';

export type PathFuncReturnByOpts<
  UserOpts,
  RestTree extends unknown[],
  PathName extends EnsureLiteral<PathName>
> = SegmentKindOpts extends UserOpts
  ? PathFuncReturn<RestTree, PathName, EmptyObject>
  : PathFuncReturn<RestTree, PathName, UserOpts>

type PathFuncReturn<
  RestTree extends unknown[],
  PathName extends EnsureLiteral<PathName>,
  Opts
> = Opts extends SegmentOpts<infer Children>
  ? 'component' extends keyof Opts
    ? Routes<
        [
          ...RestTree,
          Segment<PathName, ConcreteSegment, ExtractRouteTree<Children>>
        ]
      >
    : // if link path
    'link_to' extends keyof Opts
    ? Routes<
        [
          ...RestTree,
          Segment<PathName, LinkSegment, ExtractRouteTree<Children>>
        ]
      >
    : // if empty path
      Routes<
        [
          ...RestTree,
          Segment<PathName, EmptySegment, ExtractRouteTree<Children>>
        ]
      >
  : never
```

Em `PathFuncReturnByOpts`, de forma semelhante com o anterior `EnsureLiteral`, é feita uma checagem se o tipo entrado `UserOpts` é válido (se é um subset de `SegmentKindOpts`). Passando nessa checagem, os tipos parâmetro são recebidos por `PathFuncReturn`.

`PathFuncReturn` identifica qual o tipo de segmento sendo construído (vazio, concreto ou apelido), e constrói uma nova árvore de roteamento a partir dos parâmetros e da rota anterior usando os tipos de utilidade `Routes` e `Segment`.

`Segment` é simplesmente um tipo feito para estruturas a informação sobre um segmento da árvore de rotas, da forma:
```ts
export type ConcreteSegment = 'concrete'
export type LinkSegment = 'link'
export type EmptySegment = 'empty'

export type SegmentKinds =
  | ConcreteSegment // has component ("page" and "index" kinds)
  | LinkSegment // alias routes
  | EmptySegment // has no component

export type Segment<
  Name extends EnsureLiteral<Name>,
  Kind extends EnsureFromUnion<Kind, SegmentKinds>,
  ChildRouteTree extends unknown[]
> = [Name, Kind, ChildRouteTree]
```
Com o segmento construído dessa forma, podemos definir a árvore de roteamento em si como uma tupla de Segmentos, onde os filhos de um nó são representados como uma tupla no parâmetro  `ChildRouteTree`.

`Routes` é definido como um dicionário de todas as rotas concretas existentes na árvore, do método path do **builder**, e de um type brand (adicionar contextualização teórica sobre type brands).

```ts
export type Routes<RouteTree extends unknown[]> = Brand<
  typeof type_brand_key,
  RouteTree
> & Record<ConcretePaths<RouteTree>, Component> & { path: PathFunc<RouteTree> }
```

`ConcretePaths` é um tipo de utilidade que a partir do tipo `RouteTree` extrai e compila, de forma recursiva, o caminho completo de todas as rotas concretas que existem na árvore.

```ts
// Get all concrete paths for a route tree
export type ConcretePaths<UserRoutes> = UserRoutes extends Routes<
  infer RouteTree
>
  ? CompilePath<ConcretePathsRecursion<RouteTree, []>>
  : never;

type ConcretePathsRecursion<
  RouteTree,
  AccumulatePath extends string[]
> = 
unknown extends RouteTree ? AccumulatePath :
RouteTree extends [] ? never :
RouteTree extends [infer Child, ...infer RestTree] ?
	| (
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // TODO: reler e refatorar isso quando estiver descansado
    // caso não tenha mais nós irmãos
    [] | unknown extends RestTree ?
	    // recursão só nos filhos
      Child extends ConcreteSegment<infer ChildPathname extends string, infer _GrandChildren>
        ? [...AccumulatePath, ChildPathname]
        : never
    // caso tenha nós irmãos
    :
    // caso o primeiro filho direto seja um segmento concreto
    Child extends ConcreteSegment<infer ChildPathname extends string, infer GrandChildren>
			? ConcretePathsRecursion<GrandChildren, [...AccumulatePath, ChildPathname]>
		// caso o primeiro filho direto seja um segmento de apelido
		: Child extends LinkSegment<infer ChildPathname extends string, infer GrandChildren>
			? ConcretePathsRecursion<GrandChildren, [...AccumulatePath, ChildPathname]>
    // caso o primeiro filho direto seja um segmento vazio
		: Child extends EmptySegment<infer ChildPathname extends string, infer GrandChildren>
			? ConcretePathsRecursion<GrandChildren, [...AccumulatePath, ChildPathname]>
		: never
  )
  // recursão nos outros nós irmãos   
	| ConcretePathsRecursion<RestTree, AccumulatePath>
: never
```


### Uso da árvore de roteamento
Uma vez com a lógica de roteamento definida, é necessário integrar essa lógica nas funcionalidades de roteamento e navegação da aplicação.

Para isso são necessárias novas utilidades, cada uma com sua tipagem derivada do tipo `Routes` da árvore de rotas específica da aplicação. Essas utilidades foram centralizadas numa função `UseRoutes`, que recebe as rotas construídas pelo *builder* e o tipo respectivo como parâmetros, passa eles para as fábricas das utilidades necessárias e retorna um objeto com elas.
##### Lembrar de ter contextualização: fábrica

```ts
export const UseRoutes = <UserRoutes>(routes: UserRoutes) => ({
  Link: makeLink<UserRoutes>(routes),
  Router: makeRouter<UserRoutes>(routes),
  useRouteParams: makeUseRouteParams<UserRoutes>(routes),
})
```

Segue um detalhamento da utilidade, definição e uso de cada uma das utilidades.
#### `Router`
`Router` é o componente *react* que representa a lógica de roteamento em si, e é usado para multiplexar entre as páginas conforme a *URL* atual do navegador. De forma semelhante com o equivalente de `react-router-dom`, o uso dele se dá como:

```ts
// routes.ts
export const { Router } = UseRoutes(routes)

// App.tsx
import { Router } from "./routes"
const App = () =>
	<>
		<Router />
	</>

// main.tsx
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
```
. Dessa forma, quando o caminho atual do navegador é `/`, por exemplo, Se usarmos as rotas definidas na figura ###### (definição árvore roteamento), `Router` se comportará equivalente a `PageHome`, e se o caminho fosse `/about/us`, se comportará de forma equivalente a `PageAboutUs`.

#### `useRouteParams`
Em rotas de índice, como a `/blog/:blog_id` do exemplo da figura ######, existe informação adicional contida na própria *URL* que precisa ser extraída e processada para que a aplicação funcione corretamente. No exemplo usado, se o caminho real usado for `/blog/25`, `25` é o identificador daquele post específico do blog, e a aplicação precisa fazer uma requisição ao servidor `backend` para receber os dados que precisa para a visualização da postagem. A extração dessa informação de índice da *URL* é feita por meio do *hook* `useRouteParams`.

O uso dele é
```ts
// routes.ts
export const { useRouteParams } = UseRoutes(routes)

// pages/ShowBlogPostPage.tsx
import { useRouteParams } from "../routes"

export const ShowBlogPostPage = () => {
  const { blog_id } = useRouteParams("/blog/:blog_id")
	// uso de blog_id para a lógica de negócios da aplicação
}
```

`useRouteParams` recebe como um parâmetro de tipo uma *string unit* que representa a rota atual (que pode ser inferido por uma `string` passada como argumento), e a partir disso constrói um tipo objeto, com uma chave para cada índice que a rota contém. O *hook* retorna um objeto do tipo construído, populando a informação com os valores extraídos da *URL*. No momento, a lógica interna depende de uma utilidade equivalente de `react-router-dom`, então `useRouteParams` funciona como uma abstração de tipagem em cima do hook de mais baixo nível de `react-router-dom`.

A implementação da fábrica que cria o *hook* é:

```ts
export const makeUseRouteParams =
  <UserRoutes,>(routes: UserRoutes) =>
  <
    IndexedRoute extends IndexedPaths<
      ExtractRouteTree<UserRoutes>
    > = IndexedPaths<ExtractRouteTree<UserRoutes>>
  >(
    route?: IndexedRoute
  ): RouteIndexParams<IndexedRoute> => {
    return useParams() as any;
  };
```

Recebendo `UserRoutes` como parâmetro de tipo, a fábrica constrói um hook que por si recebe um parâmetro de tipo `IndexedRoute`, que é uma *string unit* representando a rota atual, da qual os parâmetros devem ser extraídos. Como mencionado anteriormente, esse tipo `IndexedRoute` pode ser inserido explicitamente como parâmetro de tipo, ou inferido pelo argumento opcional `route`.

A lógica de implementação em *runtime* do *hook* em si é equivalente à da utilidade similar `useParams` de `react-router-dom`, então enquanto `react-router-dom` existir como uma dependência interna da biblioteca, não é necessário re-implementar a lógica.

A tipagem de `IndexedRoute` e do objeto de retorno do *hook* dependem das utilidades de tipo internas `IndexedPaths`, `ExtractRouteTree` e `RouteIndexParams`.

`ExtractRouteTree` é um simples tipo de utilidade que utiliza a *type brand* do tipo de `Routes` para inferir o tipo interno da árvore de rotas.
```ts
export type ExtractRouteTree<UserRoutes> = UserRoutes extends {
  [type_brand_key]: infer RouteTree;
}
  ? RouteTree extends unknown[]
  ? RouteTree
  : never
  : never
```

`IndexedPaths` é um tipo que, recebendo o tipo `RouteTree` com a informação da árvore de roteamento, compila de forma recursiva todas as rotas concretas de índice válidas.
```ts
export type IndexedPaths<
  RouteTree extends unknown[],
  AccumulatePath extends string[] = []
> = 
  [] extends RouteTree ? never
  : RouteTree extends [infer Route, ...infer RestTree]
  ? Route extends [
      infer ChildName extends string,
      infer ChildKind extends string,
      infer GrandChildren extends unknown[]
    ]
    ? ChildName extends EnsureLiteral<ChildName>
      ? ChildKind extends EnsureFromUnion<ChildKind, SegmentKinds>
        ? // this segment
          | IfIndexedPath<[...AccumulatePath, ChildName]>
            // recur on siblins
            | IndexedPaths<RestTree, AccumulatePath>
            // recur on children
            | IndexedPaths<GrandChildren, [...AccumulatePath, ChildName]>
        : never
      : never
    : never
  : never
```

`IndexedPaths` por sua vez depende das utilidades `EnsureLiteral`, `EnsureFromUnion` e `IfIndexedPath`. `EnsureLiteral` foi explorado anteriormente, e, de forma similar, `EnsureFromUnion` garante que um tipo recebido que estende *string* não só é uma *string unit*, mas também pertence à união recebida como argumento.

```ts
export type EnsureFromUnion<
  S extends string,
  Union extends EnsureLiteral<Union>
> =
  // needs to be literal
  string extends S ? never :
	// needs to be contained in union
	Union extends S
		? string
    : never
```

`IfIndexedPath` contém a lógica de conferir se uma *string unit* representa ou não um caminho concreto de índice, usando o tipo de utilidade `EnsurePathContainsIndexSegment`. `IfIndexedPath` recebe uma tupla de *string units* representando os segmentos da rota, e recursivamente navega por ela, quebrando a recurção e retornando positivamente com o caminho compilado se for achado um segmento de índice. Se o caminho não tiver nenhum segmento de índice, é retornado `never`.

`EnsurePathContainsIndexSegment` por si checa se um único *string unit* contém um segmento índice. Ele faz isso checando se o segmento atual do tipo é um índice, e se não for ele checa recursivamente nos segmentos seguintes do parâmetro recebido, se a *string unit* recebida tiver múltiplos segmentos.

```ts

type EnsurePathContainsIndexSegment<
  Path extends string,
  Acc extends string = ''
> =
  Path extends `/:${infer _Index}`
    ? `${Acc}${Path}`
    : Path extends `/${infer NonIndexSegment}/${infer Rest}`
    ? EnsurePathContainsIndexSegment<`/${Rest}`, `${Acc}/${NonIndexSegment}`>
    : never

export type IfIndexedPath<
  Path extends string[],
  AccPath extends string[] = []
> = [] extends Path
  ? never
  : Path extends [infer Segment extends string, ...infer Rest extends string[]]
  ? Segment extends EnsurePathContainsIndexSegment<Segment>
    ? CompilePath<[...AccPath, ...Path]>
    : IfIndexedPath<Rest, [...AccPath, Segment]>
  : never
```

`RouteIndexParams` é o tipo que o hook `useRouteParams` usa para tipar o objeto de retorno. Ele recebe como parâmetro uma *string unit* representando a rota atual, e usando o tipo de utilidade `RouteIndexParamsKeys` constrói o tipo desejado.

```ts
type RouteIndexParams<RoutePath extends EnsureLiteral<RoutePath>> = Record<
  RouteIndexParamsKeys<RoutePath>,
  string
>
```

`RouteIndexParamsKeys`, por sua vez, recebe o mesmo parâmetro de tipo, e recursivamente extrai dela todos os nomes dos seus segmentos de índice, e retorna uma união deles. 

```ts
type RouteIndexParamsKeys<RoutePath extends EnsureLiteral<RoutePath>> =
  // index non-leaf
  RoutePath extends `/:${infer IndexSegName}/${infer Rest}`
    ? IndexSegName | RouteIndexParamsKeys<`/${Rest}`>
	:
	// non-index non-leaf
	RoutePath extends `/${infer _SegName}/${infer Rest}`
    ? RouteIndexParamsKeys<`/${Rest}`>
	:
	// index leaf
	RoutePath extends `/:${infer IndexSegName}`
    ? IndexSegName
	:
	// non-index leaf
	RoutePath extends `/${infer _SegName}`
    ? never
	: never
```

##### Lembrar de ter Contextualização: Hooks

#### `Link`
Mesmo com a lógica de roteamento funcionando, ainda é necessário a funcionalidade de navegação entre as rotas definidas. Para isso, é usado o componente `Link`, um paralelo da tag âncora `a` do HTML (**TODO: referência documentação html**). Não só isso, como o código HTML eventualmente gerado pelo código Javascript do bundle final vai incluir tags âncora.

Como parte central da ideação da biblioteca e motivo inicial da sua construção, a tipagem do componente `Link` é extremamente importante do ponto de vista de `DX`, dado que o usuário desenvolvedor vai passar muito mais tempo interagindo com a lógica de navegação do que com a lógica de roteamento.

A fábrica do componente de Link é definida como:

```ts
import { Link as LinkReactRouterDom } from 'react-router-dom'

const parseParams = (routeTemplate: string, params: Record<string, string>) =>
  routeTemplate
    .split('/')
    .map((segment) => (segment[0] === ':' ? params[segment.slice(1)] : segment))
    .join('/')

export const makeLink =
  <UserRoutes,>(routes: UserRoutes) =>
  (props: LinkProps<UserRoutes>) => {
    return (
      <LinkReactRouterDom
        to={parseParams(props.to, props.params)}
        children={props.children}
      />
    )
  }
```

De novo a lógica interna de implementação *runtime* é passada para `react-router-dom`. A função de utilidade `parseParams` compila o caminho real do *link* a partir de uma string com o nome da rota e um dicionário com os valores para qualquer índi
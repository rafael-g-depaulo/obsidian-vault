### Uso da árvore de roteamento
Uma vez com a lógica de roteamento definida, é necessário integrar essa lógica nas funcionalidades de roteamento e navegação da aplicação.

Para isso são necessárias novas utilidades, cada uma com sua tipagem derivada do tipo `Routes` da árvore de rotas específica da aplicação. Essas utilidades foram centralizadas numa função `UseRoutes`, que recebe as rotas construídas pelo *builder* e o tipo respectivo como parâmetros, passa eles para os construtores das utilidades necessárias e retorna um objeto com elas.

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
	// u
}
```

`useRouteParams` recebe como um parâmetro de tipo uma *string unit* que representa a rota atual (que pode ser inferido por uma `string` passada como argumento), e a partir disso constrói um tipo objeto, com uma chave para cada índice que a rota contém. O *hook* retorna um objeto do tipo construído, populando a informação com os valores extraídos da *URL*. No momento, a lógica interna depende de uma utilidade equivalente de `react-router-dom`, então `useRouteParams` funciona como uma abstração de tipagem em cima do hook de mais baixo nível de `react-router-dom`.



----------------------------------------------
---------------------
------------
-------------
------------



##### Lembrar de ter Contextualização: Hooks



#### `Link`
## Situação 2: Extrair as informações de tipo sem duplicação de código.

Como vimos na situação 1, foi achado uma forma simples de representar as informações de tipo necessária para atingir o objetivo principal da biblioteca. O próximo passo é explorar a parte da API onde recebemos essas informações do usuário. A informação de tipos necessária em compile time e de valores necessária em runtime, em typescript, são definidas separadamente. 

Já temos uma ideia geral da API da biblioteca como uma função que recebe a informação da árvore de rotas em algum formado, e retorna um objeto que pode ser usado para criar as ferramentas necessárias para fazer o roteamento e navegação no app. Para que esse objeto tenha o tipo correto que desejamos que valide corretamente as rotas como definidas, essa função deve receber as informações de tipo e valor, em algo como:

```ts

// definição do tipo das rotas
type Routes = [
	"/",
	[
		["/home", []],
		["/blog", [
			["/:blog_id", []],
		]],
		["/about", [
			["/us", []]
		]],
	]
]

const routes = createRoutes<Routes>({
    path: "/",
    children: [
        { path: "/home" },
        { path: "/blog", children: [
            { path: "/:blog_id" },
        ]},
        { path: "/about", children: [
            { path: "/us", children: [] }
        ]},
    ]
})
```

### Contextualização: funções genéricas em typescript
[copiar dos docs oficiais](https://www.typescriptlang.org/docs/handbook/2/generics.html)

Encontramos na abordagem acima aqui um grande desafio por conta da premissa da biblioteca que o usuário não deve precisar definir a mesma informação duas vezes. Dado isso, o próximo passo é procurar por uma solução que use inferência de tipo para extrair a informação de tipo a partir da informação de valor, com algo como:

```ts
const routes = createRoutes({
    path: "/",
    children: [
        { path: "/home" },
        { path: "/blog", children: [
            { path: "/:blog_id" },
        ]},
        { path: "/about", children: [
            { path: "/us", children: [] }
        ]},
    ]
})
```
. No exemplo acima, createRoutes ainda é uma função genérica, mas a forma como sua lógica de tipos foi construída foi feita para permitir que as informações de tipo possam ser inferidas do objeto passado como argumento.

### Contextualização: Inferência de tipos em TS
[copiar dos docs oficiais](https://www.typescriptlang.org/docs/handbook/type-inference.html)

### Porquê não aceitar duplicação de código na configuração das rotas?
O primeiro e mais óbvio problema com essa abordagem é o quanto ela afeta negativamente a DX, e fica no caminho do desenvolvedor. O segundo é que apesar de parecer mais simples de implementar que uma solução que use inferência de tipo, o esforço e complexidade de garantir a concordância das informações de tipo e valor da árvore de rotas é comparável com o de construir uma implementação com inferência de tipo, o que reduz consideravelmente o apelo dessa abordagem. Um terceiro problema que foi descoberto empiricamente é que bugs na lógica de tipos são mais fáceis de passar despercebidos na abordagem com duplicação do que na de inferência.

### Solução
Achar uma forma de fazer essa inferência foi particularmente complicada, e levou semanas de exploração, tentativa e erro. Essa jornada foi documentada por Rafael no [issue](https://github.com/rafael-g-depaulo/ragic/issues/15) do repositório git da biblioteca.

Primeiro, foi achada uma solução simples para extrair a informação do caminho de um único segmento como string unit, em vez de string. [exemplo, botar print](https://www.typescriptlang.org/play?#code/C4TwDgpgBAyhDmBbCA7YAeAcgPigXigG8owBDYACwC4pMoBfAKAGMB7FAZ2CgBNWIOaAKIAPYACdSzYJlLJ8ULABpsAChSseEGnCSoMOAJQ6EyNFlx5cqwvUNRSHByhAt2XKBDGTps+QSxPMVQeJy5xAEsUeDVScRM9cyMEswNLa1t7R2dXPgFhbykZOQgbEnJqKAAiAEYAJgBmKoZDRgB6NqgAPQB+Ri8JIr9S4jJKGlrG5rt2zt7ZjsWl5ZXVtfWlxkYgA)
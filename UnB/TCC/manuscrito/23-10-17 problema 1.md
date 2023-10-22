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
```ts
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
```

. Aqui definimos uma árvore de roteamento como um nó de rota, e um nó de rota é uma tupla com dois elementos: o nome do segmento de rota como uma string literal e uma Tupla contendo todos os nós filhos do nó atual. O exemplo acima, então, descreve as seguintes rotas:
- /
- /home
- /blog
- /blog/:blog_id
- /about
- /about/us

Ainda tem alguns problemas com essa representação, como o fato que não tem como descrever se um segmento é concreto ou não, mas já é um passo inicial para representar a informação necessária como um tipo, e é possível construir as Uniões de string que vamos usar usando algo como o seguinte:

![[Pasted image 20231017155953.png]]

([link dos testes usados hoje](https://www.typescriptlang.org/play?#code/FAFwngDgpgBASgewK4igOQQEygHgAoCGIAFmgQLaxQAeqAdpgM4yMgBOAlnQOYA0MAYWIcANpkQoozALwwA2gF0AfDFkBvYDC0wIRYgC4YhEmUq9N2gMbCxbKHUNDR45KkbmAvsGCWEdVjBoAPJoAKIA+qowAMpg5ABGCCIAFACUoJCwoeQQ4FFq8sFh4QowAPyGdFAAblBsHjAA9I3wUL5smDisnDz8VbVsShnQMABCBIxQEqgAKnaw6jBe4CPTUHNQuOOTa8w09EzwruhYuN1c3EqKMCqy21PHG7AAZEeSTzMEojj3u0PDsDWHy+Ih+Ewekj2tHshzWGGwXXYFyupVkiluMAsWl+xyhB2Y1zKMGyuTAMH0WKaLRxkJg+xhBK4ADM6vBSkSAEQAd2IRA55MpNLcdOhDEZdBZbDeqH4ADp5czWWs4FIQOzKdppVNVVp6WKtfCzkieCjyhrtGsRfiYAVdCRDIqpXCKFB+NZnHYHDBHYIbC5aQ0yuatM7KFaGSxjdxg5ryjb5ABrKBkrgGl0KQxw044UOu33OP4NV5A+afb7K1VDWPV8kwfqs5pyACMChjlRqDcacgATK2a7X62xKe2BlS5AVyIxuIYOaE2GwEFKVrAhVIYAgmVqnjBlxz+KvGIYD0tSs0J1OZ3OF0vMmNwbt15uS5sd5k93edrij-fcUtvMviX8JA7ENHAZgxGZw31LMER9ABBfgfVGFQiRg3AELGFQRzqbxGgAKhgXx-BAGByAIJMnkMABZcj1nmKI8MaYBmhFCBFxIoiAjIij6NkHA4Kg2FjlA84TWuXgVGSEBM0eeZ+KUVIZPeOS4NuSS1A8VIYAmbS6DAZiCJoNi2A4vwuNo7c+JmfgBL1ITlM2MCMWfXBwMk6SYDgxTPNUdTNO05gCD0mBGJ8MySO4uiXz4gBpZM8QjUS+C1Rh3MMNQ5CTFM6BgOKwEYDMUs09LMuTb0crygrDFCICQOzP4ll8mBkg0rSdKC-TOJI9hotIiz5haykJkwdKYztAwYA5Ya9xjd1bHsQxxx0PQZybbsAGZ3zmzBPUWhQPD7bQvE0zQeqgZiWgAPSDAEWAARyQCZSFOJ4wPmDFKW3OzmDQnAfVMPMfScea6BQmMAcE5gkrjGMWMscE6wQQi-U9GNgZ2+xIfkdlAhdAV+3Rz0sbkH04BxgoCH0DluybTb+HiTMPApfsWMJzHvua0nUkJeNKY5Wn3wZ+Amdhlp4cmZGPXsNGUfZ0VDnHcaHQlVl0YB-gPDlBUVadVU2bodV+01NW8Y56GgyN7R8Pux7GGe7BXt+gADAASNQAY8Ro3ZNygPCd-gAHE2CCzB9aUFQAB8tFCy2tEYB6nsNR3hOzdXWlYMOq1j9L8zEAGr0cP0Ia8FmxYR+ICEwGAmUXMiQDbeN9YL3OMZykuaxzmZ8-nQxi+HeMnmb7cvFuuDomifJlvtSattlr05EpW0Vsm4gEEoWepfn0pNcXqeJo5eIRAQbgN5BxaYyX6eOREDhWFP1u9qWcx+0v-e7YQLl7927Gn8pbfzG3mFYiMB4hRHjErGebo57n01K-Gcq916-23gFQi4VbpwAwVEeOtt7ZRVwMuDcIChgsW0Ndf8t4AAaOA0BYyShiOBgQ-xdR3DqPiNCzZRiUMkeUsoCBsEMHYSufgRBkioWgFE3kxGmmkH5NqgU9L-lVC1Peq0Nr8hOixMhzRtE6N0Xo-RBjDFGKYug38aJKQckaDNTUC9+xyEsQgqA75FAKGfjWexjRD7H2cTGGxlj9BeO4OEDgmBnEKFcTGcJbjqweIIIkFAPjY7yEsUgRgYTDrViiX-YArZboACkEBcH4rQqM+4Sk9EuFESx-IOYCSJKMWsrs1BwQ8G7UYftbqhFoMHSwIAAaMBzCnbACV9RIDoAmOgH86CKEUDZSwlhykXCqRyD6mo0IjIVqTIZeYeGk1VIaDZzAxkTKmTM8JZp+xoWJlsyQEMOEVMQjrFuRMObHMmVyaZCgXEXNjixCGhDLDAU9CRSZ2BfHaCjgUopcF5n8FzFnS24KtAsRVICqUfgWAcEPhcRgSKYBRy6ewAgvT+k5n2acdwnl5kIqNnilFbRgLrhyttVGSSCXdOJX0l0Az9b8ChXQfisK0yUHDt4fs2EhyagleQ1YwluVREJT0rllABlyF2MoC6moyHACAA)
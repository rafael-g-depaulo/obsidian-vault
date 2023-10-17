## Intro
Partindo da contração de *routing* e *magic*, chegamos no nome ragic para a biblioteca, procurando enfatizar a melhoria de DX ao usar a biblioteca, sobre como idealmente o sentimento do usuário da biblioteca é como se ela estivesse fazendo mágica para simplesmente saber a lógica de negócios do app, validar e auto-completar o código enquanto ele escreve.

Ao longo do desenvolvimento da biblioteca, passamos por algumas situações específicas que trouxeram problemas particularmente complexos de resolver, ou que nos fez repensar parcialmente sobre o conceito ou *API* externa da biblioteca.

### Situação 1: Representar a árvore de rotas como um tipo
Como exploramos superficialmente na seção XXX, um dos problemas centrais à biblioteca é a construção do tipo *string Unit Tuple* que vai ser usado para a validação de tipo das rotas da aplicação em lugares como a propriedade *"to"* do componente de Link. Dado o foco em eliminação de duplicação de código, precisamos extrair essa informação da definição das rotas, já que esse é um lugar que o desenvolvedor necessariamente tem que inserir essas informações, e não queremos fazer com que ele tenha que duplicar isso.

Nesse estágio não existe uma API bem definida da biblioteca. Isso é proposital, para focar primeiro na lógica central dela, e permitir que a API flua naturalmente disso. Mesmo assim, a partir dos pensamentos ante
## Situação 3: Camada de integração com RRD
Com a solução de tipagem feita, o importante agora era construir uma lógica de implementação que entregue para o usuário uma lógica que siga o contrato estabelecido pelos tipos. Tomamos a decisão de, nesse estágio inicial, não implementar a lógica de roteamento do zero, e sim só construir ragic como uma camada de abstração acima de react-router-dom. Isso implica em um aumento do bundle final da biblioteca, o que afetaria diretamente no tamanho da aplicação construída pelo usuário da biblioteca. Porém, considerando o foco da biblioteca e o planejamento da evolução dela a longo prazo, achamos que a agilidade imediata no desenvolvimento valeria a pena. Assim podemos focar na usabilidade da biblioteca e iterar em cima dessa funcionalidade central, e depois fazer uma refatoração interna para remover a dependência.

Com essa decisão feita, a implementação da lógica em si acabou sendo bem simples. Como exemplo, a implementação do roteador em si consiste em somente um uso direto dos componentes BrowserRouter, Routes e Route de react-router-dom, junto com o dicionário de rotas gerado do construtor da árvore de roteamento.

![[Pasted image 20231101153416.png]]
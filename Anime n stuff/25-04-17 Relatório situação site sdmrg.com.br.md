## Heroku
Entrando na conta de email do projeto, notei essa mensagem de 03/04/2025:

![[Pasted image 20250417122039.png]]

Com a conta do Heroku removida permanentemente, os elementos *Backoffice* e *Banco de Dados* da infraestrutura do site mostrada no diagrama abaixo não existem mais:

![[Pasted image 20250417123915.png]]

O servidor do *Backoffice* em si dá pra ser recriado sem problema porque ele existe sem estado interno e o código dele ainda existe no repositório no *github*, mas até onde eu sei o *Banco de Dados* não tem backup. Só temos a estrutura dos dados salva, não os dados em si.

Isso significa que não só o servidor *Backoffice* está fora do ar, mas a não ser que exista algum backup dele, os dados do *backoffice* estão perdidos sem possibilidade de recuperação.

O site ainda está funcionando porque mesmo sem resposta do *backoffice*, o site simplesmente mostra o app web usando as informações default que eu inseri quando o site foi criado (por isso que o *About Us* ainda funciona, mas nada mais).

## Situação do projeto de manutenção

Segundo os termos acordados por whatsapp, o item **1.** já está tecnicamente resolvido (não existe mais lugar onde o cartão antigo é usado como método de pagamento, com os serviços restantes ou usando o cartão novo ou em plano gratuito sem necessidade de método de pagamento).

![[Pasted image 20250417124355.png]]

## Transição de infraestrutura
Foi acordado inicialmente que eu iria fazer a transição da infraestrutura depois em outra data conveniente, com desconto no valor do serviço igual à diferença do custo de operação antes e depois da transição multiplicado pelo período até a transição.

Já que ele não é mais um elemento da infraestrutura mesmo no estado atual, o Heroku não está pesando nos custos de operação atuais do site. Em contrapartida, essa "economia" atual só existe porque o site atual efetivamente não tem *Backoffice*, e o funcionamento do sistema está incompleto até que a transição ocorra.

Eu vou aumentar a prioridade da transição da infraestrutura para re-estabelecer o funcionamento do site o mais rápido possível, mas ainda respeitando outros projetos que eu já tenho em andamento. Não posso me comprometer com essa estimativa por variáveis externas de outros projetos já em andamento, mas acredito que eu consigo terminar a transição e re-estabeler o funcionamento do site até o dia 2 de maio.

Em notícias melhores, notei que o uso atual do GoDaddy como provedor de domínio é desnecessário, e é possível transicionar para o serviço nacional registro.br para aluguel de domínio para uma economia grande (estimo que uns ~R$200 por ano) nos custos operacionais, e vou fazer isso como parte do serviço.
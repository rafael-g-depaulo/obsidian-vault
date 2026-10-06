[1 - Arquitetura Hexagonal](https://www.grancursosonline.com.br/aluno/curso/video/codigo/Sc9XsSTjmMU%3D/v/DnmftYvALcc%3D)

## Porta e Adaptador.
Pensa como se fosse uma dupla camada de interface, tipo numa célula. tem uma camada entre o mundo externo e o "meio" e entre o meio e o núcleo. entre o mundo externo e o meio é Adaptador. Adapt In é interface de usuário. Adaptador Out é conexão com serviço externo. Entre o meio e interno é Porta. Porta In é controller do server, que recebe request HTTP e traduz em chamada de função da classe da lógica de negócios. Porta Out são funções e etc do núcleo que fazem requisições externas (honestamente isso tem cada de adaptador pra mim, mas acho que implementação que sabe qual o serviço é adaptador, e função que só fala "isso vai pra fora" é porta).

![[Pasted image 20261006205137.png]]

![[Pasted image 20261006205147.png]]

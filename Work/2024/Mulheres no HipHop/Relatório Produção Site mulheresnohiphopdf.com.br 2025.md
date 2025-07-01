Seguem informações sobre os serviços prestados, trabalho realizado e entregáveis resultantes para a produção do site mulheresnohiphopdf.com.br

## DevOps

### Domínio
O domínio do site (mulheresnohiphop.com.br) foi comprado usando o [registro.br](registro.br), no CPF de Verônica Diano Braga como titular, e com Rafael G. de Paulo no momento estando nas posições de contato técnico, de cobrança e administrativo.

![[Pasted image 20250427233736.png|500]]

![[Pasted image 20250427233727.png|500]]

O domínio foi reservado de 27/02/2025 até 27/02/2027.

### Infraestrutura
Para hospedagem do site foi feita uma infraestrutura na Amazon Web Services, usando *Route 53* para rotear o domínio comprado no registro.br usando um certificado SSL arranjado pelo *AWS Private Certificate Authority*. Esse tráfego roteado pelo *Route 53* é direcionado para a aplicação *CloudFront* construída a partir de um template *CloudFormation*. Essa aplicação *CloudFront* retorna os arquivos salvos num balde *AWS S3*, que contém o código compilado com os dados das artistas. Essa aplicação Web responsiva é enviada para o dispositivo do usuário, resultando na experiência do site.

## Site

### Tela Inicial
Versão Desktop:
![[mulheresnohiphopdf.com.br_mapa_sudoeste(Nest Hub Max).png|500]]

Versão Mobile:
![[mulheresnohiphopdf.com.br_(iPhone XR).png|225]]
### Tela Mapa do DF
Versão Desktop:
![[mulheresnohiphopdf.com.br_mapa_sudoeste(Nest Hub Max) (1).png|475]]

Versão Mobile:
![[mulheresnohiphopdf.com.br_(iPhone XR) 1.png|200]]
### Tela de listagem de artistas
Versão Desktop:
![[mulheresnohiphopdf.com.br_mapa_sudoeste(Nest Hub Max) (2).png|475]]

Versão Mobile:
![[mulheresnohiphopdf.com.br_(iPhone XR) (3).png|225]]

### Tela Sobre Nós
Versão Desktop:
![[mulheresnohiphopdf.com.br_mapa_sudoeste(Nest Hub Max) (3).png|500]]

Versão Mobile:
![[mulheresnohiphopdf.com.br_(iPhone XR) (2).png|150]]

## Trabalho
O projeto foi realizado pela seguinte equipe de desenvolvimento e design:
- Rafael Gonçalves de Paulo (Desenvolvedor FullStack, Desenvolvedor DevOps)
- Lucas Vinícius Magalhães Pinheiro (Desenvolvedor FullStack)
- Eduardo Ferreira (Designer UI/UX)

Essa equipe fez o processo de design e desenvolvimento do site sob a Coordenação de Vera Veronika de Janeiro até Abril de 2025. Seguem prints das reuniões realizadas:

### Reuniões Extra-ordinárias

#### Reunião de alinhamento inicial e revisão da proposta do site 06/02/25
![[Pasted image 20250428091639.png|500]]

#### Reunião de entrevista com Lucas Vinícius 27/01/25
![[Pasted image 20250428091743.png|500]]

#### Reunião entrega final 24/04/25
![[Pasted image 20250428091832.png|500]]

### Reuniões ordinárias internas da equipe

| Data     | Print                                |
| -------- | ------------------------------------ |
| 03/02/25 | ![[Pasted image 20250428091919.png\|500]] |
| 10/02/25 | ![[Pasted image 20250428092147.png\|500]] |
| 17/02/25 | ![[Pasted image 20250428092159.png\|500]] |
| 24/02/25 | ![[Pasted image 20250428092209.png\|500]] |
| 03/03/25 | ![[Pasted image 20250428092222.png\|500]] |
| 31/03/25 | ![[Pasted image 20250428092232.png\|500]] |


## Entregáveis

### Contas
Em anexo tem uma planilha com os logins das contas usadas para funcionamento da infraestrutura do site.

### Código
O código usado para criação do site se encontra salvo num repositório *git* da conta do Github do projeto.

### Dados das artistas
Os dados das artistas expostas no site estão salvos num modelo simplificado de estrutura de dados (formato *JSON*). Em anexo e dentro do repositório Github do projeto se encontra esse arquivo *JSON*.
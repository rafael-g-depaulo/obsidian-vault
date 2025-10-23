
# Usar ADR para documentação arquitetural

## Context and Problem Statement

Como documentar decisões arquiteturais para as equipes de fases futuras do LabFaz?

Como manter conhecimento técnico, decisões e insights sobre o contexto específico do projeto?

## Considered Options

* ADR simples
* MADR com tooling complexo
* Templade docs como usado em RFC
* Wiki com estrutura livre

## Decision Outcome

Depois de revisar tooling como [MADR](https://adr.github.io/madr/), foi escolhido usar uma estrutura simples de template markdown, para agilizar o processo de documentação.

Tooling pode vir depois, no momento o que importa é ter as decisões documentadas de alguma forma organizada. Não tem a necessidade de escalar e complicar o processo nesse momento.

## Consequences

* Bom, porque é mais rápido
* Bom, porque é organizado e acessível pela equipe interna
* Ruim, porque é menos automatizado e mais manual
* Ruim, porque é menos acessível pela equipe externa, já que arquivos Markdown não são facilmente lidos no Google Drive (atualmente usado como repositório).

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMyNjkxNTY0NF19
-->
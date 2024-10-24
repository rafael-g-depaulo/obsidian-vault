
# Usar RFC para contribuição de membros do LabFaz externos à equipe LabFaz Digital

## Context and Problem Statement

Como receber feedback e visão de stakeholders não-técnicos? Como documentar esse feedback? Como chegar em uma síntese?

## Considered Options

* Markdown ADR-like
* Formul´
* AssertJ

## Decision Outcome

Chosen option: "Plain JUnit5", because it is a standard framework and the features of the other frameworks do not outweigh the drawbrack of adding a new dependency.

## Consequences

* Good, because tests are more readable
* Good, because more easy to write tests
* Good, because more readable assertions
* Bad, because more complicated testing leads to more complicated assertions

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMzIzOTE3MjFdfQ==
-->
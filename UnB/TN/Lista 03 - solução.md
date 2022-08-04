## Questão 1
prove que $6/(m^3-m), \forall m \in Z$

Lema: $6/(m^3-m), \forall m \in N$

Prova do Lema por indução:

1. Passo Base (m = 0):
	1. $m^3 - m = 0$
	2. $6 * 0 = 0 <=> 6/0$
2. Passo indutivo:
	1. HI: $6/(m^3 - m)$
	2. $\exists k( 6*k = m³-m)$
	3. $(m+1)^3 - (m + 1) = m^3 + 3m^2 + 3m + 1 - m - 1 = 6k + 3m^2 + 3m$
	4. Caso m par ($m=2*i$):
		1. $(m+1)^3 - (m + 1) = 6k + 6*2*i^2 + 6i = 6 * (k+2i^2+i)$
		2. $6 / (m+1)^3 - (m + 1)$
	5. Caso m impar ($m=2*i+1$):
		1. $(m+1)^3 - (m + 1) = 6k + 3*(2*i+1)^2 + 6i+3 = 6k + 3*(4i^2 + 2i + 1) + 6i + 3 = 6*(k + 2i^2 + 2i + 1)$
		2. $6/(m+1)^3 - (m + 1)$

Lema provado.

Prova que $6/(m^3-m), \forall m >= 0 \in Z$ por indução>

1. Passo base (m = 0):
	1. já feito acima
2. Passo indutivo:
	1. HI: $6/(m+1)^3 - (m + 1)$
	2. $\exists k( 6*k = (m+1)³-(m+1))$
	3. $6*k = m^3 + 3m^2 + 3m - m$
	4. Caso m par ($m=2*i$):
		1. $6k = m^3 + 6*(2i^2) + 6i - m$
		2. $m^3 - m = 6(k - 2i^2 - i)$
		3. $6/(m^3 - m)$
	5. Caso m impar ($m=2*i+1$):):
		1. $6k = m^3 + 3*(2i+1)^2 + 6i + 3 - m$
		2. $6k = m^3 - m + 12*i^2+12i+3 + 6i + 3$
		3. $m^3 - m = 6(k - 4i^2 - 5i - 1)$
		4. $6/m^3 - m$

Com as duas provas acima, sabemo que para todo m inteiro a propriedade é verdade.

## Questão 2

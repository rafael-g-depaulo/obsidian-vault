# Revisão

## Parte Estrutural
- Classes de Congruência
- Sistema Completo de Resíduos (SCR)
- Sistema Reduzido de Resíduos ($\phi(n)$ de Euler)
- Lemas de Euler, Germat, Wilson
- Equação linear de congruência ($ax \equiv b\ (mod\ n)$)

## Parte de Aplicações
- Teorema de Resto Chinês
- Lema de Hensel



### Questão Exemplo
Encontre uma solução pra $f(x) = 5x^4 + 2x^2 + 3 \equiv 0\ (mod\ 5^3)$


#### Solução:

$f'(x) = 20x^3 + 4x$

$f(1) = 10 \equiv 0\ (mod\ 5)$ e $f'(1) = 24 \not{\equiv} 0\ (mod\ 5)$

Seja $b = 1$ e $b_1 = 1 + 5t$

$$
\begin{split}
	f(1+5t) \equiv f(1) + 5f'(1)t \equiv 0\ (mod\ 5^2) \\
	\equiv 2*5 + 5*24*t \equiv 0\ (mod\ 5^2) \\
\end{split}
$$

Essa equação tem solução Z sse $\exists t \in Z$ tal que

$$2*24t \equiv 0\ (mod\ 5) \implies 2+4t \equiv 5 \implies t = 2 \implies b_1 = 1+5*2 = 11$$
$f(11) = 5*11^4 + 2*11^2 + 3 \equiv 5*(-4)^4 + 2*11^2 + 3$, (pq $11^2 \equiv -4\ (mod\ 5)$)
$f(11) \equiv 75\ (mod\ 5)$

Seja $b_2 = 11 + 5^2t = 1 + 2*5 + 5^2t$

Então

$$
\begin{split}
f(b_2) \equiv f(11) + 5^2 f'(11)t \equiv 0\ (mod\ 5^3) \\
\equiv 75 + 5^2*f'(11)*t \\
\equiv 3*5^2 + 5^2*f'(11)*t \\
\equiv 3 + f'(11)*t\\
\end{split}
$$

Observe que $f'(1 + 5t_0 + 5^2t_1) \equiv f'(1)\ (mod\ 5)$

$$
\begin{split}
\implies 3 + 4t \equiv 0\ (mod\ 5) \implies t = 3 \\
\implies b_2 = 11 + 5^2*3 = 11 + 75 = 86 \\
\implies f(86) \equiv 0\ (mod\ 5^3) \\
\end{split}
$$
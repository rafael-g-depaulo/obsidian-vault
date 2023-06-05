## Distribuição Multinomial
$$
\begin{equation}
\begin{split}
P(X_1=x_1, ..., X_k=x_k)=n!*\prod_k\frac{p_i^{x_i}}{x_i!}\\
\\
Var(X_i)=np_i(1-p_i)\\
E(x_i)=np_i\\
Covar(X_i, X_j)=-np_ip_j
\end{split}
\end{equation}
$$

## Teste de aderência
Checar se o vetor p_0 de probabilidades das labels está correto ($H_0$)

$$
\begin{equation}
\begin{split}
X=(X_1, ..., X_i) \sim Multinomial(n; p=(p_1,\ ...,p_i)), p_i \ge 0, \sum_i p_i=1 \\
\\
P(X_i=x_i (i = 1..k)) = n!*\prod_k\frac{p_i^{x_i}}{x_i!}\\

\end{split}
\end{equation}
$$
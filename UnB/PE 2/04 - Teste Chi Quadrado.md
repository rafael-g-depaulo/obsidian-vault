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
Divergência Chi Quadrado
$$
\begin{equation}
\begin{split}
\chi^2_{obs}={\sum_i(x_i-n p_{oi})^2}* \frac{1}{np_{oi}} \\
= \sum\frac{(f_{observada}-f_{esperada})^2}{f_{esperada}} \\
\end{split}
\end{equation}
$$

Quando n grande a distribuição tente a $\chi_1$

### Caso geral
$$
\begin{equation}
\begin{split}
\chi^2_{obs}\ \ \ \widetilde{n\ grande}\ \ \ \chi^2_{k-1} \\
\text{Rejeita} H_0 \iff \chi^2_{obs}>\chi^2_{k-1, \alpha}
\end{split}
\end{equation}
$$


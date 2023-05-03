# Função Qui^2 ($\chi ^2$)
## R
$$
\begin{equation}
\begin{split}
\chi^2_{n;\ \alpha}=\texttt{qchisqr($\alpha$, n)}
\end{split}
\end{equation}
$$

## $\chi^2_{obs}$
$$
\begin{equation}
\begin{split}
\chi^2_{obs} = \frac{ns^2_0}{\sigma_0^2}
\end{split}
\end{equation}
$$
### Teste de hipótese
$$
\begin{equation}
\begin{split}
H_0: \sigma^2 \le \sigma_0^2 \implies \text{Rejeita $H_0$ se } \chi^2_{obs} > \chi^2_{n-1;\ \alpha} \\
H_0: \sigma^2 \ge \sigma_0^2 \implies \text{Rejeita $H_0$ se } \chi^2_{obs} < \chi^2_{n-1;\ 1-\alpha} \\
H_0: \sigma^2 = \sigma_0^2 \implies \text{Rejeita $H_0$ se (OR)} \cases{\chi^2_{obs} >\chi^2_{n-1;\ \alpha/2} \text{ }\\ \chi^2_{obs} <\chi^2_{n-1;\ 1-\alpha/2}} \\
\end{split}
\end{equation}
$$

### P-valor
$$
\begin{equation}
\begin{split}
H_0: \sigma^2 \le \sigma_0^2 \implies p_{valor}=P(\chi^2_n>\chi^2_{obs})=\texttt{qchisq($\alpha$, n)} \\
H_0: \sigma^2 \ge \sigma_0^2 \implies p_{valor}=P(\chi^2_n<\chi^2_{obs})=\texttt{1-qchisq($\alpha$, n)} \\
H_0: \sigma^2 = \sigma_0^2 \implies p_{valor}=2*min(P(\chi^2_n>\chi^2_{obs}), P(\chi^2_n > \chi^2_{obs}))=\texttt{2 * min(qchisq($\alpha$, n), 1-qchisq($\alpha$, n))}

\end{split}
\end{equation}
$$

### IC
$$
\begin{equation}
\begin{split}
IC (\sigma^2) = \frac{s^2(n-1)}{\chi^2_{n-1;\ \alpha/2}} < \sigma^2 < \frac{s^2(n-1)}{\chi^2_{n-1;\ 1-\alpha/2}}
\end{split}
\end{equation}
$$

## Desenvolvimento
 (caso particular de [[23-04-19#Cap 2:#Função Gamma:|Função Gamma]])
no R tem `pquisq()` e `qchisq()`
$$
\begin{equation}
\begin{split}
\chi^2_n \sim Gamma(\alpha=\frac n2, \beta = \frac12) \\
\text{e eu acho que isso é a definição de }\chi^2_n
\end{split}
\end{equation}
$$

#### Média conhecida
$$
\begin{equation}
\begin{split}
P\left(\chi^2_{n;\ 1-\alpha/2} < \frac{n\hat\sigma^2}{\sigma^2} < \chi^2_{n;\ \alpha/2}\right) \\
\\
=P\left(\frac{n\hat{\sigma}^2}{\chi^2_{n;\ \alpha/2}} < \sigma^2 < \frac{n\hat\sigma^2}{\chi^2_{n;\ 1-\alpha/2}}\right)
\end{split}
\end{equation}
$$

#### Média desconhecida
$$
\begin{equation}
\begin{split}
IC: \frac{(n-1)s^2}{\chi^2_{n-1;\ \alpha/2}} < \sigma^2 < \frac{(n-1)s^2}{{\chi^2_{n-1;\ 1 - \alpha/2}}}
\end{split}
\end{equation}
$$

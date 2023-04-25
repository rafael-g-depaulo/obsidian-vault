## Notas de aula
![[01 comparacao de medias e proporcoes.pdf]]

## Amostras independentes

### Variância
$$
\begin{equation}
\begin{split}
Var(\bar{X_a}- \bar{X_b}) = Var(\bar{X_a}) + Var(\bar{X_b}) = \frac{\sigma_A^2}{n_a} + \frac{\sigma_B^2}{n_b}
\end{split}
\end{equation}
$$
## Populações Normais e variância conhecida
OBS: $d_0 = \mu_a - \mu_b$ é especificado na $H_0$.
$$
\begin{equation}
\begin{split}
z_{obs} = \frac{(\overline{x}_b - \overline{x}_a) - d_0}{\sqrt{Var(X_a - X_b)}} \\
\end{split}
\end{equation}
$$


![[Pasted image 20230417110830.png]]


## Qualquer população n grande
$$
\begin{equation}
\begin{split}
Var(\bar{X}_a - \bar{X}_b) = \hat{\sigma}_{\bar{X}_a - \bar{X}_b} = \sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}
\end{split}
\end{equation}
$$
Onde:

$$
\begin{equation}
\begin{split}
S_a^2 = \frac{\sum_{i=1}^{n_a}(X_{a,1} - \bar{X}_a)^2}{n_a-1}
\end{split}
\end{equation}
$$
o IC de nível $100(1-\alpha)\%$ pra $\mu_a - \mu_b$ é:
$$
\begin{equation}
\begin{split}

IC(\mu_a - \mu_b): (\bar{x}_a - \bar{x}_b) \pm z_{\alpha/2}*Var(\bar{X}_a - \bar{X}_b)

\implies \\

IC(\mu_a - \mu_b): (\bar{x}_a - \bar{x}_b) \pm z_{\alpha/2}*
\sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}

\end{split}
\end{equation}
$$

e o z para os testes de hipótese é:
$$
\begin{equation}
\begin{split}
z_{obs} = \frac{(\bar{x}_a - \bar{x}_b) - d_0}{Var(\bar{X}_a - \bar{X}_b)}
\\ \\
z_{obs} = \frac{(\bar{x}_a - \bar{x}_b) - d_0}{\sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}}


\end{split}
\end{equation}
$$
![[Pasted image 20230417112236.png]]

## Variâncias desconhecidas e n pequeno
$$
\begin{equation}
\begin{split}
Var(X_a - X_b) = \sigma^2(\frac{1}{n_a} + \frac{1}{n_b})
\end{split}
\end{equation}
$$
E o estimador de $\sigma$ ($S_c$ ou "estimador combinado") é definido como

$$
\begin{equation}
\begin{split}
\sigma^2 \approx S^2_c = \frac{(n_a-1)S_a^2 + (n_b-1)S_b^2}{n_a + n_b -2}
\end{split}
\end{equation}
$$
, onde $S_a$ e $S_b$ são calculdaos com:

$$
\begin{equation}
\begin{split}
S^2_a = \frac{\sum_{i=1}^n (X_{a,i} - \bar{X}_a)^2}{n_a-1}
\end{split}
\end{equation}
$$
O IC de nível $100(1-\alpha)\%$ pra $\mu_a - \mu_b$ é:

$$
\begin{equation}
\begin{split}
IC = (\bar{x}_a - \bar{x}_b) \pm t_{\alpha/2} \sqrt{\frac{1}{n_a} + \frac{1}{n_b}}
\end{split}
\end{equation}
$$

onde tα/2 é obtido da tabela da distribuição t de Student com (nA + nB − 2) graus de liberdade. De forma semelhante, os testes de hipóteses são baseados no estatístico $t_{obs}$
$$
\begin{equation}
\begin{split}
t_{obs} = \frac{(\bar{X}_a - \bar{X}_b) - d_0}{S_c\sqrt{\frac{1}{n_a} + \frac{1}{n_b}}}
\end{split}
\end{equation}
$$
![[Pasted image 20230417113912.png]]

## Comparação de duas proporções

## 1.1
Para calcular P(X < 110) e P(90 < X < 110), precisamos padronizar os valores de X em relação à distribuição normal padrão. Para isso, usamos a seguinte fórmula:

$$
\begin{equation}
\begin{split}
z = (X - \mu) / \sigma
\end{split}
\end{equation}
$$
Onde:
| var      | significado                      |
| -------- | -------------------------------- |
| z        | valor padronizado na DN          |
| X        | valor da variável aleatória      |
| $\mu$    | média da variável X que vc achou |
| $\sigma$ | desvio padrão da variável X      |

### para P(X < 110)
$$
\begin{equation}
\begin{split}
z = (X - \mu)/\sigma \\
z = (110 - 100) / 5 = \\10/5 = \\ 2
\end{split}
\end{equation}
$$
Consultando a distribuição normal para $P(Z < 2)$, temos que $P(X < 110) = P(Z < 2) = 0,9772$

No R:
![[Pasted image 20230410120414.png]]

### para P(90 < X < 110)
$$
\begin{equation}
\begin{split}
z = (X - \mu)/\sigma \\
z_1 = (90 - 100) / 5 = -2 \\
z_2 = (110 - 100) / 5 = 2
\end{split}
\end{equation}
$$

no R:
![[Pasted image 20230410122301.png]]

P(90 < x < 110) = P(-2 < Z < 2) = P(Z < 2) - P(Z < -2) = 0.9544

## 1.2
$\mu = 100$, $\sigma = 5$.

$P(100 - 5z < X) = P(X < 100 + 5z)$, então $2*P(X < 100 + 5z) - 1 = 0.98$

$$
\begin{equation}
\begin{split}
2*P(X < 100 + 5z) - 1 = 0.98 \implies \\
P(X < 100 + 5z) = 0.99 = \\
P(\frac{X - \mu}{\sigma} < \frac{100+5z - \mu}{\sigma}) = \\
P(Z < \frac{5z}{5}) = P(Z < z)\\
P(Z < z) = 0.99 \implies z = 2.326 \\
\end{split}
\end{equation}
$$
## 2
Para uma popula¸c˜ao normalmente distribu´ıda com desv´ıo padr˜ao σ conhecido, (i) Qual ´e o n´ıvel de confian¸ca do intervalo ¯x ± 2.5 σ/√ n? (ii) Por qual valor dever´ıamos substituir 2.5 acima para ter confian¸ca 64% no intervalo?

### 2.1
Qual o nível de confiança de $\bar{x} \pm 2.5 * \sigma/ \sqrt{n}$?
$$
\begin{equation}
\begin{split}
\bar{x} \pm 2.5 * \sigma/ \sqrt{n} \\
z = 2.5 \\
Confiança = 2*pnorm(2.5) - 1 = 0.9875
\end{split}
\end{equation}
$$

## 2.2
Por qual valor dever´ıamos substituir 2.5 acima para ter confian¸ca 64% no intervalo?

$$
\begin{equation}
\begin{split}
0.64 = 2 * pnorm(z) - 1 \\
0.82 = pnorm(z) \\
qnorm(0.82) = z \\
z = 0.915
\end{split}
\end{equation}
$$

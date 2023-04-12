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
## 3

$$
\begin{equation}
\begin{split}

\sigma = 0.75 \\
C_{desejada} = 95\% \\
\bar{x} = 4.85 \\
n = 20 \\

IC = x \pm z * \frac{\sigma}{\sqrt{n}}
\end{split}
\end{equation}
$$
### 3.1
$$
\begin{equation}
\begin{split}
z = qnorm(.95) = 1.6448 \\
\\
IC = 4.87 \pm 1.6488* \frac{0.75}{\sqrt{20}} \\
IC = 4.85 \pm 0.2758
\end{split}
\end{equation}
$$

### 3.2
$$
\begin{equation}
\begin{split}

IC = x \pm z * \frac{\sigma}{\sqrt{n}} \\
\bar{x} = 4.56 \\
z = qnorm(.95) = 2.0537 \\
\sigma = 0.75 \\
\\
IC = 4.56 \pm 0.3850 \\
\end{split}
\end{equation}
$$

### 3.3
comprimento do IC é $2*z_{\alpha/2}*\sigma / \sqrt{n}$, onde $\alpha$ é $1 - ProbabilidadeDeConfianca$
$$
\begin{equation}
\begin{split}
\alpha = 0.05
Comprimento = 0.4 = 2*qnorm(.95)*0.75 / \sqrt{n} \\
0.4\sqrt{n} = 2.4672 \\
\sqrt{n} = 6.1682 \\
n = 38.0467
\end{split}
\end{equation}
$$


## 4
$$
\begin{equation}
\begin{split}
n = 100 \\
\alpha = 1 - 95\% = 0.05\\
IC = x \pm z_{\alpha/2} * \frac{\sigma}{\sqrt{n}} \\
\\

\bar{x} = (1.63 + 1.69) / 2 \\
Comprimento= 0.6 \implies z_{\alpha/2} * \frac{\sigma}{\sqrt{n}} = 0.3 \\
qnorm(0.975) * \sigma / 10 = 0.3 \\
\sigma =  1.5306

\end{split}
\end{equation}
$$

## Pulando 5-6 arbitrariamente

## 7
$$
\begin{equation}
\begin{split}
n = 10 \\
liberdade = 9\\
\end{split}
\end{equation}
$$

### 7.1
$$
\begin{equation}
\begin{split}
P(T < 2) = pt(2, 9) = 0.9617 \\
P(|T| < 2) = pt(2, 9) - pt(-2, 9) = 0.9234 \\
\end{split}
\end{equation}
$$

### 7.2
$$
\begin{equation}
\begin{split}
P(|T| < t) = 0.98 \\
= pt(t, 9) - pt(-t, 9) \\
\implies \\
pt(-t, 9) = (1 - 0.98)/2 = 0.01 \\
\implies
- t= qt(0.01, 9) = -2.821\\
\\
t = 2.821
\end{split}
\end{equation}
$$


## 8 Pulando
## 9
![[Pasted image 20230412131531.png]]
Do exercício 3:
$$
\begin{equation}
\begin{split}
\sigma = 0.75 \\
n = 20 \\
\end{split}
\end{equation}
$$
Usando a fórmula da [[Distribuição "t de Student"]]
$$
\begin{equation}
\begin{split}
H_0: \mu \le 4.5 \\
H_a: \mu \gt 4.5 \\
\\
\alpha = 0.05\\
\mu_0 = 4.5 \\
\\
z_{observado} = \sqrt{n}\frac{\bar{x} - \mu_0}{\sigma}  \\
= \sqrt{20}\frac{4.85 - 4.5}{0.75} = 2.087\\
\end{split}
\end{equation}
$$

Como $\alpha = 0.05$, o valor crítico ($z_\alpha$)é:

$$
\begin{equation}
\begin{split}
z_\alpha = z_{0.05} = qnorm(0.95) = 1.644 \\
\end{split}
\end{equation}
$$

$1.644 = z_\alpha \lt z_{observado} = 2.087$, portanto $H_0$ é rejeitada, e então temos evidência suficinete para aceitar a afirmação.

o P-valor é: 
$$
\begin{equation}
\begin{split}
p_{value} = 1 - pnorm(z_{obs}) = 1 - pnorm(2.087) = 0.018
\end{split}
\end{equation}
$$
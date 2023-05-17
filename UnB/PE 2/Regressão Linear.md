[[03 - regressão linear simples.pdf|Notas de aula]]

## Estimador de $\sigma$ ($\hat\sigma$)
$$
\begin{equation}
\begin{split}
\hat\sigma^2=\frac{1}{n-2}\sum_i(y_i-\hat\alpha -\hat\beta x_i)^2
\end{split}
\end{equation}
$$
## Estimador de $\alpha$ ($\hat\alpha$) e $\beta$ ($\hat\beta$)
$$
\begin{equation}
\begin{split}
\hat\alpha=\bar{y} -\hat\beta\bar{x}
\\
\\
\hat\beta=\frac{\sum_i(x_i-\bar{x})(y_i-\bar{y})}{(x_i-\bar{x})^2}
\end{split}
\end{equation}
$$

## IC
$$
\begin{equation}
\begin{split}
IC(\beta): \hat\beta\ \pm t_{n-2,\ a/2}\hat\sigma\frac{1}{\sqrt{\sum^n_{i=1}(x_i-\bar{x})^2}}
\\
\\
IC(\alpha): \hat\alpha\ \pm t_{n-2,\ a/2}\hat\sigma \sqrt\frac{\sum^n_{i=1}x_i^2}{n\sum^n_{i=1}(x_i-\bar{x})^2}
\end{split}
\end{equation}
$$

## Teste de Hipótese ($t_{obs}$) e p-valor
### $t_{obs}$
$$
\begin{equation}
\begin{split}
|t_{obs}|=
\left|

\frac{\hat\beta-\beta_0}{\hat\sigma}
\sqrt{\sum_{i=1}^n(x_i-\bar{x})^2}

\right|
\end{split}
\end{equation}
$$
### p-valor
$$
\begin{equation}
\begin{split}

p_{valor}= 2 * P(T_{n-2} > |t_{obs}|) \text{( "\texttt{2 * qt($t_{obs}$, n-2)}" no R. ou é pt??}
\end{split}
\end{equation}
$$

| Hipótese                                         | Fórmula                                                 |
| ------------------------------------------------ | ------------------------------------------------------- |
| $H_0: \beta = \beta_0$, $H_a: \beta \ne \beta_0$ | $$\begin{equation}\begin{split}\text{rejeita $H_0$}\iff t_{obs} > t_{n-2,\ a/2}\end{split}\end{equation}$$ |

## Equações úteis que eu não achei lugar ainda?

$$
\begin{equation}
\begin{split}
E(y_{i})=\alpha+\beta x_i \text{ ($+E(\epsilon_i)$ se considerando erro)}
\end{split}
\end{equation}
$$

$$
\begin{equation}
\begin{split}
\hat{\alpha}=\bar{y} - \hat\beta \bar{x}

\hat\sigma²=\frac{1}{n-2}\sum^n_{i=1}(y_i-\hat\alpha-\hat\beta x_i)^2
\end{split}
\end{equation}
$$

$$
\begin{equation}
\begin{split}
Var(\hat\beta)=\sigma^2\frac{1}{\sum^n_{i=1}(x_i-\bar x)^2} \\
Var(\hat\alpha)=\sigma^2\frac{\sum x_i^2}{n\sum(x_i-\bar{x})^2}
\end{split}
\end{equation}
$$

$$
\begin{equation}
\begin{split}
\hat\sigma^2 = \frac{(n-2)\hat\sigma^2}{\sigma^2} \sim \chi^2_{n-2}
\end{split}
\end{equation}
$$

## Intro/motivação
### Ideia
Modelar a relação entre 2 variáveis aleatórias X e Y

### Modelo
Valor Esperado:
$$
\begin{equation}
\begin{split}
E(Y|X=x)=g(x) \text{ (valor esperado de Y t.q. $X=x$)} \\
\\
\epsilon=Y-g(x) \text{ (erro)} \\
\end{split}
\end{equation}
$$

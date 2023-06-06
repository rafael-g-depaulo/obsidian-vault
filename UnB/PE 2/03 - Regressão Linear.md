[[03 - regressão linear simples.pdf|Notas de aula]]

## Checar no R
- lm
	- usar `vel ~ 1 + dist`
	- vel=y
	- dist=beta

## Estimadores

| Var        | Estimador                                                                                                                    | IC                                                                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\sigma^2$ | $$\begin{equation}\begin{split}\hat\sigma^2=\frac{1}{n-2}\sum_i(y_i-\hat\alpha -\hat\beta x_i)^2\end{split}\end{equation}$$  |                                                                                                                                                                           |
| $\alpha$   | $$\begin{equation}\begin{split}\hat\alpha=\bar{y} -\hat\beta\bar{x}\end{split}\end{equation}$$                               | $$\begin{equation}\begin{split}IC(\alpha): \hat\alpha\ \pm t_{n-2,\ a/2}\hat\sigma \sqrt\frac{\sum^n_{i=1}x_i^2}{n\sum^n_{i=1}(x_i-\bar{x})^2}\end{split}\end{equation}$$ | 
| $\beta$    | $$\begin{equation}\begin{split}\hat\beta=\frac{\sum_i(x_i-\bar{x})(y_i-\bar{y})}{\sum_i(x_i-\bar{x})^2}\end{split}\end{equation}$$ | $$\begin{equation}\begin{split}IC(\beta): \hat\beta\ \pm t_{n-2,\ a/2}\hat\sigma\frac{1}{\sqrt{\sum^n_{i=1}(x_i-\bar{x})^2}}\end{split}\end{equation}$$                   |
OBS: alternativa pra beta é $\frac{\sum x_iy_i - 2n^2\bar{x}\bar{y} + n\bar{x}\bar{y}}{\sum x_i^2 -n\bar{x}^2}$ (lembra que o somatório é só pra aquele termo da soma)

## Teste de Hipótese ($t_{obs}$) e p-valor
### $t_{obs}$
$$
\begin{equation}
\begin{split}
t_{obs}=
\frac{\hat\beta-\beta_0}{\hat\sigma}
\sqrt{\sum_{i=1}^n(x_i-\bar{x})^2}
\end{split}
\end{equation}
$$

| Hipótese                                         | Fórmula                                                 |
| ------------------------------------------------ | ------------------------------------------------------- |
| $H_0: \beta = \beta_0$, $H_a: \beta \ne \beta_0$ | $$\begin{equation}\begin{split}\text{rejeita $H_0$}\iff t_{obs} > t_{n-2,\ a/2}\end{split}\end{equation}$$ |

### p-valor
$$
\begin{equation}
\begin{split}

p_{valor}= 2 * P(T_{n-2} > |t_{obs}|) \text{( "\texttt{2 * qt(Tobs, n-2)}" no R. ou é pt??}
\end{split}
\end{equation}
$$


## Provavelmetne inútil: Var
$$
\begin{equation}
\begin{split}
Var(\hat\beta)=\sigma^2\frac{1}{\sum^n_{i=1}(x_i-\bar x)^2} \\
Var(\hat\alpha)=\sigma^2\frac{\sum x_i^2}{n\sum(x_i-\bar{x})^2}
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

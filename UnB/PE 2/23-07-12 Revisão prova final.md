# Cap 3 (regressão)

## MQ (com x²)
só lembra dos 2 truques:

$$

\begin{equation}
\begin{split}

\sum((x_i-\bar{x})^2)= \sum x^2 - (\sum x)^2/n

\\
\\

\sum((y_i-\bar{y})(x_i-\bar{x})) = \sum(y_ix_i) - n\bar{x}\bar{y}

\end{split}
\end{equation}
$$

## MQ (manual)

| Var        | Estimador                                                                                                                          | IC                                                                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\sigma^2$ | $$\begin{equation}\begin{split}\hat\sigma^2=\frac{1}{n-2}\sum_i(y_i-\hat\alpha -\hat\beta x_i)^2\end{split}\end{equation}$$        |                                                                                                                                                                           |
| $\alpha$   | $$\begin{equation}\begin{split}\hat\alpha=\bar{y} -\hat\beta\bar{x}\end{split}\end{equation}$$                                     | $$\begin{equation}\begin{split}IC(\alpha): \hat\alpha\ \pm t_{n-2,\ a/2}\hat\sigma \sqrt\frac{\sum^n_{i=1}x_i^2}{n\sum^n_{i=1}(x_i-\bar{x})^2}\end{split}\end{equation}$$ |
| $\beta$    | $$\begin{equation}\begin{split}\hat\beta=\frac{\sum_i(x_i-\bar{x})(y_i-\bar{y})}{\sum_i(x_i-\bar{x})^2}\end{split}\end{equation}$$ | $$\begin{equation}\begin{split}IC(\beta): \hat\beta\ \pm t_{n-2,\ a/2}\hat\sigma\frac{1}{\sqrt{n\sum(x_i-\bar{x})^2}}\end{split}\end{equation}$$                          |


## Teste de Hipótese
$$
\begin{equation}
\begin{split}
T_{obs}=\frac{\hat{\beta} - \beta_0}{\hat{\sigma}^2}\sqrt{\sum (x - \bar{x})^2}
\end{split}
\end{equation}
$$

# Cap 4 (teste chi2)

## chi^2
$$\begin{equation}\begin{split}\chi^2_{obs}=\sum\frac{(f_{observada}-f_{esperada})^2}{f_{esperada}} \\\end{split}\end{equation}$$
**usando sempre k-1-r no parâmetro da chi²**

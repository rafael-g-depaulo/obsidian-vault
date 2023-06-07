[[03 - regressão linear simples.pdf|Notas de aula]]

## Estimadores Mínimos Quadrados (MQ)

| Var        | Estimador                                                                                                                          | IC                                                                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $\sigma^2$ | $$\begin{equation}\begin{split}\hat\sigma^2=\frac{1}{n-2}\sum_i(y_i-\hat\alpha -\hat\beta x_i)^2\end{split}\end{equation}$$        |                                                                                                                                                                           |
| $\alpha$   | $$\begin{equation}\begin{split}\hat\alpha=\bar{y} -\hat\beta\bar{x}\end{split}\end{equation}$$                                     | $$\begin{equation}\begin{split}IC(\alpha): \hat\alpha\ \pm t_{n-2,\ a/2}\hat\sigma \sqrt\frac{\sum^n_{i=1}x_i^2}{n\sum^n_{i=1}(x_i-\bar{x})^2}\end{split}\end{equation}$$ |
| $\beta$    | $$\begin{equation}\begin{split}\hat\beta=\frac{\sum_i(x_i-\bar{x})(y_i-\bar{y})}{\sum_i(x_i-\bar{x})^2}\end{split}\end{equation}$$ | $$\begin{equation}\begin{split}IC(\beta): \hat\beta\ \pm t_{n-2,\ a/2}\hat\sigma\frac{1}{\sqrt{n\sum(x_i-\bar{x})^2}}\end{split}\end{equation}$$                   |

$$
\sum(x_i-\bar{x})^2
=\sum(x_i^2-2\bar{x}x_i+\bar{x}^2)
=\sum x_i^2 -n\bar{x}^2
=\sum x_i^2 -(\sum x_i)^2/n
$$

### R Estimador
```r
beta_hat=(n*sumxy - sumx*sumy)/(n*sumx2 - sumx**2); beta_hat
alpha_hat=sumy/n - beta_hat*sumx/n; alpha_hat
sigma2hat=1/(n-2)*(sumy2 - sumy*sumy/n - beta_hat*(sumxy - sumx*sumy/n)); sigma2hat
```

### R IC
```r
alpha=0.05
alpha_radius = qt(1-alpha/2, n-2)*sqrt(sigma2hat*sumx2/(n*sumx2-sumx**2))
IC_alpha=c(alpha_hat-alpha_radius, alpha_hat+alpha_radius); IC_alpha
beta_radius = qt(1-alpha/2, n-2)*sqrt(sigma2hat/(n*sumx2-sumx**2))
IC_beta=c(beta_hat-beta_radius, beta_hat+beta_radius); IC_beta
```

### R Tobs
```R
beta_0=0
t_obs=(beta_hat - beta_0)/sqrt(sigma2hat)*sqrt(n*sumx2 - sumx^2); t_obs
p_value=2*(1-pt(t_obs, n-2)); p_value
```

### R ANOVA
```r
SQ_reg=betahat**2 * (sumx2 - sumx**2/n)
SQ_tot=sumy2 - sumy**2/n
SQ_res=SQ_tot - SQ_reg
print("SQ_reg"); SQ_reg
print("SQ_res"); SQ_res
print("SQ_tot"); SQ_tot

QM_reg=SQ_reg
gl_res=n-2
QM_res=SQ_res/gl_res
print("SQ_reg"); SQ_reg
print("SQ_res"); SQ_res

F_obs=QM_reg/QM_res
print("F_obs"); F_obs

R_sqr=SQ_reg/SQ_tot
print("R_sqr"); R_sqr
```

### Alternativas
- Beta
	- $\frac{\sum x_iy_i - 2n^2\bar{x}\bar{y} + n\bar{x}\bar{y}}{\sum x_i^2 -n\bar{x}^2}$
- Sigma
	- $\frac{\sum y_i^2 -\bar{y}\sum{y_i} -\hat\beta(\sum x_iy_i -n\bar{x}\bar{y})}{n-2}$


## Teste de Hipótese ($t_{obs}$) e p-valor
### $t_{obs}$
**APARENTEMENTE TEM QUE DIVIDIR POR $\sqrt {n}$ TAMBÉM, MAS NÃO SEI SE ONDE VEM ISSO** 
$$
\begin{equation}
\begin{split}
\sqrt{F_{obs}}=
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

p_{valor}= 2 * P(T_{n-2} > |t_{obs}|)
\end{split}
\end{equation}
$$


## Tabela de Análise de Variância
![[Pasted image 20230607111647.png]]

### Teste de hipótese
Para calcular o $F_{gl\_REG, gl\_RES, \alpha}$, faça
```R
gl_res=n-2
F_hip=qf(1-alpha, 1, gl_res); F_hip
```
E P-valor:
```R
gl_res=n-2
p_valor=1-pf(F_obs, 1, gl_res); p_valor
```

## Provavelmetne inútil: Var
$$
\begin{equation}
\begin{split}
Var(\hat\beta)=\sigma^2\frac{1}{\sum^n_{i=1}(x_i-\bar x)^2} \\
Var(\hat\alpha)=\sigma^2\frac{\sum x_i^2}{n\sum(x_i-\bar{x})^2}
\end{split}
\end{equation}
$$

## Checar no R
- lm
	- usar `vel ~ 1 + dist`
	- vel=y
	- dist=beta

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

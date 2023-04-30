| Nome                       | símbolo/fórmula                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| média real da população    | $\mu$                                                                                                                                                                             |
| média da amostra           | $\bar{x}$                                                                                                                                                                         |
| Desvio Padrão real         | $\sigma$                                                                                                                                                                          |
| Estimador do Desvio Padrão | $$\begin{equation}\begin{split}\hat{\sigma} = \cases{\sigma, \text{se } \sigma \textit{ é conhecido} \\s, \text{se } \sigma \textit{ não é conhecido}}\end{split}\end{equation}$$ |
| Variância Real             | $\sigma^2$                                                                                                                                                                        |
| Variância da Amostra       | $$Var(\bar{x}) = \frac{\sigma^2}{n}$$                                                                                                                                             |
| Desvio Padrão Real         | $$DesvioPadrao(\bar{x}) = \frac{\sigma}{\sqrt{n}}$$                                                                                                                               |
| desvio padrão da amostra   | $$s = \frac{1}{n-1}\sum^{n}_{i=1}(x_i-\bar{x})^2$$                                                                                                                                |
| Centro da Normal           | $$P(-z < Z < z) = 2*P(Z < z) - 1$$                                                                                                                                                |
| Intervalo de Confiança     | $$IC = x \pm z_{\alpha/2} * \frac{\sigma}{\sqrt{n}}$$                                                                                                                             |
| Z?                         | $$z_x = qnorm(1 - x)$$                                                                                                                                                            |
 
## Comparação de 2 populações
| Nome                                                                                               | símbolo/fórmula                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variância de amostras independentes                                                                | $$\begin{equation}\begin{split}Var(\bar{X_a}- \bar{X_b}) =\frac{\sigma_A^2}{n_a} + \frac{\sigma_B^2}{n_b}\end{split}\end{equation}$$                                       |
| Teste de Hipótese com 2 pop distribuição normal e variÂncia conhecida                              | $$\begin{equation}\begin{split}z_{obs} = \frac{(\overline{x}_b - \overline{x}_a) - d_0}{\sqrt{Var(X_a - X_b)}}\end{split}\end{equation}$$                                  |
| Variância quando população grande (S aqui é o usando o desvio padrão da amostra na tabela de cima) | $$\begin{equation}\begin{split}Var(\bar{X}_a - \bar{X}_b) = \hat{\sigma}_{\bar{X}_a - \bar{X}_b} = \sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}\end{split}\end{equation}$$ |
| IC nível $100(1-\alpha)$% para $\mu_a - \mu_b$  com pop grande                                     | $$\begin{equation}\begin{split}IC = (\bar{x}_a - \bar{x}_b) \pm z_{\alpha/2}*Var(\bar{X}_a - \bar{X}_b)\end{split}\end{equation}$$                                         |
| pop grande z para teste de hipótese                                                                | $$\begin{equation}\begin{split}z_{obs} = \frac{(\bar{x}_a - \bar{x}_b) - d_0}{Var(\bar{X}_a -\bar{X}_b)}\end{split}\end{equation}$$                                        |



# TODO: estudar t.test no R. parece ser mega roubado

[[02 - análise de variância a um fator.pdf|Notas de aula]]


$$
\begin{equation}
\begin{split}
s_i^2= \sum_i\sum_j (y_{ij} - \bar{y}_{\cdot,\cdot})^2 \text{ copiei errado, é isso não}\\
\\
\overline{y}_{\cdot,\cdot}= (IJ)^{-1}\sum y_{i,j}
\\
\end{split}
\end{equation}
$$

## Estimar $\sigma^2$

| Definição                           | Fórumula                                                                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Sob $H_0$                           | $$\begin{equation}\begin{split}\hat\sigma^2=\frac{1}{IJ-1}\sum_i\sum_j(y_{ij}-\bar{y}_{\cdot,\cdot})^2\end{split}\end{equation}$$ |
| Alternativa: (não depende da $H_0$) | $$\begin{equation}\begin{split}\hat\sigma^2=\frac1I\sum_i s_i^2\end{split}\end{equation}$$                                        |

## $t_{obs}$
$$
\begin{equation}
\begin{split}
t_{obs}=\frac{\bar{y}_{\cdot,j}-\bar{y}_{i, \cdot}}{s_{c;i,j\sqrt{2/J}}}
\\ \\
s^2_{c;i,j}= (s_i^2 + s_j^2)/2
\end{split}
\end{equation}
$$


| Definição                        | Fórmula |
| -------------------------------- | ------- |
| Estimador Combinado da variância |   $$\begin{equation}\begin{split}s^2_{c;\ i,j} = s^2_c= (s_i^2 + s_j^2)/2\end{split}\end{equation}$$      |


## SQ (Soma de Quadrados)
| Definição                                     | Fórmula                                                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Soma de Quadrados corrigidos pela média       | $$\begin{equation}\begin{split}SQ_{tot}=\sum_i\sum_j(Y_{i,j} - \overline{Y}_{\cdot,\cdot})^2 \\\end{split}\end{equation}$$     |
| Soma de quadrados explicada pelos tratamentos | $$\begin{equation}\begin{split}SQ_{trat}=J\sum_i(\overline{Y}_{i,j}-Y_{i,\cdot})^2=(J-1)\sum_iS_i^2\end{split}\end{equation}$$ |
| Soma de quadrados do erro                     | $$\begin{equation}\begin{split}SQ_{erro}=\sum_j\sum_i(\overline{y}_{i,j}-\overline{y}_{i,\cdot})^2\end{split}\end{equation}$$                                                                                                                               |

### Observações importantes
$$
\begin{equation}
\begin{split}
SQ_{total}=SQ_{trat}+SQ_{erro} \\

\frac{1}{\sigma^2}SQ_{erro}\sim \chi^2_{I(J-1)} \\

\frac{1}{\sigma^2}SQ_{trat}\sim \chi^2_{I-1} \\
\\
F=\frac{SQ_{trat}*I(J-1)}{SQ_{erro}*(I-1)} \sim F_{I-1,\ I(J-1)} \text{ (sob $H_0$)}

\end{split}
\end{equation}
$$

## Quadrados Médios
| Definição                    | Fórmula                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Quadrado médio do tratamento | $$\begin{equation}\begin{split}QM_{trat}= \frac{J}{I-1}\sum_i (\bar{y}_{i,\cdot} - \bar{y}_{\cdot,\cdot})^2 \\\end{split}\end{equation}$$  |
| Quadrado médio do erro       | $$\begin{equation}\begin{split}QM_{erro}= \frac{1}{I(J-1)}\sum_i\sum_j (\bar{y}_{i,j} - \bar{y}_{i,\cdot})^2 \\\end{split}\end{equation}$$ |
| F observado                  | $$\begin{equation}\begin{split}F_{obs}=\frac{QM_{trat}}{QM_{erro}} \sim F_{I-1, I(J-1), \alpha}\\\end{split}\end{equation}$$               |

## Comparar tratamentos $i$ e $i'$

$$
\begin{equation}
\begin{split}
\text{quase lá:}\\
t_{obs}=\frac{\bar{y}_{i,\cdot}- \bar{y}_{i',\cdot} - (\mu_i - \mu_{i'})}{\sqrt{QM_{erro}}\sqrt{2/J}} \sim T_{I(J-1)} \\
\\
\text{e para comparar as médias de forma geral, estude a distribuição de} \\
\frac{max(\bar{y}_{i,\cdot}) - min(\bar{y}_{i,\cdot})}{\sqrt{QM_{erro}}\sqrt{2/J}} \text{ que é uma distribuição de studentized rank} \\
\end{split}
\end{equation}
$$

No IC (tem 1 pra cada tratamento) tem que ver se o 0 tá dentro do IC. fórmula:
$$
\begin{equation}
\begin{split}
IC (i \ne i') = \bar{y}_{i,\cdot} - \bar{y}_{i',\cdot} \pm T_{\alpha/2,\ I,\ I(J-1)}\sqrt{QM_{erro}}\sqrt{2/J} 
\end{split}
\end{equation}
$$

No R é `TukeyHSD`

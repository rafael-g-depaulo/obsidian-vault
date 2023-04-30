## Resumo
| Nome                               | Fórmula                                |
| ---------------------------------- | -------------------------------------- |
| variância da média                 | $$\sigma^2 = \sigma_{amostra}^2/n$$    |
| Erro padrão da média               | $$\sigma = \sigma_{amostra}/\sqrt{n}$$ |
| Estimativa do erro padrão da média | $$s = s_{amostra}/\sqrt{n}$$ |

sources:
- [esse slide da unifap](https://www2.unifap.br/herondino/files/2014/04/8-DISTRIBUI%C3%87%C3%83O-T-STUDENT.pdf)

## Variância da média
Normalmente, a variância da população ($\sigma^2$) não é conhecida e não podemos usar a distribuição normal como a distribuição de referência para a média da amostra. Em vez disso, substituir e usar a distribuição t.

Se a distribuição de referência é normal e a variância da população é estimado por $s^2$ , a quantidade:

$$
\begin{equation}
\begin{split}
T_{n-1} = \frac{
(\overline{X}- \mu) \sqrt{n}
}{s}
\end{split}
\end{equation}
$$
que é conhecido como a média padronizada ou como a estatística t, terá à distribuição com ν = n - 1 graus de liberdade.

## R
[documentação](https://www.geeksforgeeks.org/a-guide-to-dt-qt-pt-rt-in-r/)

```R
> qt(1-(alpha/2),graus_liberdade)
```

Ex: (alpha = 5%, 37 graus de liberdade)
![[Pasted image 20230417114520.png]]

## IC
$$
\begin{equation}
\begin{split}
IC = \bar{x} \pm t_{\alpha/2,\ n-1}*\frac{s}{\sqrt{n}}
\end{split}
\end{equation}
$$

## Teste de hipótese
$$
\begin{equation}
\begin{split}
H_0: \mu > \mu_0 \implies \text{Rejeita $H_0$ se } \sqrt{n}\frac{\bar{x}-\mu_0}{S} \\
\end{split}
\end{equation}
$$

## Exemplo
![[Pasted image 20230412123018.png]]
![[Pasted image 20230412123033.png]]
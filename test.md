| Valor  | Chances | Custo por chance | Custo 2 chances |
| ------ | ------- | ---------------- | --------------- |
| 59 USD | 1       | 59 USD           | 118 USD         |
| 98 USD | 2       | 49 USD           | 98 USD          |

| Opção         | Custo se passar de primeira | Custo se passar na segunda |
| ------------- | --------------------------- | -------------------------- |
| individual    | 59                          | 118                        |
| dupla         | 98                          | 98                         |
| **Diferença (<0 -> lucro)* | **-39**                     | **20**                     |

Chance estimada de passar de primeira: 60%

Valor gasto esperado se escolher comprar individual:
$$
\begin{equation}
\begin{split}
a=0.6 \text{ (chance de passar na primeira)}\\
D_1= 39 \text{ (economia se eu comprar 1 e passar de primeira)} \\
D_2= -20 \text{ (preju se eu comprar 1 e não passar de primeira)} \\
\\
E_1 = a*D_1 = 39a\text{ (economia esperada se eu comprar 1)} \\
E_2 = (1-a)*D_2 = 20a-20 \text{ (prejo esperado se eu comprar 1)} \\
\\
E_{total}= E_1 + E_2 = 59a-20 = 15.4 \text{ (economia total esperada se eu comprar 1)}
\end{split}
\end{equation}
$$

Para achar a chance de passar que eu preciso para ter as duas opções serem iguais, precisa resolver $E_{total}=0$ (ponto de igualdade).

$$
\begin{equation}
\begin{split}
E_{total}=59a-20=0 \\
59a=20 \\
a=0.3389 \approx 33.9\%
\end{split}
\end{equation}
$$

Ou seja, se eu acredito que tenho uma chance de passar de primeira maior ou igual a 33.9%, vale a pena comprar só uma tentativa pra prova.
## 1.
Existe evidência pra rejeitar que os 5 tratamentos são iguais?

$$
\begin{equation}
\begin{split}
J=6 \text{ (observações)} \\
I=5 \text{ (tratamentos)} \\
SQ_{trat}=8.07 \\
SQ_{err}=25.33 \\
\\
\alpha=0.10 \\
H_0:\not\exists_{x, y} (\mu_x \ne \mu_y)\\
\end{split}
\end{equation}
$$

$$
\begin{equation}
\begin{split}
f_{obs}=\frac{SQ_{trat}*I(J-1)}{SQ_{erro}*(I-1)}=\frac{8.07*5*5}{25.33*4} \\
=1.9912 \\
\\
F_{4,\ 25,\ 0.10}=2.184 \\
F_{4,\ 25,\ 0.10} > f_{obs} \implies \text{não rejeita $H_0$}\\
\\
p_{valor}= P(F_{4,\ 25} > f_{obs}) = 0.127
\end{split}
\end{equation}
$$

## 2.
![[Pasted image 20230513102049.png]]

### 2.1. calcule a, b, c, d, e
$$
\begin{equation}
\begin{split}
a=34-e=4\\
b=SQ_{total}-SQ_{err}=406.74\\
c=101.685\\
e=SQ_{err}/QM_{err}=30\\
F=QM_{trat}/QM_{err}=2.230
\end{split}
\end{equation}
$$

### 2.2. quantos tratamentos tinha o experimento? quantas observações?

$$
\begin{equation}
\begin{split}
4=gl_{trat}=I-1\\
I=5 \implies \text{5 tratamentos}
\end{split}
\end{equation}
$$

$$
\begin{equation}
\begin{split}
30=gl_{erro}=I(J-1)\\
=5(J-1)\\
6=J-1\implies J=7\\
\\
\text{7 observações}
\end{split}
\end{equation}
$$
### 2.3. existe evidência para oncluir que os tratamentos são diferentes? $\alpha=0.10$. Calcule p-valor
$$
\begin{equation}
\begin{split}
I=5, J=7 \\
\alpha=0.1\\
f_{obs}=2.230\\
\\
f_{I-1,\ I(J-1),\ \alpha}=f_{4,\ 30,\ 0.1}= 2.1422\\
f_{obs} > f_{4,\ 30,\ 0.1} \implies \text{Rejeita $H_0$}\\
\\
p_{valor}=0.089
\end{split}
\end{equation}
$$

## 3. 
| Spray |     |     |     |     |     |     |     |     |     |     |     |     |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A     | 10  | 7   | 20  | 14  | 14  | 12  | 10  | 23  | 17  | 20  | 14  | 13  |
| B     | 11  | 17  | 21  | 11  | 16  | 14  | 17  | 17  | 19  | 21  | 7   | 13  |
| C     | 0   | 1   | 7   | 2   | 3   | 1   | 2   | 1   | 3   | 0   | 1   | 4   |
| D     | 3   | 5   | 12  | 6   | 4   | 3   | 5   | 5   | 5   | 5   | 2   | 4   |
| E     | 3   | 5   | 3   | 5   | 3   | 6   | 1   | 1   | 3   | 2   | 6   | 4   |
| F     | 11  | 9   | 15  | 22  | 15  | 16  | 13  | 10  | 26  | 26  | 24  | 13  |
Use $\alpha=0.05$

### 3.1. Existe diferença entre a efetividade dos 6 tratamentos? 
$$
\begin{equation}
\begin{split}
QM_{trat}=533.8\\
QM_{err}=15.4\\
f_{obs}=QM_{trat}/QM_{err}=34.662 > 2.353 \implies \text{Rejeita $H_0$} \iff \text{são diferentes}
\end{split}
\end{equation}
$$

### 3.2. Quais são diferentes?
A-C
B-C
F-C
A-E
B-E
F-E
A-D
B-D
F-D

### 3.3. Verifique graficamente ou de outra forma se os supostos de homoscedasticidade (variˆancias iguais dentro de cada spray) e normalidade s˜ao adequados para esses dados.

## 4.
| Tratamento | $\bar{y}_{i,\cdot}$ | Soma quadrado |
| ---------- | ------------------- | ------------- |
| 1          | 38                  | 224           |
| 2          | 37                  | 199           |
| 3          | 62                  | 396           |

Quais conclusões? tem um melhor e tal?

São diferentes. (usando aov e summary dá pra ver que o F obs é enorme e o p-valuie minúsculo).

usando TukeyHSD (e 0.05 pra alpha) chegamos na conclusão que 3 é melhor que 1 e 2

![[Pasted image 20230516113403.png]]

## 5.
| Tratamento | $y_{i,1}$ | $y_{i,2}$ | $y_{i,3}$ | $y_{i,4}$ | $y_{i,5}$ | $y_{i,6}$ |
| ---------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Trigo      | 5.2       | 4.5       | 6.0       | 6,1       | 6.7       | 5.8       |
| Cevada     | 6.5       | 8.0       | 6.1       | 7.5       | 5.9       | 5.6       |
| Milho      | 5.8       | 4.7       | 6.4       | 4.9       | 6.0       | 5.2       |
| Aveia      | 8.3       | 6.1       | 7.8       | 7.0       | 5.5       | 7.2          |

$\alpha=0.05$

![[Pasted image 20230516113517.png]]

p-valor (0.022) é menor que $\alpha$, então rejeita $H_0$ (tem pelo menos 1 diferente)

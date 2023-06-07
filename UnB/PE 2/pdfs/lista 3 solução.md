## 1. 
$$
\begin{equation}
\begin{split}
n=20\\
\sum x_i=-2.52\\
\sum x_i^2=20.86\\
\sum y_i=51.59\\
\sum y_i^2=742.48\\
\sum y_i*x_i=9.10\\
\end{split}
\end{equation}
$$
### 1.1. Calcule MQ de $\alpha$ e $\beta$ e $\hat\sigma^2$
![[Pasted image 20230606132506.png]]
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
### **APARENTEMENTE COM N=21 FUNCIONA, MAS NÃO ENTENDI PQ**
![[Pasted image 20230606171844.png]]

### 1.2. Calcule IC para $\alpha$ e $\beta$ e $\sigma^2$ (95%)
![[Pasted image 20230606173145.png]]

### 1.3. Teste (NS 5%) $H_0: \beta=0$
![[Pasted image 20230606174750.png]]
![[Pasted image 20230606175254.png]]
Ha evidência para rejeitar a hipótese nula, já que p_valor <= alpha

#### 1.4. Construa tabela de análise de variâncie e calcule $R^2$

| Fonte de Variação | gl  | SQ       | QM       | F_obs     |
| ----------------- | --- | -------- | -------- | --------- |
| Regressão         | 1   | 11.37334 | 11.37334 | 0.3595532 | 
| Resíduos          | 19  | 604.3672 | 604.3672 |           |
| Total             | 20  | 615.7406 |          |           |

R²=0.01847099
## 2.
![[Pasted image 20230606105449.png]]

### 2.1. Calcule as variáveis
a=1 (pq gl da regressão é sempre 1)
b=SQ_tot-SQ_res = 106.74
c=SQ_reg/gl_reg = 106.74
d=QM_reg/QM_res = c/f = 1.560526
e=gl_total - a = 20 
f=SQ_res/gl_res = 68.4

### 2.2. Quantos indivíduos foram observados?
n= gl_total + 1 = 22

### 2.3. Existe evidência que $\beta \ne 0$? Calcule p-valor (alpha=0.1)
p-valor do F_obs é ~0.226, que é acima do alpha. Portanto, não existe evidência que beta != 0

### 2.4. Calcule R²
R= SQ_reg/SQ_tot=0.072378

### 2.5. Sabendo que $\sum_i(x_i-\bar{x})^2=5.67$, calcule o calor absoluto de MQ $\hat\beta$ 
$$
\begin{equation}
\begin{split}
F_{obs}=t_{obs}^2=\beta^2\frac{\sum(x_i-\bar{x})^2}{\hat\sigma^2}\\
\text{substituindo $F_{obs}$, $\sum(x_i-\bar{x})^2$ e $\$}
\end{split}
\end{equation}
$$


## 3.
![[Pasted image 20230606112555.png]]

### 3.1. Faça um gráfico de dispersão de vestibular e ira. ele sugere ue um modelo linear pode explicar o rendimento?

### 3.2. Calcule MQ de $\alpha$ e $\beta$ e $\hat\sigma^2$.
### 3.3. Calcule IC para $\alpha$ e $\beta$ e $\sigma^2$ (95%)
### 3.4. Teste (NS 5%) $H_0: \beta=0$
### 3.5. Construa tabela da análise de variância
### 3.6. IC (95%) ira médio dos alunos com nota 70
### 3.7. Intervalo de previsão IRA de um aluno com nota 70
### Pulando 3.8-3.9 arbitrariamente


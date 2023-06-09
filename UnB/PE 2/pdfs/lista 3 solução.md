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
F_{obs}=t_{obs}^2=\hat\beta^2\frac{\sum(x_i-\bar{x})^2}{\hat\sigma^2}\\
\text{substituindo $F_{obs}=1.561$, $\sum(x_i-\bar{x})^2=5.67$ e $\hat\sigma^2=QM_{res}=68.4$:}\\
1.561=\hat\beta^2*\frac{5.67}{68.4}\\
\hat\beta^2=18.8311 \implies \hat\beta=4.3394
\end{split}
\end{equation}
$$

## 3.
![[Pasted image 20230606112555.png]]

### 3.1. Faça um gráfico de dispersão de vestibular e ira. ele sugere ue um modelo linear pode explicar o rendimento?
```R
# data
vest <- c(66,62,66,56,93,66,91,53,60,81,57,58,55,65,72,75,64,67,67,73)
ira <- c(63.5,53.7,55.3,79.7,73.4,72.6,84.0,55.0,67.7,60.4,58.3,38.9,71.3,70.0,71.4,81.9,68.8,72.6,70.3,77.1)
y = ira
x = vest

# AAAAAAAAAAAA
n <- length(x)
conf <- 0.95       # 1 - alpha
tail <- (1+conf)/2 # ponto que marca a sessão da distribuição que fica pra fora do IC desejado

# Gráfico de dispersão
par(mfrow=c(1,1))
plot(x, y)
ajuste <- lm(y ~ 1+x)
abline(ajuste) # inclue a reta de minimos quadrados no gráfico
summary(ajuste)

# Estimadires MQ
alpha_hat <- ajuste$coefficients[1]
beta_hat <- ajuste$coefficients[2]
sigma2_hat <- sum( (y - (alpha_hat + beta_hat*x))**2 / (n-2) )
sigma_hat <- sqrt(sigma2_hat)

# IC (s here means radius without the t component. we will multiply that later)
alpha_s <- sqrt(sigma2_hat * sum(x^2) / (n*sum((x-mean(x))**2)) )
beta_s <- sqrt(sigma2_hat / sum( (x - mean(x))**2 ))

alpha_IC <- alpha_hat + qt(c(1-tail, tail), n-2) * alpha_s
beta_IC <- beta_hat + qt(c(1-tail, tail), n-2) * beta_s

# F_obs e p-valor
beta_0 = 0
F_obs <- (beta_hat-beta_0)/sigma_hat*sqrt(sum((vest - mean(vest))**2))
p_value <- 2*(1-pt(F_obs, n-2))
```


### 3.2. Calcule MQ de $\alpha$ e $\beta$ e $\hat\sigma^2$.
### 3.3. Calcule IC para $\alpha$ e $\beta$ e $\sigma^2$ (95%)
### 3.4. Teste (NS 5%) $H_0: \beta=0$
### 3.5. Construa tabela da análise de variância
### 3.6. IC (95%) ira médio dos alunos com nota 70
### 3.7. Intervalo de previsão IRA de um aluno com nota 70
### Pulando 3.8-3.9 arbitrariamente


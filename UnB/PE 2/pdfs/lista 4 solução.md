## 1
Um dado foi lan¸cado n = 200 vezes obtendo-se 11 vezes a face “1”, 34 a “2”, 40 a
“3”, 23 a “4”, 38 a “5” e 54 vezes a “6”.

### 1.1. Teste (NS 5%) $H_0: pi=1/6, i\in [1,6]$. calcule p-valor
```R
n = 200
f_esp <- c(rep(n/6, 6))
f_obs <- c(11, 34, 40, 23, 38, 54)
chi2_obs <- sum((f_esp - f_obs)^2/f_esp) # 32.98
p_valor <- 1-pchisqr(chi2_obs, 5) # 3.8e-6. 5 pq (k=6)-1
```
p-valor abaixo de NS, então rejeita H_0

## 2.
![[Pasted image 20230628083232.png|600]]
```R
falhas <- c(0,1,2,3)
motores <- c(24,10,12,4)
k <- length(falhas) # 4
n <- sum(motores) # 50
theta_hat = (0*24 + 1*10 + 2*12 + 3*4)/50 # 0.92
theta_hat = sum(falhas*motores)/n #0.92

f_obs = motores
# para todos tirando o último usar poison.
p_esp = exp(-theta_hat)*theta_hat**falhas/factorial(falhas)
# para o último usar 1 - todos os anteriores
p_esp[4] = 1 - sum(p_esp) + p_esp[4]

f_esp = p_esp * n

chi2_obs <- sum((f_esp - f_obs)^2/f_esp)
p_valor <- 1-pchisq(chi2_obs, k-1-1) # r=-1 because we estimated theta

chi2_obs # 6.273
p_valor # 0.0434
```

### 2.1. Teste a nível 5% H_0 que o número de falhas segue uma distribuição geométrica
o p-valor do teste é 0.043 < 0.05, então rejeitamos H_0

## 3.
![[Pasted image 20230628083441.png]]
proporções populacionais são 0.177, 0.032, 0.734, 0.057

### 3.1. H_0 as proporções são iguais as do censo? NS 1%
```R
freq_obs <- c(57, 11, 330, 6)
p_esp <- c(0.177, 0.032, 0.734, 0.057)
n <- sum(freq_obs)
k <- length(feq_obs)
r <- 0 # parametros estimados
freq_esp <- p_esp * n

chi2_obs <- sum((freq_obs - freq_esp)**2/freq_esp) # 19.5987
p_valor <- 1-pchisq(chi2_obs, k-1-r) # 0.000205
```

como p_valor = 0.0002 < 0.01 = NS, rejeitamos H_0

## 4.
![[Pasted image 20230628083611.png|675]]
![[Pasted image 20230628083632.png|625]]

### 4.1. Teste se R gerou efetivamente números com distribuição normal (NS 1%). Calcule p-valor.
### 4.2. Calcule mu e sigma^2. use alpha=0.01 e calcule p-valor.

## 7. 
![[Pasted image 20230628084107.png|850]]
```R
J=2
I=3
GL=(J-1)*(I-1)
freq_obs=c(50, 110, 40, 150, 42, 8)
n=sum(freq_obs)
p_hat = freq_obs/n
p_dot1 = (freq_obs[1]+freq_obs[4])/n
p_dot2 = (freq_obs[2]+freq_obs[5])/n
p_dot3 = (freq_obs[3]+freq_obs[6])/n

p_1dot = (freq_obs[1]+freq_obs[2]+freq_obs[3])/n
p_2dot = (freq_obs[4]+freq_obs[5]+freq_obs[6])/n

p_tilde = c(p_dot1*p_1dot,p_dot2*p_1dot,p_dot3*p_1dot,p_dot1*p_2dot,p_dot2*p_2dot,p_dot3*p_2dot)

# p_hat:  0.125 0.275 0.100 0.375 0.105 0.020
# p_tilde 0.25 0.19 0.06 0.25 0.19 0.06

chi2_obs = n*sum((p_tilde-p_hat)**2/p_tilde)
p_valor <- 1-pchisq(chi2_obs, GL)

```
## 8.
![[Pasted image 20230628084133.png|800]]

## 9.
![[Pasted image 20230628084153.png|825]]

## 10.
![[Pasted image 20230628084218.png]]
Teste (NS 5%) se existe associação entre uso de tabaco por alunos e seus pais. calcule p-valor
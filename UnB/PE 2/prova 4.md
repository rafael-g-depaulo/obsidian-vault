## 1
![[Pasted image 20230613215604.png]]
n=22 (pq na lista 3 só com +1 funcionou)

![[Pasted image 20230613215938.png]]
![[Pasted image 20230613221322.png]]


## 2
![[Pasted image 20230613220534.png]]
![[Pasted image 20230613221252.png]]
![[Pasted image 20230613221303.png]]

## 3
![[Pasted image 20230613221352.png]]

```R
dose <- c(20,20,30,30,40,40,50,50,60,60)
reducao <- c(1.1, 0.5, 1.4, 0.9, 2.8, 1.6, 1.1, 0.9, 2.0, 1.9)
x = dose
y = reducao

n <- length(x)
conf <- 0.95       # 1 - alpha
tail <- (1+conf)/2 # ponto que marca a sessão da distribuição que fica

ajuste <- lm(y ~ 1+x)
summary(ajuste)

alpha_hat <- ajuste$coefficients[1]; alpha_hat
beta_hat <- ajuste$coefficients[2]; beta_hat
sigma2_hat <- sum( (y - (alpha_hat + beta_hat*x))**2 / (n-2) ); sigma2_hat
sigma_hat <- sqrt(sigma2_hat)

beta_error <- sqrt(sigma2_hat / sum( (x - mean(x))**2 ))
beta_IC <- beta_hat + qt(c(1-tail, tail), n-2) * beta_error; beta_IC
```

![[Pasted image 20230613222158.png]]
## 1
![[Pasted image 20230628110449.png]]

chi2 = 8.298667
gl=k-1=4-1=3
p_valor=0.04022607

```R
f_obs = c(522, 205, 196, 77)
p_esp = c(9/16, 3/16, 3/16, 1/16)
n = sum(f_obs)
f_esp = p_esp*n
chi2_obs = sum((f_esp - f_obs)**2/f_esp)
p_valor = 1-pchisq(chi2_obs, 3)
```

## 2
![[Pasted image 20230628111013.png|1325]]
```R
x_count = c(0, 1, 2, 3, 4)
freq_obs = c(20, 65, 80, 31, 4)
n=200
k=length(freq_obs)
x_bar = sum(x_count*freq_obs)/n # 1.67
p_hat = 1/4*x_bar # 0.4175
p_esp = x_count
```
## 3
![[Pasted image 20230628111149.png]]
chi2_obs = 9.186156
gl=(i-1)(j-1)=2\*2=4
p_valor=0.056611
```R

```
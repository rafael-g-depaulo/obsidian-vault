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

## 3
![[Pasted image 20230628111149.png]]

```R

```
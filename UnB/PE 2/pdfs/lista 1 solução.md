## 1
$$
\begin{equation}
\begin{split}
n_a=400 \\
n_b=100 \\
\bar{x}_a=18.93 \\
\bar{x}_b=17.00 \\
s_a=12.00\\
s_b=8.00\\ 
\end{split}
\end{equation}
$$

### 1.1 Construa um IC 95% para $\mu_a - \mu_b$
$$
\begin{equation}
\begin{split}
\alpha=0.05
\\
\\
IC (\mu_a-\mu_b): \bar{x}_a - \bar{x}_b \pm z_{\alpha/2} * \sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}

\\
=1.93\ \pm z_{0.025}* \sqrt{144/400 + 64/100} \\
=1.93\ \pm 1.960 * \sqrt{1} \\
= (-0.03,3.89)

\end{split}
\end{equation}
$$
### 1.2 calcule p-valor ($NS=5\% \implies \alpha=0.05$) de $\mu_a=\mu_b$
$$
\begin{equation}
\begin{split}
\alpha=0.05 \\
d_0 = 0 \\
H_0: \mu_a - \mu_b = 0 \\
H_a: \mu_a - \mu_b \ne 0 \\
\\
\text{rejeita } H_0 \iff |z_{obs}| > z_{\alpha/2} \\
z_{\alpha/2} = 1.960 \\
\\
z_{obs} = \frac{(\bar{x}_a - \bar{x}_b) - d_0}{\sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}} \\
= \frac{1.93}{1} = 1.93 \\
\\
|z_{obs}| \not\gt z_{\alpha/2} \implies \text{não rejeita }H_0 \\

p_{value} = P(|N(0,1)| > |z_{obs}|) = 2*(1- pnorm(z_{obs}))
= 0.054

\end{split}
\end{equation}
$$

## 2
$$
\begin{equation}
\begin{split}
n_a=50 \\
n_b=50 \\
\bar{x}_a=4.2kg \\
s_a= 1.2kg\\
\bar{x}_b=2.8kg \\
s_b= 0.7kg\\
\\
\sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}=0.196
\end{split}
\end{equation}
$$

### 2.1. "A" perdem pelo menos 1kg a mais que "B"? $\alpha=0.05$
$$
\begin{equation}
\begin{split}
\alpha=0.05 \\
z_\alpha=1.644
\\
d_0 = 1\\
H_a: \mu_a-\mu_b \ge 1 \\
H_0: \mu_a-\mu_b \lt 1 \\
\\
\\
z_{obs} = \frac{(\bar{x}_a - \bar{x}_b) - d_0}{\sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}}} \\
= \frac{1.4-1}{0.196}=2.035\\
\\
z_{obs} > z_\alpha \implies \text{rejeita }H_0
\end{split}
\end{equation}
$$

### 2.2. calcule p-valor da 2.1.
$$
\begin{equation}
\begin{split}
p_{valor}=P(N(0,1)>z_{obs})=P(N(0,1)>2.035)=1-pnorm(2.035)
\\=0.0209
\end{split}
\end{equation}
$$
### 2.3. construa um IC 95% para $\mu_a-\mu_b$
$$
\begin{equation}
\begin{split}
NC=95\% \implies \alpha=0.05 \\
\\
IC (\mu_a-\mu_b): (\bar{x}_a - \bar{x}_b) \pm z_{\alpha/2}*
\sqrt{\frac{S^2_a}{n_a} + \frac{S^2_b}{n_b}} \\
\\
IC=1.4 \pm z_{0.025}*0.196 \\
= 1.4 \pm 1.960*0.196=1.4 \pm 0.384\\
IC=(1.015,1.784)

\end{split}
\end{equation}
$$

### 2.4. pulando pq é discursiva

## 3. pulando por preguiça
## 4. fazendo
$$
\begin{equation}
\begin{split}
n=100 \\
\bar{x}_a=77 \\
s_a=10 \\
\\
\bar{x}_b=96 \\
s_b=10 \\

\\
\bar{x}_a-\bar{x}_b=19 \\
Var(\bar{X}_a - \bar{X}_b)=4
\end{split}
\end{equation}
$$

### 4.1. NS=1% teste se $H_a:\mu_b-\mu_a<20$
$$
\begin{equation}
\begin{split}
n=100 \text{ (grande)}\\
\\
\alpha = 0.01 \\
z_\alpha=2.326\\
\\
d_0 = 20 \\
H_0: \mu_b-\mu_a \ge 20 \\
H_a:\mu_b-\mu_a<20\\
\text{rejeita } H_0 \iff z_{obs} > 2.326 \\
\end{split}
\end{equation}
$$

Aqui isso vira PE-1 porque é vira um caso de 1 população só. e o zobs a gente calcula com:

$$
\begin{equation}
\begin{split}
z_{obs}=\sqrt{n}\frac{\bar{x}-x_0}{s_x} \\
= \sqrt{100}\frac{19-20}{4}=-10/4=-2.5
\end{split}
\end{equation}
$$

### 4.2. Calcule p-valor
### 4.3. Construa um IC 99% para $\mu_b-\mu_a$

## 5
$$
\begin{equation}
\begin{split}
n_a=100\\
n_b=100\\
x_a=65/100=0.65 \\
x_b=50/100=0.50\\
\end{split}
\end{equation}
$$
### 5.1. Construa um IC 95% para $\mu_a-\mu_b$

$$
\begin{equation}
\begin{split}
\alpha=0.05 \\
s_a,s_b\text{ desconhecidas} \implies
IC = (\bar{x}_a - \bar{x}_b) \pm t_{\alpha/2} \sqrt{\frac{1}{n_a} + \frac{1}{n_b}}\\
IC=0.15 \pm  qt(\alpha/2, n_a+n_b-2)*\sqrt{0.02}
\\=

\end{split}
\end{equation}
$$

### 5.2. Com NS=5%, Teste se $H_a:\mu_a-\mu_b>0$ ($d_0=0$)

## 7.
![[Pasted image 20230426111711.png]]

## 8.
$$
\begin{equation}
\begin{split}
U \sim \chi^2_{15}
\\
n=15 \text{ (graus de liberdade)}
\end{split}
\end{equation}
$$
### 8.1. Calcule $P(U<6.262)$ e $P(U>27.488)$
### 8.2. Calcule a e b t.q. $P(U<a)=P(U>b)=0.05$

## 10. 
$$
\begin{equation}
\begin{split}
n=20 \\
\bar{x}=0.182 \\
s=0.067\\
\end{split}
\end{equation}
$$

### 10.1 Calcule IC para $\mu$ e $\sigma$ ($\alpha=0.10$)

## 11.
$$
\begin{equation}
\begin{split}
\large{F}_{n,m}\\
m=8 \\
n=10 
\end{split}
\end{equation}
$$

### 11.1 Calcule $P(F<0.299)$ e $P(F<3.072)$
### 11.2. Calcule a e b t.q. $P(F<a)=P(F>b)=0.025$

## 13. (depende da 7)
### 13.1. teste se $\sigma_a=\sigma_b$ ($\alpha=0.05$)
### 13.2. Construa um IC(95%) ára $\sigma_a/\sigma_b$

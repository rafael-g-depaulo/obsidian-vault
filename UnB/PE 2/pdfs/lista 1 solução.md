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

\end{split}
\end{equation}
$$

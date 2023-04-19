## 1
![[Pasted image 20230419100737.png]]
### 1.1
$$
\begin{equation}
\begin{split}
z = (15.15 - 10)/2
\end{split}
\end{equation}
$$
### 1.2
$$
\begin{equation}
\begin{split}
z_1 = (-15.15-10)/2 \\
z_2 = (15.15 - 10)/2 \\
\end{split}
\end{equation}
$$
## 1.3
$$
\begin{equation}
\begin{split}
z = qnorm(0.995)
\end{split}
\end{equation}
$$

## 1.4
$$
\begin{equation}
\begin{split}
P(|X-10| < q) = P(X-10 < q) - P(10-X < q)
\\
\\
\\
z_1 = qnorm(0.99) = 2.326
2.326= (X - 10)/2

\end{split}
\end{equation}
$$
![[Pasted image 20230419102150.png]]

# 2
![[Pasted image 20230419102726.png]]

# 3
![[Pasted image 20230419102745.png]]
$$
\begin{equation}
\begin{split}

z_{\alpha/2}*\sigma/\sqrt{n} = 2.576*\sigma/\sqrt{n} \\
z_{\alpha/2} = 2.576 \\
\alpha/2 = 5\%

\end{split}
\end{equation}
$$

### 3.2.

$$
\begin{equation}
\begin{split}
H_0: \mu \le 5 \\
H_a: \mu \gt 5 \\
n = 25 \\
\sigma^2 = 4 \\
\bar{x} = 6
\\
z_{obs} = 5*\frac{6 - 5}{2} = 5*1/2 = 2.5 \\
p_{value} = 1 - pnorm(2.5) = 0.006

\end{split}
\end{equation}
$$

### 3.3
$$
\begin{equation}
\begin{split}
z_{\alpha/2}*\sigma/\sqrt{n} = 0.3 \\
2.576*2/\sqrt{n} = 0.3 \\
\end{split}
\end{equation}
$$

![[Pasted image 20230419104430.png]]

## 4
![[Pasted image 20230419104444.png]]
IC:
$$
\begin{equation}
\begin{split}
x \pm z_{\alpha/2} * \frac{\sigma}{\sqrt{n}} \\
75 \pm 0.646
\end{split}
\end{equation}
$$

p-valor:
$$
\begin{equation}
\begin{split}
z_{obs} = 10*\frac{75-75.7}{3.3} = 2.121 \\
p_{value} = 1 - pnorm(2.121) = 0.016
\end{split}
\end{equation}
$$
![[Pasted image 20230419110050.png]]

## 5
![[Pasted image 20230419104457.png]]
IC:
$$
\begin{equation}
\begin{split}
\bar{x} \pm z_{\alpha/2} * \frac{\sigma}{\sqrt{n}} \\
\\
\alpha = 0.05 \\
n = 16 \\
\sigma = s = 1.2 \\
\bar{x} = 7
\\
IC = 7 \pm  1.9599 * 1.2 / 4 \\
= 7 \pm 0.587
\end{split}
\end{equation}
$$

![[Pasted image 20230419110018.png]]

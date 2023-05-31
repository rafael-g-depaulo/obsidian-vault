# Ex. 1
n<-100
ncaras<-6
freq<-c(21,13,22,20,13,11)
names(freq)<-1:6
chisq.test(freq)

# ou, alternativamente
freq.esp<-n/ncaras
(chi2.obs<-sum((freq-freq.esp)^2/freq.esp))
qchisq(0.95,ncaras-1)
(p.valor<-1-pchisq(chi2.obs,ncaras-1))

# Ex. 2
n.obs<-c(24,10,12,4)
n<-sum(n.obs)
x<-c(0,1,2,3)
theta.chap<-sum(n.obs*x)/n
probs<-dpois(c(0,1,2),theta.chap)
probs<-c(probs,1-sum(probs))
n.esp<-n*probs
(chi2.obs<-sum((n.obs-n.esp)^2/n.esp))
qchisq(0.9,2)
(p.valor<-1-pchisq(6.273,2))

# Ex. 3

I<-2
J<-5
df<-(I-1)*(J-1)
n.obs.h<-c(13,15,37,22,13)
n.h<-sum(n.obs.h)
n.obs.m<-c(3,4,15,15,13)
n.m<-sum(n.obs.m)
n.obs.tot<-n.obs.h+n.obs.m
n.tot<-n.h+n.m
n.esp.h<-n.h*n.obs.tot/n.tot
n.esp.m<-n.m*n.obs.tot/n.tot
(chi2.obs<-sum((n.obs.h-n.esp.h)^2/n.esp.h)+sum((n.obs.m-n.esp.m)^2/n.esp.m))
qchisq(0.95,df)
(p.valor<-1-pchisq(chi2.obs,df))

# ou, alternativamente

tabela<-rbind(n.obs.h,n.obs.m)
chisq.test(tabela)

# Ex. 4

n.obs.h<-c(10,14,36,31,21)
n.obs.m<-c(11,16,25,23,13)
tabela<-rbind(n.obs.h,n.obs.m)
chisq.test(tabela)

# Ex. 5
freq<-c(262,535,203)
probs<-c(0.25,0.5,0.25)
chisq.test(freq,p=probs)

# Ex. 6

x<-c(58,61,63,64,64,65,65,65,65,67,  
67,68,69,72,72,73,73,73,73,75,  
76,76,76,77,77,78,78,78,79,79,  
79,80,80,80,81,81,82,83,84,84,  
85,87,88,88,92,93,93,95,102,107)

n<-length(x)

par(mfrow=c(1,1))
hist(x,freq=F,ylab=densidade,main=)

(limites<-hist(x)$breaks)
(hist(x)$counts)

mu.chap<-mean(x)
sigma.chap<-sd(x)

limites[1]<--Inf;limites[length(limites)]<-Inf
limites
(n.esp<-n*diff(pnorm(limites,mu.chap,sigma.chap)))

limites<-c(-Inf,65,70,75,80,85,90,Inf)
(n.esp<-n*diff(pnorm(limites,mu.chap,sigma.chap)))
round(50*diff(pnorm(limites,mu.chap,sigma.chap)),2)

n.obs<-c(9,4,7,14,7,3,6)

(chi2.obs<-sum(((n.esp-n.obs)^2)/n.esp))
(1-pchisq(chi2.obs,4))
(qchisq(0.95,4))


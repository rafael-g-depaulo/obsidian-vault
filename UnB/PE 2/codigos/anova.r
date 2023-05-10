
# #######################################
# #         Exemplo 1
# #######################################
#
# par(mfrow=c(2,2))   #  faça uma figura com 4 gráficos ordenados 2x2
#
# set.seed(999)
# x<-rnorm(100,0,1)   # gere 100 observações da Normal com média 0 e desvio padrão 1
#
#
# hist(x,xlim=c(-4,4),main='(a)',ylab='frequência')   #  faça um histograma das 100 observações
# sd(x)     # calcule o desvio padrão da amostra
# mean(x)
#
# y<-rep(NA,100)
# y[1:50]<-x[1:50]-1     # subtraia 1 as primeiras 50 observações
# y[51:100]<-x[51:100]+1 # some 1 as últimas 50 observações
#
# hist(y,xlim=c(-4,4),main='(b)',ylab='frequência')  # faça um histograma da nova amostra
# sd(y)
# mean(y)
#
# hist(y[1:50],xlim=c(-4,4),,main='(c)',ylab='frequência')   # faça um histograma das primeiras 50 observações
# hist(y[51:100],xlim=c(-4,4),,main='(d)',ylab='frequência')  # faça um histograma das últimas 50 observações
#
# mean(y[1:50])
# mean(y[51:100])
# sd(y[1:50])
# sd(y[51:100])
#
# 99*sd(y)^2
# 49*(sd(y[1:50])^2+sd(y[51:100])^2)+
#   50*((mean(y[1:50])-mean(y))^2+(mean(y[51:100])-mean(y))^2)
#

######################################
#         Exemplo 2
#####################################

I<-4      # número de tratamentos
J<-6      # no. de observações por tratamento

fert<-factor(rep(1:I,times=rep(J,I))) # variável qualitativa (factor) para os tratamentos
colheita<-c(10.5,9.7,5.5,11.0,9.3,6.3,     # produção de tomates
              7.1,10.2,7.2,7.8,10.9,7.3,
              4.7,7.5,6.5,7.7,6.5,6.9, 
              8.5,12.4,11.5,7.1,10.6,11.8)

for(i in unique(fert)){print(mean(colheita[fert==i]))}   # médias por tratamento
for(i in unique(fert)){print(sd(colheita[fert==i]))}     # dp por tratamento
for(i in unique(fert)){print(sd(colheita[fert==i])^2)}   # var. por tratamento

sqrt((5.177667+2.837667+1.146667+4.333667)/4)  # média das variâncias 

par(mfrow=c(1,2))

plot(colheita,fert,pch=19,col=fert,cex=1.5)   # gráficos de pontos (boxplots) 
for(i in 1:4){lines(c(0,14),c(i,i),col=i,lwd=0.5)}

boxplot(colheita~fert,horizontal=T)   # gráficos de caixa (boxplots)

par(mfcol=c(2,5))      # gráficos para dados simulados
for(j in 1:5){
  colheita1<-rnorm(I*J,mean(colheita),sd(colheita))
  plot(colheita1,fert,pch=19,col=fert,cex=1.5)
  for(i in 1:4){lines(c(0,14),c(i,i),col=i,lwd=0.5)}
  
  boxplot(colheita1~fert,horizontal=T)
}

ajuste<-aov(colheita~fert)    # modelo tomate = (média do trat i) + erro

summary(ajuste)           # resumo do ajuste (tabela anova)

qf(0.95,3,20)      # percentil 95% da F com 3 e 24 gl
1-pf(4.053,3,20)


qtukey(0.95,nmeans=4,df=20)

ajuste<-aov(colheita~fert)    # modelo colheita = (média do trat i) + erro
TukeyHSD(ajuste,ordered=T,conf.level=0.95)  # calcule ICs, médias ordenadas

par(mfrow=c(2,2))

plot(ajuste)

par(mfrow=c(1,1))

hist(rnorm(24))

# ################################
# ###  Simulação da Seção Cuidado!
# ################################
#
# M<-10000     # tamanho da simulação
# alfa<-0.10   # nivel dos testes individuais
# mu<-mean(colheita)   # mesma média que dados de tomates
# sigma<-sqrt((5.177667+2.837667+1.146667+4.333667)/4)  # mesma variância também
#
# rejeita.soma<-0    # contar o número de vezes que rejeita a H_0 onibus
# for(m in 1:M){     # loop das simulações
#   colheita.sim<-rnorm(I*J,mu,sigma)   # gere aleatoriamente um conjunto de dados
#   rejeita<-0     # no final rejeita vai medir se rejeitou pelo menos uma comparacao
#   for(i1 in 1:(I-1)){   
#     for(i2 in (i1+1):I){   
#       x<-colheita.sim[fert==i1]
#       y<-colheita.sim[fert==i2]
#       s.c<-sqrt((sd(x)^2+sd(y)^2)/2)
#       if(abs(mean(y)-mean(x))>qt(1-alfa/2,2*J-2)*sqrt(2/J)*s.c){rejeita<-1}
#     }
#   }
#   rejeita.soma<-rejeita.soma+rejeita
# }
# rejeita.soma/M



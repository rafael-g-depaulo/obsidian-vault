
## Router Config
indo por [esse link](http://192.168.0.1/) pra configurar o roteador da claro, eu fiz o port forwarding. Also dá pra configurar o roteador da sub-rede Deco por [esse link](http://192.168.68.1/)

![[Pasted image 20260108000352.png]]

## PRoblema CGNAT
isso não vai dar em nada se seu IP for 100.x, que significa que tá no CGNAT da Claro e NAT não vai ajudar. Pra checar eu fui pelo browser na config do roteador e chequei o IP na navbar:

![[Pasted image 20260108000524.png]]
Pra resolver isso tem que ligar pro número da claro **10621** e pedir remoção do **IPV4 NAT ou CGNAT**

## Sources
- [Forma mais facil para sair do CGNAT da CLARO : r/InternetBrasil](https://www.reddit.com/r/InternetBrasil/comments/1iypsar/forma_mais_facil_para_sair_do_cgnat_da_claro/)
- 
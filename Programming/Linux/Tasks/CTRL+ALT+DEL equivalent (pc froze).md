man *[Fonte](https://plus.diolinux.com.br/t/qual-comando-equivalente-do-crtl-alt-del-do-windows-no-linux-ubuntu/12692)*

A dica do xkill é muito boa, recomendo configurar um atalho (eu, por exemplo, deixo o xkill no ctrl+alt+end, assim qlq coisa uso a combinação e clico no programa travado).

Quando o sistema trava que nem o mouse meche, eu uso a combinação:

**Alt + PrintScreen + r + e + i + s + u + b**  
(busier ao contrário - tipo, super ocupado)

Com a combinação de teclas acima seu sistema Linux congelado reiniciará.

Aqui estão os significados das teclas:

- R: Ligue o teclado de modo bruto para o modo XLATE
- E: Enviar o sinal SIGTERM para todos os processos exceto o init
- I: Enviar o SIGKILL sinal para todos os processos exceto o init
- S: Sync todos os sistemas montados
- U: Remontar todos os sistemas montados em modo somente leitura
- B: Imediatamente reiniciar o sistema, sem desmontar partições ou sincronização

Nessa combinação, quando pressiona a letra _b_ o sistema reinicia na hora.

Basicamente o que o [@ysllan](https://plus.diolinux.com.br/u/ysllan) disse, só deixei numa ordem mais fácil de guardar.
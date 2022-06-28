![[Pasted image 20220625154058.png]]

![[Pasted image 20220625154121.png]]

A notação O() basicamente é usada para delimitar o limite superior do crescimento de uma função. a gente não se importa com os valores absolutos em si, mas com o quão rápido a função cresce, qual o formato dela.

Sendo um limite superior, ela funciona de forma parecida com um <= em matemática. O exercício dessa semana é parecido com a ideia que (f >= g) e (g >= h) implica que (f >= h). A gente quer provar então que se f é um limite superior de g e g é um limite superior de h, então f é um limite superior de h

**INÍCIO**
- H1: f(n) = O(g(n))
- H2: g(n) = O(h(n))

1. f(n) = O(g(n)) <=> existem c1, n1 -> (x > n1, c1 \* f(x) >= g(x))
2. g(n) = O(h(n)) <=> existem c2, n2 -> (x > n2, c2 \* g(x) >= h(x))


1. usando c3 = asfdsdf, n3 = asdfsfds -> (x > n3, c3 \* f(x) >= h(x)) <=> f(n) = O(h(n))
**FIM**
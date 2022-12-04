## For Extrato

**PRECISA CONSERTAR, NÃO TÁ TROCANDO PONTO POR VÍRGULA**

replace 
```regex  
(\d+\/\d+\/\d+),(-?\d+)\.(\d+),[\w-]+,(.+)$
```

with 

```regex
,,$1,$4,"$2,$3"
```

# For resumo de crédito
replace
```regex
^(\d+) (\w+) (.+) ([\d\.]+,\d+)$
```
with
```regex
,,$1/$2,$3,"-$4"
```
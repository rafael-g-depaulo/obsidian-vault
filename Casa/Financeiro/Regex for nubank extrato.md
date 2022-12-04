## For Extrato
replace 
```regex  
(\d+\/\d+\/\d+),(-?\d+)\.(\d+),[\w-]+,(.+)$
```

with 
```regex
,,$1,$4,"$2,$3"
```

# For resumo de crédito
replace with nothing (remove)
```regex
^RAFAEL GONÇALVES DE PAULO\n.+\n.+\n.+\n
```

replace with nothing (remove)
```regex
^.+Pagamento em \d\d .+\n
```

replace
```regex
^(\d+) (\w+) (.+) ([\d\.]+,\d+)$
```
with
```regex
,,$1/$2,$3,"-$4"
```
| symbol | code       | 
| ------ | ---------- |
| `{`    | `&lbrace;` |
| `}`    | `&rbrace;` |
| `(`    | `&#40;`    |
| `)`    | `&#41;`    |
| `|`    | `&#124;`   |
| `,`    | `&#44;`    |
| `[`    | `&lbrack;` |
| `]`    | `&rbrack;` |

## Template
```
&&lbrace;template:default&rbrace; &lbrace;&lbrace;name=NOME_NOME_NOME_NOME_NOME &rbrace;&rbrace; &lbrace;&lbrace;Descrição=NOME_NOME_NOME_NOME_NOME &rbrace;&rbrace;
```

```
?{Atributo
  |Força,
    @{token_name} rola um teste de resistência (STR) [[1d20+@{STR} + @{prof_STR}]]
  |Destreza,
    @{token_name} rola um teste de resistência (DEX) [[1d20+@{DEX} + @{prof_DEX}]]
  |Constituição,
    @{token_name} rola um teste de resistência (CON) [[1d20+@{CON} + @{prof_CON}]]
  |Inteligência,
    @{token_name} rola um teste de resistência (INT) [[1d20+@{INT} + @{prof_INT}]]
  |Sensibilidade,
    @{token_name} rola um teste de resistência (SEN) [[1d20+@{SEN} + @{prof_SEN}]]
  |Presença,
    @{token_name} rola um teste de resistência (PRE) [[1d20+@{PRE} + @{prof_PRE}]]
}
```
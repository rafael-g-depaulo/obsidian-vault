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


&{template:default} {{name=Guts }} {{Descrição= @{character_name} tem +1 Força e -1 Velocidade de movimento &#40;mínimo 3sqr&#41; para cada ponto de Guts que tem &#40;max [[ @{Level}[lv]+1 ]]&#41;. }}
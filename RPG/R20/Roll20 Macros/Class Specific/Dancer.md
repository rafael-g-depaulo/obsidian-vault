Descrição da mecânica
```
&{template:default} {{name=Passos de Vento}} {{descrição=}}
```

skill ganhar passos
```
&{template:default} {{name=Ritmo de Batalha (@{selected|character_name})}} {{Execução=Livre (1x turno)}} {{Custo=0MP}} {{Descrição=@{selected|character_name} ganha +2 **Passos de Vento**}}
```

non-active skill 
Add this as a ability, and call it at the end of the attack ability
```
?{Passos de Vento?|não,|1 (+1d4 dano),  &rbrace;&rbrace; Passos de Vento (1)=[[1d4]] &rbrace;&rbrace;|2 (+2d4 dano),  &lbrace;&lbrace; Passos de Vento (2)=[[2d4]] &rbrace;&rbrace;
```
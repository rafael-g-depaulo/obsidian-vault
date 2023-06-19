## Ignorar Arranhões
```
&{template:default} {{name=Ignorar Arranhões (@{character_name})}} {{Execução=Movimento}} {{Custo=2PM}} {{Descrição=Pelo resto da cena, todo dano que você tomar igual ou inferior a [[ @{CON} + @{bonus_guard} ]] (sua Guarda) é ignorado.}}
```

## De Raspão
```
&{template:default} {{name=De Raspão (@{selected|token_name})}} {{Execução=Reação (ao tomar dano)}} {{Custo=3PM}} {{Descrição=Você ignora o dano que ia receber, e aumenta o custo dessa habilidade em +3 PM pelo resto da cena. Você não pode executar "de Raspão" se custar mais do que a sua Evasão. Evasão de @{selected|token_name}: [[@{selected|DEX}[DEX] + @{selected|bonus_dodge}[bonus de armadura]]]}}
```
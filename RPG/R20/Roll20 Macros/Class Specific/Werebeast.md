## Beast Form
```
&{template:deafault} {{name=Transformação (@{character_name})}} {{Execução=Completa}}
?{HP Temporário|1d8+[[@{level}],0|3d8+[[@{level}]],1}
{{Custo=2PM}} {{Descrição=}}
```

## Sangue Monstruoso
```
&{template:default} {{name=Sangue Monstruoso (@{character_name})}} ?{Efeito|1@{wild_dice} (1PM),1|2@{wild_dice}(2PM),2} {{Execução=Ação}} {{Custo=?{Efeito}PM }} {{Alcance=6sqr}} ?{Forma|humana,Um aliado a sua escolha recupera [[?&lbrace;Efeito&rbrace;@{wild_dice}]] (?&lbrace;Efeito&rbrace;@{wild_dice}) HP|bestial,@{character_name} jorra sangue corrosivo de uma ferida em um inimigo. Se o alvo falhar em um teste de resistência de destreza (CD %{selected|beast-save-dc}) ele toma [[(?&lbrace;Efeito&rbrace;+1)@{wild_dice}]]  [[?&lbrace;Efeito&rbrace;+1]]@{wild_dice} dano de veneno. } {{Descrição=?{Forma}}}
```
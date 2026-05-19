## Intro
[yq](https://github.com/mikefarah/yq) is a cli tool to parse and query yaml files.

## Install
```sh
snap install yq
```

## Exemplo
Com o arquivo `.raganrc.yml` abaixo:

```yml
repos:
  - dotfiles
  - setup
  - tui-load: ~/projects/load-tui
  - obsidian-vault: ~/Documents/obsidian-vault
```

A query abaixo:
```sh
yq '.repos' .raganrc.yml | sed '/:/! s/- \(.*\)/- \1: ~\/\1/' | sed 's/- \(.*\): \(.*\)/"\1" "\2"/' | tr '\n' ' '
```

retorna:
```
"dotfiles" "~/dotfiles" "setup" "~/setup" "tui-load" "~/projects/load-tui" "obsidian-vault" "~/Documents/obsidian-vault" 
```

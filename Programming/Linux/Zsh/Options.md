you can set or unset an option with:
```sh
setopt OPTION_NAME
unsetopt OPTION_NAME
```

## Useful Options
| Option  | description                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AUTO_CD | when typing something that isnt a command, cd into it if its a dir                                                                                                                               |
| CDABLE_VARS        | If the argument to a cd command (or an implied cd with the AUTO_CD option set) is not a directory, and does not begin with a slash, try to expand the expression as if it were preceded by a ‘~’ | 
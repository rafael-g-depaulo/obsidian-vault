## Intro
[fzf](https://github.com/junegunn/fzf) is a fucking amazing fuzzy finder

## Auto completion for zsh/bash

### Files/dirs
You can press `**<TAB>` to trigger fzf autocomplete in a command, like
```sh
# Files under the current directory
# - You can select multiple items with TAB key
vim **<TAB>

# Files under parent directory
vim ../**<TAB>

# Files under parent directory that match `fzf`
vim ../fzf**<TAB>

# Files under your home directory
vim ~/**<TAB>

# Directories under current directory (single-selection)
cd **<TAB>

# Directories under ~/github that match `fzf`
cd ~/github/fzf**<TAB>
```

### Process IDs
```sh
# Can select multiple processes with <TAB> or <Shift-TAB> keys
kill -9 **<TAB>
```

### Environment variables / Aliases
```sh
unset **<TAB>
export **<TAB>
unalias **<TAB>
```

## CLI keybinds
| Bind    | Action                      |
| ------- | --------------------------- |
| `<C-t>` | Search files in current dir |
| `<C-r>` | Search commands in history  |
| `<A-c>` | Search dir and cd into it   |

## OBS
There's a [fzf-tmux](https://github.com/junegunn/fzf#fzf-tmux-script) script or plugin or whatever that seems interesting?

## Respecting `.gitignore`
You can use [fd](https://github.com/sharkdp/fd), [ripgrep](https://github.com/BurntSushi/ripgrep), or [the silver searcher](https://github.com/ggreer/the_silver_searcher) instead of the default find command to traverse the file system while respecting `.gitignore`.

```sh
# Feed the output of fd into fzf
fd --type f --strip-cwd-prefix | fzf

# Setting fd as the default source for fzf
export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix'

# Now fzf (w/o pipe) will use fd instead of find
fzf

# To apply the command to CTRL-T as well
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
```

If you want the command to follow symbolic links and don't want it to exclude hidden files, use the following command:

```sh
export FZF_DEFAULT_COMMAND='fd --type f --strip-cwd-prefix --hidden --follow --exclude .git'
```
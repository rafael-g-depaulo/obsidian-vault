## Quick Reference
| Key                 | Command                                   | Action                  |
| ------------------- | ----------------------------------------- | ----------------------- |
| `<P> d`             | `tmux detach`                             | "D"etach Session        |
| `<P> x`  or `<C-d>` | `tmux kill-pane -t target`                | Kill Pane               |
| `<P> s`             |                                           | List "S"essions         |
| `<P> w`             |                                           | List "W"indows          |
| `<P> c`             | `tmux new-window -n name`                 | New Window              |
| `<P> ,`             | `tmux rename-window new-name [-t target]` | Rename Window           |
| `<P> n`             | `tmux next-window`                        | "N"ext Window           |
| `<P> p`             | `tmux previous-window`                    | "P"revious Window       |
| `<P> [num]`         | `tmux select-window -t 2`                 | Go to Nth Window        |
| `<P> "`             | `tmux split-window -v`                    | Split Window Vertical   |
| `<P> %`             | `tmux split-window -h`                    | Split Window Horizontal |
| `<P> [arrow]`       | `tmux ???????????`                        | Move to Pane           |
| `<P> o`             | `tmux ???????????`                        | Move to Next Pane      |
| `<P> q`             | `tmux display-panes`                        | List Panes             |
| `<P> q [num]`       | `tmux select-pane -t N`                        | Go to Nth Pane         |
| `<P> z`       | `tmux select-pane -t N`                        | Toggle Zoom Pane         |


## Intro
tmux looks to be an interesting tool that like initiates a bunch of terminal sessions/windows and runs commands in them.

[this tutoriak](https://dev.to/iggredible/tmux-tutorial-for-beginners-5c52) is a good introduction.

## New Session
open a new tmux session by going
```sh
tmux new -s session-name
```

or just `tmux` works too

## Prefix
Like vim with the leader, tmux uses a prefix key that you need to press before it's shortcuts. By default the prefix key is `<C-b>` (ctrl+b).

**OBS: I'll use \<P> to denote prefix when talking about tmux shortcuts** 

## Configuration
took things mostly from [this article](https://dev.to/iggredible/useful-tmux-configuration-examples-k3g)

## Copy mode
i'm learning to use copy mode from [this article](https://dev.to/iggredible/the-easy-way-to-copy-text-in-tmux-319g#:~:text=To%20enter%20the%20copy%20mode,around%20using%20vim%20navigation%20keys.)

## Plugins
i'm using [TPM](https://github.com/tmux-plugins/tpm) to manage plugins. to install plugins, run `<P> + I`.

[tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect) looks to be an interesting plugin for saving a tmux session

[tmux-open](https://github.com/tmux-plugins/tmux-open) holy shit this is awesome. when having something selected on tmux:
- `o` -> open file/folder/link (opens link in browser 😮)
- `ctrl+o` -> open in editor (vim)
- `shift+s` -> search (google)

## Tmuxinator
tmuxinator is a really cool tool to make template sessions (saved as yml files) and start them instantly. i like it a lot.

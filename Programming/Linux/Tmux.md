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

## Basic Useful shortcuts

| Key                 | Action           |
| ------------------- | ---------------- |
| `<P> d`             | "D"etach Session |
| `<P> x`  or `<C-d>` | Kill Pane        |

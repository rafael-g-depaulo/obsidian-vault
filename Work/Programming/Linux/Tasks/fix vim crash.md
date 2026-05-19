when handilng an error similar to:

```
vim/_init_packages.lua: cannot load incompatible bytecode
stack traceback:
        [C]: at 0x55a029d7f4e1
        [C]: at 0x7fcd43e3d370
E970: Failed to initialize builtin lua modules
```

it usually fixes the problem to update luajit

```
 sudo apt install luajit
```

if that doesn't work, re-installing neovim through brew following [this tutorial](https://linux.how2shout.com/install-brew-on-ubuntu-22-04-lts-jammy-linux/) will probably do the job
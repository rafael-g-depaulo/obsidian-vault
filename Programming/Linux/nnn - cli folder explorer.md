Install (from source because it makes fontAwesome and plugins available):

## Tutorial
![](https://www.youtube.com/watch?v=-knZwdd1ScU)


```sh
# clone repo
mkdir -p ~/.local/share/nnn
git clone https://github.com/jarun/nnn.git /home/ragan/.local/share/nnn

# build source
cd ~/.local/share/nnn/
sudo make O_NERD=1

# add to path
ln -s ~/.local/share/nnn/nnn ~/.local/bin/nnn

# install plugins
sh -c "$(curl -Ls https://raw.githubusercontent.com/jarun/nnn/master/plugins/getplugs)"

# add this to your zshrc or whatever to enable and configure the plugins
export NNN_PLUG='f:finder;o:fzopen;p:mocq;d:diffs;t:nmount;v:imgview'
```
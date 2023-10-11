for it you need to install Pacstall:

```sh
sudo bash -c "$(curl -fsSL https://pacstall.dev/q/install || wget -q https://pacstall.dev/q/install -O -)"
```

then install the steamtinker through pacstall:

```sh
pacstall -I steamtinkerlaunch-git
```

and you might need yad for steamtinker:

```sh
sudo apt install git libglib2.0-dev libtool autoconf automake intltool libgtk-3-dev build-essential
git clone https://github.com/v1cont/yad.git yad-dialog-code
cd yad-dialog-code
autoreconf -ivf && intltoolize
./configure && make
sudo make install
gtk-update-icon-cache
cd .. && rm -rf ./yad-dialog-code
```


## 
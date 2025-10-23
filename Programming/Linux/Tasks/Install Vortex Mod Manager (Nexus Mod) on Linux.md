Accordint to [this video](https://www.youtube.com/watch?v=-4Bf3gePcCU), it's best to do it from `steaktinker`
##  Build `steamtinker` from source

### dependency: install `yad` from source
```sh
git clone https://github.com/v1cont/yad.git yad-dialog-code
cd ./yad-dialog-code/
autoreconf -ivf && intltoolize
sudo ./configure && sudo make && sudo make install
gtk-update-icon-cache
```

```sh
# once you've downloaded the latest release from https://github.com/sonic2kk/steamtinkerlaunch/releases
unzip downloaded_source_code.zip
cd downloaded_source_code.zip
sudo make install

# create dir for config
mkdir -p ~/.config/steamtinkerlaunch/lang
cp english.txt ~/.config/steamtinkerlaunch/lang

# config steamtinker
./steamtinkerlaunch

# update cache
gtk-update-icon-cache

# add as a steam compatibility tool
steamtinkerlaunch compat add
```

## Installing Vortex
you can then install vortex using the steamtinkerlaunch GUI.
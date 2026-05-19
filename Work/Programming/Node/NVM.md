## Info
[NVM](https://github.com/nvm-sh/nvm) or Node Version Manager is a version manager for [node.js](https://nodejs.org/en/), designed to be installed per-user, and invoked per-shell. `nvm` works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and [windows WSL](https://github.com/nvm-sh/nvm#important-notes).

## Install
To install on a system, run
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

To install a node version:
```sh
nvm install 20
nvm use 20
```

To set a default version:
```sh
nvm alias default 20
nvm use default
```

## Global packages
If you have global packages you want always installed in your node versions, add the packages you want to `$NVM_DIR/default-packages`. Example:
```sh
echo '# $NVM_DIR/default-packages
create-react-app
prettier-cli
' > $NVM_DIR/default-packages
```

#!/bin/bash

# Source nvm if it isn't loaded yet
command -v nvm &>/dev/null || source "${NVM_DIR:-/home/ragan/.config/nvm}/nvm.sh"

nvm use &>/dev/null
yarn compile &>/dev/null

echo 'Compiled!'

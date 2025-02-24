#!/bin/bash

# Source nvm if it isn't loaded yet
echo "SDFSDFSDF $NVM_DIR"
command -v nvm &>/dev/null || source "$NVM_DIR/nvm.sh"

nvm use &>/dev/null
yarn compile &>/dev/null

echo 'Compiled!'

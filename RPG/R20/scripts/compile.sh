#!/bin/bash

# Source nvm if it isn't loaded yet
command -v nvm &>/dev/null || source ~/.nvm/nvm.sh

nvm use &>/dev/null
yarn compile &>/dev/null

echo 'Compiled!'

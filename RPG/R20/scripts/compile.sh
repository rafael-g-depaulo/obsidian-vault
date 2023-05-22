#!/bin/bash

# maybe add a test to see if nvm is loaded first?
source ~/.nvm/nvm.sh

nvm use &>/dev/null
yarn compile

echo 'Compiled!'

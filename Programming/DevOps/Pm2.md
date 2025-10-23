## Intro
[pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) is a daemon process manager that will help you manage and keep your application online.

Basically, it helps run your processes, has some cool info and stuff, restarts on error and stuff like that.

## Install
```sh
npm i -g pm2 # i recommend a global install, thus npm
```

## Usage
To make a package.json script run forever you can do it like
```sh
pm2 start yarn --name app-name -- start
```

**OBS:** for some reason the first time i tried it yarn errored out and only npm worked. if you find an issue with the app crashing almost immediately, maybe this'll help you

## Run pm2 and it's apps on startup
If you want pm2 to always run even if the machine restarts (you do), run `pm2 startup` and it'll give you a command. Run that command and you're gucci.

Just remember to run `pm2 save` to save your currently running apps as the ones to run at startup.

```
# DB & AWS connection stuff
export DATABASE_URL=""
export ADMIN_JWT_SECRET="7mz666666666666666vspWg=="
export API_TOKEN_SALT="oYJ4444444444444444hrQ=="
export APP_KEYS=""
export AWS_ACCESS_KEY_ID=""
export AWS_ACCESS_SECRET=""
# export DB_SSL="false"
export JWT_SECRET="PPsdfsdf8xKRoMBOxcyWGzXpz82Q"
export NODE_ENV="production"
export PROJECT_NAME="api"
export START_SCRIPT="start-strapi"
export NODE_ENV="production"
```

```sh
# setup

# nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# node
nvm install 16.15.1

# yarn
npm i -g yarn@1.22.19

# pm2
npm i -g pm2
# make pm2 run on startup
$(pm2 startup | tail -n 1)

# clone repo
git clone https://github.com/NayRSilva/MithologyPodcast.git

# install deps
cd MithologyPodcast
yarn

# add env vars
# add env vars
# add env vars

# build
cd apps/api
yarn
yarn build

# run prod server
pm2 start yarn --name mitologia-prod -- start

# save the app to pm2 restart list
pm2 save



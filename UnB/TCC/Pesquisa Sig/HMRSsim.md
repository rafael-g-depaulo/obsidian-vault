## Install
```sh
# if you don't have pip
sudo apt update
sudo apt install python3-pip

# if you don't have docker
curl -sSfL get.docker.com | bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

# install deps
apt-get install -y curl build-essential ros-foxy-rosbridge-server ros-foxy-navigation2 ros-foxy-nav2-bringup ros-foxy-moveit-msgs '~ros-foxy-turtlebot3-.*'
pip install poetry

# clone repo
REPO_LOCATION="$HOME/projects/HMRSsim"
mkdir -p $REPO_LOCATION
git clone https://github.com/lesunb/HMRSsim.git $REPO_LOCATION

cd $REPO_LOCATION
poetry install
```

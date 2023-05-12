## Install
```sh
# if you don't have pip
sudo apt update
sudo apt install python3-pip

# install deps
apt-get install -y curl build-essential ros-foxy-rosbridge-server ros-foxy-navigation2 ros-foxy-nav2-bringup ros-foxy-moveit-msgs '~ros-foxy-turtlebot3-.*'
pip install poetry

# clone repo
REPO_LOCATION="/opt/HMRSsim"
mkdir -p $REPO_LOCATION
git clone https://github.com/lesunb/HMRSsim.git $REPO_LOCATION

cd $REPO_LOCATION
poetry install
```

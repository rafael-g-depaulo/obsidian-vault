# Docker
## Install
Apparently there's this awesome script that just installs docker on any system??
```sh
curl -sSfL get.docker.com | bash
```

## CLI

## Docker init
with newer versions of docker (4.18+) there's now a `docker init` command, that generates the `Dockerfile`, `compose.yml` and `.dockerignore`. I learned about it from [this medium article](https://dev.to/livecycle/easy-dockerization-with-docker-init-3oom)

### Build Image
```bash
docker image build . -f ./path/to/dockerfile -t name-of-image
```

### Run container based on image
```bash
docker container run --name container-name -d --rm -p host_port:container_port image-name
```

To stop, just run `docker container stop container_name`

| flag | description                                                                              |
| ---- | ---------------------------------------------------------------------------------------- |
| -d   | detach                                                                                   |
| -p   | publish a port                                                                           |
| -P   | publish ALL ports                                                                        |
| --rm | remove container when stopped/exited                                                     |

## Utils
- [dockly](https://github.com/lirantal/dockly) (docker container manager)
	- [dry](https://github.com/moncho/dry) seems to be an alternative
- [ctop](https://github.com/bcicen/ctop) (top-like for containers)

## Running in WSL2
In WSL2 there's a common problem when trying to access a server from the windows host.

if there's a service/container running in port XXXX, and `curl localhost:XXXX` is working from inside WSL but accessing it from the windows host doesn't work, then the following will probably work:

get the WSL2 ip from ifconfig (sudo apt-get install net-tools)

![[Pasted image 20220827231013.png]]

Then you can just use that ip on the windows host to access it

![[Pasted image 20220827231237.png]]


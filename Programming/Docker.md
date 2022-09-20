# Docker

## CLI
### Build Image

## Running in WSL2
In WSL2 there's a common problem when trying to access a server from the windows host.

if there's a service/container running in port XXXX, and `curl localhost:XXXX` is working from inside WSL but accessing it from the windows host doesn't work, then the following will probably work:

get the WSL2 ip from ifconfig (sudo apt-get install net-tools)

![[Pasted image 20220827231013.png]]

Then you can just use that ip on the windows host to access it

![[Pasted image 20220827231237.png]]


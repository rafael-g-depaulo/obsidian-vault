## Stuff taken from [this tutorial](https://www.digitalocean.com/community/tutorials/opening-a-port-on-linux)

Use the netstat command to list all open ports, including TCP and UDP, which are the most common protocols for packet transmission in the network layer.


```sh
netstat -lntu
```

This will print:

| flag | description                         |
| ---- | ----------------------------------- |
| l    | list all                            |
| n    | show numeric ip instead of dns name |
| t    | tcp                                 |
| u    | upd                                 |
| a     | show all (listening and not)                                    |
 
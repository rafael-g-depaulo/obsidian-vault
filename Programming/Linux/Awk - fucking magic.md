
besides the obvious `{ print $1 }`, awk can also do regex and stuff, like:
```sh
xrandr | awk '/primary/{ print $1 }'
```

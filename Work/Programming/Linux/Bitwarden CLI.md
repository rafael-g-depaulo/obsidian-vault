
install:

```sh
sudo snap install bw
```

get a login example:
```sh
bw list items --search aws | jq '.[] | select(.login.username == "strapi-user") | .login | {username,password}'
```

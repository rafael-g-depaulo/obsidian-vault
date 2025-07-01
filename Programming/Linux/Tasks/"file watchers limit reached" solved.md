Just run the following to increase the number of allowed watchers temporarily:
```bash
sudo sysctl fs.inotify.max_user_watches=131070
sudo sysctl -p
```

If you want to make it permanent, do this instead:
```bash
FILE_WATCHERS_MAX=131070
echo fs.inotify.max_user_watches= $FILE_WATCHERS_MAX | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

This all was sourced from [this SO answer](https://stackoverflow.com/a/55543310)
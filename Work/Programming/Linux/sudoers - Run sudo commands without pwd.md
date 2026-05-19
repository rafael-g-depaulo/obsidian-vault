## Why
I deal with the `/etc/sudoers` file and the `/etc/sudoers.d/`  directory mostly to add commands that a user should be able to use without sudo (without password)

## Sources
[This article](https://www.cyberciti.biz/faq/linux-unix-running-sudo-command-without-a-password/) shows the basics of how to get into the `sudoers` file (**REMEMBER TO ONLY EDIT THAT FILE WITH `visudo`, NOT OTHER EDITORS**). [This doc page](https://www.digitalocean.com/community/tutorials/how-to-edit-the-sudoers-file) from DigitalOcean has most of the useful stuff i needed about syntax of the `sudoers` file itself.

## How To
### Log into root
First log into root with:
```sh
sudo -i
cd /etc/sudoers.d/
```

### Create file in `sudoers.d` and edit it
```sh
visudo -f custom-sudoers
```

Then you can edit your new file and add rules to permit sudo for certain commands without needing to use your password, like:
```sudoers
Cmnd_Alias COMMANDS = /home/ragan/commands/connectHeadset, /home/ragan/commands/fixMount
Cmnd_Alias UPDATES = /usr/bin/snap, /usr/bin/apt-get, /usr/bin/apt
ragan ALL = NOPASSWD: COMMANDS
ragan ALL = NOPASSWD: UPDATES
```

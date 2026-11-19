---
title: "Configurar atualização sem senha"
date: 2026-11-19
originalDate: 2026-11-19
updatedDate: 2026-11-19
platform: "chatgpt"
sourceUrl: "https://chatgpt.com/c/6aff03f0-c9a8-83ea-aa76-7d0249ed483c"
sourceId: "6aff03f0-c9a8-83ea-aa76-7d0249ed483c"
messageCount: 6
tags:
  - "ChatGPT"
url: "https://chatgpt.com/c/6aff03f0-c9a8-83ea-aa76-7d0249ed483c"
projectName: ""
---

## You
`2026-11-19 11:18` | `id:261119-1118` ^261119-111823

I am preparing a bash script for performing simple update commands in my linux computer. an alias instead of a script would work too. currently i have the following:

```bash
alias update="sudo apt-get update && sudo apt-get upgrade -y && sudo snap refresh"
```

This works well, except that i want to be able to just run the command "update" without having to enter my password. I think that i could do something about editting sudoers or something to fix that.

My goal is to be able to just type "update" in the terminal and have all of those commands happen without ever having to give my password. This is my personal computer that i have full control over and i have no worries about security. its an env within my control so the convenience is the priority here.

what do you suggest?

---

## ChatGPT
`2026-11-19 11:18` | `id:261119-1118` ^261119-111826

Your idea of configuring `sudoers` is exactly right. You can achieve this without disabling password authentication for `sudo` globally.

**My recommendation: create a small system-update script and grant that specific script passwordless sudo privileges.**

This is slightly better than granting passwordless access to individual `apt-get` and `snap` commands because it keeps the permissions centralized and makes the configuration easier to maintain.

Here's how I'd set it up.

## 1. Create the update script

Create a file:

```bash
sudo nano /usr/local/sbin/update-system
```

Put this inside:

```bash
#!/bin/bash

set -e

apt-get update
apt-get upgrade -y
snap refresh

echo "System update completed!"
```

Make it executable:

```bash
sudo chmod 755 /usr/local/sbin/update-system
```

Make sure the file is owned by root:

```bash
sudo chown root:root /usr/local/sbin/update-system
```

This is important: your regular user shouldn't be able to modify a script that runs with root privileges.

## 2. Configure sudoers

Open a dedicated sudoers configuration file:

```bash
sudo visudo -f /etc/sudoers.d/update-system
```

Add this line, replacing `YOUR_USERNAME` with your Linux username:

```bash
YOUR_USERNAME ALL=(root) NOPASSWD: /usr/local/sbin/update-system
```

Save and exit.

This grants your user permission to execute that particular script as root without entering a password.

It does **not** disable password authentication for other sudo commands.

## 3. Create the alias

Now add this to your `~/.bashrc`:

```bash
alias update='sudo /usr/local/sbin/update-system'
```

Reload your Bash configuration:

```bash
source ~/.bashrc
```

That's it! You can now simply type:

```bash
update
```

No password prompt.

## 4. Test everything

First, verify that sudo recognizes your new permission:

```bash
sudo -l
```

You should see something similar to:

```text
(root) NOPASSWD: /usr/local/sbin/update-system
```

Then test it:

```bash
sudo -k
update
```

The `sudo -k` clears any cached sudo credentials, ensuring that you're actually testing passwordless execution.

## Why I prefer this approach

There are three possible approaches:

| Approach | My opinion |
|---|---|
| `NOPASSWD: ALL` | Too permissive |
| Allow individual apt/snap commands | Works, but more configuration |
| Allow a dedicated update script | <badge color="success">Recommended</badge> Simple and maintainable |

One important consideration: even though the sudoers rule only allows one script, that script effectively has root privileges. Anyone who can modify it could execute arbitrary commands as root. That's why we put it in `/usr/local/sbin`, owned by root, rather than somewhere in your home directory.

References:
- <Link ref=" " title="Official sudoers documentation"/>
- <Link ref=" " title="Linuxize – Run sudo without a password"/>
- <Link ref=" " title="Debian sudoers manual"/>

**My final recommendation:** I'd absolutely go with the dedicated script + `NOPASSWD` + alias combination. It gives you precisely the convenience you're looking for without unnecessarily changing your computer's global sudo configuration.

---

## You
`2026-11-19 11:19` | `id:261119-1119` ^261119-111914

what does the "set -e" command do in the script?

---

## ChatGPT
`2026-11-19 11:19` | `id:261119-1119` ^261119-111917

`set -e` tells Bash to **exit the script immediately if a command fails** (returns a non-zero exit status).

In your script:

```bash
#!/bin/bash

set -e

apt-get update
apt-get upgrade -y
snap refresh

echo "System update completed!"
```

For example, imagine `apt-get update` fails because you have no internet connection.

Without `set -e`:
1. `apt-get update` fails.
2. `apt-get upgrade -y` still executes.
3. `snap refresh` still executes.
4. The success message is printed anyway.

With `set -e`:
1. `apt-get update` fails.
2. The script immediately exits.
3. The remaining commands are never executed.

**Why is this useful here?**

It prevents subsequent update commands from running when an earlier step fails, and avoids printing a misleading success message.

One caveat: `set -e` has some Bash-specific exceptions, particularly around conditionals, pipelines, and commands used with `&&` or `||`. But for your simple sequential update script, it works exactly as intended.

I'd keep it!

---

## You
`2026-11-19 11:22` | `id:261119-1122` ^261119-112228

what are the pros and cons of having the script in ~/.local/bin instead of /usr/local/sbin or /usr/local/bin?

---

## ChatGPT
`2026-11-19 11:22` | `id:261119-1122` ^261119-112229

Both approaches are perfectly valid, but there are some meaningful differences, especially because your script will execute commands with root privileges.

The main distinction is **user-level software vs. system-level software**.

## 1. Comparing the locations

| Aspect | `~/.local/bin` | `/usr/local/bin` | `/usr/local/sbin` |
|---|---|---|---|
| Scope | Current user | All users | All users |
| Requires root to install | No | Yes | Yes |
| Typical purpose | User-installed executables | System-wide user commands | System administration commands |
| Usually in PATH | Yes (if configured) | Yes | Sometimes |
| Other users can execute | Usually no | Yes | Yes |
| Suitable for your script | Yes | Yes | Yes |

## 2. Pros and cons of `~/.local/bin`

**Advantages:**

- No `sudo` needed to create, edit, or maintain the script.
- Keeps your personal scripts separate from system-managed files.
- Doesn't clutter system directories.
- Usually already included in your PATH on modern Ubuntu installations.
- Ideal for personal utilities, aliases, and custom commands.

**Disadvantages:**

- Other users won't have access to it by default.
- Your script lives in a directory writable by your regular user.
- Since the script executes with root privileges, modifying it means potentially gaining root access.

That last point is particularly important.

If you configure sudoers like this:

```sudoers
YOUR_USERNAME ALL=(root) NOPASSWD: /home/YOUR_USERNAME/.local/bin/update-system
```

You're effectively allowing yourself to execute arbitrary commands as root through that script, because you can edit it without root privileges.

This isn't necessarily a problem on your personal computer, but it's a meaningful security distinction.

## 3. What I'd recommend

For your particular use case, I'd choose based on what you value most:

<box border radius="lg" gap={3} padding={3}>
 <box gap={1}>
 <badge color="success">My recommendation</badge>
 **`/usr/local/sbin/update-system`**

 Best if you want the script to be treated as a system administration utility, with root-owned permissions.
 </box>
 <divider color="subtle"/>
 <box gap={1}>
 **`~/.local/bin/update-system`**

 Best if you prioritize convenience and don't mind the fact that you can modify a script that runs as root.
 </box>
</box>

Personally, I like keeping administrative scripts in `/usr/local/sbin` and personal utilities in `~/.local/bin`.

It's a nice separation of responsibilities.

## 4. One additional suggestion

You don't actually need an alias if your script is executable and its directory is in your PATH.

You could simply name the executable:

```text
~/.local/bin/update
```

Then run:

```bash
update
```

Or, if using `/usr/local/sbin`, keep the alias in `~/.bashrc`:

```bash
alias update='sudo /usr/local/sbin/update-system'
```

**Bottom line:** There's nothing wrong with `~/.local/bin` for this purpose. On a personal computer where convenience is your priority, it's a perfectly reasonable choice. Just be aware of the security implications of a user-writable script receiving passwordless root privileges.

Running

```bash
jq -rs '[.[].version] | sort | reverse | .[0]' ~/.config/discord/app-*/resources/build_info.json
```

gets a string with the discord version.

and for the online discord version, use

```bash
wget "https://discord.com/api/v10/updates/stable?platform=linux" --method=GET --header="Content-Type: aplication/json" -qO- | jq -r '.name'
```


Running

```bash
jq -rs '[.[].version] | sort | reverse | .[0]' ${XDG_CONFIG_HOME:-$HOME/.config}/discord/app-*/resources/build_info.json
```

Or
```bash
jq -rs 'sort_by(.version) | reverse | .[0].version' ${XDG_CONFIG_HOME:-$HOME/.config}/discord/app-*/resources/build_info.json
```


gets a string with the discord version.

and for the online discord version, use

```bash
wget "https://discord.com/api/v10/updates/stable?platform=linux" --method=GET --header="Content-Type: aplication/json" -qO- | jq -r '.name'
```

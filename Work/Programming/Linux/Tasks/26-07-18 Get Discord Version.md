
Running

```bash
jq -rs '[.[].version] | sort | reverse | .[0]' ~/.config/discord/app-*/resources/build_info.json
```

gets a string with the discord version
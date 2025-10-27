There are a lot of ways to query that info.

## Tools

### Xprop
`xprop` is the most low level, but the output format isn't great. It lets me click on the window i want info on which is great
![[Pasted image 20251027112145.png]]

### Xdotool
`xdotool` is a cool wrapper above xprop. i can use it like that really easily
![[Pasted image 20251027112350.png]]

### Wmctrl
`wmctrl` is a useful tool, but it seems it's more about acting on windows rather than getting their info (which is what i want).
![[Pasted image 20251027114501.png]]

![[Pasted image 20251027114907.png]]
![[Pasted image 20251027114951.png]]

### i3 get_tree
`i3`'s get_tree command is pretty good. It's especially nice that it comes out as JSON, so using jq makes it way easier. Also i found in a reddit post ([Parsing get\_tree with jq (example) : r/i3wm](https://www.reddit.com/r/i3wm/comments/psq529/parsing_get_tree_with_jq_example/)) a cool jq script that pretty prints stuff

```sh
i3-msg -t get_tree | jq -r '
def pad($len): tostring | .[0:$len-5] | . + " " * ($len-length) ;

def makeLineInfo: " #!# "
    + ( "con_id=\(.id)"
    + if .window != null       then "; id=\(.window)" else "" end
    + if (.marks | length) > 0 then "; marks=( "+(.marks|@sh)+" )" else "" end
    )
;

def makeLine($y):
    .focused as $is_focused
    | ( $y +
        if .window != null        then "- win:   (\(.window_properties.class)) \(.name)"
        elif .type == "workspace" then "workspace[\"\(.name)\"]: \(.layout)"
        elif .type == "con"       then "container: \(.layout)"
        elif .type == "output"    then "output:   \(.name)"
        else "Well This is unexpected  \(.|tostring)" end
    | pad(100) ) + makeLineInfo
    | if $is_focused then "--> " + .[4:] else . end
;

def i3_descend_nodes($y): makeLine($y), (
    if .type == "output"
    then .nodes[] | select(.name == "content")
    else .nodes[]
    end | i3_descend_nodes($y + "  ") )
;

.nodes[]
| [ select(.name != "__i3") ]
| if length > 1 then .[] else
    .[] | .nodes[] | select(.name == "content") | .nodes[]
end
| i3_descend_nodes("") '
```

## Sources
got the tool lists first by a comment on this reddit post: [A (hopefully) useful script to get xprop info : r/i3wm](https://www.reddit.com/r/i3wm/comments/5k3c7w/a_hopefully_useful_script_to_get_xprop_info/)

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
`i3`'s get_tree command is pretty good. It's especially nice that it comes out as JSON, so using [jq]

## Sources
got the tool lists first by a comment on this reddit post: [A (hopefully) useful script to get xprop info : r/i3wm](https://www.reddit.com/r/i3wm/comments/5k3c7w/a_hopefully_useful_script_to_get_xprop_info/)

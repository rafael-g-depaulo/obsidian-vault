the zsh plugin [git-extras](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-extras) has a bunch of interesting aliases, such as ([reference](https://github.com/tj/git-extras/blob/master/Commands.md))
- `git delta`
- `git abort`
- `git feature`
- `git clear`
- `git pr <pr number on github>`
- `git undo [# of commits to undo]`
- `git ignore-io`

### Un-sobmodule a submodule
As seen in [this stack overflow answer](https://stackoverflow.com/a/1789374), it's possible to just:
```bash
git rm --cached submodule_path # delete reference to submodule HEAD (no trailing slash)
git rm .gitmodules             # if you have more than one submodules,
                                # you need to edit this file instead of deleting!
rm -rf submodule_path/.git     # make sure you have backup!!
git add submodule_path         # will add files instead of commit reference
git commit -m "remove submodule"
```

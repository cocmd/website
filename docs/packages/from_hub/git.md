# git
### Visit the package [ Source Code ](https://github.com/cocmd/hub/tree/master/packages/git)
> Please contribute your git playbooks and shortcuts
> [How to contribute?](https://cocmd.org/docs/contributing)
:::info How To Install?
run in terminal:
```bash
cocmd install -y git
```
:::
## automations (3)
| command | env | description | how to run? |
| --- | --- | --- | --- |
| git.setup | MacOS | Install and configure git on this machine: install git. Configue git.  | run `git.setup` or `cocmd run git.setup` |
| git.commit-push-all | Any | add all, commit and push: add all. commit. push.  | run `git.commit-push-all` or `cocmd run git.commit-push-all` |
| git.setup.github | MacOS | install github cli: install brew. install gh.  | run `git.setup.github` or `cocmd run git.setup.github` |
| git.setup.github | Windows | install github cli | run `git.setup.github` or `cocmd run git.setup.github` |
| git.setup.github | Linux | install github cli | run `git.setup.github` or `cocmd run git.setup.github` |

## aliases (14):
```
alias g='git'
alias gadd='git add -A .'
alias gcommit='git commit -m'
alias gcommitreset='git reset HEAD~'
alias gc='git checkout'
alias glog='git log --show-signature'
alias gmerge='git merge --no-ff'
alias gpull='git pull'
alias gpush='git push'
alias gpushs='git push --set-upstream origin'
alias gs='git status'
alias gtag='git tag'
alias gtags='git tag -n'

```


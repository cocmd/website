# docker
### [ Package Source Code ](https://github.com/cocmd/hub/tree/master/packages/docker)
:::info How To Install?
run in terminal:
```bash
cocmd install -y docker
```
:::
## aliases (14):
```
alias d='docker'
alias da='docker attach'
alias dr='docker restart'
alias dimg='docker images'
alias dps='docker ps'
alias dvol='docker volume ls'
alias dclearimg='docker rmi $(docker images --quiet --filter "dangling=true")'
alias dclearps='docker ps --filter status=dead --filter status=exited -aq | xargs docker rm -v'
alias dclearvol='docker volume rm $(docker volume ls -qf dangling=true)'
alias dc='docker-compose'
alias dcer='docker-compose exec rails'
alias dcerjasmine='docker-compose run --rm -e RAILS_ENV=test -p 8888:3000 rails rails jasmine'
alias dcerspec='docker-compose run --rm -e RAILS_ENV=test rails rspec'

```
## automations (4)
| name | env | description | steps |
| --- | --- | --- | --- |
| setup | MacOS | setup docker for desktop | 3 |
| setup | Linux | setup docker for desktop | 2 |
| cleanup | Any | Cleanup Docker environment | 1 |
| monitor | Any | Monitor Docker resources | 1 |
| build-run | MacOS | Build and run a Docker image | 1 |

## paths (2)
./scripts/:
| filename | desc | usage 
| --- | --- | --- |
| dockerinstall.osx.sh |  |  |


# docker
### Visit the package [ Source Code ](https://github.com/cocmd/hub/tree/master/packages/docker)
> Please contribute your docker scripts and shortcuts
> How to contribute? -
:::info How To Install?
run in terminal:
```bash
cocmd install -y docker
```
:::
## automations (4)
| command | env | description | how to run? |
| --- | --- | --- | --- |
| docker.setup | MacOS | setup docker for desktop: title. Install docker. Install docker-compose.  | run `docker.setup` or `cocmd run docker.setup` |
| docker.setup | Linux | setup docker for desktop: Install docker. Install docker-compose.  | run `docker.setup` or `cocmd run docker.setup` |
| docker.cleanup | Any | Cleanup Docker environment | run `docker.cleanup` or `cocmd run docker.cleanup` |
| docker.monitor | Any | Monitor Docker resources | run `docker.monitor` or `cocmd run docker.monitor` |
| docker.build-run | MacOS | Build and run a Docker image | run `docker.build-run` or `cocmd run docker.build-run` |

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
## PATH additions (2)
./scripts/:

| command | desc | usage 
| --- | --- | --- |
| `dockerinstall.osx.sh` |  | run `` |
./bin/ (not exists)

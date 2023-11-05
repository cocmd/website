# jenkins
### Visit the package [ Source Code ](https://github.com/cocmd/hub/tree/master/packages/jenkins)
> Please contribute your jenkins playbooks and shortcuts
> [How to contribute?](https://cocmd.org/docs/contributing)
:::info How To Install?
run in terminal:
```bash
cocmd install -y jenkins
```
:::
## PATH additions (1)
./bin/:

| command | desc | usage 
| --- | --- | --- |
| `jenkins-lastbuild-check.sh` | Check the status of the latest build of a Jenkins job. | run `jenkins-lastbuild-check.sh jenkins_url job_name username password` |
| `jenkins-run-build.sh` | Trigger a Jenkins job and optionally monitor its execution. | run `jenkins-run-build.sh jenkins_url job_name username password [parameters] [wait_for_finish]` |


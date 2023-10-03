# k8s
### [ Package Source Code ](https://github.com/cocmd/hub/tree/master/packages/k8s)
:::info How To Install?
run in terminal:
```bash
cocmd install -y k8s
```
:::
## aliases (14):
```
alias k='kubectl'
alias kgp='kubectl get pods'
alias kgs='kubectl get svc'
alias kgn='kubectl get nodes'
alias kgc='kubectl get componentstatuses'
alias kd='kubectl describe'
alias krm='kubectl delete'
alias kex='kubectl exec -it'
alias klo='kubectl logs'
alias kaf='kubectl apply -f'
alias kdf='kubectl delete -f'
alias kctx='kubectx'
alias kns='kubens'

```
## automations (4)
| name | env | description | steps |
| --- | --- | --- | --- |
| setup | MacOS | setup Kubernetes for desktop | 4 |
| backup-configmaps | Any | Backup all ConfigMaps in a namespace | 1 |
| rolling-restart | Any | Perform a rolling restart of a Deployment | 1 |
| batch-pod-deletion | Any | Batch delete Pods based on a label | 1 |



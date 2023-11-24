# k8s
### [ Source Code ](https://github.com/cocmd/hub/tree/master/packages/k8s)
> Please contribute your k8s playbooks and shortcuts
> [How to contribute?](https://cocmd.org/docs/contributing)
:::info How To Install?
run in terminal:
```bash
cocmd install -y k8s
```
:::


This package contains 5 playbooks:

### k8s.setup (MacOS)
setup Kubernetes for desktop
run it with: `cocmd run k8s.setup`

### k8s.setup (Linux)
Setup Kubernetes for desktop on Linux
run it with: `cocmd run k8s.setup`

### k8s.backup-configmaps (Any)
Backup all ConfigMaps in a namespace
run it with: `cocmd run k8s.backup-configmaps`

### k8s.rolling-restart (Any)
Perform a rolling restart of a Deployment
run it with: `cocmd run k8s.rolling-restart`

### k8s.batch-pod-deletion (Any)
Batch delete Pods based on a label
run it with: `cocmd run k8s.batch-pod-deletion`

### k8s.check-pod-restarts (Any)
Check for Pods with restart counts greater than 0
run it with: `cocmd run k8s.check-pod-restarts`





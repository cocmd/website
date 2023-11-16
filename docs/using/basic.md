---
sidebar_position: 1
title: First Steps
---

After cocmd is ready on your machine, you can start installing and running 
packages. 
Packages can be installed from any Git repository you have access to (public or private) or from Cocmd hub.


## Installing and Running
For example, if you are a Python developer, you can **install a package** - the `python` package:

```shell
cocmd install python
```

now you can **run a playbook** - for example the `setup` playbook:


```shell
cocmd run python.setup
```

or after opening a new terminal session:
```shell
python.setup
```

to **see what more is available** in the `python` package, you can run:
```shell
cocmd show package python
```

**Removing** is easy  
```shell
cocmd uninstall <package>
``` 
and it's gone.


## More Packages?
All available packages are on [Cocmd Hub](https://cocmd.org/#hub).
Also, you can run:
```bash
cocmd install
```

to see all available packages from Cocmd hub. 

## Browsing

There are many cocmd packages in your machine?
You can browse them with:
```bash
cocmd browse
```



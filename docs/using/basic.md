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


## See it in action: python.setup playbook
✅ install Python
✅ Python VSCode plugins
✅ Install miniconda
[![asciicast](https://asciinema.org/a/621260.svg)](https://asciinema.org/a/621260)

## See it in action: node.setup playbook
✅ install Node.js
✅ Install yarn
✅ Install VSCode plugins

[![asciicast](https://asciinema.org/a/621261.svg)](https://asciinema.org/a/621261)

## See it in action: full web project onboarding
as instructed in [CONTRIBUTING.md](https://github.com/Maakaf/maakaf-temp/blob/main/CONTRIBUTING.md#%D7%94%D7%AA%D7%A7%D7%A0%D7%94-%D7%9E%D7%94%D7%99%D7%A8%D7%94) of a classic web project:

✅ vscode
✅ git
✅ github cli
✅ node
✅ pnpm
✅ git clones
✅ run website
✅ vscode extensions
✅ open IDEs
[![asciicast](https://asciinema.org/a/621263.svg)](https://asciinema.org/a/621263)


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

[![asciicast](https://asciinema.org/a/621268.svg)](https://asciinema.org/a/621268)

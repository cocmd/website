---
sidebar_position: 2
title: From Filesystem
---

Install from file system location with `cocmd install <path>`. path can be relative or absolute.
When this command is executed, Cocmd will scan this path for nested cocmd packages up to 2nd level depth for `cocmd.yaml` files.
For example is we add a package in `~/my-workspace`, and this is the structure of `my-workspace`:
```shell
> tree ~/my-workspace
.
├── README.md
├── cocmd.yaml
├── my-package1
│   ├── cocmd.yaml
├────── deeper-my-package3
│       ├── cocmd.yaml
├── my-package2
│   ├── cocmd.yaml
```

It will add all packages under `my-workspace` and `my-package1` and `my-package2` to the system.
This is useful when you have a parent directory that contains many directories with cocmd information and you want to add all of them at once. 


*Changing the depth of the scan is not yet supported, but will be in the future.*
---
sidebar_position: 1
title: From Git
---

Install from any Git repository you have access to (public or private).
For example, we have a boilerplace repository as an example: [cocmd/example-repo-template](https://github.com/cocmd/example-repo-template)

You can install it with:
```shell
> cocmd install git@github.com:cocmd/example-repo-template.git

Ok, I will install: git@github.com:cocmd/example-repo-template.git
  INFO Installing package "git@github.com:cocmd/example-repo-template.git"
  INFO Package 'git@github.com:cocmd/example-repo-template.git' was installed:
  INFO - ✅ 3 aliases available now
  INFO - ✅ 2 automations available now
  INFO - ✅ 1 paths available now in PATH env
  INFO - run `cocmd show package example-repo` for more details
```

the location of all git clones is `~/.cocmd/runtime/`
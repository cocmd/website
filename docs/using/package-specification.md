---
sidebar_position: 4
title: Package Specification
---

## TLDR



You can create your own CMDOps and share them with your team or community.
Use Git to manage your CMDOps and CoCMD to distribute them.

Use our template to get started: [Template](https://github.com/cocmd/example-repo-template):
```shell
git clone git@github.com:cocmd/example-repo-template.git
```

change `cocmd.yaml` to your needs:
* aliases - add your aliases as one big string
* paths - add paths in the repo to be added to the PATH environment variable
* automations - add workflows to be executed by CoCMD

```yaml
name: example-repo
aliases: |
    alias coolalias='echo "hi from coolalias"'
    alias coolalias2='echo "hi from coolalias"'
paths:
    - ./bin/
automations: 
    - name: automation-inline-example
      content: 
        description: Automation example inline in cocmd.yaml
        steps:
        - content: |
            echo "hi from inline automation step 1"
          description: this is step 1
          runner: shell
          title: step 1
        - content: |
            echo "hi from inline automation step 2"
          description: this is step 2
          runner: shell
          title: step 2
    - name: automation-file-example
      file: ./automation-file-example.yaml
```

## Package strucutre

### cocmd.yaml


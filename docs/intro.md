---
sidebar_position: 0
---

# Getting Started

Cocmd is an open source tool for Developers to add Command line operations specification to their projects and 
distribute them to their community.

For example, lets say you have a lot of `git` commands you type in during the day. Use CoCMD to easily add `git` related scripts, shortcuts and automations to your terminal. 

## Installation

* MacOs - 
Best way to install is with brew:
```shell
brew tap cocmd/cocmd
brew install cocmd
```
visit this link for more options: [MacOS installation](/docs/install/mac)

* Linux - not supported yet
* Windows - not supported yet

## Install CMDOps from Hub

CoCMD provides a useful packages you can use right away.
It's all public and open sourced.

For example, you can add the basic dev machine packages with:
```shell
cocmd install -y git docker k8s osx python node
```

Visit [Hub](/docs/hub/packages) for more information.

## Create CMDOps in your codebase

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
---
sidebar_position: 3
title: CMDOps for your projects
---

Any project can have CMDOps (Command Line Operations). Lets say for example, your project requires some installation steps, or you want to add some shortcuts for your team or community to use.

## What is happening today?

Today, these operations are usually documented in a wiki or a readme page. The community members need to read the documentation and execute the steps manually. **This can be very time consuming and error prone.**

## What can we do better?

Use CoCMD. CoCMD is a tool for keeping Command line shortcuts, sequences and knowhows **AS CODE**. This means that you can easily share your knowledge with your team and community.

## How to create a CMDOps package?

Add to your project a `cocmd.yaml` file. This file will contain all the CMDOps for your project:

```yaml
name: my-project
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

Now you can run `cocmd install` to install all the CMDOps in your project.



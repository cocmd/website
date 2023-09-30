---
sidebar_position: 0
slug: /intro

---

# Getting Started

Cocmd is an open source tool for Developers to add Command line operations specification to their projects and 
distribute them to their community.

For example, lets say you have a lot of `git` commands you type in during the day. Use CoCMD to easily add `git` related scripts, shortcuts and automations to your terminal. 

## Installation

### Step 1 - Install CoCMD
* MacOs - 
Best way to install is with brew:
```shell
brew tap cocmd/cocmd
brew install cocmd
```

* Linux - not supported yet
* Windows - not supported yet

### Step 2 - Add CoCMD to your shell

Run in terminal:
```shell
cocmd setup zsh
or 
cocmd setup bash
```

what this does is adding a loader of all aliases and automations shortcuts to your shell and lets you call any of them directly.

## Add Packages

You can start right away with `cocmd install`.
See all packages options in [Hub](/docs/packages/from_hub).

If you want to create your own read [Here](/docs/packages/package-specification)
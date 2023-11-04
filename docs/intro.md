---
sidebar_position: 0
slug: /intro

---

# Getting Started

Cocmd is an open source tool for Developers to add Command line operations specification to their projects and 
distribute them to their community.

For example, lets say you have a lot of `git` commands you type in during the day. Use CoCMD to easily add `git` related scripts, shortcuts and automations to your terminal. 

## Installation

The binary executable is `cocmd`.

### Step 1 - Install CoCMD


#### Mac - Homebrew

```bash
brew install cocmd/tap/cocmd
```

To update, run

```bash
brew upgrade cocmd/tap/cocmd
```

#### Snap

For a system with Snap installed, run

```bash
snap install cocmd
```

#### Linux

Run this in your terminal:
```shell
bash -c "$(curl -fsSL https://cocmd.org/linux/install.sh)"
```

#### Cargo

Use this option if your architecture is not supported by the pre-built binaries found on the [releases page](https://github.com/cocmd/cocmd/releases).

First, install [Rust](https://www.rust-lang.org/tools/install) (using the recommended `rustup` installation method) and then

```bash
cargo install cocmd
```

This method will build the binary from source.

To update, run the same command again.

#### Windows - not supported yet

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

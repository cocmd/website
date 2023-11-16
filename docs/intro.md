---
sidebar_position: 0
slug: /intro
---

# Installation


The binary executable is `cocmd`. 

Downloadable releases [here](https://github.com/cocmd/cocmd/releases)

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

#### Windows 
Get it from release page and add to your path
[Link to Release Page](https://github.com/cocmd/cocmd/releases)


### Step 2 - Add CoCMD to your shell

To add CoCMD to your shell, run the appropriate command in your terminal based on your shell:

For Zsh:
```shell
cocmd setup --shell zsh
```

For Bash:
```shell
cocmd setup --shell bash
```

Alternatively, you can simply run:
```shell
cocmd setup
```
and the setup command will attempt to detect your shell and apply the configuration.

What this does is adding a loader of all aliases and automations shortcuts to your shell and lets you call any of them directly.

## Add Packages

You can start right away with `cocmd install`.
See all packages options in [Hub](/docs/packages/from_hub).

If you want to create your own read [Here](/docs/packages/package-specification)
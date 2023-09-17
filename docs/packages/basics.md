---
sidebar_position: 0
title: Packages Basics
sidebar_label: Basics
---

Packages make it easy to **reuse snippets** created by other people, 
or **share** yours with the world.
Thanks to the official package repository, [Cocmd Hub](https://hub.cocmd.org),
and the built-in package manager, using them is a breeze.

:::info A new Hub is coming in 2022

We are working hard to build a new and improved [Cocmd Hub](https://github.com/cocmd/hub)
that will replace the current one.

If you want to stay updated, follow me on [Twitter](https://twitter.com/cocmd)
or join the [Subreddit](https://www.reddit.com/r/cocmd/).

:::

## Installing a package

Packages can be installed from multiple sources.
For most users, **we recommend installing them from the [Cocmd Hub](https://hub.cocmd.org/)**,
as those packages have been manually verified by the Cocmd team.

For advanced use-cases, you can also install packages from [external sources](../external-packages/).
This section assumes you'll install packages from the Hub, as that's the most common behavior.

After choosing your package of choice on the [Hub](https://hub.cocmd.org/), you can install it by opening a terminal
and running:

```bash
cocmd install <package_name>
```

with `<package_name>` being the identifier for your desired package.

For example, if you want to install the [lorem](https://hub.cocmd.org/lorem) package,
you can do so with:

```bash
cocmd install lorem
```

### Installing a specific version

Cocmd installs the latest version by default, but you can also install a specific one with:

```bash
cocmd install <package_name> --version <package_version>
```

For example:

```bash
cocmd install html-utils-package --version 0.1.0
```

### Forcing an installation

By default, Cocmd will prevent installing a package if already installed.
However, there are times when you might want to _force_ an installation anyway.

For example, if you locally edited a package to adapt some changes and you would
like to _roll-back_ to the official version, you can do so with the `--force` option:

```bash
cocmd install lorem --force
```

This will force Cocmd to install the package anyway.

## Uninstalling a package

You can uninstall a package by opening a terminal and running:

```bash
cocmd uninstall <package_name>
```

such as:

```bash
cocmd uninstall lorem
```

## Listing installed packages

Cocmd provides a command to easily check which packages are installed. Open a terminal and run:

```
cocmd package list
```

:::tip Where are packages stored?

Under the hoods, packages are nothing more than regular YAML configuration files with some metadata.
In recent Cocmd versions, these are stored alongside your YAML matches, under the `packages` directory.

You can find where packages are stored by running the following command in a terminal:

```
cocmd path packages
```

:::

## Updating packages

You can update a package by running the following command in a terminal:

```bash
cocmd package update <package_name>
```

For example:

```
cocmd package update lorem
```

### Updating all packages

You can also update all packages at once by running the following command:

```bash
cocmd package update all
```
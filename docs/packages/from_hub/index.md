---
sidebar_position: 0
title: Hub
sidebar_label: From Hub
---

## Explore & Install 
You can view all available packages under "Hub" in this doc website.
Or you can run in terminal:
```shell
cocmd install
```
This will fetch all avilable packages from our hub and show them to you.
Select one/several and install them.

```
> cocmd install
fetching from hub...
What Packages to install?:
  [ ] git
  [ ] k8s
  [ ] devops
  [ ] osx
  [ ] aws-s3
 >[x] docker

  Installing package "docker"
  Package 'docker' was installed:
  - ✅ 14 aliases available now
  - ✅ 4 automations available now
  - ✅ 2 paths available now in PATH env
  - run `cocmd show package docker` for more details
```

## Installing a specific package

Packages can be installed from our repository that contains some packages for the public to use.

```bash
cocmd install <package_name>
```

with `<package_name>` being the identifier for your desired package.

For example:

```bash
cocmd install docker
```

## Uninstalling a package (TBD)

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
cocmd show packages
```

You will see what package contains (quantities only) and the path it's stored.

## Updating packages (TBD)

You can update a package by running the following command in a terminal:

```bash
cocmd package update <package_name>
```

For example:

```
cocmd package update lorem
```

### Updating all packages (TBD)

You can also update all packages at once by running the following command:

```bash
cocmd package update all
```
# Command-Line Help for `cocmd`

This document contains the help content for the `cocmd` command-line program.

**Command Overview:**

* [`cocmd`↴](#cocmd)
* [`cocmd profile-loader`↴](#cocmd-profile-loader)
* [`cocmd refresh`↴](#cocmd-refresh)
* [`cocmd docs`↴](#cocmd-docs)
* [`cocmd run`↴](#cocmd-run)
* [`cocmd show`↴](#cocmd-show)
* [`cocmd show source`↴](#cocmd-show-source)
* [`cocmd show sources`↴](#cocmd-show-sources)
* [`cocmd add`↴](#cocmd-add)
* [`cocmd add source`↴](#cocmd-add-source)
* [`cocmd remove`↴](#cocmd-remove)
* [`cocmd setup`↴](#cocmd-setup)

## `cocmd`


    Cocmd is a CLI utility to collaborate on anything in the CMD in the community and internal teams. 
    Use it to sync Aliases, Scripts, and Workflows.

**Usage:** `cocmd [OPTIONS] <COMMAND>`

###### **Subcommands:**

* `profile-loader` — Profile Loader command - Loads profiles
* `refresh` — Refresh command - Refreshes something (add a description here)
* `docs` — Docs command with a name argument - Generates and displays documentation
* `run` — Run command with a name argument - Runs a specific automation
* `show` — Show command with subcommands
* `add` — Add command with subcommands
* `remove` — Remove command (no subcommands) - Removes something (add a description here)
* `setup` — Setup command with a shell argument - Set up the CLI tool, specify shell

###### **Options:**

* `-v`, `--verbose` — Verbose flag for extra output



## `cocmd profile-loader`

Profile Loader command - Loads profiles

**Usage:** `cocmd profile-loader`



## `cocmd refresh`

Refresh command - Refreshes something (add a description here)

**Usage:** `cocmd refresh`



## `cocmd docs`

Docs command with a name argument - Generates and displays documentation

**Usage:** `cocmd docs [NAME]`

###### **Arguments:**

* `<NAME>` — Optional name argument for specific documentation generation



## `cocmd run`

Run command with a name argument - Runs a specific automation

**Usage:** `cocmd run [NAME]`

###### **Arguments:**

* `<NAME>` — Optional name argument for specifying which automation to run



## `cocmd show`

Show command with subcommands

**Usage:** `cocmd show <COMMAND>`

###### **Subcommands:**

* `source` — Source subcommand with a 'name' argument - Shows information about a specific source
* `sources` — Sources subcommand - Shows information about all sources



## `cocmd show source`

Source subcommand with a 'name' argument - Shows information about a specific source

**Usage:** `cocmd show source <NAME>`

###### **Arguments:**

* `<NAME>` — Name argument for 'show source' subcommand - Specifies the name of the source to show



## `cocmd show sources`

Sources subcommand - Shows information about all sources

**Usage:** `cocmd show sources`



## `cocmd add`

Add command with subcommands

**Usage:** `cocmd add <COMMAND>`

###### **Subcommands:**

* `source` — Source subcommand with a 'name' argument - Adds a source with a specified name



## `cocmd add source`

Source subcommand with a 'name' argument - Adds a source with a specified name

**Usage:** `cocmd add source <NAME>`

###### **Arguments:**

* `<NAME>` — Name argument for 'add source' subcommand - Specifies the name of the source to add



## `cocmd remove`

Remove command (no subcommands) - Removes something (add a description here)

**Usage:** `cocmd remove`



## `cocmd setup`

Setup command with a shell argument - Set up the CLI tool, specify shell

**Usage:** `cocmd setup [OPTIONS]`

###### **Options:**

* `-s`, `--shell <SHELL>` — Optional shell argument for 'setup' command - Specifies the shell to set up



<hr/>

<small><i>
    This document was generated automatically by
    <a href="https://crates.io/crates/clap-markdown"><code>clap-markdown</code></a>.
</i></small>


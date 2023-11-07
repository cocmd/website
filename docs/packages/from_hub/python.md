# python
### Visit the package [ Source Code ](https://github.com/cocmd/hub/tree/master/packages/python)
> Please contribute your python playbooks and shortcuts
> [How to contribute?](https://cocmd.org/docs/contributing)
:::info How To Install?
run in terminal:
```bash
cocmd install -y python
```
:::
## automations (5)
| command | env | description | how to run? |
| --- | --- | --- | --- |
| python.clean | MacOS | Clean python cache and build artifacts: Clean __pycache__, pyc, pyo files. Clean build and dist folders.  | run `python.clean` or `cocmd run python.clean` |
| python.setup | MacOS | Setup python: install Python. Python VSCode plugins. Install miniconda.  | run `python.setup` or `cocmd run python.setup` |
| python.setup.miniconda | MacOS | Setup miniconda: install miniconda. update shell path.  | run `python.setup.miniconda` or `cocmd run python.setup.miniconda` |
| python.setup-poetry | MacOS | Setup Poetry for Python development | run `python.setup-poetry` or `cocmd run python.setup-poetry` |
| python.conda-env-create | Any | Create a conda environment | run `python.conda-env-create` or `cocmd run python.conda-env-create` |

## aliases (2):
```
alias httpsrv="python3 -m http.server"  # serve current directory on port 8000

```


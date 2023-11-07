# rust
### Visit the package [ Source Code ](https://github.com/cocmd/hub/tree/master/packages/rust)
> Please contribute your rust playbooks and shortcuts
> [How to contribute?](https://cocmd.org/docs/contributing)
:::info How To Install?
run in terminal:
```bash
cocmd install -y rust
```
:::
## automations (5)
| command | env | description | how to run? |
| --- | --- | --- | --- |
| rust.setup | MacOS | Setup rust: install Rust. install Rust essentials. Install toolchains. Rust VSCode plugins.  | run `rust.setup` or `cocmd run rust.setup` |
| rust.setup.wasm | MacOS | Setup rust: install Rust. Install WASM runtime. Install WASM runtime.  | run `rust.setup.wasm` or `cocmd run rust.setup.wasm` |
| rust.new-lib | MacOS | Create a new Rust project (library) | run `rust.new-lib` or `cocmd run rust.new-lib` |
| rust.new-exec | MacOS | Create a new Rust project (exec) | run `rust.new-exec` or `cocmd run rust.new-exec` |
| rust.cleanup | MacOS | Cleanup Rust project | run `rust.cleanup` or `cocmd run rust.cleanup` |

## aliases (8):
```
alias cb="cargo build"
alias ci="cargo install --path ."
alias ca="cargo add"
alias crun="cargo run"
alias crem="cargo remove"
alias wpbw="wasm-pack build --target web"
alias wpbb="wasm-pack build --target bundler"

```


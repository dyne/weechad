# Contribute

WeeChad is deliberately small: one Bash setup script and this documentation
site. Improvements should stay focused, readable, and easy to audit.

## Development setup

Clone the repository:

```sh
git clone https://github.com/dyne/weechad.git
cd weechad
```

Check the installer:

```sh
make check
```

Build the documentation:

```sh
make docs
```

Preview it locally:

```sh
make preview
```

## Test installer changes safely

Use a disposable home because setup writes `~/.weechad` and `~/weechad`:

```sh
tmp_home=$(mktemp -d)
HOME="$tmp_home" NICK=tester bash setup
```

Installer tests require WeeChat and download scripts. Check generated files,
permissions, failure behavior, and any assumptions about the host platform.

## What makes a useful change?

- A default that improves everyday IRC use without surprising network traffic
- A compatibility fix for supported WeeChat versions
- Clearer installation, privacy, or recovery documentation
- A small theme improvement that remains readable in 256-color terminals

Open issues and patches at [github.com/dyne/weechad](https://github.com/dyne/weechad).

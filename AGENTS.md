# Repository Guidelines

## Project Structure & Module Organization

WeeChad is a small Bash-based configurator with a documentation site.

- `setup`: main executable installer and WeeChat configuration source.
- `GNUmakefile`: ShellCheck and MkDocs development targets.
- `README.md`: user-facing introduction, installation guide, and FAQ.
- `mkdocs.yml`: Material for MkDocs site configuration.
- `docs/images/` and `docs/stylesheets/`: documentation assets and custom CSS.
- `LICENSE.txt`: project license.

Keep runtime behavior in `setup`; do not split it into extra modules unless that
clearly reduces complexity. Keep documentation assets under `docs/`.

## Build, Test, and Development Commands

- `make check`: run ShellCheck against `setup`. Run this after every shell
  change.
- `make deps`: create a repository-local Python virtual environment and install
  the MkDocs dependencies.
- `make preview`: serve the documentation locally with live reload.
- `make deploy`: publish the documentation through `mkdocs gh-deploy`.
- `NICK=tester bash setup`: exercise the installer locally. This writes to
  `~/.weechad` and `~/weechad`, so use a disposable `HOME` when testing.

There is no separate compilation step or automated test suite.

## Coding Style & Naming Conventions

Write portable, readable Bash and keep the existing two-space indentation.
Quote variable expansions unless intentional word splitting is required.
Functions use descriptive kebab-case names such as `setup-theme-conf`;
variables use lowercase snake_case such as `server_conf`. Prefer shell built-ins
and straightforward control flow. Add brief comments only where behavior or a
side effect is not obvious.

Run `make check` before submitting changes. Avoid adding dependencies unless
the change cannot reasonably use the existing shell and MkDocs toolchain.

## Testing Guidelines

For installer changes, combine `make check` with a manual run using a temporary
home directory, for example:

```sh
tmp_home=$(mktemp -d)
HOME="$tmp_home" NICK=tester bash setup
```

Installer tests require WeeChat and may download scripts. Verify generated
configuration, permissions, and failure paths without touching real user data.
For documentation changes, inspect the site with `make preview`.

## Commit & Pull Request Guidelines

History uses short, imperative, lowercase summaries such as `improve theme` and
`add queryman script by default`. Keep each commit focused on one behavior.

Pull requests should explain the user-visible change, list commands run, and
note installer side effects or platform assumptions. Link related issues.
Include screenshots only for rendered documentation or visual theme changes.

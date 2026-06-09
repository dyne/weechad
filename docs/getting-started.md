# Getting started

## Requirements

- A Unix-like system with Bash, `curl`, and WeeChat **4.4 or newer**
- A terminal with 256-color support
- Network access while the installer downloads WeeChat scripts
- A nickname supplied through `NICK` for non-interactive installation

Check your WeeChat version:

```sh
weechat -v
```

## Install

The convenient route:

```sh
curl -Ls dyne.org/weechad/setup | NICK=yournick bash
```

The inspect-first route:

```sh
curl -Ls dyne.org/weechad/setup -o setup
less setup
NICK=yournick bash setup
```

The installer creates:

| Path | Purpose |
| --- | --- |
| `~/.weechad/` | Dedicated WeeChat configuration, scripts, and logs |
| `~/weechad` | Launcher that starts WeeChat with `WEECHAT_HOME=~/.weechad` |

It sets permissions on `~/.weechad` so group and other users cannot read it.

## Start chatting

Run:

```sh
~/weechad
```

List the configured servers:

```text
/server list
```

Connect to one:

```text
/connect libera
```

WeeChad deliberately does not auto-connect. Your terminal should not start
making social commitments without you.

## Put the launcher on your PATH

For a system-wide command:

```sh
sudo install -m 0755 ~/weechad /usr/local/bin/weechad
```

Then launch it with:

```sh
weechad
```

## Re-run or update

The normal installer refuses to overwrite a configured `~/.weechad`. This is a
guard against accidental data loss. The setup script also exposes an update
mode:

```sh
curl -Ls dyne.org/weechad/setup | INSTALL=update bash
```

Review the current script before updating. It reapplies project defaults and
downloads the current script files.

## Troubleshooting

### Nickname undefined

When setup is piped, standard input is not interactive. Supply `NICK`:

```sh
curl -Ls dyne.org/weechad/setup | NICK=your_nick bash
```

### WeeChat not installed or too old

Install a supported stable release from the
[official WeeChat downloads](https://weechat.org/download/weechat/stable/).

### Cannot overwrite `~/.weechad`

Back up the directory before removing anything:

```sh
cp -a ~/.weechad ~/.weechad.backup
```

Do not delete configuration or logs merely because an installer told you to
think carefully. Thinking carefully is the feature.

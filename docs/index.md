---
layout: home

hero:
  name: "WeeChad"
  text: "WeeChat configured before your coffee cools"
  tagline: "A focused WeeChat setup with a polished terminal theme, useful scripts, plenty of IRC networks, and optional encrypted storage."
  image:
    src: /images/weechad_ascii_logo.png
    alt: WeeChad terminal portrait
  actions:
    - theme: brand
      text: Install WeeChad
      link: /getting-started
    - theme: alt
      text: Read the privacy guide
      link: /privacy

features:
  - title: "One-command setup"
    details: "Set a nickname, run the installer, and get a dedicated launcher plus configuration under ~/.weechad."
  - title: "Private by choice"
    details: "Keep configuration and logs in an encrypted Tomb when your threat model asks for more than a hidden directory."
  - title: "Useful defaults"
    details: "A readable 256-color theme, nick coloring, URL highlighting, monitor buffers, and a curated script set."
  - title: "Network ready"
    details: "DarkIRC, Libera, OFTC, Snoonet, Hackint, and many more server definitions are ready without forced auto-connect."
---

<p class="joke">Chads have no time for WeeChat configuration archaeology.</p>

## What WeeChad actually does

WeeChad is a Bash installer for [WeeChat](https://weechat.org/). It creates an
independent WeeChat home at `~/.weechad`, applies the project's settings through
WeeChat commands, downloads a small set of scripts, and writes a `~/weechad`
launcher.

It does **not** replace WeeChat, run an IRC service, or make every network
private. It gives WeeChat practical defaults and makes an encrypted local setup
possible with [Tomb](https://dyne.org/tomb).

## The short version

```sh
curl -Ls dyne.org/weechad/setup | NICK=yournick bash
~/weechad
```

Inside WeeChat:

```text
/connect libera
```

For decentralized IRC through a local DarkIRC node:

```text
/connect darkirc
```

::: warning Read before piping
Piping a remote script into a shell is convenient, not magic. Inspect
[the setup script](https://github.com/dyne/weechad/blob/main/setup) first when
you need to understand or audit what will run.
:::

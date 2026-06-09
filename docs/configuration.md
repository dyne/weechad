# Configuration

WeeChad configures WeeChat at runtime through `/set`, `/trigger`, `/server`, and
script commands. This follows WeeChat's own configuration model and surfaces
obsolete settings immediately instead of silently copying stale dotfiles.

## Dedicated WeeChat home

The launcher sets:

```sh
WEECHAT_HOME="$HOME/.weechad"
```

Your regular `~/.config/weechat` setup remains separate.

## Nickname fallback

The supplied nickname becomes a four-entry fallback list:

```text
your_nick,your_nick_,your_nick__,your_nick__
```

Change it later inside WeeChat:

```text
/set irc.server_default.nicks "newnick,newnick_"
/save
```

## Theme choices

The default theme targets 256-color terminals and includes:

- compact timestamps and navigation markers;
- distinct join, quit, network, error, and action prefixes;
- colored nicknames in messages and nick lists;
- subdued join and quit noise;
- underlined URL highlighting;
- visible disconnect warnings;
- a persistent read marker.

Use WeeChat's `/set` command to inspect or override any setting:

```text
/set weechat.look.*
/set irc.color.*
```

Save intentional changes:

```text
/save
```

## No auto-connect

Server definitions are installed, but connections are left to you:

```text
/connect libera
```

This avoids surprise network traffic and lets one configuration serve different
machines and circumstances.

## Back up before experimenting

```sh
cp -a ~/.weechad ~/.weechad.backup
```

WeeChat is forgiving. Backups are more forgiving.

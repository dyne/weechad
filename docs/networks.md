# Networks

WeeChad installs server definitions without connecting automatically.

## Recommended starting points

| Name | Address | Notes |
| --- | --- | --- |
| `darkirc` | `localhost:6667` | Local, non-TLS connection to a running DarkIRC daemon |
| `libera` | `irc.libera.chat:6697` | TLS |
| `oftc` | `irc.oftc.net:6697` | TLS |
| `snoonet` | `irc.snoonet.org:6697` | TLS |
| `hackint` | `irc.hackint.org:6697` | TLS |
| `casalib` | `irc.liberta.casa:6697` | TLS |

Connect with:

```text
/connect libera
```

## Full preset list

The setup currently includes `2f30`, `anope`, `blackcatz`, `blcknd`, `buttes`,
`efnet`, `gamesurge`, `gangnet`, `irc`, `ircstorm`, `malvager`, `sandnet`,
`silph`, `supernets`, `tcpdirect`, `terahertz`, `unreal`, `wigle`, `wormnet`,
and `wtfux`, in addition to the starting points above.

Networks change. Inspect a definition before connecting:

```text
/server listfull libera
```

Edit a server:

```text
/set irc.server.libera.*
```

## Add your own

```text
/server add example irc.example.org/6697 -tls
/connect example
/save
```

An IRC network is a community and an operator, not merely a hostname. Read its
rules and privacy policy before settling in.

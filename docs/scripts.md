# Included scripts

Setup downloads scripts from the official
[WeeChat scripts repository](https://weechat.org/scripts/) and symlinks them
into the appropriate `autoload` directory.

| Script | What it adds |
| --- | --- |
| `autosort.py` | Predictable buffer ordering |
| `grep.py` | Search through buffers and logs |
| `cmd_help.py` | Inline command help while typing |
| `colorize_nicks.py` | Consistent nickname colors |
| `go.py` | Fast buffer switching |
| `collapse_channel.py` | Compact channel display |
| `queryman.py` | Better management of private-message buffers |
| `highmon.pl` | A monitor for highlights and selected messages |

WeeChad configures `autosort`, enables `cmd_help`, starts `highmon`, and adds a
four-line monitor bar at the top.

## Inspect loaded scripts

Inside WeeChat:

```text
/script list
```

Get help for a command:

```text
/help grep
```

## Trust and updates

Scripts are executable code downloaded during installation. Audit the script
source and the resulting files under:

```text
~/.weechad/python/
~/.weechad/perl/
```

The installer currently follows the filenames hosted by WeeChat rather than
pinning immutable checksums. That is convenient, but security-sensitive setups
should review downloaded changes before loading them.

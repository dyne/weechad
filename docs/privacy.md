# Privacy with Tomb

WeeChad can place its configuration and logs in an encrypted
[Tomb](https://dyne.org/tomb). The generated launcher detects the Tomb, opens
it, runs WeeChat against `~/.weechad`, and closes it when WeeChat exits.

## Threat-model reality check

An encrypted local archive protects data at rest when it is closed. It does not:

- make ordinary IRC networks end-to-end encrypted;
- hide your IP address from an IRC server;
- protect logs while the Tomb is open;
- repair weak passwords or an already compromised machine.

DarkIRC is a separate decentralized network option. Read its
[connection guide](https://news.dyne.org/howto_darkfi_1-connect_to_darkirc/)
and understand the daemon you are running.

## Create the encrypted setup

First complete the normal WeeChad installation. Then run:

```sh
curl -Ls dyne.org/weechad/setup | INSTALL=tomb bash
```

The process asks for an encryption password and creates:

- `~/weechad.tomb`
- `~/weechad.tomb.key`

The current installer creates a 1 GiB Tomb using Btrfs, moves `~/.weechad`
inside it, and configures a Tomb bind hook so it appears at the usual path when
opened.

::: danger Keep the key separate
Anyone with the Tomb, key, and password can attempt to open your data. Store the
key on a different medium or trusted remote location, and keep tested backups.
Losing the key or password is not an advanced privacy mode; it is data loss.
:::

## Daily use

Start WeeChad normally:

```sh
~/weechad
```

If both Tomb files are readable, the launcher opens the Tomb, starts WeeChat,
and closes the Tomb after WeeChat exits.

Check that it closed:

```sh
tomb list
```

See the [Tomb documentation](https://dyne.org/docs/tomb/) for key management,
backups, hooks, and recovery procedures.

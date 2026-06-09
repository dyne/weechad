# Frequently asked questions

## What are the hardware requirements?

Very little. WeeChat is comfortable on small machines, including Raspberry Pi
class hardware. If your computer can display a terminal and maintain an IRC
connection, it can probably achieve Chad status without increasing the national
energy budget.

## Does WeeChad make IRC private?

No. WeeChad can encrypt local configuration and logs at rest with Tomb.
Network privacy depends on the network, transport, server operators, and your
own behavior. See the [privacy guide](./privacy).

## Which network should I use?

Try DarkIRC if you want a decentralized network and are prepared to run its
daemon. Libera, OFTC, Snoonet, Liberta Casa, and other traditional networks
host different communities. The best server is the one containing people you
actually want to talk to.

## How do I send images?

IRC is built for text. Share a URL, or turn an image into ANSI art with a tool
such as [img2irc-rs](https://lib.rs/crates/img2irc-rs). The latter is ideal when
your masterpiece deserves to occupy several hundred terminal lines.

## Why not keep the configuration in dotfiles?

WeeChat discourages direct editing of generated configuration. WeeChad applies
settings through WeeChat commands, which gives immediate feedback when options
are removed or renamed. It also keeps a complete setup in one dedicated home.

## Can I use my existing WeeChat configuration?

WeeChad intentionally uses `~/.weechad`, separate from a standard WeeChat home.
You can compare and migrate intentional settings, but blindly copying an old
configuration defeats the runtime-validation benefit.

## Where can I learn IRC?

Start with the
[Awesome IRC articles list](https://github.com/davisonio/awesome-irc#articles)
and the documentation for your chosen network. WeeChat's
[user guide](https://weechat.org/doc/) covers the client itself.

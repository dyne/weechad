# Chads have no time for WeeChat confs.
```
      ⢠⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⢧⠉⠓⠲⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠈⢇⠀⠀⠀⠀⠉⠑⠒⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠘⡆     ⠀⠀⠀⠉⠓⠦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠹⡄ WeeChat⠀⠀⠀⠑⠢⣄⠀⠀⠀⠀⠀⠀
      ⠀⠀⠀⠀⢳⠀⠀⠀⠀⢀⣀⣠⠤⠴⠒⠒⠒⠒⠒⠽⢦⣀⠀⠀⠀
      ⠀⠀⠀⠀⠈⡧⢴⡒⠋⠉⣀⣀⠀⠀⠀⠀⠀⠀⢠⡄⠀⠈⢧⡀⠀
      ⠀⠀⠀⠀⠀⠀⠀⣗⢋⣭⣍⣁⠈⠁⠀⠀⠀⡤⠞⠀⠀⠀⠀⢧⠀
      ⠀⠀⠀⠀⠀⠀⡰⠃⠫⣧⣿⣽⠽⠂⠀⠀⠀⠃⠀⠀⠀⠀⠀⢸⡄
      ⠀⠀⠀⠀⢀⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⢤⠀⠀⠀⢸⠃
      ⠀⠀⠀⣠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⠀⠧⠛⡆⡇⠀⠀⡾⠀
      ⠀⠀⢰⣇⠀⢈⣉⠳⠀⠀⠀⠀⠀⠀⠀⢹⣆⠘⢯⣡⠃⠀⣰⡇⠀
      ⠀⠀⠀⠈⠉⣩⠾⠀⠀⠀⠀⠀⠀⠀⠀⠀⢙⡆⠀⢤⠀⠐⠁⣇⠀
      ⠀⠀⠀⠀⠸⡥⠤⠤⢿⠀⠀⠀⠀⠀⢀⡠⠞⠀⠀⢸⠀⠀⠀⢻⠀
      ⠀⠀⠀⠀⠀⠳⡖⠊⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⢀⡾⠀⠀⠀⢸⠀
      ⠀⠀⠀⢀⠔⠊⠁⠀⠀⠀⠀⠀⠀⢀⣀⠤⠖⠊⠉⠀⠀⠀⠀⢸⠀
      ⠀⠀⠀⠸⣄⣀⠀⠀⠀⣠⠴⠚⠙⣏⠀⠀⠀⠀⢸⠀⠀⠀⠀⠸⡆
      ⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠙⡆⠀⢀⡴⠋⠀⡀⠀⠀⠰⠇
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡓⠐⠋⠐⠊⠀⠀⠀⠀⠀⠀
```


Welcome to the world of WeeChad, the IRC client that flexes on all
others with its supreme focus on privacy and ease of use. Imagine a
software so alpha, it sets up in a single folder, can connect to
[DarkIRC](https://dark.fi) and [encrypts its settings and
logs](https://dyne.org/tomb) for maximum privacy. No more messing
around with dotfiles like a beta; WeeChad configures everything at
runtime, giving you instant feedback on any deprecations or errors.

With WeeChad, you’re not just chatting; you’re dominating the IRC
scene with the confidence of a meme lord.

## Quick start

Install [WeeChat](https://weechat.org) latest (version >4.4)

```
curl -Ls dyne.org/weechad/setup | NICK=yournick bash
```

Will create the `~/weechad` script and a new conf in `~/.weechad`

If you like copy the script by hand into `/usr/local/bin/weechad`

Comes pre-configured with [DarkIRC](https://news.dyne.org/howto_darkfi_1-connect_to_darkirc/) (needs daemon running) and [Libera](https://libera.chat), just:
```
/connect darkirc
/connect libera
```

To increase privacy put the `~/.weechad` conf in a [Tomb](https://dyne.org/tomb) and use [bind-hooks](https://dyne.org/docs/tomb/manpage/#hooks).

For context, some useful links in the sidebar.

## FAQ

> What are the hardware requirements?

When Greta Thunberg discovers this she'll be all over IRC. Weechad is very low resource and will not make you dependent on Russian gas. It even runs on a [RPI 0W](https://www.raspberrypi.com/products/raspberry-pi-zero-w/) or any similar gadget you can [hide taped into a toilet tank](https://www.pcgamer.com/this-pc-in-a-toilet-is-the-good-shit/).

> How does one send images over this?

IRC is built for ANSI text; [you can turn images into ANSI](https://lib.rs/crates/img2irc-rs). A weechat script for this would be awesome, BTW.

> Which IRC network should I connect?

DarkIRC is the best because it is decentralized and grants you unprecedented levels of privacy. Other networks run on central servers, but their communities may also be fun: have a look at [liberta casa](https://liberta.casa/) or [snoonet](https://snoonet.org/).

> Where can one learn more about IRC?

This [awesome list](https://github.com/davisonio/awesome-irc?tab=readme-ov-file#articles) provides a good start.

> Wasn't WeeChat enough to be a Chad?

WeeChat discourages direct editing of its configuration files and
deploying them via dotfiles. Instead, settings should be configured at
runtime, which provides immediate feedback on any deprecations or
errors. Chads have no time to set the same configurations over and
over again on a dozen shells per day.

## Contribute! [help improve the base conf](https://github.com/dyne/weechad).

-----
<div style="font-size:0.7em;">
<p>WeeChad is maintained by <a href="https://github.com/dyne/Jaromil">jaromil</a>.</p>

<p>
This is free and unencumbered software released into the public domain.
</p>
<p>
Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
</p>
<p>
In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
</p>
<p>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
</p>
<p>
For more information, please refer to <a href="https://unlicense.org">unlicense.org</a>.
</p>
</div>

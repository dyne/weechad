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

Quick start:

Install [WeeChat](https://weechat.org) latest (version >4.4)

```
curl -Ls dyne.org/weechad/setup | bash
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

# Contribute! [help improve the base conf](https://github.com/dyne/weechad).

WeeChat discourages direct editing of its configuration files and
deploying them via dotfiles. Instead, settings should be configured at
runtime, which provides immediate feedback on any deprecations or
errors. This script facilitates that process by setting up everything
in a self-contained directory, making it easier to secure, for
example, by using encrypted folders.

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

#!/bin/zsh

H=$HOME/.weechad

load() {
  [ "${DEBUG}" = "" ] || >&2 echo "load ${1}"
  local setup_file=`grep -v '^#' $1 | grep -v '^$'`
  local setup_string=""
  for i in ${(f)setup_file}; do
	  setup_string="$setup_string;`printf '%s' "$i"`"
  done
  printf '%s' "$setup_string"
  [ "${DEBUG}" = "" ] || >&2 printf '%s\n' "$setup_string"
}

scripts=""
pyscript() {
  mkdir -p $H/python $H/python/autoload
  ln -s $H/python/${1} $H/python/autoload/${1}
  curl -Ls https://weechat.org/files/scripts/${1} > $H/python/${1}
  #scripts="$scripts;/script load ${1};/script autoload ${1}"
}
plscript() {
  mkdir -p $H/perl $H/perl/autoload
  curl -Ls https://weechat.org/files/scripts/${1} > $H/perl/${1}
  ln -sf $H/perl/${1} $H/perl/autoload/${1}
  #scripts="$scripts;/script load ${1};/script autoload ${1}"
}

layout=`load install-layout`
script_conf=`load install-script-conf`
theme=`load install-theme`
# triggers=`load install-triggers`
# buflist=`load install-buflist`

rm -rf $H
mkdir -p $H

pyscript autosort.py
plscript highmon.pl
pyscript grep.py
pyscript cmd_help.py
pyscript colorize_nicks.py
pyscript go.py

WEECHAT_HOME="$H" \
weechat -a -r "$layout" -r "$script_conf" -r "$theme" \
        -r "/save;/quit;"


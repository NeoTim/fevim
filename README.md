# fevim [![Build Status](https://travis-ci.org/forsigner/fevim.svg?branch=master)](https://travis-ci.org/forsigner/fevim) [![NPM Version](http://img.shields.io/npm/v/fevim.svg?style=flat)](https://www.npmjs.org/package/fevim)

Manage your vim configuration with Node.js

## Installation

``` bash
$ npm install -g fevim
$ fevim init
```

## Configuaration info 

All your vim configuaration files place in <code>~/fevim</code>.

``` bash
├── modules
│   ├── vimrc.basic # basic config
│   ├── vimrc.mapping # some shortcut key
│   ├── vimrc.gui # gui setting
│   ├── vimrc.autocmd # auto Commands
│   ├── vimrc.neobundle.core # setup neobundle
│   ├── vimrc.bundles # default plugins
│   └── vimrc.bundles.setting # plugin setting
│  
├── vimr # entry for vim config, it's linked by "~/.vimrc"
│
│   # you can customize you vim config by the following 3 files
├── vimrc.local # customize your config in here
├── vimrc.local.bundles # customize your plugin
└── vimrc.local.bundles.setting # customize your plugin setting
```

## Commands

``` python
$ fevim init # setup vim config

$ fevim bundles list  # display plugins installed

$ fevim config [option]
	option
	├─ basic
	├─ gui
	├─ autocmd
	├─ bundles
	├─ bundles setting
	├─ neobundle core
	├─ local vimrc
	├─ local bundles
	└─ local bundles setting
	usge`: $ fevim config gui # you can config gui in terminal
```

## key mapping

key | map | Descriptions
--- | --- | ---
`cd`h | ``:cd ~/<right> | cd home direcory
`<c-h`> | `<c-w>h` | jump to the left window
`<c-j>` | `<c-w>j` | jump to the bottom window
`<c-k>` | `<c-w>k` | jump to the top window
`<c-l>` | `<c-w>l` | jump to the right window
`ws` | `:split<cr>` | split window
`wv` | `:vsplit<cr>` | split window
`wc` | `:close<cr>` | close window
`tt` | `:tabnew<cr>` | new a tab
`tn` | `:tabnext<cr>` | to tab next
`tp` | `:tabprevious<cr>` | to tab previouse
`t1` | `:tabfirst<cr>` | to the first tab
`t0` | `:tablast<cr>` | to the last tab
`te` | `:tabedit<cr>` | tab edit
`tc` | `:tabclose<cr>` | close a tab
`j` | `gj` | down to next row
`k` | `gk` | up to next row
`<c-c>` | `"+y` | copy
`<c-x>` | `"yd` | clip
`<c-v>` | `"+p` | paste
`<c-a>` | `ggvG$` | select all
`<c-s>` | `<esc>:wa<cr>i<right>` | save
`<c-s>` | `:wa<cr>` | save
`<leader>w` | `<esc>:w<cr>` | save
`<leader>w` | `:w<cr>` | save
`wqa` | `:wqa<cr>` | save all and quit
`<leader>q` | `:q!<cr>` | quit
`<leader>s` | `:%s//g<left><left>` | replace
`<leader>t` | `:retab<cr>` | replace tab with space
`<leader>g` | `gg=G`  | code format
`<leader>e` | `<esc>` | equal to esc
`<s-h>` | ^ | jump to begin of line
`<s-l>` | $ | jump to end of line




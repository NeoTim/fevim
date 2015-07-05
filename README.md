# fvim
Manage your vim configuration with Node.js

## Installation

``` bash
$ npm install -g fvim
$ fvim init
```

## Configuaration info 

All your vim configuaration files place in <code>~/fvim</code>.

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
$ fvim init # setup vim config

$ fvim bundles list  # display plugins installed

$ fvim config [option]
	opton
	├─ basic
	├─ gui
	├─ autocmd
	├─ bundles
	├─ bundles setting
	├─ neobundle core
	├─ local vimrc
	├─ local bundles
	└─ local bundles setting
	usge: $ fvim config gui # you can config gui in terminal
```

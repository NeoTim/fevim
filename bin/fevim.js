#! /usr/bin/env node

/*

*fevim init vimrc
fevim install [package]
fevim uninstall [package]
fevim list fevim config plugin
fevim config basic
fevim config gui

*/
require('shelljs/global');
var fs = require('fs');
var program = require('commander');
var userhome = require('userhome');
var ghdownload = require('github-download');
var archy = require('archy');
var vim = require('open-vim');

var _setupVimrc = function() {

    if (!which('git')) {
        echo('Sorry, this script requires git!');
        exit(1);
    }

    // exec('git clone git@github.com:forsigner/fevim.git ~/fevim')
    exec('git clone git@github.com:forsigner/fevimrc.git ' + userhome('fevim'), function(code, output) {

        // symlink
        ln('-sf', userhome('fevim', 'vimrc'), userhome('.vimrc'));

        // ln('-sf', userhome('fevim', '.vimrc.local'), userhome('.vimrc.local'));
        // ln('-sf', userhome('fevim', '.vimrc.local.bundles'), userhome('.vimrc.local.bundles'));

        console.log('init success');
    });
};

program
    .version('v0.0.1')
    .option('-v, --version', 'display version');
program
    .command('init vimrc')
    .description('init vimrc')
    .option('-s, --setup_mode [mode]', 'Which setup mode to use')
    .action(function(env, options) {

        var vimrcPath = userhome('.vimrc'); // .vimrc  文件
        var fevimPath = userhome('fevim'); // .vimrc  文件

        if (fs.existsSync(vimrcPath)) {
            rm(vimrcPath);
        }

        // check fevimPath
        if (fs.existsSync(fevimPath)) {
            rm('-rf', fevimPath);
        }

        _setupVimrc();
    });

program
    .command('ls')
    .description('display installed plugin')
    .action(function(env, options) {

        var bundlePath = userhome('.vim', 'bundle');

        fs.readdir(bundlePath, function(err, data) {

            var list = data.filter(function(item) {
                return item.charAt(0) !== '.';
            });

            var bundleList = archy({
                label: 'Installed Plugin',
                nodes: list
            });
            console.log(bundleList);
        });
    });

program
    .command('config')
    .description('plugin config')
    .action(function(env, options) {
        vim.open('~/fevim/modules/vimrc.bundles.setting');
    });

program
    .command('exec <cmd>')
    .alias('ex')
    .description('execute the given remote cmd')
    .option('-e, --exec_mode <mode>', 'Which exec mode to use')
    .action(function(cmd, options) {
        console.log('ee');
    }).on('--help', function() {
        console.log('  Examples:');
        console.log();
        console.log('    $ deploy exec sequential');
        console.log('    $ deploy exec async');
        console.log();
    });

program
    .command('*')
    .action(function(env) {
        console.log('deploying "%s"', env);
    });

program.parse(process.argv);

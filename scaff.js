#!/usr/bin/env node

var shell = require('shelljs'),
	path = require('path'),
	re = /[\\\/:]/g,
	gruntfile = __dirname + '/' + process.cwd().replace(re, '_') + '.js',
	folderPath = path.relative(__dirname, process.cwd()),
	task = process.argv.slice(2)[0],
	command = 'grunt --gruntfile ' + gruntfile + ' ' + task + ' --gf=' + gruntfile + ' --folder=' + folderPath;

// Copia o conteúdo do arquivo scaff.js do usuário no arquivo Gruntfile.js do Scaff
shell.cp('-f', 'scaff.js', gruntfile);

// Executa o grunt de acordo com os parâmetros passados previamente
shell.exec(command, {async: false});
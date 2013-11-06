#!/usr/bin/env node

var shell = require('shelljs'),
	path = require('path'),
	gruntfile = __dirname + '/Gruntfile.js',
	folderPath = path.relative(__dirname, process.cwd()),
	task = process.argv.slice(2)[0],
	command = 'grunt --gruntfile ' + gruntfile + ' ' + task + ' --folder=' + folderPath;
	// command = 'grunt --gruntfile ' + gruntfile + ' init --folder=' + folderPath;

// Copia o conteúdo do arquivo scaff.js do usuário no arquivo Gruntfile.js do Scaffoldr
shell.cp('-f', folderPath + '/scaff.js', gruntfile);

// Executa o grunt de acordo com os parâmetros passados previamente
shell.exec(command, {async: false});
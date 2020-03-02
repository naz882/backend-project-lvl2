#!/usr/bin/env node

import program from 'commander';

program.version('1.0');


program
  .option('-d, --description', 'description').action(()=> {console.log("This is description")});
program
  .option('-v, --version', 'version');
program.option('-h, --help', 'help').action(()=> {

    console.log('Compares two configuration files and shows a difference.');
  
    console.log('Options:')
    console.log('  -V, --version        output the version number')
    console.log('  -h, --help           output usage information')
})
program.parse(process.argv);


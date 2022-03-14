#!/usr/bin/env node

import program from 'commander';
import gendiff from './gendiff.js';

program
  .version('1.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    gendiff(filepath1, filepath2);
  });

program.parse(process.argv);

if (program.format) console.log(program.opts());

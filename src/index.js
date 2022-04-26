#!/usr/bin/env node
import program from 'commander';
import gendiff from './gendiff.js';
import format from './formater/format.js'

program
  .version('1.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    const data = gendiff(filepath1, filepath2);
    console.log(format(data, options.format));
  });

program.parse(process.argv);

if (program.format) console.log(program.opts());

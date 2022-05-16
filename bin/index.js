#!/usr/bin/env node
import program from 'commander';
import run from '../src/index.js';

program
  .version('1.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(run(filepath1, filepath2, options.format));
  });

program.parse(process.argv);

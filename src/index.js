#!/usr/bin/env node
import program from 'commander';
import gendiff from './gendiff';
import format from './formater/format';

program
  .version('1.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const data = gendiff(filepath1, filepath2);
    /* eslint-disable-next-line */
    console.log(format(data, options.format));
  });

program.parse(process.argv);
/* eslint-disable-next-line */
if (program.format) console.log(program.opts());

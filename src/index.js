import path from 'path';
import gendiff from './treeBuilder.js';
import format from './formater/index.js';
import readData, { getExtension, readFile } from './parsers.js';

export default (filepath1, filepath2, formatter = 'stylish') => {
  const extension1 = getExtension(path.resolve(filepath1));
  const extension2 = getExtension(path.resolve(filepath2));
  const data1 = readData(readFile(path.resolve(filepath1)), extension1);
  const data2 = readData(readFile(path.resolve(filepath2)), extension2);
  const data = gendiff(data1, data2);
  return (format(data, formatter));
};

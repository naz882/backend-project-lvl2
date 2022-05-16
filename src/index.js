import path from 'path';
import gendiff from './treeBuilder.js';
import format from './formater/format.js';
import readData from './parsers.js';

export default (filepath1, filepath2, formatter) => {
  const data1 = readData(path.resolve(filepath1));
  const data2 = readData(path.resolve(filepath2));
  const data = gendiff(data1, data2);
  return (format(data, formatter));
};

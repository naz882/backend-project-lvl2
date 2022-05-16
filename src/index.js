import path from 'path';
import gendiff from './treeBuilder.js';
import format from './formater/index.js';
import readData from './parsers.js';

export default (filepath1, filepath2, formatter = 'stylish') => {
  const data1 = readData(path.resolve(filepath1));
  const data2 = readData(path.resolve(filepath2));
  console.log('SPARSILI DANNYE', data1, data2);
  const data = gendiff(data1, data2);
  console.log("ETO DANNYE", data);
  return (format(data, formatter));
};

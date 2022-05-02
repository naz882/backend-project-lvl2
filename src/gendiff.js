import path from 'path';
import _ from 'lodash';
import { readData } from './parsers.js';

export const gendiff = (pathfile1, pathfile2) => {
  const before = readData(path.resolve(pathfile1));
  const after = readData(path.resolve(pathfile2));
  const iter = (file1, file2) => {
    const keys = _.sortBy(_.union(_.keys(file1), _.keys(file2)));
    const result = keys.map((key) => {
      const value1 = file1[key];
      const value2 = file2[key];

      if (_.has(file1, key) && !_.has(file2, key)) {
        return {
          type: 'deleted', key, value1,
        };
      }
      if (!_.has(file1, key) && _.has(file2, key)) {
        return {
          type: 'added', key, value2,
        };
      }

      if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
        return {
          type: 'nested', key, nested: iter(value1, value2),
        };
      }

      if (value1 !== value2) {
        return {
          type: 'changed', key, value1, value2,
        };
      }

      return {
        type: 'not changed', key, value2,
      };
    });
    return result;
  };

  return iter(before, after);
};

export default gendiff;

import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';

const readData = (pathfile) => {
  const rawdata = readFileSync(pathfile);
  const data = JSON.parse(rawdata);
  return data;
};

export default (pathfile1, pathfile2) => {
  const data1 = readData(path.resolve(pathfile1));
  const data2 = readData(path.resolve(pathfile2));
  const result = {};
  Object.entries(data1).map(([key, value]) => {
    if (_.has(data2, key)) {
      if (value === data2[key]) {
        result[`  ${key}`] = value;
      } else {
        result[`- ${key}`] = value;
        result[`+ ${key}`] = data2[key];
      }
    } else {
      result[`- ${key}`] = value;
    }
  });
  for (const [key, value] of Object.entries(data2)) {
    if (!data1.hasOwnProperty(key)) {
      result[` ${key}`] = value;
    }
  }
  console.log(result);
};

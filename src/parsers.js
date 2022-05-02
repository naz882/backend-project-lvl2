import yaml from 'js-yaml';
import { readFileSync } from 'fs';

export const readData = (filename) => {
  const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
  const rawdata = readFileSync(filename);
  if (extension == 'yaml' || extension == 'yml') {
    return yaml.load(rawdata);
  }
  return JSON.parse(rawdata);
};

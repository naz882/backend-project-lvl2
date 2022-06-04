import yaml from 'js-yaml';
import { readFileSync } from 'fs';

export const getExtension = (filename) => {
  const extension = filename.substring(filename.lastIndexOf('.') + 1, filename.length);
  return extension;
};

export const readFile = (filename) => readFileSync(filename);

export default (file, extension) => {
  switch (extension) {
    case 'yml':
    case 'yaml':
      return yaml.load(file);
    case 'json':
    default:
      return JSON.parse(file);
  }
};

const primer = () => {};

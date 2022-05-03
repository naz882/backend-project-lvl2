import stylish from './stylish';
import plain from './plain';
import json from './json';

export default (data, format) => {
  if (format === 'stylish') {
    return stylish(data);
  }
  if (format === 'plain') {
    return plain(data);
  }
  if (format === 'json') {
    return json(data);
  }
  return stylish(data);
};

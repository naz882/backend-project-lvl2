import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

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

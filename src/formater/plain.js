import _ from 'lodash';

const collectionAssign = (keyCollection, key) => {
  if (_.isEmpty(keyCollection)) {
    return key;
  }
  return `${keyCollection}.${key}`;
};

const checkValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return value;
  }
  return value;
};
export default (collection) => {
  const iter = (col, keyCollection) => {
    const result = col.flatMap((node) => {
      const {
        type, key, value1, value2, nested,
      } = node;
      const newKeyCollection = collectionAssign(keyCollection, key);
      const processedValue1 = checkValue(value1);
      const processedValue2 = checkValue(value2);

      if (type === 'changed') {
        return `Property '${newKeyCollection}' was updated. From ${processedValue1} to ${processedValue2}`;
      }
      if (type === 'deleted') {
        return `Property '${newKeyCollection}' was removed`;
      }
      if (type === 'added') {
        return `Property '${newKeyCollection}' was added with value: ${processedValue2}`;
      }

      if (type === 'nested') {
        return iter(nested, newKeyCollection);
      }
      return null;
    });
    return result;
  };

  const lines = iter(collection, '');
  const result = [];
  /* eslint-disable-next-line */
  for (const line of lines) {
    if (line !== null) {
      result.push(line);
    }
  }
  return result.join('\n');
};

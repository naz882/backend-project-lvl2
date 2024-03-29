import _ from 'lodash';

const stringify = (value, depth1, replacer = ' ', spacesCount = 4) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, depth1);
};

const stylish = (collection) => {
  const iter = (col, depth) => {
    const result = col.flatMap((node) => {
      const replacer = ' ';
      const spaceCount = 4;
      const indentSize = depth * spaceCount;
      const currentIndent = replacer.repeat(indentSize - 2);
      const bracketIndent = replacer.repeat(indentSize);
      const {
        type, key, value1, value2, nested,
      } = node;
      if (type === 'not changed') {
        return `${currentIndent}  ${key}: ${stringify(value2, depth + 1)}`;
      }

      if (type === 'changed') {
        return [
          `${currentIndent}- ${key}: ${stringify(value1, depth + 1)}`,
          `${currentIndent}+ ${key}: ${stringify(value2, depth + 1)}`,
        ];
      }
      if (type === 'deleted') {
        return `${currentIndent}- ${key}: ${stringify(value1, depth + 1)}`;
      }
      if (type === 'added') {
        return `${currentIndent}+ ${key}: ${stringify(value2, depth + 1)}`;
      }

      if (type === 'nested') {
        return [
          `${currentIndent}  ${key}: {`,
          ...iter(nested, depth + 1),
          `${bracketIndent}}`,
        ];
      }
      return null;
    });
    return result;
  };

  const lines = iter(collection, 1);
  return ['{', ...lines, '}'];
};

export default (data) => stylish(data).join('\n');

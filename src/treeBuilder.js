import _ from 'lodash';

const treeBuilder = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.has(data1, key) && !_.has(data2, key)) {
      return {
        type: 'deleted', key, value1,
      };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return {
        type: 'added', key, value2,
      };
    }

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        type: 'nested', key, nested: treeBuilder(value1, value2),
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

export default treeBuilder;

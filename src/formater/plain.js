export const plain = (collection) => {
    const iter = (col, keyCollection) => {
        const result = col.flatMap((node) => {
            const {type, key, value1, value2, nested} = node;
            keyCollection = `${keyCollection}.${key}`;

            if (type === 'changed') {
                return `Property ${keyCollection} was updated. From ${value1} to ${value2}`;
            }
            if (type === 'deleted') {
                return `Property ${keyCollection} was removed`;
            }
            if (type === 'added') {
                return `Property ${keyCollection} was added with value: ${value2}`;
            }

            if (type === 'nested') {
                return iter(nested, keyCollection);
            }
        

    });
    return result;}
    
    const lines = iter(collection, '');
    console.log(lines);

}

export default plain;
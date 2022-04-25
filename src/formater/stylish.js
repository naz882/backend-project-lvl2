
const stringify = () => {

}

export const stylish = (collection) => {
    const iter = (col, depth) => {
        const result = col.flatMap((node) => {
            const indentSize = depth * 1;
            const currentIndent = ' '.repeat(indentSize);
            const bracketIndent = ' '.repeat(indentSize - 1);
            const {type, key, value1, value2, nested} = node;
            if (type === 'not changed') {
                return `${currentIndent} ' - ' ${key} : ${value2}`
            }

            if (type === 'changed') {
                return [
                    `${currentIndent} ' - ' ${key} : ${value1}`,
                    `${currentIndent} ' + ' ${key} : ${value2}`,
                ]
            }
            if (type === 'deleted') {
                return `${currentIndent} ' - ' ${key} : ${value1}`
            }
            if (type === 'added') {
                return `${currentIndent} ' + ' ${key} : ${value2}`
            }

            if (type === 'nested') {
                return [
                    `${currentIndent} ${key} : {`,
                    ...iter(nested, depth + 1),
                    `${bracketIndent}}`,
                ];
            }
        

    });
    return result;}
    
    const lines = iter(collection, 1);
    console.log(['{', ...lines, '}']);

};

export default (data) => stylish(data);
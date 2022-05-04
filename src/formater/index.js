import gendiff from '../gendiff.js';
import format from './format.js';

export default (filepath1, filepath2, formatter) => {
    const data = gendiff(filepath1, filepath2);
    console.log(format(data, formatter));
}
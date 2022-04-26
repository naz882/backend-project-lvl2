import stylish from './stylish.js';
import plain from './plain.js';

export const format = (data, format) => {
    if (format === 'stylish') {
        return stylish(data);
    }
    if (format === 'plain') {
        return plain(data);
    }
}

export default format;
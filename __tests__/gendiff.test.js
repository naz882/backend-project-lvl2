import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/gendiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('general', () => {
  const result = {
    '  host': 'hexlet.io',
    '- timeout': 50,
    '+ timeout': 20,
    '- proxy': '123.234.53.22',
    '- follow': false,
    ' verbose': true,
  };
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(result);
});

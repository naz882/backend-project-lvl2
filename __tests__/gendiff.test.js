import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';
import format from '../src/formater/format';
import gendiff from '../src/gendiff';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('general', () => {
  const pathResult = getFixturePath('result_stylish.txt');
  const readResult = fs.readFileSync(pathResult, 'utf-8');
  const whatExpect = format(gendiff(getFixturePath('nested1.json'), getFixturePath('nested2.json')), 'stylish');
  expect(whatExpect).toEqual(readResult);
});

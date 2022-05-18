import { fileURLToPath } from 'url';
import fs from 'fs';
import path, { dirname } from 'path';
import format from '../src/formater/index.js';
import gendiff from '../src/treeBuilder.js';
import readData, { readFile } from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const JSONdata1 = readData(readFile(path.resolve(getFixturePath('nested1.json'))), 'json');
const JSONdata2 = readData(readFile(path.resolve(getFixturePath('nested2.json'))), 'json');
const YAMLdata1 = readData(readFile(path.resolve(getFixturePath('nested1.yaml'))), 'yaml');
test('stylish', () => {
  const pathResult = getFixturePath('result_stylish.txt');
  const readResult = fs.readFileSync(pathResult, 'utf-8');
  const whatExpect = format(gendiff(JSONdata1, JSONdata2), 'stylish');
  expect(whatExpect).toEqual(readResult);
  const whatExpect2 = format(gendiff(YAMLdata1, JSONdata2), 'stylish');
  expect(whatExpect2).toEqual(readResult);
});

test('plain', () => {
  const pathResult = getFixturePath('result_plain.txt');
  const readResult = fs.readFileSync(pathResult, 'utf-8');
  const whatExpect = format(gendiff(JSONdata1, JSONdata2), 'plain');
  expect(whatExpect).toEqual(readResult);
  const whatExpect2 = format(gendiff(YAMLdata1, JSONdata2), 'plain');
  expect(whatExpect2).toEqual(readResult);
});

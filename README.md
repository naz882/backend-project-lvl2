# backend-project-lvl2

### Hexlet tests and linter status:
[![Test Coverage](https://api.codeclimate.com/v1/badges/361057a3711eafd5df23/test_coverage)](https://codeclimate.com/github/naz882/backend-project-lvl2/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/361057a3711eafd5df23/maintainability)](https://codeclimate.com/github/naz882/backend-project-lvl2/
[![Actions Status](https://github.com/naz882/backend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/naz882/backend-project-lvl2/actions)maintainability)

# Welcome to the project Gendiff
## Prerequisites
  Install Node.js 13v or higher.
  Install make utility.

## How to install
  1. Copy this repository to your computer.
  2. Type command "make install" to install it.
  3. Type commande "make publish" npm will publish to the public registry.
  3. Type command "npm link" to create symlink.

## About 
This program compares two files [.json, .yaml, .yml] and generate difference 

## Help
`gendiff -h

  Usage: gendiff [options]

  Compares two configuration files and shows a difference.

  Options:
    -V, --version        output the version number
    -h, --help           display help for command`

## Example
```
file1.json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
file2.json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}

gendiff filepath1.json filepath2.json

{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

[![asciicast](https://asciinema.org/a/72fPW0tM2XJ7Fjhcg6uB5MJxF.svg)](https://asciinema.org/a/72fPW0tM2XJ7Fjhcg6uB5MJxF)

## Example of complex structures .json and .yaml
[![asciicast](https://asciinema.org/a/u5736TqKzv4zZPQaIEZvHWZyV.svg)](https://asciinema.org/a/u5736TqKzv4zZPQaIEZvHWZyV)

## Example of plain format
```
gendiff --format plain filepath1.json filepath2.json

Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`
```
[![asciicast](https://asciinema.org/a/ajdAo7hifLMAERkuu3zKqV4hX.svg)](https://asciinema.org/a/ajdAo7hifLMAERkuu3zKqV4hX)
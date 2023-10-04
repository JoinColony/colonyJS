const { defaults } = require('ts-jest/presets');

module.exports = {
  ...defaults,
  rootDir: 'src',
  resolver: 'ts-jest-resolver',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'd.ts', 'tsx', 'node'],
};

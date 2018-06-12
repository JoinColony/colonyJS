// @flow
import BigNumber from 'bn.js';

const date = new Date(2018, 10, 13, 6, 30, 2, 137);

export const inputValues = {
  a: 1,
  b: 'foo',
  c: 2,
  d: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  e: true,
  f: date,
  g: 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ',
};

export const parsedInputValues = [
  1,
  '0x666f6f',
  2,
  '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  true,
  parseInt(date.setMilliseconds(0) / 1000, 10),
  '0xd082e403efc3a9b0d92f5a325274a2aaf823fefce13abae890cc140e2b84cb99',
];

export const outputValues = {
  a: 1,
  b: 'foo',
  c: 2,
  d: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  e: true,
  f: parseInt(date.setMilliseconds(0) / 1000, 10),
  g: '0xd082e403efc3a9b0d92f5a325274a2aaf823fefce13abae890cc140e2b84cb99',
};

export const parsedOutputValues = {
  a: 1,
  b: 'foo',
  c: new BigNumber(2),
  d: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  e: true,
  f: date,
  g: 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ',
};

export const valuesSpec = [
  ['a', 'number'],
  ['b', 'string'],
  ['c', 'bigNumber'],
  ['d', 'address'],
  ['e', 'boolean'],
  ['f', 'date'],
  ['g', 'ipfsHash'],
];

/* eslint-env jest */

import { areParamPairsEmpty, isInputEmpty } from '../modules/inputValidation';

describe('Input validation', () => {
  test('Empty method parameters are identified properly', () => {
    expect(areParamPairsEmpty(null)).toBe(true);
    expect(areParamPairsEmpty([])).toBe(true);
    expect(areParamPairsEmpty([['prop', 'string']])).toBe(false);
  });

  test('Empty input values are identified properly', () => {
    expect(isInputEmpty(null)).toBe(true);
    expect(isInputEmpty({})).toBe(true);
    expect(isInputEmpty({ prop: 'something' })).toBe(false);
  });
});

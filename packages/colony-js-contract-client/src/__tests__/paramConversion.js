/* eslint-env jest */
/* eslint-disable no-underscore-dangle,no-console */
import {
  convertInputValues,
  convertOutputValues,
} from '../modules/paramConversion';

import {
  inputValues,
  outputValues,
  parsedInputValues,
  parsedOutputValues,
  valuesSpec,
} from '../utils/mockValues';

describe('Parameter Conversion', () => {
  test('convertInputValues converts the respective values', () => {
    expect(convertInputValues(inputValues, valuesSpec)).toEqual(
      Object.values(parsedInputValues),
    );
  });

  test('convertOutputValues converts the respective values', () => {
    expect(convertOutputValues(outputValues, valuesSpec)).toEqual(
      parsedOutputValues,
    );
  });
});

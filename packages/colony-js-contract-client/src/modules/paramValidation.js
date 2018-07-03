/* @flow */

import isPlainObject from 'lodash.isplainobject';
import { makeAssert } from '@colony/colony-js-utils';
import { validateValueType } from './paramTypes';
import type { Params, Param } from '../flowtypes';

const defaultAssert = makeAssert('Parameter Validation');
type AssertionMethod = (assertion: boolean, reason: string) => any;

export const isBoolean = (value: any) => typeof value === 'boolean';

export const areParamPairsEmpty = (paramPairs: Params) =>
  paramPairs == null || (Array.isArray(paramPairs) && paramPairs.length === 0);

export const isInputEmpty = (input: any) =>
  input == null ||
  (isPlainObject(input) && Object.getOwnPropertyNames(input).length === 0);

export function validateValue(
  value: any,
  [name, type, defaultValue]: Param,
  assertValid?: AssertionMethod = defaultAssert,
) {
  let reason;
  let isValid = false;

  try {
    isValid = validateValueType(
      typeof value !== 'undefined' ? value : defaultValue,
      type,
    );
  } catch (error) {
    reason = error.message || error.toString();
  }

  return assertValid(
    Boolean(isValid),
    `Parameter "${name}" expected a value of type "${type}"${
      reason ? ` (${reason})` : ''
    }`,
  );
}

/**
 * Given parameters (as an object with named parameters, but potentially any
 * kind of invalid input), validate each parameter against the expected type
 * for this method, throwing vaidation errors or returning true.
 */
export function validateParams(
  params?: any,
  spec: Params,
  assertValid?: AssertionMethod = defaultAssert,
): boolean {
  if (areParamPairsEmpty(spec) && isInputEmpty(params)) {
    return true;
  }

  assertValid(isPlainObject(params), 'Expected parameters as an object');

  const inputValues = Object.assign({}, params);

  // Either the parameter name should exist in the inputValues,
  // or the parameter should have a default value.
  const missingParams = spec.filter(
    param =>
      !(
        Object.hasOwnProperty.call(inputValues, param[0]) || param.length === 3
      ),
  );

  assertValid(
    missingParams.length === 0,
    `Missing parameters: "${missingParams.map(([name]) => name).join(', ')}"`,
  );

  return spec.every(paramSpec =>
    validateValue(inputValues[paramSpec[0]], paramSpec, assertValid),
  );
}

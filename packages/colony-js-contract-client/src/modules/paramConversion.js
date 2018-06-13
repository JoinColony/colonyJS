// @flow
import { convertInputValue, convertOutputValue } from './paramTypes';
import type { Params } from '../flowtypes';

/**
 * Given input values for a contract method call, as well as their type
 * specifications, generate a list of parameters that contains the encoded
 * parameters.
 */
export function convertInputValues<T: Object>(
  inputValues: T,
  valuesSpec: Params,
) {
  return valuesSpec.map(([paramName, paramType, defaultValue]) =>
    convertInputValue(
      Object.hasOwnProperty.call(inputValues, paramName)
        ? inputValues[paramName]
        : defaultValue,
      paramType,
    ),
  );
}

/**
 * Given output values of a contract method call or a contract event, as well as
 * their type specifications, generate an object that consists of the converted
 * values with their respective types.
 */
export function convertOutputValues<T: Object>(
  outputValues: { [string | number]: any },
  valuesSpec: Params,
): T {
  return valuesSpec && valuesSpec.length
    ? // $FlowFixMe
      valuesSpec
        .map(([name, type]) => [
          name,
          convertOutputValue(outputValues[name], type),
        ])
        .reduce(
          (acc, [name, value]) => Object.assign(acc, { [name]: value }),
          {},
        )
    : // $FlowFixMe
      outputValues;
}

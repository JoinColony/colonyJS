// @flow
import { convertInputValue, convertOutputValue } from './paramTypes';
import type { Params } from '../flowtypes';

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

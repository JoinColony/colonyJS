// @flow
import { convertInputValue, convertOutputValue } from './paramTypes';
import type { Params } from '../flowtypes';

/**
 * Given input values for a contract method call, as well as their type
 * specifications, generate a list of parameters that contains the encoded
 * parameters.
 */
export function convertInputValues<InputTypes: Object>(
  inputValues: InputTypes,
  valuesSpec: Params,
): Array<any> {
  return valuesSpec.map(([paramName, paramType]) =>
    convertInputValue(inputValues[paramName], paramType),
  );
}

/**
 * Given output values of a contract method call or a contract event, as well as
 * their type specifications, generate an object that consists of the converted
 * values with their respective types.
 */
export function convertOutputValues<OutputTypes: Object>(
  outputValues: { [string | number]: any },
  valuesSpec: Params,
): OutputTypes {
  // If a length was provided (e.g. for event args), use that to find the value;
  // otherwise, use the supplied name

  const getValue = (name, index) =>
    outputValues.length ? outputValues[index] : outputValues[name];
  return valuesSpec && valuesSpec.length
    ? // $FlowFixMe
      valuesSpec
        .map(([name, type], index) => [
          name,
          convertOutputValue(getValue(name, index), type),
        ])
        .reduce(
          (acc, [name, value]) => Object.assign(acc, { [name]: value }),
          {},
        )
    : // $FlowFixMe
      outputValues;
}

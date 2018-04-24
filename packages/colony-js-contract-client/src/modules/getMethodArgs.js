/* @flow */

import { utf8ToHex } from 'web3-utils';

import type { ParamTypePairs, ParamTypes } from '../flowtypes';

import validate from './validate';

const parseParamsValue = (value: any, type: ParamTypes) => {
  switch (type) {
    case 'string':
      return utf8ToHex(value);
    default:
      return value;
  }
};

const parseParams = <Params: {}, MethodParams: ParamTypePairs>(
  params: Params,
  methodParams: MethodParams,
) =>
  methodParams.map(([paramName, paramType]) =>
    parseParamsValue(params[paramName], paramType),
  );

/**
 * Pure function
 * Given named parameters and contract method parameters, validate the
 * parameters and parse the arguments for the contract method.
 *
 * @param params - The params to call the contract method with, as an object
 * with named properties
 * @param methodParams - Name/parameter type pairs that the contract method
 * should accept
 * @returns {Array<any>} - The parsed arguments for the contract method call
 */
export default function getMethodArgs<
  Params: any,
  MethodParams: ParamTypePairs,
>(params: any | Params, methodParams: any | MethodParams): Array<any> {
  let args = [];

  if (methodParams && methodParams.length) {
    validate(params, methodParams);
    args = parseParams(params, methodParams);
  } else if (
    params != null &&
    typeof params === 'object' &&
    Object.getOwnPropertyNames(params).length
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Warning: getMethodArgs called with parameters for a method that does ' +
        'not accept parameters',
    );
  }

  return args;
}

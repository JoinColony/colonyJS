/* @flow */

import { utf8ToHex } from 'web3-utils';

import type { ParamTypePairs, ParamTypes } from '../flowtypes';

const parseParamsValue = (value: any, type: ParamTypes) =>
  type === 'string' ? utf8ToHex(value) : value;

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
 */
export default function getMethodArgs<
  Params: Object,
  MethodParams: ParamTypePairs,
>(params: Params, methodParams: MethodParams): Array<any> {
  let args = [];

  if (methodParams && methodParams.length) {
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

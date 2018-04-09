/* @flow */

import BigNumber from 'bn.js';
import { raceAgainstTimeout } from '@colony/colony-js-utils';
import type { CallFn } from '@colony/colony-js-adapter';

import { DEFAULT_CALL_OPTIONS } from '../constants';
import Validator from './Validator';
import ContractClient from './ContractClient';

import type { CallerDef, ParamTypePairs, ParamTypes } from '../types';

export default class Caller<
  Params: { [name: string]: * },
  ReturnValue,
  // eslint-disable-next-line
  IContractClient: ContractClient<*>
> extends Validator<Params> {
  callFn: CallFn<*, *>;
  client: IContractClient;
  returnValues: ParamTypePairs = [];
  static parseReturnValue(value: *, type: ParamTypes) {
    switch (type) {
      case 'number':
        return BigNumber.isBN(value) ? value.toNumber() : value;
      case 'address':
        this.checkValidAddress(value);
        return value;
      default:
        return value;
    }
  }
  // eslint-disable-next-line no-unused-vars
  parseReturn(valueOrValues: *, params: Params): ReturnValue {
    // It may be a single value or an array; treat it as an array
    const values = Array.isArray(valueOrValues)
      ? valueOrValues
      : [valueOrValues];
    if (this.returnValues.length) {
      const parsedValues = this.returnValues.map(([name, type], index) => {
        try {
          return {
            [name]: this.constructor.parseReturnValue(values[index], type),
          };
        } catch (error) {
          throw new Error(
            `Invalid return for ${name} of type ${type}:\n${error.message ||
              error}`,
          );
        }
      });
      // $FlowFixMe Object literal incompatible with ReturnValue; perhaps try $ObjMap?
      return Object.assign({}, ...parsedValues);
    }
    return valueOrValues;
  }
  constructor(client: IContractClient, def?: CallerDef) {
    const params = def && def.params ? def.params : [];
    super({ params });
    this.client = client;
    if (def) {
      const { callFn, returnValues } = def;
      this.callFn = callFn;
      this.returnValues = returnValues;
    }
  }
  async call(
    params: Params,
    { timeoutMs }: { timeoutMs: number } = DEFAULT_CALL_OPTIONS,
  ): Promise<ReturnValue> {
    if (typeof this.callFn !== 'function')
      throw new TypeError('Expected a call function for Caller');

    const args = this.getArgs(params);

    const values = await raceAgainstTimeout(this.callFn(...args), timeoutMs);

    return this.parseReturn(values, params);
  }
}

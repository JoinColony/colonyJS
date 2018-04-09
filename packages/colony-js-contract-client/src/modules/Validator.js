/* @flow */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import { utf8ToHex, isAddress } from 'web3-utils';

import type { ParamTypePairs, ParamTypes } from '../types';
import { NON_EXISTENT_ADDRESS } from '../constants';

export default class Validator<Params: { [name: string]: * }> {
  getArgsFn: ?(params: Params) => Array<any>;
  params: ParamTypePairs = [];
  static validateParam(key: string, type: ParamTypes, value: any): boolean {
    const message = `Parameter ${key} expected a value of type ${type}`;
    switch (type) {
      case 'address':
        assert(isAddress(value), message);
        break;
      case 'string':
        assert(typeof value === 'string' && value.length > 0, message);
        break;
      case 'number':
        assert(typeof value === 'number' || BigNumber.isBN(value), message);
        break;
      case 'boolean':
        assert(typeof value === 'boolean', message);
        break;
      default:
        throw new TypeError(`Parameter type ${type} not defined`);
    }
    return true;
  }
  constructor({ params = [] }: { params: ParamTypePairs } = {}) {
    this.params = params;
  }
  validate(params: Params): boolean {
    return this.params.every(([paramName, paramType]) =>
      this.constructor.validateParam(paramName, paramType, params[paramName]),
    );
  }
  static checkValidAddress(address: string): boolean {
    if (!isAddress(address)) throw new Error('Invalid address');
    if (address === NON_EXISTENT_ADDRESS) throw new Error('Undefined address');
    return true;
  }
  static parseParamsValue(value: any, type: ParamTypes) {
    switch (type) {
      case 'string':
        return utf8ToHex(value);
      default:
        return value;
    }
  }
  parseParams(params: Params) {
    return this.params.map(([paramName, paramType]) =>
      this.constructor.parseParamsValue(params[paramName], paramType),
    );
  }
  defaultGetArgs(params: Params) {
    let args = [];

    if (this.params.length) {
      this.validate(params);
      args = this.parseParams(params);
    }

    return args;
  }
  getArgs(params: Params): Array<any> {
    return this.getArgsFn
      ? this.getArgsFn(params)
      : this.defaultGetArgs(params);
  }
}

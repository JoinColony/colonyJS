/* @flow */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import { utf8ToHex, isAddress, isHex } from 'web3-utils';

import type { ParamTypePairs, ParamTypes } from '../types';
import { NON_EXISTENT_ADDRESS } from '../constants';

export default class Validator<Params: { [name: string]: * }> {
  static params: ParamTypePairs = [];
  static validateMultisig(value: any): boolean {
    return (
      typeof value === 'object' &&
      ['sigV', 'sigR', 'sigS'].every(
        propName =>
          Array.isArray(value[propName]) &&
          value[propName].length === 2 &&
          value[propName].every(sig => isHex(sig)),
      )
    );
  }
  static validateParam(key: string, type: ParamTypes, value: *): boolean {
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
      case 'multisig':
        assert(this.constructor.validateMultisig(value), message);
        break;
      default:
        throw new TypeError(`Parameter type ${type} not defined`);
    }
    return true;
  }
  static validate(params: Params): boolean {
    return this.params.every(([paramName, paramType]) =>
      this.validateParam(paramName, paramType, params[paramName]),
    );
  }
  static checkValidAddress(address: string): boolean {
    if (!isAddress(address)) throw new Error('Invalid address');
    if (address === NON_EXISTENT_ADDRESS) throw new Error('Undefined address');
    return true;
  }
  static parseParamsValue(value: *, type: ParamTypes) {
    switch (type) {
      case 'string':
        return utf8ToHex(value);
      default:
        return value;
    }
  }
  static parseParams(params: Params) {
    return this.params.map(([paramName, paramType]) =>
      this.parseParamsValue(params[paramName], paramType),
    );
  }
  static getArgs(params: Params): Array<*> {
    let args = [];

    if (this.params.length) {
      this.validate(params);
      args = this.parseParams(params);
    }

    return args;
  }
}

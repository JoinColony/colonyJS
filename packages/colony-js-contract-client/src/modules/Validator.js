/* @flow */

import assert from 'browser-assert';
import BigNumber from 'bn.js';
import { utf8ToHex, isAddress } from 'web3-utils';

import type { ParamTypePairs, ParamTypes } from '../types';

export default class Validator<Params: { [name: string]: * }> {
  static params: ParamTypePairs = [];
  static validateParam(key: string, type: ParamTypes, value: *): boolean {
    const message = `Parameter ${key} expected a value of type ${type}`;
    switch (type) {
      case 'address':
        assert(isAddress(value), message);
        break;
      case 'string':
        assert(typeof value === 'string' && value.length > 0, message);
        break;
      case 'int':
        assert(typeof value === 'number', message);
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
  static validate(params: Params): boolean {
    return this.params.every(([paramName, paramType]) =>
      this.validateParam(paramName, paramType, params[paramName]),
    );
  }
  static parseParamsValue(value: *, type: ParamTypes) {
    switch (type) {
      case 'string':
      case 'address':
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

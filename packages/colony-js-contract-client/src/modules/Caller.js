/* @flow */

import utils from '@colony/colony-js-utils';

import { DEFAULT_TIMEOUT } from '../constants';
import Validator from './Validator';
import ContractClient from './ContractClient';

export default class Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  IContractClient: ContractClient<*>
> extends Validator<Params> {
  +_call: *;
  client: IContractClient;
  constructor(client: IContractClient) {
    super();
    this.client = client;
  }
  // eslint-disable-next-line no-unused-vars
  static parseReturn(values: *, params: Params): ReturnValue {
    throw new TypeError(
      'Caller.parseReturn should be extended in a derived class',
    );
  }
  async call(
    params: Params,
    { timeoutMs = DEFAULT_TIMEOUT }: { timeoutMs: number } = {},
  ): Promise<ReturnValue> {
    this.validate(params);
    const args =
      typeof this.constructor.parseParams === 'function'
        ? this.constructor.parseParams(params)
        : [];
    const values = await utils.raceAgainstTimeout(
      this._call(...args),
      timeoutMs,
    );
    return this.constructor.parseReturn(values, params);
  }
}

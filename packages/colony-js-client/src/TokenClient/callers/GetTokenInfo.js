/* @flow */
/* eslint-disable no-underscore-dangle */

import ContractClient from '@colony/colony-js-contract-client';

import type TokenClient from '../index';

type InputValues = {};
type CallResult = [string, string, number];

export default class GetTokenInfo extends ContractClient.Caller<
  InputValues,
  *,
  TokenClient,
> {
  constructor(params: *) {
    super({
      functionName: 'getTokenInfo',
      input: [],
      output: [
        ['name', 'string'],
        ['symbol', 'string'],
        ['decimals', 'number'],
      ],
      ...params,
    });
  }
  async call() {
    const name = await this.client.call('name', []);
    const symbol = await this.client.call('symbol', []);
    const decimals = await this.client.call('decimals', []);

    const callResult: CallResult = [name, symbol, decimals];

    return this.convertOutputValues(callResult);
  }
}

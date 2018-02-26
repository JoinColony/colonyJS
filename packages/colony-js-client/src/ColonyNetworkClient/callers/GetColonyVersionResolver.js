/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type Params = { version: number };
type ReturnValue = { address: string };
type FnReturn = [string];

export default class GetColonyById extends ContractClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static get schema(): {} {
    return {
      version: {
        type: 'number',
        min: 0,
      },
    };
  }
  static parseParams({ version }: Params) {
    return [version];
  }
  static parseReturn([address]: FnReturn): ReturnValue {
    return { address };
  }
  get _call(): number => Promise<FnReturn> {
    return this.client.contract.functions.getColonyVersionResolver;
  }
}

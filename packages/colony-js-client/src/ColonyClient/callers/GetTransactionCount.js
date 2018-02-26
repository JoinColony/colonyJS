/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type ReturnValue = { count: number };
type FnReturn = [number];

export default class GetTransactionCount extends ContractClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static parseReturn([count]: FnReturn): ReturnValue {
    return { count };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getTransactionCount;
  }
}

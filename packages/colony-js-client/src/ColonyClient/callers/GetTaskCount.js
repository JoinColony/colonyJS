/* @flow */

import ContractClient from '@colony/colony-js-contract-client';
import type BigNumber from 'bn.js';

import type ColonyClient from '../index';

type ReturnValue = { count: number };
type FnReturn = [BigNumber];

export default class GetColonyCount extends ContractClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static parseReturn([count]: FnReturn): ReturnValue {
    return { count: count.toNumber() };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getTaskCount;
  }
}

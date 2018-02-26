/* @flow */

import { toUtf8Bytes } from 'ethers-utils';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type Params = { key: string };
type ReturnValue = { address: string };
type FnReturn = [string];

export default class GetColonyByKey extends ContractClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static get schema(): {} {
    return {
      id: {
        key: 'string',
      },
    };
  }
  static parseParams({ key }: Params) {
    return [toUtf8Bytes(key)];
  }
  static parseReturn([address]: FnReturn): ReturnValue {
    return { address };
  }
  get _call(): string => Promise<FnReturn> {
    return this.client.contract.functions.getColony;
  }
}

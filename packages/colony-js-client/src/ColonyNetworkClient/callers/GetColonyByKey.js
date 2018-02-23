/* @flow */

import { utf8ToHex } from 'web3-utils';

import ColonyNetworkClient from '../index';

type Params = { key: string };
type ReturnValue = { address: string };
type FnReturn = [string];

export default class GetColonyByKey extends ColonyNetworkClient.Caller<
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
    return [utf8ToHex(key)];
  }
  static parseReturn([address]: FnReturn): ReturnValue {
    return { address };
  }
  get _call(): string => Promise<FnReturn> {
    return this.client.contract.functions.getColony;
  }
}

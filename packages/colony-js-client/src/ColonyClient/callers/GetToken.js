/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type ReturnValue = { address: string };
type FnReturn = [string];

export default class GetToken extends ContractClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static parseReturn([address]: FnReturn): ReturnValue {
    return { address };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getToken;
  }
}

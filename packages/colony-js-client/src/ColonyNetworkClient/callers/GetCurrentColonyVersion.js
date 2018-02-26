/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type ReturnValue = { version: number };
type FnReturn = [number];

export default class GetCurrentColonyVersion extends ContractClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static parseReturn([version]: FnReturn): ReturnValue {
    return { version };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getCurrentColonyVersion;
  }
}

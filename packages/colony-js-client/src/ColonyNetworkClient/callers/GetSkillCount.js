/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type ReturnValue = { count: number };
type FnReturn = [number];

export default class GetSkillCount extends ContractClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static parseReturn([count]: FnReturn): ReturnValue {
    return { count };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getSkillCount;
  }
}

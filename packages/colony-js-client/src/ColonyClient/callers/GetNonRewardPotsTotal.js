/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { ADDRESS } from '../../schemaDefinitions';

type Params = { address: string };
type ReturnValue = { total: number };
type FnReturn = [number];

export default class GetNonRewardPotsTotal extends ContractClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static get schema(): {} {
    return ADDRESS;
  }
  static parseParams({ address }: Params) {
    return [address];
  }
  static parseReturn([total]: FnReturn): ReturnValue {
    return { total };
  }
  get _call(): string => Promise<FnReturn> {
    return this.client.contract.functions.getNonRewardPotsTotal;
  }
}

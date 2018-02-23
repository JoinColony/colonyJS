/* @flow */

import ColonyClient from '../index';
import { ADDRESS } from '../../schemaDefinitions';

type Params = { address: string };
type ReturnValue = { total: number };
type FnReturn = [number];

export default class GetNonRewardPotsTotal extends ColonyClient.Caller<
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

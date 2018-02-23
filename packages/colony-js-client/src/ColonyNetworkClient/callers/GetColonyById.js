/* @flow */

import ColonyNetworkClient from '../index';

type Params = { id: number };
type ReturnValue = { address: string };
type FnReturn = [string];

export default class GetColonyById extends ColonyNetworkClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static get schema(): {} {
    return {
      id: {
        type: 'number',
        min: 1,
      },
    };
  }
  static parseParams({ id }: Params) {
    return [id];
  }
  static parseReturn([address]: FnReturn): ReturnValue {
    return { address };
  }
  get _call(): number => Promise<FnReturn> {
    return this.client.contract.functions.getColonyAt;
  }
}

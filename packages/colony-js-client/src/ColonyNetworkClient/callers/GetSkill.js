/* @flow */

import ColonyNetworkClient from '../index';

type Params = { id: number };
type ReturnValue = { nParents: number, nChildren: number };
type FnReturn = [number, number];

export default class GetSkill extends ColonyNetworkClient.Caller<
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
  static parseReturn([nParents, nChildren]: FnReturn): ReturnValue {
    return { nParents, nChildren };
  }
  get _call(): number => Promise<FnReturn> {
    return this.client.contract.functions.getSkill;
  }
}

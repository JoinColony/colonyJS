/* @flow */

import ColonyNetworkClient from '../index';

type Params = { id: number };
type ReturnValue = {
  amount: number,
  colony: string,
  nPreviousUpdates: number,
  nUpdates: number,
  skillId: number,
  user: string,
};
type FnReturn = [string, number, number, string, number, number];

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
  static parseReturn([
    user,
    amount,
    skillId,
    colony,
    nUpdates,
    nPreviousUpdates,
  ]: FnReturn): ReturnValue {
    return {
      amount,
      colony,
      nPreviousUpdates,
      nUpdates,
      skillId,
      user,
    };
  }
  get _call(): number => Promise<FnReturn> {
    return this.client.contract.functions.getReputationUpdateLogEntry;
  }
}

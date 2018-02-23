/* @flow */

import ColonyClient from '../index';

type ReturnValue = { count: number };
type FnReturn = [number];

export default class GetColonyCount extends ColonyClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static parseReturn([count]: FnReturn): ReturnValue {
    return { count };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getTaskCount;
  }
}

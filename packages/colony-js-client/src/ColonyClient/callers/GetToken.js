/* @flow */

import ColonyClient from '../index';

type ReturnValue = { token: string };
type FnReturn = [string];

export default class GetToken extends ColonyClient.Caller<
  null,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static parseReturn([token]: FnReturn): ReturnValue {
    return { token };
  }
  get _call(): () => Promise<FnReturn> {
    return this.client.contract.functions.getToken;
  }
}

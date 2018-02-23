/* @flow */

import ColonyNetworkClient from '../index';

type ReturnValue = { version: number };
type FnReturn = [number];

export default class GetCurrentColonyVersion extends ColonyNetworkClient.Caller<
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

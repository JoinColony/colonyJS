/* @flow */

import ColonyClient from '../index';

import { TOKEN } from '../../schemaDefinitions';

type Params = { token: string };
type EventHandlers = {};

export default class ClaimColonyFunds extends ColonyClient.Sender<
  Params,
  EventHandlers,
  ColonyClient,
> {
  static get schema(): {} {
    return TOKEN;
  }
  static parseParams({ token }: Params = {}) {
    return [token];
  }
  get _estimate(): string => * {
    return this.client.contract.estimate.claimColonyFunds;
  }
  get _send(): string => * {
    return this.client.contract.functions.claimColonyFunds;
  }
}

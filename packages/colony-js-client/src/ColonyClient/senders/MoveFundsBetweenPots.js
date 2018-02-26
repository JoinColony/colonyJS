/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { TOKEN } from '../../schemaDefinitions';

type Params = {
  fromPot: number,
  toPot: number,
  amount: number,
  token: string,
};
type EventHandlers = {};

export default class MoveFundsBetweenPots extends ContractClient.Sender<
  Params,
  EventHandlers,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      fromPot: {
        type: 'number',
        min: 1,
      },
      toPot: {
        type: 'number',
        min: 1,
      },
      amount: {
        type: 'number',
        min: 0,
      },
      ...TOKEN,
    };
  }
  static parseParams({ fromPot, toPot, amount, token }: Params = {}) {
    return [fromPot, toPot, amount, token];
  }
  _estimate(): (number, number, number, string) => * {
    return this.client.contract.estimate.moveFundsBetweenPots;
  }
  _send(): (number, number, number, string) => * {
    return this.client.contract.functions.moveFundsBetweenPots;
  }
}

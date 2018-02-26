/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type Params = { salt: string, value: number };
type EventData = {};

export default class GenerateSecret extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      salt: {
        type: 'string',
      },
      value: {
        type: 'number',
      },
    };
  }
  static parseParams({ salt, value }: Params) {
    return [salt, value];
  }
  get _send(): (string, number) => * {
    return this.client.contract.functions.generateSecret;
  }
  get _estimate(): (string, number) => * {
    return this.client.contract.estimate.generateSecret;
  }
}

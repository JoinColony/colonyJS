/* @flow */

import { toUtf8Bytes } from 'ethers-utils';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyNetworkClient from '../index';

type Params = { key: string, newVersion: number };
type EventData = {};

export default class UpgradeColony extends ContractClient.Sender<
  Params,
  EventData,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static get schema(): {} {
    return {
      key: {
        type: 'string',
        minLength: 3,
      },
      newVersion: {
        type: 'number',
        min: 0,
      },
    };
  }
  static parseParams({ key, newVersion }: Params) {
    return [toUtf8Bytes(key), newVersion];
  }
  get _estimate(): (string, number) => * {
    return this.client.contract.estimate.upgradeColony;
  }
  get _send(): (string, number) => * {
    return this.client.contract.functions.upgradeColony;
  }
}

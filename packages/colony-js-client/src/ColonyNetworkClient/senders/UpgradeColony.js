/* @flow */

import { utf8ToHex } from 'web3-utils';

import ColonyNetworkClient from '../index';

type Params = { key: string, newVersion: number };
type EventData = {};

export default class UpgradeColony extends ColonyNetworkClient.Sender<
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
    return [utf8ToHex(key), newVersion];
  }
  get _estimate(): (string, number) => * {
    return this.client.contract.estimate.upgradeColony;
  }
  get _send(): (string, number) => * {
    return this.client.contract.functions.upgradeColony;
  }
}

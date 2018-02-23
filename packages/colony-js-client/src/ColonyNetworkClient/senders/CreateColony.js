/* @flow */

import type { EventHandlers } from '@colony/colony-js-adapter';
import type BigNumber from 'bn.js';
import { utf8ToHex } from 'web3-utils';

import ColonyNetworkClient from '../index';

type Params = { key: string };
type EventData = { colonyId: number };

export default class CreateColony extends ColonyNetworkClient.Sender<
  Params,
  EventData,
  ColonyNetworkClient,
> {
  static get schema(): {} {
    return {
      key: {
        type: 'string',
        minLength: 3,
      },
    };
  }
  static parseParams({ key }: Params) {
    return [utf8ToHex(key)];
  }
  static get eventHandlers(): EventHandlers {
    return {
      ColonyAdded({ id }: { id: BigNumber }) {
        return {
          colonyId: id.toNumber(),
        };
      },
    };
  }
  get _estimate(): string => * {
    return this.client.contract.estimate.createColony;
  }
  get _send(): string => * {
    return this.client.contract.functions.createColony;
  }
}

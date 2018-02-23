/* @flow */

import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';
import type { EventHandlers } from '@colony/colony-js-adapter';

import ColonyClient from '../index';

type Params = {
  destination: string,
  value: number,
  data: string,
};
type EventData = {
  transactionId: number,
};

export default class SubmitTransaction extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      destination: {
        type: 'string',
        format: 'address',
      },
      value: {
        type: 'number',
      },
      data: {
        type: 'string',
      },
    };
  }
  static parseParams({ destination, value, data }: Params) {
    return [destination, value, utf8ToHex(data)];
  }
  static get eventHandlers(): EventHandlers {
    return {
      Confirmed({ transactionId }: { transactionId: BigNumber }) {
        return {
          transactionId: transactionId.toNumber(),
        };
      },
    };
  }
  get _send(): (string, number, string) => * {
    return this.client.contract.functions.submitTransaction;
  }
  get _estimate(): (string, number, string) => * {
    return this.client.contract.estimate.submitTransaction;
  }
}

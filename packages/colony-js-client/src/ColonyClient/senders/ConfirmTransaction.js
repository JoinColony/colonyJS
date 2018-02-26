/* @flow */

import type BigNumber from 'bn.js';
import type { EventHandlers } from '@colony/colony-js-adapter';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

import { ROLES } from '../../constants';
import { ROLE, TRANSACTION_ID } from '../../schemaDefinitions';

type Params = { transactionId: number, role: string };
type EventData = {
  transactionId: number,
};

export default class ConfirmTransaction extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      ...TRANSACTION_ID,
      ...ROLE,
    };
  }
  static parseParams({ transactionId, role }: Params) {
    return [transactionId, ROLES[role]];
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
  get _send(): (number, number) => * {
    return this.client.contract.functions.confirmTransaction;
  }
  get _estimate(): (number, number) => * {
    return this.client.contract.estimate.confirmTransaction;
  }
}

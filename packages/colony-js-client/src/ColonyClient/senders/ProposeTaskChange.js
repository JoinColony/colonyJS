/* @flow */

import type BigNumber from 'bn.js';
import { toUtf8Bytes } from 'ethers-utils';
import type { EventHandlers } from '@colony/colony-js-adapter';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { ROLES } from '../../constants';
import { ROLE } from '../../schemaDefinitions';

type Params = { data: string, value: number, role: string };
type EventData = { transactionId: number };

export default class ProposeTaskChange extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      data: {
        type: 'string',
      },
      value: {
        type: 'number',
      },
      ...ROLE,
    };
  }
  static parseParams({ data, value, role }: Params) {
    return [toUtf8Bytes(data), value, ROLES[role]];
  }
  static get eventHandlers(): EventHandlers {
    return {
      Submission({ transactionId }: { transactionId: BigNumber }) {
        return {
          transactionId: transactionId.toNumber(),
        };
      },
    };
  }
  get _estimate(): (string, number, number) => * {
    return this.client.contract.estimate.proposeTaskChange;
  }
  get _send(): (string, number, number) => * {
    return this.client.contract.functions.proposeTaskChange;
  }
}

/* @flow */

import type BigNumber from 'bn.js';
import { utf8ToHex } from 'web3-utils';
import type { EventHandlers } from '@colony/colony-js-adapter';

import ColonyClient from '../index';
import { ROLES } from '../../constants';
import { ROLE } from '../../schemaDefinitions';

type Params = { data: string, value: number, role: string };
type EventData = { transactionId: number };

export default class ProposeTaskChange extends ColonyClient.Sender<
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
    return [utf8ToHex(data), value, ROLES[role]];
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

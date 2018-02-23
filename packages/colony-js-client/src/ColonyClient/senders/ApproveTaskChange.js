/* @flow */

import ColonyClient from '../index';
import { ROLE } from '../../schemaDefinitions';
import { ROLES } from '../../constants';

type Params = { transactionId: number, role: string };
type EventData = {};

export default class ApproveTaskChange extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      transactionId: {
        type: 'number',
        min: 1,
      },
      ...ROLE,
    };
  }
  static parseParams({ transactionId, role }: Params) {
    return [transactionId, ROLES[role]];
  }
  get _send(): (number, number) => * {
    return this.client.contract.functions.approveTaskChange;
  }
  get _estimate(): (number, number) => * {
    return this.client.contract.estimate.approveTaskChange;
  }
}

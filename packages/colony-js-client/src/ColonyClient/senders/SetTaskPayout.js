/* @flow */

// TODO should probably be using BigBumber
import type BigNumber from 'bn.js';

import ColonyClient from '../index';
import { ROLES } from '../../constants';
import { ROLE, TASK_ID, TOKEN, AMOUNT_POSITIVE } from '../../schemaDefinitions';

type Params = { taskId: number, amount: number, role: string, token: string };
type EventData = {};

export default class SetTaskPayout extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      ...AMOUNT_POSITIVE,
      ...ROLE,
      ...TASK_ID,
      ...TOKEN,
    };
  }
  static parseParams({ taskId, amount, role, token }: Params) {
    return [taskId, ROLES[role], amount, token];
  }
  get _send(): (number, number, string, number) => * {
    return this.client.contract.functions.setTaskPayout;
  }
  get _estimate(): (number, number, string, number) => * {
    return this.client.contract.estimate.setTaskPayout;
  }
}

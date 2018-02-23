/* @flow */

import { utf8ToHex } from 'web3-utils';

import ColonyClient from '../index';
import { ROLES } from '../../constants';
import { TASK_ID, ROLE } from '../../schemaDefinitions';

type Params = { taskId: number, role: string, secret: string };
type EventData = {};

export default class SubmitTaskWorkRating extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      secret: {
        type: 'string',
      },
      ...TASK_ID,
      ...ROLE,
    };
  }
  static parseParams({ taskId, role, secret }: Params) {
    return [taskId, ROLES[role], utf8ToHex(secret)];
  }
  get _send(): (number, number, string) => * {
    return this.client.contract.functions.submitTaskWorkRating;
  }
  get _estimate(): (number, number, string) => * {
    return this.client.contract.estimate.submitTaskWorkRating;
  }
}

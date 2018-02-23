/* @flow */

import { utf8ToHex } from 'web3-utils';

import ColonyClient from '../index';
import { TASK_ID } from '../../schemaDefinitions';

type Params = { taskId: number, deliverableHash: string };
type EventData = {};

export default class SubmitTaskDeliverable extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      deliverableHash: {
        type: 'string',
      },
      ...TASK_ID,
    };
  }
  static parseParams({ taskId, deliverableHash }: Params) {
    return [taskId, utf8ToHex(deliverableHash)];
  }
  get _estimate(): (number, string) => * {
    return this.client.contract.estimate.submitTaskDeliverable;
  }
  get _send(): (number, string) => * {
    return this.client.contract.functions.submitTaskDeliverable;
  }
}

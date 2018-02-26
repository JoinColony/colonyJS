/* @flow */

import { toUtf8Bytes } from 'ethers-utils';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { TASK_ID } from '../../schemaDefinitions';

type Params = { taskId: number, deliverableHash: string };
type EventData = {};

export default class SubmitTaskDeliverable extends ContractClient.Sender<
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
    return [taskId, toUtf8Bytes(deliverableHash)];
  }
  get _estimate(): (number, string) => * {
    return this.client.contract.estimate.submitTaskDeliverable;
  }
  get _send(): (number, string) => * {
    return this.client.contract.functions.submitTaskDeliverable;
  }
}

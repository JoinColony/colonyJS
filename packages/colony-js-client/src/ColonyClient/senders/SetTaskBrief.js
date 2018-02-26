/* @flow */

import { toUtf8Bytes } from 'ethers-utils';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { TASK_ID } from '../../schemaDefinitions';

type Params = { taskId: number, specificationHash: string };
type EventData = {};

export default class SetTaskBrief extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      specificationHash: {
        type: 'string',
      },
      ...TASK_ID,
    };
  }
  static parseParams({ specificationHash, taskId }: Params) {
    return [taskId, toUtf8Bytes(specificationHash)];
  }
  get _estimate(): (number, string) => * {
    return this.client.contract.estimate.setTaskBrief;
  }
  get _send(): (number, string) => * {
    return this.client.contract.functions.setTaskBrief;
  }
}

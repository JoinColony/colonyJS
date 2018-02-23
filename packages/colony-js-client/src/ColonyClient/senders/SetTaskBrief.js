/* @flow */

import { utf8ToHex } from 'web3-utils';

import ColonyClient from '../index';
import { TASK_ID } from '../../schemaDefinitions';

type Params = { taskId: number, specificationHash: string };
type EventData = {};

export default class SetTaskBrief extends ColonyClient.Sender<
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
    return [taskId, utf8ToHex(specificationHash)];
  }
  get _estimate(): (number, string) => * {
    return this.client.contract.estimate.setTaskBrief;
  }
  get _send(): (number, string) => * {
    return this.client.contract.functions.setTaskBrief;
  }
}

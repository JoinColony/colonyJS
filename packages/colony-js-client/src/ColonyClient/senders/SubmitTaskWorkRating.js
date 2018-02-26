/* @flow */

import { toUtf8Bytes } from 'ethers-utils';

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';
import { ROLES } from '../../constants';
import { TASK_ID, ROLE } from '../../schemaDefinitions';

type Params = { taskId: number, role: string, secret: string };
type EventData = {};

export default class SubmitTaskWorkRating extends ContractClient.Sender<
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
    return [taskId, ROLES[role], toUtf8Bytes(secret)];
  }
  get _send(): (number, number, string) => * {
    return this.client.contract.functions.submitTaskWorkRating;
  }
  get _estimate(): (number, number, string) => * {
    return this.client.contract.estimate.submitTaskWorkRating;
  }
}

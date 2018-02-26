/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

import { ROLES } from '../../constants';
import { TASK_ID, ROLE, TOKEN } from '../../schemaDefinitions';

type Params = { taskId: number, role: string, token: string };
type EventData = {};

export default class ClaimPayout extends ContractClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      ...TASK_ID,
      ...ROLE,
      ...TOKEN,
    };
  }
  static parseParams({ taskId, role, token }: Params) {
    return [taskId, ROLES[role], token];
  }
  get _send(): (number, number, string) => * {
    return this.client.contract.functions.claimPayout;
  }
  get _estimate(): (number, number, string) => * {
    return this.client.contract.estimate.claimPayout;
  }
}

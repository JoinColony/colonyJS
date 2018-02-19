/* @flow */

import { utf8ToHex } from 'web3-utils';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';
import beforeDueDate from '../validators/beforeDueDate';
import confirmTaskRoleIdentity from '../validators/confirmTaskRoleIdentity';
import taskExists from '../validators/taskExists';
import taskNotFinalized from '../validators/taskNotFinalized';
import workNotSubmitted from '../validators/workNotSubmitted';
import { ROLES } from '../../constants';

type Params = { taskId: number, deliverableHash: string };

export default class SubmitTaskDeliverable extends Sender<
  Params,
  {},
  ColonyClient,
> {
  constructor(client: ColonyClient) {
    super(client);
    Object.assign(this, {
      sendFn: this.client.contract.functions.submitTaskDeliverable,
      estimateFn: this.client.contract.estimate.submitTaskDeliverable,
    });
  }
  static parseParams({ taskId, deliverableHash }: Params = {}) {
    return [taskId, utf8ToHex(deliverableHash)];
  }
  async validate({ taskId }: Params) {
    const { client } = this;
    const task = await client.getTask({ taskId });
    return [
      taskExists(task, client),
      taskNotFinalized(task),
      beforeDueDate(task),
      workNotSubmitted(task),
      confirmTaskRoleIdentity(task, ROLES.WORKER, client),
    ];
  }
}

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

import { ROLES } from '../../constants';

// TODO update validation
export default class ClaimPayout extends Sender<
  { taskId: number, role: string, token: string },
  {},
  ColonyClient,
> {
  static parseParams({ taskId, role, token } = {}) {
    return [taskId, ROLES[role], token];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.claimPayout;
  }
  get estimateFn() {
    return this.client.contract.estimate.claimPayout;
  }
  async validate({ taskId, role, token }) {
    await this.client.checkForTask(taskId);
    this.client.constructor.checkIsRole(role);
    // TODO check token exists?
    this.client.constructor.checkIsAddress(token);
    return true;
  }
}

import Sender from './Sender';
import ColonyClient from '../ColonyClient';
import { ROLES } from '../../constants';

// TODO update validation
export default class ApproveTaskChange extends Sender<
  { transactionId: number, role: string },
  {},
  ColonyClient,
> {
  static parseParams({ transactionId, role } = {}) {
    return [transactionId, ROLES[role]];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
  get sendFn() {
    return this.client.contract.approveTaskChange;
  }
  get estimateFn() {
    return this.client.contract.estimate.approveTaskChange;
  }
  async validate({ role }) {
    // TODO check for transactionId
    return this.client.constructor.checkIsRole(role);
  }
}

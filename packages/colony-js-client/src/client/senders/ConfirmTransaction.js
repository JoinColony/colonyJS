import Sender from './Sender';
import ColonyClient from '../ColonyClient';

import { ROLES } from '../../constants';

// TODO update validation
export default class ConfirmTransaction extends Sender<
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
    return this.client.contract.confirmTransaction;
  }
  get estimateFn() {
    return this.client.contract.estimate.confirmTransaction;
  }
  async validate({ role }) {
    // TODO check for transactionId
    return this.client.constructor.checkIsRole(role);
  }
}

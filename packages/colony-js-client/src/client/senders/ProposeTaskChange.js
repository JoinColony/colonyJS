import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';
import { ROLES } from '../../constants';

export default class ProposeTaskChange extends Sender<
  { data: string, value: number, role: string },
  { transactionId: number },
  ColonyClient,
> {
  static parseParams({ data, value, role } = {}) {
    return [utf8ToHex(data), value, ROLES[role]];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {
      Submission({ transactionId }: { id: BigNumber }) {
        return {
          transactionId: transactionId.toNumber(),
        };
      },
    };
  }
  get sendFn() {
    return this.client.contract.proposeTaskChange;
  }
  get estimateFn() {
    return this.client.contract.estimate.proposeTaskChange;
  }
  async validate({ role }) {
    // TODO check other params
    this.client.constructor.checkIsRole(role);
    return true;
  }
}

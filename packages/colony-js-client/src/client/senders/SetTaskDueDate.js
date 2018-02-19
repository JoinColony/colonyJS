import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO define class
export default class SetTaskDueDate extends Sender<
  { specificationHash: string, skillId: number },
  { taskId: number },
  ColonyClient,
> {
  static parseParams({ specificationHash, skillId } = {}) {
    return [utf8ToHex(specificationHash), skillId];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {
      TaskAdded({ id }: { id: BigNumber }) {
        return {
          taskId: id.toNumber(),
        };
      },
    };
  }
  get sendFn() {
    return this.client.contract.makeTask;
  }
  get estimateFn() {
    return this.client.contract.estimate.makeTask;
  }
  async validate({ skillId }) {
    return this.client.checkForSkill(skillId);
  }
}

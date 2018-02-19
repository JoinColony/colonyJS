import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO update validation
export default class CreateTask extends Sender<
  { specificationHash: string, skillId: number },
  { taskId: number },
  ColonyClient,
> {
  static parseParams({ specificationHash, skillId } = {}) {
    return [utf8ToHex(specificationHash), skillId];
  }
  static get eventHandlers() {
    return {
      TaskAdded({ id }: { id: BigNumber }) {
        return {
          taskId: id.toNumber(),
        };
      },
    };
  }
  constructor(client) {
    super(client);
    Object.assign(this, {
      estimateFn: this.client.contract.estimate.makeTask,
      sendFn: this.client.contract.makeTask,
    });
  }
  async validate({ skillId }) {
    return this.client.checkForSkill(skillId);
  }
}

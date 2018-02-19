import { utf8ToHex } from 'web3-utils';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

export default class SetTaskBrief extends Sender<
  { taskId: number, specificationHash: string },
  { taskId: number },
  ColonyClient,
> {
  static parseParams({ specificationHash, skillId } = {}) {
    return [utf8ToHex(specificationHash), skillId];
  }
  constructor(client) {
    super(client);
    this.estimateFn = this.client.contract.estimate.setTaskBrief;
    this.sendFn = this.client.contract.functions.setTaskBrief;
  }
  async validate({ skillId }) {
    return this.client.checkForSkill(skillId);
  }
}

import type BigNumber from 'bn.js';

import Sender from './Sender';
import ColonyClient from '../ColonyClient';

// TODO update validation
export default class AddSkill extends Sender<
  { parentSkillId: number, skillId: number },
  { skillId: number },
  ColonyClient,
> {
  static parseParams({ parentSkillId, skillId } = {}) {
    return [parentSkillId, skillId];
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {
      SkillAdded({ id }: { id: BigNumber }) {
        return {
          skillId: id.toNumber(),
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
  async validate({ parentSkillId, skillId }) {
    await Promise.all([
      this.client.checkForSkill(parentSkillId),
      this.client.checkForSkill(skillId),
    ]);
    return !!(parentSkillId && skillId);
  }
}

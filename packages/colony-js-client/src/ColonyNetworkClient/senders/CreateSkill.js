/* @flow */

import type { EventHandlers } from '@colony/colony-js-adapter';
import type BigNumber from 'bn.js';

import ColonyNetworkClient from '../index';

type Params = { parentSkillId: number, skillId: number };
type EventData = { skillId: number };

export default class CreateSkill extends ColonyNetworkClient.Sender<
  Params,
  EventData,
  // eslint-disable-next-line
  ColonyNetworkClient
> {
  static get schema(): {} {
    return {
      parentSkillId: {
        type: 'number',
        min: 1,
      },
      skillId: {
        type: 'number',
        min: 1,
      },
    };
  }
  static parseParams({ skillId, parentSkillId }: Params) {
    return [parentSkillId, skillId];
  }
  static get eventHandlers(): EventHandlers {
    return {
      SkillAdded({ id }: { id: BigNumber }) {
        return {
          skillId: id.toNumber(),
        };
      },
    };
  }
  get _estimate(): (number, number) => * {
    return this.client.contract.estimate.addSkill;
  }
  get _send(): (number, number) => * {
    return this.client.contract.functions.addSkill;
  }
}

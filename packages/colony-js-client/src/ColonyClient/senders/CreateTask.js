/* @flow */

import type BigNumber from 'bn.js';
import { utf8ToHex } from 'web3-utils';
import type { EventHandlers } from '@colony/colony-js-adapter';

import ColonyClient from '../index';
import { SKILL_ID } from '../../schemaDefinitions';

type Params = { specificationHash: string, skillId: number };
type EventData = { taskId: number };

export default class CreateTask extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
  > {
  static get schema(): {} {
    return {
      specificationHash: {
        type: 'string',
        // TODO later: `format: 'hash'`?
      },
      ...SKILL_ID,
    };
  }
  static parseParams({ specificationHash, skillId }: Params) {
    return [utf8ToHex(specificationHash), skillId];
  }
  static get eventHandlers(): EventHandlers {
    return {
      TaskAdded({ id }: { id: BigNumber }) {
        return {
          taskId: id.toNumber(),
        };
      },
    };
  }
  get _send(): (string, number) => * {
    return this.client.contract.functions.makeTask;
  }
  get _estimate(): (string, number) => * {
    return this.client.contract.estimate.makeTask;
  }
}

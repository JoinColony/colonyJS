/* @flow */

import { utf8ToHex } from 'web3-utils';

import ColonyClient from '../index';
import { ROLES } from '../../constants';
import { TASK_ID, ROLE, RATING } from '../../schemaDefinitions';

type Params = { taskId: number, role: string, rating: number, salt: string };
type EventData = {};

export default class RevealTaskWorkRating extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      salt: {
        type: 'string',
      },
      ...TASK_ID,
      ...ROLE,
      ...RATING,
    };
  }
  static parseParams({ taskId, role, rating, salt }: Params) {
    return [taskId, ROLES[role], rating, utf8ToHex(salt)];
  }
  get _send(): (number, number, number, string) => * {
    return this.client.contract.functions.revealTaskWorkRating;
  }
  get _estimate(): (number, number, number, string) => * {
    return this.client.contract.estimate.revealTaskWorkRating;
  }
}

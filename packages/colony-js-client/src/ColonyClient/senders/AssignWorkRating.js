/* @flow */

import ColonyClient from '../index';
import { TASK_ID, RATING } from '../../schemaDefinitions';

type Params = { taskId: number, rating: number };
type EventData = {};

export default class AssignWorkRating extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      ...RATING,
      ...TASK_ID,
    };
  }
  static parseParams({ taskId, rating }: Params) {
    return [taskId, rating];
  }
  get _send(): (number, number) => * {
    return this.client.contract.functions.assignWorkRating;
  }
  get _estimate(): (number, number) => * {
    return this.client.contract.estimate.assignWorkRating;
  }
}

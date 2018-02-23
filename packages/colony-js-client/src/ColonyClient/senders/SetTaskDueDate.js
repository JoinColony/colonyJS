/* @flow */

import ColonyClient from '../index';
import { TASK_ID } from '../../schemaDefinitions';

type Params = {
  taskId: number,
  dueDate: Date,
};
type EventData = {};

export default class SetTaskDueDate extends ColonyClient.Sender<
  Params,
  EventData,
  ColonyClient,
> {
  static get schema(): {} {
    return {
      dueDate: {
        type: 'date',
        // TODO only in the future, within sane limits
      },
      ...TASK_ID,
    };
  }
  static parseParams({ taskId, dueDate }: Params) {
    return [taskId, dueDate.getTime()];
  }
  get _send(): (number, number) => * {
    return this.client.contract.functions.setTaskDueDate;
  }
  get _estimate(): (number, number) => * {
    return this.client.contract.estimate.setTaskDueDate;
  }
}

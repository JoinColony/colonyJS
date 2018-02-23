/* @flow */

import ColonyClient from '../index';
import { TASK_ID } from '../../schemaDefinitions';

type Params = {
  taskId: number,
};
type ReturnValue = { count: number, timestamp: number };
type FnReturn = [number, number];

export default class GetTaskWorkRatings extends ColonyClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static get schema(): {} {
    return TASK_ID;
  }
  static parseParams({ taskId }: Params) {
    return [taskId];
  }
  static parseReturn([count, timestamp]: FnReturn): ReturnValue {
    return { count, timestamp };
  }
  get _call(): number => Promise<FnReturn> {
    return this.client.contract.functions.getTaskWorkRatings;
  }
}

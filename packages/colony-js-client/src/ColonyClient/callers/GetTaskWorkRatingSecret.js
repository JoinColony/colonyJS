/* @flow */

import ColonyClient from '../index';
import { TASK_ID, ROLE } from '../../schemaDefinitions';
import { ROLES } from '../../constants';

type Params = {
  taskId: number,
  role: string,
};
type ReturnValue = { secret: string };
type FnReturn = [string];

export default class GetTaskWorkRatingSecret extends ColonyClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static get schema(): {} {
    return {
      ...TASK_ID,
      ...ROLE,
    };
  }
  static parseParams({ taskId, role }: Params) {
    return [taskId, ROLES[role]];
  }
  static parseReturn([secret]: FnReturn): ReturnValue {
    return { secret };
  }
  get _call(): (number, number) => Promise<FnReturn> {
    return this.client.contract.functions.getTaskWorkRatingSecret;
  }
}

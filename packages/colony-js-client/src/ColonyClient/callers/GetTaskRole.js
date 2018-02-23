/* @flow */

import ColonyClient from '../index';
import { TASK_ID, ROLE } from '../../schemaDefinitions';
import { ROLES } from '../../constants';

type Params = {
  taskId: number,
  role: string,
};
type ReturnValue = { role: string, rated: boolean, rating: number };
type FnReturn = [number, boolean, number];

export default class GetTaskRole extends ColonyClient.Caller<
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
  static parseReturn([role, rated, rating]: FnReturn): ReturnValue {
    return { role: ROLES[role], rated, rating };
  }
  get _call(): (number, number) => Promise<FnReturn> {
    return this.client.contract.functions.getTaskRole;
  }
}

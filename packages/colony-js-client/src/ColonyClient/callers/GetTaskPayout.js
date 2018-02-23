/* @flow */

import ColonyClient from '../index';
import { TASK_ID, ROLE, TOKEN } from '../../schemaDefinitions';
import { ROLES } from '../../constants';

type Params = {
  taskId: number,
  role: string,
  token: string,
};
type ReturnValue = { amount: number };
type FnReturn = [number];

export default class GetTaskPayout extends ColonyClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static get schema(): {} {
    return {
      ...TASK_ID,
      ...ROLE,
      ...TOKEN,
    };
  }
  static parseParams({ taskId, role, token }: Params) {
    return [taskId, ROLES[role], token];
  }
  static parseReturn([amount]: FnReturn): ReturnValue {
    return { amount };
  }
  get _call(): (number, string) => Promise<FnReturn> {
    return this.client.contract.functions.getPotBalance;
  }
}

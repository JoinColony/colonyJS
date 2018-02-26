/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

import type { Task } from '../../interface/Task';

type Params = { taskId: number };
type ReturnValue = Task;
type FnReturn = [
  string,
  string,
  boolean,
  boolean,
  number,
  number,
  number,
  number,
  number,
];

export default class GetTask extends ContractClient.Caller<
  Params,
  ReturnValue,
  // eslint-disable-next-line
  ColonyClient
> {
  static get schema(): {} {
    return {
      skillId: {
        type: 'number',
        min: 1,
      },
      childSkillIndex: {
        type: 'number',
        min: 1,
      },
    };
  }
  static parseParams({ taskId }: Params) {
    return [taskId];
  }
  static parseReturn(
    [
      specificationHash,
      deliverableHash,
      finalized,
      cancelled,
      dueDate,
      payoutsWeCannotMake,
      potId,
      deliverableTimestamp,
      domainId,
    ]: FnReturn,
    { taskId }: Params,
  ): ReturnValue {
    return {
      cancelled,
      deliverableHash,
      deliverableTimestamp,
      domainId,
      dueDate: new Date(dueDate),
      finalized,
      id: taskId,
      payoutsWeCannotMake,
      potId,
      specificationHash,
    };
  }
  get _call(): (number, number) => Promise<FnReturn> {
    return this.client.contract.functions.getTask;
  }
}

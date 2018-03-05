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
  ColonyClient,
> {
  static params = [['taskId', 'number']];
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
  // $FlowFixMe https://github.com/facebook/flow/issues/3237
  _call = this.client.contract.functions.getTask;
}

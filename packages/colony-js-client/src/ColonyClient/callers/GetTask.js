/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type Params = { taskId: number };
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
  [number], // Currently just one item
];

type ReturnValue = {
  cancelled: boolean,
  deliverableDate?: Date,
  deliverableHash?: string,
  domainId: number,
  dueDate?: Date,
  finalized: boolean,
  id: number,
  payoutsWeCannotMake?: number,
  potId?: number,
  skillId: number,
  specificationHash: string,
};

export default class GetTask extends ContractClient.Caller<
  Params,
  ReturnValue,
  ColonyClient,
> {
  params = [['taskId', 'number']];
  // eslint-disable-next-line class-methods-use-this
  parseReturn(
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
      skillIds,
    ]: FnReturn,
    { taskId }: Params,
  ) {
    const task: ReturnValue = {
      cancelled: !!cancelled,
      domainId,
      finalized: !!finalized,
      id: taskId,
      skillId: skillIds[0], // Return only the first skillId since only one is used
      specificationHash,
    };

    // The following fields are optional; make sure we don't e.g. coerce null to Date

    if (deliverableTimestamp > 0)
      task.deliverableDate = new Date(deliverableTimestamp);

    // dueDate is a timestamp
    if (dueDate > 0) task.dueDate = new Date(dueDate);

    if (typeof deliverableHash !== 'undefined')
      task.deliverableHash = deliverableHash;

    if (typeof payoutsWeCannotMake !== 'undefined')
      task.payoutsWeCannotMake = payoutsWeCannotMake;

    if (typeof potId !== 'undefined') task.potId = potId;

    return task;
  }
}

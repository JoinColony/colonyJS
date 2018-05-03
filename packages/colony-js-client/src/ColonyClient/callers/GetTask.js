/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type InputValues = { taskId: number };
type CallResult = [
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

type OutputValues = {
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
  InputValues,
  OutputValues,
  ColonyClient,
> {
  constructor(params: *) {
    super({
      functionName: 'getTask',
      input: [['taskId', 'number']],
      ...params,
    });
  }
  // eslint-disable-next-line class-methods-use-this
  getOutputValues(
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
    ]: CallResult,
    { taskId }: InputValues,
  ) {
    const task: OutputValues = {
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

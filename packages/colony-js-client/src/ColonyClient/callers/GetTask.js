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

export default class GetTask extends ContractClient.Caller<
  Params,
  {},
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
    return {
      cancelled: !!cancelled,
      domainId,
      finalized: !!finalized,
      id: taskId,
      skillId: skillIds[0], // Return only the first skillId since only one is used
      specificationHash,
      // The following fields are optional; make sure we don't e.g. coerce null to Date
      ...(deliverableHash != null ? { deliverableHash } : {}),
      ...(deliverableTimestamp > 0
        ? { deliverableDate: new Date(deliverableTimestamp) }
        : {}),
      ...(dueDate > 0 ? { dueDate: new Date(dueDate) } : {}), // dueDate is a timestamp
      ...(payoutsWeCannotMake != null ? { payoutsWeCannotMake } : {}),
      ...(potId != null ? { potId } : {}),
    };
  }
}

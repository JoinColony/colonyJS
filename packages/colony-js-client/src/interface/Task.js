/* @flow */

export type Task = {
  cancelled?: boolean,
  deliverableHash?: string,
  deliverableTimestamp?: number,
  domains: Array<number>,
  skills: Array<number>,
  dueDate?: Date,
  finalized?: boolean,
  id: number,
  payoutsWeCannotMake?: number,
  potId?: number,
  specificationHash: string,
};

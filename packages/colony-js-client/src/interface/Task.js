/* @flow */

export type Task = {
  cancelled?: boolean,
  deliverableHash?: string,
  deliverableDate?: Date,
  dueDate?: Date,
  finalized?: boolean,
  id: number,
  payoutsWeCannotMake?: number,
  potId?: number,
  specificationHash: string,
  domains?: [number],
  skills?: [number],
};

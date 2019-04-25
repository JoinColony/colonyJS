/* @flow */

export type TransactionDescription = {
  data: string, // e.g. 0xcae960fe00...
  name: string, // e.g. setTaskDueDate
  sigHash: string, // e.g. 0xcar960fe
  signature: string, // e.g. setTaskDueDate(uint256,uint256)
};

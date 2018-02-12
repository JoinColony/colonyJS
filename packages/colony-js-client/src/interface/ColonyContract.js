/* @flow */

import type { IContract, Transaction } from '@colony/colony-js-adapter';

export interface ColonyContract extends IContract {
  getFeeInverse(): Promise<[number]>;
  getNonRewardPotsTotal(address: string): Promise<[number]>;
  getPotBalance(potId: number, token: string): Promise<[number]>;
  getRewardInverse(): Promise<[number]>;
  getTask(
    taskId: number,
  ): Promise<
    [string, string, boolean, boolean, number, number, number, number, number],
  >;
  getTaskCount(): Promise<[number]>;
  getTaskPayout(id: number, role: number, token: string): Promise<[number]>;
  getTaskRole(id: number, role: number): Promise<[string, boolean, number]>;
  getTaskWorkRatings(id: number): Promise<[number, number]>;
  getTaskWorkRatingSecret(id: number, role: number): Promise<[string]>;
  getToken(): Promise<[string]>;
  getTransactionCount(): Promise<[number]>;
  owner(): Promise<[string]>;
  revealTaskWorkRating(
    taskId: number,
    role: number,
    rating: number,
    salt: string,
  ): Promise<Transaction>;
  addSkill(parentSkillId: number): Promise<Transaction>;
  approveTaskChange(transactionId: number, role: number): Promise<Transaction>;
  assignWorkRating(id: number): Promise<Transaction>;
  authority(): Promise<Transaction>;
  cancelTask(id: number): Promise<Transaction>;
  claimColonyFunds(token: string): Promise<Transaction>;
  claimPayout(id: number, role: number, token: string): Promise<Transaction>;
  confirmTransaction(number: number, uint8: number): Promise<Transaction>;
  finalizeTask(id: number): Promise<Transaction>;
  generateSecret(salt: string, value: number): Promise<Transaction>;
  initialiseColony(network: string): Promise<Transaction>;
  makeTask(specificationHash: string): Promise<Transaction>;
  mintTokens(wad: number): Promise<Transaction>;
  moveFundsBetweenPots(
    fromPot: number,
    toPot: number,
    amount: number,
    token: string,
  ): Promise<Transaction>;
  proposeTaskChange(
    data: string,
    value: number,
    role: number,
  ): Promise<Transaction>;
  setFunctionReviewers(
    bytes4: string,
    uint8: number,
    uint8: number,
  ): Promise<Transaction>;
  setTaskBrief(id: number, specificationHash: string): Promise<Transaction>;
  setTaskDueDate(id: number, dueDate: number): Promise<Transaction>;
  setTaskPayout(
    id: number,
    role: number,
    token: string,
    amount: number,
  ): Promise<Transaction>;
  setTaskRoleUser(id: number, role: number, user: string): Promise<Transaction>;
  setTaskSkill(id: number, skillId: number): Promise<Transaction>;
  setToken(token: string): Promise<Transaction>;
  submitTaskDeliverable(
    id: number,
    deliverableHash: string,
  ): Promise<Transaction>;
  submitTaskWorkRating(
    id: number,
    role: number,
    ratingSecret: string,
  ): Promise<Transaction>;
  submitTransaction(
    bytes: string,
    number: number,
    uint: number,
  ): Promise<Transaction>;
}

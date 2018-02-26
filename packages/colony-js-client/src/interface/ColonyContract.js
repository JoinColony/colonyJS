/* @flow */

// TODO consider putting this in a separate interface package?

import type BigNumber from 'bn.js';
import type { IContract, Transaction } from '../../../colony-js-adapter/index';

type revealTaskWorkRating<T> = (
  taskId: number,
  role: number,
  rating: number,
  salt: string,
) => Promise<T>;
type addSkill<T> = (parentSkillId: number) => Promise<T>;
type approveTaskChange<T> = (transactionId: number, role: number) => Promise<T>;
type assignWorkRating<T> = (id: number) => Promise<T>;
type authority<T> = () => Promise<T>;
type cancelTask<T> = (id: number) => Promise<T>;
type claimColonyFunds<T> = (token: string) => Promise<T>;
type claimPayout<T> = (id: number, role: number, token: string) => Promise<T>;
type confirmTransaction<T> = (number: number, uint8: number) => Promise<T>;
type finalizeTask<T> = (id: number) => Promise<T>;
type generateSecret<T> = (salt: string, value: number) => Promise<T>;
type initialiseColony<T> = (network: string) => Promise<T>;
type makeTask<T> = (specificationHash: string, domainId: number) => Promise<T>;
type mintTokens<T> = (wad: number) => Promise<T>;
type moveFundsBetweenPots<T> = (
  fromPot: number,
  toPot: number,
  amount: number,
  token: string,
) => Promise<T>;
type proposeTaskChange<T> = (
  data: string,
  value: number,
  role: number,
) => Promise<T>;
type setFunctionReviewers<T> = (
  bytes4: string,
  uint8: number,
  uint8: number,
) => Promise<T>;
type setTaskBrief<T> = (id: number, specificationHash: string) => Promise<T>;
type setTaskDueDate<T> = (id: number, dueDate: number) => Promise<T>;
type setTaskPayout<T> = (
  id: number,
  role: number,
  token: string,
  amount: number,
) => Promise<T>;
type setTaskRoleUser<T> = (
  id: number,
  role: number,
  user: string,
) => Promise<T>;
type setTaskSkill<T> = (id: number, skillId: number) => Promise<T>;
type setToken<T> = (token: string) => Promise<T>;
type submitTaskDeliverable<T> = (
  id: number,
  deliverableHash: string,
) => Promise<T>;
type submitTaskWorkRating<T> = (
  id: number,
  role: number,
  ratingSecret: string,
) => Promise<T>;
type submitTransaction<T> = (
  destination: string,
  value: number,
  data: string,
) => Promise<T>;

export interface ColonyContract extends IContract {
  estimate: {
    addSkill: addSkill<BigNumber>,
    approveTaskChange: approveTaskChange<BigNumber>,
    assignWorkRating: assignWorkRating<BigNumber>,
    authority: authority<BigNumber>,
    cancelTask: cancelTask<BigNumber>,
    claimColonyFunds: claimColonyFunds<BigNumber>,
    claimPayout: claimPayout<BigNumber>,
    confirmTransaction: confirmTransaction<BigNumber>,
    finalizeTask: finalizeTask<BigNumber>,
    generateSecret: generateSecret<BigNumber>,
    initialiseColony: initialiseColony<BigNumber>,
    makeTask: makeTask<BigNumber>,
    mintTokens: mintTokens<BigNumber>,
    moveFundsBetweenPots: moveFundsBetweenPots<BigNumber>,
    proposeTaskChange: proposeTaskChange<BigNumber>,
    revealTaskWorkRating: revealTaskWorkRating<BigNumber>,
    setFunctionReviewers: setFunctionReviewers<BigNumber>,
    setTaskBrief: setTaskBrief<BigNumber>,
    setTaskDueDate: setTaskDueDate<BigNumber>,
    setTaskPayout: setTaskPayout<BigNumber>,
    setTaskRoleUser: setTaskRoleUser<BigNumber>,
    setTaskSkill: setTaskSkill<BigNumber>,
    setToken: setToken<BigNumber>,
    submitTaskDeliverable: submitTaskDeliverable<BigNumber>,
    submitTaskWorkRating: submitTaskWorkRating<BigNumber>,
    submitTransaction: submitTransaction<BigNumber>,
  };
  functions: {
    getFeeInverse(): Promise<[number]>,
    getNonRewardPotsTotal(address: string): Promise<[number]>,
    getPotBalance(potId: number, token: string): Promise<[number]>,
    getRewardInverse(): Promise<[number]>,
    getTask(
      taskId: number,
    ): Promise<
      [
        string,
        string,
        boolean,
        boolean,
        number,
        number,
        number,
        number,
        number,
      ],
    >,
    getTaskCount(): Promise<[number]>,
    getTaskPayout(id: number, role: number, token: string): Promise<[number]>,
    getTaskRole(id: number, role: number): Promise<[number, boolean, number]>,
    getTaskWorkRatings(id: number): Promise<[number, number]>,
    getTaskWorkRatingSecret(id: number, role: number): Promise<[string]>,
    getToken(): Promise<[string]>,
    getTransactionCount(): Promise<[number]>,
    owner(): Promise<[string]>,
    addSkill: addSkill<Transaction>,
    approveTaskChange: approveTaskChange<Transaction>,
    assignWorkRating: assignWorkRating<Transaction>,
    authority: authority<Transaction>,
    cancelTask: cancelTask<Transaction>,
    claimColonyFunds: claimColonyFunds<Transaction>,
    claimPayout: claimPayout<Transaction>,
    confirmTransaction: confirmTransaction<Transaction>,
    finalizeTask: finalizeTask<Transaction>,
    generateSecret: generateSecret<Transaction>,
    initialiseColony: initialiseColony<Transaction>,
    makeTask: makeTask<Transaction>,
    mintTokens: mintTokens<Transaction>,
    moveFundsBetweenPots: moveFundsBetweenPots<Transaction>,
    proposeTaskChange: proposeTaskChange<Transaction>,
    revealTaskWorkRating: revealTaskWorkRating<Transaction>,
    setFunctionReviewers: setFunctionReviewers<Transaction>,
    setTaskBrief: setTaskBrief<Transaction>,
    setTaskDueDate: setTaskDueDate<Transaction>,
    setTaskPayout: setTaskPayout<Transaction>,
    setTaskRoleUser: setTaskRoleUser<Transaction>,
    setTaskSkill: setTaskSkill<Transaction>,
    setToken: setToken<Transaction>,
    submitTaskDeliverable: submitTaskDeliverable<Transaction>,
    submitTaskWorkRating: submitTaskWorkRating<Transaction>,
    submitTransaction: submitTransaction<Transaction>,
  };
}

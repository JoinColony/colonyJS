/* @flow */

import * as web3 from 'web3-utils';

import type { IAdapter } from '@colony/colony-js-adapter';
import type { Query as ContractQuery } from '@colony/colony-js-contract-loader';
import ContractClient from './ContractClient';
import ColonyNetworkClient from './ColonyNetworkClient';
import type { CallOptions, SendOptions } from './ContractClient';
import type { ColonyContract } from './interface/ColonyContract';

const ROLES = {
  WORKER: 0,
  EVALUATOR: 1,
  MANAGER: 2,
};

export default class ColonyClient extends ContractClient<ColonyContract> {
  contract: ColonyContract;
  networkClient: ColonyNetworkClient;
  static checkIsRole(role: string): boolean {
    if (!Object.prototype.hasOwnProperty.call(ROLES, role)) {
      throw new Error(`Role ${role} is not a valid role`);
    }
    return true;
  }
  static async createSelf(
    adapter: IAdapter<*>,
    networkClient: ColonyNetworkClient,
  ) {
    return this.create({ name: 'Colony' }, adapter, networkClient);
  }
  static async create(
    query: ContractQuery,
    adapter: IAdapter<*>,
    networkClient: ColonyNetworkClient,
  ): Promise<ColonyClient> {
    const client = await super.create(query, adapter);
    client.networkClient = networkClient;
    return client;
  }
  constructor(
    adapter: IAdapter<*>,
    contract: ColonyContract,
    networkClient: ColonyNetworkClient,
  ) {
    super(adapter, contract);
    this.networkClient = networkClient;
  }
  async checkForTask(id: number): Promise<boolean> {
    const task = await this.getTask(id);
    if (!task) throw new Error(`Task ${id} not found`);
    return true;
  }
  async checkForSkill(id: number): Promise<boolean> {
    const skill = await this.networkClient.getSkill(id);
    if (!skill) throw new Error(`Skill ${id} not found`);
    return true;
  }
  // async _checkForUser(id: number) {}
  async assignWorkRating(taskId: number, sendOptions: SendOptions = {}) {
    await this.checkForTask(taskId);

    return this.send(this.contract.assignWorkRating, sendOptions, taskId);
  }
  async authority(sendOptions: SendOptions = {}) {
    const [address] = await this.send(this.contract.authority, sendOptions);
    return address;
  }
  async claimColonyFunds(token: string, sendOptions: SendOptions = {}) {
    this.constructor.checkIsAddress(token);

    return this.send(this.contract.claimColonyFunds, sendOptions, token);
  }
  async claimPayout(
    taskId: number,
    role: string,
    token: string,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsAddress(token);
    this.constructor.checkIsRole(role);
    await this.checkForTask(taskId);

    return this.send(
      this.contract.claimPayout,
      sendOptions,
      taskId,
      ROLES[role],
      token,
    );
  }
  async confirmTransaction(
    transactionId: number,
    role: string,
    sendOptions: SendOptions = {},
  ) {
    // TODO check for transactionId?
    this.constructor.checkIsRole(role);

    return this.send(
      this.contract.confirmTransaction,
      sendOptions,
      transactionId,
      ROLES[role],
    );
  }
  async generateSecret(
    salt: string,
    value: number,
    sendOptions: SendOptions = {},
  ) {
    const [secret] = await this.send(
      this.contract.generateSecret,
      sendOptions,
      web3.utf8ToHex(salt),
      value,
    );
    return secret;
  }
  async getFeeInverse(callOptions: CallOptions = {}) {
    const [feeInverse] = await this.call(
      this.contract.getFeeInverse,
      callOptions,
    );
    return feeInverse;
  }
  async getNonRewardPotsTotal(address: string, callOptions: CallOptions = {}) {
    this.constructor.checkIsAddress(address);
    const [total] = await this.call(
      this.contract.getNonRewardPotsTotal,
      callOptions,
      address,
    );
    return total;
  }
  async getPotBalance(
    potId: number,
    token: string,
    callOptions: CallOptions = {},
  ) {
    // TODO what if the pot doesn't exist?
    this.constructor.checkIsAddress(token);

    const [balance] = await this.call(
      this.contract.getPotBalance,
      callOptions,
      potId,
      token,
    );
    return balance;
  }
  async getRewardInverse(callOptions: CallOptions = {}) {
    const [rewardInverse] = await this.call(
      this.contract.getRewardInverse,
      callOptions,
    );
    return rewardInverse;
  }
  async getTask(taskId: number, callOptions: CallOptions = {}) {
    await this.checkForTask(taskId);

    const [
      specificationHash,
      deliverableHash,
      finalized,
      cancelled,
      dueDate,
      payoutsWeCannotMake,
      potId,
      deliverableTimestamp,
      domainId,
    ] = await this.call(this.contract.getTask, callOptions, taskId);
    // TODO does this stuff get returned in hex?
    return {
      cancelled,
      deliverableHash,
      deliverableTimestamp,
      domainId,
      dueDate,
      finalized,
      payoutsWeCannotMake,
      potId,
      specificationHash,
    };
  }
  async getTaskCount(callOptions: CallOptions = {}) {
    const [taskCount] = await this.call(
      this.contract.getTaskCount,
      callOptions,
    );
    return taskCount;
  }
  async getTaskPayout(
    taskId: number,
    role: string,
    token: string,
    callOptions: CallOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    this.constructor.checkIsAddress(token);
    await this.checkForTask(taskId);

    const [taskPayout] = await this.call(
      this.contract.getTaskPayout,
      callOptions,
      taskId,
      ROLES[role],
      token,
    );
    return taskPayout;
  }
  async getTaskRole(
    taskId: number,
    role: string,
    callOptions: CallOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    await this.checkForTask(taskId);

    const [user, rated, rating] = await this.call(
      this.contract.getTaskRole,
      callOptions,
      taskId,
      ROLES[role],
    );
    return {
      rated,
      rating,
      user,
    };
  }
  async getTaskWorkRatings(taskId: number, callOptions: CallOptions = {}) {
    await this.checkForTask(taskId);

    const [count, timestamp] = await this.call(
      this.contract.getTaskWorkRatings,
      callOptions,
      taskId,
    );
    return {
      count,
      timestamp,
    };
  }
  async getTaskWorkRatingSecret(
    taskId: number,
    role: string,
    callOptions: CallOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    await this.checkForTask(taskId);

    const [taskWorkRatingSecret] = await this.call(
      this.contract.getTaskWorkRatingSecret,
      callOptions,
      taskId,
      ROLES[role],
    );
    return taskWorkRatingSecret;
  }
  async getToken(callOptions: CallOptions = {}) {
    const [token] = await this.call(this.contract.getToken, callOptions);
    return token;
  }
  async getTransactionCount(callOptions: CallOptions = {}) {
    const [transactionCount] = await this.call(
      this.contract.getTransactionCount,
      callOptions,
    );
    return transactionCount;
  }
  async moveFundsBetweenPots(
    fromPot: number,
    toPot: number,
    amount: number,
    token: string,
    sendOptions: SendOptions = {},
  ) {
    // What if either of the pots don't exist?
    this.constructor.checkIsAddress(token);
    return this.send(this.contract.moveFundsBetweenPots, sendOptions, token);
  }
  async owner(callOptions: CallOptions = {}) {
    const [owner] = await this.call(this.contract.owner, callOptions);
    return owner;
  }
  async revealTaskWorkRating(
    taskId: number,
    role: string,
    rating: number,
    salt: string,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    await this.checkForTask(taskId);

    return this.send(
      this.contract.revealTaskWorkRating,
      sendOptions,
      taskId,
      role,
      rating,
      salt,
    );
  }
  async setFunctionReviewers(
    sig: string,
    firstReviewer: number,
    secondReviewer: number,
    sendOptions: SendOptions = {},
  ) {
    return this.send(
      this.contract.setFunctionReviewers,
      sendOptions,
      sig,
      firstReviewer,
      secondReviewer,
    );
  }
  async setTaskPayout(
    taskId: number,
    role: string,
    token: string,
    amount: number,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    this.constructor.checkIsAddress(token);
    await this.checkForTask(taskId);

    return this.send(
      this.contract.setTaskPayout,
      sendOptions,
      taskId,
      ROLES[role],
      token,
      amount,
    );
  }
  async submitTaskWorkRating(
    taskId: number,
    role: string,
    ratingSecret: string,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    await this.checkForTask(taskId);

    return this.send(
      this.contract.submitTaskWorkRating,
      sendOptions,
      taskId,
      ROLES[role],
      ratingSecret,
    );
  }
  async submitTransaction(
    data: string,
    value: number,
    role: string,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsRole(role);

    const [transactionId] = await this.send(
      this.contract.submitTransaction,
      sendOptions,
      data,
      value,
      ROLES[role],
    );
    return transactionId;
  }
  async addSkill(parentSkillId: number, sendOptions: SendOptions = {}) {
    return this.send(this.contract.addSkill, sendOptions, parentSkillId);
  }
  async approveTaskChange(
    transactionId: number,
    role: string,
    sendOptions: SendOptions = {},
  ) {
    // TODO check transactionId?
    this.constructor.checkIsRole(role);

    return this.send(
      this.contract.approveTaskChange,
      sendOptions,
      transactionId,
      ROLES[role],
    );
  }
  async cancelTask(taskId: number, sendOptions: SendOptions = {}) {
    await this.checkForTask(taskId);

    return this.send(this.contract.cancelTask, sendOptions, taskId);
  }
  async finalizeTask(taskId: number, sendOptions: SendOptions = {}) {
    await this.checkForTask(taskId);

    return this.send(this.contract.finalizeTask, sendOptions, taskId);
  }
  async initialiseColony(network: string, sendOptions: SendOptions = {}) {
    this.constructor.checkIsAddress(network);

    return this.send(this.contract.initialiseColony, sendOptions, network);
  }
  async makeTask(specificationHash: string, sendOptions: SendOptions = {}) {
    return this.send(
      this.contract.makeTask,
      {
        events: ['TaskAdded'],
        ...sendOptions,
      },
      web3.utf8ToHex(specificationHash),
    );
  }
  async mintTokens(wad: number, sendOptions: SendOptions = {}) {
    return this.send(this.contract.mintTokens, sendOptions, wad);
  }
  async proposeTaskChange(
    data: string,
    value: number,
    role: string,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsRole(role);

    return this.send(
      this.contract.proposeTaskChange,
      sendOptions,
      web3.utf8ToHex(data),
      value,
      ROLES[role],
    );
  }
  async setTaskBrief(
    taskId: number,
    specificationHash: string,
    sendOptions: SendOptions = {},
  ) {
    await this.checkForTask(taskId);

    return this.send(
      this.contract.setTaskBrief,
      sendOptions,
      taskId,
      specificationHash,
    );
  }
  async setTaskDueDate(
    taskId: number,
    dueDate: Date,
    sendOptions: SendOptions = {},
  ) {
    await this.checkForTask(taskId);

    return this.send(
      this.contract.setTaskDueDate,
      sendOptions,
      taskId,
      dueDate.getTime(),
    );
  }
  async setTaskRoleUser(
    taskId: number,
    role: string,
    user: string,
    sendOptions: SendOptions = {},
  ) {
    this.constructor.checkIsRole(role);
    await this.checkForTask(taskId);

    return this.send(
      this.contract.setTaskRoleUser,
      sendOptions,
      taskId,
      ROLES[role],
      user,
    );
  }
  async setTaskSkill(
    taskId: number,
    skillId: number,
    sendOptions: SendOptions = {},
  ) {
    // TODO input validation with nice messages
    // TODO where appropriate, convert with e.g. utf8Bytes
    // TODO auth checks? or provide the proper errors for this

    await this.checkForTask(taskId);
    await this.checkForSkill(skillId);

    return this.send(this.contract.setTaskSkill, sendOptions, taskId, skillId);
  }
  async setToken(token: string, sendOptions: SendOptions = {}) {
    this.constructor.checkIsAddress(token);

    return this.send(this.contract.setToken, sendOptions, token);
  }
  async submitTaskDeliverable(
    taskId: number,
    deliverableHash: string,
    sendOptions: SendOptions = {},
  ) {
    await this.checkForTask(taskId);

    return this.send(
      this.contract.submitTaskDeliverable,
      sendOptions,
      taskId,
      web3.utf8ToHex(deliverableHash),
    );
  }
}

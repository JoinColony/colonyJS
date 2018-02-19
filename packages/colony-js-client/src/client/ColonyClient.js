/* @flow */

import type { IAdapter } from '@colony/colony-js-adapter';
// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';

import type { ColonyContract } from './interface/ColonyContract';

import ContractClient from './ContractClient';
import ColonyNetworkClient from './ColonyNetworkClient';
import { ROLES } from '../constants';

// Senders
import AddSkill from './senders/AddSkill';
import ApproveTaskChange from './senders/ApproveTaskChange';
import AssignWorkRating from './senders/AssignWorkRating';
import Authority from './senders/Authority';
import CancelTask from './senders/CancelTask';
import ClaimColonyFunds from './senders/ClaimColonyFunds';
import ClaimPayout from './senders/ClaimPayout';
import ConfirmTransaction from './senders/ConfirmTransaction';
import CreateTask from './senders/CreateTask';
import FinalizeTask from './senders/FinalizeTask';
import GenerateSecret from './senders/GenerateSecret';
import MintTokens from './senders/MintTokens';
import MoveFundsBetweenPots from './senders/MoveFundsBetweenPots';
import ProposeTaskChange from './senders/ProposeTaskChange';
import RevealTaskWorkRating from './senders/RevealTaskWorkRating';
import SetFunctionReviewers from './senders/SetFunctionReviewers';
import SetTaskBrief from './senders/SetTaskBrief';
import SetTaskDueDate from './senders/SetTaskDueDate';
import SetTaskPayout from './senders/SetTaskPayout';
import SetToken from './senders/SetToken';
import SubmitTaskDeliverable from './senders/SubmitTaskDeliverable';
import SubmitTaskWorkRating from './senders/SubmitTaskWorkRating';
import SubmitTransaction from './senders/SubmitTransaction';

// Validators
import isAddress from './validators/isAddress';
import isValidRole from './validators/isValidRole';
import taskExists from './validators/taskExists';

type CallOptions = { timeoutMs: number };

export default class ColonyClient extends ContractClient<ColonyContract> {
  contract: ColonyContract;
  networkClient: ColonyNetworkClient;
  // Senders:
  addSkill: AddSkill;
  approveTaskChange: ApproveTaskChange;
  assignWorkRating: AssignWorkRating;
  authority: Authority;
  cancelTask: CancelTask;
  claimColonyFunds: ClaimColonyFunds;
  claimPayout: ClaimPayout;
  confirmTransaction: ConfirmTransaction;
  createTask: CreateTask;
  finalizeTask: FinalizeTask;
  generateSecret: GenerateSecret;
  mintTokens: MintTokens;
  moveFundsBetweenPots: MoveFundsBetweenPots;
  proposeTaskChange: ProposeTaskChange;
  revealTaskWorkRating: RevealTaskWorkRating;
  setFunctionReviewers: SetFunctionReviewers;
  setTaskBrief: SetTaskBrief;
  setTaskDueDate: SetTaskDueDate;
  setTaskPayout: SetTaskPayout;
  setToken: SetToken;
  submitTaskDeliverable: SubmitTaskDeliverable;
  submitTaskWorkRating: SubmitTaskWorkRating;
  submitTransaction: SubmitTransaction;
  static checkIsRole(role: string): boolean {
    if (!Object.prototype.hasOwnProperty.call(ROLES, role)) {
      throw new Error(`Role ${role} is not a valid role`);
    }
    return true;
  }
  // When we create a Colony, we get back the address of a newly-deployed
  // EtherRouter contract (we think).
  static async create(
    adapter: IAdapter<ColonyContract>,
    contractName: string,
    loaderOptions: LoaderOptions,
    networkClient: ColonyNetworkClient,
  ) {
    const client = await super.create(adapter, contractName, loaderOptions);
    client.networkClient = networkClient;
    return client;
  }
  static async createSelf(
    adapter: IAdapter<ColonyContract>,
    networkClient: ColonyNetworkClient,
    loaderOptions: LoaderOptions,
  ) {
    return this.create(adapter, 'IColony', loaderOptions, networkClient);
  }
  constructor(
    adapter: IAdapter<ColonyContract>,
    contract: ColonyContract,
    networkClient: ColonyNetworkClient,
  ) {
    super(adapter, contract);
    Object.assign(this, {
      networkClient,
      addSkill: new AddSkill(this),
      approveTaskChange: new ApproveTaskChange(this),
      assignWorkRating: new AssignWorkRating(this),
      authority: new Authority(this),
      cancelTask: new CancelTask(this),
      claimColonyFunds: new ClaimColonyFunds(this),
      claimPayout: new ClaimPayout(this),
      confirmTransaction: new ConfirmTransaction(this),
      createTask: new CreateTask(this),
      finalizeTask: new FinalizeTask(this),
      generateSecret: new GenerateSecret(this),
      mintTokens: new MintTokens(this),
      moveFundsBetweenPots: new MoveFundsBetweenPots(this),
      proposeTaskChange: new ProposeTaskChange(this),
      revealTaskWorkRating: new RevealTaskWorkRating(this),
      setFunctionReviewers: new SetFunctionReviewers(this),
      setTaskBrief: new SetTaskBrief(this),
      setTaskDueDate: new SetTaskDueDate(this),
      setTaskPayout: new SetTaskPayout(this),
      setToken: new SetToken(this),
      submitTaskDeliverable: new SubmitTaskDeliverable(this),
      submitTaskWorkRating: new SubmitTaskWorkRating(this),
      submitTransaction: new SubmitTransaction(this),
    });
  }
  async checkForTask(
    { taskId }: { taskId: number },
    callOptions?: CallOptions,
  ): Promise<boolean> {
    const task = await this.getTask({ taskId }, callOptions);
    if (!task) throw new Error(`Task ${taskId} not found`);
    return true;
  }
  async checkForSkill(
    { skillId }: { skillId: number },
    callOptions?: CallOptions,
  ): Promise<boolean> {
    const skill = await this.networkClient.getSkill({ skillId }, callOptions);
    if (!skill) throw new Error(`Skill ${skillId} not found`);
    return true;
  }
  async getFeeInverse(callOptions?: CallOptions) {
    const [feeInverse] = await this.call(
      this.contract.functions.getFeeInverse,
      callOptions,
    );
    return feeInverse;
  }
  async getNonRewardPotsTotal(
    { address }: { address: string },
    callOptions?: CallOptions,
  ) {
    const [total] = await this.call(
      this.contract.functions.getNonRewardPotsTotal,
      callOptions,
      address,
    );
    return total;
  }
  async getPotBalance(
    {
      potId,
      token,
    }: {
      potId: number,
      token: string,
    },
    callOptions?: CallOptions,
  ) {
    // TODO what if the pot doesn't exist?
    const [balance] = await this.call(
      this.contract.functions.getPotBalance,
      callOptions,
      potId,
      token,
    );
    return balance;
  }
  async getRewardInverse(callOptions?: CallOptions) {
    const [rewardInverse] = await this.call(
      this.contract.functions.getRewardInverse,
      callOptions,
    );
    return rewardInverse;
  }
  async getTask({ taskId }: { taskId: number }, callOptions?: CallOptions) {
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
    ] = await this.call(this.contract.functions.getTask, callOptions, taskId);
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
  async getTaskCount(callOptions?: CallOptions): Promise<number> {
    const [taskCount] = await this.call(
      this.contract.functions.getTaskCount,
      callOptions,
    );
    return taskCount.toNumber();
  }
  async getTaskPayout(
    {
      taskId,
      role,
      token,
    }: {
      taskId: number,
      role: string,
      token: string,
    },
    callOptions?: CallOptions,
  ) {
    isValidRole(role);
    isAddress(token);
    await this.checkForTask({ taskId }, callOptions);
    const [taskPayout] = await this.call(
      this.contract.functions.getTaskPayout,
      callOptions,
      taskId,
      ROLES[role],
      token,
    );
    return taskPayout;
  }
  async getTaskRole(
    {
      taskId,
      role,
    }: {
      taskId: number,
      role: string,
    },
    callOptions?: CallOptions,
  ) {
    isValidRole(role);
    await taskExists(taskId, this);

    const [user, rated, rating] = await this.call(
      this.contract.functions.getTaskRole,
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
  async getTaskWorkRatings(
    { taskId }: { taskId: number },
    callOptions?: CallOptions,
  ) {
    await taskExists(taskId, this);

    const [count, timestamp] = await this.call(
      this.contract.functions.getTaskWorkRatings,
      callOptions,
      taskId,
    );
    return {
      count,
      timestamp,
    };
  }
  async getTaskWorkRatingSecret(
    {
      taskId,
      role,
    }: {
      taskId: number,
      role: string,
    },
    callOptions?: CallOptions,
  ) {
    isValidRole(role);
    await taskExists(taskId, this);

    const [taskWorkRatingSecret] = await this.call(
      this.contract.functions.getTaskWorkRatingSecret,
      callOptions,
      taskId,
      ROLES[role],
    );
    return taskWorkRatingSecret;
  }
  async getToken(callOptions?: CallOptions) {
    const [token] = await this.call(
      this.contract.functions.getToken,
      callOptions,
    );
    return token;
  }
  async getTransactionCount(callOptions?: CallOptions) {
    const [transactionCount] = await this.call(
      this.contract.functions.getTransactionCount,
      callOptions,
    );
    return transactionCount;
  }
  async owner(callOptions?: CallOptions) {
    const [owner] = await this.call(this.contract.functions.owner, callOptions);
    return owner;
  }
}

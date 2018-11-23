/* @flow */

import assert from 'assert';

import type BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';
import { isValidAddress } from '@colony/colony-js-utils';
// eslint-disable-next-line max-len
import type { ContractClientConstructorArgs } from '@colony/colony-js-contract-client';

import ColonyNetworkClient from '../ColonyNetworkClient/index';
import TokenClient from '../TokenClient/index';
import AuthorityClient from '../AuthorityClient/index';
import GetTask from './callers/GetTask';
import CreateTask from './senders/CreateTask';
import {
  ROLES,
  ADMIN_ROLE,
  WORKER_ROLE,
  EVALUATOR_ROLE,
  MANAGER_ROLE,
  DEFAULT_DOMAIN_ID,
  TASK_STATUSES,
} from '../constants';

type Address = string;
type TokenAddress = string;
type HexString = string;
type Role = $Keys<typeof ROLES>;
type IPFSHash = string;
type TaskStatus = $Keys<typeof TASK_STATUSES>;

type DomainAdded = ContractClient.Event<{
  domainId: number, // The ID of the domain that was added.
}>;
type PotAdded = ContractClient.Event<{
  potId: number, // The ID of the funding pot that was added.
}>;
type SkillAdded = ContractClient.Event<{
  skillId: number, // A skillId for this domain.
  parentSkillId: number, // The parent skill id.
}>;
type TaskAdded = ContractClient.Event<{
  taskId: number, // The task ID.
}>;
type TaskBriefChanged = ContractClient.Event<{
  taskId: number, // The task ID.
  specificationHash: string, // The IPFS hash of the task's new specification.
}>;
type TaskCompleted = ContractClient.Event<{
  taskId: number, // The task ID.
}>;
type TaskDueDateChanged = ContractClient.Event<{
  taskId: number, // The task ID.
  dueDate: Date, // The task's new due date.
}>;
type TaskDomainChanged = ContractClient.Event<{
  taskId: number, // The task ID.
  domainId: number, // The task's new domain ID.
}>;
type TaskSkillChanged = ContractClient.Event<{
  taskId: number, // The task ID.
  skillId: number, // The task's new skill ID.
}>;
type TaskRoleUserChanged = ContractClient.Event<{
  taskId: number, // The task ID.
  role: number, // The role that changed for the task.
  user: Address, // The user with the role that changed for the task.
}>;
type TaskWorkerPayoutChanged = ContractClient.Event<{
  taskId: number, // The task ID.
  token: TokenAddress, // The token address (0x indicates ether).
  amount: number, // The token amount.
}>;
type TaskDeliverableSubmitted = ContractClient.Event<{
  taskId: number, // The task ID.
  deliverableHash: IPFSHash, // The IPFS hash of the deliverable.
}>;
type TaskWorkRatingRevealed = ContractClient.Event<{
  taskId: number, // The task ID.
  role: Role, // The role of the work rating.
  rating: number, // The rating value.
}>;
type TaskFinalized = ContractClient.Event<{
  taskId: number, // The task ID of the task that was finalized.
}>;
type TaskCanceled = ContractClient.Event<{
  taskId: number, // The task ID of the task that was canceled.
}>;
type RewardPayoutCycleStarted = ContractClient.Event<{
  payoutId: number, // The payout ID logged when a new reward payout cycle has started.
}>;
type ColonyLabelRegistered = ContractClient.Event<{
  colony: Address, // Address of the colony that registered a label
  label: string, // The label registered
}>;
type Transfer = ContractClient.Event<{
  from: Address, // Event data indicating the 'from' address.
  to: Address, // Event data indicating the 'to' address.
  value: BigNumber, // Event data indicating the amount transferred.
}>;
type Mint = ContractClient.Event<{
  address: Address, // The address that initiated the mint event.
  amount: BigNumber, // Event data indicating the amount of tokens minted.
}>;

export default class ColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;
  token: TokenClient;
  authority: AuthorityClient;

  /*
    Gets the colony's Authority contract address
  */
  getAuthority: ColonyClient.Caller<
    {},
    {
      address: Address, // The colony's Authority contract address
    },
    ColonyClient,
  >;
  /*
    Gets the Colony contract version. This starts from 1 and is incremented with every deployed contract change.
  */
  getVersion: ColonyClient.Caller<
    {},
    {
      version: number, // The version number.
    },
    ColonyClient,
  >;
  /*
    Returns the number of recovery roles.
  */
  getRecoveryRolesCount: ColonyClient.Caller<
    {},
    {
      count: number, // Number of users with the recovery role (excluding owner)
    },
    ColonyClient,
  >;
  /*
    Helper function used to generate the rating secret used in task ratings. Accepts a salt value and a value to hide, and returns the keccak256 hash of both.
  */
  generateSecret: ColonyClient.Caller<
    {
      salt: string, // Salt value.
      value: number, // Value to hide (typically a rating of 1-3).
    },
    {
      secret: HexString, // keccak256 hash of joint Salt and Value.
    },
    ColonyClient,
  >;
  /*
    Gets the selected domain's local skill ID and funding pot ID.
  */
  getDomain: ColonyClient.Caller<
    {
      domainId: number, // ID of the domain.
    },
    {
      localSkillId: number, // The domain's local skill ID.
      potId: number, // The domain's funding pot ID.
    },
    ColonyClient,
  >;
  /*
    Gets the total number of domains in a Colony. This number equals the last `domainId` created.
  */
  getDomainCount: ColonyClient.Caller<
    {},
    {
      count: number, // Number of all domain in this Colony; == the last added domainId.
    },
    ColonyClient,
  >;
  /*
    Gets the total number of reward payout cycles.
  */
  getGlobalRewardPayoutCount: ColonyClient.Caller<
    {},
    {
      count: number, // Number of reward payout cycles.
    },
    ColonyClient,
  >;
  /*
    Gets the number of claimed and waived reward payouts for a given user.
  */
  getUserRewardPayoutCount: ColonyClient.Caller<
    {
      user: Address, // Address of user.
    },
    {
      count: number, // Number of claimed and waived reward payouts.
    },
    ColonyClient,
  >;
  /*
    Gets the total number of tasks in a Colony. This number equals the last `taskId` created.
  */
  getTaskCount: ColonyClient.Caller<
    {},
    {
      count: number, // Total number of tasks in this Colony.
    },
    ColonyClient,
  >;
  /*
    Gets a certain task defined by its integer taskId.
  */
  getTask: ColonyClient.Caller<
    { taskId: number },
    {
      completionDate: ?Date, // Date when the task was completed.
      deliverableHash: ?IPFSHash, // Unique hash of the deliverable content.
      domainId: number, // Integer Domain ID the task belongs to.
      dueDate: ?Date, // When the task is due.
      id: number, // Integer task ID.
      payoutsWeCannotMake: ?number, // Number of payouts that cannot be completed with the current task funding.
      potId: ?number, // Integer ID of funding pot for the task.
      skillId: number, // Integer Skill ID the task is assigned to.
      specificationHash: IPFSHash, // Unique hash of the specification content.
      status: TaskStatus, // The task status (ACTIVE, CANCELLED or FINALIZED).
    },
    ColonyClient,
  >;
  /*
    Given a specific task, a defined role for the task, and a token address, will return any payout attached to the task in the token specified.
  */
  getTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId.
      role: Role, // Role the payout is specified for: MANAGER, EVALUATOR, or WORKER.
      token: TokenAddress, // Address of the token's contract. `0x0` value indicates Ether.
    },
    {
      amount: BigNumber, // Amount of specified tokens to payout for that task and a role.
    },
    ColonyClient,
  >;
  /*
    Given a specific task, and a token address, will return any payout attached to the task in the token specified (for all roles).
  */
  getTotalTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId.
      token: TokenAddress, // Address of the token's contract. `0x0` value indicates Ether.
    },
    {
      amount: BigNumber, // Amount of specified tokens to payout for that task.
    },
    ColonyClient,
  >;
  /*
    Every task has three roles associated with it which determine permissions for editing the task, submitting work, and ratings for performance.
  */
  getTaskRole: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId.
      role: Role, // MANAGER, EVALUATOR, or WORKER.
    },
    {
      address: Address, // Address of the user for the given role.
      rateFail: boolean, // Whether the user failed to rate their counterpart.
      rating: number, // Rating the user received (1-3).
    },
    ColonyClient,
  >;
  /*
    For a given task, will return the number of submitted ratings and the date of their submission.
  */
  getTaskWorkRatings: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId.
    },
    {
      count: number, // Total number of submitted ratings for a task.
      date: Date, // Date of the last submitted rating.
    },
    ColonyClient,
  >;
  /*
    If ratings for a task are still in the commit period, their ratings will still be hidden, but the hashed value can still be returned.
  */
  getTaskWorkRatingSecret: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId.
      role: Role, // Role that submitted the rating: MANAGER, EVALUATOR, or WORKER.
    },
    {
      secret: HexString, // the hashed rating (equivalent to the output of `keccak256(_salt, _rating)`).
    },
    ColonyClient,
  >;
  /*
    Gets a balance for a certain token in a specific pot.
  */
  getPotBalance: ColonyClient.Caller<
    {
      potId: number, // Integer potId.
      token: TokenAddress, // Address to get funds from, such as the token contract address, or empty address (`0x0` for Ether)
    },
    {
      balance: BigNumber, // Balance for token `token` in pot `potId`.
    },
    ColonyClient,
  >;
  /*
    The `nonRewardPotsTotal` is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.
  */
  getNonRewardPotsTotal: ColonyClient.Caller<
    {
      token: TokenAddress, // Address of the token's contract. `0x0` value indicates Ether.
    },
    {
      total: BigNumber, // All tokens that are not within the colony's `rewards` pot.
    },
    ColonyClient,
  >;
  /*
    Given a specific payout, returns useful information about the payout.
  */
  getRewardPayoutInfo: ColonyClient.Caller<
    {
      payoutId: number, // Id of the reward payout.
    },
    {
      blockNumber: number, // Block number at the time of creation.
      remainingTokenAmount: BigNumber, // Remaining (unclaimed) amount of tokens.
      reputationRootHash: string, // Reputation root hash at the time of creation.
      token: TokenAddress, // Token address (`0x0` value indicates Ether).
      totalTokenAmountForRewardPayout: BigNumber, // Total amount of tokens taken aside for reward payout.
      totalTokens: BigNumber, // Total colony tokens at the time of creation.
    },
    ColonyClient,
  >;
  /*
    Gets the address of the colony's official token contract.
  */
  getToken: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the colony's official deployed token contract
    },
    ColonyClient,
  >;
  /*
    Returns the total number of transactions the colony has made, == the `transactionId` of the last added transaction to the Colony.
  */
  getTransactionCount: ColonyClient.Caller<
    {},
    {
      count: number, // Number of all transactions in this Colony; == the last added transactionId.
    },
    ColonyClient,
  >;
  /*
    Creates a new task by invoking `makeTask` on-chain.
  */
  createTask: ColonyClient.Sender<
    {
      specificationHash: IPFSHash, // Hashed output of the task's work specification, stored so that it can later be referenced for task ratings or in the event of a dispute.
      domainId?: number, // Domain in which the task has been created (default value: `1`).
      skillId?: number, // The skill associated with the task (optional)
      dueDate?: Date, // The due date of the task (optional)
    },
    { TaskAdded: TaskAdded, PotAdded: PotAdded, DomainAdded: DomainAdded },
    ColonyClient,
  >;
  /*
    Mark a task as complete after the due date has passed. This allows the task to be rated and finalized (and funds recovered) even in the presence of a worker who has disappeared. Note that if the due date was not set, then this function will throw.
  */
  completeTask: ColonyClient.Sender<
    {
      taskId: number, // The task ID.
    },
    { TaskCompleted: TaskCompleted },
    ColonyClient,
  >;
  /*
    The task brief, or specification, is a description of the tasks work specification. The description is hashed and stored with the task for future reference in ratings or in the event of a dispute.
  */
  setTaskBrief: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      specificationHash: IPFSHash, // digest of the task's hashed specification.
    },
    { TaskBriefChanged: TaskBriefChanged },
    ColonyClient,
  >;
  /*
    Put the colony into recovery mode. Can only be called by user with a recovery role.
   */
  enterRecoveryMode: ColonyClient.Sender<{}, {}, ColonyClient>;
  /*
    Exit recovery mode. Can be called by anyone if enough whitelist approvals are given.
   */
  exitRecoveryMode: ColonyClient.Sender<
    {
      newVersion: number, // Resolver version to upgrade to (>= current version)
    },
    {},
    ColonyClient,
  >;
  /*
    Register the colony's ENS label.
  */
  registerColonyLabel: ColonyClient.Sender<
    {
      colonyName: string, // The label to register
      orbitDBPath: string, // The path of the orbitDB database associated with the colony name
    },
    { ColonyLabelRegistered: ColonyLabelRegistered },
    ColonyClient,
  >;
  /*
    Set a new colony owner role. There can only be one address assigned to owner role at a time. Whoever calls this function will lose their owner role. Can be called by owner role.
  */
  setOwnerRole: ColonyClient.Sender<
    {
      user: Address, // User we want to give an owner role to
    },
    {},
    ColonyClient,
  >;
  /*
    Set a new colony admin role. Can be called by an owner or admin role.
  */
  setAdminRole: ColonyClient.Sender<
    {
      user: Address, // User we want to give an admin role to
    },
    {},
    ColonyClient,
  >;
  /*
    Set a new colony recovery role. Can be called by an owner role.
  */
  setRecoveryRole: ColonyClient.Sender<
    {
      user: Address, // User we want to give a recovery role to
    },
    {},
    ColonyClient,
  >;
  /*
    Remove a colony admin role. Can only be called by an owner role.
  */
  removeAdminRole: ColonyClient.Sender<
    {
      user: Address, // User we want to remove an admin role from
    },
    {},
    ColonyClient,
  >;
  /*
    Remove a colony recovery role. Can only be called by an owner role.
  */
  removeRecoveryRole: ColonyClient.Sender<
    {
      user: Address, // User we want to remove a recovery role from
    },
    {},
    ColonyClient,
  >;
  /*
    Every task must belong to a single existing Domain. This can only be called by the manager of the task.
  */
  setTaskDomain: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      domainId: number, // Integer domainId.
    },
    { TaskDomainChanged: TaskDomainChanged },
    ColonyClient,
  >;
  /*
    The task's due date determines when a worker may submit the task's deliverable(s).
  */
  setTaskDueDate: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      dueDate: Date, // Due date.
    },
    { TaskDueDateChanged: TaskDueDateChanged },
    ColonyClient,
  >;
  /*
    Set the manager role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current manager and the user we want to assign this role to both need to sign this transaction.
  */
  setTaskManagerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      user: Address, // address of the user.
    },
    { TaskRoleUserChanged: TaskRoleUserChanged },
    ColonyClient,
  >;
  /*
    Set the worker role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current worker and the user we want to assign this role to both need to sign this transaction.
  */
  setTaskWorkerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      user: Address, // address of the user.
    },
    { TaskRoleUserChanged: TaskRoleUserChanged },
    ColonyClient,
  >;
  /*
    Set the evaluator role for the address `user` in task `taskId`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. The current evaluator and the user we want to assign this role to both need to sign this transaction.
  */
  setTaskEvaluatorRole: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      user: Address, // address of the user.
    },
    { TaskRoleUserChanged: TaskRoleUserChanged },
    ColonyClient,
  >;
  /*
  Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations. This can only be called by the manager and worker of the task.
  */
  setTaskSkill: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      skillId: number, // Integer skillId.
    },
    { TaskSkillChanged: TaskSkillChanged },
    ColonyClient,
  >;
  /*
    Set the payouts for the task manager, evaluator and worker in one transaction, for a specific token address. This can only be called by the task manager, and only if the evaluator and worker roles are either unassigned or the same as the manager.
   */
  setAllTaskPayouts: ColonyClient.Sender<
    {
      taskId: number, // The task ID.
      token: Address, // Address of the token, `0x0` value indicates Ether.
      managerAmount: BigNumber, // Payout amount for the manager.
      evaluatorAmount: BigNumber, // Payout amount for the evaluator.
      workerAmount: BigNumber, // Payout amount for the worker.
    },
    {
      TaskWorkerPayoutChanged: TaskWorkerPayoutChanged,
    },
    ColonyClient,
  >;
  /*
    Sets the payout given to the EVALUATOR role when the task is finalized.
  */
  setTaskEvaluatorPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      token: TokenAddress, // Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)
      amount: BigNumber, // Amount to be paid.
    },
    { TaskWorkerPayoutChanged: TaskWorkerPayoutChanged },
    ColonyClient,
  >;
  /*
    Sets the payout given to the MANAGER role when the task is finalized. This MultisigSender only requires one signature (from the manager).
  */
  setTaskManagerPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      token: TokenAddress, // Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)
      amount: BigNumber, // Amount to be paid.
    },
    { TaskWorkerPayoutChanged: TaskWorkerPayoutChanged },
    ColonyClient,
  >;
  /*
    Sets the payout given to the WORKER role when the task is finalized.
  */
  setTaskWorkerPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
      token: TokenAddress, // Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)
      amount: BigNumber, // Amount to be paid.
    },
    { TaskWorkerPayoutChanged: TaskWorkerPayoutChanged },
    ColonyClient,
  >;
  /*
    Removes the worker role for the given task. Only allowed before the task is complete. Must be signed by the current worker and the manager.
  */
  removeTaskWorkerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
    },
    { TaskRoleUserChanged: TaskRoleUserChanged },
    ColonyClient,
  >;
  /*
    Removes the worker role for the given task. Only allowed before the task is complete. Must be signed by the current evaluator and the manager.
  */
  removeTaskEvaluatorRole: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId.
    },
    { TaskRoleUserChanged: TaskRoleUserChanged },
    ColonyClient,
  >;
  /*
    Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.
  */
  submitTaskDeliverable: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      deliverableHash: IPFSHash, // IPFS hash of the work performed.
    },
    {
      TaskCompleted: TaskCompleted,
      TaskDeliverableSubmitted: TaskDeliverableSubmitted,
    },
    ColonyClient,
  >;
  /*
    Submits a hidden work rating for a task. This is generated by generateSecret(_salt, _rating).
  */
  submitTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      role: Role, // Role that receives rating, either MANAGER or WORKER.
      secret: HexString, // hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 1-3.
    },
    {},
    ColonyClient,
  >;
  /*
    Submit the task deliverable for the worker and the rating for the manager.
  */
  submitTaskDeliverableAndRating: ColonyClient.Sender<
    {
      taskId: number, // The task ID.
      deliverableHash: IPFSHash, // IPFS hash of the work performed.
      secret: HexString, // hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 1-3.
    },
    {
      TaskCompleted: TaskCompleted,
      TaskDeliverableSubmitted: TaskDeliverableSubmitted,
    },
    ColonyClient,
  >;
  /*
    Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `secret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function.
  */
  revealTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      role: Role, // Role whose rating submission gets revealed, either MANAGER or WORKER.
      rating: number, // Rating scored (1-3).
      salt: string, // `_salt` value to be used in `generateSecret`. A correct value will result in the same `secret` submitted during the work rating submission period.
    },
    { TaskWorkRatingRevealed: TaskWorkRatingRevealed },
    ColonyClient,
  >;
  /*
    In the event of a user not committing or revealing within the 10 day rating window, their rating of their counterpart is assumed to be the highest possible and they will receive a reputation penalty.
  */
  assignWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
    },
    {},
    ColonyClient,
  >;
  /*
    Cancels a task.
  */
  cancelTask: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
    },
    { TaskCanceled: TaskCanceled },
    ColonyClient,
  >;
  /*
    Finalizes a task, allowing roles to claim payouts and prohibiting all further changes to the task.
  */
  finalizeTask: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
    },
    { TaskFinalized: TaskFinalized },
    ColonyClient,
  >;
  /*
    Claims the payout for `token` denomination for work completed in task `taskId` by contributor with role `role`. Allowed only by the contributors themselves after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.
  */
  claimPayout: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      role: Role, // Role of the contributor claiming the payout: MANAGER, EVALUATOR, or WORKER
      token: TokenAddress, // Address to claim funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)
    },
    { Transfer: Transfer },
    ColonyClient,
  >;
  /*
    Adds a domain to the Colony along with the new domain's respective local skill (with id `parentSkillId`). This can only be called by owners of the colony. Adding new domains is currently retricted to one level only, i.e. `parentSkillId` has to be the root domain (id: 1).
  */
  addDomain: ColonyClient.Sender<
    {
      parentSkillId: number, // Id of the local skill under which the new skill will be added.
    },
    { SkillAdded: SkillAdded },
    ColonyClient,
  >;
  /*
    Move any funds received by the colony for `token` denomination to the top-levl domain pot, siphoning off a small amount to the rewards pot. No fee is taken if called against a colony's own token.
  */
  claimColonyFunds: ColonyClient.Sender<
    {
      token: TokenAddress, // Address to claim funds from; empty address (`0x0` for Ether)
    },
    {},
    ColonyClient,
  >;
  /*
    Finalises the reward payout and allows creation of next reward payout for token that has been used in `payoutId`. Can only be called when reward payout cycle is finished, i.e. 60 days from its creation.
  */
  finalizeRewardPayout: ColonyClient.Sender<
    {
      payoutId: number, // Id of the reward payout.
    },
    {},
    ColonyClient,
  >;
  /*
    Move a given amount of `token` funds from one pot to another.
  */
  moveFundsBetweenPots: ColonyClient.Sender<
    {
      fromPot: number, // Origin pot Id.
      toPot: number, // Destination pot Id.
      amount: BigNumber, // Amount of funds to move.
      token: TokenAddress, // Address of the token contract (`0x0` value indicates Ether).
    },
    {},
    ColonyClient,
  >;
  /*
    The owner of a Colony may mint new tokens.
  */
  mintTokens: ColonyClient.Sender<
    {
      amount: BigNumber, // Amount of new tokens to be minted.
    },
    { Mint: Mint },
    ColonyClient,
  >;
  /*
    Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.
  */
  startNextRewardPayout: ColonyClient.Sender<
    {
      token: TokenAddress, // Address of token used for reward payout (`0x0` value indicates Ether).
    },
    { RewardPayoutCycleStarted: RewardPayoutCycleStarted },
    ColonyClient,
  >;
  /*
    Waive reward payout. This unlocks the sender's tokens and increments the users reward payout counter, allowing them to claim the next reward payout.
  */
  waiveRewardPayouts: ColonyClient.Sender<
    {
      numPayouts: number, // Number of payouts to waive.
    },
    {},
    ColonyClient,
  >;

  /*
    Update the value of an arbitrary storage variable. This can only be called by a user with the recovery role. Certain critical variables are protected from editing in this function.
  */
  setStorageSlotRecovery: ColonyClient.Sender<
    {
      slot: number, // Address of storage slot to be updated.
      value: HexString, // Word of data to be set.
    },
    {},
    ColonyClient,
  >;
  /*
    Set the colony token. Secured function to authorised members. Note that if the `mint` functionality is to be controlled through the colony, control has to be transferred to the colony after this call.
  */
  setToken: ColonyClient.Sender<
    {
      token: Address, // Address of the token contract to use.
    },
    {},
    ColonyClient,
  >;
  /*
    Upgrades the colony to a new Colony contract version. Downgrades are not allowed (i.e. `newVersion` should be higher than the currect colony version).
  */
  upgrade: ColonyClient.Sender<
    {
      newVersion: number,
    },
    {},
    ColonyClient,
  >;

  events: {
    ColonyLabelRegistered: ColonyLabelRegistered,
    DomainAdded: DomainAdded,
    Mint: Mint,
    PotAdded: PotAdded,
    RewardPayoutCycleStarted: RewardPayoutCycleStarted,
    SkillAdded: SkillAdded,
    TaskAdded: TaskAdded,
    TaskBriefChanged: TaskBriefChanged,
    TaskCanceled: TaskCanceled,
    TaskCompleted: TaskCompleted,
    TaskDeliverableSubmitted: TaskDeliverableSubmitted,
    TaskDomainChanged: TaskDomainChanged,
    TaskDueDateChanged: TaskDueDateChanged,
    TaskFinalized: TaskFinalized,
    TaskRoleUserChanged: TaskRoleUserChanged,
    TaskSkillChanged: TaskSkillChanged,
    TaskWorkerPayoutChanged: TaskWorkerPayoutChanged,
    TaskWorkRatingRevealed: TaskWorkRatingRevealed,
    Transfer: Transfer,
  };

  static get defaultQuery() {
    return {
      contractName: 'IColony',
    };
  }

  constructor({
    adapter,
    authority,
    networkClient,
    query,
    token,
  }: {
    authority?: AuthorityClient,
    networkClient?: ColonyNetworkClient,
    token?: TokenClient,
  } & ContractClientConstructorArgs) {
    super({ adapter, query });

    if (!(networkClient instanceof ColonyNetworkClient))
      throw new Error(
        'A `networkClient` property must be supplied ' +
          '(an instance of `ColonyNetworkClient`)',
      );

    this.networkClient = networkClient;
    if (token) this.token = token;
    if (authority) this.authority = authority;

    return this;
  }

  async init() {
    await super.init();

    const { address: tokenAddress } = await this.getToken.call();
    if (!(this.token instanceof TokenClient)) {
      this.token = new TokenClient({
        adapter: this.adapter,
        query: { contractAddress: tokenAddress },
      });
      await this.token.init();
    }

    const { address: authorityAddress } = await this.getAuthority.call();
    if (!(this.authority instanceof AuthorityClient)) {
      this.authority = new AuthorityClient({
        adapter: this.adapter,
        query: { contractAddress: authorityAddress },
      });
      await this.authority.init();
    }

    return this;
  }

  initializeContractMethods() {
    this.getTask = new GetTask({ client: this });

    const makeTaskCaller = (
      name: string,
      input: Array<any>,
      output: Array<any>,
    ) =>
      this.addCaller(name, {
        input: [['taskId', 'number'], ...input],
        output,
        validateEmpty: async ({ taskId }: { taskId: number }) => {
          const { count } = await this.getTaskCount.call();
          assert(taskId <= count, `Task with ID ${taskId} not found`);
          return true;
        },
      });

    makeTaskCaller(
      'getTaskPayout',
      [['role', 'role'], ['token', 'tokenAddress']],
      [['amount', 'bigNumber']],
    );
    makeTaskCaller(
      'getTotalTaskPayout',
      [['token', 'tokenAddress']],
      [['amount', 'bigNumber']],
    );
    makeTaskCaller(
      'getTaskRole',
      [['role', 'role']],
      [['address', 'address'], ['rateFail', 'boolean'], ['rating', 'number']],
    );
    makeTaskCaller(
      'getTaskWorkRatings',
      [],
      [['count', 'number'], ['date', 'date']],
    );
    makeTaskCaller(
      'getTaskWorkRatingSecret',
      [['role', 'role']],
      [['secret', 'hexString']],
    );

    // Callers
    this.addCaller('getAuthority', {
      functionName: 'authority',
      output: [['address', 'address']],
    });
    this.addCaller('getVersion', {
      functionName: 'version',
      output: [['version', 'number']],
    });
    this.addCaller('getRecoveryRolesCount', {
      functionName: 'numRecoveryRoles',
      output: [['count', 'number']],
    });
    this.addCaller('generateSecret', {
      input: [['salt', 'string'], ['value', 'number']],
      output: [['secret', 'hexString']],
    });
    this.addCaller('getDomain', {
      input: [['domainId', 'number']],
      output: [['localSkillId', 'number'], ['potId', 'number']],
      validateEmpty: async ({ domainId }: { domainId: number }) => {
        const { count } = await this.getDomainCount.call();
        if (domainId > count)
          throw new Error(`Domain ID ${domainId} not found`);
        return true;
      },
    });
    this.addCaller('getDomainCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getGlobalRewardPayoutCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getUserRewardPayoutCount', {
      input: [['user', 'address']],
      output: [['count', 'number']],
    });
    this.addCaller('getNonRewardPotsTotal', {
      input: [['token', 'tokenAddress']],
      output: [['total', 'bigNumber']],
    });
    this.addCaller('getPotBalance', {
      input: [['potId', 'number'], ['token', 'tokenAddress']],
      output: [['balance', 'bigNumber']],
    });
    this.addCaller('getRewardPayoutInfo', {
      input: [['payoutId'], 'number'],
      output: [
        ['reputationRootHash', 'string'],
        ['totalTokens', 'bigNumber'],
        ['totalTokenAmountForRewardPayout', 'bigNumber'],
        ['remainingTokenAmount', 'bigNumber'],
        ['token', 'tokenAddress'],
        ['blockNumber', 'number'],
      ],
    });
    this.addCaller('getTaskCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getToken', {
      output: [['address', 'address']],
    });

    // Events
    this.addEvent('DomainAdded', [['domainId', 'number']]);
    this.addEvent('PotAdded', [['potId', 'number']]);
    this.addEvent('TaskAdded', [['taskId', 'number']]);
    this.addEvent('TaskCompleted', [['taskId', 'number']]);
    this.addEvent('RewardPayoutCycleStarted', [['payoutId', 'number']]);
    this.addEvent('TaskBriefChanged', [
      ['taskId', 'number'],
      ['specificationHash', 'ipfsHash'],
    ]);
    this.addEvent('TaskDueDateChanged', [
      ['taskId', 'number'],
      ['dueDate', 'date'],
    ]);
    this.addEvent('TaskDomainChanged', [
      ['taskId', 'number'],
      ['domainId', 'number'],
    ]);
    this.addEvent('TaskSkillChanged', [
      ['taskId', 'number'],
      ['skillId', 'number'],
    ]);
    this.addEvent('TaskRoleUserChanged', [
      ['taskId', 'number'],
      ['role', 'number'],
      ['user', 'tokenAddress'], // XXX because 0x0 is valid
    ]);
    this.addEvent('TaskWorkerPayoutChanged', [
      ['taskId', 'number'],
      ['token', 'tokenAddress'],
      ['amount', 'number'],
    ]);
    this.addEvent('TaskDeliverableSubmitted', [
      ['taskId', 'number'],
      ['deliverableHash', 'ipfsHash'],
    ]);
    this.addEvent('TaskWorkRatingRevealed', [
      ['taskId', 'number'],
      // $FlowFixMe
      ['role', 'role'],
      ['rating', 'number'],
    ]);
    this.addEvent('TaskFinalized', [['taskId', 'number']]);
    this.addEvent('TaskCanceled', [['taskId', 'number']]);

    // XXX The SkillAdded/ColonyLabelRegistered events (and their underlying
    // interfaces) are defined on the network client, but methods like
    // `ColonyClient.addGlobalSkill` will cause these events to be logged;
    // this workaround copies the event definition here so that it can be
    // parsed correctly.
    /* eslint-disable max-len */
    this.events.SkillAdded = this.networkClient.events.SkillAdded;
    this.events.ColonyLabelRegistered = this.networkClient.events.ColonyLabelRegistered;
    this.contract.interface.events.SkillAdded = this.networkClient.contract.interface.events.SkillAdded;
    this.contract.interface.events.ColonyLabelRegistered = this.networkClient.contract.interface.events.ColonyLabelRegistered;

    // XXX Similarly, the `Transfer` and `Mint` events from the token contract
    // need to be defined here, since they are emitted from various methods.
    if (this.token) {
      this.events.Transfer = this.token.events.Transfer;
      this.events.Mint = this.token.events.Mint;
      this.contract.interface.events.Transfer = this.token.contract.interface.events.Transfer;
      this.contract.interface.events.Mint = this.token.contract.interface.events.Mint;
    }
    /* eslint-enable max-len */

    // Senders
    this.addSender('addDomain', {
      input: [['parentSkillId', 'number']],
    });
    this.addSender('assignWorkRating', {
      input: [['taskId', 'number']],
    });
    this.addSender('cancelTask', {
      input: [['taskId', 'number']],
    });
    this.addSender('claimColonyFunds', {
      input: [['token', 'tokenAddress']],
    });
    this.addSender('claimPayout', {
      input: [
        ['taskId', 'number'],
        ['role', 'role'],
        ['token', 'tokenAddress'],
      ],
    });
    this.createTask = new CreateTask({
      client: this,
      name: 'createTask',
      functionName: 'makeTask',
      input: [
        ['specificationHash', 'ipfsHash'],
        ['domainId', 'number'],
        ['skillId', 'number'],
        ['dueDate', 'date'],
      ],
      defaultValues: {
        domainId: DEFAULT_DOMAIN_ID,
        skillId: 0,
        dueDate: new Date(0),
      },
    });
    this.addSender('completeTask', {
      input: [['taskId', 'number']],
    });
    this.addSender('finalizeTask', {
      input: [['taskId', 'number']],
    });
    this.addSender('finalizeRewardPayout', {
      input: [['payoutId', 'number']],
    });
    this.addSender('mintTokens', {
      input: [['amount', 'bigNumber']],
    });
    this.addSender('moveFundsBetweenPots', {
      input: [
        ['fromPot', 'number'],
        ['toPot', 'number'],
        ['amount', 'bigNumber'],
        ['token', 'tokenAddress'],
      ],
    });
    this.addSender('revealTaskWorkRating', {
      input: [
        ['taskId', 'number'],
        ['role', 'role'],
        ['rating', 'number'],
        ['salt', 'string'],
      ],
    });
    this.addSender('setTaskDomain', {
      input: [['taskId', 'number'], ['domainId', 'number']],
    });
    this.addSender('setAllTaskPayouts', {
      input: [
        ['taskId', 'number'],
        ['token', 'tokenAddress'],
        ['managerAmount', 'bigNumber'],
        ['evaluatorAmount', 'bigNumber'],
        ['workerAmount', 'bigNumber'],
      ],
    });
    this.addSender('setStorageSlotRecovery', {
      input: [['slot', 'number'], ['value', 'hexString']],
    });
    this.addSender('setToken', {
      input: [['token', 'tokenAddress']],
    });
    this.addSender('submitTaskDeliverable', {
      input: [['taskId', 'number'], ['deliverableHash', 'ipfsHash']],
    });
    this.addSender('submitTaskDeliverableAndRating', {
      input: [
        ['taskId', 'number'],
        ['deliverableHash', 'ipfsHash'],
        ['secret', 'hexString'],
      ],
    });
    this.addSender('startNextRewardPayout', {
      input: [['token', 'tokenAddress']],
    });
    this.addSender('waiveRewardPayouts', {
      input: [['numPayouts', 'number']],
    });
    this.addSender('submitTaskWorkRating', {
      input: [['taskId', 'number'], ['role', 'role'], ['secret', 'hexString']],
    });
    this.addSender('registerColonyLabel', {
      input: [['colonyName', 'string'], ['orbitDBPath', 'string']],
    });
    this.addSender('exitRecoveryMode', {
      input: [[]],
    });
    this.addSender('approveExitRecovery', {});
    this.addSender('enterRecoveryMode', {});
    this.addSender('setOwnerRole', {
      input: [['user', 'address']],
    });
    this.addSender('setAdminRole', {
      input: [['user', 'address']],
    });
    this.addSender('setRecoveryRole', {
      input: [['user', 'address']],
    });
    this.addSender('removeAdminRole', {
      input: [['user', 'address']],
    });
    this.addSender('removeRecoveryRole', {
      input: [['user', 'address']],
    });
    this.addSender('upgrade', {
      input: [['newVersion', 'number']],
    });

    // Remove duplicate/invalid signees and normalise lowercase
    const filterRequiredSignees = (signees: Array<Address>) =>
      [...new Set(signees)]
        .filter(isValidAddress)
        .map(signee => signee.toLowerCase());

    // Task change MultisigSenders
    const makeExecuteTaskChange = (
      name: string,
      input: Array<*>,
      roles: Array<Role> = [],
    ) =>
      this.addMultisigSender(name, {
        input: [['taskId', 'number'], ...input],
        getRequiredSignees: async ({ taskId }: { taskId: number }) => {
          const taskRoles = await Promise.all(
            roles.map(role => this.getTaskRole.call({ taskId, role })),
          );
          return filterRequiredSignees(taskRoles.map(({ address }) => address));
        },
        multisigFunctionName: 'executeTaskChange',
        nonceFunctionName: 'getTaskChangeNonce',
        nonceInput: [['taskId', 'number']],
      });
    makeExecuteTaskChange(
      'setTaskSkill',
      [['skillId', 'number']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskManagerPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskBrief',
      [['specificationHash', 'ipfsHash']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskDueDate',
      [['dueDate', 'date']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskWorkerPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskEvaluatorPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [MANAGER_ROLE, EVALUATOR_ROLE],
    );
    makeExecuteTaskChange(
      'removeTaskWorkerRole',
      [],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'removeTaskEvaluatorRole',
      [],
      [MANAGER_ROLE, EVALUATOR_ROLE],
    );

    // Task role change MultisigSenders
    const makeExecuteTaskRoleChange = <InputArgs: Object>(
      name: string,
      getRequiredSignees: (args: InputArgs) => Promise<any>,
    ) =>
      this.addMultisigSender(name, {
        input: [['taskId', 'number'], ['user', 'address']],
        getRequiredSignees: async (args: InputArgs) => {
          const { taskId, user } = args;

          // The manager's sig is required for all role change operations
          const { address: manager } = await this.getTaskRole.call({
            taskId,
            role: MANAGER_ROLE,
          });

          const requiredSignees = await getRequiredSignees(args);
          const signees = [manager, user].concat(requiredSignees);

          return filterRequiredSignees(signees);
        },
        multisigFunctionName: 'executeTaskRoleAssignment',
        nonceFunctionName: 'getTaskChangeNonce',
        nonceInput: [['taskId', 'number']],
      });
    makeExecuteTaskRoleChange('setTaskManagerRole', async ({ user }) => {
      const isAdmin = await this.authority.hasUserRole.call({
        user,
        role: ADMIN_ROLE,
      });
      if (!isAdmin)
        throw new Error('Unable to set task role; user must be an admin');
      return null;
    });
    makeExecuteTaskRoleChange('setTaskEvaluatorRole', async ({ taskId }) => {
      const { address } = await this.getTaskRole.call({
        taskId,
        role: EVALUATOR_ROLE,
      });
      if (isValidAddress(address))
        throw new Error('Unable to set task role; evaluator is already set');
      return null;
    });
    makeExecuteTaskRoleChange('setTaskWorkerRole', async ({ taskId }) => {
      const { address } = await this.getTaskRole.call({
        taskId,
        role: WORKER_ROLE,
      });
      if (isValidAddress(address))
        throw new Error('Unable to set task role; worker is already set');
      return null;
    });
  }

  async getReputation({
    skillId = 1,
    user,
  }: {
    skillId: number,
    user: Address,
  } = {}) {
    assert(Number.isFinite(skillId), 'skillId must be a number');
    assert(isValidAddress(user), 'user must be an address');

    if (this.network !== 'rinkeby')
      throw new Error(
        'Reputation is currently only supported for contracts on Rinkeby',
      );

    const response = await fetch(
      `https://colony.io/reputation/${this.network}/${
        this.contract.address
      }]/${skillId}/${user}`,
    );
    return response.json();
  }
}

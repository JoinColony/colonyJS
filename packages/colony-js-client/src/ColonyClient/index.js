/* @flow */

import assert from 'assert';

import type BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';
import { isValidAddress } from '@colony/colony-js-utils';
// eslint-disable-next-line max-len
import type { ContractClientConstructorArgs } from '@colony/colony-js-contract-client';

import ColonyNetworkClient from '../ColonyNetworkClient/index';
import TokenClient from '../TokenClient/index';
import TokenLockingClient from '../TokenLockingClient/index';

import GetTask from './callers/GetTask';
import CreateTask from './senders/CreateTask';
import MakePayment from './senders/MakePayment';
import addRecoveryMethods from '../addRecoveryMethods';

import {
  TASK_ROLES,
  ADMIN_ROLE,
  AUTHORITY_ROLES,
  WORKER_ROLE,
  EVALUATOR_ROLE,
  MANAGER_ROLE,
  DEFAULT_DOMAIN_ID,
  TASK_STATUSES,
} from '../constants';

type Address = string;
type AuthorityRole = $Keys<typeof AUTHORITY_ROLES>;
type HexString = string;
type IPFSHash = string;
type TaskRole = $Keys<typeof TASK_ROLES>;
type TaskStatus = $Keys<typeof TASK_STATUSES>;
type TokenAddress = string;

type ColonyAdminRoleRemoved = ContractClient.Event<{
  user: Address, // The address that was unassigned the `ADMIN` authority role.
}>;
type ColonyAdminRoleSet = ContractClient.Event<{
  user: Address, // The address that was assigned the `ADMIN` authority role.
}>;
type ColonyBootstrapped = ContractClient.Event<{
  users: Array<Address>, // The array of users that received an initial amount of tokens and reputation.
  amounts: Array<BigNumber>, // The array of corresponding token and reputation amounts each user recieved.
}>;
type ColonyFounderRoleSet = ContractClient.Event<{
  oldFounder: Address, // The address that assigned the `FOUNDER` authority role (the old founder).
  newFounder: Address, // The address that was assigned the `FOUNDER` authority role (the new founder).
}>;
type ColonyFundsClaimed = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract (an empty address if Ether).
  fee: BigNumber, // The fee deducted from the claim and added to the colony rewards pot.
  payoutRemainder: BigNumber, // The remaining funds (after the fee) moved to the top-level domain pot.
}>;
type ColonyFundsMovedBetweenFundingPots = ContractClient.Event<{
  fromPot: number, // The ID of the pot from which the funds were moved.
  toPot: number, // The ID of the pot to which the funds were moved.
  amount: BigNumber, // The amount of funds that were moved between pots.
  token: TokenAddress, // The address of the token contract (an empty address if Ether).
}>;
type ColonyInitialised = ContractClient.Event<{
  colonyNetwork: Address, // The address of the Colony Network.
}>;
type ColonyLabelRegistered = ContractClient.Event<{
  colony: Address, // The address of the colony that was modified.
  label: string, // The label that was registered for the colony.
}>;
type ColonyRewardInverseSet = ContractClient.Event<{
  rewardInverse: BigNumber, // The reward inverse value that was set.
}>;
type ColonyUpgraded = ContractClient.Event<{
  oldVersion: number, // The old version number of the colony.
  newVersion: number, // The new version number of the colony.
}>;
type DomainAdded = ContractClient.Event<{
  domainId: number, // The ID of the domain that was added.
}>;
type Mint = ContractClient.Event<{
  address: Address, // The address that initiated the mint event.
  amount: BigNumber, // The amount of tokens that were minted.
}>;
type FundingPotAdded = ContractClient.Event<{
  potId: number, // The numeric ID of the pot that was added.
}>;
type RewardPayoutClaimed = ContractClient.Event<{
  rewardPayoutId: number, // The ID of the reward payout cycle.
  user: Address, // The address of the user who claimed the reward payout.
  fee: BigNumber, // The fee deducted from the claim and added to the colony rewards pot.
  payoutRemainder: BigNumber, // The remaining payout amount (after the fee) transferred to the user.
}>;
type RewardPayoutCycleEnded = ContractClient.Event<{
  payoutId: number, // The ID of the payout cycle that ended.
}>;
type RewardPayoutCycleStarted = ContractClient.Event<{
  payoutId: number, // The ID of the payout cycle that started.
}>;
type SkillAdded = ContractClient.Event<{
  skillId: number, // The ID of the skill that was added.
  parentSkillId: number, // The ID of the parent skill.
}>;
type TaskAdded = ContractClient.Event<{
  taskId: number, // The ID of the task that was added.
}>;
type TaskBriefSet = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  specificationHash: string, // The specification hash that was set (an IPFS hash).
}>;
type TaskCanceled = ContractClient.Event<{
  taskId: number, // The ID of the task that was canceled.
}>;
type TaskCompleted = ContractClient.Event<{
  taskId: number, // The ID of the task that was completed.
}>;
type TaskDeliverableSubmitted = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  deliverableHash: IPFSHash, // The deliverable hash that was submitted (an IPFS hash).
}>;
type TaskDomainSet = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  domainId: number, // The ID of the domain that was set.
}>;
type TaskDueDateSet = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  dueDate: Date, // The due date that was set.
}>;
type TaskFinalized = ContractClient.Event<{
  taskId: number, // The ID of the task that was finalized.
}>;
type TaskPayoutClaimed = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  role: TaskRole, // The role of the task that was assigned the task payout (`MANAGER`, `EVALUATOR`, or `WORKER`).
  token: TokenAddress, // The address of the token contract (an empty address if Ether).
  amount: BigNumber, // The task payout amount that was claimed.
}>;
type TaskPayoutSet = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  role: TaskRole, // The role of the task that was modified (`MANAGER`, `EVALUATOR`, or `WORKER`).
  token: TokenAddress, // The address of the token contract (an empty address if Ether).
  amount: BigNumber, // The task payout amount that was set.
}>;
type TaskRoleUserSet = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  role: TaskRole, // The role of the task that was set (`MANAGER`, `EVALUATOR`, or `WORKER`).
  user: Address, // The user that was assigned the task role.
}>;
type TaskSkillSet = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  skillId: number, // The ID of the skill that was set.
}>;
type TaskWorkRatingRevealed = ContractClient.Event<{
  taskId: number, // The ID of the task that was modified.
  role: TaskRole, // The role of the task that received the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).
  rating: number, // The value of the rating that was revealed (`1`, `2`, or `3`).
}>;
type TokenLocked = ContractClient.Event<{
  token: TokenAddress, // The address of the token contract (an empty address if Ether).
  lockCount: number, // The total lock count for the token.
}>;
type Transfer = ContractClient.Event<{
  from: Address, // The address of the account that sent tokens.
  to: Address, // The address of the account that received tokens.
  value: BigNumber, // The amount of tokens that were transferred.
}>;

export default class ColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;
  tokenClient: TokenClient;
  tokenLockingClient: TokenLockingClient;

  events: {
    ColonyAdminRoleRemoved: ColonyAdminRoleRemoved,
    ColonyAdminRoleSet: ColonyAdminRoleSet,
    ColonyBootstrapped: ColonyBootstrapped,
    ColonyFounderRoleSet: ColonyFounderRoleSet,
    ColonyFundsClaimed: ColonyFundsClaimed,
    ColonyFundsMovedBetweenFundingPots: ColonyFundsMovedBetweenFundingPots,
    ColonyInitialised: ColonyInitialised,
    ColonyLabelRegistered: ColonyLabelRegistered,
    ColonyRewardInverseSet: ColonyRewardInverseSet,
    ColonyUpgraded: ColonyUpgraded,
    DomainAdded: DomainAdded,
    FundingPotAdded: FundingPotAdded,
    Mint: Mint,
    RewardPayoutClaimed: RewardPayoutClaimed,
    RewardPayoutCycleEnded: RewardPayoutCycleEnded,
    RewardPayoutCycleStarted: RewardPayoutCycleStarted,
    SkillAdded: SkillAdded,
    TaskAdded: TaskAdded,
    TaskBriefSet: TaskBriefSet,
    TaskCanceled: TaskCanceled,
    TaskCompleted: TaskCompleted,
    TaskDeliverableSubmitted: TaskDeliverableSubmitted,
    TaskDomainSet: TaskDomainSet,
    TaskDueDateSet: TaskDueDateSet,
    TaskFinalized: TaskFinalized,
    TaskPayoutClaimed: TaskPayoutClaimed,
    TaskPayoutSet: TaskPayoutSet,
    TaskRoleUserSet: TaskRoleUserSet,
    TaskSkillSet: TaskSkillSet,
    TaskWorkRatingRevealed: TaskWorkRatingRevealed,
    TokenLocked: TokenLocked,
    Transfer: Transfer,
  };

  /*
  Add a domain to the colony. Adding new domains is currently retricted to one level, i.e. the `parentDomainId` must be the id of the root domain `1`, which represents the colony itself.
  */
  addDomain: ColonyClient.Sender<
    {
      parentDomainId: number, // The ID of the parent domain.
    },
    {
      DomainAdded: DomainAdded,
      FundingPotAdded: FundingPotAdded,
      SkillAdded: SkillAdded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Add a new global skill to the skills tree. This can only be called from the Meta Colony and only by the user assigned the `FOUNDER` role.
  */
  addGlobalSkill: ColonyClient.Sender<
    {
      parentSkillId: number, // The ID of the skill under which the new skill will be added.
    },
    {
      SkillAdded: SkillAdded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Indicate approval to exit colony recovery mode. This function can only be called by a user with a recovery role.
  */
  approveExitRecovery: ColonyClient.Sender<
    {},
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Bootstrap the colony by giving an initial amount of tokens and reputation to selected users. This function can only be called by the user assigned the `FOUNDER` authority role when the `taskCount` for the colony is equal to `0`.
   */
  bootstrapColony: ColonyClient.Sender<
    {
      users: Array<Address>, // The array of users that will recieve an initial amount of tokens and reputation.
      amounts: Array<BigNumber>, // The array of corresponding token and reputation amounts each user will recieve.
    },
    {
      ColonyBootstrapped: ColonyBootstrapped,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Cancel a task. Once a task is cancelled, no further changes to the task can be made.
  */
  cancelTask: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
    },
    {
      TaskCanceled: TaskCanceled,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Claim funds that the colony has received by adding them to the funding pot of the root domain. A small fee is deducted from the funds claimed and added to the colony rewards pot. No fee is deducted when tokens native to the colony are claimed.
  */
  claimColonyFunds: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      ColonyFundsClaimed: ColonyFundsClaimed,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Claim the payout assigned to a task role. This function can only be called by the user who is assigned a task role (`MANAGER`, `EVALUATOR`, or `WORKER`) after the task has been finalized.
  */
  claimPayout: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      TaskPayoutClaimed: TaskPayoutClaimed,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Mark a task as complete. If the user assigned the `WORKER` task role fails to submit the task deliverable by the due date, this function must be called by the user assigned the `MANAGER` task role. This allows the task work to be rated and the task to be finalized.
  */
  completeTask: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
    },
    {
      TaskCompleted: TaskCompleted,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Create a new task within the colony.
  */
  createTask: ColonyClient.Sender<
    {
      specificationHash: IPFSHash, // The specification hash of the task (an IPFS hash).
      domainId: ?number, // The ID of the domain (default value of `1`).
      skillId: ?number, // The ID of the skill (default value of `null`).
      dueDate: ?Date, // The due date of the task (default value of `30` days from creation).
    },
    {
      FundingPotAdded: FundingPotAdded,
      TaskAdded: TaskAdded,
      TaskSkillSet: TaskSkillSet,
      TaskDueDateSet: TaskDueDateSet,
    },
    ColonyClient,
    {
      function: 'makeTask',
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Enter colony recovery mode. This function can only be called by a user with a recovery role.
  */
  enterRecoveryMode: ColonyClient.Sender<
    {},
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Exit colony recovery mode. This function can be called by anyone if enough whitelist approvals are given.
  */
  exitRecoveryMode: ColonyClient.Sender<
    {},
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Finalize the reward payout cycle. This function can only be called when the reward payout cycle has finished, i.e. 60 days have passed since the creation of the reward payout cycle.
  */
  finalizeRewardPayout: ColonyClient.Sender<
    {
      payoutId: number, // The ID of the reward payout cycle.
    },
    {
      RewardPayoutCycleEnded: RewardPayoutCycleEnded,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Finalize a task. Once a task is finalized, each user assigned a task role can claim the payout assigned to their role and no further changes to the task can be made.
  */
  finalizeTask: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
    },
    {
      TaskFinalized: TaskFinalized,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Generate the rating secret used in task ratings. This function returns a keccak256 hash created from the `salt` and `value`.
  */
  generateSecret: ColonyClient.Caller<
    {
      salt: string, // The string that will be used to generate a secret.
      value: number, // The task rating that will be hidden (`1`, `2`, or `3`).
    },
    {
      secret: HexString, // A keccak256 hash that keeps the task rating hidden.
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the authority contract address associated with the colony.
  */
  getAuthority: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the authority contract associated with the colony.
    },
    ColonyClient,
    {
      function: 'authority',
      contract: 'auth.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get information about a domain.
  */
  getDomain: ColonyClient.Caller<
    {
      domainId: number, // The ID of the domain.
    },
    {
      localSkillId: number, // The ID of the local skill.
      potId: number, // The ID of the funding pot.
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the total number of domains in the colony. The return value is also the ID of the last domain created.
  */
  getDomainCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of domains.
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the total amount of funds that are not in the colony rewards pot. The total amount of funds that are not in the colony rewards pot is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.
  */
  getNonRewardPotsTotal: ColonyClient.Caller<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      total: BigNumber, // The total amount of funds that are not in the colony rewards pot.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get information about a funding pot.
  */
  getFundingPot: ColonyClient.Caller<
    {
      potId: number, // The numeric ID of the funding pot.
    },
    {
      associatedType: string, // The associated type of the funding pot (`domain` or `task`).
      associatedTypeId: number, // The id of the associated type (`domainId` or `taskId`).
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the balance of a funding pot.
  */
  getFundingPotBalance: ColonyClient.Caller<
    {
      potId: number, // The ID of the funding pot.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      balance: BigNumber, // The balance of tokens (or Ether) in the funding pot.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the total number of funding pots.
  */
  getFundingPotCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of funding pots.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the total number of users that are assigned a colony recovery role.
  */
  getRecoveryRolesCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of users that are assigned a colony recovery role.
    },
    ColonyClient,
    {
      function: 'numRecoveryRoles',
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100.
  */
  getRewardInverse: ColonyClient.Caller<
    {},
    {
      rewardInverse: BigNumber, // The inverse amount of the reward.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get information about a reward payout cycle.
  */
  getRewardPayoutInfo: ColonyClient.Caller<
    {
      payoutId: number, // The ID of the reward payout cycle.
    },
    {
      blockNumber: number, // The block number at the time the reward payout cycle started.
      remainingTokenAmount: BigNumber, // The remaining amount of unclaimed tokens (or Ether).
      reputationRootHash: string, // The reputation root hash at the time the reward payout cycle started.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      totalTokenAmountForRewardPayout: BigNumber, // The total amount of tokens set aside for the reward payout cycle.
      totalTokens: BigNumber, // The total amount of tokens at the time the reward payout cycle started.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get information about a task.
  */
  getTask: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
    },
    {
      completionDate: Date, // The date when the task deliverable was submitted.
      deliverableHash: IPFSHash, // The deliverable hash of the task (an IPFS hash).
      domainId: number, // The ID of the domain.
      dueDate: Date, // The final date that the task deliverable can be submitted.
      id: number, // The ID of the task.
      payoutsWeCannotMake: number, // The number of payouts that cannot be completed (`0` or `1`). If this value is `1`, it means that the funding pot associated with the task does not have enough funds to perform the task payouts, i.e. the total amount for the three task payouts is more than the total balance of the funding pot associated with the task.
      potId: number, // The ID of the funding pot.
      skillId: number, // The ID of the skill.
      specificationHash: IPFSHash, // The specification hash of the task (an IPFS hash).
      status: TaskStatus, // The task status (`ACTIVE`, `CANCELLED` or `FINALIZED`).
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the total number of tasks in the colony. The return value is also the ID of the last task created.
  */
  getTaskCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of tasks.
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the task payout amount assigned to a task role. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.
  */
  getTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The task role (`MANAGER`, `EVALUATOR`, or `WORKER`).
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      amount: BigNumber, // The amount of tokens (or Ether) assigned to the task role as a payout.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get information about a task role.
  */
  getTaskRole: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The role of the task (`MANAGER`, `EVALUATOR`, or `WORKER`).
    },
    {
      address: Address, // The address of the user that is assigned the task role.
      rateFail: boolean, // A boolean indicating whether or not the user failed to rate their counterpart.
      rating: number, // The rating that the user received (`1`, `2`, or `3`).
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get information about the ratings of a task.
  */
  getTaskWorkRatings: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
    },
    {
      count: number, // The total number of submitted ratings for a task.
      date: Date, // The date that the last rating was submitted.
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the secret of a rating that has been submitted. If a task is in the commit period of the rating process, the ratings are hidden in a keccak256 hash that was created from a `salt` and `value`. The rating secret can be retrieved but in order to reveal the secret, one would have to know both the `salt` and `value` used to generate the secret.
  */
  getTaskWorkRatingSecret: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The role that submitted the rating (`MANAGER`, `EVALUATOR`, or `WORKER`).
    },
    {
      secret: HexString, // A keccak256 hash that keeps the task rating hidden.
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the address of the token contract that is the native token assigned to the colony. The native token is the token used to calculate reputation scores, i.e. `1` token earned for completing a task with an adequate rating (`2`) will result in `1` reputation point earned.
  */
  getToken: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the token contract.
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the total payout amount assigned to all task roles. Multiple tokens can be used for task payouts, therefore the token must be specified when calling this function. In order to get the task payout amount in Ether, `token` must be an empty address.
  */
  getTotalTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      amount: BigNumber, // The total amount of tokens (or Ether) assigned to all task roles as payouts.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Get the version number of the colony contract. The version number starts at `1` and is incremented by `1` with every new version.
  */
  getVersion: ColonyClient.Caller<
    {},
    {
      version: number, // The version number of the colony contract.
    },
    ColonyClient,
    {
      function: 'version',
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Check whether a user has an authority role.
  */
  hasUserRole: ColonyClient.Caller<
    {
      user: Address, // The address of the user that will be checked.
      role: AuthorityRole, // The authority role that will be checked (`FOUNDER` or `ADMIN`).
    },
    {
      hasRole: boolean, // A boolean indicating whether or not the user has the authority role.
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Check whether or not the colony is in recovery mode.
  */
  isInRecoveryMode: ColonyClient.Caller<
    {},
    {
      inRecoveryMode: boolean, // A boolean indicating whether or not the colony is in recovery mode.
    },
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Make a payment. This function can only be called by the user assigned either the `FOUNDER` or `ADMIN` authority role.
  */
  makePayment: ColonyClient.Sender<
    {
      worker: Address,
      token: TokenAddress,
      amount: BigNumber,
      domainId: number,
      skillId: number,
    },
    {
      FundingPotAdded: FundingPotAdded,
      TaskAdded: TaskAdded,
      TaskSkillSet: TaskSkillSet,
      TaskDueDateSet: TaskDueDateSet,
      TaskRoleUserSet: TaskRoleUserSet,
      TaskPayoutSet: TaskPayoutSet,
      ColonyFundsMovedBetweenFundingPots: ColonyFundsMovedBetweenFundingPots,
      TaskPayoutClaimed: TaskPayoutClaimed,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Mint new tokens. This function can only be called if the address of the colony contract is the owner of the token contract. If this is the case, then this function can only be called by the user assigned the `FOUNDER` authority role.
  */
  mintTokens: ColonyClient.Sender<
    {
      amount: BigNumber, // The amount of new tokens that will be minted.
    },
    {
      Mint: Mint,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Mint tokens for the Colony Network. This can only be called from the Meta Colony and only by the user assigned the `FOUNDER` role.
  */
  mintTokensForColonyNetwork: ColonyClient.Sender<
    {
      amount: BigNumber, // The amount of new tokens that will be minted.
    },
    {
      Mint: Mint,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Move funds from one pot to another.
  */
  moveFundsBetweenPots: ColonyClient.Sender<
    {
      fromPot: number, // The ID of the pot from which funds will be moved.
      toPot: number, // The ID of the pot to which funds will be moved.
      amount: BigNumber, // The amount of funds that will be moved between pots.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      ColonyFundsMovedBetweenFundingPots: ColonyFundsMovedBetweenFundingPots,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Register an ENS label for the colony.
  */
  registerColonyLabel: ColonyClient.Sender<
    {
      colonyName: string, // The ENS label that will be registered for the colony.
      orbitDBPath: string, // The path of the OrbitDB database associated with the colony.
    },
    {
      ColonyLabelRegistered: ColonyLabelRegistered,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Remove the `ADMIN` authority role from a user. This function can only be called by the user assigned the `FOUNDER` authroity role.
  */
  removeAdminRole: ColonyClient.Sender<
    {
      user: Address, // The address that we will be unassigned the `ADMIN` authority role.
    },
    {
      ColonyAdminRoleRemoved: ColonyAdminRoleRemoved,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Remove the colony recovery role from a user. This function can only be called by the `FOUNDER` authority role.
  */
  removeRecoveryRole: ColonyClient.Sender<
    {
      user: Address, // The address that will be unassigned a colony recovery role.
    },
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Remove the `EVALUATOR` task role assignment. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the user assigned the `WORKER` task role has failed to meet the deadline and the user assigned the `MANAGER` task role has marked the task as complete.
  */
  removeTaskEvaluatorRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Remove the `WORKER` task role assignment. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the user assigned the `WORKER` task role has failed to meet the deadline and the user assigned the `MANAGER` task role has marked the task as complete.
  */
  removeTaskWorkerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Reveal a submitted work rating. In order to reveal a work rating, the same `salt` and `value` used to generate the `secret` when the task work rating was submitted must be provided again here to reveal the task work rating.
  */
  revealTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The role that received the rating (`MANAGER` or `WORKER`).
      rating: number, // The rating that was submitted (`1`, `2`, or `3`).
      salt: string, // The string that was used to generate the secret.
    },
    {
      TaskWorkRatingRevealed: TaskWorkRatingRevealed,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Assign the `ADMIN` authority role to a user. This function can only be called by the user assigned the `FOUNDER` authority role or a user assigned the `ADMIN` authority role. There is no limit to the number of users that can be assigned the `ADMIN` authority role.
  */
  setAdminRole: ColonyClient.Sender<
    {
      user: Address, // The address that will be assigned the `ADMIN` authroity role.
    },
    {
      ColonyAdminRoleSet: ColonyAdminRoleSet,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the payouts for all task roles (`MANAGER`, `EVALUATOR`, and `WORKER`). This can only be called by the user assigned the `MANAGER` task role and only if the `EVALUATOR` and `WORKER` task roles are either not assigned or assigned to the same user as the `MANAGER` task role.
  */
  setAllTaskPayouts: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      managerAmount: BigNumber, // The payout amount in tokens (or Ether) for the `MANAGER` task role.
      evaluatorAmount: BigNumber, // The payout amount in tokens (or Ether) for the `EVALUATOR` task role.
      workerAmount: BigNumber, // The payout amount in tokens (or Ether) for the `WORKER` task role.
    },
    {
      TaskPayoutSet: TaskPayoutSet,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Assign the `FOUNDER` authority role to a user. This function can only be called by the user currently assigned the `FOUNDER` authority role. There can only be one address assigned to the `FOUNDER` authority role, therefore, the user currently assigned will forfeit their role.
  */
  setFounderRole: ColonyClient.Sender<
    {
      user: Address, // The address that will be assigned the `FOUNDER` authority role.
    },
    {
      ColonyFounderRoleSet: ColonyFounderRoleSet,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the inverse amount of the reward. This can only be called from the Meta Colony and only by the user assigned the `FOUNDER` role. If the fee is 1% (or 0.01), the inverse amount will be 100.
  */
  setNetworkFeeInverse: ColonyClient.Sender<
    {
      feeInverse: number, // The inverse amount that will be set.
    },
    {},
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Assign a colony recovery role to a user. This function can only be called by the `FOUNDER` authority role.
  */
  setRecoveryRole: ColonyClient.Sender<
    {
      user: Address, // The address that will be assigned a colony recovery role.
    },
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the inverse amount of the reward. If the fee is 1% (or 0.01), the inverse amount will be 100.
  */
  setRewardInverse: ColonyClient.Sender<
    {
      rewardInverse: BigNumber, // The inverse amount of the reward.
    },
    {
      ColonyRewardInverseSet: ColonyRewardInverseSet,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the value for a storage slot while in recovery mode. This can only be called by a user with a recovery role.
  */
  setStorageSlotRecovery: ColonyClient.Sender<
    {
      slot: number, // The ID of the storage slot that will be modified.
      value: HexString, // The hex string of data that will be set as the value.
    },
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the task specification. The task specification, or "task brief", is a description of the work that must be completed for the task. The description is hashed and stored with the task for future reference during the rating process or in the event of a dispute.
  */
  setTaskBrief: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      specificationHash: IPFSHash, // The specification hash of the task (an IPFS hash).
    },
    {
      TaskBriefSet: TaskBriefSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the domain of a task. Every task must belong to a domain. This function can only be called by the user assigned the `MANAGER` task role.
  */
  setTaskDomain: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      domainId: number, // The ID of the domain.
    },
    {
      TaskDomainSet: TaskDomainSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the due date of a task. The due date is the last day that the user assigned the `WORKER` task role can submit the task deliverable.
  */
  setTaskDueDate: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      dueDate: Date, // The due date of the task.
    },
    {
      TaskDueDateSet: TaskDueDateSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Assign the `EVALUATOR` task role to a user. This function can only be called before the task is finalized. The user assigned the `MANAGER` task role and the user being assigned the `EVALUATOR` task role must both sign the transaction before it can be executed.
  */
  setTaskEvaluatorRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      user: Address, // The address that will be assigned the `EVALUATOR` task role.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Assign the `MANAGER` task role to a user. This function can only be called before the task is finalized. The user currently assigned the `MANAGER` task role and the user being assigned the `MANAGER` task role must both sign the transaction before it can be executed.
  */
  setTaskManagerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      user: Address, // The address that will be assigned the `MANANAGER` task role.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the skill of a task. Only one skill can be assigned per task. The user assigned the `MANAGER` task role and the user assigned the `WORKER` task role must both sign this transaction before it can be executed.
  */
  setTaskSkill: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      skillId: number, // The ID of the skill.
    },
    {
      TaskSkillSet: TaskSkillSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Assign the `WORKER` task role to a user. This function can only be called before the task is finalized. The user assigned the `MANAGER` task role and the user being assigned the `WORKER` task role must both sign the transaction before it can be executed.
  */
  setTaskWorkerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      user: Address, // The address that will be assigned the `WORKER` task role.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the payout amount for the `MANAGER` task role.
  */
  setTaskManagerPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The payout amount in tokens (or Ether).
    },
    {
      TaskPayoutSet: TaskPayoutSet,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the payout amount for the `EVALUATOR` task role.
  */
  setTaskEvaluatorPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The payout amount in tokens (or Ether).
    },
    {
      TaskPayoutSet: TaskPayoutSet,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Set the payout amount for the `WORKER` task role.
  */
  setTaskWorkerPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The payout amount in tokens (or Ether).
    },
    {
      TaskPayoutSet: TaskPayoutSet,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Start the next reward payout cycle. All the funds in the colony rewards pot for the given token will become locked until reputation holders have claimed their rewards payout using `claimRewardPayout`. Reputation holders can also waive their reward payout and unlock their tokens for past reward payout cycles by using `incrementLockCounterTo`.
  */
  startNextRewardPayout: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      RewardPayoutCycleStarted: RewardPayoutCycleStarted,
      TokenLocked: TokenLocked,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Submit the task deliverable. This function can only be called by the user assigned the `WORKER` task role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted.
  */
  submitTaskDeliverable: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      deliverableHash: IPFSHash, // The deliverable hash of the task (an IPFS hash).
    },
    {
      TaskCompleted: TaskCompleted,
      TaskDeliverableSubmitted: TaskDeliverableSubmitted,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Submit the task deliverable and the work rating for the user assigned the `MANAGER` task role. This function can only be called by the user assigned the `WORKER` task role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.
  */
  submitTaskDeliverableAndRating: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      deliverableHash: IPFSHash, // The deliverable hash of the task (an IPFS hash).
      secret: HexString, // A keccak256 hash that keeps the task rating hidden.
    },
    {
      TaskCompleted: TaskCompleted,
      TaskDeliverableSubmitted: TaskDeliverableSubmitted,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Submit a work rating for a task. This function can only be called by the user assigned the `EVALUATOR` task role, who is submitting a rating for the user assigned the `WORKER` task role, or the user assigned the `WORKER` task role, who is submitting a rating for the user assigned the `MANAGER` task role. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.
  */
  submitTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The role that will receive the rating (`MANAGER` or `WORKER`).
      secret: HexString, // A keccak256 hash that keeps the task rating hidden.
    },
    {},
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;
  /*
  Upgrade the colony to a new contract version. The new version number must be higher than the current version. Downgrading to old contract versions is not permitted.
  */
  upgrade: ColonyClient.Sender<
    {
      newVersion: number, // The version number of the colony contract.
    },
    {
      ColonyUpgraded: ColonyUpgraded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '9bba127b0286708d4f8919526a943b0e916cfd7c',
    },
  >;

  static get defaultQuery() {
    return {
      contractName: 'IColony',
    };
  }

  static get TokenClient(): * {
    return TokenClient;
  }

  static get TokenLockingClient(): * {
    return TokenLockingClient;
  }

  constructor({
    adapter,
    networkClient,
    query,
    tokenClient,
    tokenLockingClient,
  }: {
    networkClient?: ColonyNetworkClient,
    tokenClient?: TokenClient,
    tokenLockingClient?: TokenLockingClient,
  } & ContractClientConstructorArgs) {
    super({ adapter, query });

    if (!(networkClient instanceof ColonyNetworkClient))
      throw new Error(
        'A `networkClient` property must be supplied ' +
          '(an instance of `ColonyNetworkClient`)',
      );

    if (!(tokenLockingClient instanceof TokenLockingClient))
      throw new Error(
        'A `tokenLockingClient` property must be supplied ' +
          '(an instance of `TokenLockingClient`)',
      );

    this.networkClient = networkClient;
    if (tokenClient) this.tokenClient = tokenClient;
    this.tokenLockingClient = tokenLockingClient;

    return this;
  }

  async init() {
    await super.init();

    if (!(this.tokenClient instanceof TokenClient)) {
      this.tokenClient = await this.getTokenClient();
    }

    return this;
  }

  isMetaColony() {
    return this._query.contractName === 'IMetaColony';
  }

  _addMetaColonyOnlyError(propName: string) {
    Object.assign(this, {
      [propName]: () => {
        throw new Error(`"${propName}" is only available for the MetaColony`);
      },
    });
  }

  addMetaColonySender(name: string, def: Object) {
    return this.isMetaColony()
      ? this.addSender(name, def)
      : this._addMetaColonyOnlyError(name);
  }

  /*
  Get an initialized TokenClient.
  */
  async getTokenClient() {
    const { address: tokenAddress } = await this.getToken.call();
    const tokenClient = new this.constructor.TokenClient({
      adapter: this.adapter,
      query: { contractAddress: tokenAddress },
    });
    await tokenClient.init();
    return tokenClient;
  }

  initializeContractMethods() {
    addRecoveryMethods(this);

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
      [['role', 'taskRole'], ['token', 'tokenAddress']],
      [['amount', 'bigNumber']],
    );
    makeTaskCaller(
      'getTaskRole',
      [['role', 'taskRole']],
      [['address', 'address'], ['rateFail', 'boolean'], ['rating', 'number']],
    );
    makeTaskCaller(
      'getTaskWorkRatings',
      [],
      [['count', 'number'], ['date', 'date']],
    );
    makeTaskCaller(
      'getTaskWorkRatingSecret',
      [['role', 'taskRole']],
      [['secret', 'hexString']],
    );
    makeTaskCaller(
      'getTotalTaskPayout',
      [['token', 'tokenAddress']],
      [['amount', 'bigNumber']],
    );

    // Callers
    this.addCaller('generateSecret', {
      input: [['salt', 'string'], ['value', 'number']],
      output: [['secret', 'hexString']],
    });
    this.addCaller('getAuthority', {
      functionName: 'authority',
      output: [['address', 'address']],
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
    this.addCaller('getNonRewardPotsTotal', {
      input: [['token', 'tokenAddress']],
      output: [['total', 'bigNumber']],
    });
    this.addCaller('getFundingPot', {
      input: [['potId', 'number']],
      output: [['associatedType', 'string'], ['associatedTypeId', 'number']],
    });
    this.addCaller('getFundingPotBalance', {
      input: [['potId', 'number'], ['token', 'tokenAddress']],
      output: [['balance', 'bigNumber']],
    });
    this.addCaller('getFundingPotCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getRewardInverse', {
      output: [['rewardInverse', 'bigNumber']],
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
    this.addCaller('getVersion', {
      functionName: 'version',
      output: [['version', 'number']],
    });
    this.addCaller('hasUserRole', {
      input: [['user', 'address'], ['role', 'authorityRole']],
      output: [['hasRole', 'boolean']],
    });

    // Events
    this.addEvent('ColonyAdminRoleRemoved', [['user', 'address']]);
    this.addEvent('ColonyAdminRoleSet', [['user', 'address']]);
    this.addEvent('ColonyBootstrapped', [
      ['users', '[address]'],
      ['amounts', '[bigNumber]'],
    ]);
    this.addEvent('ColonyFounderRoleSet', [
      ['oldFounder', 'address'],
      ['newFounder', 'address'],
    ]);
    this.addEvent('ColonyFundsClaimed', [
      ['token', 'tokenAddress'],
      ['fee', 'bigNumber'],
      ['payoutRemainder', 'bigNumber'],
    ]);
    this.addEvent('ColonyFundsMovedBetweenFundingPots', [
      ['fromPot', 'number'],
      ['toPot', 'number'],
      ['amount', 'bigNumber'],
      ['token', 'tokenAddress'],
    ]);
    this.addEvent('ColonyInitialised', [['colonyNetwork', 'address']]);
    this.addEvent('ColonyRewardInverseSet', [['rewardInverse', 'bigNumber']]);
    this.addEvent('ColonyUpgraded', [
      ['oldVersion', 'number'],
      ['newVersion', 'number'],
    ]);
    this.addEvent('DomainAdded', [['domainId', 'number']]);
    this.addEvent('FundingPotAdded', [['potId', 'number']]);
    this.addEvent('RewardPayoutCycleStarted', [['payoutId', 'number']]);
    this.addEvent('RewardPayoutCycleEnded', [['payoutId', 'number']]);
    this.addEvent('TaskAdded', [['taskId', 'number']]);
    this.addEvent('TaskBriefSet', [
      ['taskId', 'number'],
      ['specificationHash', 'ipfsHash'],
    ]);
    this.addEvent('TaskCanceled', [['taskId', 'number']]);
    this.addEvent('TaskCompleted', [['taskId', 'number']]);
    this.addEvent('TaskDeliverableSubmitted', [
      ['taskId', 'number'],
      ['deliverableHash', 'ipfsHash'],
    ]);
    this.addEvent('TaskDomainSet', [
      ['taskId', 'number'],
      ['domainId', 'number'],
    ]);
    this.addEvent('TaskDueDateSet', [
      ['taskId', 'number'],
      ['dueDate', 'date'],
    ]);
    this.addEvent('TaskFinalized', [['taskId', 'number']]);
    this.addEvent('TaskPayoutClaimed', [
      ['taskId', 'number'],
      // $FlowFixMe
      ['role', 'taskRole'],
      ['token', 'tokenAddress'],
      ['amount', 'bigNumber'],
    ]);
    this.addEvent('TaskPayoutSet', [
      ['taskId', 'number'],
      // $FlowFixMe
      ['role', 'taskRole'],
      ['token', 'tokenAddress'],
      ['amount', 'bigNumber'],
    ]);
    this.addEvent('TaskRoleUserSet', [
      ['taskId', 'number'],
      // $FlowFixMe
      ['role', 'taskRole'],
      ['user', 'tokenAddress'], // XXX because 0x0 is valid
    ]);
    this.addEvent('TaskSkillSet', [
      ['taskId', 'number'],
      ['skillId', 'number'],
    ]);
    this.addEvent('TaskWorkRatingRevealed', [
      ['taskId', 'number'],
      // $FlowFixMe
      ['role', 'taskRole'],
      ['rating', 'number'],
    ]);

    /* eslint-disable max-len */
    // The following events (and their underlying interfaces) are defined on
    // another client, but methods within the colony client will cause these
    // events to be logged. This workaround copies the event definitions here
    // so that it can be parsed correctly.

    // Events defined on the network client
    this.events.ColonyLabelRegistered = this.networkClient.events.ColonyLabelRegistered;
    this.events.SkillAdded = this.networkClient.events.SkillAdded;
    this.contract.interface.events.ColonyLabelRegistered = this.networkClient.contract.interface.events.ColonyLabelRegistered;
    this.contract.interface.events.SkillAdded = this.networkClient.contract.interface.events.SkillAdded;

    // Events defined on the token client
    if (this.tokenClient) {
      this.events.Mint = this.tokenClient.events.Mint;
      this.events.Transfer = this.tokenClient.events.Transfer;
      this.contract.interface.events.Mint = this.tokenClient.contract.interface.events.Mint;
      this.contract.interface.events.Transfer = this.tokenClient.contract.interface.events.Transfer;
    }

    // Events defined on the token locking client
    this.events.TokenLocked = this.tokenLockingClient.events.TokenLocked;
    this.contract.interface.events.TokenLocked = this.tokenLockingClient.contract.interface.events.TokenLocked;
    /* eslint-enable max-len */

    // Senders
    this.addSender('addDomain', {
      input: [['parentDomainId', 'number']],
    });
    this.addSender('bootstrapColony', {
      input: [['users', '[address]'], ['amounts', '[bigNumber]']],
    });
    this.addSender('claimColonyFunds', {
      input: [['token', 'tokenAddress']],
    });
    this.addSender('claimPayout', {
      input: [
        ['taskId', 'number'],
        ['role', 'taskRole'],
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
    this.makePayment = new MakePayment({
      client: this,
      name: 'makePayment',
      functionName: 'makePayment',
      input: [
        ['worker', 'address'],
        ['token', 'tokenAddress'],
        ['amount', 'bigNumber'],
        ['domainId', 'number'],
        ['skillId', 'number'],
      ],
      defaultValues: {
        domainId: DEFAULT_DOMAIN_ID,
        skillId: 0,
      },
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
    this.addSender('registerColonyLabel', {
      input: [['colonyName', 'string'], ['orbitDBPath', 'string']],
    });
    this.addSender('removeAdminRole', {
      input: [['user', 'address']],
    });
    this.addSender('revealTaskWorkRating', {
      input: [
        ['taskId', 'number'],
        ['role', 'taskRole'],
        ['rating', 'number'],
        ['salt', 'string'],
      ],
    });
    this.addSender('setAdminRole', {
      input: [['user', 'address']],
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
    this.addSender('setFounderRole', {
      input: [['user', 'address']],
    });
    this.addSender('setRewardInverse', {
      input: [['rewardInverse', 'bigNumber']],
    });
    this.addSender('startNextRewardPayout', {
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
    this.addSender('submitTaskWorkRating', {
      input: [
        ['taskId', 'number'],
        ['role', 'taskRole'],
        ['secret', 'hexString'],
      ],
    });
    this.addSender('upgrade', {
      input: [['newVersion', 'number']],
    });
    this.addMetaColonySender('addGlobalSkill', {
      input: [['parentSkillId', 'number']],
    });
    this.addMetaColonySender('mintTokensForColonyNetwork', {
      input: [['amount', 'bigNumber']],
    });
    this.addMetaColonySender('setNetworkFeeInverse', {
      input: [['feeInverse', 'number']],
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
      roles: Array<TaskRole> = [],
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
    makeExecuteTaskChange('cancelTask', [], [MANAGER_ROLE, WORKER_ROLE]);
    makeExecuteTaskChange(
      'removeTaskEvaluatorRole',
      [],
      [MANAGER_ROLE, EVALUATOR_ROLE],
    );
    makeExecuteTaskChange(
      'removeTaskWorkerRole',
      [],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskBrief',
      [['specificationHash', 'ipfsHash']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskDomain',
      [['domainId', 'number']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskDueDate',
      [['dueDate', 'date']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskEvaluatorPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [MANAGER_ROLE, EVALUATOR_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskManagerPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskSkill',
      [['skillId', 'number']],
      [MANAGER_ROLE, WORKER_ROLE],
    );
    makeExecuteTaskChange(
      'setTaskWorkerPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [MANAGER_ROLE, WORKER_ROLE],
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
    makeExecuteTaskRoleChange('setTaskEvaluatorRole', async ({ taskId }) => {
      const { address } = await this.getTaskRole.call({
        taskId,
        role: EVALUATOR_ROLE,
      });
      if (isValidAddress(address))
        throw new Error('Unable to set task role; evaluator is already set');
      return null;
    });
    makeExecuteTaskRoleChange('setTaskManagerRole', async ({ user }) => {
      const isAdmin = await this.hasUserRole.call({
        user,
        role: ADMIN_ROLE,
      });
      if (!isAdmin)
        throw new Error('Unable to set task role; user must be an admin');
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

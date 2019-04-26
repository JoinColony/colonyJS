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
import GetExtensionAddress from './callers/GetExtensionAddress';

import AddExtension from './senders/AddExtension';
import AddPayment from './senders/AddPayment';
import AddTask from './senders/AddTask';
import MakePayment from './senders/MakePayment';
import RemoveExtension from './senders/RemoveExtension';
import SetAdminRole from './senders/SetAdminRole';
import SetFounderRole from './senders/SetFounderRole';
import addRecoveryMethods from '../addRecoveryMethods';

import {
  COLONY_ROLE_ARCHITECTURE,
  COLONY_ROLES,
  DEFAULT_DOMAIN_ID,
  FUNDING_POT_TYPES,
  TASK_ROLE_EVALUATOR,
  TASK_ROLE_MANAGER,
  TASK_ROLE_WORKER,
  TASK_ROLES,
  TASK_STATUSES,
} from '../constants';

type Address = string;
type ColonyRole = $Keys<typeof COLONY_ROLES>;
type FundingPotTypes = $Keys<typeof FUNDING_POT_TYPES>;
type HexString = string;
type IPFSHash = string;
type TaskRole = $Keys<typeof TASK_ROLES>;
type TaskStatus = $Keys<typeof TASK_STATUSES>;
type TokenAddress = string;

type ColonyAdministrationRoleSet = ContractClient.Event<{
  address: Address, // The address that was either assigned or unassigned the colony `ADMINISTRATION` role.
  setTo: boolean, // A boolean indicating whether the address was assigned or unassigned the colony `ADMINISTRATION` role.
}>;
type ColonyArchitectureRoleSet = ContractClient.Event<{
  address: Address, // The address that was either assigned or unassigned the colony `ARCHITECTURE` role.
  setTo: boolean, // A boolean indicating whether the address was assigned or unassigned the colony `ARCHITECTURE` role.
}>;
type ColonyBootstrapped = ContractClient.Event<{
  addresses: Array<Address>, // The array of users that received an initial amount of tokens and reputation.
  amounts: Array<BigNumber>, // The array of corresponding token and reputation amounts each user recieved.
}>;
type ColonyFundingRoleSet = ContractClient.Event<{
  address: Address, // The address that was either assigned or unassigned the colony `FUNDING` role.
  setTo: boolean, // A boolean indicating whether the address was assigned or unassigned the colony `FUNDING` role.
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
  token: TokenAddress, // The address of the token contract.
}>;
type ColonyLabelRegistered = ContractClient.Event<{
  colony: Address, // The address of the colony that was modified.
  label: string, // The label that was registered for the colony.
}>;
type ColonyRewardInverseSet = ContractClient.Event<{
  rewardInverse: BigNumber, // The reward inverse value that was set.
}>;
type ColonyRootRoleSet = ContractClient.Event<{
  address: Address, // The address that was either assigned or unassigned the colony `ROOT` role.
  setTo: boolean, // A boolean indicating whether the address was assigned or unassigned the colony `ROOT` role.
}>;
type ColonyUpgraded = ContractClient.Event<{
  oldVersion: number, // The old version number of the colony.
  newVersion: number, // The new version number of the colony.
}>;
type ColonyVersionAdded = ContractClient.Event<{
  version: number, // The colony contract version that was added.
  resolver: Address, // The address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract.
}>;
type DomainAdded = ContractClient.Event<{
  domainId: number, // The ID of the domain that was added.
}>;
type FundingPotAdded = ContractClient.Event<{
  potId: number, // The ID of the pot that was added.
}>;
type Mint = ContractClient.Event<{
  address: Address, // The address that initiated the mint event.
  amount: BigNumber, // The amount of tokens that were minted.
}>;
type PaymentAdded = ContractClient.Event<{
  paymentId: number, // The ID of the payment that was added.
}>;
type PayoutClaimed = ContractClient.Event<{
  potId: number, // The ID of the pot that was modified.
  token: TokenAddress, // The address of the token contract (an empty address if Ether).
  amount: BigNumber, // The task payout amount that was claimed.
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
  specificationHash: IPFSHash, // The specification hash that was set (an IPFS hash).
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
    ColonyAdministrationRoleSet: ColonyAdministrationRoleSet,
    ColonyArchitectureRoleSet: ColonyArchitectureRoleSet,
    ColonyBootstrapped: ColonyBootstrapped,
    ColonyFundingRoleSet: ColonyFundingRoleSet,
    ColonyFundsClaimed: ColonyFundsClaimed,
    ColonyFundsMovedBetweenFundingPots: ColonyFundsMovedBetweenFundingPots,
    ColonyInitialised: ColonyInitialised,
    ColonyLabelRegistered: ColonyLabelRegistered,
    ColonyRewardInverseSet: ColonyRewardInverseSet,
    ColonyRootRoleSet: ColonyRootRoleSet,
    ColonyUpgraded: ColonyUpgraded,
    ColonyVersionAdded: ColonyVersionAdded,
    DomainAdded: DomainAdded,
    FundingPotAdded: FundingPotAdded,
    Mint: Mint,
    PaymentAdded: PaymentAdded,
    PayoutClaimed: PayoutClaimed,
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
    TaskPayoutSet: TaskPayoutSet,
    TaskRoleUserSet: TaskRoleUserSet,
    TaskSkillSet: TaskSkillSet,
    TaskWorkRatingRevealed: TaskWorkRatingRevealed,
    TokenLocked: TokenLocked,
    Transfer: Transfer,
  };

  /*
  Add a colony contract version. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.
  */
  addNetworkColonyVersion: ColonyClient.Sender<
    {
      version: number, // The colony contract version that will be added.
      resolver: number, // The address of the `Resolver` contract which will be used with the underlying `EtherRouter` contract.
    },
    {
      ColonyVersionAdded: ColonyVersionAdded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Add a domain to the colony.
  */
  addDomain: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      parentDomainId: number, // The ID of the parent domain.
    },
    {
      SkillAdded: SkillAdded,
      DomainAdded: DomainAdded,
      FundingPotAdded: FundingPotAdded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Add an extension contract.
  */
  addExtension: ColonyClient.Sender<
    {
      contractName: string, // The name of the extension contract (`OneTxPayment` or `OldRoles`).
    },
    {},
    ColonyClient,
    {
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Add a global skill. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.
  */
  addGlobalSkill: ColonyClient.Sender<
    {},
    {
      SkillAdded: SkillAdded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Add a payment to the colony.
  */
  addPayment: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      recipient: Address, // The address that will receive the payment.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens (or Ether) for the payment.
      domainId: number, // The ID of the domain.
      skillId: number, // The ID of the skill.
    },
    {
      FundingPotAdded: FundingPotAdded,
      PaymentAdded: PaymentAdded,
    },
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Add a new task within the colony.
  */
  addTask: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      specificationHash: IPFSHash, // The specification hash of the task (an IPFS hash).
      domainId: ?number, // The ID of the domain (default value of `1`).
      skillId: ?number, // The ID of the skill (default value of `null`).
      dueDate: ?Date, // The due date of the task (default value of `30` days from creation).
    },
    {
      TaskSkillSet: TaskSkillSet,
      TaskDueDateSet: TaskDueDateSet,
      FundingPotAdded: FundingPotAdded,
      TaskAdded: TaskAdded,
    },
    ColonyClient,
    {
      function: 'makeTask',
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Indicate approval to exit colony recovery mode. This function can only be called by an address assigned the colony `RECOVERY` role.
  */
  approveExitRecovery: ColonyClient.Sender<
    {},
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Bootstrap the colony by giving an initial amount of tokens and reputation to selected addresses. This function can only be called by the address assigned the colony `ROOT` role when the `taskCount` for the colony is equal to `0`.
   */
  bootstrapColony: ColonyClient.Sender<
    {
      addresses: Array<Address>, // The array of users that will recieve an initial amount of tokens and reputation.
      amounts: Array<BigNumber>, // The array of corresponding token and reputation amounts each user will recieve.
    },
    {
      ColonyBootstrapped: ColonyBootstrapped,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Claim funds that the colony has received by adding them to the funding pot of the root domain. A set fee is deducted from the funds claimed and added to the colony rewards pot. No fee is deducted when tokens native to the colony are claimed.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Claim a payment.
  */
  claimPayment: ColonyClient.Sender<
    {
      paymentId: number, // The ID of the payment.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      PayoutClaimed: PayoutClaimed,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Claim a reward payout.
  */
  claimRewardPayout: ColonyClient.Sender<
    {
      payoutId: number, // The ID of the payout.
      squareRoots: Array<number>, // The square roots of values used in the equation.
      key: string, // The key of the element that the proof is for.
      value: string, // The value of the element that the proof is for.
      branchMask: number, // The branchmask of the proof.
      siblings: Array<string>, // The siblings of the proof.
    },
    {
      RewardPayoutClaimed: RewardPayoutClaimed,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Claim a payout assigned to a task role (`MANAGER`, `EVALUATOR`, or `WORKER`). This function can only be called by the address assigned the given task role after the task has been finalized.
  */
  claimTaskPayout: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      role: TaskRole, // The task role that is claiming the payout (`MANAGER`, `EVALUATOR`, or `WORKER`).
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      PayoutClaimed: PayoutClaimed,
      Transfer: Transfer,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Mark a task as complete. If the address assigned the task `WORKER` role fails to submit the task deliverable by the due date, this function must be called by the address assigned the task `MANAGER` role. This allows the task work to be rated and the task to be finalized.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Deprecate a global skill. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.
  */
  deprecateGlobalSkill: ColonyClient.Sender<
    {
      skillId: number, // The ID of the skill that will be deprecated.
    },
    {},
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IMetaColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Enter colony recovery mode. This function can only be called by a user assigned the colony `RECOVERY` role.
  */
  enterRecoveryMode: ColonyClient.Sender<
    {},
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Finalize a payment. Once a payment is finalized, no further changes to the payment can be made and the address that is assigned the payment can claim the payment.
  */
  finalizePayment: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      paymentId: number, // The ID of the payment.
    },
    {},
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Finalize a reward payout cycle. This function can only be called when the reward payout cycle has finished, i.e. 60 days have passed since the creation of the reward payout cycle.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Finalize a task. Once a task is finalized, no further changes to the task can be made and each user assigned a task role can claim the payout assigned to their role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Generate a secret for task ratings. This function returns a keccak256 hash created from the input parameters.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the address of the authority contract associated with the colony contract.
  */
  getAuthorityAddress: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the authority contract associated with the colony contract.
    },
    ColonyClient,
    {
      function: 'authority',
      contract: 'auth.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the address of the Colony Network contract.
  */
  getColonyNetworkAddress: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the Colony Network contract.
    },
    ColonyClient,
    {
      function: 'getColonyNetwork',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      skillId: number, // The ID of the local skill.
      potId: number, // The ID of the funding pot.
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the address of an extension contract associated with the colony address.
  */
  getExtensionAddress: ColonyClient.Caller<
    {
      contractName: string, // The name of the extension contract.
    },
    {
      address: Address, // The address of the extension contract.
    },
    ColonyClient,
    {
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get information about a funding pot.
  */
  getFundingPot: ColonyClient.Caller<
    {
      potId: number, // The ID of the funding pot.
    },
    {
      type: FundingPotTypes, // The associated type of the funding pot (`DOMAIN`, `TASK`, `PAYMENT`, or `UNASSIGNED`).
      typeId: number, // The id of the associated type (`domainId`, `taskId`, or `paymentId`).
      payoutsWeCannotMake: number, // The total number of payouts that the funding pot cannot make.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the payout of a funding pot.
  */
  getFundingPotPayout: ColonyClient.Caller<
    {
      potId: number, // The ID of the funding pot.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
    },
    {
      payout: BigNumber, // The payout of tokens (or Ether) for the funding pot.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the total amount of funds that are not in the colony rewards pot. This is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the address of the owner of the colony contract.
  */
  getOwnerAddress: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the owner of the colony contract.
    },
    ColonyClient,
    {
      function: 'owner',
      contract: 'auth.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/dapphub/dappsys-monolithic/blob/de9114c5fa1b881bf16b1414e7ed90cd3cb2e361',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get information about a payment.
  */
  getPayment: ColonyClient.Caller<
    {
      paymentId: number, // The ID of the payment.
    },
    {
      recipient: Address, // The address of the assigned recipient.
      finalized: boolean, // A boolean indicating whether or not the payment has been finalized.
      potId: number, // The ID of the funding pot.
      domainId: number, // The ID of the domain.
      skills: Array<number>, // An array of skill IDs.
    },
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the total number of payments.
  */
  getPaymentCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of payments.
    },
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the total number of addresses that are assigned the colony `RECOVERY` role.
  */
  getRecoveryRolesCount: ColonyClient.Caller<
    {},
    {
      count: number, // The total number of addresses that are assigned the colony `RECOVERY` role.
    },
    ColonyClient,
    {
      function: 'numRecoveryRoles',
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      reputationState: string, // The reputation root hash at the time the reward payout was created.
      colonyWideReputation: BigNumber, // The total reputation score throughout the colony.
      totalTokens: BigNumber, // The total amount of tokens at the time the reward payout was created.
      amount: BigNumber, // The total amount of tokens allocated for the reward payout.
      tokenAddress: TokenAddress, // The address of the token contract (an empty address if Ether).
      blockTimestamp: Date, // The timestamp at the time the reward payout was created.
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      specificationHash: IPFSHash, // The specification hash of the task (an IPFS hash).
      deliverableHash: IPFSHash, // The deliverable hash of the task (an IPFS hash).
      status: TaskStatus, // The task status (`ACTIVE`, `CANCELLED` or `FINALIZED`).
      dueDate: Date, // The final date that the task deliverable can be submitted.
      potId: number, // The ID of the funding pot.
      completionDate: Date, // The date when the task deliverable was submitted.
      domainId: number, // The ID of the domain.
      skillId: number, // The ID of the skill.
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      address: Address, // The address that is assigned the task role.
      rateFail: boolean, // A boolean indicating whether or not the assigned address failed to submit a rating.
      rating: number, // The rating that the assigned address received (`1`, `2`, or `3`).
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the secret of a task work rating that has been submitted. If a task is in the commit period of the rating process, the work ratings are hidden in a keccak256 hash that was created from a `salt` and `value`. The rating secret can be retrieved but in order to reveal the secret, one would have to know both the `salt` and `value` used to generate the secret.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get information about the secrets of the task work ratings.
  */
  getTaskWorkRatingSecretsInfo: ColonyClient.Caller<
    {
      taskId: number, // The ID of the task.
    },
    {
      count: number, // The total number of secrets.
      lastSubmitted: Date, // The date when the last secret was submitted.
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Get the address of the token contract that is the native token assigned to the colony. The native token is the token used to calculate reputation scores, i.e. `1` token earned for completing a task with a satisfactory rating (`2`) will result in `1` reputation point earned.
  */
  getTokenAddress: ColonyClient.Caller<
    {},
    {
      address: Address, // The address of the token contract assigned as the native token for the colony.
    },
    ColonyClient,
    {
      method: 'getToken',
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Check whether an address has a role assigned.
  */
  hasColonyRole: ColonyClient.Caller<
    {
      address: Address, // The address that will be checked for the role.
      domainId: number, // The ID of the domain that the role is assigned.
      role: ColonyRole, // The role that will be checked (`RECOVERY`, `ROOT`, `ARCHITECTURE`, `ARCHITECTURE_SUBDOMAIN`, `ADMINISTRATION`, `FUNDING`).
    },
    {
      hasRole: boolean, // A boolean indicating whether or not the address has the role assigned.
    },
    ColonyClient,
    {
      function: 'hasUserRole',
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Make a payment in one transaction. This function is not included in the core contracts but instead it comes from the `OneTxPayment` extension contract. The `OneTxPayment` extension contract and the sender must both be assigned the colony `ADMINISTRATION` role.
  */
  makePayment: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      callerPermissionDomainId: number, // The ID of the domain in which the caller has permission.
      callerChildSkillIndex: number, // The index that the `domainId` is relative to the `callerPermissionDomainId`.
      recipient: Address, // The address that will receive the payment.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of tokens (or Ether) for the payment.
      domainId: number, // The ID of the domain.
      skillId: number, // The ID of the skill.
    },
    {
      FundingPotAdded: FundingPotAdded,
      PaymentAdded: PaymentAdded,
      ColonyFundsMovedBetweenFundingPots: ColonyFundsMovedBetweenFundingPots,
      Transfer: Transfer,
      PayoutClaimed: PayoutClaimed,
    },
    ColonyClient,
    {
      contract: 'OneTxPayment.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyNetwork/blob/5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce/contracts/extensions/OneTxPayment.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Mint new tokens. This function can only be called if the address of the colony contract is the owner of the token contract. If this is the case, then this function can only be called by the address assigned the colony `ROOT` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Mint tokens for the Colony Network. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Move funds from one pot to another.
  */
  moveFundsBetweenPots: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain that grants the address permission to call the method.
      fromChildSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      toChildSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Remove an extension contract.
  */
  removeExtension: ColonyClient.Sender<
    {
      contractName: string, // The name of the extension contract (`OneTxPayment` or `OldRoles`).
    },
    {},
    ColonyClient,
    {
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Remove the colony `RECOVERY` role from an address. This function can only be called by the colony `ROOT` role.
  */
  removeRecoveryRole: ColonyClient.Sender<
    {
      address: Address, // The address that will be unassigned the colony `RECOVERY` role.
    },
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Remove the task `EVALUATOR` role from an address. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the address assigned the task `WORKER` role has failed to meet the deadline and the address assigned the task `MANAGER` role has marked the task as complete.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Remove the task `WORKER` role from an address. This function can only be called before the task is complete, i.e. either before the deliverable has been submitted or the address assigned the task `WORKER` role has failed to meet the deadline and the address assigned the task `MANAGER` role has marked the task as complete.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `ADMIN` role to an address. This function is not included in the core contracts but instead it comes from the `OldRoles` extension contract. This function can only be called by an address assigned the colony `ROOT` (`FOUNDER`) role or an address assigned the colony `ADMIN` (`ARCHITECTURE`) role. There is no limit to the number of addresses that can be assigned the colony `ADMIN` role.
  */
  setAdminRole: ColonyClient.Sender<
    {
      address: Address, // The address that will be assigned the colony `ADMIN` role.
      setTo: boolean, // A boolean indicating whether the address will be assigned or unassigned the colony `ADMIN` role.
    },
    {
      ColonyArchitectureRoleSet: ColonyArchitectureRoleSet,
      ColonyFundingRoleSet: ColonyFundingRoleSet,
      ColonyAdministrationRoleSet: ColonyAdministrationRoleSet,
    },
    ColonyClient,
    {
      contract: 'OldRoles.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyNetwork/blob/5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce/contracts/extensions/OldRoles.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `ADMINISTRATION` role to an address. The address calling the method must have permission within the domain that permission is being granted or a parent domain to the domain that permission is being granted. The address calling the method must already be assigned either the colony `ROOT` or `ARCHITECTURE` role within the domain or parent domain.
  */
  setAdministrationRole: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain that grants the address permission to call the method.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      address: Address, // The address that will be assigned or unassigned the colony `ADMINISTRATION` role.
      domainId: number, // The ID of the domain that the colony `ADMINISTRATION` role will be assigned or unassigned.
      setTo: boolean, // A boolean indicating whether the address will be assigned or unassigned the colony `ADMINISTRATION` role.
    },
    {
      ColonyAdministrationRoleSet: ColonyAdministrationRoleSet,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payouts for all task roles. This can only be called by the address assigned the task `MANAGER` role and only if the task `EVALUATOR` role and `WORKER` task role are not assigned or they are assigned to the same address that is currently assigned the task `MANAGER` role.
  */
  setAllTaskPayouts: ColonyClient.Sender<
    {
      taskId: number, // The ID of the task.
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      managerAmount: BigNumber, // The payout amount in tokens (or Ether) for the task `MANAGER` role.
      evaluatorAmount: BigNumber, // The payout amount in tokens (or Ether) for the task `EVALUATOR` role.
      workerAmount: BigNumber, // The payout amount in tokens (or Ether) for the task `WORKER` role.
    },
    {
      TaskPayoutSet: TaskPayoutSet,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `ARCHITECTURE` role to an address. The address calling the method must have permission within the domain that permission is being granted or a parent domain to the domain that permission is being granted. The address calling the method must already be assigned either the colony `ROOT` or `ARCHITECTURE` role within the domain or parent domain.
  */
  setArchitectureRole: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain that grants the address permission to call the method.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      address: Address, // The address that will be assigned or unassigned the colony `ARCHITECTURE` role.
      domainId: number, // The ID of the domain that the colony `ARCHITECTURE` role will be assigned or unassigned.
      setTo: boolean, // A boolean indicating whether the address will be assigned or unassigned the colony `ARCHITECTURE` role.
    },
    {
      ColonyArchitectureRoleSet: ColonyArchitectureRoleSet,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `FOUNDER` role to an address. This function is not included in the core contracts but instead it comes from the `OldRoles` extension contract. This function can only be called by an address assigned the colony `ROOT` (`FOUNDER`) role. There can only be one address assigned to the colony `ROOT` (`FOUNDER`) role, therefore, the address currently assigned will forfeit the role.
  */
  setFounderRole: ColonyClient.Sender<
    {
      address: Address, // The address that will be assigned the colony `FOUNDER` role.
    },
    {
      ColonyRootRoleSet: ColonyRootRoleSet,
      ColonyArchitectureRoleSet: ColonyArchitectureRoleSet,
      ColonyFundingRoleSet: ColonyFundingRoleSet,
      ColonyAdministrationRoleSet: ColonyAdministrationRoleSet,
    },
    ColonyClient,
    {
      contract: 'OldRoles.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyNetwork/blob/5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce/contracts/extensions/OldRoles.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `FUNDING` role to an address. The address calling the method must have permission within the domain that permission is being granted or a parent domain to the domain that permission is being granted. The address calling the method must already be assigned either the colony `ROOT` or `ARCHITECTURE` role within the domain or parent domain.
  */
  setFundingRole: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain that grants the address permission to call the method.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      address: Address, // The address that will be assigned or unassigned the colony `FUNDING` role.
      domainId: number, // The ID of the domain that the colony `FUNDING` role will be assigned or unassigned.
      setTo: boolean, // A boolean indicating whether the address will be assigned or unassigned the colony `FUNDING` role.
    },
    {
      ColonyFundingRoleSet: ColonyFundingRoleSet,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the inverse amount of the reward. This can only be called from the Meta Colony and only by the address assigned the colony `ROOT` role. If the fee is 1% (or 0.01), the inverse amount will be 100.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payment domain.
  */
  setPaymentDomain: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      paymentId: number, // The ID of the payment.
      domainId: Address, // The ID of the domain.
    },
    {},
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payment payout.
  */
  setPaymentPayout: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      paymentId: number, // The ID of the payment.
      token: Address, // The address of the token contract (an empty address if Ether).
      amount: BigNumber, // The amount of the payment.
    },
    {},
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payment recipient.
  */
  setPaymentRecipient: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      paymentId: number, // The ID of the payment.
      recipient: Address, // The address that will receive the payment.
    },
    {},
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payment skill.
  */
  setPaymentSkill: ColonyClient.Sender<
    {
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
      paymentId: number, // The ID of the payment.
      skillId: Address, // The ID of the skill.
    },
    {},
    ColonyClient,
    {
      contract: 'ColonyPayment.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `RECOVERY` role to an address. This function can only be called by the colony `ROOT` role.
  */
  setRecoveryRole: ColonyClient.Sender<
    {
      address: Address, // The address that will be assigned the colony `RECOVERY` role.
    },
    {},
    ColonyClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the inverse amount of the reward. This function can only be called by the address currently assigned the colony `ROOT` role. If the fee is 1% (or 0.01), the inverse amount will be 100.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the colony `ROOT` role to an address. This function can only be called by the address currently assigned the colony `ROOT` role. There can only be one address assigned to the colony `ROOT` role, therefore, the address currently assigned will forfeit the role.
  */
  setRootRole: ColonyClient.Sender<
    {
      address: Address, // The address that will either be assigned or unassigned the colony `ROOT` role.
      setTo: boolean, // A boolean indicating whether the address will be assigned or unassigned the colony `ROOT` role.
    },
    {
      ColonyRootRoleSet: ColonyRootRoleSet,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the value for a storage slot while in recovery mode. This can only be called by a user assigned the colony `RECOVERY` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the domain of a task. Every task must belong to a domain. This function can only be called by the address assigned the task `MANAGER` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the due date of a task. The due date is the last day that the address assigned the task `WORKER` role can submit the task deliverable.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payout amount for the task `EVALUATOR` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the task `EVALUATOR` role to an address. This function can only be called before the task is finalized. The address assigned the task `MANAGER` role and the address being assigned the task `EVALUATOR` role must both sign the transaction before it can be executed.
  */
  setTaskEvaluatorRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      address: Address, // The address that will be assigned the task `EVALUATOR` role.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payout amount for the task `MANAGER` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the task `MANAGER` role to an address. This function can only be called before the task is finalized. The address currently assigned the task `MANAGER` role and the address being assigned the task `MANAGER` role must both sign the transaction before it can be executed.
  */
  setTaskManagerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      address: Address, // The address that will be assigned the task `MANAGER` role.
      permissionDomainId: number, // The ID of the domain in which the sender has permission.
      childSkillIndex: number, // The index that the `domainId` is relative to the `permissionDomainId`.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the skill of a task. Only one skill can be assigned per task. The user assigned the task `MANAGER` role and the address assigned the task `WORKER` role must both sign this transaction before it can be executed.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Set the payout amount for the task `WORKER` role.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Assign the task `WORKER` role to an address. This function can only be called before the task is finalized. The address assigned the task `MANAGER` role and the address being assigned the task `WORKER` role must both sign the transaction before it can be executed.
  */
  setTaskWorkerRole: ColonyClient.MultisigSender<
    {
      taskId: number, // The ID of the task.
      address: Address, // The address that will be assigned the task `WORKER` role.
    },
    {
      TaskRoleUserSet: TaskRoleUserSet,
    },
    ColonyClient,
    {
      contract: 'ColonyTask.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Start the next reward payout cycle. All the funds in the colony rewards pot for the given token will become locked until reputation holders have claimed their rewards payout using `claimRewardPayout`. Reputation holders can also waive their reward payout and unlock their tokens for past reward payout cycles by using `incrementLockCounterTo`.
  */
  startNextRewardPayout: ColonyClient.Sender<
    {
      token: TokenAddress, // The address of the token contract (an empty address if Ether).
      key: string, // The key of the element that the proof is for.
      value: string, // The value of the element that the proof is for.
      branchMask: number, // The branchmask of the proof.
      siblings: Array<string>, // The siblings of the proof.
    },
    {
      TokenLocked: TokenLocked,
      RewardPayoutCycleStarted: RewardPayoutCycleStarted,
    },
    ColonyClient,
    {
      contract: 'ColonyFunding.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Submit the task deliverable. This function can only be called by the address assigned the task `WORKER` role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Submit the task deliverable and the work rating for the address assigned the task `MANAGER` role. This function can only be called by the address assigned the task `WORKER` role on or before the task due date. The submission cannot be overwritten, which means the deliverable cannot be changed once it has been submitted. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Submit a work rating for a task. This function can only be called by the address assigned the task `EVALUATOR` role, who is submitting a rating for the address assigned the task `WORKER` role, or the address assigned the task `WORKER` role, who is submitting a rating for the address assigned the task `MANAGER` role. In order to submit a rating, a `secret` must be generated using the `generateSecret` method, which keeps the rating hidden until all ratings have been submitted and revealed.
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
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Upgrade the colony to a new colony contract version. The new version must be higher than the current version. Downgrading to old versions is not permitted.
  */
  upgrade: ColonyClient.Sender<
    {
      newVersion: number, // The new colony contract version that will be applied to the colony.
    },
    {
      ColonyUpgraded: ColonyUpgraded,
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
    },
  >;
  /*
  Verify the correctness of a patricia proof associated with reputation.
  */
  verifyReputationProof: ColonyClient.Caller<
    {
      key: string, // The key of the element that the proof is for.
      value: string, // The value of the element that the proof is for.
      branchMask: number, // The branchmask of the proof.
      siblings: Array<string>, // The siblings of the proof.
    },
    {
      isValid: boolean, // A boolean indicating whether ot not the proof is valid.
    },
    ColonyClient,
    {
      contract: 'Colony.sol',
      interface: 'IColony.sol',
      version: '5acd5e2526ffdd9b9577b340f9c8dcf3c22df5ce',
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
    const { address: tokenAddress } = await this.getTokenAddress.call();
    const tokenClient = new this.constructor.TokenClient({
      adapter: this.adapter,
      query: { contractAddress: tokenAddress },
    });
    await tokenClient.init();
    return tokenClient;
  }

  initializeContractMethods() {
    addRecoveryMethods(this);

    // Custom callers
    this.getTask = new GetTask({ client: this });
    this.getExtensionAddress = new GetExtensionAddress({
      client: this,
      name: 'getExtensionAddress',
      functionName: 'deployedExtensions',
      input: [['contractName', 'string']],
    });

    // Custom senders
    this.addExtension = new AddExtension({
      client: this,
      name: 'addExtension',
      functionName: 'deployExtension',
      input: [['contractName', 'string']],
    });
    this.addPayment = new AddPayment({
      client: this,
      name: 'addPayment',
      functionName: 'addPayment',
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['recipient', 'address'],
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
    this.addTask = new AddTask({
      client: this,
      name: 'addTask',
      functionName: 'makeTask',
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
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
    this.makePayment = new MakePayment({
      client: this,
      name: 'makePayment',
      functionName: 'makePayment',
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['callerPermissionDomainId', 'number'],
        ['callerChildSkillIndex', 'number'],
        ['recipient', 'address'],
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
    this.removeExtension = new RemoveExtension({
      client: this,
      name: 'removeExtension',
      functionName: 'removeExtension',
      input: [['contractName', 'string']],
    });
    this.setAdminRole = new SetAdminRole({
      client: this,
      name: 'setAdminRole',
      functionName: 'setAdminRole',
      input: [['address', 'address'], ['setTo', 'boolean']],
    });
    this.setFounderRole = new SetFounderRole({
      client: this,
      name: 'setFounderRole',
      functionName: 'setFounderRole',
      input: [['address', 'address']],
    });

    // Task callers
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
      'getTaskWorkRatingSecret',
      [['role', 'taskRole']],
      [['secret', 'hexString']],
    );
    makeTaskCaller(
      'getTaskWorkRatingSecretsInfo',
      [],
      [['count', 'number'], ['lastSubmitted', 'date']],
    );

    // Callers
    this.addCaller('generateSecret', {
      input: [['salt', 'string'], ['value', 'number']],
      output: [['secret', 'hexString']],
    });
    this.addCaller('getAuthorityAddress', {
      functionName: 'authority',
      output: [['address', 'address']],
    });
    this.addCaller('getColonyNetworkAddress', {
      functionName: 'getColonyNetwork',
      output: [['address', 'address']],
    });
    this.addCaller('getDomain', {
      input: [['domainId', 'number']],
      output: [['skillId', 'number'], ['potId', 'number']],
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
      output: [
        ['type', 'fundingPotType'],
        ['typeId', 'number'],
        ['payoutsWeCannotMake', 'number'],
      ],
    });
    this.addCaller('getFundingPotBalance', {
      input: [['potId', 'number'], ['token', 'tokenAddress']],
      output: [['balance', 'bigNumber']],
    });
    this.addCaller('getFundingPotCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getFundingPotPayout', {
      input: [['potId', 'number'], ['token', 'tokenAddress']],
      output: [['payout', 'bigNumber']],
    });
    this.addCaller('getOwnerAddress', {
      functionName: 'owner',
      output: [['address', 'address']],
    });
    this.addCaller('getPayment', {
      input: [['paymentId', 'number']],
      output: [
        ['recipient', 'address'],
        ['finalized', 'boolean'],
        ['potId', 'number'],
        ['domainId', 'number'],
        ['skills', '[number]'],
      ],
    });
    this.addCaller('getPaymentCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getRewardInverse', {
      output: [['rewardInverse', 'bigNumber']],
    });
    this.addCaller('getRewardPayoutInfo', {
      input: [['payoutId'], 'number'],
      output: [
        ['reputationState', 'string'],
        ['colonyWideReputation', 'bigNumber'],
        ['totalTokens', 'bigNumber'],
        ['amount', 'bigNumber'],
        ['tokenAddress', 'tokenAddress'],
        ['blockTimestamp', 'date'],
      ],
    });
    this.addCaller('getTaskCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getTokenAddress', {
      functionName: 'getToken',
      output: [['address', 'address']],
    });
    this.addCaller('getVersion', {
      functionName: 'version',
      output: [['version', 'number']],
    });
    this.addCaller('hasColonyRole', {
      functionName: 'hasUserRole',
      input: [
        ['address', 'address'],
        ['domainId', 'number'],
        ['role', 'colonyRole'],
      ],
      output: [['hasRole', 'boolean']],
    });
    this.addCaller('verifyReputationProof', {
      input: [
        ['key', 'string'],
        ['value', 'string'],
        ['branchMask', 'number'],
        ['siblings', '[string]'],
      ],
      output: [['isValid', 'boolean']],
    });

    // Events
    this.addEvent('ColonyAdministrationRoleSet', [
      ['address', 'address'],
      ['setTo', 'boolean'],
    ]);
    this.addEvent('ColonyArchitectureRoleSet', [
      ['address', 'address'],
      ['setTo', 'boolean'],
    ]);
    this.addEvent('ColonyBootstrapped', [
      ['addresses', '[address]'],
      ['amounts', '[bigNumber]'],
    ]);
    this.addEvent('ColonyFundingRoleSet', [
      ['address', 'address'],
      ['setTo', 'boolean'],
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
    this.addEvent('ColonyInitialised', [
      ['colonyNetwork', 'address'],
      ['token', 'tokenAddress'],
    ]);
    this.addEvent('ColonyRewardInverseSet', [['rewardInverse', 'bigNumber']]);
    this.addEvent('ColonyRootRoleSet', [
      ['address', 'address'],
      ['setTo', 'boolean'],
    ]);
    this.addEvent('ColonyUpgraded', [
      ['oldVersion', 'number'],
      ['newVersion', 'number'],
    ]);
    this.addEvent('DomainAdded', [['domainId', 'number']]);
    this.addEvent('FundingPotAdded', [['potId', 'number']]);
    this.addEvent('PaymentAdded', [['paymentId', 'number']]);
    this.addEvent('PayoutClaimed', [
      ['taskId', 'number'],
      // $FlowFixMe
      ['role', 'taskRole'],
      ['token', 'tokenAddress'],
      ['amount', 'bigNumber'],
    ]);
    this.addEvent('RewardPayoutCycleEnded', [['payoutId', 'number']]);
    this.addEvent('RewardPayoutCycleStarted', [['payoutId', 'number']]);
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
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['parentDomainId', 'number'],
      ],
    });
    this.addSender('bootstrapColony', {
      input: [['addresses', '[address]'], ['amounts', '[bigNumber]']],
    });
    this.addSender('claimColonyFunds', {
      input: [['token', 'tokenAddress']],
    });
    this.addSender('claimPayment', {
      input: [['paymentId', 'number'], ['token', 'tokenAddress']],
    });
    this.addSender('claimRewardPayout', {
      input: [
        ['payoutId', 'number'],
        ['squareRoots', '[number]'],
        ['key', 'string'],
        ['value', 'string'],
        ['branchMask', 'number'],
        ['siblings', '[string]'],
      ],
    });
    this.addSender('claimTaskPayout', {
      input: [
        ['taskId', 'number'],
        ['role', 'taskRole'],
        ['token', 'tokenAddress'],
      ],
    });
    this.addSender('completeTask', {
      input: [['taskId', 'number']],
    });
    this.addSender('deprecateGlobalSkill', {
      input: [['skillId', 'number']],
    });
    this.addSender('finalizePayment', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['paymentId', 'number'],
      ],
    });
    this.addSender('finalizeRewardPayout', {
      input: [['payoutId', 'number']],
    });
    this.addSender('finalizeTask', {
      input: [['taskId', 'number']],
    });
    this.addSender('mintTokens', {
      input: [['amount', 'bigNumber']],
    });
    this.addSender('moveFundsBetweenPots', {
      input: [
        ['permissionDomainId', 'number'],
        ['fromChildSkillIndex', 'number'],
        ['toChildSkillIndex', 'number'],
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
    this.addSender('setAdministrationRole', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['address', 'address'],
        ['domainId', 'number'],
        ['setTo', 'boolean'],
      ],
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
    this.addSender('setArchitectureRole', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['address', 'address'],
        ['domainId', 'number'],
        ['setTo', 'boolean'],
      ],
    });
    this.addSender('setFundingRole', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['address', 'address'],
        ['domainId', 'number'],
        ['setTo', 'boolean'],
      ],
    });
    this.addSender('setPaymentAmount', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['paymentId', 'number'],
        ['amount', 'bigNumber'],
      ],
    });
    this.addSender('setPaymentDomain', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['paymentId', 'number'],
        ['domainId', 'number'],
      ],
    });
    this.addSender('setPaymentPayout', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['paymentId', 'number'],
        ['token', 'address'],
        ['amount', 'bigNumber'],
      ],
    });
    this.addSender('setPaymentRecipient', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['paymentId', 'number'],
        ['recipient', 'address'],
      ],
    });
    this.addSender('setPaymentSkill', {
      input: [
        ['permissionDomainId', 'number'],
        ['childSkillIndex', 'number'],
        ['paymentId', 'number'],
        ['skillId', 'number'],
      ],
    });
    this.addSender('setRewardInverse', {
      input: [['rewardInverse', 'bigNumber']],
    });
    this.addSender('setRootRole', {
      input: [['address', 'address'], ['setTo', 'boolean']],
    });
    this.addSender('startNextRewardPayout', {
      input: [
        ['token', 'tokenAddress'],
        ['key', 'string'],
        ['value', 'string'],
        ['branchMask', 'number'],
        ['siblings', '[string]'],
      ],
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

    // Meta Colony senders
    this.addMetaColonySender('addGlobalSkill', {});
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
    makeExecuteTaskChange(
      'cancelTask',
      [],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'removeTaskEvaluatorRole',
      [],
      [TASK_ROLE_MANAGER, TASK_ROLE_EVALUATOR],
    );
    makeExecuteTaskChange(
      'removeTaskWorkerRole',
      [],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'setTaskBrief',
      [['specificationHash', 'ipfsHash']],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'setTaskDomain',
      [['domainId', 'number']],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'setTaskDueDate',
      [['dueDate', 'date']],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'setTaskEvaluatorPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [TASK_ROLE_MANAGER, TASK_ROLE_EVALUATOR],
    );
    makeExecuteTaskChange(
      'setTaskManagerPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'setTaskSkill',
      [['skillId', 'number']],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
    );
    makeExecuteTaskChange(
      'setTaskWorkerPayout',
      [['token', 'tokenAddress'], ['amount', 'bigNumber']],
      [TASK_ROLE_MANAGER, TASK_ROLE_WORKER],
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
            role: TASK_ROLE_MANAGER,
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
        role: TASK_ROLE_EVALUATOR,
      });
      if (isValidAddress(address))
        throw new Error('Unable to set task role; evaluator is already set');
      return null;
    });
    makeExecuteTaskRoleChange(
      'setTaskManagerRole',
      async ({ domainId, address }) => {
        const isAdmin = await this.hasColonyRole.call({
          address,
          domainId,
          role: COLONY_ROLE_ARCHITECTURE,
        });
        if (!isAdmin)
          throw new Error('Unable to set task role; user must be an admin');
        return null;
      },
    );
    makeExecuteTaskRoleChange('setTaskWorkerRole', async ({ taskId }) => {
      const { address } = await this.getTaskRole.call({
        taskId,
        role: TASK_ROLE_WORKER,
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

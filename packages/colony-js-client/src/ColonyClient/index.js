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
  WORKER_ROLE,
  EVALUATOR_ROLE,
  MANAGER_ROLE,
  DEFAULT_DOMAIN_ID,
} from '../constants';

type Address = string;
type TokenAddress = string;
type HexString = string;
type Role = $Keys<typeof ROLES>;
type IPFSHash = string;

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
      cancelled: boolean, // Boolean flag denoting whether the task is cancelled.
      deliverableDate: ?Date, // Date when the deliverable is due.
      deliverableHash: ?IPFSHash, // Unique hash of the deliverable content.
      domainId: number, // Integer Domain ID the task belongs to.
      dueDate: ?Date, // When the task is due.
      finalized: boolean, // Boolean flag denoting whether the task is finalized.
      id: number, // Integer task ID.
      payoutsWeCannotMake: ?number, // Number of payouts that cannot be completed with the current task funding.
      potId: ?number, // Integer ID of funding pot for the task.
      skillId: number, // Integer Skill ID the task is assigned to.
      specificationHash: IPFSHash, // Unique hash of the specification content.
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
    Every task has three roles associated with it which determine permissions for editing the task, submitting work, and ratings for performance.
  */
  getTaskRole: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId.
      role: Role, // MANAGER, EVALUATOR, or WORKER.
    },
    {
      address: Address, // Address of the user for the given role.
      rated: boolean, // Has the user work been rated.
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
      domainId: number, // Domain in which the task has been created (default value: `1`).
    },
    {
      taskId: number, // Will return an integer taskId, from the `TaskAdded` event.
    },
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
    {},
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
    {},
    ColonyClient,
  >;
  /*
    Set the user for role `_role` in task `_id`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete. This can only be called by the manager of the task.
  */
  setTaskRoleUser: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      role: Role, // MANAGER, EVALUATOR, or WORKER.
      user: Address, // address of the user.
    },
    {},
    ColonyClient,
  >;
  /*
  Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations. This can only be called by the manager of the task.
  */
  setTaskSkill: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      skillId: number, // Integer skillId.
    },
    {},
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
    {},
    ColonyClient,
  >;
  /*
    Sets the payout given to the MANAGER role when the task is finalized. This Sender can only be called by the manager for the task in question.
  */
  setTaskManagerPayout: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      token: TokenAddress, // Address to send funds from, e.g. the token's contract address, or empty address (`0x0` for Ether)
      amount: BigNumber, // Amount to be paid.
    },
    {},
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
    {},
    ColonyClient,
  >;
  /*
    Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.
  */
  submitTaskDeliverable: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      deliverableHash: IPFSHash, // Hash of the work performed.
    },
    {},
    ColonyClient,
  >;
  /*
    Submits a hidden work rating for a task. This is generated by generateSecret(_salt, _rating).
  */
  submitTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      role: Role, // The role submitting their rating, either EVALUATOR or WORKER.
      secret: HexString, // hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 1-3.
    },
    {},
    ColonyClient,
  >;
  /*
    Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `secret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function.
  */
  revealTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
      role: Role, // Role revealing their rating submission, either EVALUATOR or WORKER.
      rating: number, // Rating scored (1-3).
      salt: string, // `_salt` value to be used in `generateSecret`. A correct value will result in the same `secret` submitted during the work rating submission period.
    },
    {},
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
    {},
    ColonyClient,
  >;
  /*
    Finalizes a task, allowing roles to claim payouts and prohibiting all further changes to the task.
  */
  finalizeTask: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId.
    },
    {},
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
    {},
    ColonyClient,
  >;
  /*
    Adds a domain to the Colony along with the new domain's respective local skill. This can only be called by owners of the colony.
  */
  addDomain: ColonyClient.Sender<
    {
      parentSkillId: number, // Id of the local skill under which the new skill will be added.
    },
    {
      skillId: number, // A skillId for this domain.
      parentSkillId: number, // The parent skill id.
    },
    ColonyClient,
  >;
  /*
    Adds a global skill under a given parent SkillId. This can only be called from the Meta Colony, and only by the Meta Colony owners.
  */
  addGlobalSkill: ColonyClient.Sender<
    {
      parentSkillId: number, // Integer id of the parent skill.
    },
    {
      skillId: number, // Integer id of the newly created skill.
      parentSkillId: number, // Integer id of the parent skill.
    },
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
    {},
    ColonyClient,
  >;
  /*
    In the case of the Colony Network, only the Meta Colony may mint new tokens.
  */
  mintTokensForColonyNetwork: ColonyClient.Sender<
    {
      amount: BigNumber, // Amount of new tokens to be minted.
    },
    {},
    ColonyClient,
  >;
  /*
    Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.
  */
  startNextRewardPayout: ColonyClient.Sender<
    {
      token: TokenAddress, // Address of token used for reward payout (`0x0` value indicates Ether).
    },
    {},
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

  events: {
    DomainAdded: ContractClient.Event<{ id: number }>,
    PotAdded: ContractClient.Event<{ id: number }>,
    TaskAdded: ContractClient.Event<{ id: number }>,
    TaskBriefChanged: ContractClient.Event<{
      id: number,
      specificationHash: string,
    }>,
    TaskDueDateChanged: ContractClient.Event<{
      id: number,
      dueDate: Date,
    }>,
    TaskDomainChanged: ContractClient.Event<{
      id: number,
      domainId: number,
    }>,
    TaskSkillChanged: ContractClient.Event<{
      id: number,
      skillId: number,
    }>,
    TaskRoleUserChanged: ContractClient.Event<{
      id: number,
      role: number,
      user: Address,
    }>,
    TaskWorkerPayoutChanged: ContractClient.Event<{
      id: number,
      token: TokenAddress,
      amount: number,
    }>,
    TaskFinalized: ContractClient.Event<{
      id: number,
    }>,
    TaskCanceled: ContractClient.Event<{
      id: number,
    }>,
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
      'getTaskRole',
      [['role', 'role']],
      [['address', 'address'], ['rated', 'boolean'], ['rating', 'number']],
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
    this.addEvent('DomainAdded', [['id', 'number']]);
    this.addEvent('PotAdded', [['id', 'number']]);
    this.addEvent('TaskAdded', [['id', 'number']]);
    this.addEvent('TaskBriefChanged', [
      ['id', 'number'],
      ['specificationHash', 'ipfsHash'],
    ]);
    this.addEvent('TaskDueDateChanged', [
      ['id', 'number'],
      ['dueDate', 'date'],
    ]);
    this.addEvent('TaskDomainChanged', [
      ['id', 'number'],
      ['domainId', 'number'],
    ]);
    this.addEvent('TaskSkillChanged', [
      ['id', 'number'],
      ['skillId', 'number'],
    ]);
    this.addEvent('TaskRoleUserChanged', [
      ['id', 'number'],
      ['role', 'number'],
      ['user', 'address'],
    ]);
    this.addEvent('TaskWorkerPayoutChanged', [
      ['id', 'number'],
      ['token', 'tokenAddress'],
      ['amount', 'number'],
    ]);
    this.addEvent('TaskDeliverableSubmitted', [
      ['id', 'number'],
      ['deliverableHash', 'ipfsHash'],
    ]);
    this.addEvent('TaskWorkRatingRevealed', [
      ['id', 'number'],
      // $FlowFixMe
      ['role', 'role'],
      ['rating', 'number'],
    ]);
    this.addEvent('TaskFinalized', [['id', 'number']]);
    this.addEvent('TaskCanceled', [['id', 'number']]);

    // Senders
    const SkillAdded = {
      contract: this.networkClient.contract,
      handler({
        parentSkillId,
        skillId,
      }: {
        parentSkillId: BigNumber,
        skillId: BigNumber,
      }) {
        return {
          parentSkillId: parentSkillId.toNumber(),
          skillId: skillId.toNumber(),
        };
      },
    };
    const DomainAdded = {
      contract: this.contract,
      handler({ id }: { id: BigNumber }) {
        return {
          domainId: id.toNumber(),
        };
      },
    };
    const PotAdded = {
      contract: this.contract,
      handler({ id }: { id: BigNumber }) {
        return {
          potId: id.toNumber(),
        };
      },
    };

    this.addSender('addDomain', {
      input: [['parentSkillId', 'number']],
      eventHandlers: {
        DomainAdded,
        PotAdded,
        SkillAdded,
      },
    });
    this.addSender('addGlobalSkill', {
      input: [['parentSkillId', 'number']],
      eventHandlers: {
        SkillAdded,
      },
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
        // Flow hates you for using an optional last parameter in a tuple
        // $FlowFixMe
        ['specificationHash', 'ipfsHash'],
        ['domainId', 'number', DEFAULT_DOMAIN_ID],
      ],
      eventHandlers: {
        TaskAdded: {
          contract: this.contract,
          handler({ id }: { id: BigNumber }) {
            return {
              taskId: id.toNumber(),
            };
          },
        },
        PotAdded,
      },
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
    this.addSender('mintTokensForColonyNetwork', {
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
    this.addSender('setTaskRoleUser', {
      input: [['taskId', 'number'], ['role', 'role'], ['user', 'address']],
    });
    this.addSender('setTaskManagerPayout', {
      input: [
        ['taskId', 'number'],
        ['token', 'tokenAddress'],
        ['amount', 'bigNumber'],
      ],
    });
    this.addSender('setTaskSkill', {
      input: [['taskId', 'number'], ['skillId', 'number']],
    });
    this.addSender('submitTaskDeliverable', {
      input: [['taskId', 'number'], ['deliverableHash', 'ipfsHash']],
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

    // Multisig Senders
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
          return taskRoles.map(({ address }) => address).filter(isValidAddress);
        },
        multisigFunctionName: 'executeTaskChange',
        nonceFunctionName: 'getTaskChangeNonce',
        nonceInput: [['taskId', 'number']],
      });
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
  }
}

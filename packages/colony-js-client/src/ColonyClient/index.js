/* @flow */

import type BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';
import { isValidAddress } from '@colony/colony-js-utils';
// eslint-disable-next-line max-len
import type { ContractClientConstructorArgs } from '@colony/colony-js-contract-client';

import ColonyNetworkClient from '../ColonyNetworkClient/index';
import GetTask from './callers/GetTask';
import { ROLES } from '../constants';

type Address = string;

export default class ColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;

  /*
    Helper function used to generate the rating secret used in task ratings. Accepts a salt value and a value to hide, and returns the keccak256 hash of both.
  */
  generateSecret: ColonyClient.Caller<
    {
      salt: string, // Salt value
      value: number, // Value to hide
    },
    {
      secret: string, // keccak256 hash of joint Salt and Value
    },
    ColonyClient,
  >;
  /*
    Gets the total number of domains in a Colony. This number equals the last `domainId` created.
  */
  getDomainCount: ColonyClient.Caller<
    null,
    {
      count: number, // Number of all domain in this Colony; == the last added domainId
    },
    ColonyClient,
  >;
  /*
    Gets the total number of reward payout cycles.
  */
  getGlobalRewardPayoutCount: ColonyClient.Caller<
    null,
    {
      count: number, // Number of reward payout cycles
    },
    ColonyClient,
  >;
  /*
    Gets the number of claimed and waived reward payouts for a given user.
  */
  getUserRewardPayoutCount: ColonyClient.Caller<
    {
      user: Address, // Address of user
    },
    {
      count: number, // Number of claimed and waived reward payouts
    },
    ColonyClient,
  >;
  /*
    Gets the total number of tasks in a Colony. This number equals the last `taskId` created.
  */
  getTaskCount: ColonyClient.Caller<
    null,
    {
      count: number, // Total number of tasks in this Colony
    },
    ColonyClient,
  >;
  /*
    Gets a certain task defined by its integer taskId
  */
  getTask: ColonyClient.Caller<
    { taskId: number },
    {
      cancelled: boolean, // Boolean flag denoting whether the task is cancelled
      deliverableDate?: Date, // Date when the deliverable is due
      deliverableHash?: string, // Unique hash of the deliverable content
      domainId: number, // Integer Domain ID the task belongs to
      dueDate?: Date, // When the task is due
      finalized: boolean, // Boolean flag denoting whether the task is finalized
      id: number, // Integer task ID
      payoutsWeCannotMake?: number, // Number of payouts that cannot be completed with the current task funding
      potId?: number, // Integer ID of funding pot for the task
      skillId: number, // Integer Skill ID the task is assigned to
      specificationHash: string, // Unique hash of the specification content
    },
    ColonyClient,
  >;
  /*
    Given a specific task, a defined role for the task, and a token address, will return any payout attached to the task in the token specified.
  */
  getTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
      role: number, // Role the payout is specified for
      token: Address, // Address of the token's contract
    },
    {
      amount: number, // Amount of specified tokens to payout for that task and a role
    },
    ColonyClient,
  >;
  /*
    Every task has three roles associated with it which determine permissions for editing the task, submitting work, and ratings for performance.
  */
  getTaskRole: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
      role: number, // Role
    },
    {
      address: Address, // Address of the user for the given role
      rated: boolean, // Has the user work been rated
      rating: number, // Rating the user received
    },
    ColonyClient,
  >;
  /*
    For a given task, will return the number of submitted ratings and the timestamp of their submission
  */
  getTaskWorkRatings: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
    },
    {
      count: number, // Total number of submitted ratings for a task.
      timestamp: number, // Timestamp of the last submitted rating.
    },
    ColonyClient,
  >;
  /*
    If ratings for a task are still in the commit period, their ratings will still be hidden, but the hashed value can still be returned.
  */
  getTaskWorkRatingSecret: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
      role: number, // Role that submitted the rating
    },
    {
      secret: string, // the hashed rating (equivalent to the output of `keccak256(_salt, _rating)`).
    },
    ColonyClient,
  >;
  /*
    Gets a balance for a certain token in a specific pot
  */
  getPotBalance: ColonyClient.Caller<
    {
      potId: number, // Integer potId
      token: Address, // Address of the token's contract
    },
    {
      balance: number, // Balance for token `token` in pot `potId`
    },
    ColonyClient,
  >;
  /*
    The `nonRewardPotsTotal` is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks.
  */
  getNonRewardPotsTotal: ColonyClient.Caller<
    {
      address: Address, // Address of the token's contract (token in question)
    },
    {
      total: number, // All tokens that are not within the colony's `rewards` pot.
    },
    ColonyClient,
  >;
  /*
    Given a specific payout, returns useful information about the payout.
  */
  getRewardPayoutInfo: ColonyClient.Caller<
    {
      payoutId: number, // Id of the reward payout
    },
    {
      blockNumber: number, // Block number at the time of creation
      remainingTokenAmount: number, // Remaining (unclaimed) amount of tokens
      reputationRootHash: string, // Reputation root hash at the time of creation
      tokenAddress: Address, // Token address
      totalTokenAmountForRewardPayout: number, // Total amount of tokens taken aside for reward payout
      totalTokens: number, // Total colony tokens at the time of creation
    },
    ColonyClient,
  >;
  /*
    Gets the address of the colony's official token contract
  */
  getToken: ColonyClient.Caller<
    null,
    {
      address: string, // The address of the colony's official deployed token contract
    },
    ColonyClient,
  >;
  /*
    Returns the total number of transactions the colony has made, == the `transactionId` of the last added transaction to the Colony.
  */
  getTransactionCount: ColonyClient.Caller<
    null,
    {
      count: number, // Number of all transactions in this Colony; == the last added transactionId
    },
    ColonyClient,
  >;
  /*
    Creates a new task by invoking `makeTask` on-chain.
  */
  createTask: ColonyClient.Sender<
    {
      specificationHash: string, // Hashed output of the task's work specification, stored so that it can later be referenced for task ratings or in the event of a dispute.
      domainId: number, // Domain in which the task has been created.
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
      taskId: number, // Integer taskId
      specificationHash: string, // digest of the task's hashed specification.
    },
    null,
    ColonyClient,
  >;
  /*
    Every task must belong to a single existing Domain.
  */
  setTaskDomain: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      domainId: number, // Integer domainId
    },
    null,
    ColonyClient,
  >;
  /*
    The task's due date determines when a worker may submit the task's deliverable(s)
  */
  setTaskDueDate: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId
      dueDate: number, // Integer due date
    },
    null,
    ColonyClient,
  >;
  /*
    Set the user for role `_role` in task `_id`. Only allowed before the task is `finalized`, meaning that the value cannot be changed after the task is complete.
  */
  setTaskRoleUser: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      role: number, // MANAGER (`0`), EVALUATOR (`1`), or WORKER (`2`)
      user: string, // address of the user
    },
    null,
    ColonyClient,
  >;
  /*
  Sets the skill tag associated with the task. Currently there is only one skill tag available per task, but additional skills for tasks are planned in future implementations.
  */
  setTaskSkill: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      skillId: number, // Integer skillId
    },
    null,
    ColonyClient,
  >;
  /*
    Sets the payout given to the EVALUATOR role when the task is finalized.
  */
  setTaskEvaluatorPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId
      token: string, // Address of the token's ERC20 contract.
      amount: number, // Amount to be paid.
    },
    null,
    ColonyClient,
  >;
  /*
    Sets the payout given to the MANAGER role when the task is finalized.
  */
  setTaskManagerPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId
      token: string, // Address of the token's ERC20 contract.
      amount: number, // Amount to be paid.
    },
    null,
    ColonyClient,
  >;
  /*
    Sets the payout given to the WORKER role when the task is finalized.
  */
  setTaskWorkerPayout: ColonyClient.MultisigSender<
    {
      taskId: number, // Integer taskId
      token: string, // Address of the token's ERC20 contract.
      amount: number, // Amount to be paid.
    },
    null,
    ColonyClient,
  >;
  /*
    Submit the task deliverable, i.e. the output of the work performed for task `_id` Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten
  */
  submitTaskDeliverable: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      deliverableHash: string, // Hash of the work performed
    },
    null,
    ColonyClient,
  >;
  /*
    Submits a hidden work rating for a task. This is generated by generateSecret(_salt, _rating).
  */
  submitTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      role: number, // The role submitting their rating, either EVALUATOR (`1`) or WORKER (`2`)
      ratingSecret: string, // hidden work rating, generated as the output of `generateSecret(_salt, _rating)`, where `_rating` is a score from 0-50 (in increments of 10).
    },
    null,
    ColonyClient,
  >;
  /*
    Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `ratingSecret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function.
  */
  revealTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      role: number, // Role revealing their rating submission, either EVALUATOR (`1`) or WORKER (`2`)
      rating: number, // Rating scored 0-50 in increments of 10 (e.g. 10, 20, 30, 40 or 50).
      salt: string, // `_salt` value to be used in `generateSecret`. A correct value will result in the same `ratingSecret` submitted during the work rating submission period.
    },
    null,
    ColonyClient,
  >;
  /*
    In the event of a user not committing or revealing within the 10 day rating window, their rating of their counterpart is assumed to be the highest possible and their own rating is decreased by 5 (e.g. 0.5 points). This function may be called by anyone after the taskWorkRatings period has ended.
  */
  assignWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
    },
    null,
    ColonyClient,
  >;
  /*
    Cancels a task.
  */
  cancelTask: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
    },
    null,
    ColonyClient,
  >;
  /*
    Finalizes a task, allowing roles to claim payouts and prohibiting all further changes to the task.
  */
  finalizeTask: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
    },
    null,
    ColonyClient,
  >;
  /*
    Claims the payout in `_token` denomination for work completed in task `_id` by contributor with role `_role`. Allowed only by the contributors themselves after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Common Colony whereas Token fees go to the Network to be auctioned off.
  */
  claimPayout: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      role: number, // Role of the contributor claiming the payout.
      token: string, // Address of the token contract
    },
    null,
    ColonyClient,
  >;
  /*
    Adds a domain to the Colony along with the new domain's respective local skill.
  */
  addDomain: ColonyClient.Sender<
    {
      parentSkillId: number, // Id of the local skill under which the new skill will be added.
    },
    {
      skillId: number, // A skillId for this domain
      parentSkillId: number, // The parent skill id
    },
    ColonyClient,
  >;
  /*
    Adds a global skill under a given parent SkillId. Can only be called from the Common Colony
  */
  addGlobalSkill: ColonyClient.Sender<
    {
      parentSkillId: number, // Integer id of the parent skill
    },
    {
      skillId: number, // Integer id of the newly created skill
      parentSkillId: number, // Integer id of the parent skill
    },
    ColonyClient,
  >;
  /*
    Move any funds received by the colony in `token` denomination to the top-levl domain pot, siphoning off a small amount to the rewards pot. No fee is taken if called against a colony's own token.
  */
  claimColonyFunds: ColonyClient.Sender<
    {
      token: string, // Address of the token contract. `0x0` value indicates Ether.
    },
    null,
    ColonyClient,
  >;
  /*
    Finalises the reward payout and allows creation of next reward payout for token that has been used in `payoutId`. Can only be called when reward payout cycle is finished, i.e. 60 days from its creation.
  */
  finalizeRewardPayout: ColonyClient.Sender<
    {
      payoutId: number, // Id of the reward payout.
    },
    null,
    ColonyClient,
  >;
  /*
    Move a given amount of `token` funds from one pot to another
  */
  moveFundsBetweenPots: ColonyClient.Sender<
    {
      fromPot: number, // Origin pot Id
      toPot: number, // Destination pot Id
      amount: number, // Amount of funds to move
      address: string, // Address of the token contract
    },
    null,
    ColonyClient,
  >;
  /*
    The owner of a Colony may mint new tokens.
  */
  mintTokens: ColonyClient.Sender<
    {
      amount: number, // Amount of new tokens to be minted
    },
    null,
    ColonyClient,
  >;
  /*
    In the case of the Colony Network, only the Common Colony may mint new tokens
  */
  mintTokensForColonyNetwork: ColonyClient.Sender<
    {
      amount: number, // Amount of new tokens to be minted
    },
    null,
    ColonyClient,
  >;
  /*
    Start the next reward payout for `token`. All funds in the reward pot for `token` will become unavailable. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.
  */
  startNextRewardPayout: ColonyClient.Sender<
    {
      token: Address, // Address of token used for reward payout.
    },
    null,
    ColonyClient,
  >;
  /*
    Waive reward payout. This unlocks the sender's tokens and increments the users reward payout counter, allowing them to claim the next reward payout.
  */
  waiveRewardPayouts: ColonyClient.Sender<
    {
      numPayouts: number, // Number of payouts to waive
    },
    null,
    ColonyClient,
  >;

  static get defaultQuery() {
    return {
      contractName: 'IColony',
    };
  }

  constructor({
    networkClient,
    adapter,
    query,
  }: { networkClient?: ColonyNetworkClient } & ContractClientConstructorArgs) {
    super({ adapter, query });

    if (!(networkClient instanceof ColonyNetworkClient))
      throw new Error(
        'A `networkClient` property must be supplied ' +
          '(an instance of `ColonyNetworkClient`',
      );
    this.networkClient = networkClient;

    return this;
  }

  initializeContractMethods() {
    this.getTask = new GetTask({ client: this });

    // Callers
    this.createCaller('generateSecret', {
      input: [['salt', 'string'], ['value', 'number']],
      output: [['secret', 'string']],
    });
    this.createCaller('getDomainCount', {
      output: [['count', 'number']],
    });
    this.createCaller('getGlobalRewardPayoutCount', {
      output: [['count', 'number']],
    });
    this.createCaller('getUserRewardPayoutCount', {
      input: [['user', 'address']],
      output: [['count', 'number']],
    });
    this.createCaller('getNonRewardPotsTotal', {
      input: [['address', 'address']],
      output: [['total', 'number']],
    });
    this.createCaller('getPotBalance', {
      input: [['potId', 'number'], ['token', 'address']],
      output: [['balance', 'number']],
    });
    this.createCaller('getRewardPayoutInfo', {
      input: [['payoutId'], 'number'],
      output: [
        ['reputationRootHash', 'string'],
        ['totalTokens', 'number'],
        ['totalTokenAmountForRewardPayout', 'number'],
        ['remainingTokenAmount', 'number'],
        ['tokenAddress', 'address'],
        ['blockNumber', 'number'],
      ],
    });
    this.createCaller('getTaskCount', {
      output: [['count', 'number']],
    });
    this.createCaller('getTaskPayout', {
      input: [['taskId', 'number'], ['role', 'number'], ['token', 'address']],
      output: [['amount', 'number']],
    });
    this.createCaller('getTaskRole', {
      input: [['taskId', 'number'], ['role', 'number']],
      output: [
        ['address', 'address'],
        ['rated', 'boolean'],
        ['rating', 'number'],
      ],
    });
    this.createCaller('getTaskWorkRatings', {
      input: [['taskId', 'number']],
      output: [['count', 'number'], ['timestamp', 'number']],
    });
    this.createCaller('getTaskWorkRatingSecret', {
      input: [['taskId', 'number'], ['role', 'number']],
      output: [['secret', 'string']],
    });
    this.createCaller('getToken', {
      output: [['address', 'address']],
    });

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
    this.createSender('addDomain', {
      input: [['domainId', 'number']],
      eventHandlers: {
        success: { SkillAdded },
      },
    });
    this.createSender('addGlobalSkill', {
      input: [['parentSkillId', 'number']],
      eventHandlers: {
        success: { SkillAdded },
      },
    });
    this.createSender('assignWorkRating', {
      input: [['taskId', 'number']],
    });
    this.createSender('cancelTask', {
      input: [['taskId', 'number']],
    });
    this.createSender('claimColonyFunds', {
      input: [['token', 'address']],
    });
    this.createSender('claimPayout', {
      input: [['token', 'address'], ['role', 'number'], ['token', 'address']],
    });
    this.createSender('createTask', {
      functionName: 'makeTask',
      input: [['specificationHash', 'string'], ['domainId', 'number']],
      eventHandlers: {
        success: {
          TaskAdded: {
            contract: this.contract,
            handler({ id }: { id: BigNumber }) {
              return {
                taskId: id.toNumber(),
              };
            },
          },
        },
      },
    });
    this.createSender('finalizeTask', {
      input: [['taskId', 'number']],
    });
    this.createSender('finalizeRewardPayout', {
      input: [['payoutId', 'number']],
    });
    this.createSender('mintTokens', {
      input: [['amount', 'number']],
    });
    this.createSender('mintTokensForColonyNetwork', {
      input: [['amount', 'number']],
    });
    this.createSender('moveFundsBetweenPots', {
      input: [
        ['fromPot', 'number'],
        ['toPot', 'number'],
        ['amount', 'number'],
        ['address', 'address'],
      ],
    });
    this.createSender('revealTaskWorkRating', {
      input: [
        ['taskId', 'number'],
        ['role', 'number'],
        ['rating', 'number'],
        ['salt', 'string'],
      ],
    });
    this.createSender('setTaskDomain', {
      input: [['taskId', 'number'], ['domainId', 'number']],
    });
    this.createSender('setTaskRoleUser', {
      // TODO consider making this sender more convenient
      input: [['taskId', 'number'], ['role', 'number'], ['user', 'address']],
    });
    this.createSender('setTaskSkill', {
      input: [['taskId', 'number'], ['skillId', 'number']],
    });
    this.createSender('submitTaskDeliverable', {
      input: [['taskId', 'number'], ['deliverableHash', 'string']],
    });
    this.createSender('startNextRewardPayout', {
      input: [['token', 'address']],
    });
    this.createSender('waiveRewardPayouts', {
      input: [['numPayouts', 'number']],
    });
    this.createSender('submitTaskWorkRating', {
      input: [
        ['taskId', 'number'],
        ['role', 'number'],
        ['ratingSecret', 'string'],
      ],
    });

    // Multisig Senders
    const makeExecuteTaskChange = (name: string, input: Array<any>) =>
      this.createMultisigSender(name, {
        input: [['taskId', 'number'], ...input],
        getRequiredSignees: async ({ taskId }: { taskId: number }) => {
          const taskRoles = await Promise.all(
            [ROLES.MANAGER, ROLES.EVALUATOR, ROLES.WORKER].map(role =>
              this.getTaskRole.call({ taskId, role }),
            ),
          );
          return taskRoles.map(({ address }) => address).filter(isValidAddress);
        },
        multisigFunctionName: 'executeTaskChange',
        nonceFunctionName: 'getTaskChangeNonce',
      });
    makeExecuteTaskChange('setTaskBrief', [['specificationHash', 'string']]);
    makeExecuteTaskChange('setTaskDueDate', [['dueDate', 'number']]);
    makeExecuteTaskChange('setTaskWorkerPayout', [
      ['token', 'address'],
      ['amount', 'number'],
    ]);
    makeExecuteTaskChange('setTaskManagerPayout', [
      ['token', 'address'],
      ['amount', 'number'],
    ]);
    makeExecuteTaskChange('setTaskEvaluatorPayout', [
      ['token', 'address'],
      ['amount', 'number'],
    ]);
  }
}

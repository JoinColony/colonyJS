/* @flow */

import type BigNumber from 'bn.js';
import type { Query } from '@colony/colony-js-contract-loader';

import type { IAdapter, IContract } from '@colony/colony-js-adapter';
import ContractClient from '@colony/colony-js-contract-client';

import ColonyNetworkClient from '../ColonyNetworkClient/index';
import GetTask from './callers/GetTask';

type Address = string;

export default class ColonyClient extends ContractClient {
  networkClient: ColonyNetworkClient;
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
    Given a specific [task](glossary#task) a defined role for the task, (see [roles](glossary#roles)) and an ERC20 Token address (see [tokens](glossary#tokens)), `getTaskPayout` will return any payout attached to the task in the token specified.
  */
  getTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
      role: number, // Role the payout is specified for
      token: Address, // Address of the token's ERC20 contract
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
      role: number, // Role (see [roles](glossary#roles))
    },
    {
      address: Address, // Address of the user for the given role
      rated: boolean, // Has the user work been rated
      rating: number, // Rating the user received
    },
    ColonyClient,
  >;
  /*
    For a given task, will return the number of submitted ratings and the timestamp of their submission (see (rating[glossary#work-ratings]))
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
      token: Address, // Address of the token's ERC20 contract
    },
    {
      balance: number, // Balance for token `token` in pot `potId`
    },
    ColonyClient,
  >;
  /*
    The `nonRewardPotsTotal` is a value that keeps track of the total assets a colony has to work with, which may be split among several distinct pots associated with various domains and tasks. See [pots](glossary#pots))
  */
  getNonRewardPotsTotal: ColonyClient.Caller<
    {
      address: Address, // Address of the token's ERC20 contract (token in question)
    },
    {
      total: number, // All tokens that are not within the colony's `rewards` pot.
    },
    ColonyClient,
  >;
  /*
    Gets the address of the colony's official ERC20 token contract
  */
  getToken: ColonyClient.Caller<
    null,
    {
      address: string, // The address of the colony's official deployed ERC20 token contract
    },
    ColonyClient,
  >;
  /*
    TODO: this needs more clarity. On the face of it, this function returns the number of all transactions in this colony, but what this really entails is that it will be returning the `transactionId` of the last added transaction to the Colony.
  */
  getTransactionCount: ColonyClient.Caller<
    null,
    {
      count: number, // Number of all transactions in this Colony; == the last added transactionId
    },
    ColonyClient,
  >;
  /*
    Creates a new task by invoking `makeTask` on-chain. This is the first step in the Task lifecycle; see [tasks](glossary#tasks) for a complete description.
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
    Reveals a previously submitted work rating, by proving that the `_rating` and `_salt` values result in the same `ratingSecret` submitted during the rating submission period. This is checked on-chain using the `generateSecret` function. See [Work Ratings](glossary#work-ratings) for more info.
  */
  revealTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number, // Integer taskId
      role: number, // Role revealing their rating submission, either EVALUATOR (`1`) or WORKER (`2`)
      rating: number, // TODO: is the rating going to change to between 0 and 3 or remain 5 stars?
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
      rating: number, // TODO: is this really a parameter? doesn't seem like it should be as the function in `ColonyTask.sol` only has one arg...
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
      token: string, // Address of the ERC20 token contract
    },
    null,
    ColonyClient,
  >;
  /*
    TODO: Adds a domain to this Colony. Please verify all input and output values. We should probably explain why this requires skill ids
  */
  addDomain: ColonyClient.Sender<
    {
      parentSkillId: number, // TODO: Why do I have to define a skill for a domain? No idea
    },
    {
      skillId: number, // A skillId for this domain
      parentSkillId: number, // The parent skill id
    },
    ColonyClient,
  >;
  /*
    TODO: Adds a global skill. Whatever that means.
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
    Claims funds that are in the Colony's rewards pot. See [pots](glossary#pots) for mor info.
  */
  claimColonyFunds: ColonyClient.Sender<
    {
      token: string, // Address of the ERC20 token contract
    },
    null,
    ColonyClient,
  >;
  /*
      Moves funds between pots in a Colony. See [pots](glossary#pots) for more info.
    */
  moveFundsBetweenPots: ColonyClient.Sender<
    {
      fromPot: number, // Origin pot
      toPot: number, // Destination pot
      amount: number, // Amount of funds to move
      address: string, // Address of the ERC20 token contract
    },
    null,
    ColonyClient,
  >;
  /*
    The owner of a Colony may mint new tokens.
  */
  mintTokens: ColonyClient.Sender<
    {
      amount: number, // amount to be minted
    },
    null,
    ColonyClient,
  >;
  /*
    In the case of the Colony Network, only the Common Colony may mint new tokens
  */
  mintTokensForColonyNetwork: ColonyClient.Sender<
    {
      amount: number, // Tokens to be minted
    },
    null,
    ColonyClient,
  >;
  // When we create a Colony, we get back the address of a newly-deployed
  // EtherRouter contract (we think).
  static async create(
    adapter: IAdapter,
    query: Query,
    networkClient: ColonyNetworkClient,
  ) {
    const contract = await adapter.getContract(query);
    return new this({ adapter, contract, options: { networkClient } });
  }
  static async createSelf(
    adapter: IAdapter,
    networkClient: ColonyNetworkClient,
    query: Query,
  ) {
    return this.create(
      adapter,
      { contractName: 'IColony', ...query },
      networkClient,
    );
  }
  constructor({
    adapter,
    contract,
    options,
  }: {
    adapter: IAdapter,
    contract: IContract,
    options: { networkClient: ColonyNetworkClient },
  }) {
    super({ adapter, contract, options });
    this.networkClient = options.networkClient;
  }
  initializeContractMethods({
    networkClient,
  }: { networkClient: ColonyNetworkClient } = {}) {
    this.getTask = new GetTask({ client: this });

    // Callers
    // TODO add typing
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
    // TODO add typing
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
      contract: networkClient.contract,
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
    // TODO add typing
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
    // TODO add typings for these
    this.createSender('setTaskManagerPayout', {
      input: [['taskId', 'number'], ['token', 'address'], ['amount', 'number']],
    });
    this.createSender('setTaskEvaluatorPayout', {
      input: [['taskId', 'number'], ['token', 'address'], ['amount', 'number']],
    });
    this.createSender('setTaskWorkerPayout', {
      input: [['taskId', 'number'], ['token', 'address'], ['amount', 'number']],
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
  }
}

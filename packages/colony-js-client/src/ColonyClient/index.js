/* @flow */

import BigNumber from 'bn.js';
// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';

import type { IAdapter, InterfaceFn } from '@colony/colony-js-adapter';
import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyContract } from '../interface/ColonyContract';
import ColonyNetworkClient from '../ColonyNetworkClient/index';

import GetTask from './callers/GetTask';

type TransactionEventData = {
  transactionId: number,
  confirmed?: boolean,
  executed?: boolean,
  submitted?: boolean,
};

type Address = string;

export default class ColonyClient extends ContractClient<ColonyContract> {
  contract: ColonyContract;
  networkClient: ColonyNetworkClient;
  /*
    (TODO: this has to be explained better, what are the implications and why is this even important?)
    Pots can be tied to tasks or to (in the future) domains, so giving them their own mapping.
    Pot 1  can be thought of as the pot belonging to the colony itself that hasn't been assigned
    to anything yet, but has had some siphoned off in to the reward pot.
    Pot 0 is the pot containing funds that can be paid to holders of colony tokens in the future.
    This keeps track of how much of the colony's funds that it owns have been moved into pots other than pot 0,
    which (by definition) have also had the reward amount siphoned off and put in to pot 0
  */
  getNonRewardPotsTotal: ColonyClient.Caller<
    {
      address: Address, // Adress of the token's ERC20 contract (token in question)
    },
    {
      total: number, // All tokens that are not reserved for network fees (TODO: this is most likely wrong)
    },
    ColonyClient,
  >;
  /*
    Gets a balance for a certain token in a specific pot
  */
  getPotBalance: ColonyClient.Caller<
    {
      potId: number, // Integer potId
      token: Address, // Adress of the token's ERC20 contract
    },
    {
      balance: number, // Balance for token `token` in pot `potId`
    },
    ColonyClient,
  >;
  // TODO: Please type explicitly!
  /*
    Gets a certain task defined by its integer taskId
  */
  getTask: GetTask;
  /*
    Gets the total number of tasks in a Colony
  */
  getTaskCount: ColonyClient.Caller<
    null,
    {
      count: number, // Total number of tasks in this Colony
    },
    ColonyClient,
  >;
  /*
    Get's the amount of payout for a specific task, a defined role (0 = MANAGER, 1 = EVALUATOR, 2 = WORKER) and a specific
    token defined by it's address
  */
  getTaskPayout: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
      role: number, // Role the payout is specified for
      token: Address, // Adress of the token's ERC20 contract
    },
    {
      amount: number, // Amount of specified tokens to payout for that task and a role
    },
    ColonyClient,
  >;
  /*
    (TODO: find out what this is all about)
    Get information about a certain role of a task
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
    TODO: I'm not entirely sure what this does
  */
  getTaskWorkRatings: ColonyClient.Caller<
    {
      taskId: number, // Integer taskId
    },
    {
      count: number, // TODO: no idea
      timestamp: number, // TODO: A time of some sort
    },
    ColonyClient,
  >;
  getTaskWorkRatingSecret: ColonyClient.Caller<
    {
      taskId: number,
      role: number,
    },
    {
      secret: string,
    },
    ColonyClient,
  >;
  /*
    Gets the address of the Colony's official ERC20 token contract
  */
  getToken: ColonyClient.Caller<
    null,
    {
      address: string, // The address of the Colony's official deployed ERC20 token contract
    },
    ColonyClient,
  >;
  /*
    Returns the number of all transactions in this Colony
  */
  getTransactionCount: ColonyClient.Caller<
    null,
    {
      count: number, // Number of all transactions in this Colony
    },
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
    Approves a task change. TODO: Please elaborate.
  */
  approveTaskChange: ColonyClient.Sender<
    {
      transactionId: number, // TODO: transactionId of what?
      role: number, // TODO: Why is this necessary? Can we find out?
    },
    TransactionEventData,
    ColonyClient,
  >;
  assignWorkRating: ColonyClient.Sender<
    { taskId: number, rating: number },
    null,
    ColonyClient,
  >;
  cancelTask: ColonyClient.Sender<{ taskId: number }, null, ColonyClient>;
  claimColonyFunds: ColonyClient.Sender<{ token: string }, null, ColonyClient>;
  claimPayout: ColonyClient.Sender<
    { taskId: number, role: number, token: string },
    null,
    ColonyClient,
  >;
  createTask: ColonyClient.Sender<
    { specificationHash: string, domainId: number },
    { taskId: number },
    ColonyClient,
  >;
  finalizeTask: ColonyClient.Sender<{ taskId: number }, null, ColonyClient>;
  mintTokens: ColonyClient.Sender<{ amount: number }, null, ColonyClient>;
  mintTokensForColonyNetwork: ColonyClient.Sender<
    { amount: number },
    null,
    ColonyClient,
  >;
  moveFundsBetweenPots: ColonyClient.Sender<
    {
      fromPot: number,
      toPot: number,
      amount: number,
      address: string,
    },
    null,
    ColonyClient,
  >;
  revealTaskWorkRating: ColonyClient.Sender<
    {
      taskId: number,
      role: number,
      rating: number,
      salt: string,
    },
    null,
    ColonyClient,
  >;
  setTaskBrief: ColonyClient.Sender<
    { taskId: number, specificationHash: string },
    TransactionEventData,
    ColonyClient,
  >;
  setTaskDomain: ColonyClient.Sender<
    { taskId: number, domainId: number },
    null,
    ColonyClient,
  >;
  setTaskDueDate: ColonyClient.Sender<
    { taskId: number, dueDate: number },
    TransactionEventData,
    ColonyClient,
  >;
  setTaskRoleUser: ColonyClient.Sender<
    { taskId: number, role: number, user: string },
    null,
    ColonyClient,
  >;
  setTaskSkill: ColonyClient.Sender<
    { taskId: number, skillId: number },
    null,
    ColonyClient,
  >;
  setTaskEvaluatorPayout: ColonyClient.Sender<
    { taskId: number, token: string, amount: number },
    TransactionEventData,
    ColonyClient,
  >;
  setTaskManagerPayout: ColonyClient.Sender<
    { taskId: number, token: string, amount: number },
    TransactionEventData,
    ColonyClient,
  >;
  setTaskWorkerPayout: ColonyClient.Sender<
    { taskId: number, token: string, amount: number },
    TransactionEventData,
    ColonyClient,
  >;
  submitTaskDeliverable: ColonyClient.Sender<
    { taskId: number, deliverableHash: string },
    null,
    ColonyClient,
  >;
  submitTaskWorkRating: ColonyClient.Sender<
    { taskId: number, role: number, ratingSecret: string },
    null,
    ColonyClient,
  >;
  // When we create a Colony, we get back the address of a newly-deployed
  // EtherRouter contract (we think).
  static async create(
    adapter: IAdapter<ColonyContract>,
    contractName: string,
    loaderOptions: LoaderOptions,
    networkClient: ColonyNetworkClient,
  ) {
    const contract = await adapter.getContract(contractName, loaderOptions);
    return new this({ adapter, contract, networkClient });
  }
  static async createSelf(
    adapter: IAdapter<ColonyContract>,
    networkClient: ColonyNetworkClient,
    loaderOptions: LoaderOptions,
  ) {
    return this.create(adapter, 'IColony', loaderOptions, networkClient);
  }
  constructor({
    adapter,
    contract,
    networkClient,
  }: {
    adapter: IAdapter<ColonyContract>,
    contract: ColonyContract,
    networkClient: ColonyNetworkClient,
  }) {
    super({ adapter, contract, options: { networkClient } });
    this.getTask = new GetTask(this);
  }
  getCallerDefs(): * {
    return {
      getNonRewardPotsTotal: {
        call: this.contract.functions.getNonRewardPotsTotal,
        params: [['address', 'address']],
        returnValues: [['total', 'number']],
      },
      getPotBalance: {
        call: this.contract.functions.getPotBalance,
        params: [['potId', 'number'], ['token', 'address']],
        returnValues: [['balance', 'number']],
      },
      getTaskCount: {
        call: this.contract.functions.getTaskCount,
        returnValues: [['count', 'number']],
      },
      getTaskPayout: {
        call: this.contract.functions.getPotBalance,
        params: [
          ['taskId', 'number'],
          ['role', 'number'],
          ['token', 'address'],
        ],
        returnValues: [['amount', 'number']],
      },
      getTaskRole: {
        call: this.contract.functions.getTaskRole,
        params: [['taskId', 'number'], ['role', 'number']],
        returnValues: [
          ['address', 'address'],
          ['rated', 'boolean'],
          ['rating', 'number'],
        ],
      },
      getTaskWorkRatings: {
        call: this.contract.functions.getTaskWorkRatings,
        params: [['taskId', 'number']],
        returnValues: [['count', 'number'], ['timestamp', 'number']],
      },
      getTaskWorkRatingSecret: {
        call: this.contract.functions.getTaskWorkRatingSecret,
        params: [['taskId', 'number'], ['role', 'number']],
        returnValues: [['secret', 'string']],
      },
      getToken: {
        call: this.contract.functions.getToken,
        returnValues: [['address', 'address']],
      },
      getTransactionCount: {
        call: this.contract.functions.getTransactionCount,
        returnValues: [['count', 'number']],
      },
    };
  }
  getSenderDefs({
    networkClient,
  }: { networkClient: ColonyNetworkClient } = {}): * {
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

    const Confirmation = {
      contract: this.contract,
      handler({ transactionId }: { transactionId: BigNumber }) {
        return {
          transactionId: transactionId.toNumber(),
          confirmed: true,
        };
      },
    };
    const Execution = {
      contract: this.contract,
      handler({ transactionId }: { transactionId: BigNumber }) {
        return {
          transactionId: transactionId.toNumber(),
          executed: true,
        };
      },
    };
    const Submission = {
      contract: this.contract,
      handler({ transactionId }: { transactionId: BigNumber }) {
        return {
          transactionId: transactionId.toNumber(),
          submitted: true,
        };
      },
    };
    const ExecutionFailure = {
      contract: this.contract,
      handler({ transactionId }: { transactionId: BigNumber }) {
        throw new Error(
          `Transaction ${transactionId.toNumber()} failed to be executed`,
        );
      },
    };

    const proposeTaskChange = ({
      getData,
      params,
    }: {
      getData: InterfaceFn<*>,
      params: *,
    }) => ({
      send: this.contract.functions.proposeTaskChange,
      estimate: this.contract.estimate.proposeTaskChange,
      getArgs(parameters: {}): Array<*> {
        const args = this.constructor.getArgs(parameters);
        const role = args.pop();
        const { data } = getData(...args);
        return [data, 0, role]; // 0 == Transaction value
      },
      params,
      eventHandlers: {
        success: {
          Submission,
          Confirmation,
        },
      },
    });

    return {
      addDomain: {
        send: this.contract.functions.addDomain,
        estimate: this.contract.estimate.addDomain,
        params: [['domainId', 'number']],
        eventHandlers: {
          success: { SkillAdded },
        },
      },
      addGlobalSkill: {
        send: this.contract.functions.addGlobalSkill,
        estimate: this.contract.estimate.addGlobalSkill,
        params: [['parentSkillId', 'number']],
        eventHandlers: {
          success: { SkillAdded },
        },
      },
      approveTaskChange: {
        send: this.contract.functions.approveTaskChange,
        estimate: this.contract.estimate.approveTaskChange,
        params: [['transaction', 'number'], ['role', 'number']],
        eventHandlers: {
          success: {
            Confirmation,
            Execution,
          },
          error: {
            ExecutionFailure,
          },
        },
      },
      assignWorkRating: {
        send: this.contract.functions.assignWorkRating,
        estimate: this.contract.estimate.assignWorkRating,
        params: [['taskId', 'number']],
      },
      cancelTask: {
        send: this.contract.functions.cancelTask,
        estimate: this.contract.estimate.cancelTask,
        params: [['taskId', 'number']],
      },
      claimColonyFunds: {
        send: this.contract.functions.claimColonyFunds,
        estimate: this.contract.estimate.claimColonyFunds,
        params: [['token', 'address']],
      },
      claimPayout: {
        send: this.contract.functions.claimPayout,
        estimate: this.contract.estimate.claimPayout,
        params: [
          ['token', 'address'],
          ['role', 'number'],
          ['token', 'address'],
        ],
      },
      createTask: {
        send: this.contract.functions.makeTask,
        estimate: this.contract.estimate.makeTask,
        params: [['specificationHash', 'string'], ['domainId', 'number']],
        eventHandlers: {
          success: {
            TaskAdded: {
              contract: this.contract,
              handler({ id }: { id: * }) {
                return {
                  taskId: id.toNumber(),
                };
              },
            },
          },
        },
      },
      finalizeTask: {
        send: this.contract.functions.finalizeTask,
        estimate: this.contract.estimate.finalizeTask,
        params: [['taskId', 'number']],
      },
      mintTokens: {
        send: this.contract.functions.mintTokens,
        estimate: this.contract.estimate.mintTokens,
        params: [['amount', 'number']],
      },
      mintTokensForColonyNetwork: {
        send: this.contract.functions.mintTokensForColonyNetwork,
        estimate: this.contract.estimate.mintTokensForColonyNetwork,
        params: [['amount', 'number']],
      },
      moveFundsBetweenPots: {
        send: this.contract.functions.moveFundsBetweenPots,
        estimate: this.contract.estimate.moveFundsBetweenPots,
        params: [
          ['fromPot', 'number'],
          ['toPot', 'number'],
          ['amount', 'number'],
          ['address', 'address'],
        ],
      },
      revealTaskWorkRating: {
        send: this.contract.functions.revealTaskWorkRating,
        estimate: this.contract.estimate.revealTaskWorkRating,
        params: [
          ['taskId', 'number'],
          ['role', 'number'],
          ['rating', 'number'],
          ['salt', 'string'],
        ],
      },
      setTaskBrief: proposeTaskChange({
        getData: this.contract.interface.functions.setTaskBrief,
        params: [
          ['taskId', 'number'],
          ['specificationHash', 'address'],
          ['role', 'number'],
        ],
      }),
      setTaskDomain: {
        send: this.contract.functions.setTaskDomain,
        estimate: this.contract.estimate.setTaskDomain,
        params: [['taskId', 'number'], ['domainId', 'number']],
      },
      setTaskDueDate: proposeTaskChange({
        getData: this.contract.interface.functions.setTaskDueDate,
        params: [
          ['taskId', 'number'],
          ['dueDate', 'number'],
          ['role', 'number'],
        ],
      }),
      setTaskRoleUser: {
        send: this.contract.functions.setTaskRoleUser,
        estimate: this.contract.estimate.setTaskRoleUser,
        params: [['taskId', 'number'], ['role', 'number'], ['user', 'address']],
      },
      setTaskSkill: {
        send: this.contract.functions.setTaskSkill,
        estimate: this.contract.estimate.setTaskSkill,
        params: [['taskId', 'number'], ['skillId', 'number']],
      },
      setTaskEvaluatorPayout: proposeTaskChange({
        getData: this.contract.interface.functions.setTaskEvaluatorPayout,
        params: [
          ['taskId', 'number'],
          ['token', 'address'],
          ['amount', 'number'],
          ['role', 'number'],
        ],
      }),
      setTaskManagerPayout: proposeTaskChange({
        getData: this.contract.interface.functions.setTaskManagerPayout,
        params: [
          ['taskId', 'number'],
          ['token', 'address'],
          ['amount', 'number'],
          ['role', 'number'],
        ],
      }),
      setTaskWorkerPayout: proposeTaskChange({
        getData: this.contract.interface.functions.setTaskWorkerPayout,
        params: [
          ['taskId', 'number'],
          ['token', 'address'],
          ['amount', 'number'],
          ['role', 'number'],
        ],
      }),
      submitTaskDeliverable: {
        send: this.contract.functions.submitTaskDeliverable,
        estimate: this.contract.estimate.submitTaskDeliverable,
        params: [['taskId', 'number'], ['deliverableHash', 'string']],
      },
      submitTaskWorkRating: {
        send: this.contract.functions.submitTaskWorkRating,
        estimate: this.contract.estimate.submitTaskWorkRating,
        params: [
          ['taskId', 'number'],
          ['role', 'number'],
          ['ratingSecret', 'string'],
        ],
      },
    };
  }
}

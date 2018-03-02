/* @flow */

import BigNumber from 'bn.js';
// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';

import type { IAdapter, InterfaceFn } from '@colony/colony-js-adapter';
import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyContract } from '../interface/ColonyContract';
import ColonyNetworkClient from '../ColonyNetworkClient/index';

import GetTask from './callers/GetTask';

const TRANSACTION_EVENT_HANDLERS = {
  Confirmation({ transactionId }: { transactionId: BigNumber }) {
    return {
      transactionId: transactionId.toNumber(),
      confirmed: true,
    };
  },
  Execution({ transactionId }: { transactionId: BigNumber }) {
    return {
      transactionId: transactionId.toNumber(),
      executed: true,
    };
  },
  Submission({ transactionId }: { transactionId: BigNumber }) {
    return {
      transactionId: transactionId.toNumber(),
      submitted: true,
    };
  },
  // TODO ExecutionFailure?
};

type TransactionEventData = {
  transactionId: number,
  confirmed?: boolean,
  executed?: boolean,
  submitted?: boolean,
};

export default class ColonyClient extends ContractClient<ColonyContract> {
  contract: ColonyContract;
  networkClient: ColonyNetworkClient;
  getNonRewardPotsTotal: ColonyClient.Caller<
    { address: string },
    { total: number },
    ColonyClient,
  >;
  getPotBalance: ColonyClient.Caller<
    { potId: number, token: string },
    { balance: number },
    ColonyClient,
  >;
  getTask: GetTask;
  getTaskCount: ColonyClient.Caller<null, { count: number }, ColonyClient>;
  getTaskPayout: ColonyClient.Caller<
    {
      taskId: number,
      role: number,
      token: string,
    },
    { amount: number },
    ColonyClient,
  >;
  getTaskRole: ColonyClient.Caller<
    { taskId: number, role: number },
    { role: number, rated: boolean, rating: number },
    ColonyClient,
  >;
  getTaskWorkRatings: ColonyClient.Caller<
    {
      taskId: number,
    },
    {
      count: number,
      timestamp: number,
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
  getToken: ColonyClient.Caller<
    null,
    {
      address: string,
    },
    ColonyClient,
  >;
  getTransactionCount: ColonyClient.Caller<
    null,
    {
      count: number,
    },
    ColonyClient,
  >;
  addDomain: ColonyClient.Sender<{ domainId: number }, null, ColonyClient>;
  addGlobalSkill: ColonyClient.Sender<
    { parentSkillId: number },
    null,
    ColonyClient,
  >;
  approveTaskChange: ColonyClient.Sender<
    { transactionId: number, role: number },
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
    const client = await super.create(adapter, contractName, loaderOptions);
    client.networkClient = networkClient;
    client.getTask = new GetTask(client);
    return client;
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
    super({ adapter, contract });
    this.networkClient = networkClient;
    this.getTask = new GetTask(this);
  }
  get callerDefs(): * {
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
        params: [['taskId', 'int'], ['role', 'int'], ['token', 'address']],
        returnValues: [['amount', 'number']],
      },
      getTaskRole: {
        call: this.contract.functions.getTaskRole,
        params: [['taskId', 'int'], ['role', 'int']],
        returnValues: [
          ['role', 'string'],
          ['rated', 'boolean'],
          ['rating', 'number'],
        ],
      },
      getTaskWorkRatings: {
        call: this.contract.functions.getTaskWorkRatings,
        returnValues: [['count', 'number'], ['timestamp', 'number']],
        params: [['taskId', 'int']],
      },
      getTaskWorkRatingSecret: {
        call: this.contract.functions.getTaskWorkRatingSecret,
        params: [['taskId', 'int'], ['role', 'int']],
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
  get senderDefs(): * {
    const proposeTaskChange = ({
      proxy,
      params,
    }: {
      proxy: InterfaceFn<*>,
      params: *,
    }) => ({
      send: this.contract.functions.proposeTaskChange,
      estimate: this.contract.estimate.proposeTaskChange,
      proxy,
      params,
      eventHandlers: TRANSACTION_EVENT_HANDLERS,
    });

    return {
      addDomain: {
        send: this.contract.functions.addDomain,
        estimate: this.contract.estimate.addDomain,
        params: [['domainId', 'int']],
      },
      addGlobalSkill: {
        send: this.contract.functions.addGlobalSkill,
        estimate: this.contract.estimate.addGlobalSkill,
        params: [['parentSkillId', 'int']],
      },
      approveTaskChange: {
        send: this.contract.functions.approveTaskChange,
        estimate: this.contract.estimate.approveTaskChange,
        params: [['transaction', 'int'], ['role', 'int']],
        eventHandlers: {
          Confirmation: TRANSACTION_EVENT_HANDLERS.Confirmation,
          Execution: TRANSACTION_EVENT_HANDLERS.Execution,
        },
      },
      assignWorkRating: {
        send: this.contract.functions.assignWorkRating,
        estimate: this.contract.estimate.assignWorkRating,
        params: [['taskId', 'int']],
      },
      cancelTask: {
        send: this.contract.functions.cancelTask,
        estimate: this.contract.estimate.cancelTask,
        params: [['taskId', 'int']],
      },
      claimColonyFunds: {
        send: this.contract.functions.claimColonyFunds,
        estimate: this.contract.estimate.claimColonyFunds,
        params: [['token', 'address']],
      },
      claimPayout: {
        send: this.contract.functions.claimPayout,
        estimate: this.contract.estimate.claimPayout,
        params: [['token', 'address'], ['role', 'int'], ['token', 'address']],
      },
      createTask: {
        send: this.contract.functions.makeTask,
        estimate: this.contract.estimate.makeTask,
        params: [['specificationHash', 'string'], ['domainId', 'number']],
        eventHandlers: {
          TaskAdded({ id }: { id: * }) {
            return {
              taskId: id.toNumber(),
            };
          },
        },
      },
      finalizeTask: {
        send: this.contract.functions.finalizeTask,
        estimate: this.contract.estimate.finalizeTask,
        params: [['taskId', 'int']],
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
          ['fromPot', 'int'],
          ['toPot', 'int'],
          ['amount', 'number'],
          ['address', 'address'],
        ],
      },
      revealTaskWorkRating: {
        send: this.contract.functions.revealTaskWorkRating,
        estimate: this.contract.estimate.revealTaskWorkRating,
        params: [
          ['taskId', 'int'],
          ['role', 'int'],
          ['rating', 'number'],
          ['salt', 'string'],
        ],
      },
      setTaskBrief: proposeTaskChange({
        proxy: this.contract.interface.functions.setTaskBrief,
        params: [['taskId', 'int'], ['specificationHash', 'address']],
      }),
      setTaskDomain: {
        send: this.contract.functions.setTaskDomain,
        estimate: this.contract.estimate.setTaskDomain,
        params: [['taskId', 'int'], ['domainId', 'int']],
      },
      setTaskDueDate: proposeTaskChange({
        proxy: this.contract.interface.functions.setTaskDueDate,
        params: [['taskId', 'int'], ['dueDate', 'number']],
      }),
      setTaskRoleUser: {
        send: this.contract.functions.setTaskRoleUser,
        estimate: this.contract.estimate.setTaskRoleUser,
        params: [['taskId', 'int'], ['role', 'int'], ['user', 'address']],
      },
      setTaskSkill: {
        send: this.contract.functions.setTaskSkill,
        estimate: this.contract.estimate.setTaskSkill,
        params: [['taskId', 'int'], ['skillId', 'int']],
      },
      setTaskEvaluatorPayout: proposeTaskChange({
        proxy: this.contract.interface.functions.setTaskEvaluatorPayout,
        params: [['taskId', 'int'], ['token', 'address'], ['amount', 'number']],
      }),
      setTaskManagerPayout: proposeTaskChange({
        proxy: this.contract.interface.functions.setTaskManagerPayout,
        params: [['taskId', 'int'], ['token', 'address'], ['amount', 'number']],
      }),
      setTaskWorkerPayout: proposeTaskChange({
        proxy: this.contract.interface.functions.setTaskWorkerPayout,
        params: [['taskId', 'int'], ['token', 'address'], ['amount', 'number']],
      }),
      submitTaskDeliverable: {
        send: this.contract.functions.submitTaskDeliverable,
        estimate: this.contract.estimate.submitTaskDeliverable,
        params: [['taskId', 'int'], ['deliverableHash', 'string']],
      },
      submitTaskWorkRating: {
        send: this.contract.functions.submitTaskWorkRating,
        estimate: this.contract.estimate.submitTaskWorkRating,
        params: [
          ['taskId', 'int'],
          ['role', 'int'],
          ['ratingSecret', 'string'],
        ],
      },
    };
  }
}

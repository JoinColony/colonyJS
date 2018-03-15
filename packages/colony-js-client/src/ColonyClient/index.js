/* @flow */

import BigNumber from 'bn.js';
// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';

import type { IAdapter, InterfaceFn } from '@colony/colony-js-adapter';
import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyContract } from '../interface/ColonyContract';
import ColonyNetworkClient from '../ColonyNetworkClient/index';

import GetTask from './callers/GetTask';

type Signatures = [string, string];
type Multisig = { sigR: Signatures, sigV: Signatures, sigS: Signatures };

export default class ColonyClient extends ContractClient<ColonyContract> {
  contract: ColonyContract;
  networkClient: ColonyNetworkClient;
  /*
    Description of whatever this does
  */
  getNonRewardPotsTotal: ColonyClient.Caller<
    {
      address: string, // Address is needed to succeed!
    },
    {
      total: number, // Total thing of whatever
    },
    ColonyClient,
  >;
  getPotBalance: ColonyClient.Caller<
    {
      potId: number, // Everybody loves themselves a good potId
      token: string, // Token token lalalala, how long can this be, nobody knows, let's find out, man this is long
    },
    { balance: number },
    ColonyClient,
  >;
  // TODO: Please type explicitly!
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
  addDomain: ColonyClient.Sender<
    { domainId: number },
    {
      skillId: number,
      parentSkillId: number,
    },
    ColonyClient,
  >;
  addGlobalSkill: ColonyClient.Sender<
    { parentSkillId: number },
    { skillId: number, parentSkillId: number },
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
    { signatures: Multisig, taskId: number, specificationHash: string },
    null,
    ColonyClient,
  >;
  setTaskDomain: ColonyClient.Sender<
    { taskId: number, domainId: number },
    null,
    ColonyClient,
  >;
  setTaskDueDate: ColonyClient.Sender<
    { signatures: Multisig, taskId: number, dueDate: number },
    null,
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
    { signatures: Multisig, taskId: number, token: string, amount: number },
    null,
    ColonyClient,
  >;
  setTaskManagerPayout: ColonyClient.Sender<
    { signatures: Multisig, taskId: number, token: string, amount: number },
    null,
    ColonyClient,
  >;
  setTaskWorkerPayout: ColonyClient.Sender<
    { signatures: Multisig, taskId: number, token: string, amount: number },
    null,
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
          ['role', 'address'],
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

    /**
     * Creates sender definitions based on `executeTaskChange`
     *
     * @param getData
     * Interface function (e.g. `setTaskBrief`) that we will use
     * to generate the task data
     *
     * @param params
     * Parameters for the interface function plus a multisig
     * parameter, which should be signed by all parties
     *
     * @returns SenderDef
     */
    const executeTaskChangeFactory = ({
      getData,
      params,
    }: {
      getData: InterfaceFn<*>,
      params: *,
    }) => ({
      send: this.contract.functions.executeTaskChange,
      estimate: this.contract.estimate.executeTaskChange,
      getArgs(parameters) {
        // Expecting multisig as the first parameter
        const [sigV, sigR, sigS, ...args] = this.constructor.getArgs(
          parameters,
        );
        const { data } = getData(...args);
        // sigV, sigR, sigS, tx value (currently unused), tx data
        return [sigV, sigR, sigS, 0, data];
      },
      params,
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
      executeTaskChange: {
        send: this.contract.functions.executeTaskChange,
        estimate: this.contract.estimate.executeTaskChange,
        params: [
          ['signatures', 'multisig'],
          ['value', 'number'],
          ['data', 'string'],
        ],
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
      setTaskBrief: executeTaskChangeFactory({
        getData: this.contract.interface.functions.setTaskBrief,
        params: [
          ['signatures', 'multisig'],
          ['taskId', 'number'],
          ['specificationHash', 'address'],
        ],
      }),
      setTaskDomain: {
        send: this.contract.functions.setTaskDomain,
        estimate: this.contract.estimate.setTaskDomain,
        params: [['taskId', 'number'], ['domainId', 'number']],
      },
      setTaskDueDate: executeTaskChangeFactory({
        getData: this.contract.interface.functions.setTaskDueDate,
        params: [
          ['signatures', 'multisig'],
          ['taskId', 'number'],
          ['dueDate', 'number'],
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
      setTaskEvaluatorPayout: executeTaskChangeFactory({
        getData: this.contract.interface.functions.setTaskEvaluatorPayout,
        params: [
          ['signatures', 'multisig'],
          ['taskId', 'number'],
          ['token', 'address'],
          ['amount', 'number'],
        ],
      }),
      setTaskManagerPayout: executeTaskChangeFactory({
        getData: this.contract.interface.functions.setTaskManagerPayout,
        params: [
          ['signatures', 'multisig'],
          ['taskId', 'number'],
          ['token', 'address'],
          ['amount', 'number'],
        ],
      }),
      setTaskWorkerPayout: executeTaskChangeFactory({
        getData: this.contract.interface.functions.setTaskWorkerPayout,
        params: [
          ['signatures', 'multisig'],
          ['taskId', 'number'],
          ['token', 'address'],
          ['amount', 'number'],
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

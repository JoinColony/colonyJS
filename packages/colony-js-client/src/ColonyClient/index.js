/* @flow */

// eslint-disable-next-line max-len
import type { Options as LoaderOptions } from '@colony/colony-js-contract-loader';

import type { IAdapter } from '@colony/colony-js-adapter';
import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyContract } from '../interface/ColonyContract';
import ColonyNetworkClient from '../ColonyNetworkClient/index';

import GetNonRewardPotsTotal from './callers/GetNonRewardPotsTotal';
import GetPotBalance from './callers/GetPotBalance';
import GetTask from './callers/GetTask';
import GetTaskCount from './callers/GetTaskCount';
import GetTaskPayout from './callers/GetTaskPayout';
import GetTaskRole from './callers/GetTaskRole';
import GetTaskWorkRatings from './callers/GetTaskWorkRatings';
import GetTaskWorkRatingSecret from './callers/GetTaskWorkRatingSecret';
import GetToken from './callers/GetToken';
import GetTransactionCount from './callers/GetTransactionCount';

import ApproveTaskChange from './senders/ApproveTaskChange';
import AssignWorkRating from './senders/AssignWorkRating';
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
import SetTaskBrief from './senders/SetTaskBrief';
import SetTaskDueDate from './senders/SetTaskDueDate';
import SetTaskPayout from './senders/SetTaskPayout';
import SubmitTaskDeliverable from './senders/SubmitTaskDeliverable';
import SubmitTaskWorkRating from './senders/SubmitTaskWorkRating';
import SubmitTransaction from './senders/SubmitTransaction';

export default class ColonyClient extends ContractClient<ColonyContract> {
  contract: ColonyContract;
  networkClient: ColonyNetworkClient;
  // Callers
  getNonRewardPotsTotal: GetNonRewardPotsTotal;
  getPotBalance: GetPotBalance;
  getTask: GetTask;
  getTaskCount: GetTaskCount;
  getTaskPayout: GetTaskPayout;
  getTaskRole: GetTaskRole;
  getTaskWorkRatings: GetTaskWorkRatings;
  getTaskWorkRatingSecret: GetTaskWorkRatingSecret;
  getToken: GetToken;
  getTransactionCount: GetTransactionCount;
  // Senders
  approveTaskChange: ApproveTaskChange;
  assignWorkRating: AssignWorkRating;
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
  setTaskBrief: SetTaskBrief;
  setTaskDueDate: SetTaskDueDate;
  setTaskPayout: SetTaskPayout;
  submitTaskDeliverable: SubmitTaskDeliverable;
  submitTaskWorkRating: SubmitTaskWorkRating;
  submitTransaction: SubmitTransaction;
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
    // Callers
    this.getNonRewardPotsTotal = new GetNonRewardPotsTotal(this);
    this.getPotBalance = new GetPotBalance(this);
    this.getTask = new GetTask(this);
    this.getTaskCount = new GetTaskCount(this);
    this.getTaskPayout = new GetTaskPayout(this);
    this.getTaskRole = new GetTaskRole(this);
    this.getTaskWorkRatings = new GetTaskWorkRatings(this);
    this.getTaskWorkRatingSecret = new GetTaskWorkRatingSecret(this);
    this.getToken = new GetToken(this);
    this.getTransactionCount = new GetTransactionCount(this);
    // Senders
    this.approveTaskChange = new ApproveTaskChange(this);
    this.assignWorkRating = new AssignWorkRating(this);
    this.cancelTask = new CancelTask(this);
    this.claimColonyFunds = new ClaimColonyFunds(this);
    this.claimPayout = new ClaimPayout(this);
    this.confirmTransaction = new ConfirmTransaction(this);
    this.createTask = new CreateTask(this);
    this.finalizeTask = new FinalizeTask(this);
    this.generateSecret = new GenerateSecret(this);
    this.mintTokens = new MintTokens(this);
    this.moveFundsBetweenPots = new MoveFundsBetweenPots(this);
    this.proposeTaskChange = new ProposeTaskChange(this);
    this.revealTaskWorkRating = new RevealTaskWorkRating(this);
    this.setTaskBrief = new SetTaskBrief(this);
    this.setTaskDueDate = new SetTaskDueDate(this);
    this.setTaskPayout = new SetTaskPayout(this);
    this.submitTaskDeliverable = new SubmitTaskDeliverable(this);
    this.submitTaskWorkRating = new SubmitTaskWorkRating(this);
    this.submitTransaction = new SubmitTransaction(this);
  }
}

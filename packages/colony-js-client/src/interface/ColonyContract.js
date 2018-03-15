/* @flow */

import type {
  IContract,
  CallFn,
  InterfaceFn,
  EstimateFn,
  SendFn,
} from '@colony/colony-js-adapter';

type sendFns = {
  // address _token
  setToken: [string],

  // address _network
  initialiseColony: [string],

  // uint256 _wad
  mintTokens: [number],

  // uint256 _wad
  mintTokensForColonyNetwork: [number],

  // uint256 _parentSkillId
  addDomain: [number],

  // bytes32 _specificationHash, uint256 _domainId
  makeTask: [string, number],

  // uint256 _transactionId, uint8 _role
  approveTaskChange: [number, number],

  // uint256 _id, uint8 _role, bytes32 _ratingSecret
  submitTaskWorkRating: [number, number, string],

  // uint256 _id, uint8 _role, uint8 _rating, bytes32 _salt
  revealTaskWorkRating: [number, number, number, string],

  // uint256 _id
  assignWorkRating: [number],

  // uint256 _id, uint8 _role, address _user
  setTaskRoleUser: [number, number, string],

  // uint256 _id, uint256 _skillId
  setTaskSkill: [number, number],

  // uint256 _id, uint256 _domainId
  setTaskDomain: [number, number],

  // uint256 _id, bytes32 _specificationHash
  setTaskBrief: [number, string],

  // uint256 _id, uint256 _dueDate
  setTaskDueDate: [number, number],

  // uint256 _id, bytes32 _deliverableHash
  submitTaskDeliverable: [number, string],

  // uint256 _id
  finalizeTask: [number],

  // uint256 _id
  cancelTask: [number],

  // uint256 _id, address _token, uint256 _amount
  setTaskManagerPayout: [number, string, number],

  // uint256 _id, address _token, uint256 _amount
  setTaskEvaluatorPayout: [number, string, number],

  // uint256 _id, address _token, uint256 _amount
  setTaskWorkerPayout: [number, string, number],

  // uint256 _id, uint256 _role, address _token
  claimPayout: [number, number, string],

  // uint256 _fromPot, uint256 _toPot, uint256 _amount, address _token
  moveFundsBetweenPots: [number, number, number, string],

  // address _token
  claimColonyFunds: [string],

  // bytes4, uint8, uint8
  setFunctionReviewers: [string, number, number],

  // uint256 _parentSkillId
  addGlobalSkill: [number],

  // uint8[] _sigV, bytes32[] _sigR, bytes32[] _sigS, uint256 _value, bytes _data
  executeTaskChange: [
    [string, string],
    [string, string],
    [string, string],
    number,
    string,
  ],
};

export interface ColonyContract extends IContract {
  interface: {
    functions: {
      // XXX until https://github.com/facebook/flow/issues/3237 is fixed, we can't type these more
      addDomain: InterfaceFn<*>,
      addGlobalSkill: InterfaceFn<*>,
      assignWorkRating: InterfaceFn<*>,
      cancelTask: InterfaceFn<*>,
      claimColonyFunds: InterfaceFn<*>,
      claimPayout: InterfaceFn<*>,
      executeTaskChange: InterfaceFn<*>,
      finalizeTask: InterfaceFn<*>,
      makeTask: InterfaceFn<*>,
      mintTokens: InterfaceFn<*>,
      mintTokensForColonyNetwork: InterfaceFn<*>,
      moveFundsBetweenPots: InterfaceFn<*>,
      revealTaskWorkRating: InterfaceFn<*>,
      setTaskBrief: InterfaceFn<*>,
      setTaskDomain: InterfaceFn<*>,
      setTaskDueDate: InterfaceFn<*>,
      setTaskEvaluatorPayout: InterfaceFn<*>,
      setTaskManagerPayout: InterfaceFn<*>,
      setTaskRoleUser: InterfaceFn<*>,
      setTaskSkill: InterfaceFn<*>,
      setTaskWorkerPayout: InterfaceFn<*>,
      submitTaskDeliverable: InterfaceFn<*>,
      submitTaskWorkRating: InterfaceFn<*>,
    },
  };
  estimate: {
    addDomain: EstimateFn<$PropertyType<sendFns, 'addDomain'>>,
    addGlobalSkill: EstimateFn<$PropertyType<sendFns, 'addGlobalSkill'>>,
    assignWorkRating: EstimateFn<$PropertyType<sendFns, 'assignWorkRating'>>,
    cancelTask: EstimateFn<$PropertyType<sendFns, 'cancelTask'>>,
    claimColonyFunds: EstimateFn<$PropertyType<sendFns, 'claimColonyFunds'>>,
    claimPayout: EstimateFn<$PropertyType<sendFns, 'claimPayout'>>,
    executeTaskChange: EstimateFn<$PropertyType<sendFns, 'executeTaskChange'>>,
    finalizeTask: EstimateFn<$PropertyType<sendFns, 'finalizeTask'>>,
    makeTask: EstimateFn<$PropertyType<sendFns, 'makeTask'>>,
    mintTokens: EstimateFn<$PropertyType<sendFns, 'mintTokens'>>,
    mintTokensForColonyNetwork: EstimateFn<
      $PropertyType<sendFns, 'mintTokensForColonyNetwork'>,
    >,
    moveFundsBetweenPots: EstimateFn<
      $PropertyType<sendFns, 'moveFundsBetweenPots'>,
    >,
    revealTaskWorkRating: EstimateFn<
      $PropertyType<sendFns, 'revealTaskWorkRating'>,
    >,
    setTaskBrief: EstimateFn<$PropertyType<sendFns, 'setTaskBrief'>>,
    setTaskDomain: EstimateFn<$PropertyType<sendFns, 'setTaskDomain'>>,
    setTaskDueDate: EstimateFn<$PropertyType<sendFns, 'setTaskDueDate'>>,
    setTaskEvaluatorPayout: EstimateFn<
      $PropertyType<sendFns, 'setTaskEvaluatorPayout'>,
    >,
    setTaskManagerPayout: EstimateFn<
      $PropertyType<sendFns, 'setTaskManagerPayout'>,
    >,
    setTaskRoleUser: EstimateFn<$PropertyType<sendFns, 'setTaskRoleUser'>>,
    setTaskSkill: EstimateFn<$PropertyType<sendFns, 'setTaskSkill'>>,
    setTaskWorkerPayout: EstimateFn<
      $PropertyType<sendFns, 'setTaskWorkerPayout'>,
    >,
    submitTaskDeliverable: EstimateFn<
      $PropertyType<sendFns, 'submitTaskDeliverable'>,
    >,
    submitTaskWorkRating: EstimateFn<
      $PropertyType<sendFns, 'submitTaskWorkRating'>,
    >,
  };
  functions: {
    // address => uint256
    getNonRewardPotsTotal: CallFn<[string], number>,

    // uint256 _potId, address _token => uint256
    getPotBalance: CallFn<[number, string], number>,

    // uint256 => bytes32, bytes32, bool, bool, uint256, uint256, uint256, uint256
    getTask: CallFn<
      [number],
      [string, string, boolean, boolean, number, number, number, number],
    >,

    // => uint256
    getTaskChangeNonce: CallFn<null, number>,

    // => uint256
    getTaskCount: CallFn<null, number>,

    // uint256 _id, uint256 _idx => uint256
    getTaskDomain: CallFn<[number, number], number>,

    // uint256 _id, uint256 _role, address _token => uint256
    getTaskPayout: CallFn<[number, number, string], number>,

    // uint256 _id, uint256 _idx => uint256
    getTaskSkill: CallFn<[number, number], number>,

    // uint256 _id, uint8 _idx => address, bool, uint8
    getTaskRole: CallFn<[number, number], [string, boolean, number]>,

    // uint256 _id => uint256, uint256
    getTaskWorkRatings: CallFn<[number], [number, number]>,

    // uint256 _id, uint8 _role => bytes32
    getTaskWorkRatingSecret: CallFn<[number, number], string>,

    // => address
    getToken: CallFn<null, string>,

    // => uint256
    getTransactionCount: CallFn<[string], number>,

    addDomain: SendFn<$PropertyType<sendFns, 'addDomain'>>,
    addGlobalSkill: SendFn<$PropertyType<sendFns, 'addGlobalSkill'>>,
    assignWorkRating: SendFn<$PropertyType<sendFns, 'assignWorkRating'>>,
    cancelTask: SendFn<$PropertyType<sendFns, 'cancelTask'>>,
    claimColonyFunds: SendFn<$PropertyType<sendFns, 'claimColonyFunds'>>,
    claimPayout: SendFn<$PropertyType<sendFns, 'claimPayout'>>,
    executeTaskChange: SendFn<$PropertyType<sendFns, 'executeTaskChange'>>,
    finalizeTask: SendFn<$PropertyType<sendFns, 'finalizeTask'>>,
    makeTask: SendFn<$PropertyType<sendFns, 'makeTask'>>,
    mintTokens: SendFn<$PropertyType<sendFns, 'mintTokens'>>,
    mintTokensForColonyNetwork: SendFn<
      $PropertyType<sendFns, 'mintTokensForColonyNetwork'>,
    >,
    moveFundsBetweenPots: SendFn<
      $PropertyType<sendFns, 'moveFundsBetweenPots'>,
    >,
    revealTaskWorkRating: SendFn<
      $PropertyType<sendFns, 'revealTaskWorkRating'>,
    >,
    setTaskBrief: SendFn<$PropertyType<sendFns, 'setTaskBrief'>>,
    setTaskDomain: SendFn<$PropertyType<sendFns, 'setTaskDomain'>>,
    setTaskDueDate: SendFn<$PropertyType<sendFns, 'setTaskDueDate'>>,
    setTaskEvaluatorPayout: SendFn<
      $PropertyType<sendFns, 'setTaskEvaluatorPayout'>,
    >,
    setTaskManagerPayout: SendFn<
      $PropertyType<sendFns, 'setTaskManagerPayout'>,
    >,
    setTaskRoleUser: SendFn<$PropertyType<sendFns, 'setTaskRoleUser'>>,
    setTaskSkill: SendFn<$PropertyType<sendFns, 'setTaskSkill'>>,
    setTaskWorkerPayout: SendFn<$PropertyType<sendFns, 'setTaskWorkerPayout'>>,
    submitTaskDeliverable: SendFn<
      $PropertyType<sendFns, 'submitTaskDeliverable'>,
    >,
    submitTaskWorkRating: SendFn<
      $PropertyType<sendFns, 'submitTaskWorkRating'>,
    >,
  };
}

/* @flow */

import type {
  IContract,
  ViewFunction,
  InterfaceFn,
  EstimateFn,
  TxFunction,
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

  // bytes _data, uint256 _value, uint8 _role
  proposeTaskChange: [string, number, number],
};

export interface ColonyContract extends IContract {
  interface: {
    functions: {
      // XXX until https://github.com/facebook/flow/issues/3237 is fixed, we can't type these more
      addDomain: InterfaceFn<*>,
      addGlobalSkill: InterfaceFn<*>,
      approveTaskChange: InterfaceFn<*>,
      assignWorkRating: InterfaceFn<*>,
      cancelTask: InterfaceFn<*>,
      claimColonyFunds: InterfaceFn<*>,
      claimPayout: InterfaceFn<*>,
      finalizeTask: InterfaceFn<*>,
      makeTask: InterfaceFn<*>,
      mintTokens: InterfaceFn<*>,
      mintTokensForColonyNetwork: InterfaceFn<*>,
      moveFundsBetweenPots: InterfaceFn<*>,
      proposeTaskChange: InterfaceFn<*>,
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
    approveTaskChange: EstimateFn<$PropertyType<sendFns, 'approveTaskChange'>>,
    assignWorkRating: EstimateFn<$PropertyType<sendFns, 'assignWorkRating'>>,
    cancelTask: EstimateFn<$PropertyType<sendFns, 'cancelTask'>>,
    claimColonyFunds: EstimateFn<$PropertyType<sendFns, 'claimColonyFunds'>>,
    claimPayout: EstimateFn<$PropertyType<sendFns, 'claimPayout'>>,
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
    addGlobalSkill: EstimateFn<$PropertyType<sendFns, 'addGlobalSkill'>>,
    proposeTaskChange: EstimateFn<$PropertyType<sendFns, 'proposeTaskChange'>>,
  };
  functions: {
    // address => uint256
    getNonRewardPotsTotal: ViewFunction<[string], [number]>,

    // uint256 _potId, address _token => uint256
    getPotBalance: ViewFunction<[number, string], [number]>,

    // uint256 => bytes32, bytes32, bool, bool, uint256, uint256, uint256, uint256
    getTask: ViewFunction<
      [number],
      [string, string, boolean, boolean, number, number, number, number],
    >,

    // => uint256
    getTaskCount: ViewFunction<null, [number]>,

    // uint256 taskId, address domainId => uint256
    getTaskDomain: ViewFunction<[number, number], [number]>,

    // uint256 _id, uint256 _role, address _token => uint256
    getTaskPayout: ViewFunction<[number, number, string], [number]>,

    // uint256 _id, uint8 _idx => address, bool, uint8
    getTaskRole: ViewFunction<[number, number], [string, boolean, number]>,

    // uint256 taskId, address skillId => uint256
    getTaskSkill: ViewFunction<[number, number], [number]>,

    // uint256 _id => uint256, uint256
    getTaskWorkRatings: ViewFunction<[number], [number, number]>,

    // uint256 _id, uint8 _role => bytes32
    getTaskWorkRatingSecret: ViewFunction<[number, number], [string]>,

    // => address
    getToken: ViewFunction<null, [string]>,

    // => uint256
    getTransactionCount: ViewFunction<[string], [number]>,

    addDomain: TxFunction<$PropertyType<sendFns, 'addDomain'>>,
    approveTaskChange: TxFunction<$PropertyType<sendFns, 'approveTaskChange'>>,
    assignWorkRating: TxFunction<$PropertyType<sendFns, 'assignWorkRating'>>,
    cancelTask: TxFunction<$PropertyType<sendFns, 'cancelTask'>>,
    claimColonyFunds: TxFunction<$PropertyType<sendFns, 'claimColonyFunds'>>,
    claimPayout: TxFunction<$PropertyType<sendFns, 'claimPayout'>>,
    finalizeTask: TxFunction<$PropertyType<sendFns, 'finalizeTask'>>,
    makeTask: TxFunction<$PropertyType<sendFns, 'makeTask'>>,
    mintTokens: TxFunction<$PropertyType<sendFns, 'mintTokens'>>,
    mintTokensForColonyNetwork: TxFunction<
      $PropertyType<sendFns, 'mintTokensForColonyNetwork'>,
    >,
    moveFundsBetweenPots: TxFunction<
      $PropertyType<sendFns, 'moveFundsBetweenPots'>,
    >,
    revealTaskWorkRating: TxFunction<
      $PropertyType<sendFns, 'revealTaskWorkRating'>,
    >,
    setTaskBrief: TxFunction<$PropertyType<sendFns, 'setTaskBrief'>>,
    setTaskDomain: TxFunction<$PropertyType<sendFns, 'setTaskDomain'>>,
    setTaskDueDate: TxFunction<$PropertyType<sendFns, 'setTaskDueDate'>>,
    setTaskEvaluatorPayout: TxFunction<
      $PropertyType<sendFns, 'setTaskEvaluatorPayout'>,
    >,
    setTaskManagerPayout: TxFunction<
      $PropertyType<sendFns, 'setTaskManagerPayout'>,
    >,
    setTaskRoleUser: TxFunction<$PropertyType<sendFns, 'setTaskRoleUser'>>,
    setTaskSkill: TxFunction<$PropertyType<sendFns, 'setTaskSkill'>>,
    setTaskWorkerPayout: TxFunction<
      $PropertyType<sendFns, 'setTaskWorkerPayout'>,
    >,
    submitTaskDeliverable: TxFunction<
      $PropertyType<sendFns, 'submitTaskDeliverable'>,
    >,
    submitTaskWorkRating: TxFunction<
      $PropertyType<sendFns, 'submitTaskWorkRating'>,
    >,
    addGlobalSkill: TxFunction<$PropertyType<sendFns, 'addGlobalSkill'>>,
    proposeTaskChange: TxFunction<$PropertyType<sendFns, 'proposeTaskChange'>>,
  };
}

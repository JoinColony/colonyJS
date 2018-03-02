/* @flow */

import type {
  IContract,
  CallFn,
  InterfaceFn,
  EstimateFn,
  SendFn,
} from '@colony/colony-js-adapter';

type sendFns = {
  // bytes32 _name, bytes32 _tokenName, bytes32 _tokenSymbol, uint256 _tokenDecimals
  createColony: [string, string, string, number],

  // bytes32 _name, uint256 _newVersion
  upgradeColony: [string, number],

  // uint265 _amount
  deposit: [number],

  // uint265 amount
  withdraw: [number],
};

export interface ColonyNetworkContract extends IContract {
  interface: {
    functions: {
      // XXX until https://github.com/facebook/flow/issues/3237 is fixed, we can't type these more
      createColony: InterfaceFn<*>,
      deposit: InterfaceFn<*>,
      upgradeColony: InterfaceFn<*>,
      withdraw: InterfaceFn<*>,
    },
  };
  estimate: {
    createColony: EstimateFn<$PropertyType<sendFns, 'createColony'>>,
    deposit: EstimateFn<$PropertyType<sendFns, 'deposit'>>,
    upgradeColony: EstimateFn<$PropertyType<sendFns, 'upgradeColony'>>,
    withdraw: EstimateFn<$PropertyType<sendFns, 'withdraw'>>,
  };
  functions: {
    getChildSkillId: CallFn<[number, number], [number]>,
    getColony: CallFn<[string], [string]>,
    getColonyAt: CallFn<[number], [string]>,
    getColonyCount: CallFn<null, [number]>,
    getColonyVersionResolver: CallFn<[number], [string]>,
    getCurrentColonyVersion: CallFn<null, [number]>,
    getParentSkillId: CallFn<[number, number], [number]>,
    getReputationUpdateLogEntry: CallFn<
      [number],
      [string, number, number, string, number, number],
    >,
    getReputationUpdateLogLength: CallFn<null, [number]>,
    getSkill: CallFn<[number], [number, number]>,
    getSkillCount: CallFn<null, [number]>,
    createColony: SendFn<$PropertyType<sendFns, 'createColony'>>,
    deposit: SendFn<$PropertyType<sendFns, 'deposit'>>,
    upgradeColony: SendFn<$PropertyType<sendFns, 'upgradeColony'>>,
    withdraw: SendFn<$PropertyType<sendFns, 'withdraw'>>,
  };
}

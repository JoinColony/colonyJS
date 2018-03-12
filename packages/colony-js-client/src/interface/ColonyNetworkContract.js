/* @flow */

import type {
  IContract,
  ViewFunction,
  InterfaceFn,
  EstimateFn,
  TxFunction,
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
    getChildSkillId: ViewFunction<[number, number], [number]>,
    getColony: ViewFunction<[string], [string]>,
    getColonyAt: ViewFunction<[number], [string]>,
    getColonyCount: ViewFunction<null, [number]>,
    getColonyVersionResolver: ViewFunction<[number], [string]>,
    getCurrentColonyVersion: ViewFunction<null, [number]>,
    getParentSkillId: ViewFunction<[number, number], [number]>,
    getReputationUpdateLogEntry: ViewFunction<
      [number],
      [string, number, number, string, number, number],
    >,
    getReputationUpdateLogLength: ViewFunction<null, [number]>,
    getSkill: ViewFunction<[number], [number, number]>,
    getSkillCount: ViewFunction<null, [number]>,
    createColony: TxFunction<$PropertyType<sendFns, 'createColony'>>,
    deposit: TxFunction<$PropertyType<sendFns, 'deposit'>>,
    upgradeColony: TxFunction<$PropertyType<sendFns, 'upgradeColony'>>,
    withdraw: TxFunction<$PropertyType<sendFns, 'withdraw'>>,
  };
}

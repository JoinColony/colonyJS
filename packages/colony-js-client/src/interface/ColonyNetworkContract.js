/* @flow */

import type { IContract, CallFn, SendFn } from '@colony/colony-js-adapter';

type sendFns = {
  // bytes32 _name, address _tokenAddress
  createColony: [string, string],

  // bytes32 _name, uint256 _newVersion
  upgradeColony: [string, number],

  // uint265 _amount
  deposit: [number],

  // uint265 amount
  withdraw: [number],
};

export interface ColonyNetworkContract extends IContract {
  getChildSkillId: CallFn<[number, number], number>;
  getColony: CallFn<[string], string>;
  getColonyAt: CallFn<[number], string>;
  getColonyCount: CallFn<null, number>;
  getColonyVersionResolver: CallFn<[number], string>;
  getCurrentColonyVersion: CallFn<null, number>;
  getParentSkillId: CallFn<[number, number], number>;
  getReputationUpdateLogEntry: CallFn<
    [number],
    [string, number, number, string, number, number],
  >;
  getReputationUpdateLogLength: CallFn<null, number>;
  getSkill: CallFn<[number], [number, number]>;
  getSkillCount: CallFn<null, number>;
  createColony: SendFn<$PropertyType<sendFns, 'createColony'>>;
  deposit: SendFn<$PropertyType<sendFns, 'deposit'>>;
  upgradeColony: SendFn<$PropertyType<sendFns, 'upgradeColony'>>;
  withdraw: SendFn<$PropertyType<sendFns, 'withdraw'>>;
}

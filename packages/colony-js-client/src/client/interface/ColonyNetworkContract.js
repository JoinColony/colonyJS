/* @flow */

import type BigNumber from 'bn.js';
import type { IContract, Transaction } from '@colony/colony-js-adapter';

type addColonyVersion<T> = (id: number, version: string) => Promise<T>;
type addSkill<T> = (parentSkillId: number) => Promise<T>;
type appendReputationUpdateLog<T> = (
  user: string,
  reputation: number,
  skillId: number,
) => Promise<T>;
type createColony<T> = (name: string) => Promise<T>;
type upgradeColony<T> = (name: string, newVersion: number) => Promise<T>;

export interface ColonyNetworkContract extends IContract {
  estimates: {
    addColonyVersion: addColonyVersion<BigNumber>,
    addSkill: addSkill<BigNumber>,
    appendReputationUpdateLog: appendReputationUpdateLog<BigNumber>,
    createColony: createColony<BigNumber>,
    upgradeColony: upgradeColony<BigNumber>,
  };
  functions: {
    getChildSkillId(
      skillId: number,
      childSkillIndex: number,
    ): Promise<[number]>,
    getColony(key: string): Promise<[string]>,
    getColonyAt(idx: number): Promise<[string]>,
    getColonyCount(): Promise<[number]>,
    getColonyVersionResolver(version: number): Promise<[string]>,
    getCurrentColonyVersion(): Promise<[number]>,
    getParentSkillId(
      skillId: number,
      parentSkillIndex: number,
    ): Promise<[number]>,
    getReputationUpdateLogEntry(
      id: number,
    ): Promise<[string, number, string, number, number]>,
    getReputationUpdateLogLength(): Promise<[number]>,
    getSkill(skillId: number): Promise<[number, number]>,
    getSkillCount(): Promise<[number]>,
    addColonyVersion: addColonyVersion<Transaction>,
    addSkill: addSkill<Transaction>,
    appendReputationUpdateLog: appendReputationUpdateLog<Transaction>,
    createColony: createColony<Transaction>,
    upgradeColony: upgradeColony<Transaction>,
  };
}

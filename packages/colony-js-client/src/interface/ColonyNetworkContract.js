/* @flow */

import type { IContract, Transaction } from '@colony/colony-js-adapter';

export interface ColonyNetworkContract extends IContract {
  // Call
  getChildSkillId(skillId: number, childSkillIndex: number): Promise<[number]>;
  getColony(key: string): Promise<[string]>;
  getColonyAt(idx: number): Promise<[string]>;
  getColonyCount(): Promise<[number]>;
  getColonyVersionResolver(version: number): Promise<[string]>;
  getCurrentColonyVersion(): Promise<[number]>;
  getParentSkillId(
    skillId: number,
    parentSkillIndex: number,
  ): Promise<[number]>;
  getReputationUpdateLogEntry(
    id: number,
  ): Promise<[string, number, string, number, number]>;
  getReputationUpdateLogLength(): Promise<[number]>;
  getSkill(skillId: number): Promise<[number, number]>;
  getSkillCount(): Promise<[number]>;
  // Send
  addColonyVersion(id: number, version: string): Promise<Transaction>;
  addSkill(parentSkillId: number): Promise<Transaction>;
  appendReputationUpdateLog(
    user: string,
    reputation: number,
    skillId: number,
  ): Promise<Transaction>;
  createColony(name: string): Promise<Transaction>;
  upgradeColony(name: string, newVersion: number): Promise<Transaction>;
}

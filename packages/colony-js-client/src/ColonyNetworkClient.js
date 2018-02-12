/* @flow */

import { utf8ToHex } from 'web3-utils';
import type { IAdapter } from '@colony/colony-js-adapter';
import type { CallOptions, SendOptions } from './ContractClient';

import ContractClient from './ContractClient';
import ColonyClient from './ColonyClient';
import type { ColonyNetworkContract } from './interface/ColonyNetworkContract';

export default class ColonyNetworkClient extends ContractClient<
  ColonyNetworkContract,
> {
  static get ColonyClient(): ColonyClient.prototype {
    return ColonyClient;
  }
  static async createSelf(adapter: IAdapter<*>) {
    return this.create(
      {
        name: 'ColonyNetwork',
      },
      adapter,
    );
  }
  async getColonyClient(idx: number): Promise<ColonyClient> {
    const address = await this.getColonyAddressById(idx);
    return this.constructor.ColonyClient.create(
      { address },
      this.adapter,
      this,
    );
  }
  async getChildSkillId(
    skillId: number,
    childSkillIndex: number,
    callOptions: CallOptions = {},
  ) {
    const [number] = await this.call(
      this.contract.getChildSkillId,
      callOptions,
    );
    return number;
  }
  async getColonyAddressByKey(key: string, callOptions: CallOptions = {}) {
    const [address] = await this.call(
      this.contract.getColony,
      callOptions,
      key,
    );
    if (!address) throw new Error(`Colony with key ${key} could not be found`);
    return address;
  }
  async getColonyAddressById(idx: number, callOptions: CallOptions = {}) {
    const [address] = await this.call(
      this.contract.getColonyAt,
      callOptions,
      idx,
    );
    if (!address) throw new Error(`Colony with id ${idx} could not be found`);
    return address;
  }
  async getColonyCount(callOptions: CallOptions = {}) {
    const [count] = await this.call(this.contract.getColonyCount, callOptions);
    return count;
  }
  async getColonyVersionResolver(
    version: number,
    callOptions: CallOptions = {},
  ) {
    const [address] = await this.call(
      this.contract.getColonyVersionResolver,
      callOptions,
      version,
    );
    return address;
  }
  async getCurrentColonyVersion(callOptions: CallOptions = {}) {
    const [version] = await this.call(
      this.contract.getCurrentColonyVersion,
      callOptions,
    );
    return version;
  }
  async getParentSkillId(
    skillId: number,
    parentSkillIndex: number,
    callOptions: CallOptions = {},
  ) {
    const [parentSkillId] = await this.call(
      this.contract.getParentSkillId,
      callOptions,
      skillId,
      parentSkillIndex,
    );
    return parentSkillId;
  }
  async getReputationUpdateLogEntry(id: number, callOptions: CallOptions = {}) {
    const [
      user,
      amount,
      skillId,
      colony,
      nUpdates,
      nPreviousUpdates,
    ] = await this.call(
      this.contract.getReputationUpdateLogEntry,
      callOptions,
      id,
    );
    return {
      amount,
      colony,
      nPreviousUpdates,
      nUpdates,
      skillId,
      user,
    };
  }
  async getReputationUpdateLogLength(callOptions: CallOptions = {}) {
    const [length] = await this.call(
      this.contract.getReputationUpdateLogLength,
      callOptions,
    );
    return length;
  }
  async getSkill(skillId: number, callOptions: CallOptions = {}) {
    const [parents, children] = await this.call(
      this.contract.getSkill,
      callOptions,
      skillId,
    );
    return { parents, children };
  }
  async getSkillCount(callOptions: CallOptions = {}) {
    const [count] = await this.call(this.contract.getSkillCount, callOptions);
    return count;
  }
  async createColony(name: string, sendOptions: SendOptions = {}) {
    return this.send(
      this.contract.createColony,
      {
        events: ['ColonyAdded'],
        ...sendOptions,
      },
      utf8ToHex(name),
    );
  }
}

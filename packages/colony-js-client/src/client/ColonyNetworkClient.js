/* @flow */

import { utf8ToHex } from 'web3-utils';
import type { IAdapter } from '@colony/colony-js-adapter';

import type { ColonyNetworkContract } from './interface/ColonyNetworkContract';
import ContractClient from './ContractClient';
import ColonyClient from './ColonyClient';
import CreateColony from './senders/CreateColony';

type CallOptions = { timeoutMs: number };

export default class ColonyNetworkClient extends ContractClient<
  ColonyNetworkContract,
> {
  createColony: CreateColony;
  static async createSelf(adapter: IAdapter<ColonyNetworkContract>) {
    return this.create(adapter, 'IColonyNetwork', { router: 'EtherRouter' });
  }
  static get ColonyClient(): * {
    return ColonyClient;
  }
  constructor(
    adapter: IAdapter<ColonyNetworkContract>,
    contract: ColonyNetworkContract,
  ) {
    super(adapter, contract);
    this.createColony = new CreateColony(this);
  }
  async getColonyClientByAddress(
    address: string,
    callOptions?: CallOptions,
  ): Promise<ColonyClient> {
    return this.constructor.ColonyClient.createSelf(
      this.adapter,
      this,
      {
        address,
      },
      callOptions,
    );
  }
  async getColonyClient(
    {
      key,
      id,
    }: {
      key?: string,
      id?: number,
    },
    callOptions?: CallOptions,
  ): Promise<ColonyClient> {
    const address = await this.getColonyAddress({ key, id }, callOptions);
    return this.getColonyClientByAddress(address, callOptions);
  }
  async getColonyAddress(
    {
      key,
      id,
    }: {
      key?: string,
      id?: number,
    },
    callOptions?: CallOptions,
  ): Promise<string> {
    let address;
    if (key) {
      [address] = await this.call(
        this.contract.functions.getColony,
        callOptions,
        utf8ToHex(key),
      );
    } else if (id) {
      [address] = await this.call(
        this.contract.functions.getColonyAt,
        callOptions,
        id,
      );
    }
    if (!address)
      throw new Error(
        `Colony with ${
          key ? `key ${key}` : `id ${id || 'unknown'}`
        } could not be found`,
      );
    return address;
  }
  async getChildSkillId(
    {
      skillId,
      childSkillIndex,
    }: {
      skillId: number,
      childSkillIndex: number,
    },
    callOptions?: CallOptions,
  ): Promise<number> {
    const [childSkillId] = await this.call(
      this.contract.functions.getChildSkillId,
      callOptions,
      skillId,
      childSkillIndex,
    );
    return childSkillId;
  }
  async getColonyCount(callOptions?: CallOptions): Promise<number> {
    const [count] = await this.call(
      this.contract.functions.getColonyCount,
      callOptions,
    );
    return count;
  }
  async getColonyVersionResolver(
    {
      version,
    }: {
      version: number,
    },
    callOptions?: CallOptions,
  ): Promise<string> {
    const [address] = await this.call(
      this.contract.functions.getColonyVersionResolver,
      callOptions,
      version,
    );
    return address;
  }
  async getCurrentColonyVersion(callOptions?: CallOptions): Promise<number> {
    const [version] = await this.call(
      this.contract.functions.getCurrentColonyVersion,
      callOptions,
    );
    return version;
  }
  async getParentSkillId(
    {
      skillId,
      parentSkillIndex,
    }: {
      skillId: number,
      parentSkillIndex: number,
    },
    callOptions?: CallOptions,
  ): Promise<number> {
    const [parentSkillId] = await this.call(
      this.contract.functions.getParentSkillId,
      callOptions,
      skillId,
      parentSkillIndex,
    );
    return parentSkillId;
  }
  async getReputationUpdateLogEntry(
    {
      id,
    }: {
      id: number,
    },
    callOptions?: CallOptions,
  ): Promise<{
    amount: number,
    colony: number,
    nPreviousUpdates: number,
    nUpdates: number,
    skillId: string,
    user: string,
  }> {
    const [
      user,
      amount,
      skillId,
      colony,
      nUpdates,
      nPreviousUpdates,
    ] = await this.call(
      this.contract.functions.getReputationUpdateLogEntry,
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
  async getReputationUpdateLogLength(
    callOptions?: CallOptions,
  ): Promise<number> {
    const [length] = await this.call(
      this.contract.functions.getReputationUpdateLogLength,
      callOptions,
    );
    return length;
  }
  async getSkill(
    {
      skillId,
    }: {
      skillId: number,
    },
    callOptions?: CallOptions,
  ): Promise<{ parents: number, children: number }> {
    const [parents, children] = await this.call(
      this.contract.functions.getSkill,
      callOptions,
      skillId,
    );
    return { parents, children };
  }
  async getSkillCount(callOptions?: CallOptions): Promise<number> {
    const [count] = await this.call(
      this.contract.functions.getSkillCount,
      callOptions,
    );
    return count;
  }
}

/* @flow */

import type { IAdapter } from '@colony/colony-js-adapter';
import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyNetworkContract } from '../interface/ColonyNetworkContract';
import ColonyClient from '../ColonyClient/index';

import GetChildSkillId from './callers/GetChildSkillId';
import GetColonyById from './callers/GetColonyById';
import GetColonyByKey from './callers/GetColonyByKey';
import GetColonyCount from './callers/GetColonyCount';
import GetColonyVersionResolver from './callers/GetColonyVersionResolver';
import GetCurrentColonyVersion from './callers/GetCurrentColonyVersion';
import GetParentSkillId from './callers/GetParentSkillId';
import GetReputationUpdateLogEntry from './callers/GetReputationUpdateLogEntry';
// eslint-disable-next-line max-len
import GetReputationUpdateLogLength from './callers/GetReputationUpdateLogLength';
import GetSkill from './callers/GetSkill';
import GetSkillCount from './callers/GetSkillCount';

import CreateColony from './senders/CreateColony';
import CreateSkill from './senders/CreateSkill';
import UpgradeColony from './senders/UpgradeColony';

type CallOptions = { timeoutMs: number };

export default class ColonyNetworkClient extends ContractClient<
  ColonyNetworkContract,
> {
  contract: ColonyNetworkContract;
  // Callers
  getChildSkillId: GetChildSkillId;
  getColonyById: GetColonyById;
  getColonyByKey: GetColonyByKey;
  getColonyCount: GetColonyCount;
  getColonyVersionResolver: GetColonyVersionResolver;
  getCurrentColonyVersion: GetCurrentColonyVersion;
  getParentSkillId: GetParentSkillId;
  getReputationUpdateLogEntry: GetReputationUpdateLogEntry;
  getReputationUpdateLogLength: GetReputationUpdateLogLength;
  getSkill: GetSkill;
  getSkillCount: GetSkillCount;
  // Senders
  createColony: CreateColony;
  createSkill: CreateSkill;
  upgradeColony: UpgradeColony;
  static async createSelf(
    adapter: IAdapter<ColonyNetworkContract>,
  ): Promise<ColonyNetworkClient> {
    return this.create(adapter, 'IColonyNetwork', { router: 'EtherRouter' });
  }
  static get ColonyClient(): * {
    return ColonyClient;
  }
  constructor({
    adapter,
    contract,
  }: {
    adapter: IAdapter<*>,
    contract: ColonyNetworkContract,
  }) {
    super({ adapter, contract });
    // Callers
    this.getChildSkillId = new GetChildSkillId(this);
    this.getColonyById = new GetColonyById(this);
    this.getColonyByKey = new GetColonyByKey(this);
    this.getColonyCount = new GetColonyCount(this);
    this.getColonyVersionResolver = new GetColonyVersionResolver(this);
    this.getCurrentColonyVersion = new GetCurrentColonyVersion(this);
    this.getParentSkillId = new GetParentSkillId(this);
    this.getReputationUpdateLogEntry = new GetReputationUpdateLogEntry(this);
    this.getReputationUpdateLogLength = new GetReputationUpdateLogLength(this);
    this.getSkill = new GetSkill(this);
    this.getSkillCount = new GetSkillCount(this);
    // Senders
    this.createColony = new CreateColony(this);
    this.createSkill = new CreateSkill(this);
    this.upgradeColony = new UpgradeColony(this);
  }
  async getColonyClientByAddress(address: string): Promise<*> {
    return this.constructor.ColonyClient.createSelf(this.adapter, this, {
      address,
    });
  }
  async getColonyClient(
    {
      key,
      id,
    }: {
      key?: string,
      id?: number,
    },
    callOptions: CallOptions,
  ): Promise<*> {
    const address = await this.getColonyAddress({ key, id }, callOptions);
    return this.getColonyClientByAddress(address);
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
      ({ address } = await this.getColonyByKey.call({ key }, callOptions));
    } else if (id) {
      ({ address } = await this.getColonyById.call({ id }, callOptions));
    }
    if (!address)
      throw new Error(
        `Colony with ${
          key ? `key ${key}` : `id ${id || 'unknown'}`
        } could not be found`,
      );
    return address;
  }
}

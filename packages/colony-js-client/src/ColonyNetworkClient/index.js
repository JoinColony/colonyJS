/* @flow */

import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';
import type { IAdapter } from '@colony/colony-js-adapter';
import type { Query } from '@colony/colony-js-contract-loader';

import ContractClient from '@colony/colony-js-contract-client';

import type { ColonyNetworkContract } from '../interface/ColonyNetworkContract';
import ColonyClient from '../ColonyClient/index';

type CallOptions = { timeoutMs: number };

export default class ColonyNetworkClient extends ContractClient<
  ColonyNetworkContract,
> {
  contract: ColonyNetworkContract;
  getColonyById: ColonyNetworkClient.Caller<
    { id: number },
    { address: string },
    ColonyNetworkClient,
  >;
  getColonyByKey: ColonyNetworkClient.Caller<
    { key: string },
    { address: string },
    ColonyNetworkClient,
  >;
  getColonyCount: ColonyNetworkClient.Caller<
    null,
    { count: number },
    ColonyNetworkClient,
  >;
  getColonyVersionResolver: ColonyNetworkClient.Caller<
    { version: number },
    { address: string },
    ColonyNetworkClient,
  >;
  getCurrentColonyVersion: ColonyNetworkClient.Caller<
    null,
    { version: number },
    ColonyNetworkClient,
  >;
  getParentSkillId: ColonyNetworkClient.Caller<
    { skillId: number, parentSkillIndex: number },
    { parentSkillId: number },
    ColonyNetworkClient,
  >;
  getReputationUpdateLogEntry: ColonyNetworkClient.Caller<
    { id: number },
    {
      amount: number,
      colony: string,
      nPreviousUpdates: number,
      nUpdates: number,
      skillId: number,
      user: string,
    },
    ColonyNetworkClient,
  >;
  getReputationUpdateLogLength: ColonyNetworkClient.Caller<
    null,
    { count: number },
    ColonyNetworkClient,
  >;
  getSkill: ColonyNetworkClient.Caller<
    { id: number },
    { nParents: number, nChildren: number },
    ColonyNetworkClient,
  >;
  getSkillCount: ColonyNetworkClient.Caller<
    null,
    { count: number },
    ColonyNetworkClient,
  >;
  createColony: ColonyNetworkClient.Sender<
    {
      name: string,
      tokenAddress: string,
    },
    { colonyId: number },
    ColonyNetworkClient,
  >;
  deposit: ColonyNetworkClient.Sender<
    { amount: number },
    null,
    ColonyNetworkClient,
  >;
  upgradeColony: ColonyNetworkClient.Sender<
    {
      key: string,
      newVersion: number,
    },
    null,
    ColonyNetworkClient,
  >;
  withdraw: ColonyNetworkClient.Sender<
    { amount: number },
    null,
    ColonyNetworkClient,
  >;
  static async createSelf(
    adapter: IAdapter<ColonyNetworkContract>,
    query: Query = {},
  ): Promise<ColonyNetworkClient> {
    return this.create(
      adapter,
      {
        contractName: 'IColonyNetwork',
        routerName: 'EtherRouter',
        ...query,
      },
      {},
    );
  }
  static get ColonyClient(): * {
    return ColonyClient;
  }
  async createToken({
    name,
    symbol,
    decimals = 18,
  }: {
    name: string,
    symbol: string,
    decimals: number,
  }) {
    const transaction = await this.adapter.getContractDeployTransaction(
      {
        contractName: 'Token',
      },
      [utf8ToHex(name), utf8ToHex(symbol), decimals],
    );
    const { hash } = await this.adapter.wallet.sendTransaction(transaction);
    const { contractAddress } = await this.adapter.getTransactionReceipt(hash);
    return contractAddress;
  }
  async getColonyClientByAddress(address: string) {
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
  ) {
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
  ) {
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
  // eslint-disable-next-line no-unused-vars
  initializeContractMethods(options?: Object) {
    // Callers
    this._makeCaller('getColonyById', {
      functionName: 'getColonyAt',
      input: [['id', 'number']],
      output: [['address', 'address']],
    });
    this._makeCaller('getColonyByKey', {
      functionName: 'getColony',
      input: [['key', 'string']],
      output: [['address', 'address']],
    });
    this._makeCaller('getColonyCount', {
      output: [['address', 'address']],
    });
    this._makeCaller('getColonyVersionResolver', {
      input: [['version', 'number']],
      output: [['address', 'address']],
    });
    this._makeCaller('getCurrentColonyVersion', {
      output: [['version', 'number']],
    });
    this._makeCaller('getParentSkillId', {
      input: [['skillId', 'number'], ['parentSkillIndex', 'number']],
      output: [['parentSkillId', 'number']],
    });
    this._makeCaller('getReputationUpdateLogEntry', {
      input: [['id', 'number']],
      output: [
        ['user', 'string'],
        ['amount', 'number'],
        ['skillId', 'number'],
        ['colony', 'string'],
        ['nUpdates', 'number'],
        ['nPreviousUpdates', 'number'],
      ],
    });
    this._makeCaller('getReputationUpdateLogLength', {
      output: [['count', 'number']],
    });
    this._makeCaller('getSkill', {
      input: [['id', 'number']],
      output: [['nParents', 'number'], ['nChildren', 'number']],
    });
    this._makeCaller('getSkillCount', {
      output: [['count', 'number']],
    });

    // Senders
    this._makeSender('createColony', {
      input: [['name', 'string'], ['tokenAddress', 'address']],
      eventHandlers: {
        success: {
          ColonyAdded: {
            contract: this.contract,
            handler({ id }: { id: BigNumber }) {
              return {
                colonyId: id.toNumber(),
              };
            },
          },
        },
      },
    });
    this._makeSender('deposit', {
      input: [['amount', 'number']],
    });
    this._makeSender('upgradeColony', {
      input: [['key', 'string'], ['newVersion', 'number']],
    });
    this._makeSender('withdraw', {
      input: [['amount', 'number']],
    });
  }
}

/* @flow */

import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';

import ColonyClient from '../ColonyClient/index';

export default class ColonyNetworkClient extends ContractClient {
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
  getStakedBalance: ColonyNetworkClient.Caller<
    { user: string },
    { balance: number },
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
  startTokenAuction: ColonyNetworkClient.Sender<
    { tokenAddress: string },
    {
      auction: string,
      token: string,
      quantity: number,
    },
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

  static get defaultQuery() {
    return {
      contractName: 'IColonyNetwork',
      routerName: 'EtherRouter',
    };
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
  async getColonyClientByAddress(contractAddress: string) {
    return this.constructor.ColonyClient.createSelf(this.adapter, this, {
      contractAddress,
    });
  }
  async getColonyClient({ key, id }: { key?: string, id?: number }) {
    const address = await this.getColonyAddress({ key, id });
    return this.getColonyClientByAddress(address);
  }
  async getColonyAddress({ key, id }: { key?: string, id?: number }) {
    const notFoundError = () => {
      throw new Error(
        `Colony with ${
          key ? `key ${key}` : `id ${id || 'unknown'}`
        } could not be found`,
      );
    };
    let address = '';
    try {
      if (key) {
        ({ address } = await this.getColonyByKey.call({ key }));
      } else if (id) {
        ({ address } = await this.getColonyById.call({ id }));
      }
    } catch (error) {
      if (error.toString().includes('Undefined address')) notFoundError();
    }
    if (!address) notFoundError();
    return address;
  }
  initializeContractMethods() {
    // Callers
    this.addCaller('getColonyById', {
      functionName: 'getColonyAt',
      input: [['id', 'number']],
      output: [['address', 'address']],
    });
    this.addCaller('getColonyByKey', {
      functionName: 'getColony',
      input: [['key', 'string']],
      output: [['address', 'address']],
    });
    this.addCaller('getColonyCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getColonyVersionResolver', {
      input: [['version', 'number']],
      output: [['address', 'address']],
    });
    this.addCaller('getCurrentColonyVersion', {
      output: [['version', 'number']],
    });
    this.addCaller('getStakedBalance', {
      input: [['user', 'address']],
      output: [['balance', 'number']],
    });
    this.addCaller('getParentSkillId', {
      input: [['skillId', 'number'], ['parentSkillIndex', 'number']],
      output: [['parentSkillId', 'number']],
    });
    this.addCaller('getReputationUpdateLogEntry', {
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
    this.addCaller('getReputationUpdateLogLength', {
      output: [['count', 'number']],
    });
    this.addCaller('getSkill', {
      input: [['id', 'number']],
      output: [['nParents', 'number'], ['nChildren', 'number']],
    });
    this.addCaller('getSkillCount', {
      output: [['count', 'number']],
    });

    // Senders
    this.addSender('createColony', {
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
    this.addSender('deposit', {
      input: [['amount', 'number']],
    });
    this.addSender('startTokenAuction', {
      input: [['tokenAddress', 'address']],
      eventHandlers: {
        success: {
          AuctionCreated: {
            contract: this.contract,
            handler({
              auction,
              token,
              quantity,
            }: {
              auction: string,
              token: string,
              quantity: BigNumber,
            }) {
              return {
                auction,
                token,
                quantity: quantity.toNumber(),
              };
            },
          },
        },
      },
    });
    this.addSender('upgradeColony', {
      input: [['key', 'string'], ['newVersion', 'number']],
    });
    this.addSender('withdraw', {
      input: [['amount', 'number']],
    });
  }
}

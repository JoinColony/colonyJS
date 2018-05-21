/* @flow */

import assert from 'browser-assert';
import { utf8ToHex } from 'web3-utils';
import type BigNumber from 'bn.js';

import ContractClient from '../../../colonyJS-contract-client';

import ColonyClient from '../ColonyClient/index';

const MISSING_ID_OR_KEY = 'Either `key` or `id` must be provided';

export default class ColonyNetworkClient extends ContractClient {
  /*
  Returns the address of a colony when given the colonyId
  */
  getColonyById: ColonyNetworkClient.Caller<
    {
      id: number, // Integer colonyId
    },
    {
      address: string, // Address of the colony contract
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the address of a colony when given the colony's name (a.k.a its unique "key")
  */
  getColonyByKey: ColonyNetworkClient.Caller<
    {
      key: string, // The colony's unique key
    },
    {
      address: string, // Address of the colony contract
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the number of colonies created on the Colony Network, i.e. the colonyId of the most recently created colony.
  */
  getColonyCount: ColonyNetworkClient.Caller<
    null,
    {
      count: number, // colonyId of the most recently created colony
    },
    ColonyNetworkClient,
  >;
  /*
  Given a version of the colony contract, returns the address of the corresponding `Resolver` contract
  */
  getColonyVersionResolver: ColonyNetworkClient.Caller<
    {
      version: number, // The Colony contract version
    },
    {
      address: string, // Address of the `Resolver` contract
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the latest Colony contract version. This is the version used to create all new colonies.
  */
  getCurrentColonyVersion: ColonyNetworkClient.Caller<
    null,
    {
      version: number, // The current / latest Colony contract version
    },
    ColonyNetworkClient,
  >;
  /*
  Given the id of a particular skill, returns the skill's parent skill id
  */
  getParentSkillId: ColonyNetworkClient.Caller<
    {
      skillId: number, // Id of the skill
      parentSkillIndex: number, // Index of the `skill.parents` array to get
    },
    {
      parentSkillId: number, // Id of the parent skill
    },
    ColonyNetworkClient,
  >;
  /*
  Gets the `ReputationLogEntry` at a specified index for either ther currently active or inactive reputation update log
  */
  getReputationUpdateLogEntry: ColonyNetworkClient.Caller<
    {
      id: number, // The reputation log members array index of the entry to get
    },
    {
      amount: number, // amount
      colony: string, // Address of the colony
      nPreviousUpdates: number, // number of previous updates
      nUpdates: number, // number of updates
      skillId: number, // skill Id
      user: string, // user address
    },
    ColonyNetworkClient,
  >;
  /*
  Gets the length of the reputation update log for either the current active or inactive log
  */
  getReputationUpdateLogLength: ColonyNetworkClient.Caller<
    null,
    {
      count: number, // Length of Reputation update log array
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the number of parent and child skills associated with the provided skill
  */
  getSkill: ColonyNetworkClient.Caller<
    {
      id: number, // skillId to be checked
    },
    {
      nParents: number, // Number of parent skills
      nChildren: number, // Number of child skills
    },
    ColonyNetworkClient,
  >;
  /*
  Get the total number of skills in the network (both global and local skills)
  */
  getSkillCount: ColonyNetworkClient.Caller<
    null,
    {
      count: number, // Skill count
    },
    ColonyNetworkClient,
  >;
  /*
    Get the amount of staked CLNY tokens for a given user address
  */
  getStakedBalance: ColonyNetworkClient.Caller<
    {
      user: string, // Address of the user
    },
    {
      balance: number, // Amount of staked CLNY
    },
    ColonyNetworkClient,
  >;
  /*
  Creates a new colony on the network. TODO: check whether it returns a colonyId
  */
  createColony: ColonyNetworkClient.Sender<
    {
      name: string, // Unique name for the colony. Will return an error if there already exists a colony with the specified name
      tokenAddress: string, // Token to import. Note: the ownership of the token contract must be transferred to the newly created colony.
    },
    {
      colonyId: number, // Id of the newly created colony
    },
    ColonyNetworkClient,
  >;
  /*
    Allow a reputation miner to stake an amount of CLNY tokens, which is required before they can submit a new reputation root hash via `ReputationMiningCycle.submitNewHash`
  */
  deposit: ColonyNetworkClient.Sender<
    {
      amount: number, // Amount of CLNY to stake
    },
    null,
    ColonyNetworkClient,
  >;
  /*
    Create and start a new Dutch Auction for the entire amount of a specified token owned by the Colony Network
  */
  startTokenAuction: ColonyNetworkClient.Sender<
    {
      tokenAddress: string, // Address of the token held by the network to be auctioned
    },
    {
      auction: string, // The address of the auction contract
      token: string, // The address of the token being auctioned
      quantity: number, // The amount of available tokens for auction
    },
    ColonyNetworkClient,
  >;
  /*
  Upgrades a colony to a new Colony contract version.
  */
  upgradeColony: ColonyNetworkClient.Sender<
    {
      key: string, // Unique colony 'key' to be upgraded
      newVersion: number, // The target version for the upgrade
    },
    null,
    ColonyNetworkClient,
  >;
  /*
  Allow a user who has staked CLNY to withdraw their stake
  */
  withdraw: ColonyNetworkClient.Sender<
    {
      amount: number, // Amount of CLNY to withdraw from stake
    },
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
    const colonyClient = new this.constructor.ColonyClient(
      { adapter: this.adapter, networkClient: this },
      { contractAddress },
    );
    return colonyClient.init();
  }
  async getColonyClient({ key, id }: { key?: string, id?: number } = {}) {
    assert(id || key, MISSING_ID_OR_KEY);
    const address = await this.getColonyAddress({ key, id });
    return this.getColonyClientByAddress(address);
  }
  async getColonyAddress({ key, id }: { key?: string, id?: number } = {}) {
    assert(id || key, MISSING_ID_OR_KEY);

    let address;
    if (key) {
      ({ address } = await this.getColonyByKey.call({ key }));
    } else if (id) {
      ({ address } = await this.getColonyById.call({ id }));
    }

    if (!address)
      throw new Error(
        `Colony with ${
          key ? `key ${key}` : `id ${id || 'unknown'}`
        } could not be found`,
      );

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

/* @flow */

import assert from 'browser-assert';
import { utf8ToHex } from 'web3-utils';
import BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';

import ColonyClient from '../ColonyClient/index';

const MISSING_ID = 'An ID parameter must be provided';

type Address = string;

export default class ColonyNetworkClient extends ContractClient {
  /*
  Returns the address of a colony when given the ID
  */
  getColony: ColonyNetworkClient.Caller<
    {
      id: number, // Integer colony ID
    },
    {
      address: Address, // Address of the colony contract
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the address of the Meta Colony
  */
  getMetaColony: ColonyNetworkClient.Caller<
    null,
    {
      address: Address, // Address of the Meta Colony contract
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
      address: Address, // Address of the `Resolver` contract
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
      colony: Address, // Address of the colony
      nPreviousUpdates: number, // number of previous updates
      nUpdates: number, // number of updates
      skillId: number, // skill Id
      user: Address, // user address
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
      count: number, // The number of skills on the network
    },
    ColonyNetworkClient,
  >;
  /*
    Get the amount of staked CLNY tokens for a given user address
  */
  getStakedBalance: ColonyNetworkClient.Caller<
    {
      user: Address, // Address of the user
    },
    {
      balance: number, // Amount of staked CLNY
    },
    ColonyNetworkClient,
  >;
  /*
  Creates a new colony on the network.
  */
  createColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // Token to import. Note: the ownership of the token contract must be transferred to the newly-created Colony.
    },
    {
      colonyId: number, // ID of the newly-created Colony
      colonyAddress: Address, // Address of the newly-created Colony
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
      tokenAddress: Address, // Address of the token held by the network to be auctioned
    },
    {
      auction: string, // The address of the auction contract
      token: Address, // The address of the token being auctioned
      quantity: number, // The amount of available tokens for auction
    },
    ColonyNetworkClient,
  >;
  /*
  Upgrades a colony to a new Colony contract version.
  */
  upgradeColony: ColonyNetworkClient.Sender<
    {
      id: number, // Colony ID to be upgraded
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

  /*
  Deploys a new ERC20 compatible token contract for you to use with your Colony. You can also use your own token when creating a Colony.
  */
  async createToken({
    name,
    symbol,
    decimals = 18,
  }: {
    name: string, // Name of the token to create
    symbol: string, // Symbol of the token (e.g. CLNY)
    decimals: number, // Decimals to use for your token
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
  /*
  Returns an initialized ColonyClient for the contract at address `contractAddress`
  */
  async getColonyClientByAddress(contractAddress: Address) {
    const colonyClient = new this.constructor.ColonyClient({
      adapter: this.adapter,
      networkClient: this,
      query: { contractAddress },
    });
    return colonyClient.init();
  }
  /*
  Returns an initialized ColonyClient for the specified ID of a deployed colony contract
  */
  async getColonyClient(id: number) {
    assert(Number.isFinite(id), MISSING_ID);
    const address = await this.getColonyAddress(id);
    return this.getColonyClientByAddress(address);
  }
  /*
  Gets the address of a deployed colony contract for the specified ID of a deployed colony contract
  */
  async getColonyAddress(id: number) {
    assert(Number.isFinite(id), MISSING_ID);

    const { address } = await this.getColony.call({ id });

    if (!address) throw new Error(`Colony with ID ${id} could not be found`);

    return address;
  }
  initializeContractMethods() {
    // Callers
    this.addCaller('getColony', {
      input: [['id', 'number']],
      output: [['address', 'address']],
    });
    this.addCaller('getMetaColony', {
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
      input: [['tokenAddress', 'address']],
      defaultGasLimit: new BigNumber(2500000),
      eventHandlers: {
        success: {
          ColonyAdded: {
            contract: this.contract,
            handler({
              id,
              colonyAddress,
            }: {
              id: BigNumber,
              colonyAddress: Address,
            }) {
              return {
                colonyId: id.toNumber(),
                colonyAddress,
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

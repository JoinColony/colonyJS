/* @flow */

import assert from 'assert';
import { utf8ToHex } from 'web3-utils';
import { isValidAddress } from '@colony/colony-js-utils';
import BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';

import ColonyClient from '../ColonyClient/index';
import TokenClient from '../TokenClient/index';
import AuthorityClient from '../AuthorityClient/index';

const MISSING_ID = 'An ID parameter must be provided';

type Address = string;

type ColonyAdded = ContractClient.Event<{
  colonyId: number, // ID of the newly-created Colony
  colonyAddress: Address, // Address of the newly-created Colony
}>;
type SkillAdded = ContractClient.Event<{
  skillId: number,
  parentSkillId: number,
}>;
type AuctionCreated = ContractClient.Event<{
  auction: string, // The address of the auction contract
  token: Address, // The address of the token being auctioned
  quantity: BigNumber, // The amount of available tokens for auction
}>;

export default class ColonyNetworkClient extends ContractClient {
  events: {
    ColonyAdded: ColonyAdded,
    SkillAdded: SkillAdded,
    AuctionCreated: AuctionCreated,
  };
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
  getMetaColonyAddress: ColonyNetworkClient.Caller<
    {},
    {
      address: Address, // Address of the Meta Colony contract
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the number of colonies created on the Colony Network, i.e. the colonyId of the most recently created colony.
  */
  getColonyCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // colonyId of the most recently created colony
    },
    ColonyNetworkClient,
  >;
  /*
  Check if specific address is a Colony created on the Colony Network
  */
  isColony: ColonyNetworkClient.Caller<
    {
      colony: Address, // Address of the colony
    },
    {
      isColony: boolean, // Whether specified address is a colony
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
    {},
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
  Given the id of a particular skill, returns the child skill at the given index
  */
  getChildSkillId: ColonyNetworkClient.Caller<
    {
      skillId: number, // Id of the skill
      childSkillIndex: number, // Index of the `skill.children` array to get
    },
    {
      childSkillId: number, // Id of the child skill
    },
    ColonyNetworkClient,
  >;
  /*
  Returns the number of parent and child skills associated with the provided skill
  */
  getSkill: ColonyNetworkClient.Caller<
    {
      skillId: number, // skillId to be checked
    },
    {
      nParents: number, // Number of parent skills
      nChildren: number, // Number of child skills
      isGlobalSkill: boolean, // Whether the specified skill is a global skill
    },
    ColonyNetworkClient,
  >;
  /*
  Get the total number of skills in the network (both global and local skills)
  */
  getSkillCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // The number of skills on the network
    },
    ColonyNetworkClient,
  >;
  /*
  Get the ID of the root global skill.
  */
  getRootGlobalSkillId: ColonyNetworkClient.Caller<
    {},
    {
      skillId: number, // The root global skill id
    },
    ColonyNetworkClient,
  >;
  /*
  Get the token locking contract address.
  */
  getTokenLocking: ColonyNetworkClient.Caller<
    {},
    {
      lockingAddress: Address, // Token locking contract address
    },
    ColonyNetworkClient,
  >;
  /*
  Adds a new skill to the global or local skills tree.
  */
  addSkill: ColonyNetworkClient.Sender<
    {
      parentSkillId: number, // The skill under which the new skill will be added
      globalSkill: boolean, // Whether the new skill is global
    },
    {
      skillId: number, // Id of the added skill
      parentSkillId: number, // Id of the parent skill under which the new skill is added
    },
    ColonyNetworkClient,
  >;
  /*
  Sets the token locking address.
  */
  setTokenLocking: ColonyNetworkClient.Sender<
    {
      tokenLockingAddress: Address, // Address of the locking contract
    },
    {},
    ColonyNetworkClient,
  >;
  /*
  Create the Meta Colony, same as a normal Colony plus the root skill.
  */
  createMetaColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // Token to import. Note: the ownership of the token contract must be transferred to the newly-created Meta Colony.
    },
    {},
    ColonyNetworkClient,
  >;
  /*
  Creates a new colony on the network.
  */
  createColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // Token to import. Note: the ownership of the token contract must be transferred to the newly-created Colony.
    },
    { ColonyAdded: ColonyAdded },
    ColonyNetworkClient,
  >;
  /*
  Adds a new Colony contract version and the address of associated Resolver contract.
  */
  addColonyVersion: ColonyNetworkClient.Sender<
    {
      version: number, // The new Colony contract version
      resolver: Address, // Address of the Resolver contract
    },
    {},
    ColonyNetworkClient,
  >;
  /*
    Create and start a new Dutch Auction for the entire amount of a specified token owned by the Colony Network
  */
  startTokenAuction: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // Address of the token held by the network to be auctioned
    },
    { AuctionCreated: AuctionCreated },
    ColonyNetworkClient,
  >;
  /*
  Setup registrar with ENS and root node.
  */
  setupRegistrar: ColonyNetworkClient.Sender<
    {
      ens: Address, // Address of ENS registrar
      rootNode: string, // Namehash of the root node for the domain
    },
    {},
    ColonyNetworkClient,
  >;
  /*
  Register a "user.joincolony.eth" label.
  */
  registerUserLabel: ColonyNetworkClient.Sender<
    {
      subnode: string, // The keccak256 hash of the label to register
    },
    {},
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

  static get TokenClient(): * {
    return TokenClient;
  }

  static get AuthorityClient(): * {
    return AuthorityClient;
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

    if (!isValidAddress(address))
      throw new Error(`Colony with ID ${id} could not be found`);

    return address;
  }
  /*
  Gets the Meta Colony as an initialized ColonyClient
   */
  async getMetaColonyClient() {
    const { address } = await this.getMetaColonyAddress.call();

    if (!isValidAddress(address))
      throw new Error(`Meta Colony could not be found`);

    return this.getColonyClientByAddress(address);
  }
  initializeContractMethods() {
    // Events
    this.addEvent('ColonyAdded', [
      ['colonyId', 'number'],
      ['colonyAddress', 'address'],
    ]);
    this.addEvent('SkillAdded', [
      ['skillId', 'number'],
      ['parentSkillId', 'number'],
    ]);
    this.addEvent('AuctionCreated', [
      ['auction', 'address'],
      ['token', 'tokenAddress'],
      ['quantity', 'bigNumber'],
    ]);

    // Callers
    this.addCaller('getColony', {
      input: [['id', 'number']],
      output: [['address', 'address']],
    });
    this.addCaller('getMetaColonyAddress', {
      functionName: 'getMetaColony',
      output: [['address', 'address']],
    });
    this.addCaller('getColonyCount', {
      output: [['count', 'number']],
    });
    this.addCaller('isColony', {
      input: [['colony', 'address']],
      output: [['isColony', 'boolean']],
    });
    this.addCaller('getColonyVersionResolver', {
      input: [['version', 'number']],
      output: [['address', 'address']],
    });
    this.addCaller('getCurrentColonyVersion', {
      output: [['version', 'number']],
    });
    this.addCaller('getParentSkillId', {
      input: [['skillId', 'number'], ['parentSkillIndex', 'number']],
      output: [['parentSkillId', 'number']],
    });
    this.addCaller('getChildSkillId', {
      input: [['skillId', 'number'], ['childSkillIndex', 'number']],
      output: [['childSkillId', 'number']],
    });
    this.addCaller('getSkill', {
      input: [['skillId', 'number']],
      output: [
        ['nParents', 'number'],
        ['nChildren', 'number'],
        ['isGlobalSkill', 'boolean'],
      ],
      validateEmpty: async ({ skillId }: { skillId: number }) => {
        const { count } = await this.getSkillCount.call();
        if (skillId > count) throw new Error(`Skill ID ${skillId} not found`);
        return true;
      },
    });
    this.addCaller('getSkillCount', {
      output: [['count', 'number']],
    });
    this.addCaller('getRootGlobalSkillId', {
      output: [['skillId', 'number']],
    });
    this.addCaller('getTokenLocking', {
      output: [['lockingAddress', 'address']],
    });

    // Senders
    this.addSender('addSkill', {
      input: [['parentSkillId', 'number'], ['globalSkill', 'boolean']],
    });
    this.addSender('setTokenLocking', {
      input: [['tokenLockingAddress', 'address']],
    });
    this.addSender('createMetaColony', {
      input: [['tokenAddress', 'address']],
      defaultGasLimit: 2500000,
    });
    this.addSender('createColony', {
      input: [['tokenAddress', 'address']],
      defaultGasLimit: 2500000,
    });
    this.addSender('addColonyVersion', {
      input: [['version', 'number'], ['resolver', 'address']],
    });
    this.addSender('startTokenAuction', {
      input: [['tokenAddress', 'address']],
    });
    this.addSender('setupRegistrar', {
      input: [['ens', 'address'], ['rootNode', 'string']],
    });
    this.addSender('registerUserLabel', {
      input: [['subnode', 'string']],
    });
  }
}

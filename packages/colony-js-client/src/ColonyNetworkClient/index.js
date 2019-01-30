/* @flow */

import assert from 'assert';
import { isValidAddress } from '@colony/colony-js-utils';
import BigNumber from 'bn.js';
import 'isomorphic-fetch';

import ContractClient from '@colony/colony-js-contract-client';

import ColonyClient from '../ColonyClient/index';
import TokenClient from '../TokenClient/index';
import CreateToken from './senders/CreateToken';
import addRecoveryMethods from '../addRecoveryMethods';

const MISSING_ID = 'An ID parameter must be provided';

type Address = string;
type HexString = string;

type AuctionCreated = ContractClient.Event<{
  auction: string, // The address of the auction contract that was created.
  token: Address, // The address of the token contract that was assigned.
  quantity: BigNumber, // The amount of tokens available for the auction.
}>;
type ColonyAdded = ContractClient.Event<{
  colonyId: number, // The numeric ID of the colony that was added.
  colonyAddress: Address, // The address of the colony contract that was created.
  tokenAddress: Address, // The address of the token contract that was assigned.
}>;
type ColonyLabelRegistered = ContractClient.Event<{
  colony: Address, // The address of the colony that registered a label.
  label: string, // The ENS label that was registered for the colony.
}>;
type ColonyNetworkInitialised = ContractClient.Event<{
  resolver: Address, // The address of the resolver contract.
}>;
type ColonyVersionAdded = ContractClient.Event<{
  version: number, // The version number of the colony contract that was added.
  resolver: Address, // The address of the resolver contract.
}>;
type MetaColonyCreated = ContractClient.Event<{
  colonyAddress: number, // The address of the Meta Colony.
  tokenAddress: Address, // The address of the CLNY token contract.
  rootSkillId: number, // The numeric ID of the root skill.
}>;
type MiningCycleResolverSet = ContractClient.Event<{
  miningCycleResolver: Address, // The address of the resolver contract for the reputation mining cycle contract.
}>;
type NetworkFeeInverseSet = ContractClient.Event<{
  feeInverse: BigNumber, // The inverse value of the network fee that was set.
}>;
type ReputationMiningCycleComplete = ContractClient.Event<{
  hash: HexString, // The root hash of the reputation state that was accepted.
  nNodes: number, // The total number of nodes in the reputation state.
}>;
type ReputationMiningInitialised = ContractClient.Event<{
  inactiveReputationMiningCycle: Address, // The address of the reputation mining cycle that was initialized.
}>;
type ReputationRootHashSet = ContractClient.Event<{
  newHash: HexString, // The reputation root hash that was set.
  newNNodes: number, // The total number of nodes in the reputation state.
  stakers: Address[], // The array of users who submitted or backed the accepted hash.
  reward: BigNumber[], // The array of corresponding amounts of CLNY each user received.
}>;
type SkillAdded = ContractClient.Event<{
  skillId: number, // The numeric ID of the skill that was added.
  parentSkillId: number, // The numeric ID of the parent skill.
}>;
type TokenLockingAddressSet = ContractClient.Event<{
  tokenLocking: Address, // The address of the token locking contract.
}>;
type UserLabelRegistered = ContractClient.Event<{
  user: Address, // The address of the user that registered a label.
  label: string, // The ENS label that was registered for the user.
}>;

export default class ColonyNetworkClient extends ContractClient {
  events: {
    AuctionCreated: AuctionCreated,
    ColonyAdded: ColonyAdded,
    ColonyLabelRegistered: ColonyLabelRegistered,
    ColonyNetworkInitialised: ColonyNetworkInitialised,
    ColonyVersionAdded: ColonyVersionAdded,
    MetaColonyCreated: MetaColonyCreated,
    MiningCycleResolverSet: MiningCycleResolverSet,
    NetworkFeeInverseSet: NetworkFeeInverseSet,
    ReputationMiningCycleComplete: ReputationMiningCycleComplete,
    ReputationMiningInitialised: ReputationMiningInitialised,
    ReputationRootHashSet: ReputationRootHashSet,
    SkillAdded: SkillAdded,
    TokenLockingAddressSet: TokenLockingAddressSet,
    UserLabelRegistered: UserLabelRegistered,
  };

  /*
  Add a new colony contract version and set the address of the resolver contract.
  */
  addColonyVersion: ColonyNetworkClient.Sender<
    {
      version: number, // The versions number of the colony contract.
      resolver: Address, // The address of the resolver contract.
    },
    {
      ColonyVersionAdded: ColonyVersionAdded,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Add a new global or local skill to the skills tree.
  */
  addSkill: ColonyNetworkClient.Sender<
    {
      parentSkillId: number, // The numeric ID of the skill under which the new skill will be added.
      globalSkill: boolean, // A boolean indicating whether or not the skill will be a global skill.
    },
    {
      SkillAdded: SkillAdded,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Indicate approval to exit network recovery mode. This function can only be called by a user with a recovery role.
  */
  approveExitRecovery: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Create a new colony on the network.
  */
  createColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // The address of the token contract.
    },
    {
      ColonyAdded: ColonyAdded,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Create the Meta Colony.
  */
  createMetaColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // The address of the token contract.
    },
    {
      MetaColonyCreated: MetaColonyCreated,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Create a new ERC20 token contract.
  */
  createToken: ColonyNetworkClient.Sender<
    {
      name: string, // The name of the token.
      symbol: string, // The symbol of the token.
      decimals: number, // The number of decimals.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/7359eedaadacd55a1393c795964bd61513b2af33/contracts',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Check whether or not ENS supports a contract interface. A supported contract interface implements `interfaceId`.
  */
  ensSupportsInterface: ColonyNetworkClient.Caller<
    {
      interfaceId: HexString, // The hashed ID of the contract interface as specified in ERC-165.
    },
    {
      isSupported: boolean, // A boolean indicating whether or not the contract interface is supported.
    },
    ColonyNetworkClient,
    {
      function: 'supportsInterface',
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Enter network recovery mode. This function can only be called by a user with a recovery role.
  */
  enterRecoveryMode: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Exit network recovery mode. This function can be called by anyone if enough whitelist approvals are given.
  */
  exitRecoveryMode: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the address of a registered ENS label. This function will return an empty address if an ENS label has not been registered.
  */
  getAddressForENSHash: ColonyNetworkClient.Caller<
    {
      nameHash: HexString, // The hached ENS label that will be checked.
    },
    {
      ensAddress: Address, // The address associated with the ENS label.
    },
    ColonyNetworkClient,
    {
      function: 'addr',
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the ID of a child skill.
  */
  getChildSkillId: ColonyNetworkClient.Caller<
    {
      skillId: number, // The numberic ID of the skill that will be checked.
      childSkillIndex: number, // The index of the child skill array to be checked.
    },
    {
      childSkillId: number, // The numeric ID of the child skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the colony contract address for a colony.
  */
  getColony: ColonyNetworkClient.Caller<
    {
      id: number, // The numeric ID of the colony.
    },
    {
      address: Address, // The address of the colony contract.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the total number of colonies on the network. The return value is also the numeric ID of the last colony created.
  */
  getColonyCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // The total number of colonies.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the address of the resolver contract for a specific colony version.
  */
  getColonyVersionResolver: ColonyNetworkClient.Caller<
    {
      version: number, // The version number of the colony contract.
    },
    {
      address: Address, // The address of the resolver contract.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the latest colony contract version. This is the version used to create all new colonies.
  */
  getCurrentColonyVersion: ColonyNetworkClient.Caller<
    {},
    {
      version: number, // The version number of the latest colony contract.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the Meta Colony contract address.
  */
  getMetaColonyAddress: ColonyNetworkClient.Caller<
    {},
    {
      address: Address, // The address of the Meta Colony contract.
    },
    ColonyNetworkClient,
    {
      function: 'getMetaColony',
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the ID of a parent skill.
  */
  getParentSkillId: ColonyNetworkClient.Caller<
    {
      skillId: number, // The numberic ID of the skill that will be checked.
      parentSkillIndex: number, // The index of the parent skill array to be checked.
    },
    {
      parentSkillId: number, // The numeric ID of the parent skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the address of the OrbitDB database associaated with a user profile.
  */
  getProfileDBAddress: ColonyNetworkClient.Caller<
    {
      nameHash: HexString, // The hashed ENS label that was registered for the user.
    },
    {
      orbitDBAddress: string, // The path of the OrbitDB database associated with the user profile.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the total number of users that are assigned a network recovery role.
  */
  getRecoveryRolesCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // The total number of users that are assigned a colony recovery role.
    },
    ColonyNetworkClient,
    {
      function: 'numRecoveryRoles',
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the ID of the root global skill.
  */
  getRootGlobalSkillId: ColonyNetworkClient.Caller<
    {},
    {
      skillId: number, // The numeric ID of the root global skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get information about a domain.
  */
  getSkill: ColonyNetworkClient.Caller<
    {
      skillId: number, // The numeric ID of the skill.
    },
    {
      nParents: number, // The total number of parent skills.
      nChildren: number, // The total number of child skills.
      isGlobalSkill: boolean, // A boolean indicating whether or not the skill is a global skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the total number of global and local skills in the network.
  */
  getSkillCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // The total number of global and local skills in the network.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Get the token locking contract address.
  */
  getTokenLocking: ColonyNetworkClient.Caller<
    {},
    {
      lockingAddress: Address, // The address of the token locking contract.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Check whether or not an address is a colony contract.
  */
  isColony: ColonyNetworkClient.Caller<
    {
      colony: Address, // The address that will be checked.
    },
    {
      isColony: boolean, // A boolean indicating whether or not an address is a colony contract.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Check whether or not the network is in recovery mode.
  */
  isInRecoveryMode: ColonyNetworkClient.Caller<
    {},
    {
      inRecoveryMode: boolean, // A boolean indicating whether or not the network is in recovery mode.
    },
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Lookup the registed ENS label for an address. This function will return an empty string if the address does not have a registered ENS label.
  */
  lookupRegisteredENSDomain: ColonyNetworkClient.Caller<
    {
      ensAddress: Address, // The address that will checked.
    },
    {
      domain: string, // The ENS label associated with the address.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Register an ENS label for a user.
  */
  registerUserLabel: ColonyNetworkClient.Sender<
    {
      username: string, // The ENS label that will be registered for the user.
      orbitDBPath: string, // The path of the OrbitDB database associated with the user profile.
    },
    {
      UserLabelRegistered: UserLabelRegistered,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Remove the network recovery role from a user. This function can only be called by the `FOUNDER` authority role.
  */
  removeRecoveryRole: ColonyNetworkClient.Sender<
    {
      user: Address, // The address of the user that will be unassigned a network recovery role.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Assign a network recovery role to a user. This function can only be called by the `FOUNDER` authority role.
  */
  setRecoveryRole: ColonyNetworkClient.Sender<
    {
      user: Address, // The address of the user that will be assigned a network recovery role.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Set the value for a storage slot while in recovery mode. This can only be called by a user with a recovery role.
  */
  setStorageSlotRecovery: ColonyNetworkClient.Sender<
    {
      slot: number, // The numeric ID of the storage slot that will be modified.
      value: HexString, // The hex string of data that will be set as the value.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Set the token locking address.
  */
  setTokenLocking: ColonyNetworkClient.Sender<
    {
      tokenLockingAddress: Address, // The address of the locking contract.
    },
    {
      TokenLockingAddressSet: TokenLockingAddressSet,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Set up the registrar.
  */
  setupRegistrar: ColonyNetworkClient.Sender<
    {
      ens: Address, // The adddress of the ENS registrar.
      rootNode: string, // The namehash of the root node for the domain.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;
  /*
  Create and start an auction for a token owned by the Colony Network. The auction will be for the total amount of the specificed tokens that are owned by the Colony Network.
  */
  startTokenAuction: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // The address of the token contract.
    },
    {
      AuctionCreated: AuctionCreated,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkAuction.sol',
      interface: 'IColonyNetwork.sol',
      version: 'f73dc84a41f5fc1962c999a24e13b15ba491b8a6',
    },
  >;

  static get defaultQuery() {
    return {
      contractName: 'IColonyNetwork',
      routerName: 'EtherRouter',
    };
  }

  static get TokenClient(): * {
    return TokenClient;
  }

  static get ColonyClient(): * {
    return ColonyClient;
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
    await colonyClient.init();
    return colonyClient;
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
  Returns an initialized ColonyClient for the contract at address `contractAddress`
  */
  async getMetaColonyClientByAddress(contractAddress: Address) {
    const metaColonyClient = new this.constructor.ColonyClient({
      adapter: this.adapter,
      networkClient: this,
      query: { contractAddress },
    });
    await metaColonyClient.init();
    return metaColonyClient;
  }
  /*
  Gets the Meta Colony as an initialized ColonyClient
  */
  async getMetaColonyClient() {
    const { address } = await this.getMetaColonyAddress.call();

    if (!isValidAddress(address))
      throw new Error(`Meta Colony could not be found`);

    return this.getMetaColonyClientByAddress(address);
  }
  initializeContractMethods() {
    addRecoveryMethods(this);

    // Events
    this.addEvent('ColonyAdded', [
      ['colonyId', 'number'],
      ['colonyAddress', 'address'],
      ['tokenAddress', 'tokenAddress'],
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
    this.addEvent('UserLabelRegistered', [
      ['user', 'address'],
      ['label', 'string'],
    ]);
    this.addEvent('ColonyLabelRegistered', [
      ['colony', 'address'],
      ['label', 'string'],
    ]);
    this.addEvent('ColonyNetworkInitialised', [['resolver', 'address']]);
    this.addEvent('TokenLockingAddressSet', [['tokenLocking', 'address']]);
    this.addEvent('MiningCycleResolverSet', [
      ['miningCycleResolver', 'address'],
    ]);
    this.addEvent('NetworkFeeInverseSet', [['feeInverse', 'number']]);
    this.addEvent('ColonyVersionAdded', [
      ['version', 'number'],
      ['resolver', 'address'],
    ]);
    this.addEvent('MetaColonyCreated', [
      ['metaColony', 'address'],
      ['token', 'tokenAddress'],
      ['rootSkillId', 'number'],
    ]);
    this.addEvent('ReputationMiningInitialised', [
      ['inactiveReputationMiningCycle', 'address'],
    ]);
    this.addEvent('ReputationMiningCycleComplete', [
      ['hash', 'hexString'],
      ['nNodes', 'number'],
    ]);
    this.addEvent('ReputationRootHashSet', [
      ['newHash', 'hexString'],
      ['newNNodes', 'number'],
      ['stakers', 'address'],
      ['reward', 'bigNumber'],
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
    this.addCaller('getProfileDBAddress', {
      input: [['nameHash', 'hexString']],
      output: [['orbitDBAddress', 'string']],
    });
    this.addCaller('lookupRegisteredENSDomain', {
      input: [['ensAddress', 'address']],
      output: [['domain', 'string']],
    });
    this.addCaller('ensSupportsInterface', {
      functionName: 'supportsInterface',
      input: [['interfaceId', 'hexString']],
      output: [['isSupported', 'boolean']],
    });
    this.addCaller('getAddressForENSHash', {
      functionName: 'addr',
      input: [['nameHash', 'hexString']],
      output: [['ensAddress', 'address']],
    });

    // Senders
    this.createToken = new CreateToken({ client: this });
    this.addSender('addSkill', {
      input: [['parentSkillId', 'number'], ['globalSkill', 'boolean']],
    });
    this.addSender('setTokenLocking', {
      input: [['tokenLockingAddress', 'address']],
    });
    this.addSender('createMetaColony', {
      input: [['tokenAddress', 'address']],
      defaultGasLimit: 4000000,
    });
    this.addSender('createColony', {
      input: [['tokenAddress', 'address']],
      defaultGasLimit: 4000000,
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
      input: [['username', 'string'], ['orbitDBPath', 'string']],
      defaultGasLimit: 260000,
    });
  }

  async getReputation({
    colonyAddress,
    skillId = 1,
    user,
  }: {
    skillId: number,
    colonyAddress: Address,
    user: Address,
  }) {
    assert(Number.isFinite(skillId), 'skillId must be a number');
    assert(isValidAddress(user), 'user must be an address');
    assert(isValidAddress(colonyAddress), 'colonyAddress must be an address');

    if (this.network !== 'rinkeby')
      throw new Error(
        'Reputation is currently only supported for contracts on Rinkeby',
      );

    const response = await fetch(
      `https://colony.io/reputation/${
        this.network
      }/${colonyAddress}]/${skillId}/${user}`,
    );
    return response.json();
  }
}

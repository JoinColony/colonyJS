/* @flow */

import assert from 'assert';
import { isValidAddress } from '@colony/colony-js-utils';
import BigNumber from 'bn.js';
import 'isomorphic-fetch';

import ContractClient from '@colony/colony-js-contract-client';

import ColonyClient from '../ColonyClient/index';
import MetaColonyClient from '../MetaColonyClient/index';
import TokenClient from '../TokenClient/index';
import AuthorityClient from '../AuthorityClient/index';
import CreateToken from './senders/CreateToken';
import addRecoveryMethods from '../addRecoveryMethods';

const MISSING_ID = 'An ID parameter must be provided';

type Address = string;
type HexString = string;

type ColonyAdded = ContractClient.Event<{
  colonyId: number, // ID of the newly-created colony
  colonyAddress: Address, // Address of the newly-created colony
  tokenAddress: Address, // Address of the associated colony token
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
type UserLabelRegistered = ContractClient.Event<{
  user: Address, // Address of the user that registered a label
  label: string, // The label registered
}>;
type ColonyLabelRegistered = ContractClient.Event<{
  colony: Address, // Address of the colony that registered a label
  label: string, // The label registered
}>;
type ReputationMiningInitialised = ContractClient.Event<{
  inactiveReputationMiningCycle: Address, // Address of the newly created ReputationMiningCycle used in logging reputation changes
}>;
type ReputationMiningCycleComplete = ContractClient.Event<{
  hash: HexString, // The root hash of the newly accepted reputation state
  nNodes: number, // The number of nodes in the reputation state
}>;
type ReputationRootHashSet = ContractClient.Event<{
  newHash: HexString, // The reputation root hash
  newNNodes: number, // The updated nodes count value
  stakers: Address[], // Array of users who submitted or backed the hash accepted
  reward: BigNumber[], // Amount of CLNY distributed as reward to miners
}>;
type TokenLockingAddressSet = ContractClient.Event<{
  tokenLocking: Address, // Address of the TokenLocking contract
}>;
type ColonyNetworkInitialised = ContractClient.Event<{
  resolver: Address, // The Resolver contract address used by the Colony version 1
}>;
type MiningCycleResolverSet = ContractClient.Event<{
  miningCycleResolver: Address, // Resolver address for the ReputationMiningCycle contract
}>;
type NetworkFeeInverseSet = ContractClient.Event<{
  feeInverse: BigNumber, // The network fee inverse value
}>;
type ColonyVersionAdded = ContractClient.Event<{
  version: number, // The new int colony version, e.g. 2, 3, 4, etc
  resolver: Address, // The new colony contract resolver contract instance
}>;
type MetaColonyCreated = ContractClient.Event<{
  colonyAddress: number, // Address of the Meta Colony
  tokenAddress: Address, // Address of the associated CLNY token
  rootSkillId: number, // ID of the root skill of the global skills tree (normally, this is 2)
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
    Indicate approval to exit recovery mode. Can only be called by user with recovery role.
   */
  approveExitRecovery: ColonyNetworkClient.Sender<{}, {}, ColonyNetworkClient>;
  /*
    Put the colony into recovery mode. Can only be called by user with a recovery role.
   */
  enterRecoveryMode: ColonyNetworkClient.Sender<{}, {}, ColonyNetworkClient>;
  /*
    Exit recovery mode. Can be called by anyone if enough whitelist approvals are given.
   */
  exitRecoveryMode: ColonyNetworkClient.Sender<
    {
      newVersion: number, // Resolver version to upgrade to (>= current version)
    },
    {},
    ColonyNetworkClient,
  >;
  /*
    Set new colony recovery role. Can only be called by the founder role.
   */
  setRecoveryRole: ColonyNetworkClient.Sender<
    {
      user: Address, // The user we want to give a recovery role to.
    },
    {},
    ColonyNetworkClient,
  >;
  /*
    Remove colony recovery role. Can only be called by the founder role.
   */
  removeRecoveryRole: ColonyNetworkClient.Sender<
    {
      user: Address, // The user we want to remove the recovery role from.
    },
    {},
    ColonyNetworkClient,
  >;
  /*
    Returns the number of recovery roles.
  */
  getRecoveryRolesCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // Number of users with the recovery role (excluding owner)
    },
    ColonyNetworkClient,
  >;
  /*
    Is the colony in recovery mode?
  */
  isInRecoveryMode: ColonyNetworkClient.Caller<
    {},
    {
      inRecoveryMode: boolean, // Return true if recovery mode is active, false otherwise
    },
    ColonyNetworkClient,
  >;
  /*
    Update the value of an arbitrary storage variable. This can only be called by a user with the recovery role. Certain critical variables are protected from editing in this function.
  */
  setStorageSlotRecovery: ColonyNetworkClient.Sender<
    {
      slot: number, // Address of storage slot to be updated.
      value: HexString, // Word of data to be set.
    },
    {},
    ColonyNetworkClient,
  >;

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
      Returns the database address of a user when given the hashed ENS username
    */
  getProfileDBAddress: ColonyNetworkClient.Caller<
    {
      nameHash: HexString, // The hashed human-readable ENS name
    },
    {
      orbitDBAddress: string, // Address of the UserProfile DDB
    },
    ColonyNetworkClient,
  >;
  /*
      Given an Ethereum address, returns a user's or colony's human-readable name, or an empty string if the address has no Colony-based ENS name
    */
  lookupRegisteredENSDomain: ColonyNetworkClient.Caller<
    {
      ensAddress: Address, // The address we wish to find the corresponding ENS domain for (if any)
    },
    {
      domain: string, // A string containing the colony-based ENS name corresponding to `ensAddress`
    },
    ColonyNetworkClient,
  >;
  /*
      Given a hash of the ENS name, returns the Ethereum address registered with it
    */
  getAddressForENSHash: ColonyNetworkClient.Caller<
    {
      nameHash: HexString, // The hashed human-readable ENS name
    },
    {
      ensAddress: Address, // The registered ENS username for a colony or a user
    },
    ColonyNetworkClient,
  >;
  /*
  Deploys a new ERC20 compatible token contract for you to use with your Colony. You can also use your own token when creating a Colony.
  */
  createToken: ColonyNetworkClient.Sender<
    {
      name: string, // Name of the token to create
      symbol: string, // Symbol of the token (e.g. CLNY)
      decimals: number, // Decimals to use for your token
    },
    {},
    ColonyNetworkClient,
  >;
  /*
      Given an ENS interface, returns a boolean indicating whether the interface is supported
    */
  ensSupportsInterface: ColonyNetworkClient.Caller<
    {
      interfaceId: HexString, // The interface identifier, as specified in ERC-165
    },
    {
      isSupported: boolean, // Returns `true` if the contract implements `interfaceId`
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
    { SkillAdded: SkillAdded },
    ColonyNetworkClient,
  >;
  /*
  Sets the token locking address.
  */
  setTokenLocking: ColonyNetworkClient.Sender<
    {
      tokenLockingAddress: Address, // Address of the locking contract
    },
    { TokenLockingAddressSet: TokenLockingAddressSet },
    ColonyNetworkClient,
  >;
  /*
  Create the Meta Colony, same as a normal Colony plus the root skill.
  */
  createMetaColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // Token to import. Note: the ownership of the token contract must be transferred to the newly-created Meta Colony.
    },
    { MetaColonyCreated: MetaColonyCreated },
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
    { ColonyVersionAdded: ColonyVersionAdded },
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
      username: string, // The label to register
      orbitDBPath: string, // The path of the OrbitDB database associated with the user profile
    },
    { UserLabelRegistered: UserLabelRegistered },
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

  static get MetaColonyClient(): * {
    return MetaColonyClient;
  }

  static get TokenClient(): * {
    return TokenClient;
  }

  static get AuthorityClient(): * {
    return AuthorityClient;
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
  Returns an initialized ColonyClient for the contract at address `contractAddress`
  */
  async getMetaColonyClientByAddress(contractAddress: Address) {
    const metaColonyClient = new this.constructor.MetaColonyClient({
      adapter: this.adapter,
      networkClient: this,
      query: { contractAddress },
    });
    return metaColonyClient.init();
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

/* @flow */
/* eslint-disable import/no-cycle */

import 'isomorphic-fetch';

import assert from 'assert';
import BigNumber from 'bn.js';

import ContractClient from '@colony/colony-js-contract-client';
import { isValidAddress } from '@colony/colony-js-utils';

import ColonyClient from '../ColonyClient/index';
import TokenLockingClient from '../TokenLockingClient/index';

import LookupRegisteredENSDomain from './callers/LookupRegisteredENSDomain';
import CreateToken from './senders/CreateToken';
import CreateColony from './senders/CreateColony';
import addRecoveryMethods from '../addRecoveryMethods';

type Address = string;
type AnyAddress = string;
type HexString = string;

type AuctionCreated = ContractClient.Event<{
  auction: string, // The address of the auction contract that was created.
  token: Address, // The address of the token contract that was assigned.
  quantity: BigNumber, // The amount of tokens available for the auction.
}>;
type ColonyAdded = ContractClient.Event<{
  colonyId: number, // The ID of the colony that was added.
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
  rootSkillId: number, // The ID of the root skill.
}>;
type MiningCycleResolverSet = ContractClient.Event<{
  miningCycleResolver: Address, // The address of the resolver contract for the reputation mining cycle contract.
}>;
type NetworkFeeInverseSet = ContractClient.Event<{
  feeInverse: BigNumber, // The inverse value of the network fee that was set.
}>;
type RecoveryRoleSet = ContractClient.Event<{
  user: AnyAddress, // The address having the recovery role set
  setTo: boolean, // Bool representing whether they now have the skill or not
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
  stakers: Array<Address>, // The array of users who submitted or backed the accepted hash.
  reward: Array<Address>, // The array of corresponding amounts of CLNY each user received.
}>;
type SkillAdded = ContractClient.Event<{
  skillId: number, // The ID of the skill that was added.
  parentSkillId: number, // The ID of the parent skill.
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
    RecoveryRoleSet: RecoveryRoleSet,
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
      version: 'glider',
    },
  >;

  /*
  Add a new global or local skill to the skills tree.
  */
  addSkill: ColonyNetworkClient.Sender<
    {
      parentSkillId: number, // The ID of the skill under which the new skill will be added.
    },
    {
      SkillAdded: SkillAdded,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Add a reputation update entry to the log.
  */
  appendReputationUpdateLog: ColonyNetworkClient.Sender<
    {
      user: Address,
      amount: BigNumber,
      skillId: number,
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Indicate approval to exit network recovery mode. This function can only be called by an address assigned the `RECOVERY` role.
  */
  approveExitRecovery: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
    },
  >;

  /*
  Calculate the raw miner weight in WADs.
  */
  calculateMinerWeight: ColonyNetworkClient.Caller<
    {
      timeStaked: number, // Amount of time (in seconds) that the miner has staked their CLNY.
      submissionIndexed: number, // The index of reputation hash submission (between `0` and `11`).
    },
    {
      minerWeight: number, // The weight of miner reward in WADs.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
    },
  >;

  /*
  Create a new colony on the network.
  */
  createColony: ColonyNetworkClient.Sender<
    {
      tokenAddress: Address, // The address of the token contract that will become the native token for the colony.
      version: number, // The Colony version to deploy (`0` deploys the current version).
      colonyName: string, // The ENS name to set for the colony ('' sets no name).
      orbitdb: string, // The orbitdb address for the ENS name.
      useExtensionManager: boolean, // Whether or not to give the ExtensionManager root permission.
    },
    {
      SkillAdded: SkillAdded,
      ColonyAdded: ColonyAdded,
      RecoveryRoleSet: RecoveryRoleSet,
      ColonyLabelRegistered: ColonyLabelRegistered,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'burgandy-glider',
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
      SkillAdded: SkillAdded,
      ColonyAdded: ColonyAdded,
      MetaColonyCreated: MetaColonyCreated,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Create a new ERC20 token contract.
  */
  createToken: ColonyNetworkClient.Sender<
    {
      name: string, // The name of the token.
      symbol: string, // The symbol of the token.
      decimals: ?number, // The number of decimals.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'Token.sol',
      // eslint-disable-next-line max-len
      contractPath: 'https://github.com/JoinColony/colonyToken/blob/8e5139586018fbaa53e9cf971e040b3ae2a4bb92/contracts',
      version: 'glider',
    },
  >;

  /*
  Deprecate a skill.
  */
  deprecateSkill: ColonyNetworkClient.Sender<
    {
      skillId: number, // The ID of the skill that will be deprecated.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Check whether an ENS interface is supported.
  */
  ensSupportsInterface: ColonyNetworkClient.Caller<
    {
      interfaceId: HexString, // The hashed ID of the contract interface as specified in ERC-165.
    },
    {
      isSupported: boolean, // A boolean indicating whether or not the ENS interface is supported.
    },
    ColonyNetworkClient,
    {
      method: 'supportsInterface',
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Enter network recovery mode. This function can only be called by an address assigned the `RECOVERY` role.
  */
  enterRecoveryMode: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
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
      version: 'glider',
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
      version: 'glider',
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
      childSkillId: number, // The ID of the child skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the colony contract address for a colony.
  */
  getColony: ColonyNetworkClient.Caller<
    {
      id: number, // The ID of the colony.
    },
    {
      address: Address, // The address of the colony contract.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the total number of colonies on the network. The return value is also the ID of the last colony created.
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
      version: 'glider',
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
      version: 'glider',
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
      version: 'glider',
    },
  >;

  /*
  Get the address of the ENS registrar.
  */
  getENSRegistrarAddress: ColonyNetworkClient.Caller<
    {},
    {
      address: Address, // The address of the ENS registrar.
    },
    ColonyNetworkClient,
    {
      method: 'getENSRegistrar',
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.
  */
  getFeeInverse: ColonyNetworkClient.Caller<
    {},
    {
      feeInverse: BigNumber, // The inverse amount of the network fee.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
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
      version: 'glider',
    },
  >;

  /*
  Get the address of the mining resolver.
  */
  getMiningResolverAddress: ColonyNetworkClient.Caller<
    {},
    {
      address: Address, // The address of the mining resolver.
    },
    ColonyNetworkClient,
    {
      function: 'getMiningResolver',
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
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
      parentSkillId: number, // The ID of the parent skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
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
      version: 'glider',
    },
  >;

  /*
  Get the total number of addresses that are assigned a `RECOVERY` role.
  */
  getRecoveryRolesCount: ColonyNetworkClient.Caller<
    {},
    {
      count: number, // The total number of addresses that are assigned a `RECOVERY` role.
    },
    ColonyNetworkClient,
    {
      function: 'numRecoveryRoles',
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
    },
  >;

  /*
  Get replacement log entry that was set when the network was in recovery mode.
  */
  getReplacementReputationUpdateLogEntry: ColonyNetworkClient.Caller<
    {
      reputationMiningCycle: Address,
      id: number,
    },
    {
      user: Address,
      amount: BigNumber,
      skillId: number,
      colony: Address,
      nUpdates: number,
      nPreviousUpdates: number,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get whether any replacement log entries have been set for the supplied reputation mining cycle.
  */
  getReplacementReputationUpdateLogsExist: ColonyNetworkClient.Caller<
    {
      reputationMiningCycle: Address,
    },
    {
      logsExist: boolean,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the address of either the active or inactive reputation mining cycle. The active reputation mining cycle is the one currently under consideration by reputation miners. The inactive reputation cycle is the one with the log that is being appended.
  */
  getReputationMiningCycle: ColonyNetworkClient.Caller<
    {
      active: boolean, // A boolean indicating whether to get the active or inactive reputation mining cycle.
    },
    {
      address: Address, // The address of the reputation mining cycle.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the ID of the skill associated with reputation mining.
  */
  getReputationMiningSkillId: ColonyNetworkClient.Caller<
    {},
    {
      skillId: number, // The ID of the skill associated with reputation mining.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the root hash of the current reputation state tree.
  */
  getReputationRootHash: ColonyNetworkClient.Caller<
    {},
    {
      rootHash: string, // The root hash of the current reputation state tree.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get the number of nodes in the current reputation state tree.
  */
  getReputationRootHashNodeCount: ColonyNetworkClient.Caller<
    {},
    {
      nNodes: number, // The number of nodes in the current reputation state tree.
    },
    ColonyNetworkClient,
    {
      method: 'getReputationRootHashNNodes',
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Get information about a skill.
  */
  getSkill: ColonyNetworkClient.Caller<
    {
      skillId: number, // The ID of the skill.
    },
    {
      nParents: number, // The total number of parent skills.
      nChildren: number, // The total number of child skills.
      parents: Array<number>, // An array of parent skill ids.
      children: Array<number>, // An array of child skill ids.
      isGlobalSkill: boolean, // A boolean indicating whether or not the skill is a global skill.
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
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
      version: 'glider',
    },
  >;

  /*
  Get the token locking contract address.
  */
  getTokenLockingAddress: ColonyNetworkClient.Caller<
    {},
    {
      address: Address, // The address of the token locking contract.
    },
    ColonyNetworkClient,
    {
      method: 'getTokenLocking',
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Create an initial inactive reputation mining cycle.
  */
  initialiseReputationMining: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
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
      version: 'glider',
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
      version: 'glider',
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
      version: 'glider',
    },
  >;

  /*
  Register an ENS label for a user.
  */
  registerUserLabel: ColonyNetworkClient.Sender<
    {
      username: string, // The ENS label that will be registered for the user.
      orbitDBPath: ?string, // The path of the OrbitDB database associated with the user.
    },
    {
      UserLabelRegistered: UserLabelRegistered,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkENS.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Remove the `RECOVERY` role from an address. This function can only be called by an address assigned the `ROOT` role.
  */
  removeRecoveryRole: ColonyNetworkClient.Sender<
    {
      address: Address, // The address that will be unassigned a `RECOVERY` role.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
    },
  >;

  /*
  Set the inverse amount of the network fee. If the fee is 1% (or 0.01), the inverse amount will be 100.
  */
  setFeeInverse: ColonyNetworkClient.Sender<
    {
      feeInverse: BigNumber, // The inverse amount of the network fee.
    },
    {
      NetworkFeeInverseSet: NetworkFeeInverseSet,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Set the address for the mining resolver.
  */
  setMiningResolver: ColonyNetworkClient.Sender<
    {
      miningResolverAddress: Address, // The address that will be set for the mining resolver.
    },
    {
      MiningCycleResolverSet: MiningCycleResolverSet,
    },
    ColonyNetworkClient,
    {
      contract: 'ColonyNetwork.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Assign a `RECOVERY` role to an address. This function can only be called by an address assigned the `ROOT` role.
  */
  setRecoveryRole: ColonyNetworkClient.Sender<
    {
      address: Address, // The address that will be assigned a `RECOVERY` role.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
    },
  >;

  /*
  Set replacement log entry when the network is in recovery mode.
  */
  setReplacementReputationUpdateLogEntry: ColonyNetworkClient.Sender<
    {
      reputationMiningCycle: Address,
      id: number,
      user: Address,
      amount: BigNumber,
      skillId: number,
      colony: Address,
      nUpdates: number,
      nPreviousUpdates: number,
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Set the root hash of the reputation mining cycle.
  */
  setReputationRootHash: ColonyNetworkClient.Sender<
    {
      newHash: string,
      newNNodes: number,
      stakers: Array<Address>,
      reward: number,
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
    },
  >;

  /*
  Set the value for a storage slot while in recovery mode. This can only be called by an address assigned the `RECOVERY` role.
  */
  setStorageSlotRecovery: ColonyNetworkClient.Sender<
    {
      slot: number, // The ID of the storage slot that will be modified.
      value: HexString, // The hex string of data that will be set as the value.
    },
    {},
    ColonyNetworkClient,
    {
      contract: 'ContractRecovery.sol',
      interface: 'IRecovery.sol',
      version: 'glider',
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
      version: 'glider',
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
      version: 'glider',
    },
  >;

  /*
  Start the next reputation mining cycle.
  */
  startNextMiningCycle: ColonyNetworkClient.Sender<
    {},
    {},
    ColonyNetworkClient,
    {
      method: 'startNextCycle',
      contract: 'ColonyNetworkMining.sol',
      interface: 'IColonyNetwork.sol',
      version: 'glider',
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
      version: 'glider',
    },
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

  static get TokenLockingClient(): * {
    return TokenLockingClient;
  }

  /*
  Get the address of the `Colony` contract with the given `id`
  */
  async getColonyAddress(id: number) {
    assert(Number.isFinite(id), 'An ID parameter must be provided');
    const { address } = await this.getColony.call({ id });

    if (!isValidAddress(address))
      throw new Error(`Colony contract with ID ${id} could not be found`);

    return address;
  }

  /*
  Get an initialized ColonyClient for the `Colony` contract with the given `id`.
  */
  async getColonyClient(id: number) {
    assert(Number.isFinite(id), 'An ID parameter must be provided');
    const address = await this.getColonyAddress(id);
    return this.getColonyClientByAddress(address);
  }

  /*
  Get an initialized ColonyClient for the `Colony` contract with the given `contractAddress`.
  */
  async getColonyClientByAddress(contractAddress: Address) {
    const tokenLockingClient = await this.getTokenLockingClient();
    const colonyClient = new this.constructor.ColonyClient({
      adapter: this.adapter,
      networkClient: this,
      query: { contractAddress },
      tokenLockingClient,
      verbose: this.verbose,
    });
    await colonyClient.init();
    return colonyClient;
  }

  /*
  Get an initialized ColonyClient for the Meta Colony.
  */
  async getMetaColonyClient() {
    const { address } = await this.getMetaColonyAddress.call();

    if (!isValidAddress(address))
      throw new Error(`MetaColony contract could not be found`);

    return this.getMetaColonyClientByAddress(address);
  }

  /*
  Get an initialized ColonyClient for the `Colony` contract with the given `contractAddress`.
  */
  async getMetaColonyClientByAddress(contractAddress: Address) {
    const tokenLockingClient = await this.getTokenLockingClient();
    const metaColonyClient = new this.constructor.ColonyClient({
      adapter: this.adapter,
      networkClient: this,
      query: { contractAddress, contractName: 'IMetaColony' },
      tokenLockingClient,
      verbose: this.verbose,
    });
    await metaColonyClient.init();
    return metaColonyClient;
  }

  /*
  Get an initialized TokenLockingClient.
  */
  async getTokenLockingClient() {
    const { address } = await this.getTokenLockingAddress.call();

    if (!isValidAddress(address))
      throw new Error(`TokenLocking contract could not be found`);

    return this.getTokenLockingClientByAddress(address);
  }

  /*
  Get an initialized TokenLockingClient for the `TokenLocking` contract with the given `contractAddress`.
  */
  async getTokenLockingClientByAddress(contractAddress: Address) {
    const tokenLockingClient = new this.constructor.TokenLockingClient({
      adapter: this.adapter,
      networkClient: this,
      query: { contractAddress },
      verbose: this.verbose,
    });
    await tokenLockingClient.init();
    return tokenLockingClient;
  }

  initializeContractMethods() {
    addRecoveryMethods(this);

    // Custom callers
    this.lookupRegisteredENSDomain = new LookupRegisteredENSDomain({
      client: this,
      name: 'lookupRegisteredENSDomain',
      functionName: 'lookupRegisteredENSDomain',
      input: [['ensAddress', 'address']],
      output: [['domain', 'string']],
    });

    // Custom senders
    this.createToken = new CreateToken({ client: this });

    this.createColony = new CreateColony({
      client: this,
      name: 'createColony',
      functionName: 'createColony',
      input: [
        ['tokenAddress', 'address'],
        ['version', 'number'],
        ['colonyName', 'string'],
        ['orbitdb', 'string'],
        ['useExtensionManager', 'boolean'],
      ],
      defaultValues: {
        version: 0,
        colonyName: '',
        orbitdb: '',
        useExtensionManager: false,
      },
    });

    // Events
    this.addEvent('AuctionCreated', [
      ['auction', 'address'],
      ['token', 'anyAddress'],
      ['quantity', 'bigNumber'],
    ]);
    this.addEvent('ColonyAdded', [
      ['colonyId', 'number'],
      ['colonyAddress', 'address'],
      ['tokenAddress', 'anyAddress'],
    ]);
    this.addEvent('ColonyLabelRegistered', [
      ['colony', 'address'],
      ['label', 'string'],
    ]);
    this.addEvent('ColonyNetworkInitialised', [['resolver', 'address']]);
    this.addEvent('ColonyVersionAdded', [
      ['version', 'number'],
      ['resolver', 'address'],
    ]);
    this.addEvent('MetaColonyCreated', [
      ['metaColony', 'address'],
      ['token', 'anyAddress'],
      ['rootSkillId', 'number'],
    ]);
    this.addEvent('MiningCycleResolverSet', [
      ['miningCycleResolver', 'address'],
    ]);
    this.addEvent('NetworkFeeInverseSet', [['feeInverse', 'number']]);
    this.addEvent('RecoveryRoleSet', [
      ['address', 'anyAddress'],
      ['setTo', 'boolean'],
    ]);
    this.addEvent('ReputationMiningCycleComplete', [
      ['hash', 'hexString'],
      ['nNodes', 'number'],
    ]);
    this.addEvent('ReputationMiningInitialised', [
      ['inactiveReputationMiningCycle', 'address'],
    ]);
    this.addEvent('ReputationRootHashSet', [
      ['newHash', 'hexString'],
      ['newNNodes', 'number'],
      ['stakers', 'address'],
      ['reward', 'bigNumber'],
    ]);
    this.addEvent('SkillAdded', [
      ['skillId', 'number'],
      ['parentSkillId', 'number'],
    ]);
    this.addEvent('TokenLockingAddressSet', [['tokenLocking', 'address']]);
    this.addEvent('UserLabelRegistered', [
      ['user', 'address'],
      ['label', 'string'],
    ]);

    // Callers
    this.addCaller('calculateMinerWeight', {
      input: [['timeStaked', 'number'], ['submissionIndexed', 'number']],
      output: [['minerWeight', 'number']],
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
    this.addCaller('getChildSkillId', {
      input: [['skillId', 'number'], ['childSkillIndex', 'number']],
      output: [['childSkillId', 'number']],
    });
    this.addCaller('getColony', {
      input: [['id', 'number']],
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
    this.addCaller('getENSRegistrarAddress', {
      functionName: 'getENSRegistrar',
      output: [['address', 'address']],
    });
    this.addCaller('getFeeInverse', {
      output: [['feeInverse', 'bigNumber']],
    });
    this.addCaller('getMetaColonyAddress', {
      functionName: 'getMetaColony',
      output: [['address', 'address']],
    });
    this.addCaller('getMiningResolverAddress', {
      functionName: 'getMiningResolver',
      output: [['address', 'address']],
    });
    this.addCaller('getParentSkillId', {
      input: [['skillId', 'number'], ['parentSkillIndex', 'number']],
      output: [['parentSkillId', 'number']],
    });
    this.addCaller('getProfileDBAddress', {
      input: [['nameHash', 'hexString']],
      output: [['orbitDBAddress', 'string']],
    });
    this.addCaller('getReplacementReputationUpdateLogEntry', {
      input: [['reputationMiningCycle', 'address'], ['id', 'number']],
      output: [
        ['user', 'address'],
        ['amount', 'bigNumber'],
        ['skillId', 'number'],
        ['colony', 'address'],
        ['nUpdates', 'number'],
        ['nPreviousUpdates', 'number'],
      ],
    });
    this.addCaller('getReplacementReputationUpdateLogsExist', {
      input: [['reputationMiningCycle', 'address']],
      output: [['logsExist', 'boolean']],
    });
    this.addCaller('getReputationMiningCycle', {
      input: [['active', 'boolean']],
      output: [['address', 'address']],
    });
    this.addCaller('getReputationMiningSkillId', {
      output: [['skillId', 'number']],
    });
    this.addCaller('getReputationRootHash', {
      output: [['rootHash', 'string']],
    });
    this.addCaller('getReputationRootHashNodeCount', {
      functionName: 'getReputationRootHashNNodes',
      output: [['nNodes', 'number']],
    });
    this.addCaller('getSkill', {
      input: [['skillId', 'number']],
      output: [
        ['nParents', 'number'],
        ['nChildren', 'number'],
        ['parents', '[number]'],
        ['children', '[number]'],
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
    this.addCaller('getTokenLockingAddress', {
      functionName: 'getTokenLocking',
      output: [['address', 'address']],
    });
    this.addCaller('isColony', {
      input: [['colony', 'address']],
      output: [['isColony', 'boolean']],
    });

    // Senders
    this.addSender('addColonyVersion', {
      input: [['version', 'number'], ['resolver', 'address']],
    });
    this.addSender('addSkill', {
      input: [['parentSkillId', 'number']],
    });
    this.addSender('appendReputationUpdateLog', {
      input: [
        ['user', 'address'],
        ['amount', 'bigNumber'],
        ['skillId', 'number'],
      ],
    });
    this.addSender('createMetaColony', {
      input: [['tokenAddress', 'address']],
    });
    this.addSender('deprecateSkill', {
      input: [['skillId', 'number']],
    });
    this.addSender('initialiseReputationMining', {});
    this.addSender('registerUserLabel', {
      input: [['username', 'string'], ['orbitDBPath', 'string']],
      defaultValues: {
        orbitDBPath: '',
      },
    });
    this.addSender('setMiningResolver', {
      input: [['miningResolverAddress', 'address']],
    });
    this.addSender('setTokenLocking', {
      input: [['tokenLockingAddress', 'address']],
    });
    this.addSender('setFeeInverse', {
      input: [['feeInverse', 'bigNumber']],
    });
    this.addSender('setReplacementReputationUpdateLogEntry', {
      input: [
        ['reputationMiningCycle', 'address'],
        ['id', 'number'],
        ['user', 'address'],
        ['amount', 'bigNumber'],
        ['skillId', 'number'],
        ['colony', 'address'],
        ['nUpdates', 'number'],
        ['nPreviousUpdates', 'number'],
      ],
    });
    this.addSender('setReputationRootHash', {
      input: [
        ['newHash', 'string'],
        ['newNNodes', 'number'],
        ['stakers', '[address]'],
        ['reward', 'number'],
      ],
    });
    this.addSender('setupRegistrar', {
      input: [['ens', 'address'], ['rootNode', 'string']],
    });
    this.addSender('startNextMiningCycle', {});
    this.addSender('startTokenAuction', {
      input: [['tokenAddress', 'anyAddress']],
    });
  }

  /*
  Get the reputation of an address within a colony for the given `skillId`.
  */
  async getReputation({
    colonyAddress,
    skillId,
    address,
  }: {
    colonyAddress: Address,
    skillId: number,
    address: Address,
  } = {}) {
    assert(isValidAddress(colonyAddress), 'colonyAddress must be an address');
    assert(Number.isFinite(skillId), 'skillId must be a number');
    assert(isValidAddress(address), 'address must be an address');

    // Throw error if private network
    if (typeof this.network === 'undefined') {
      throw new Error('This method is not supported on a private network');
    }

    // Throw error if not goerli or mainnet
    if (
      this.network !== 'goerli' &&
      this.network !== 'mainnet' &&
      this.network !== 'homestead'
    ) {
      throw new Error('This method is only supported on goerli or mainnet');
    }

    // Get the current reputation root hash
    const { rootHash } = await this.getReputationRootHash.call();

    // Fetch current reputation
    const response = await fetch(
      `https://colony.io/reputation/${
        this.network
      }/${rootHash}/${colonyAddress}/${skillId}/${address}`,
    );

    return response.json();
  }
}

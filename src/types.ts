import type { Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { ColonyClientV1 } from './clients/Core/ColonyClientV1';
import { ColonyClientV2 } from './clients/Core/ColonyClientV2';
import { ColonyClientV3 } from './clients/Core/ColonyClientV3';
import { ColonyClientV4 } from './clients/Core/ColonyClientV4';
import { ColonyClientV5 } from './clients/Core/ColonyClientV5';
import { ColonyClientV6 } from './clients/Core/ColonyClientV6';
import { ColonyClientV7 } from './clients/Core/ColonyClientV7';
import { ColonyClientV8 } from './clients/Core/ColonyClientV8';
import { ColonyClientV9 } from './clients/Core/ColonyClientV9';
import { TokenClient as TokenContractClient } from './clients/TokenClient';
import { TokenLockingClient as TokenLockingContractClient } from './clients/TokenLockingClient';
import { ExtensionClient } from './clients/Extensions/colonyContractExtensions';

export type SignerOrProvider = Signer | Provider;

export type ColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4
  | ColonyClientV5
  | ColonyClientV6
  | ColonyClientV7
  | ColonyClientV8
  | ColonyClientV9;

export type ContractClient =
  | ColonyClient
  | ColonyNetworkClient
  | ExtensionClient
  | TokenContractClient
  | TokenLockingContractClient;

export enum ReputationMinerEndpoints {
  UserReputationInSingleDomainWithoutProofs = `UserReputationInSingleDomainWithoutProofs`,
  UserReputationInSingleDomainWithProofs = `UserReputationInSingleDomainWithProofs`,
  UserReputationInAllDomains = 'UserReputationInAllDomains',
  UsersWithReputationInColony = 'UsersWithReputationInColony',
}

/**
 * Supported Ethereum networks. Local refers to the locally deployed contracts when developing.
 */
export enum Network {
  Mainnet = 'mainnet',
  Goerli = 'goerli',
  Local = 'local',
  Xdai = 'xdai',
  XdaiFork = 'xdaiFork',
}

/**
 * Available roles in the colonyNetwork. Find out more here: https://colony.io/dev/docs/colonynetwork/docs-modular-permissions
 */
export enum ColonyRole {
  Recovery = 0,
  Root = 1,
  Arbitration = 2,
  Architecture = 3,
  ArchitectureSubdomain_DEPRECATED = 4,
  Funding = 5,
  Administration = 6,
}

/**
 * All roles a user has in `domainId`
 */
export type DomainRoles = {
  domainId: number;
  roles: ColonyRole[];
};
/**
 * All domains the user with `address` has roles in
 */
export type UserRoles = {
  address: string;
  domains: DomainRoles[];
};
/**
 * All users that have roles in a colony
 */
export type ColonyRoles = UserRoles[];

/**
 * The type for a specific contract-client (extended ethers `Contract`).
 * This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)
 *
 * @remarks
 * Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to
 */
export enum ClientType {
  CoinMachineClient = 'CoinMachineClient',
  ColonyClient = 'ColonyClient',
  NetworkClient = 'NetworkClient',
  OneTxPaymentClient = 'OneTxPaymentClient',
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
  VotingReputationClient = 'VotingReputationClient',
  WhitelistClient = 'WhitelistClient',
}

/**
 * We support different TokenClients, especially the ColonyToken client with
 * its advanced functionality (to `.mint()` tokens for example). Other tokens
 * require certain adjustments (like the original Dai (SAI))
 */
export enum TokenClientType {
  Colony = 'Colony',
  Erc20 = 'Erc20',
  Sai = 'Sai',
}

/*
 * @TODO Complete this list of events enum
 *
 * A good idea would be type it dynamically from the latest IColony ABI
 * Something like this:
 * ```
 * function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
 *   return o.reduce((res, key) => {
 *     res[key] = key;
 *     return res;
 *   }, Object.create(null));
 * }
 * let dynamicArrayJSON = [ 'RED', 'BLUE', 'GREEN' ]
 * const Colors = strEnum( dynamicArrayJSON )
 * ```
 * To make this work properly you'll need to do the same thing we do with Colony
 * Clients and use the `getAllAbiEvents` function to get events from all versions
 * of the contracts
 */
export enum IColonyEvents {
  ColonyRoleSet = 'ColonyRoleSet',
  RecoveryRoleSet = 'RecoveryRoleSet',
}

/*
 * The various states a Motion might find itself in
 */
export enum MotionState {
  Null = 0,
  Staking = 1,
  Submit = 2,
  Reveal = 3,
  Closed = 4,
  Finalizable = 5,
  Finalized = 6,
  Failed = 7,
}

/**
 * Funding pots can have different types in a colony.
 * See [here](https://colony.io/dev/docs/colonynetwork/whitepaper-tldr-pots-and-funding) for more details
 */
export enum FundingPotAssociatedType {
  Unassigned = 0,
  Domain = 1,
  Task = 2,
  Payment = 3,
  Expenditure = 4,
}

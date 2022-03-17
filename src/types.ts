import type { Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

import { AnyColonyClient } from './clients/Core/exports';
import { ExtensionClient } from './clients/Extensions/exports';
import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { TokenClient as TokenContractClient } from './clients/TokenClient';
import { TokenLockingClient as TokenLockingContractClient } from './clients/TokenLockingClient';

export type SignerOrProvider = Signer | Provider;

export type ContractClient =
  | AnyColonyClient
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
  Custom = 'custom',
  Xdai = 'xdai',
  XdaiFork = 'xdaiFork',
}

/**
 * Available roles in the colonyNetwork. Find out more here: https://colony.io/dev/docs/colonynetwork/docs-modular-permissions
 */
export enum ColonyRole {
  Recovery,
  Root,
  Arbitration,
  Architecture,
  ArchitectureSubdomain_DEPRECATED,
  Funding,
  Administration,
  LAST_ROLE,
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
  UtilsClient = 'UtilsClient',
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
  Null,
  Staking,
  Submit,
  Reveal,
  Closed,
  Finalizable,
  Finalized,
  Failed,
}

/**
 * Funding pots can have different types in a colony.
 * See [here](https://colony.io/dev/docs/colonynetwork/whitepaper-tldr-pots-and-funding) for more details
 */
export enum FundingPotAssociatedType {
  Unassigned,
  Domain,
  Task,
  Payment,
  Expenditure,
}

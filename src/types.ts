import type { Overrides, Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

import { AnyColonyClient } from './clients/Core/exports';
import { ExtensionClient } from './clients/Extensions/exports';
import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { TokenClient as TokenContractClient } from './clients/TokenClient';
import { TokenLockingClient as TokenLockingContractClient } from './clients/TokenLockingClient';
import { EventsClient } from '.';

export type SignerOrProvider = Signer | Provider;

export type ContractClient =
  | AnyColonyClient
  | ColonyNetworkClient
  | EventsClient
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
 * Supported Ethereum networks. Use `Custom` if you'd like to bring your own deployment (e.g. local)
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

/**
 * These are the various states a Motion might find itself in
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
 * See [here](https://github.com/JoinColony/colonyNetwork/blob/develop/docs/_TLDR_Pots.md#types-of-pots) for more details
 */
export enum FundingPotAssociatedType {
  Unassigned,
  Domain,
  Task,
  Payment,
  Expenditure,
}

/** @internal */
export type TxOverrides = Overrides & { from?: string | Promise<string> };

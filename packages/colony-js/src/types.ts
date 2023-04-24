import type { Overrides, Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';
import type {
  CoinMachineEvents,
  EvaluatedExpenditureEvents,
  IColonyEvents,
  IColonyNetworkEvents,
  IVotingReputationEvents,
  MetaTxTokenEvents,
  OneTxPaymentEvents,
  StakedExpenditureEvents,
  StreamingPaymentsEvents,
  TokenSupplierEvents,
  VotingReputationEvents,
  WhitelistEvents,
} from '@colony/events';
import type {
  TokenClient as TokenContractClient,
  TokenLockingClient as TokenLockingContractClient,
} from '@colony/tokens';

import type { ColonyRole } from './constants';

import { AnyColonyClient } from './clients/Core/exports';
import { ExtensionClient } from './clients/Extensions/exports';
import { ColonyNetworkClient } from './clients/ColonyNetworkClient';

export type SignerOrProvider = Signer | Provider;

export type EventsClient =
  | CoinMachineEvents
  | EvaluatedExpenditureEvents
  | IColonyEvents
  | IColonyNetworkEvents
  | IVotingReputationEvents
  | MetaTxTokenEvents
  | OneTxPaymentEvents
  | StakedExpenditureEvents
  | StreamingPaymentsEvents
  | TokenSupplierEvents
  | VotingReputationEvents
  | WhitelistEvents;

export type ContractClient =
  | AnyColonyClient
  | ColonyNetworkClient
  | EventsClient
  | ExtensionClient
  | TokenContractClient
  | TokenLockingContractClient;

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

/** @internal */
export type TxOverrides = Overrides & { from?: string | Promise<string> };

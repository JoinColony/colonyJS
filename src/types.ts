import type { Overrides, Signer } from 'ethers';
import type { Provider } from '@ethersproject/abstract-provider';

import type { ColonyRole } from './constants';

import { AnyColonyClient } from './clients/Core/exports';
import { ExtensionClient } from './clients/Extensions/exports';
import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { TokenClient as TokenContractClient } from './tokens/clients/TokenClient';
import { TokenLockingClient as TokenLockingContractClient } from './tokens/clients/TokenLockingClient';

import {
  CoinMachineEvents,
  EvaluatedExpenditureEvents,
  IColonyEvents,
  IColonyNetworkEvents,
  IVotingReputationEvents,
  MetaTxTokenEvents,
  OneTxPaymentEvents,
  StagedExpenditureEvents,
  StakedExpenditureEvents,
  StreamingPaymentsEvents,
  TokenSupplierEvents,
  VotingReputationEvents,
  WhitelistEvents,
} from './contracts/events';

export type SignerOrProvider = Signer | Provider;

export type EventsClient =
  | CoinMachineEvents
  | EvaluatedExpenditureEvents
  | IColonyEvents
  | IColonyNetworkEvents
  | IVotingReputationEvents
  | MetaTxTokenEvents
  | OneTxPaymentEvents
  | StagedExpenditureEvents
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
export type TxOverrides = Overrides & { from?: string };

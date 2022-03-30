/* eslint-disable camelcase */
import {
  CoinMachineEvents,
  CoinMachineEvents__factory,
  IColonyEvents,
  IColonyEvents__factory,
  OneTxPaymentEvents,
  OneTxPaymentEvents__factory,
  VotingReputationEvents,
  VotingReputationEvents__factory,
  WhitelistEvents,
  WhitelistEvents__factory,
} from './contracts';
/* eslint-enable camelcase */

export type { ColonyDataTypes } from './contracts/IColony/exports';

export * from './constants';
export * from './helpers';
export * from './types';

export { formatColonyRoles } from './utils';

// Entry points and types for Core and Extensions
export * from './clients/Core/exports';
export * from './clients/Extensions/exports';

export {
  ColonyNetworkClient,
  default as getColonyNetworkClient,
} from './clients/ColonyNetworkClient';

export {
  TokenClient,
  ColonyTokenClient,
  Erc20TokenClient,
  DaiTokenClient,
} from './clients/TokenClient';

/* eslint-disable camelcase */
export {
  CoinMachineEvents as CoinMachineEventsClient,
  CoinMachineEvents__factory as CoinMachineEventsFactory,
  IColonyEvents as IColonyEventsClient,
  IColonyEvents__factory as IColonyEventsFactory,
  OneTxPaymentEvents as OneTxPaymentEventsClient,
  OneTxPaymentEvents__factory as OneTxPaymentEventsFactory,
  VotingReputationEvents as VotingReputationEventsClient,
  VotingReputationEvents__factory as VotingReputationEventsFactory,
  WhitelistEvents as WhitelistEventsClient,
  WhitelistEvents__factory as WhitelistEventsFactory,
};
/* eslint-enable camelcase */

export type EventsClient =
  | CoinMachineEvents
  | IColonyEvents
  | OneTxPaymentEvents
  | VotingReputationEvents
  | WhitelistEvents;

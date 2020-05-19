export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient';
export { default as getTokenClient } from './clients/TokenClient';
export * from './constants';

export type {
  AnyColonyClient as ColonyClient,
  ExtendedIColonyNetwork as ColonyNetworkClient,
} from './clients/ColonyNetworkClient';
export type { TransactionOverrides } from './contracts/1';
export type { Token as TokenClient } from './contracts/1/Token';

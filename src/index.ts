export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient';
export { default as getTokenClient } from './clients/TokenClient';
export * from './constants';

export type {
  AnyColonyClient as ColonyClient,
  ExtendedIColonyNetwork as ColonyNetworkClient,
} from './clients/ColonyNetworkClient';
export type { Token as TokenClient } from './contracts/Token/Token';

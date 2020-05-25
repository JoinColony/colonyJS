import type { Token } from './contracts/1/Token';
import type {
  AnyColonyClient,
  ExtendedIColonyNetwork,
} from './clients/ColonyNetworkClient';

export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient';
export { default as getTokenClient } from './clients/TokenClient';
export * from './constants';
export type { TransactionOverrides } from './contracts/1';
export type ColonyClient = AnyColonyClient;
export type NetworkClient = ExtendedIColonyNetwork;
export type TokenClient = Token;
export type ContractClient = ColonyClient | NetworkClient | TokenClient;

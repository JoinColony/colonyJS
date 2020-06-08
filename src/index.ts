/* eslint-disable import/first */
require('isomorphic-fetch');

import type { Token } from './contracts/1/Token';
import type {
  AnyColonyClient,
  ExtendedIColonyNetwork,
} from './clients/ColonyNetworkClient';
import { ExtendedOneTxPaymentDeployer } from './clients/OneTxPaymentDeployerClient';
import { ExtendedOneTxPayment } from './clients/OneTxPaymentClient';
import type { TransactionOverrides as TxOverrides } from './contracts/1';

export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient';
export { default as getTokenClient } from './clients/TokenClient';

export * from './constants';
export * from './helpers';

export type ColonyClient = AnyColonyClient;
export type NetworkClient = ExtendedIColonyNetwork;
export type TokenClient = Token;
export type OneTxPaymentFactoryClient = ExtendedOneTxPaymentDeployer;
export type OneTxPaymentClient = ExtendedOneTxPayment;
export type ContractClient =
  | ColonyClient
  | NetworkClient
  | OneTxPaymentClient
  | OneTxPaymentFactoryClient
  | TokenClient;
export type TransactionOverrides = TxOverrides;

/* eslint-enable import/first */

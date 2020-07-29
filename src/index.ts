/* eslint-disable import/first */
require('isomorphic-fetch');

import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { ColonyClientV1 } from './clients/Colony/ColonyClientV1';
import { ColonyClientV2 } from './clients/Colony/ColonyClientV2';
import { ColonyClientV3 } from './clients/Colony/ColonyClientV3';
import { ColonyClientV4 } from './clients/Colony/ColonyClientV4';
import { OneTxPaymentFactoryClient } from './clients/OneTxPaymentDeployerClient';
import { OneTxPaymentClient } from './clients/OneTxPaymentClient';
import { TokenClient } from './clients/TokenClient';
import { TokenLockingClient } from './clients/TokenLockingClient';

export { ColonyNetworkClient } from './clients/ColonyNetworkClient';
export { ColonyClientV1 } from './clients/Colony/ColonyClientV1';
export { ColonyClientV2 } from './clients/Colony/ColonyClientV2';
export { ColonyClientV3 } from './clients/Colony/ColonyClientV3';
export { ColonyClientV4 } from './clients/Colony/ColonyClientV4';
export { OneTxPaymentFactoryClient } from './clients/OneTxPaymentDeployerClient';
export { OneTxPaymentClient } from './clients/OneTxPaymentClient';
export {
  TokenClient,
  ColonyTokenClient,
  Erc20TokenClient,
  DaiTokenClient,
} from './clients/TokenClient';
export { TokenLockingClient } from './clients/TokenLockingClient';

export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient';
export { default as getTokenClient } from './clients/TokenClient';

export * from './constants';
export * from './helpers';

export type ColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4;

export type ContractClient =
  | ColonyClient
  | ColonyNetworkClient
  | OneTxPaymentClient
  | OneTxPaymentFactoryClient
  | TokenClient
  | TokenLockingClient;

export type { TransactionOverrides } from './contracts/1';

/* eslint-enable import/first */

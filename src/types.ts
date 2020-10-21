import { BigNumber } from 'ethers/utils';

import { Extension } from './constants';

import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { ColonyClientV1 } from './clients/Colony/ColonyClientV1';
import { ColonyClientV2 } from './clients/Colony/ColonyClientV2';
import { ColonyClientV3 } from './clients/Colony/ColonyClientV3';
import { ColonyClientV4 } from './clients/Colony/ColonyClientV4';
import { ColonyClientV5 } from './clients/Colony/ColonyClientV5';
import { OneTxPaymentClient } from './clients/OneTxPaymentClient';
import { CoinMachineClient } from './clients/CoinMachineClient';
import { TokenClient } from './clients/TokenClient';
import { TokenLockingClient } from './clients/TokenLockingClient';

export type ColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4
  | ColonyClientV5;

// All of the valid extensions
export type ExtensionClients = {
  [Extension.CoinMachine]: CoinMachineClient;
  [Extension.OneTxPayment]: OneTxPaymentClient;
};

export type ExtensionClient = ExtensionClients[keyof ExtensionClients];

export type ContractClient =
  | ColonyClient
  | ColonyNetworkClient
  | ExtensionClient
  | TokenClient
  | TokenLockingClient;

export type { TransactionOverrides } from './contracts/1';

export interface ReputationOracleResponse {
  branchMask: string;
  siblings: string[];
  key: string;
  value: string;
  reputationAmount: BigNumber;
}

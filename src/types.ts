import { BigNumber } from 'ethers/utils';

import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { ColonyClientV1 } from './clients/Colony/ColonyClientV1';
import { ColonyClientV2 } from './clients/Colony/ColonyClientV2';
import { ColonyClientV3 } from './clients/Colony/ColonyClientV3';
import { ColonyClientV4 } from './clients/Colony/ColonyClientV4';
import { ColonyClientV5 } from './clients/Colony/ColonyClientV5';
import { ColonyClientV6 } from './clients/Colony/ColonyClientV6';
import { TokenClient } from './clients/TokenClient';
import { TokenLockingClient } from './clients/TokenLockingClient';
import { ExtensionClient } from './clients/Colony/colonyContractExtensions';

export type ColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4
  | ColonyClientV5
  | ColonyClientV6;

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

export interface ReputationOracleAllMembersResponse {
  addresses: string[];
}

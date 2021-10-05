import { BigNumber } from 'ethers/utils';

import { ColonyNetworkClient } from './clients/ColonyNetworkClient';
import { ColonyClientV1 } from './clients/Colony/ColonyClientV1';
import { ColonyClientV2 } from './clients/Colony/ColonyClientV2';
import { ColonyClientV3 } from './clients/Colony/ColonyClientV3';
import { ColonyClientV4 } from './clients/Colony/ColonyClientV4';
import { ColonyClientV5 } from './clients/Colony/ColonyClientV5';
import { ColonyClientV6 } from './clients/Colony/ColonyClientV6';
import { ColonyClientV7 } from './clients/Colony/ColonyClientV7';
import { ColonyClientV8 } from './clients/Colony/ColonyClientV8';
import { ColonyClientV9 } from './clients/Colony/ColonyClientV9';
import { TokenClient } from './clients/TokenClient';
import { TokenLockingClient } from './clients/TokenLockingClient';
import { ExtensionClient } from './clients/Extensions/colonyContractExtensions';

export type ColonyClient =
  | ColonyClientV1
  | ColonyClientV2
  | ColonyClientV3
  | ColonyClientV4
  | ColonyClientV5
  | ColonyClientV6
  | ColonyClientV7
  | ColonyClientV8
  | ColonyClientV9;

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

export interface ReputationOracleSkillsResponse {
  skill_id: number;
  reputationAmount: string;
}

export interface ReputationOracleAllSkillsResponse {
  reputations: ReputationOracleSkillsResponse[];
}

export interface ReputationOracleAllMembersResponse {
  addresses: string[];
}

/*
 * @TODO Complete this list of events enum
 *
 * A good idea would be type it dynamically from the latest IColony ABI
 * Something like this:
 * ```
 * function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
 *   return o.reduce((res, key) => {
 *     res[key] = key;
 *     return res;
 *   }, Object.create(null));
 * }
 * let dynamicArrayJSON = [ 'RED', 'BLUE', 'GREEN' ]
 * const Colors = strEnum( dynamicArrayJSON )
 * ```
 * To make this work properly you'll need to do the same thing we do with Colony
 * Clients and use the `getAllAbiEvents` function to get events from all versions
 * of the contracts
 */
export enum IColonyEvents {
  ColonyRoleSet = 'ColonyRoleSet',
  RecoveryRoleSet = 'RecoveryRoleSet',
}

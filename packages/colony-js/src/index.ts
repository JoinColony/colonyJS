export type { ContractReceipt } from 'ethers';

export const LATEST_TAG = 'glwss4';

export * from '@colony/core';
export * from '@colony/tokens';
export { ClientType as ClientTypeTokens } from '@colony/tokens';

export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient.js';

export * from './constants.js';
export { ClientType } from './constants.js';

export * from './helpers.js';
export * from './types.js';

// Entry points and types for Core and Extensions
export * from './clients/Core/exports.js';
export * from './clients/Extensions/exports.js';

export type {
  ColonyNetworkClient,
  NetworkClientOptions,
} from './clients/ColonyNetworkClient.js';

export { IBasicMetaTransaction } from './contracts/index.js';

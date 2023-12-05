// Attention: always adjust to newest versions!
export const LATEST_TAG = 'hmwss';
export { IColony__factory as ColonyFactory } from './contracts/IColony/14/index.js';
export { IVotingReputation__factory as VotingReputationFactory } from './contracts/IVotingReputation/10/index.js';

export * from '@colony/core';
export * from '@colony/tokens';
export { ClientType as ClientTypeTokens } from '@colony/tokens';

export { default as getColonyNetworkClient } from './clients/ColonyNetworkClient.js';
export { IColonyNetwork__factory as ColonyNetworkFactory } from './contracts/index.js';

export * from './constants.js';
export { ClientType } from './constants.js';

export * from './helpers.js';
export * from './types.js';

// Entry points and types for Core and Extensions
export * from './clients/Core/exports.js';
export * from './clients/Extensions/exports.js';

// Export some types
export type {
  ColonyNetworkClient,
  NetworkClientOptions,
} from './clients/ColonyNetworkClient.js';

export type { ContractReceipt } from 'ethers';

export type { IBasicMetaTransaction } from './contracts/index.js';

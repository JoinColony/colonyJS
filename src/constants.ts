import { Network } from './types';

/**
 * Addresses of the deployed ColonyNetwork EtherRouter contracts in all networks
 */
export const COLONY_NETWORK_ADDRESSES = {
  [Network.Mainnet]: '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  [Network.Goerli]: '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  [Network.Xdai]: '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  [Network.XdaiFork]: '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  [Network.Custom]: undefined,
};

/**
 * The id of the root-domain in all colonies
 */
export const ROOT_DOMAIN_ID = 1;

/**
 * HTTP endpoint of the official colony reputation oracle
 */
export const REPUTATION_ORACLE_ENDPOINT = 'https://colony.io/reputation';

/**
 * Token addresses to identify tokens that need special treatment
 */
export const tokenAddresses = {
  SAI: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
};

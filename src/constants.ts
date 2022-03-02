import { Network } from './types';

/**
 * Addresses of the deployed ColonyNetwork EtherRouter contracts in all networks
 */
export const COLONY_NETWORK_ADDRESSES = {
  [Network.Mainnet]: '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  [Network.Goerli]: '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  [Network.Xdai]: '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  [Network.XdaiFork]: '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  [Network.Local]: undefined,
};

/**
 * Addresses of the deployed OneTxPaymentFactory extension contracts in all networks
 */
export const ONE_TX_PAYMENT_FACTORY_ADDRESSES = {
  [Network.Mainnet]: '0x6fb63009e3e03cbf6917647d64ad81939f267067',
  [Network.Goerli]: '0xe4aaf13b6a3d84d9d025ef1e8aa1873ecb027322',
  [Network.Xdai]: '0x7DEB9d116D77F076788c0c377477877848e67055',
  [Network.XdaiFork]: '0x7DEB9d116D77F076788c0c377477877848e67055',
  [Network.Local]: undefined,
};

/**
 * Addresses of the deployed CoinMachineFactory extension contracts in all networks
 */
export const COIN_MACHINE_FACTORY_ADDRESSES = {
  [Network.Mainnet]: '0xbab00',
  [Network.Goerli]: '0xbab0',
  [Network.Xdai]: '0xbab000',
  [Network.XdaiFork]: '0xbaffff',
  [Network.Local]: undefined,
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

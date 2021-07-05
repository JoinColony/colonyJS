/**
 * Supported Ethereum networks. Local refers to the locally deployed contracts when developing.
 */
export enum Network {
  Mainnet = 'mainnet',
  Goerli = 'goerli',
  Local = 'local',
  Xdai = 'xdai',
  XdaiFork = 'xdaiFork',
}

/**
 * Available roles in the colonyNetwork. Find out more here: https://colony.io/dev/docs/colonynetwork/docs-modular-permissions
 */
export enum ColonyRole {
  Recovery = 0,
  Root = 1,
  Arbitration = 2,
  Architecture = 3,
  // eslint-disable-next-line @typescript-eslint/camelcase
  ArchitectureSubdomain_DEPRECATED = 4,
  Funding = 5,
  Administration = 6,
}

/**
 * All roles a user has in `domainId`
 */
export type DomainRoles = {
  domainId: number;
  roles: ColonyRole[];
};
/**
 * All domains the user with `address` has roles in
 */
export type UserRoles = {
  address: string;
  domains: DomainRoles[];
};
/**
 * All users that have roles in a colony
 */
export type ColonyRoles = UserRoles[];

/**
 * The type for a specific contract-client (extended ethers `Contract`).
 * This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)
 *
 * @remarks
 * Every contract-client in ColonyJS needs to have a clientType property which a value of this enum needs to be assigned to
 */
export enum ClientType {
  CoinMachineClient = 'CoinMachineClient',
  ColonyClient = 'ColonyClient',
  NetworkClient = 'NetworkClient',
  OneTxPaymentClient = 'OneTxPaymentClient',
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
  VotingReputationClient = 'VotingReputationClient',
}

/**
 * We support different TokenClients, especially the ColonyToken client with
 * its advanced functionality (to `.mint()` tokens for example). Other tokens
 * require certain adjustments (like the original Dai (SAI))
 */
export enum TokenClientType {
  Colony = 'Colony',
  Erc20 = 'Erc20',
  Sai = 'Sai',
}

/**
 * Addresses of the deployed ColonyNetwork EtherRouter contracts in all networks
 */
export const colonyNetworkAddresses = {
  [Network.Mainnet]: '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  [Network.Goerli]: '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  [Network.Xdai]: '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  [Network.XdaiFork]: '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  [Network.Local]: undefined,
};

/**
 * Addresses of the deployed OneTxPaymentFactory extension contracts in all networks
 */
export const oneTxPaymentFactoryAddresses = {
  [Network.Mainnet]: '0x6fb63009e3e03cbf6917647d64ad81939f267067',
  [Network.Goerli]: '0xe4aaf13b6a3d84d9d025ef1e8aa1873ecb027322',
  [Network.Xdai]: '0x7DEB9d116D77F076788c0c377477877848e67055',
  [Network.XdaiFork]: '0x7DEB9d116D77F076788c0c377477877848e67055',
  [Network.Local]: undefined,
};

/**
 * Addresses of the deployed CoinMachineFactory extension contracts in all networks
 */
export const coinMachineFactoryAddresses = {
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
 * Funding pots can have different types in a colony.
 * See [here](https://colony.io/dev/docs/colonynetwork/whitepaper-tldr-pots-and-funding) for more details
 */
export enum FundingPotAssociatedType {
  Unassigned = 0,
  Domain = 1,
  Task = 2,
  Payment = 3,
  Expenditure = 4,
}

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

/*
 * The various states a Motion might find itself in
 */
export enum MotionState {
  Null = 0,
  Staking = 1,
  Submit = 2,
  Reveal = 3,
  Closed = 4,
  Finalizable = 5,
  Finalized = 6,
  Failed = 7,
}

// Versions of colonyNetwork
export enum ColonyVersion {
  GoerliGlider = 1, // glider-rc.1
  Glider = 2,
  AuburnGlider = 3,
  BurgundyGlider = 4,
  CeruleanLightweightSpaceship = 5,
}

export const CurrentVersion = ColonyVersion.CeruleanLightweightSpaceship;

export enum Network {
  Mainnet = 'mainnet',
  Goerli = 'goerli',
  Local = 'local',
}

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

export type DomainRoles = {
  domainId: number;
  roles: ColonyRole[];
};
export type UserRoles = {
  address: string;
  domains: DomainRoles[];
};
export type ColonyRoles = UserRoles[];

export enum ClientType {
  ColonyClient = 'ColonyClient',
  NetworkClient = 'NetworkClient',
  OneTxPaymentClient = 'OneTxPaymentClient',
  OneTxPaymentFactoryClient = 'OneTxPaymentFactoryClient',
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
}

export enum TokenClientType {
  Colony = 'Colony',
  Erc20 = 'Erc20',
  Dai = 'Dai',
}

export const colonyNetworkAddresses = {
  [Network.Mainnet]: '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  [Network.Goerli]: '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  [Network.Local]: undefined,
};

export const oneTxPaymentFactoryAddresses = {
  [Network.Mainnet]: '0x6fb63009e3e03cbf6917647d64ad81939f267067',
  [Network.Goerli]: '0xe4aaf13b6a3d84d9d025ef1e8aa1873ecb027322',
  [Network.Local]: undefined,
};

export const ROOT_DOMAIN_ID = 1;

export enum FundingPotAssociatedType {
  Unassigned = 0,
  Domain = 1,
  Task = 2,
  Payment = 3,
  Expenditure = 4,
}

export const REPUTATION_ORACLE_ENDPOINT = 'https://colony.io/reputation';

export const tokenAddresses = {
  SAI: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
};

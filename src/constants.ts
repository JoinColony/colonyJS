export enum Network {
  Mainnet = 'mainnet',
  Goerli = 'goerli',
  Local = 'local',
}

export enum ColonyRole {
  Recovery, // 0
  Root, // 1
  Arbitration, // 2
  Architecture, // 3
  // eslint-disable-next-line @typescript-eslint/camelcase
  ArchitectureSubdomain_DEPRECATED, // 4
  Funding, // 5
  Administration, // 6
}

export const colonyNetworkAddresses = {
  [Network.Mainnet]: '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  [Network.Goerli]: '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  [Network.Local]: undefined,
};

export const ROOT_DOMAIN_ID = 1;

export enum FundingPotAssociatedType {
  Unassigned, // 0
  Domain, // 1
  Task, // 2
  Payment, // 3
  Expenditure, // 4
}

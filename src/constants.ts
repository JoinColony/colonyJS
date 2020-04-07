export enum Network {
  mainnet = 'mainnet',
  goerli = 'goerli',
  local = 'local',
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
  [Network.mainnet]: '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  [Network.goerli]: '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  [Network.local]: undefined,
};

export const ROOT_DOMAIN_ID = 1;

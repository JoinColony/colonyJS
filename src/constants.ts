/** Addresses of the deployed ColonyNetwork EtherRouter contracts in all networks */
export enum ColonyNetworkAddress {
  /// The ColonyNetwork EtherRouter address on mainnet
  Mainnet = '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  /// The ColonyNetwork EtherRouter address on the Görli testnet
  Goerli = '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  /// The ColonyNetwork EtherRouter address on Gnosis chain
  Xdai = '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  /// The ColonyNetwork EtherRouter fork address on Gnosis chain
  XdaiFork = '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  /// Placeholder for a locally deployed EtherRouter address
  Custom = '',
}

/** Shortcuts to certain IDs within Colony */
export enum Id {
  /// The id of the root-domain in all colonies
  RootDomain = 1,
  /// The id of the root fundig pot in all colonies
  RootPot = 1,
  /// Ignore the skill id for this method (global skill 0)
  SkillIgnore = 0,
}

/** HTTP endpoint of the official colony reputation oracle */
export enum ReputationOracleEndpoint {
  Mainnet = 'https://colony.io/reputation',
  Goerli = 'https://colony.io/reputation',
  Xdai = 'https://colony.io/reputation',
  XdaiFork = 'https://colony.io/reputation',
  Custom = 'https://colony.io/reputation',
}

/** Shortcut to CLNY token addresses */
export enum CLNY {
  /// CLNY on mainnet
  Mainnet = '0x3E828ac5C480069D4765654Fb4b8733b910b13b2',
  /// CLNY on Gnosis Chain
  Xdai = '0xc9B6218AffE8Aba68a13899Cbf7cF7f14DDd304C',
}

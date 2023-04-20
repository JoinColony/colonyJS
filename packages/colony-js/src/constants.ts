/** Addresses of the deployed ColonyNetwork EtherRouter contracts in all networks */
export enum ColonyNetworkAddress {
  /** The ColonyNetwork EtherRouter address on mainnet */
  Mainnet = '0x5346D0f80e2816FaD329F2c140c870ffc3c3E2Ef',
  /** The ColonyNetwork EtherRouter address on the Görli testnet */
  Goerli = '0x79073fc2117dD054FCEdaCad1E7018C9CbE3ec0B',
  /** The ColonyNetwork EtherRouter address on Gnosis chain */
  Xdai = '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  /** The ColonyNetwork EtherRouter fork address on Gnosis chain */
  XdaiQa = '0x78163f593D1Fa151B4B7cacD146586aD2b686294',
  /** Placeholder for a locally deployed EtherRouter address */
  Custom = '',
}

/** Shortcuts to certain IDs within Colony */
export enum Id {
  /** The id of the root-domain in all colonies */
  RootDomain = 1,
  /** The id of the root fundig pot in all colonies */
  RootPot = 1,
  /** Ignore the skill id for this method (global skill 0) */
  SkillIgnore = 0,
}

/** HTTP endpoint of the official colony reputation oracle */
export enum ReputationOracleEndpoint {
  Mainnet = 'https://colony.io/reputation/mainnet',
  Goerli = 'https://colony.io/reputation/goerli',
  Xdai = 'https://xdai.colony.io/reputation/xdai',
  XdaiQa = 'https://qaxdai.colony.io/reputation/xdai',
  Custom = 'http://localhost:3000',
}

/** Shortcut to common token addresses */
// TODO: add more tokens like USDC, USDT?
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Tokens {
  /** Tokens deployed on Mainnet */
  export enum Mainnet {
    /** ETH on Mainnet */
    ETH = '0x0000000000000000000000000000000000000000',
    /** CLNY on Mainnet */
    Mainnet = '0x3E828ac5C480069D4765654Fb4b8733b910b13b2',
  }
  /** Tokens deployed on Gnosis Chain */
  export enum Gnosis {
    /** XDAI on Gnosis Chain */
    XDAI = '0x0000000000000000000000000000000000000000',
    /** CLNY on Gnosis Chain */
    CLNY = '0xc9B6218AffE8Aba68a13899Cbf7cF7f14DDd304C',
  }
}

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
  EvaluatedExpenditureClient = 'EvaluatedExpenditureClient',
  FundingQueueClient = 'FundingQueueClient',
  MotionTargetClient = 'MotionTargetClient',
  NetworkClient = 'NetworkClient',
  OneTxPaymentClient = 'OneTxPaymentClient',
  ReputationBootstrapperClient = 'ReputationBootstrapperClient',
  StakedExpenditureClient = 'StakedExpenditureClient',
  StreamingPaymentsClient = 'StreamingPaymentsClient',
  TokenSupplierClient = 'TokenSupplierClient',
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
  VotingReputationClient = 'VotingReputationClient',
  WhitelistClient = 'WhitelistClient',
}

/**
 * We support different TokenClients, especially the ColonyToken client with
 * its advanced functionality (to `.mint()` tokens for example). Other tokens
 * require certain adjustments (like the original Dai (SAI))
 */
export enum TokenClientType {
  Colony = 'Colony',
  ColonyLegacy = 'ColonyLegacy',
  Erc20 = 'Erc20',
  Erc2612 = 'Erc2612',
  Sai = 'Sai',
}

/**
 * These are the various states a Motion might find itself in
 */
export enum MotionState {
  Null,
  Staking,
  Submit,
  Reveal,
  Closed,
  Finalizable,
  Finalized,
  Failed,
}

/**
 * Funding pots can have different types in a colony.
 * See [here](https://github.com/JoinColony/colonyNetwork/blob/develop/docs/_TLDR_Pots.md#types-of-pots) for more details
 */
export enum FundingPotAssociatedType {
  Unassigned,
  Domain,
  Task,
  Payment,
  Expenditure,
}

export enum ReputationMinerEndpoints {
  UserReputationInSingleDomainWithoutProofs = `UserReputationInSingleDomainWithoutProofs`,
  UserReputationInSingleDomainWithProofs = `UserReputationInSingleDomainWithProofs`,
  UserReputationInAllDomains = 'UserReputationInAllDomains',
  UsersWithReputationInColony = 'UsersWithReputationInColony',
}

/**
 * Supported Ethereum networks. Use `Custom` if you'd like to bring your own deployment (e.g. local)
 */
export enum Network {
  /** Ethereum Mainnet */
  Mainnet = 'Mainnet',
  /** Use this to specify an own main ColonyNetwork address in the options */
  Custom = 'Custom',
  /** Gnosis chain */
  Gnosis = 'Xdai',
  /** Goerli testnet */
  Goerli = 'Goerli',
  /** Gnosis chain (alias) */
  Xdai = 'Xdai',
  /** Gnosis chain custom fork */
  XdaiQa = 'XdaiQa',
}

/**
 * Available roles in the colonyNetwork. Find out more here: https://github.com/JoinColony/colonyNetwork/blob/develop/docs/_Docs_Permissions.md
 */
export enum ColonyRole {
  Recovery,
  Root,
  Arbitration,
  Architecture,
  /**
   * @deprecated
   * The `ArchitectureSubdomain` role has been deprecated and should not be used */
  ArchitectureSubdomain,
  Funding,
  Administration,
  /** @internal */
  LAST_ROLE,
}

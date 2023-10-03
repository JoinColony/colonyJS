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
 * Addresses of the deployed ColonyNetwork EtherRouter contracts in all networks
 */
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

/**
 * HTTP endpoint of the official Colony reputation oracle
 */
export enum ReputationOracleEndpoint {
  Mainnet = 'https://colony.io/reputation/mainnet',
  Goerli = 'https://colony.io/reputation/goerli',
  Xdai = 'https://xdai.colony.io/reputation/xdai',
  XdaiQa = 'https://qa-xdai.colony.io/reputation/xdai',
  Custom = 'http://localhost:3000',
}

/**
 * HTTP endpoint of the official Colony MetaTransaction (gasless transaction) broadcaster
 */
export enum MetaTxBroadCasterEndpoint {
  /** The metatransaction broadcaster endpoint on mainnet */
  Mainnet = '',
  /** The metatransaction broadcaster endpoint on the Görli testnet */
  Goerli = '',
  /** The metatransaction broadcaster endpoint on Gnosis Chain */
  Gnosis = 'https://xdai.colony.io/metatransaction/xdai',
  /** The metatransaction broadcaster endpoint on Gnosis Chain (alias) */
  Xdai = 'https://xdai.colony.io/metatransaction/xdai',
  /** The metatransaction broadcaster endpoint on Gnosis Chain (QA environment) */
  XdaiQa = 'https://xdai.colony.io/metatransaction/xdai',
  /** The metatransaction broadcaster endpoint for a custom network */
  Custom = '',
}

/**
 * Official Colony RPC2 endpoint (node)
 */
export enum ColonyRpcEndpoint {
  /** Colony's own RPC2 endpoint for Mainnet */
  Mainnet = '',
  /** Colony's own RPC2 endpoint for Goerli testnet */
  Goerli = '',
  /** Colony's own RPC2 endpoint for Gnosis chain */
  Gnosis = 'https://xdai.colony.io/rpc/',
  /** Colony's own RPC2 endpoint for Gnosis chain (alias) */
  Xdai = 'https://xdai.colony.io/rpc/',
  /** Colony's own RPC2 endpoint for Gnosis chain (QA environment) */
  XdaiQa = 'https://xdai.colony.io/rpc/',
  /** Colony's own RPC2 endpoint for a custom network */
  Custom = '',
}

/**
 * ENS label suffix for Colonies
 */
export enum ColonyLabelSuffix {
  Mainnet = '.colony.joincolony.eth',
  Goerli = '.colony.joincolony.test',
  Gnosis = '.colony.joincolony.colonyxdai',
  Xdai = '.colony.joincolony.colonyxdai',
  XdaiQa = '.colony.joincolony.colonyxdai',
  Custom = '.colony.joincolony.test',
}

/**
 * ENS label suffix for users
 */
export enum UserLabelSuffix {
  Mainnet = '.user.joincolony.eth',
  Goerli = '.user.joincolony.test',
  Gnosis = '.user.joincolony.colonyxdai',
  Xdai = '.user.joincolony.colonyxdai',
  XdaiQa = '.user.joincolony.colonyxdai',
  Custom = '.user.joincolony.test',
}

/**
 * Shortcut to common token addresses
 */
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
 * Shortcuts to certain IDs within Colony
 */
export enum Id {
  /** The id of the root-domain in all colonies */
  RootDomain = 1,
  /** Alias of RootDomain */
  RootTeam = 1,
  /** The id of the root fundig pot in all colonies */
  RootPot = 1,
  /** Ignore the skill id for this method (global skill 0) */
  SkillIgnore = 0,
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
 * Identifies a motion as a decision
 *
 * Usually there's no need to use this directly.
 */
export const DecisionMotionCode = '0x12345678';

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

/**
 * Extension contract names
 */
export enum Extension {
  CoinMachine = 'CoinMachine',
  EvaluatedExpenditure = 'EvaluatedExpenditure',
  FundingQueue = 'FundingQueue',
  // The VotingReputation contract was refactored in flwss3 to also be an interface (akin to IColony)
  IVotingReputation = 'IVotingReputation',
  OneTxPayment = 'OneTxPayment',
  ReputationBootstrapper = 'ReputationBootstrapper',
  StagedExpenditure = 'StagedExpenditure',
  StakedExpenditure = 'StakedExpenditure',
  StreamingPayments = 'StreamingPayments',
  TokenSupplier = 'TokenSupplier',
  VotingReputation = 'VotingReputation',
  Whitelist = 'Whitelist',
}

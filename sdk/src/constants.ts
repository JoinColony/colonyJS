export { ColonyRole, Extension, Id, Network, Tokens } from '@colony/colony-js';

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

// TODO: Consider moving this to the metadata-parser
export enum TeamColor {
  LightPink,
  Pink,
  Black,
  EmeraldGreen,
  Blue,
  Yellow,
  Red,
  Green,
  Periwinkle,
  Gold,
  Aqua,
  BlueGrey,
  Purple,
  Orange,
  Magenta,
  PurpleGrey,
}

export enum ColonyLabelSuffix {
  Mainnet = '.colony.joincolony.eth',
  Goerli = '.colony.joincolony.test',
  Gnosis = '.colony.joincolony.colonyxdai',
  Xdai = '.colony.joincolony.colonyxdai',
  XdaiQa = '.colony.joincolony.colonyxdai',
  Custom = '.colony.joincolony.test',
}

/**
 * Identifies a motion as a decision
 *
 * Usually there's no need to use this directly. Use [[VotingReputation.createDecision]] instead.
 */
export const DecisionMotionCode = '0x12345678';

export { ColonyRole, Extension, Id, Network, Tokens } from '@colony/colony-js';

export enum MetaTxBroadCasterEndpoint {
  /** The metatransaction broadcaster endpoint on mainnet */
  Mainnet = '',
  /** The metatransaction broadcaster endpoint on the Görli testnet */
  Goerli = '',
  /** The metatransaction broadcaster endpointon Gnosis chain */
  Gnosis = 'https://xdai.colony.io/metatransaction/xdai',
  /** The metatransaction broadcaster endpointon Gnosis chain (alias) */
  Xdai = 'https://xdai.colony.io/metatransaction/xdai',
  /** The metatransaction broadcaster endpointaddress on Gnosis chain */
  XdaiQa = 'https://xdai.colony.io/metatransaction/xdai',
  /** The metatransaction broadcaster endpoint for a custom network */
  Custom = '',
}

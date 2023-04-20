/**
 * The type for a specific contract-client (extended ethers `Contract`).
 * This is being used for TypeScript's discriminative unions (to make assumptions about what functionality is available on this contract)
 */
export enum ClientType {
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
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

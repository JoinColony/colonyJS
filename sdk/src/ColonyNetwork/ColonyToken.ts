import {
  ColonyNetworkClient,
  ColonyTokenClient,
  SignerOrProvider,
  TokenClientType,
} from '@colony/colony-js';

import type { BigNumberish } from 'ethers';

import { SupportedColonyClient } from './Colony';

export class ColonyToken {
  private colonyClient: SupportedColonyClient;

  private networkClient: ColonyNetworkClient;

  private tokenClient: ColonyTokenClient;

  private signerOrProvider: SignerOrProvider;

  // TODO: Add symbol, decimals
  // Get symbol in colonyJS. Use async getToken function

  /**
   * Creates a new instance of a Colony's native Token
   * @internal
   *
   * @remarks
   * Do not use this method directly but use [[Colony.getToken]]
   *
   * @param colonyClient A ColonyJS `ColonyClient` in the latest supported version
   * @returns A Colony Token abstaction instance
   */
  constructor(colonyClient: SupportedColonyClient) {
    this.networkClient = colonyClient.networkClient;
    this.colonyClient = colonyClient;
    if (colonyClient.tokenClient.tokenClientType !== TokenClientType.Colony) {
      throw new Error(
        `Requested token is not a token deployed with Colony. Please use the Erc20Token class`,
      );
    }
    this.tokenClient = colonyClient.tokenClient;
    this.signerOrProvider = colonyClient.signer || colonyClient.provider;
  }

  /**
   * Gets the token's symbol
   *
   * @returns The token's symbol (e.g. CLNY)
   */
  async symbol() {
    return this.tokenClient.symbol();
  }

  /**
   * Mints `amount` of a Colony's native token.
   *
   * @remarks
   * Only works for tokens deployed with Colony (not imported tokens). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example). Also not that for tokens to be available in the Colony after funding, you need to call the [[Colony.claimFunds]] method after minting.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * const token = colony.getToken();
   * // Mint 100 tokens of the Colony's native token
   * await token.mint(w`100`);
   * // Claim the minted tokens for the Colony
   * await colony.claimFunds();
   * ```
   *
   * @returns A tupel of event data and contract receipt
   */
  async mint(amount: BigNumberish) {
    const tx = await this.colonyClient.mintTokens(amount);
    const receipt = await tx.wait();
    const data = {};
    return [data, receipt] as [typeof data, typeof receipt];
  }
}

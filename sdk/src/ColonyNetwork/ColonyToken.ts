import {
  ColonyNetworkClient,
  ColonyTokenClient,
  SignerOrProvider,
  TokenClientType,
  TokenLockingClient,
} from '@colony/colony-js';
import {
  ApprovalEventObject,
  UserTokenDepositedEventObject,
} from '@colony/colony-js/extras';

import type { BigNumberish } from 'ethers';
import { extractEvent } from '../utils';

import { SupportedColonyClient } from './Colony';

export class ColonyToken {
  private colonyClient: SupportedColonyClient;

  private networkClient: ColonyNetworkClient;

  private signerOrProvider: SignerOrProvider;

  private tokenClient: ColonyTokenClient;

  private tokenLockingClient?: TokenLockingClient;

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

  private async getTokenLockingClient() {
    if (!this.tokenLockingClient) {
      this.tokenLockingClient =
        await this.colonyClient.networkClient.getTokenLockingClient();
    }
    return this.tokenLockingClient;
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
   * @param amount Amount of the token to be minted
   *
   * @returns A tupel of event data and contract receipt
   */
  async mint(amount: BigNumberish) {
    const tx = await this.colonyClient.mintTokens(amount);
    const receipt = await tx.wait();
    const data = {};
    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Approve `amount` of the wallet owners holdings of the Colony's native token.
   *
   * In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * const token = colony.getToken();
   * // Approve 100 tokens to be "activated"
   * await token.approve(w`100`);
   * // Deposit the tokens
   * await token.deposit(w`100`);
   * ```
   *
   * @param amount Amount of the token to be approved
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `src` | string | The address that approved the tokens from their wallet |
   * | `guy` | string | Address of the TokenLocking contract |
   * | `wad` | BigNumber | Amount that was approved |
   */
  async approve(amount: BigNumberish) {
    const tokenLockingClient = await this.getTokenLockingClient();
    const tx = await this.tokenClient.approve(
      tokenLockingClient.address,
      amount,
    );
    const receipt = await tx.wait();
    const data = {
      ...extractEvent<ApprovalEventObject>('Approval', receipt),
    };
    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Deposit `amount` of the wallet owners holdings of the Colony's native token into the Colony.
   *
   * In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be deposited.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * const token = colony.getToken();
   * // Approve 100 tokens to be "activated"
   * await token.approve(w`100`);
   * // Deposit the tokens
   * await token.deposit(w`100`);
   * ```
   *
   * @param amount Amount of the token to be deposited
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `token` | string | The address of the Colony's native token |
   * | `user` | string | The address that deposited the tokens from their wallet |
   * | `amount` | BigNumber | Amount that was deposited |
   */
  async deposit(amount: BigNumberish) {
    const tokenLockingClient = await this.getTokenLockingClient();
    const tx = await tokenLockingClient['deposit(address,uint256,bool)'](
      this.tokenClient.address,
      amount,
      false,
    );
    const receipt = await tx.wait();
    const data = {
      ...extractEvent<UserTokenDepositedEventObject>('Approval', receipt),
    };
    return [data, receipt] as [typeof data, typeof receipt];
  }
}

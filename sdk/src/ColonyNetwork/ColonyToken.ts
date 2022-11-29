import {
  ColonyTokenClient,
  TokenClientType,
  TokenLockingClient,
} from '@colony/colony-js';
import {
  ApprovalEventObject,
  UserTokenDepositedEventObject,
  UserTokenWithdrawnEventObject,
} from '@colony/colony-js/extras';

import type { BigNumberish } from 'ethers';
import { extractEvent } from '../utils';

import { Colony } from './Colony';

export class ColonyToken {
  private colony: Colony;

  private tokenClient: ColonyTokenClient;

  address: string;

  tokenLockingClient: TokenLockingClient;

  // TODO: Add symbol, decimals
  // Get symbol in colonyJS. Use async getToken function

  /**
   * Creates a new instance of a Colony's native Token
   * @internal
   *
   * @remarks
   * Do not use this method directly but use [[Colony.getToken]]
   *
   * @param colony A Colony instance
   * @returns A Colony Token abstaction instance
   */
  constructor(colony: Colony, tokenLockingClient: TokenLockingClient) {
    const colonyClient = colony.getInternalColonyClient();
    if (colonyClient.tokenClient.tokenClientType !== TokenClientType.Colony) {
      throw new Error(
        `Requested token is not a token deployed with Colony. Please use the Erc20Token class`,
      );
    }
    this.address = colonyClient.tokenClient.address;
    this.colony = colony;
    this.tokenClient = colonyClient.tokenClient;
    this.tokenLockingClient = tokenLockingClient;
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
   * // Immediately executing async function
   * (async function() {
   *   const token = await colony.getToken();
   *   // Mint 100 tokens of the Colony's native token
   *   // (forced transaction example)
   *   await token.mint(w`100`).force();
   *   // Claim the minted tokens for the Colony
   *   // (forced transaction example)
   *   await colony.claimFunds().force();
   * })();
   * ```
   *
   * @param amount Amount of the token to be minted
   *
   * @returns A [[TxCreator]]
   */
  mint(amount: BigNumberish) {
    return this.colony.createTxCreator(
      this.colony.getInternalColonyClient(),
      'mintTokens',
      [amount],
    );
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
   * // Immediately executing async function
   * (async function() {
   *   const token = await colony.getToken();
   *   // Approve 100 tokens to be "activated"
   *   await token.approve(w`100`);
   *   // Deposit the tokens
   *   await token.deposit(w`100`);
   * })();
   * ```
   *
   * @param amount Amount of the token to be approved
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `src` | string | The address that approved the tokens from their wallet |
   * | `guy` | string | Address of the TokenLocking contract |
   * | `wad` | BigNumber | Amount that was approved |
   */
  async approve(amount: BigNumberish) {
    const tx = await this.tokenClient.approve(
      this.tokenLockingClient.address,
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
   * // Immediately executing async function
   * (async function() {
   *   const token = await colony.getToken();
   *   // Approve 100 tokens to be "activated"
   *   await token.approve(w`100`);
   *   // Deposit the tokens
   *   await token.deposit(w`100`);
   * })();
   * ```
   *
   * @param amount Amount of the token to be deposited
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `token` | string | The address of the Colony's native token |
   * | `user` | string | The address that deposited the tokens from their wallet |
   * | `amount` | BigNumber | Amount that was deposited |
   */
  async deposit(amount: BigNumberish) {
    const tx = await this.tokenLockingClient['deposit(address,uint256,bool)'](
      this.tokenClient.address,
      amount,
      false,
    );
    const receipt = await tx.wait();
    const data = {
      ...extractEvent<UserTokenDepositedEventObject>(
        'UserTokenDeposited',
        receipt,
      ),
    };
    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Withdraw `amount` of the wallet owners holdings of the Colony's native token from the Colony.
   *
   * Does the opposite of `deposit` and frees the deposited tokens back to the wallet address.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   const token = await colony.getToken();
   *   // Withdraw 100 tokens that were previously deposited
   *   await token.withdraw(w`100`);
   * })();
   * ```
   *
   * @param amount Amount of the token to be withdrawn
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `token` | string | The address of the Colony's native token |
   * | `user` | string | The address that withdrew the tokens from their wallet |
   * | `amount` | BigNumber | Amount that was withdrawn |
   */
  async withdraw(amount: BigNumberish) {
    const tx = await this.tokenLockingClient['withdraw(address,uint256,bool)'](
      this.tokenClient.address,
      amount,
      false,
    );
    const receipt = await tx.wait();
    const data = {
      ...extractEvent<UserTokenWithdrawnEventObject>(
        'UserTokenWithdrawn',
        receipt,
      ),
    };
    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Get the wallet owner's deposited and locked balance of the Colony's native token.
   *
   * This method will show the accumulated amount that was deposited using the [[ColonyToken.deposit]] method
   *
   * @param user The wallet address that we want to check the deposited amount of
   *
   * @returns The currently deposited balance of the Colony's native token
   */
  async getUserDeposit(user: string) {
    const userLock = await this.tokenLockingClient.getUserLock(
      this.tokenClient.address,
      user,
    );
    return userLock.balance;
  }

  /**
   * Get the wallet owner's approved balance of the Colony's native token for an obliator (i.e. an extension)
   *
   * This method will show the accumulated amount that was approved using the [[ColonyToken.approve]] method
   *
   * @param user The wallet address that we want to check the approved amount of
   * @param obligator The address that has been approved to obligate the funds.
   *
   * @returns The currently approved balance of the Colony's native token for the obligator
   */
  async getUserApproval(user: string, obligator: string) {
    return this.tokenLockingClient.getApproval(
      user,
      this.tokenClient.address,
      obligator,
    );
  }

  async deployAuthority(allowedToTransfer?: string[]) {
    const { colonyNetwork } = this.colony;
    let allowed: string[] = [];
    const tokenLockingAddress =
      await colonyNetwork.networkClient.getTokenLocking();
    if (!allowedToTransfer) {
      allowed = [tokenLockingAddress];
    } else {
      allowed = [...allowedToTransfer, tokenLockingAddress];
    }
    return colonyNetwork.createTxCreator(
      colonyNetwork.networkClient,
      'deployTokenAuthority',
      [this.address, this.colony.address, allowed],
    );
  }

  async setAuthority(tokenAuthorityAddress: string) {
    return this.colony.createTxCreator(this.tokenClient, 'setAuthority', [
      tokenAuthorityAddress,
    ]);
  }

  async setupColonyAsOwner() {
    return this.colony.createTxCreator(this.tokenClient, 'setOwner', [
      this.colony.address,
    ]);
  }
}

import type { ApprovalEventObject } from '@colony/colony-js/events';

import {
  ERC20Token as ERC20TokenType,
  ERC20TokenFactory,
} from '@colony/colony-js/tokens';
import type { BigNumberish } from 'ethers';

import { extractEvent } from '../utils';
import { ColonyNetwork } from './ColonyNetwork';

export class ERC20Token {
  protected colonyNetwork: ColonyNetwork;

  protected tokenClient: ERC20TokenType;

  address: string;

  /**
   * Creates a new instance of an ERC20 Token
   *
   * @remarks This does not deploy a new token, only connects to an exisiting one
   *
   * @param colonyNetwork - A [[ColonyNetwork]] instance
   * @param token - A token address or a full contract (like on a colony token client)
   * @returns An ERC20 token abstraction instance
   */
  constructor(colonyNetwork: ColonyNetwork, token: ERC20TokenType | string) {
    if (typeof token == 'string') {
      this.tokenClient = ERC20TokenFactory.connect(
        token,
        colonyNetwork.signerOrProvider,
      );
    } else {
      this.tokenClient = token;
    }
    this.address = this.tokenClient.address;
    this.colonyNetwork = colonyNetwork;
  }

  /**
   * Provide direct access to the internally used ColonyJS TokenClient client. Only use when you know what you're doing
   * @internal
   *
   * @returns The internally used TokenClient
   */
  getInternalTokenClient(): ERC20TokenType {
    return this.tokenClient;
  }

  /**
   * Gets the token's name
   *
   * @returns The token's name (e.g. Colony Network Token)
   */
  async name() {
    return this.tokenClient.name();
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
   * Gets the token's decimals
   *
   * @returns The token's decimals (e.g. 18)
   */
  async decimals() {
    return this.tokenClient.decimals();
  }

  /**
   * Approve `amount` of the wallet owners holdings of the specified token
   *
   * In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Approve 100 tokens to be "activated"
   *   await colony.token.approve(w`100`).force();
   *   // Deposit the tokens
   *   await colonyNetwork.locking.deposit(token.address, w`100`).force();
   * })();
   * ```
   *
   * @param amount - Amount of the token to be approved
   * @param spender - Spender to approve the amount for. Defaults to the Colony Network
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `src` | string | The address that approved the tokens from their wallet |
   * | `guy` | string | Address of the TokenLocking contract |
   * | `wad` | BigNumber | Amount that was approved |
   */
  approve(amount: BigNumberish, spender?: string) {
    const approvedSpender = spender || this.colonyNetwork.locking.address;
    return this.colonyNetwork.createTxCreator(
      this.tokenClient,
      'approve',
      [approvedSpender, amount],
      async (receipt) => ({
        ...extractEvent<ApprovalEventObject>('Approval', receipt),
      }),
    );
  }
}

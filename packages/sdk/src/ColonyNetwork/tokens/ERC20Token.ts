import type { ApprovalEvent, TransferEvent } from '@colony/events';

import { type BigNumberish, toBigInt } from 'ethers';

import {
  ERC20Token as ERC20TokenType,
  ERC20TokenFactory,
} from '@colony/tokens';

import type { ColonyNetwork } from '../ColonyNetwork.js';

import { extractEvent } from '../../utils.js';

export class ERC20Token {
  protected colonyNetwork: ColonyNetwork;

  protected tokenClient: ERC20TokenType;

  address: string;

  /**
   * Creates a new instance of an ERC20 Token
   *
   * @remarks This does not deploy a new token, only connects to an exisiting one
   *
   * @param colonyNetwork - A {@link ColonyNetwork} instance
   * @param address - The address of the token contract
   * @param token - A token address or a full contract (like on a colony token client)
   * @returns An ERC20 token abstraction instance
   */
  constructor(
    colonyNetwork: ColonyNetwork,
    address: string,
    token?: ERC20TokenType,
  ) {
    if (token) {
      this.tokenClient = token;
    } else {
      this.tokenClient = ERC20TokenFactory.connect(
        address,
        colonyNetwork.signerOrProvider,
      );
    }
    this.address = address;
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
   * Returns the token's name
   *
   * @returns The token's name (e.g. Colony Network Token)
   */
  async name() {
    return this.tokenClient.name();
  }

  /**
   * Returns the token's symbol
   *
   * @returns The token's symbol (e.g. CLNY)
   */
  async symbol() {
    return this.tokenClient.symbol();
  }

  /**
   * Returns the token's decimals
   *
   * @returns The token's decimals (e.g. 18)
   */
  async decimals() {
    return this.tokenClient.decimals();
  }

  /**
   * Returns the total token supply
   *
   * @returns The token's total supply
   */
  async totalSupply() {
    return this.tokenClient.totalSupply();
  }

  /**
   * Returns the account balance of another account with address `owner`
   *
   * @returns The account balance of the corresponding address
   */
  async balanceOf(owner: string) {
    return this.tokenClient.balanceOf(owner);
  }

  /**
   * Returns the amount which `spender` is still allowed to withdraw from `owner`
   *
   * @returns The allowance amount
   */
  async allowance(owner: string, spender: string) {
    return this.tokenClient.allowance(owner, spender);
  }

  /**
   * Transfers `value` amount of tokens to address `to` from the currently used wallet
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `src` | string | The address that transferred the tokens from their wallet |
   * | `dst` | string | Address of the recipient of the tokens |
   * | `wad` | BigNumber | Amount that was transferred |
   */
  transfer(to: string, value: BigNumberish) {
    return this.colonyNetwork.createTxCreator(
      this.tokenClient,
      'transfer',
      [to, value],
      async (receipt) => ({
        ...extractEvent<TransferEvent.OutputObject>('Transfer', receipt),
      }),
    );
  }

  /**
   * Transfers `value` amount of tokens from address `from` to address `to`
   *
   * The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `src` | string | The address that transferred the tokens from their wallet |
   * | `dst` | string | Address of the recipient of the tokens |
   * | `wad` | BigNumber | Amount that was transferred |
   */
  transferFrom(from: string, to: string, value: BigNumberish) {
    return this.colonyNetwork.createTxCreator(
      this.tokenClient,
      'transferFrom',
      [from, to, value],
      async (receipt) => ({
        ...extractEvent<TransferEvent.OutputObject>('Transfer', receipt),
      }),
    );
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
   *   await colony.token.approve(w`100`).tx().mined();
   *   // Deposit the tokens
   *   await colonyNetwork.locking.deposit(token.address, w`100`).tx().mined();
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
    return this.colonyNetwork.createTxCreator(
      this.tokenClient,
      'approve',
      async () => {
        const tokenLocking = await this.colonyNetwork.getTokenLocking();
        const approvedSpender = spender || tokenLocking.address;
        return [approvedSpender, toBigInt(amount)] as [string, bigint];
      },
      async (receipt) => ({
        ...extractEvent<ApprovalEvent.OutputObject>('Approval', receipt),
      }),
    );
  }
}

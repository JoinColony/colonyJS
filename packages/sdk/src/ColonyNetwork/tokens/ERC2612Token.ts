import type { ApprovalEventObject } from '@colony/events';

import { BigNumber, BigNumberish } from 'ethers';
import {
  ERC2612Token as ERC2612TokenType,
  ERC2612TokenFactory,
} from '@colony/tokens';

import { extractEvent } from '../../utils';
import { ColonyNetwork } from '../ColonyNetwork';
import { ERC20Token } from './ERC20Token';

export class ERC2612Token extends ERC20Token {
  protected tokenClient: ERC2612TokenType;

  /**
   * Creates a new instance of an ERC2612 token (ERC20 with Permit extension)
   *
   * @remarks This does not deploy a new token, only connects to an exisiting one
   *
   * @param colonyNetwork - A {@link ColonyNetwork} instance
   * @param token - A token address or a full contract (like on a colony token client)
   * @returns An ERC2612 token abstraction instance
   */
  constructor(colonyNetwork: ColonyNetwork, token: ERC2612TokenType | string) {
    super(colonyNetwork, token);
    if (typeof token == 'string') {
      this.tokenClient = ERC2612TokenFactory.connect(
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
  getInternalTokenClient(): ERC2612TokenType {
    return this.tokenClient;
  }

  /**
   * Permit `amount` of the wallet owners holdings of the specified token.
   *
   * This is the same as {@link ERC20Token.approve} but works only for gasless metatransactions. If you have a Colony-deployed token, use `approve`. This is mainly to support gasless transactions for BYOT (bring-your-own-token).
   *
   * This follows the EIP-2612 "Permit" specification. See https://eips.ethereum.org/EIPS/eip-2612.
   *
   * In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.
   *
   * @remarks Note that the arguments are turned around when comparing with the EIP2612 format.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Permit 100 tokens to be "activated"
   *   await colony.token.permit(w`100`).metaTx().mined();
   *   // Deposit the tokens
   *   await colonyNetwork.locking.deposit(token.address, w`100`).metaTx().mined();
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
  permit(amount: BigNumberish, spender?: string) {
    return this.colonyNetwork.createEip2612TxCreator(
      this.tokenClient,
      'permit',
      async () => {
        const tokenLocking = await this.colonyNetwork.getTokenLocking();
        const spenderArg = spender || tokenLocking.address;
        return [spenderArg, amount] as [string, BigNumber];
      },
      async (receipt) => ({
        ...extractEvent<ApprovalEventObject>('Approval', receipt),
      }),
    );
  }
}

import type {
  LogSetAuthorityEventObject,
  LogSetOwnerEventObject,
} from '@colony/events/types';

import {
  ColonyToken as ColonyTokenType,
  ColonyTokenFactory,
} from '@colony/tokens';

import type { ColonyNetwork } from '../ColonyNetwork.js';

import { extractEvent } from '../../utils.js';
import { ERC20Token } from './ERC20Token.js';

export class ColonyToken extends ERC20Token {
  protected tokenClient: ColonyTokenType;

  /**
   * Creates a new instance of a Colony deployed Token
   *
   * @remarks This does not deploy a new token, only connects to an exisiting one
   *
   * @param colonyNetwork - A {@link ColonyNetwork} instance
   * @param token - A token address or a full contract (like on a colony token client)
   * @returns An ERC20 token abstraction instance
   */
  constructor(colonyNetwork: ColonyNetwork, token: ColonyTokenType | string) {
    super(colonyNetwork, token);
    if (typeof token == 'string') {
      this.tokenClient = ColonyTokenFactory.connect(
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
   * Provide direct access to the internally used ethers Token contract. Only use when you know what you're doing
   * @internal
   *
   * @returns The internally used TokenClient
   */
  getInternalTokenClient(): ColonyTokenType {
    return this.tokenClient;
  }

  /**
   * Sets the address of the TokenAuthority for this token
   *
   * Set the TokenAuthority for this token. Only has to be done once, after the TokenAuthority has been deployed. See {@link Colony.deployTokenAuthority} for more information.
   *
   * @remarks
   * Only works for native tokens deployed with Colony (not imported tokens).
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Deploy the TokenAuthority contract
   *   // (forced transaction example)
   *   const [{ tokenAuthorityAddress }] = await colony.deployTokenAuthority().tx().mined();
   *   // Set the TokenAuthority for this token
   *   // (forced transaction example)
   *   await colony.token.setAuthority(tokenAuthorityAddress).tx().mined();
   * })();
   * ```
   *
   * @param address - Address of the TokenAuthority contract
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `authority` | string | The address of the tokenAuthority that has been set |
   */
  setAuthority(address: string) {
    return this.colonyNetwork.createMetaTxCreator(
      this.tokenClient,
      'setAuthority',
      [address],
      async (receipt) => ({
        ...extractEvent<LogSetAuthorityEventObject>('LogSetAuthority', receipt),
      }),
    );
  }

  /**
   * Sets the owner of the token
   *
   * Set the owner address for this token. Should usually be the colony. This will allow the Colony to always affect certain token parameters, event without the TokenAuthority deployed or used
   *
   * @remarks
   * Only works for native tokens deployed with Colony (not imported tokens).
   *
   * @param address - Address to set as the owner of the token (usually the colony)
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `owner` | string | The address of the owner that has been set |
   */
  setOwner(address: string) {
    return this.colonyNetwork.createMetaTxCreator(
      this.tokenClient,
      'setOwner',
      [address],
      async (receipt) => ({
        ...extractEvent<LogSetOwnerEventObject>('LogSetOwner', receipt),
      }),
    );
  }
}

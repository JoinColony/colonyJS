import {
  type BigNumberish,
  type ContractReceipt,
  constants,
  utils,
} from 'ethers';
import {
  type SignerOrProvider,
  ColonyLabelSuffix,
  UserLabelSuffix,
  ColonyNetworkAddress,
} from '@colony/core';
import { type ERC2612Token as ERC2612TokenType } from '@colony/tokens';
import {
  type ColonyData,
  type ColonyEvents,
  type ColonyNetworkEvents,
  MetadataType,
} from '@colony/events';

import {
  type IColonyNetwork,
  IColonyNetwork__factory as IColonyNetworkFactory,
  type IBasicMetaTransaction,
} from '../contracts/index.js';
import {
  type BaseContract,
  type TxConfig,
  TxCreator,
  MetaTxCreator,
} from '../TxCreator/index.js';
import { Colony } from './Colony.js';
import { type Expand, type Parameters } from '../types.js';
import { extractEvent } from '../utils.js';
import { EIP2612TxCreator } from '../TxCreator/EIP2612TxCreator.js';
import { TokenLocking } from './TokenLocking.js';
import { ContractConfig, type ContractOptions } from '../ContractConfig.js';

const { namehash } = utils;
const { AddressZero } = constants;

/** ERC20 Token information */
export interface TokenData {
  /** The token's name (e.g. Colony Network Token) */
  name: string;
  /** The token's symbol (e.g. CLNY) */
  symbol: string;
  /** The token's decimals (defaults to 18) */
  decimals?: number;
}

export class ColonyNetwork {
  private contract: IColonyNetwork;

  private locking?: TokenLocking;

  /** Configuration of the ColonyNetwork for later use */
  /** @internal */
  config: ContractConfig;

  /**
   * Creates a new instance of the ColonyNetwork
   *
   * This is your main entry point to talk to the Colony Network Smart Contracts.
   * From here you should be able to instantiate all the required instances for Colonies and their extensions.
   *
   * @example
   *
   * ```typescript
   * import { providers } from 'ethers';
   * import { ColonyNetwork, ColonyRpcEndpoint, Tokens } from '@colony/sdk';
   *
   * // Connect directly to the deployed Colony Network on Arbitrum One
   * const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);
   * const colonyNetwork = new ColonyNetwork(provider);
   * // Now you could call functions on the colonyNetwork, like `colonyNetwork.getMetaColony()`
   * ```
   *
   * @param signerOrProvider - An _ethers_ compatible Signer or Provider instance
   * @param options - Optional custom {@link ColonyNetworkOptions}
   * @returns A ColonyNetwork abstraction instance
   */
  constructor(signerOrProvider: SignerOrProvider, options?: ContractOptions) {
    this.config = new ContractConfig(signerOrProvider, options);
    this.contract = IColonyNetworkFactory.connect(
      options?.customNetworkAddress ||
        ColonyNetworkAddress[this.config.network],
      signerOrProvider,
    );
  }

  /**
   * Fetches the TokenLocking client abstraction
   *
   * @returns A {@link TokenLocking} contract client
   */
  async getTokenLocking(): Promise<TokenLocking> {
    if (!this.locking) {
      const address = await this.contract.getTokenLocking();
      this.locking = new TokenLocking(this, address);
    }
    return this.locking;
  }

  /**
   * Provide direct access to the internally used ethers Contract. Only use when you know what you're doing
   *
   * @internal
   * @returns The internally used ethers Contract
   */
  getInternalNetworkContract(): IColonyNetwork {
    return this.contract;
  }

  /**
   * Creates a new {@link TxCreator} for non-meta, non-motion transactions
   * @internal
   *
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   *
   * @param contract - A ColonyJS contract
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param eventData - A function that extracts the relevant event data from the {@link ContractReceipt}
   * @param txConfig - More configuration options, like {@link MetadataType} if the event contains metadata or if methods are unsupported
   * @returns A {@link TxCreator}
   */
  createTxCreator<
    C extends BaseContract,
    F extends keyof C['functions'],
    D extends Record<string, unknown>,
    M extends MetadataType,
  >(
    contract: C,
    method: F,
    args:
      | Parameters<C['functions'][F]>
      | (() => Promise<Parameters<C['functions'][F]>>),
    eventData?: (receipt: ContractReceipt) => Promise<D>,
    txConfig?: TxConfig<M>,
  ) {
    return new TxCreator({
      config: this.config,
      contract,
      method,
      args,
      eventData,
      txConfig,
    });
  }

  /**
   * Creates a new {@link MetaTxCreator} for possibly meta, non-motion transactions
   * @internal
   *
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   *
   * @param contract - A ColonyJS contract
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param eventData - A function that extracts the relevant event data from the {@link ContractReceipt}
   * @param txConfig - More configuration options, like {@link MetadataType} if the event contains metadata or if methods are unsupported
   * @returns A {@link MetaTxCreator}
   */
  createMetaTxCreator<
    C extends IBasicMetaTransaction,
    F extends keyof C['functions'],
    D extends Record<string, unknown>,
    M extends MetadataType,
  >(
    contract: C,
    method: F,
    args:
      | Parameters<C['functions'][F]>
      | (() => Promise<Parameters<C['functions'][F]>>),
    eventData?: (receipt: ContractReceipt) => Promise<D>,
    txConfig?: TxConfig<M>,
  ) {
    return new MetaTxCreator({
      config: this.config,
      contract,
      method,
      args,
      eventData,
      txConfig,
    });
  }

  /**
   * Creates a new {@link EIP2612TxCreator} for EIP-2612 transactions (permit)
   * @internal
   *
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   *
   * @param contract - Only a EIP-2612 compatible token contract
   * @param method - Can only do 'permit'
   * @param args - The arguments for the 'permit' method
   * @param eventData - A function that extracts the relevant event data from the {@link ContractReceipt}
   * @param txConfig - More configuration options, like {@link MetadataType} if the event contains metadata or if methods are unsupported
   * @returns A {@link EIP2612TxCreator}
   */
  createEip2612TxCreator<
    D extends Record<string, unknown>,
    M extends MetadataType,
  >(
    contract: ERC2612TokenType,
    method: 'permit',
    args: [string, BigNumberish] | (() => Promise<[string, BigNumberish]>),
    eventData?: (receipt: ContractReceipt) => Promise<D>,
    txConfig?: TxConfig<M>,
  ) {
    return new EIP2612TxCreator({
      config: this.config,
      contract,
      method,
      args,
      eventData,
      txConfig,
    });
  }

  /**
   * Create a new colony with metadata
   *
   * Creates a new colony with IPFS metadata. To edit metadata at a later point you can call the {@link Colony.edit} method.
   *
   * @remarks
   * There is more to creating a fully functional colony that can be used within the dapp than just calling this function.
   * See the [Colony Creation Guide](../../guides/colony-creation.md).
   *
   * @example
   * ```typescript
   * import { Tokens } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Create a colony with some metadata details attached
   *   // (forced transaction example)
   *   // (also notice that this requires an upload-capable IPFS adapter)
   *   await colonyNetwork.createColony(
   *     // Create a new token ('COOL') for this Colony
   *     { name: 'Cool token', symbol: 'COOL' },
   *     'coolony',
   *     {
   *       colonyDisplayName: 'Cool Colony',
   *       // IPFS hash to an image file
   *       colonyAvatarHash: 'QmS26o1Cmsrx7iw1SSFGEcy22TVDq6VmEZ4XNjpWFyaKUe',
   *       // List of token addresses that the Colony should be initialized with (can be changed later) - excluding ETH and the native token from above
   *       colonyTokens: [Tokens.ArbitrumOne.CLNY],
   *     }).tx().mined();
   * })();
   * ```
   *
   * @param token - Create a new ERC20-compatible token by passing in its name and symbol or use an existing token by passing in its contract address
   * @param label - The Colony's label. This is going to be part of the URL to look up the Colony within the dApp
   * @param metadata - The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If {@link ColonyData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS (like the {@link PinataAdapter}). See its documentation for more information.
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `colonyId` | BigNumber | Auto-incremented integer id of the colony |
   * | `colonyAddress` | string | Address of the newly deployed colony contract |
   * | `tokenAddress` | string | Address of the token that is used as the colony's native token |
   * | `tokenAuthorityAddress` | string | Address of the token authority (the token's permission manager) contract |
   * | `token` | string | Alias of `token`
   * | `metadata` | string | IPFS CID of metadata attached to this transaction |
   *
   * #### Metadata
   *
   * (can be obtained by calling and awaiting the `getMetadata` function)
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `colonyDisplayName` | string | The name that should be displayed for the colony |
   * | `colonyAvatarHash` | string | An IPFS hash for a Colony logo (make it 200x200px) |
   * | `colonyTokens` | string[] | A list of additional tokens that should be in the colony's "address book" |
   */
  createColony(
    token: string | TokenData,
    label: string,
    metadata: ColonyData | string,
  ): MetaTxCreator<
    IColonyNetwork,
    'createColonyForFrontend',
    Expand<
      ColonyNetworkEvents.TokenDeployedEventObject &
        ColonyNetworkEvents.ColonyAddedEventObject &
        ColonyNetworkEvents.TokenAuthorityDeployedEventObject &
        ColonyEvents.ColonyMetadataEventObject
    >,
    MetadataType.Colony
  >;

  /**
   * Create a new Colony without metadata
   *
   * Creates a new Colony without IPFS metadata. To add metadata at a later point you can call the {@link Colony.edit} method.
   *
   * @remarks
   * There is more to creating a fully functional colony that can be used within the dapp than just calling this function.
   * See the [Colony Creation Guide](../../guides/colony-creation.md).
   *
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *   // Create a colony
   *   // (forced transaction example)
   *   await colonyNetwork
   *     // Use USDC on Arbitrum One as the native token
   *     .createColony('0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 'coolony')
   *     .tx().mined();
   * })();
   * ```
   *
   * @param token - Create a new ERC20-compatible token by passing in its name and symbol or use an existing token by passing in its contract address
   * @param label - The Colony's label. This is going to be part of the URL to look up the Colony within the dApp
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `colonyId` | BigNumber | Auto-incremented integer id of the colony |
   * | `colonyAddress` | string | Address of the newly deployed colony contract |
   * | `tokenAddress` | string | Address of the token that is used as the colony's native token |
   * | `tokenAuthorityAddress` | string | Address of the token authority (the token's permission manager) contract |
   * | `token` | string | Alias of `token`
   */
  createColony(
    token: string | TokenData,
    label: string,
  ): MetaTxCreator<
    IColonyNetwork,
    'createColonyForFrontend',
    Expand<
      ColonyNetworkEvents.TokenDeployedEventObject &
        ColonyNetworkEvents.ColonyAddedEventObject &
        ColonyNetworkEvents.TokenAuthorityDeployedEventObject & {
          metadata?: undefined;
        }
    >,
    MetadataType
  >;

  createColony(
    token: string | TokenData,
    label: string,
    metadata?: ColonyData | string,
  ) {
    const prepareArgs = async () => {
      const existingAddress = await this.getColonyAddress(label);

      if (existingAddress) {
        throw new Error(`Colony with label ${label} already exists`);
      }

      // TODO: check all arguments for existance

      if (typeof token != 'string') {
        if (!token.name) {
          throw new Error('Token name is required');
        }
        if (!token.symbol) {
          throw new Error('Token symbol is required');
        }
        // TODO: check decimals type

        return [
          AddressZero,
          token.name,
          token.symbol,
          token.decimals || 18,
          0,
          label,
          '',
        ] as [
          string,
          string,
          string,
          BigNumberish,
          BigNumberish,
          string,
          string,
        ];
      }

      return [token, '', '', 0, 0, label, ''] as [
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
      ];
    };

    if (!metadata) {
      return this.createMetaTxCreator(
        this.contract,
        'createColonyForFrontend',
        prepareArgs,
        async (receipt) => ({
          ...extractEvent<ColonyNetworkEvents.TokenDeployedEventObject>(
            'TokenDeployed',
            receipt,
          ),
          ...extractEvent<ColonyNetworkEvents.ColonyAddedEventObject>(
            'ColonyAdded',
            receipt,
          ),
          // eslint-disable-next-line max-len
          ...extractEvent<ColonyNetworkEvents.TokenAuthorityDeployedEventObject>(
            'TokenAuthorityDeployed',
            receipt,
          ),
        }),
      );
    }

    return this.createMetaTxCreator(
      this.contract,
      'createColonyForFrontend',
      async () => {
        const args = await prepareArgs();
        if (typeof metadata == 'string') {
          args[6] = metadata;
        } else {
          args[6] = await this.config.ipfs.uploadMetadata(
            MetadataType.Colony,
            metadata,
          );
        }
        return args;
      },
      async (receipt) => ({
        ...extractEvent<ColonyNetworkEvents.TokenDeployedEventObject>(
          'TokenDeployed',
          receipt,
        ),
        ...extractEvent<ColonyNetworkEvents.ColonyAddedEventObject>(
          'ColonyAdded',
          receipt,
        ),
        ...extractEvent<ColonyNetworkEvents.TokenAuthorityDeployedEventObject>(
          'TokenAuthorityDeployed',
          receipt,
        ),
      }),
      {
        metadataType: MetadataType.Colony,
      },
    );
  }

  /**
   * Get a new instance of a Colony
   *
   * Use this function to instantiate a new `Colony` by providing the Colony's address
   *
   * @remarks
   * Colony contracts are versioned. If the deployed Colony version does not match the supported version an error will be thrown
   *
   * @param address - The Colony's address
   * @returns A Colony abstaction instance
   */
  async getColony(address: string): Promise<Colony> {
    return Colony.connect(this, address);
  }

  /**
   * Get a new instance of the MetaColony
   *
   * Use this function to instantiate a new `Colony` for the deployed MetaColony
   *
   * @returns A Colony abstaction instance of the MetaColony
   */
  async getMetaColony(): Promise<Colony> {
    const colonyAddress = await this.contract.getMetaColony();
    return this.getColony(colonyAddress);
  }

  /**
   * Get the colony's ENS label
   *
   * Returns the colony's ENS label, just like it's shown in the browsers address bar after `/colony/`, when using the dApp.
   * Will return `null` if the colony does not exist or if no label was assigned yet
   *
   * @returns The colony's ENS label
   */
  async getColonyLabel(address: string) {
    const ensName = await this.contract.lookupRegisteredENSDomain(address);
    if (ensName) {
      return ensName.replace(ColonyLabelSuffix[this.config.network], '');
    }
    return null;
  }

  /**
   * Get the colony's addess by the ENS label
   *
   * Returns the colony's address that belongs to the given ENS label
   * Will return `null` if the given label was not assigned to a colony.
   *
   * @returns The colony's address
   */
  async getColonyAddress(label: string) {
    const hash = namehash(`${label}${ColonyLabelSuffix[this.config.network]}`);
    const address = await this.contract.addr(hash);
    if (address !== AddressZero) {
      return address;
    }
    return null;
  }

  /**
   * Get a user's username
   *
   * Returns the user's username (the ENS label, just like it's shown in the dapp, without any suffixes)
   * Will return `null` if the user does not exist or if no label was assigned yet
   *
   * @returns The user's username
   */
  async getUsername(address: string) {
    const ensName = await this.contract.lookupRegisteredENSDomain(address);
    if (ensName) {
      return ensName.replace(UserLabelSuffix[this.config.network], '');
    }
    return null;
  }

  /**
   * Get the user's addess by the username
   *
   * Returns the user's address that belongs to the given username. Username has to be provided without any suffix, just like it's shown in the dapp.
   * Will return `null` if the given username was not registered.
   *
   * @returns The user's address
   */
  async getUserAddress(username: string) {
    const hash = namehash(`${username}${UserLabelSuffix[this.config.network]}`);
    const address = await this.contract.addr(hash);
    if (address !== AddressZero) {
      return address;
    }
    return null;
  }

  /**
   * Register a Colony-internal ENS username
   *
   * Registers a username for the signing address. An address can only register one username. Usernames are globally unique. This method will check whether the username was registered before.
   *
   * @returns A transaction creator
   */
  registerUsername(username: string) {
    const checkUsername = async () => {
      const existingAddress = await this.getColonyAddress(username);

      if (existingAddress) {
        throw new Error(`Username ${username} is already taken`);
      }
      return [username, ''] as [string, string];
    };
    return this.createMetaTxCreator(
      this.contract,
      'registerUserLabel',
      checkUsername,
      async (receipt) => ({
        ...extractEvent<ColonyNetworkEvents.UserLabelRegisteredEventObject>(
          'UserLabelRegistered',
          receipt,
        ),
      }),
    );
  }

  /**
   * Deploy a "special" Colony ERC20 token
   *
   * If there is not token yet that should be used with the Colony, this is the canonical way to create one.
   *
   * This is a supercharged ERC20 token contract, that not only has a permissioned `mint` function (that can be used from the colony) but also supports Metatransactions. In order to fully use its permissioned system with a Colony, some extra steps have to be taken. See the [Colony Creation Guide](../../guides/colony-creation.md).
   *
   * @remarks
   * The token deployed with this function is locked by default. Call `unlockToken()` on the Colony at a later point to unlock it.
   *
   * @returns A transaction creator
   */
  deployToken(name: string, symbol: string, decimals = 18) {
    return this.createMetaTxCreator(
      this.contract,
      'deployTokenViaNetwork',
      [name, symbol, decimals],
      async (receipt) => ({
        ...extractEvent<ColonyNetworkEvents.TokenDeployedEventObject>(
          'TokenDeployed',
          receipt,
        ),
      }),
    );
  }
}

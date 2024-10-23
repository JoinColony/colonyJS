import {
  BigNumber,
  type BigNumberish,
  type BytesLike,
  type ContractReceipt,
} from 'ethers';
import {
  type ColonyVersion,
  Id,
  ColonyRole,
  ReputationClient,
  getChildIndex,
  getContractVersion,
  getExtensionHash,
  getPermissionProofs,
  isExtensionCompatible,
  hex2ColonyRoles,
  colonyRoles2Hex,
} from '@colony/core';
import {
  type AnnotationData,
  type ColonyEvents,
  type ColonyNetworkEvents,
  type ColonyData,
  type DomainData,
  MetadataType,
} from '@colony/events';

import type { Expand, Parameters, ParametersFrom2 } from '../types.js';
import type { ColonyDataTypes as ColonyDataTypes10 } from '../contracts/IColony/10/IColony.js';
import type { ColonyDataTypes as ColonyDataTypes11 } from '../contracts/IColony/11/IColony.js';
import type { ColonyDataTypes as ColonyDataTypes12 } from '../contracts/IColony/12/IColony.js';
import type { IBasicMetaTransaction } from '../contracts/IBasicMetaTransaction.js';

import {
  type IColony as ColonyContract11,
  IColony__factory as ColonyFactory11,
} from '../contracts/IColony/11/index.js';
import {
  type IColony as ColonyContract12,
  IColony__factory as ColonyFactory12,
} from '../contracts/IColony/12/index.js';
import {
  type IColony as ColonyContract13,
  IColony__factory as ColonyFactory13,
} from '../contracts/IColony/13/index.js';
import {
  type PermissionConfig,
  type TxConfig,
  ColonyTxCreator,
} from '../TxCreator/index.js';
import { extractEvent, extractCustomEvent } from '../utils.js';
import { type ColonyNetwork } from './ColonyNetwork.js';
import { OneTxPayment } from './OneTxPayment.js';
import { ERC20Token, type Token, getToken } from './tokens/index.js';
import { VotingReputation } from './VotingReputation.js';

export type SupportedColonyContract =
  | ColonyContract11
  | ColonyContract12
  | ColonyContract13;
export type SupportedColonyMethods = SupportedColonyContract['functions'];

export type Domain =
  | ColonyDataTypes10.DomainStructOutput
  | ColonyDataTypes11.DomainStructOutput
  | ColonyDataTypes12.DomainStructOutput;

/** Extensions that are supported by Colony SDK */
export enum SupportedExtension {
  /** Motions & Disputes (VotingReputation) */
  motion = 'motion',
  /** One Transaction Payment (OneTxPayment - enabled by default in Dapp created colonies) */
  oneTx = 'oneTx',
}

const supportedExtensionMap = {
  [SupportedExtension.motion]: VotingReputation,
  [SupportedExtension.oneTx]: OneTxPayment,
} as const;

export interface SupportedExtensions {
  motions?: VotingReputation;
  oneTx?: OneTxPayment;
}

export class Colony {
  /**
   * The currently supported Colony versions. If a Colony version is not included here it has to be upgraded.
   * If this is not an option, Colony SDK might throw errors at certain points. Usage of ColonyJS is advised in these cases
   */
  static supportedVersions = [
    { version: 11, factory: ColonyFactory11 },
    { version: 12, factory: ColonyFactory12 },
    { version: 13, factory: ColonyFactory13 },
  ];

  /**
   * Create an instance of a Colony client and connect the Network to it
   *
   * Only supports the latest 3 versions of the Colony contract
   *
   * @param colonyNetwork - The ColonyNetwork instance
   * @param address - The Colony's address
   *
   * @returns A connected Colony instance
   */
  static async connect(colonyNetwork: ColonyNetwork, address: string) {
    const version = (await getContractVersion(
      address,
      colonyNetwork.signerOrProvider,
    )) as ColonyVersion;

    const Factory = Colony.supportedVersions.find(
      (v) => v.version === version,
    )?.factory;

    if (!Factory) {
      throw new Error(
        `Version ${version} of the Colony contract is not supported in the SDK as of now`,
      );
    }

    const colonyContract = Factory.connect(
      address,
      colonyNetwork.signerOrProvider,
    );

    const tokenAddress = await colonyContract.getToken();
    const token = await getToken(colonyNetwork, tokenAddress);
    const colony = new Colony(colonyNetwork, colonyContract, token, version);
    await colony.updateExtensions();
    return colony;
  }

  /*
   * Get the latest supported version of a Colony in Colony SDK.
   *
   * Currently we only support one version but this might change in the future
   *
   * @returns The latest supported version for the Colony contract
   */
  static getLatestSupportedVersion(): ColonyVersion {
    return Colony.supportedVersions[Colony.supportedVersions.length - 1]
      .version as ColonyVersion;
  }

  private colony: SupportedColonyContract;

  /**
   * The colony's smart contract address
   */
  address: string;

  /**
   * A shortcut to the {@link ColonyNetwork} instance
   */
  colonyNetwork: ColonyNetwork;

  /**
   * The client to fetch reputation for this Colony
   */
  reputation: ReputationClient;

  /**
   * An shortcut to the colony's native token instance
   */
  token: Token;

  /**
   * Supported extensions
   *
   * All of the installed (and supported) colony extensions live here
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Pay someone using the OneTransactionPayment extension
   *   // (forced transaction example)
   *   await colony.ext.oneTx.pay(
   *      '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *      w`10`,
   *   ).tx().mined();
   * })();
   * ```
   */
  ext: SupportedExtensions;

  /**
   * Contract version
   *
   * Colony contracts are upgradable! Here you'll finde the currently installed version of the contract
   */
  version: ColonyVersion;

  /**
   * Creates a new instance to connect to an existing Colony
   *
   * @internal
   *
   * @remarks
   * Do not use this method directly but use {@link ColonyNetwork.getColony}
   */
  constructor(
    colonyNetwork: ColonyNetwork,
    colony: SupportedColonyContract,
    token: Token,
    deployedVersion: ColonyVersion,
  ) {
    this.colony = colony;
    this.colonyNetwork = colonyNetwork;
    this.address = colony.address;
    this.ext = {};
    this.reputation = new ReputationClient(
      colonyNetwork.getInternalNetworkContract(),
      colony,
      { customEndpointUrl: colonyNetwork.config.reputationOracleEndpoint },
    );
    this.token = token;
    this.version = deployedVersion;
  }

  /**
   * Creates a new {@link ColonyTxCreator} for non-permissioned Colony transactions
   *
   * @internal
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   * @param contract - A ColonyJS contract
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param eventData - A function that extracts the relevant event data from the {@link ContractReceip}
   * @param txConfig - More configuration options, like {@link MetadataType} if the event contains metadata or if methods are unsupported
   * @returns A {@link ColonyTxCreator}
   */
  createColonyTxCreator<
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
    return new ColonyTxCreator({
      colony: this,
      colonyNetwork: this.colonyNetwork,
      contract,
      method,
      args,
      eventData,
      txConfig,
    });
  }

  /**
   * Creates a new {@link ColonyTxCreator} for permissioned Colony transactions
   *
   * @internal
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   * @param contract - A ColonyJS contract
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param permissionConfig - Relevant configuration for the permissioned Colony function
   * @param eventData - A function that extracts the relevant event data from the {@link ContractReceipt}
   * @param txConfig - More configuration options, like {@link MetadataType} if the event contains metadata or if methods are unsupported
   * @returns A permissioned {@link ColonyTxCreator}
   */
  createPermissionedColonyTxCreator<
    C extends IBasicMetaTransaction,
    F extends keyof C['functions'],
    D extends Record<string, unknown>,
    M extends MetadataType,
  >(
    contract: C,
    method: F,
    args:
      | ParametersFrom2<C['functions'][F]>
      | (() => Promise<ParametersFrom2<C['functions'][F]>>),
    permissionConfig: PermissionConfig,
    eventData?: (receipt: ContractReceipt) => Promise<D>,
    txConfig?: TxConfig<M>,
  ) {
    return new ColonyTxCreator({
      colony: this,
      colonyNetwork: this.colonyNetwork,
      contract,
      method,
      args,
      permissionConfig,
      eventData,
      txConfig,
    });
  }

  /**
   * Provide direct access to the internally used ColonyJS client. Only use when you know what you're doing
   *
   * @internal
   * @returns The internally used ColonyClient
   */
  getInternalColonyContract(): SupportedColonyContract {
    return this.colony;
  }

  /**
   * Refresh colony extensions
   *
   * Call this function after a new extension was installed.
   * It will then become available under `colony.ext`
   */
  async updateExtensions() {
    // NOTE: Create an individual try-catch block for every extension
    if (!this.ext.motions) {
      try {
        this.ext.motions = await VotingReputation.connect(this);
      } catch (e) {
        if (typeof process != 'undefined' && process?.env?.DEBUG) {
          console.error(e);
        }
      }
    }

    if (!this.ext.oneTx) {
      try {
        this.ext.oneTx = await OneTxPayment.connect(this);
      } catch (e) {
        if (typeof process != 'undefined' && process?.env?.DEBUG) {
          console.error(e);
        }
      }
    }
  }

  /**
   * Get a token balance for a specific token and team. Defaults to the Colony's native token and the `Root` team.
   *
   * @remarks
   * The function will automatically figure out the corresponding pot for the given domain, as this is what's usually expected.
   * @example
   * Get the xDAI balance of the team number 2
   * ```typescript
   * import { constants } from 'ethers';
   * import { toEth } from '@colony/sdk';
   * // The `AddressZero` means ETH on most networks
   * const balance = await colony.getBalance(constants.AddressZero, 2);
   * // This will format the balance as a string in eth and not wei (i.e. 1.0 vs. 1000000000000000000)
   * console.info(toEth(balance));
   * ```
   * @param tokenAddress - The address of the token to get the balance for. Default is the Colony's native token
   * @param teamId - The teamId (domainId) of the team to get the balance for. If not given, it will return the total balance of that token across the whole Colony (including non-claimed funds)
   * @returns A token balance in [wei](https://gwei.io/)
   */
  async getBalance(tokenAddress?: string, teamId?: BigNumberish) {
    if (teamId) {
      const { fundingPotId } = await this.colony.getDomain(teamId);
      const potId = fundingPotId;
      const token = tokenAddress || this.token.address;
      return this.colony.getFundingPotBalance(potId, token);
    }
    const token = tokenAddress
      ? new ERC20Token(this.colonyNetwork, tokenAddress)
      : this.token;
    return token.balanceOf(this.address);
  }

  /**
   * Edit a colony's metadata
   *
   * @remarks
   * This will overwrite all exisiting metadata!
   *
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *   // Edit the metadata of a colony
   *   // (forced transaction example)
   *   // (also notice that this requires an upload-capable IPFS adapter)
   *   await colony.edit({
   *     colonyDisplayName: 'My super cool Colony',
   *   }).tx().mined();
   * })();
   * ```
   *
   * @param metadata - The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If {@link ColonyData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS (like the {@link PinataAdapter} See its documentation for more information.
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `colonyId` | BigNumber | Auto-incremented integer id of the colony |
   * | `colonyAddress` | string | Address of the newly deployed colony contract |
   * | `token` | string | Address of the token that is used as the colony's native token |
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
  edit(metadata: ColonyData | string) {
    return this.createColonyTxCreator(
      this.colony,
      'editColony',
      async () => {
        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Colony,
            metadata,
          );
        }
        return [cid] as [string];
      },
      async (receipt) => ({
        ...extractEvent<ColonyEvents.ColonyMetadataEventObject>(
          'ColonyMetadata',
          receipt,
        ),
      }),
      {
        metadataType: MetadataType.Colony,
      },
    );
  }

  /**
   * Create a team (domain) within a Colony with team details as metadata
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   *
   * @example
   * ```typescript
   * import { TeamColor } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Create team of the butter-passers
   *   // (forced transaction example)
   *   // (also notice that this requires an upload-capable IPFS adapter)
   *   await colony.createTeam({
   *     domainName: 'Butter-passers',
   *     domainColor: TeamColor.Gold,
   *     domainPurpose: 'To pass butter',
   *   }).tx().mined();
   * })();
   * ```
   *
   * @param metadata - The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If {@link DomainData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS (like the {@link PinataAdapter}). See its documentation for more information.
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Architecture}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | Integer domain id of the created team |
   * | `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |
   * | `metadata` | string | IPFS CID of metadata attached to this transaction |
   *
   * #### Metadata
   *
   * (can be obtained by calling and awaiting the `getMetadata` function)
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `domainName` | string | The human readable name assigned to this team |
   * | `domainColor` | string | The color assigned to this team |
   * | `domainPurpose` | string | The purpose for this team (a broad description) |
   */
  createTeam(
    metadata: DomainData | string,
  ): ColonyTxCreator<
    SupportedColonyContract,
    'addDomain(uint256,uint256,uint256,string)',
    Expand<
      ColonyEvents.DomainAdded_uint256_EventObject &
        ColonyEvents.FundingPotAddedEventObject & { metadata: string }
    >,
    MetadataType.Domain
  >;

  /**
   * Create a team (domain) within a Colony with no metadata attached
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Architecture}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | Integer domain id of the created team |
   * | `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |
   */
  createTeam(): ColonyTxCreator<
    SupportedColonyContract,
    'addDomain(uint256,uint256,uint256,string)',
    Expand<
      ColonyEvents.DomainAdded_uint256_EventObject &
        ColonyEvents.FundingPotAddedEventObject & { metadata: undefined }
    >,
    MetadataType
  >;

  createTeam(metadata?: DomainData | string) {
    if (!metadata) {
      return this.createPermissionedColonyTxCreator(
        this.colony,
        'addDomain(uint256,uint256,uint256)',
        [Id.RootDomain],
        {
          roles: ColonyRole.Architecture,
          domain: Id.RootDomain,
        },
        async (receipt) => ({
          ...extractEvent<ColonyEvents.DomainAdded_uint256_EventObject>(
            'DomainAdded',
            receipt,
          ),
          ...extractEvent<ColonyEvents.FundingPotAddedEventObject>(
            'FundingPotAdded',
            receipt,
          ),
        }),
      );
    }

    return this.createPermissionedColonyTxCreator(
      this.colony,
      'addDomain(uint256,uint256,uint256,string)',
      async () => {
        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Domain,
            metadata,
          );
        }
        return [Id.RootDomain, cid] as [BigNumberish, string];
      },
      {
        roles: ColonyRole.Architecture,
        domain: Id.RootDomain,
      },
      async (receipt) => ({
        ...extractEvent<ColonyEvents.DomainAdded_uint256_EventObject>(
          'DomainAdded',
          receipt,
        ),
        ...extractEvent<ColonyEvents.FundingPotAddedEventObject>(
          'FundingPotAdded',
          receipt,
        ),
        ...extractEvent<ColonyEvents.DomainMetadataEventObject>(
          'DomainMetadata',
          receipt,
        ),
      }),
      { metadataType: MetadataType.Domain },
    );
  }

  /**
   * Edit a team (domain) within a Colony with team details as metadata
   *
   * @remarks
   * This will overwrite all exisiting metadata!
   *
   * @example
   * ```typescript
   * import { TeamColor } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Edit team of the butter-passers
   *   // (forced transaction example)
   *   // (also notice that this requires an upload-capable IPFS adapter)
   *   await colony.editTeam({
   *     domainName: 'Purple Butter-passers',
   *     domainColor: TeamColor.Purple,
   *     domainPurpose: 'To pass purple butter',
   *   }).tx().mined();
   * })();
   * ```
   * @param metadata - The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If {@link DomainData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS (like the {@link PinataAdapter}). See its documentation for more information.
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Architecture}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | Integer domain id of the created team |
   * | `metadata` | string | IPFS CID of metadata attached to this transaction |
   *
   * #### Metadata
   *
   * (can be obtained by calling and awaiting the `getMetadata` function)
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `domainName` | string | The human readable name assigned to this team |
   * | `domainColor` | string | The color assigned to this team |
   * | `domainPurpose` | string | The purpose for this team (a broad description) |
   */
  editTeam(metadata: DomainData | string) {
    return this.createPermissionedColonyTxCreator(
      this.colony,
      'editDomain',
      async () => {
        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Domain,
            metadata,
          );
        }
        return [Id.RootDomain, cid] as [BigNumberish, string];
      },
      {
        roles: ColonyRole.Architecture,
        domain: Id.RootDomain,
      },
      async (receipt) => ({
        ...extractEvent<ColonyEvents.DomainMetadataEventObject>(
          'DomainMetadata',
          receipt,
        ),
      }),
      { metadataType: MetadataType.Domain },
    );
  }

  /**
   * Deprecate (remove) or undeprecate a team
   *
   * Teams can be deprecated which will remove them from the UI. As they can't be deleted you can always undeprecate a team by passing `false` as the second argument.
   *
   * @param teamId - Team to be (un)deprecated
   * @param deprecated - `true`: Deprecate team; `false`: Undeprecate team
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Architecture}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | The id of the team that was (un)deprecated |
   * | `deprecated` | bool | Whether the team was deprecated or not |
   */
  deprecateTeam(teamId: BigNumberish, deprecated: boolean) {
    return this.createPermissionedColonyTxCreator(
      this.colony,
      'deprecateDomain',
      [teamId, deprecated],
      {
        roles: ColonyRole.Architecture,
        domain: teamId,
      },
      async (receipt) => ({
        ...extractEvent<ColonyEvents.DomainDeprecatedEventObject>(
          'DomainDeprecated',
          receipt,
        ),
      }),
    );
  }

  /**
   * Gets the team for `teamId`
   *
   * @remarks Will throw if teamId does not exist
   * @param teamId - The teamId to get the team information for
   * @returns A Team object
   */
  async getTeam(teamId: BigNumberish): Promise<Domain> {
    const teamCount = await this.colony.getDomainCount();
    if (teamCount.lt(teamId)) {
      throw new Error(`Team with id ${teamId} does not exist`);
    }
    return this.colony.getDomain(teamId);
  }

  /**
   * Claim outstanding Colony funds
   *
   * Anyone can call this function. Claims funds _for_ the Colony that have been sent to the Colony's contract address or minted funds of the Colony's native token. This function _has_ to be called in order for the funds to appear in the Colony's treasury. You can provide a token address for the token to be claimed. Otherwise it will claim the outstanding funds of the Colony's native token
   *
   * @remarks use `ethers.constants.AddressZero` to claim ETH.
   * @param tokenAddress - The address of the token to claim the funds for. Default is the Colony's native token
   * @returns A transaction creator
   *
   * #### Required permissions
   *
   * * Anyone can claim funds for the Colony
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `token` | string | The token address |
   * | `fee` | BigNumber | The fee deducted for rewards |
   * | `payoutRemainder` | BigNumber | The remaining funds moved to the top-level domain pot |
   */
  claimFunds(tokenAddress?: string) {
    const token = tokenAddress || this.token.address;

    return this.createColonyTxCreator(
      this.colony,
      'claimColonyFunds',
      [token],
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyEvents.ColonyFundsClaimed_address_uint256_uint256_EventObject>(
          'ColonyFundsClaimed',
          receipt,
        ),
      }),
    );
  }

  /**
   * Move funds from one team to another
   *
   * After sending funds to and claiming funds for your Colony they will land in a special team, the root team. If you want to make payments from other teams (in order to award reputation in that team) you have to move the funds there first. Use this method to do so.
   *
   * @remarks Requires the `Funding` permission in the root team. As soon as teams can be nested, this requires the `Funding` permission in a team that is a parent of both teams in which funds are moved.
   * @example
   * ```typescript
   * import { Tokens, w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Move 10 of the native token from team 2 to team 3
   *   // (forced transaction example)
   *   await colony.moveFundsToTeam(
   *      w`10`,
   *      2,
   *      3,
   *   ).tx().mined();
   * })();
   * ```
   * @param amount - Amount to transfer between the teams
   * @param toTeam - The team to transfer the funds to
   * @param fromTeam - The team to transfer the funds from. Default is the Root team
   * @param tokenAddress - The address of the token to be transferred. Default is the Colony's native token
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Funding} in both teams
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `fromPot` | BigNumber | The source funding pot |
   * | `toPot` | BigNumber | The target funding pot |
   * | `amount` | BigNumber | The amount that was transferred |
   * | `token` | string | The token address being transferred |
   */
  moveFundsToTeam(
    amount: BigNumberish,
    toTeam: BigNumberish,
    fromTeam?: BigNumberish,
    tokenAddress?: string,
  ) {
    const parentTeam = Id.RootDomain;
    const setFromTeam = fromTeam || Id.RootDomain;
    const setTokenAddress = tokenAddress || this.token.address;

    return this.createColonyTxCreator(
      this.colony,
      // eslint-disable-next-line max-len
      'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)',
      async () => {
        const domain = await this.colony.getDomain(toTeam);
        if (domain.fundingPotId.isZero()) {
          throw new Error(
            `Team with id ${BigNumber.from(toTeam).toString()} does not exist`,
          );
        }
        // Manual permission proofs are needed here
        const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
          this.colonyNetwork.getInternalNetworkContract(),
          this.colony,
          parentTeam,
          ColonyRole.Funding,
        );

        const networkClient = this.colonyNetwork.getInternalNetworkContract();

        const fromChildSkillIndex = await getChildIndex(
          networkClient,
          this.colony,
          parentTeam,
          setFromTeam,
        );

        const toChildSkillIndex = await getChildIndex(
          networkClient,
          this.colony,
          parentTeam,
          toTeam,
        );

        const { fundingPotId: fromPot } = await this.colony.getDomain(
          setFromTeam,
        );
        const { fundingPotId: toPot } = await this.colony.getDomain(toTeam);

        return [
          permissionDomainId,
          childSkillIndex,
          parentTeam,
          fromChildSkillIndex,
          toChildSkillIndex,
          fromPot,
          toPot,
          amount,
          setTokenAddress,
        ] as [
          BigNumberish,
          BigNumberish,
          BigNumberish,
          BigNumberish,
          BigNumberish,
          BigNumberish,
          BigNumberish,
          BigNumberish,
          string,
        ];
      },
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyEvents.ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventObject>(
          'ColonyFundsMovedBetweenFundingPots',
          receipt,
        ),
      }),
    );
  }

  /**
   * Get the reputation fraction for a user address within a team in the Colony
   *
   * 1.000 = user has 100% of the reputation
   * 0.050 = user has 5% of the reputation
   *
   * @param userAddress - The address of the account to check the reputation for
   * @param teamId - The teamId (domainId) of the team to get the reputation for. Default is the `Root` team
   * @returns A fractional number quantifying the user addresses' reputation
   */
  async getReputation(
    userAddress: string,
    teamId: BigNumberish = Id.RootDomain,
    decimalPoints = 3,
  ) {
    const { skillId } = await this.colony.getDomain(teamId);
    return this.reputation.getReputationFraction(
      skillId,
      userAddress,
      undefined,
      decimalPoints,
    );
  }

  /**
   * Get the reputation for a user address within a team in the Colony
   *
   * Reputation scales with the native token, so will be expressed in equivalents of the native token
   * E.g. if the native token has 18 decimals (wei), the reputation will also have 18 decimals
   *
   * @param userAddress - The address of the account to check the reputation for
   * @param teamId - The teamId (domainId) of the team to get the reputation for. Default is the `Root` team
   * @returns A number quantifying the user addresses' reputation
   */
  async getReputationPoints(userAddress: string, teamId = Id.RootDomain) {
    const { skillId } = await this.colony.getDomain(teamId);
    const { reputationAmount } = await this.reputation.getReputation(
      skillId,
      userAddress,
    );
    return reputationAmount;
  }

  /**
   * Get the reputation for a user address across all teams in the Colony
   *
   * @param userAddress - The address of the account to check the reputation for
   * @returns An array of objects containing the following
   *
   * | Property | Description |
   * | :------ | :------ |
   * | `domainId` | The domainId of the domain the user has reputation in |
   * | `skillId` | The corresponding skillId |
   * | `reputationAmount` | The reputation amount in that domain |
   */
  async getReputationAcrossTeams(userAddress: string) {
    return this.reputation.getReputationAcrossDomains(userAddress);
  }

  /**
   * Execute an arbitrary transaction in the name of the Colony
   *
   * This method can execute a transaction on any Ethereum Smart Contract with the Colony address as the sender. The action needs to be encoded function data (see https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--encoding). We provide some common interfaces for you to make it even easier.
   *
   * @remarks
   * This method can't be executed as a MetaTransaction
   *
   * @example Mint an NFT from a Colony
   * ```typescript
   * import { ERC721Interface } from '@colony/sdk';
   *
   * // Mint an NFT for address 0xb794f5ea0ba39494ce839613fffba74279579268
   * // (forced transaction example)
   * const encodedAction = ERC721Interface.encodeFunctionData(
   *  'mintTo',
   *  '0xb794f5ea0ba39494ce839613fffba74279579268',
   * );
   *
   * // Immediately executing async function
   * (async function() {
   *   await colony.makeArbitraryTransaction(
   *      // NFT contract address
   *      '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
   *      // encoded transaction from above
   *      encodedAction
   *   ).tx().mined();
   * })();
   * ```
   * @param target - Address of the contract to execute a method on
   * @param action - Encoded action to execute
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * **No event data**
   */
  makeArbitraryTransaction(target: string, action: BytesLike) {
    return this.createColonyTxCreator(
      this.colony,
      'makeArbitraryTransactions',
      [[target], [action], false],
      async (receipt) => ({
        ...extractEvent<ColonyEvents.ArbitraryTransactionEventObject>(
          'ArbitraryTransaction',
          receipt,
        ),
      }),
    );
  }

  /**
   * Annotate a transaction with IPFS metadata to provide extra information
   *
   * This will annotate a transaction with an arbitrary text message. This only really works for transactions that happened within this Colony. This will connect the transaction to the (optionally generated) IPFS hash accordingly.
   *
   * @remarks If {@link AnnotationData} is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an {@link IpfsAdapter} that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *
   *   // Create a motion to pay 10 of the native token to some (maybe your own?) address
   *   const [, { transactionHash }] = await colony.ext.oneTx.pay(
   *     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *     w`10`,
   *   ).motion();
   *   // Annotate the motion transaction with a little explanation :)
   *   // (forced transaction example)
   *   await colony.annotateTransaction(
   *      transactionHash,
   *      { annotationMsg: 'I am creating this motion because I think I deserve a little bonus' },
   *   ).tx().mined();
   * })();
   * ```
   * @param txHash - Transaction hash of the transaction to annotate (within the Colony)
   * @param metadata - The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata)
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `txHash` | BigNumber | The hash of the annotated transaction |
   * | `metadata` | BigNumber | The IPFS hash (CID) of the metadata object |
   *
   * #### Metadata
   *
   * (can be obtained by calling and awaiting the `getMetadata` function)
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `annotationMsg` | string | Free form text message to annotate the transaction with |
   */
  annotateTransaction(txHash: string, metadata: AnnotationData | string) {
    return this.createColonyTxCreator(
      this.colony,
      'annotateTransaction',
      async () => {
        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Annotation,
            metadata,
          );
        }
        return [txHash, cid] as [string, string];
      },
      async (receipt) => ({
        ...extractEvent<ColonyEvents.AnnotationEventObject>(
          'Annotation',
          receipt,
        ),
      }),
      { metadataType: MetadataType.Annotation },
    );
  }

  /**
   * Install an extension for a colony
   *
   * Valid extensions can be found here: {@link SupportedExtension}
   *
   * @remarks
   * Be aware that some extensions need some extra setup steps (like the `initialise` method on `VotingReputation`).
   * After an extension was installed, `colony.updateExtensions()` needs to be called (see example)
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *   // Install the OneTxPayment extension for Colony
   *   // (forced transaction example)
   *   await colony.installExtension(
   *     SupportedExtension.oneTx,
   *   ).tx().mined();
   *   // Update the extensions in the colony
   *   await colony.updateExtensions();
   *   console.info(colony.ext.oneTx.address);
   * })();
   * ```
   * @param extension - Name of the extension you'd like to install
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `extensionId` | string | Id (name) of the extension (e.g. `OneTxPayment`) |
   * | `colony` | string | The address of the colony on which the extension was installed |
   * | `version` | BigNumber | The version of the extension that was installed |
   */
  installExtension(extension: SupportedExtension) {
    const Extension = supportedExtensionMap[extension];
    const version = Extension.getLatestSupportedVersion();
    const { extensionType } = Extension;
    if (!isExtensionCompatible(extensionType, version, this.version)) {
      throw new Error(
        `v${version} of ${extensionType} extension is not compatible with colony v${this.version}`,
      );
    }
    const networkClient = this.colonyNetwork.getInternalNetworkContract();
    return this.createColonyTxCreator(
      this.colony,
      'installExtension',
      [getExtensionHash(extensionType), Extension.getLatestSupportedVersion()],
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractCustomEvent<ColonyNetworkEvents.ExtensionInstalledEventObject>(
          'ExtensionInstalled',
          receipt,
          networkClient.interface,
        ),
      }),
    );
  }

  /**
   * Get roles for a user/contract/wallet in a Colony and domain
   *
   * @example
   * ```typescript
   * import { ColonyRole } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Get roles for the given user address for the team 2
   *   const roles = await colony.getRoles('0xb794f5ea0ba39494ce839613fffba74279579268', 2);
   *   // Check if user has 'Administration' role
   *   if (roles.includes(ColonyRole.Administration)) {
   *     console.log('Hoooray, user is admin');
   *   }
   * })();
   * ```
   * @param address - Address of the wallet or contract to check the roles of
   * @param teamId - Team in which to check the roles of given user
   * @returns An array of {@link ColonyRole}s
   */
  async getRoles(address: string, teamId: BigNumberish = Id.RootDomain) {
    const roleString = await this.colony.getUserRoles(address, teamId);
    return hex2ColonyRoles(roleString);
  }

  /**
   * Set (award) roles to a user/contract
   *
   * @remarks
   * Existing roles will be kept. Use {@link unsetRoles} to remove roles
   * @example
   * ```typescript
   * import { ColonyRole } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Give Administration and Root role to address 0xb794f5ea0ba39494ce839613fffba74279579268 (in Root team)
   *   // (forced transaction example)
   *   await colony.setRoles(
   *     '0xb794f5ea0ba39494ce839613fffba74279579268',
   *     [ColonyRole.Administration, ColonyRole.Root],
   *   ).tx().mined();
   * })();
   * ```
   * @param address - Address of the wallet or contract to give the roles to
   * @param roles - Role or array of roles to award
   * @param teamId - Team to apply the role(s) in
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Architecture}, {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * Heads up!* This event is emitted for every role that was set
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `user` | string | Address of the user who was awarded the role |
   * | `domainId` | BigNumber | The team the role was awarded for |
   * | `role` | number | The number of the role that was awarded. Use `ColonyRole[role]` to get the title of the role |
   * | `setTo` | number | Whether the role was awarded or removed |
   */
  setRoles(
    address: string,
    roles: ColonyRole | ColonyRole[],
    teamId: BigNumberish = Id.RootDomain,
  ) {
    return this.createPermissionedColonyTxCreator(
      this.colony,
      'setUserRoles',
      async () => {
        const oldRoles = await this.getRoles(address, teamId);
        const newRoles = Array.from(
          new Set([...oldRoles, ...([] as ColonyRole[]).concat(roles)]),
        );
        const hexRoles = colonyRoles2Hex(newRoles);
        return [address, teamId, hexRoles] as [string, BigNumber, string];
      },
      {
        roles: ColonyRole.Architecture,
        domain: teamId,
      },
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyEvents.ColonyRoleSet_address_address_uint256_uint8_bool_EventObject>(
          'ColonyRoleSet',
          receipt,
        ),
        ...extractEvent<ColonyEvents.RecoveryRoleSetEventObject>(
          'RecoveryRoleSet',
          receipt,
        ),
      }),
    );
  }

  /**
   * Unset (remove) roles from a user/contract
   *
   * @param address - Address of the wallet or contract to remove the roles from
   * @param roles - Role or array of roles to remove
   * @param teamId - Team to apply the role(s) in
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Architecture}, {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * Heads up!* This event is emitted for every role that was unset
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `user` | string | Address of the user of which the role was removed |
   * | `domainId` | BigNumber | The team the role was removed for |
   * | `role` | number | The number of the role that was removed. Use `ColonyRole[role]` to get the title of the role |
   * | `setTo` | number | Whether the role was awarded or removed |
   */
  unsetRoles(
    address: string,
    roles: ColonyRole | ColonyRole[],
    teamId: BigNumberish = Id.RootDomain,
  ) {
    return this.createPermissionedColonyTxCreator(
      this.colony,
      'setUserRoles',
      async () => {
        const oldRoles = await this.getRoles(address, teamId);
        const newRoles = oldRoles.filter(
          (role) => !([] as ColonyRole[]).concat(roles).includes(role),
        );
        const hexRoles = colonyRoles2Hex(newRoles);
        return [address, teamId, hexRoles] as [string, BigNumber, string];
      },
      {
        roles: ColonyRole.Architecture,
        domain: teamId,
      },
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyEvents.ColonyRoleSet_address_address_uint256_uint8_bool_EventObject>(
          'ColonyRoleSet',
          receipt,
        ),
        ...extractEvent<ColonyEvents.RecoveryRoleSetEventObject>(
          'RecoveryRoleSet',
          receipt,
        ),
      }),
    );
  }

  /**
   * Mints `amount` of a Colony's native token.
   *
   * @remarks
   * Only works for native tokens deployed with Colony (not imported tokens). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example). Also not that for tokens to be available in the Colony after funding, you need to call the {@link Colony.claimFunds} method after minting.
   *
   * @example
   * ```typescript
   * import { w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Mint 100 tokens of the Colony's native token
   *   // (forced transaction example)
   *   await colony.mint(w`100`).tx().mined();
   *   // Claim the minted tokens for the Colony
   *   // (forced transaction example)
   *   await colony.claimFunds().tx().mined();
   * })();
   * ```
   *
   * @param amount - Amount of the token to be minted
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `who` | string | Address the tokens were minted for (usually the colony) |
   * | `amount` | BigNumber | Amount that was minted |
   */
  mint(amount: BigNumberish) {
    return this.createColonyTxCreator(
      this.colony,
      'mintTokens',
      [amount],
      async (receipt) => ({
        ...extractEvent<ColonyEvents.TokensMintedEventObject>(
          'TokensMinted',
          receipt,
        ),
      }),
    );
  }

  /**
   * Deploys the so called TokenAuthority for the colony's native token
   *
   * The TokenAuthority determines which addresses are allowed to do certain token actions like minting, or transferring them even though they are locked.
   * By default only the Colony can transfer a locked token. In the first argument you can specify a list of additional (excluding the colony) addresses that are allowed to transfer a locked token
   *
   * @remarks
   * Only works for native tokens deployed with Colony (not imported tokens).
   *
   * @param allowedToTransfer - List of addresses (excluding the colony) that can transfer the token when it's locked
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `tokenAuthorityAddress` | string | The address of the newly deployed TokenAuthority contract |
   */
  deployTokenAuthority(allowedToTransfer?: string[]) {
    const networkClient = this.colonyNetwork.getInternalNetworkContract();
    return this.colonyNetwork.createMetaTxCreator(
      networkClient,
      'deployTokenAuthority',
      async () => {
        let allowed: string[] = [];
        const tokenLockingAddress = await networkClient.getTokenLocking();
        if (!allowedToTransfer) {
          allowed = [tokenLockingAddress];
        } else {
          allowed = [...allowedToTransfer, tokenLockingAddress];
        }
        return [this.token.address, this.address, allowed] as [
          string,
          string,
          string[],
        ];
      },
      async (receipt) => ({
        ...extractEvent<ColonyNetworkEvents.TokenAuthorityDeployedEventObject>(
          'TokenAuthorityDeployed',
          receipt,
        ),
      }),
    );
  }

  /**
   * Put the colony into Recovery Mode
   *
   * In Recovery Mode, no actions are possible on the colony. Only users who have the special *Recovery* role can put a colony into this mode
   *
   * @remarks
   * Be aware that to exit Recovery Mode a quorum of 50% is needed of all users who have the *Recovery* role
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Recovery}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `user` | string | The address of the user who activated Recovery Mode |
   */
  enterRecoveryMode() {
    return this.createColonyTxCreator(
      this.colony,
      'enterRecoveryMode',
      [],
      async (receipt) => ({
        ...extractEvent<ColonyEvents.RecoveryModeEnteredEventObject>(
          'RecoveryModeEntered',
          receipt,
        ),
      }),
    );
  }

  /**
   * Exit Recovery Mode
   *
   * In Recovery Mode, no actions are possible on the colony. Only users who have the special *Recovery* role can execute this method. If you have multiple users with the *Recovery* role, at least 50% of the users have to execute this method for the Colony to leave Recovery Mode
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Recovery}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `user` | string | The address of the user who initiated the exit of Recovery Mode |
   */
  exitRecoveryMode() {
    return this.createColonyTxCreator(
      this.colony,
      'exitRecoveryMode',
      [],
      async (receipt) => ({
        ...extractEvent<ColonyEvents.RecoveryModeExitedEventObject>(
          'RecoveryModeExited',
          receipt,
        ),
      }),
    );
  }

  /**
   * Upgrade a colony to the next or a custom version
   *
   * This method upgrades the colony to a specified version or, if no version is provided to the next higher version.
   *
   * @remarks
   * * Only users with *Root* role are allowed to upgrade a colony (or an extension with appropriate permissions)
   * * Downgrading of colonies is not possible
   *
   * @param toVersion - Specify a custom version to upgrade the colony to
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `oldVersion` | BigNumber | Version of the colony before the upgrade |
   * | `newVersion` | BigNumber | Version of the colony after the upgrade |
   */
  upgrade(toVersion?: BigNumberish) {
    const version = toVersion || this.version + 1;
    return this.createColonyTxCreator(
      this.colony,
      'upgrade',
      [version],
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyEvents.ColonyUpgraded_uint256_uint256_EventObject>(
          'ColonyUpgraded',
          receipt,
        ),
      }),
    );
  }

  /**
   * Award reputation to a user within a team
   *
   * Use with care. An imbalance of native tokens and reputation might influence your governance process negatively
   *
   * @remarks
   * Only users with *Root* role are allowed to award reputation
   *
   * @param address - Address of user to award reputation
   * @param amount - Amount of reputation to award
   * @param team - Team to award reputation in (defaults to Root team)
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Root}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `user` | string | User who was awarded reputation |
   * | `skillId` | BigNumber | Corresponding skillId to the team |
   * | `amount` | BigNumber | Amount that was awarded |
   */
  awardReputation(
    address: string,
    amount: BigNumberish,
    team: BigNumberish = Id.RootDomain,
  ) {
    if (BigNumber.from(amount).lte(0)) {
      throw new Error('Reputation award must be bigger than 0');
    }
    return this.createColonyTxCreator(
      this.colony,
      'emitDomainReputationReward',
      [team, address, amount],
      async (receipt) => ({
        ...extractEvent<ColonyEvents.ArbitraryReputationUpdateEventObject>(
          'ArbitraryReputationUpdate',
          receipt,
        ),
      }),
    );
  }

  /**
   * Smite (remove) reputation from a user within a team
   *
   * Use with care. An imbalance of native tokens and reputation might influence your governance process negatively
   *
   * @remarks
   * Only users with *Arbitration* role are allowed to award reputation
   *
   * @param address - Address of user to smite reputation
   * @param amount - Amount of reputation to remove
   * @param team - Team to remove reputation in (defaults to Root team)
   *
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Arbitration}
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `user` | string | User who was awarded reputation |
   * | `skillId` | BigNumber | Corresponding skillId to the team |
   * | `amount` | BigNumber | Amount that was removed (will be negative) |
   */
  smiteReputation(
    address: string,
    amount: BigNumberish,
    team: BigNumberish = Id.RootDomain,
  ) {
    if (BigNumber.from(amount).lte(0)) {
      throw new Error('Reputation smite must be bigger than 0');
    }
    return this.createPermissionedColonyTxCreator(
      this.colony,
      'emitDomainReputationPenalty',
      [team, address, BigNumber.from(0).sub(amount)],
      {
        domain: team,
        roles: ColonyRole.Arbitration,
      },
      async (receipt) => ({
        ...extractEvent<ColonyEvents.ArbitraryReputationUpdateEventObject>(
          'ArbitraryReputationUpdate',
          receipt,
        ),
      }),
    );
  }
}

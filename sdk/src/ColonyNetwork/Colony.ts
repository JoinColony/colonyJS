import {
  ColonyClientV10,
  SignerOrProvider,
  Id,
  ColonyRole,
  IBasicMetaTransaction,
  getChildIndex,
  getPermissionProofs,
  isExtensionCompatible,
  getExtensionHash,
} from '@colony/colony-js';
import {
  AnnotationEventObject,
  ColonyDataTypes,
  ColonyFundsClaimed_address_uint256_uint256_EventObject,
  // eslint-disable-next-line max-len
  ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventObject,
  ColonyRoleSet_address_address_uint256_uint8_bool_EventObject,
  DomainAdded_uint256_EventObject,
  DomainDeprecatedEventObject,
  DomainMetadataEventObject,
  ExtensionInstalledEventObject,
  FundingPotAddedEventObject,
  RecoveryRoleSetEventObject,
} from '@colony/colony-js/extras';
import {
  AnnotationMetadata,
  DomainMetadata,
  MetadataType,
} from '@colony/colony-event-metadata-parser';
import {
  BigNumber,
  BigNumberish,
  BytesLike,
  ContractReceipt,
  utils,
} from 'ethers';

import type { Expand, Parameters, ParametersFrom2 } from '../types';

import { extractEvent, extractCustomEvent } from '../utils';
import { ColonyToken } from './ColonyToken';
import { ColonyNetwork } from './ColonyNetwork';
import { getOneTxPaymentClient, OneTxPayment } from './OneTxPayment';
import {
  getVotingReputationClient,
  VotingReputation,
} from './VotingReputation';
import { PermissionConfig, TxCreator } from './TxCreator';

export type SupportedColonyClient = ColonyClientV10;
export type SupportedColonyMethods = SupportedColonyClient['functions'];

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
   * The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
   * If this is not an option, Colony SDK might throw errors at certain points. Usage of ColonyJS is advised in these cases
   */
  static supportedVersions: 10[] = [10];

  private colonyClient: SupportedColonyClient;

  signerOrProvider: SignerOrProvider;

  address: string;

  colonyNetwork: ColonyNetwork;

  /**
   * An instance of the Colony's native token
   *
   * Currently only Tokens deployed via Colony are supported (no external, imported tokens) in Colony SDK. All other kinds will throw an error
   */
  colonyToken?: ColonyToken;

  ext: SupportedExtensions;

  version: number;

  /**
   * Creates a new instance to connect to an existing Colony
   *
   * @internal
   *
   * @remarks
   * Do not use this method directly but use [[ColonyNetwork.getColony]]
   * @param colonyNetwork - A Colony SDK `ColonyNetwork` instance
   * @param colonyClient - A ColonyJS `ColonyClient` in the latest supported version
   * @returns A [[Colony]] abstaction instance
   */
  constructor(
    colonyNetwork: ColonyNetwork,
    colonyClient: SupportedColonyClient,
  ) {
    this.colonyClient = colonyClient;
    this.colonyNetwork = colonyNetwork;
    this.signerOrProvider = colonyClient.signer || colonyClient.provider;
    this.address = colonyClient.address;
    this.ext = {};
    this.version = colonyClient.clientVersion;
  }

  static async init(
    colonyNetwork: ColonyNetwork,
    colonyClient: SupportedColonyClient,
  ) {
    const colony = new Colony(colonyNetwork, colonyClient);
    await colony.updateExtensions();
    return colony;
  }

  static getLatestSupportedVersion() {
    return Colony.supportedVersions[Colony.supportedVersions.length - 1];
  }

  /**
   * Creates a new [[TxCreator]] for non-permissioned Colony transactions
   *
   * @internal
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   * @param contract - A ColonyJS contract
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param eventData - A function that extracts the relevant event data from the [[ContractReceipt]]
   * @param metadataType - The [[MetadataType]] if the event contains metadata
   * @returns A [[TxCreator]]
   */
  createTxCreator<
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
    metadataType?: M,
  ) {
    return new TxCreator({
      colony: this,
      colonyNetwork: this.colonyNetwork,
      contract,
      method,
      args,
      eventData,
      metadataType,
    });
  }

  /**
   * Creates a new [[TxCreator]] for permissioned Colony transactions
   *
   * @internal
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   * @param contract - A ColonyJS contract
   * @param method - The transaction method to execute on the contract
   * @param args - The arguments for the method
   * @param permissionConfig - Relevant configuration for the permissioned Colony function
   * @param eventData - A function that extracts the relevant event data from the [[ContractReceipt]]
   * @param metadataType - The [[MetadataType]] if the event contains metadata
   * @returns A permissioned [[TxCreator]]
   */
  createPermissionedTxCreator<
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
    metadataType?: M,
  ) {
    return new TxCreator({
      colony: this,
      colonyNetwork: this.colonyNetwork,
      contract,
      method,
      args,
      permissionConfig,
      eventData,
      metadataType,
    });
  }

  /**
   * Provide direct access to the internally used ColonyJS client. Only use when you know what you're doing
   *
   * @internal
   * @returns The internally used ColonyClient
   */
  getInternalColonyClient(): SupportedColonyClient {
    return this.colonyClient;
  }

  /**
   * Gets the colony's [[ColonyToken]]. Will instantiate it if it doesn't exist yet
   *
   * @internal
   * @returns The colony's [[ColonyToken]]
   */
  async getToken(): Promise<ColonyToken> {
    if (this.colonyToken) {
      return this.colonyToken;
    }
    const tokenLockingClient =
      // eslint-disable-next-line max-len
      await this.getInternalColonyClient().networkClient.getTokenLockingClient();
    const token = new ColonyToken(this, tokenLockingClient);
    this.colonyToken = token;
    return this.colonyToken;
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
        const votingReputationClient = await getVotingReputationClient(
          this.colonyClient,
        );
        this.ext.motions = new VotingReputation(this, votingReputationClient);
      } catch (e) {
        // Ignore error here. Extension just won't be available.
      }
    }

    if (!this.ext.oneTx) {
      try {
        const oneTxPaymentClient = await getOneTxPaymentClient(
          this.colonyClient,
        );
        this.ext.oneTx = new OneTxPayment(this, oneTxPaymentClient);
      } catch (e) {
        // Ignore error here. Extension just won't be available.
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
   * // The `AddressZero` means ETH on mainnet and xDAI on Gnosis chain
   * const balance = await colony.getBalance(constants.AddressZero, 2);
   * // This will format the balance as a string in eth and not wei (i.e. 1.0 vs. 1000000000000000000)
   * console.info(toEth(balance));
   * ```
   * @param tokenAddress - The address of the token to get the balance for. Default is the Colony's native token
   * @param teamId - The teamId (domainId) of the team to get the balance for. Default is the `Root` team
   * @returns A token balance in [wei](https://gwei.io/)
   */
  async getBalance(tokenAddress?: string, teamId?: BigNumberish) {
    let potId: BigNumberish = Id.RootPot;
    if (teamId) {
      const { fundingPotId } = await this.colonyClient.getDomain(teamId);
      potId = fundingPotId;
    }
    const token = tokenAddress || this.colonyClient.tokenClient.address;
    return this.colonyClient.getFundingPotBalance(potId, token);
  }

  /**
   * Create a team (domain) within a Colony with team details as metadata
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
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
   *   }).force();
   * })();
   * ```
   * @param metadata - The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If [[DomainMetadata]] is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [[IpfsAdapter]] that can upload and pin to IPFS (like the [[PinataAdapter]]). See its documentation for more information.
   * @returns A [[TxCreator]]
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | Integer domain id of the created team |
   * | `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |
   * | `metadata` | string | IPFS CID of metadata attached to this transaction |
   *
   * **Metadata** (can be obtained by calling and awaiting the `getMetadata` function)
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `domainName` | string | The human readable name assigned to this team |
   * | `domainColor` | string | The color assigned to this team |
   * | `domainPurpose` | string | The purpose for this team (a broad description) |
   */
  createTeam(
    metadata: DomainMetadata | string,
  ): TxCreator<
    SupportedColonyClient,
    'addDomain(uint256,uint256,uint256,string)',
    Expand<
      DomainAdded_uint256_EventObject &
        FundingPotAddedEventObject & { metadata: string }
    >,
    MetadataType.Domain
  >;

  /**
   * Create a team (domain) within a Colony with no metadata attached
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   * @returns A [[TxCreator]]
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | Integer domain id of the created team |
   * | `fundingPotId` | BigNumber | Integer id of the corresponding funding pot |
   */
  createTeam(): TxCreator<
    SupportedColonyClient,
    'addDomain(uint256,uint256,uint256,string)',
    Expand<
      DomainAdded_uint256_EventObject &
        FundingPotAddedEventObject & { metadata: undefined }
    >,
    MetadataType
  >;

  createTeam(metadata?: DomainMetadata | string) {
    if (!metadata) {
      return this.createPermissionedTxCreator(
        this.colonyClient,
        'addDomain(uint256,uint256,uint256)',
        [Id.RootDomain],
        {
          roles: ColonyRole.Architecture,
          domain: Id.RootDomain,
        },
        async (receipt) => ({
          ...extractEvent<DomainAdded_uint256_EventObject>(
            'DomainAdded',
            receipt,
          ),
          ...extractEvent<FundingPotAddedEventObject>(
            'FundingPotAdded',
            receipt,
          ),
        }),
      );
    }

    return this.createPermissionedTxCreator(
      this.colonyClient,
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
        ...extractEvent<DomainAdded_uint256_EventObject>(
          'DomainAdded',
          receipt,
        ),
        ...extractEvent<FundingPotAddedEventObject>('FundingPotAdded', receipt),
        ...extractEvent<DomainMetadataEventObject>('DomainMetadata', receipt),
      }),
      MetadataType.Domain,
    );
  }

  /**
   * Deprecate (remove) or undeprecate a team
   *
   * Teams can be deprecated which will remove them from the UI. As they can't be deleted you can always undeprecate a team by passing `false` as the second argument.
   *
   * @param teamId - Team to be (un)deprecated
   * @param deprecated - `true`: Deprecate team; `false`: Undeprecate team
   * @returns A [[TxCreator]]
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `domainId` | BigNumber | The id of the team that was (un)deprecated |
   * | `deprecated` | bool | Whether the team was deprecated or not |
   */
  deprecateTeam(teamId: BigNumberish, deprecated: boolean) {
    return this.createPermissionedTxCreator(
      this.colonyClient,
      'deprecateDomain',
      [teamId, deprecated],
      {
        roles: ColonyRole.Architecture,
        domain: teamId,
      },
      async (receipt) => ({
        ...extractEvent<DomainDeprecatedEventObject>(
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
  async getTeam(
    teamId: BigNumberish,
  ): Promise<ColonyDataTypes.DomainStructOutput> {
    const teamCount = await this.colonyClient.getDomainCount();
    if (teamCount.lt(teamId)) {
      throw new Error(`Team with id ${teamId} does not exist`);
    }
    return this.colonyClient.getDomain(teamId);
  }

  /**
   * Claim outstanding Colony funds
   *
   * Anyone can call this function. Claims funds _for_ the Colony that have been sent to the Colony's contract address or minted funds of the Colony's native token. This function _has_ to be called in order for the funds to appear in the Colony's treasury. You can provide a token address for the token to be claimed. Otherwise it will claim the outstanding funds of the Colony's native token
   *
   * @remarks use `ethers.constants.AddressZero` to claim ETH.
   * @param tokenAddress - The address of the token to claim the funds for. Default is the Colony's native token
   * @returns A [[TxCreator]]
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `token` | string | The token address |
   * | `fee` | BigNumber | The fee deducted for rewards |
   * | `payoutRemainder` | BigNumber | The remaining funds moved to the top-level domain pot |
   */
  claimFunds(tokenAddress?: string) {
    const token = tokenAddress || this.colonyClient.tokenClient.address;

    return this.createTxCreator(
      this.colonyClient,
      'claimColonyFunds',
      [token],
      async (receipt) => ({
        ...extractEvent<ColonyFundsClaimed_address_uint256_uint256_EventObject>(
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
   *   ).force();
   * })();
   * ```
   * @param amount - Amount to transfer between the teams
   * @param toTeam - The team to transfer the funds to
   * @param fromTeam - The team to transfer the funds from. Default is the Root team
   * @param tokenAddress - The address of the token to be transferred. Default is the Colony's native token
   * @returns A [[TxCreator]]
   *
   * **Event data**
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
    const setTokenAddress =
      tokenAddress || this.colonyClient.tokenClient.address;

    return this.createTxCreator(
      this.colonyClient,
      // eslint-disable-next-line max-len
      'moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)',
      async () => {
        // Manual permission proofs are needed here
        const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
          this.colonyClient,
          parentTeam,
          ColonyRole.Funding,
        );

        const fromChildSkillIndex = await getChildIndex(
          this.colonyClient,
          parentTeam,
          setFromTeam,
        );

        const toChildSkillIndex = await getChildIndex(
          this.colonyClient,
          parentTeam,
          toTeam,
        );

        const { fundingPotId: fromPot } = await this.colonyClient.getDomain(
          setFromTeam,
        );
        const { fundingPotId: toPot } = await this.colonyClient.getDomain(
          toTeam,
        );

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
        ...extractEvent<ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventObject>(
          'ColonyFundsMovedBetweenFundingPots',
          receipt,
        ),
      }),
    );
  }

  /**
   * Get the reputation for a user address within a team in the Colony
   *
   * @param userAddress - The address of the account to check the reputation for
   * @param teamId - The teamId (domainId) of the team to get the reputation for. Default is the `Root` team
   * @returns A number quantifying the user addresses' reputation
   */
  async getReputation(userAddress: string, teamId = Id.RootDomain) {
    const { skillId } = await this.colonyClient.getDomain(teamId);
    const { reputationAmount } =
      await this.colonyClient.getReputationWithoutProofs(skillId, userAddress);
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
    return this.colonyClient.getReputationAcrossDomains(userAddress);
  }

  /**
   * Execute an arbitrary transaction in the name of the Colony
   *
   * This method can execute a transaction on any Ethereum Smart Contract with the Colony address as the sender. The action needs to be encoded function data (see https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--encoding). We provide some common interfaces for you to make it even easier.
   *
   * @example Mint an NFT from a Colony
   * ```typescript
   * import { ERC721 } from '@colony/sdk';
   *
   * // Mint an NFT for address 0xb794f5ea0ba39494ce839613fffba74279579268
   * // (forced transaction example)
   * const encodedAction = ERC721.encodeFunctionData(
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
   *   ).force();
   * })();
   * ```
   * @param target - Address of the contract to execute a method on
   * @param action - Encoded action to execute
   * @returns A [[TxCreator]]
   *
   * **No event data**
   */
  makeArbitraryTransaction(target: string, action: BytesLike) {
    return this.createTxCreator(
      this.colonyClient,
      'makeArbitraryTransactions',
      [[target], [action], false],
    );
  }

  /**
   * Annotate a transaction with IPFS metadata to provide extra information
   *
   * This will annotate a transaction with an arbitrary text message. This only really works for transactions that happened within this Colony. This will upload the text string to IPFS and connect the transaction to the IPFS hash accordingly.
   *
   * @remarks If [[AnnotationMetadata]] is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [[IpfsAdapter]] that can upload and pin to IPFS. See its documentation for more information. Keep in mind that **the annotation itself is a transaction**.
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
   *   ).force();
   * })();
   * ```
   * @param txHash - Transaction hash of the transaction to annotate (within the Colony)
   * @param annotationMetadata - The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata)
   * @returns A [[TxCreator]]
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `txHash` | BigNumber | The hash of the annotated transaction |
   * | `metadata` | BigNumber | The IPFS hash (CID) of the metadata object |
   */
  annotateTransaction(
    txHash: string,
    annotationMetadata: AnnotationMetadata | string,
  ) {
    return this.createTxCreator(
      this.colonyClient,
      'annotateTransaction',
      async () => {
        let cid: string;
        if (typeof annotationMetadata == 'string') {
          cid = annotationMetadata;
        } else {
          cid = await this.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Annotation,
            annotationMetadata,
          );
        }
        return [txHash, cid] as [string, string];
      },
      async (receipt) => ({
        ...extractEvent<AnnotationEventObject>('Annotation', receipt),
      }),
      MetadataType.Annotation,
    );
  }

  /**
   * Install an extension for a colony
   *
   * Valid extensions can be found here: [[SupportedExtension]]
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
   *   ).force();
   *   // Update the extensions in the colony
   *   await colony.updateExtensions();
   *   console.info(colony.ext.oneTx.address);
   * })();
   * ```
   * @param extension - Name of the extension you'd like to install
   * @returns A [[TxCreator]]
   *
   * **Event data**
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
    const colonyVersion = this.colonyClient.clientVersion;
    if (!isExtensionCompatible(extensionType, version, colonyVersion)) {
      throw new Error(
        `v${version} of ${extensionType} extension is not compatible with colony v${colonyVersion}`,
      );
    }
    return this.createTxCreator(
      this.colonyClient,
      'installExtension',
      [getExtensionHash(extensionType), Extension.getLatestSupportedVersion()],
      async (receipt) => ({
        ...extractCustomEvent<ExtensionInstalledEventObject>(
          'ExtensionInstalled',
          receipt,
          this.colonyNetwork.networkClient.interface,
        ),
      }),
    );
  }

  /**
   * Set (award) roles to a user/contract
   *
   * @remarks
   * Existing roles will be kept. Use [[unsetRoles]] to remove roles
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
   *   ).force();
   * })();
   * ```
   * @param address - Address of the wallet or contract to give the roles to
   * @param roles - Role or array of roles to award
   * @param teamId - Team to apply the role(s) in
   * @returns A [[TxCreator]]
   *
   * **Event data**
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
    return this.createPermissionedTxCreator(
      this.colonyClient,
      'setUserRoles',
      async () => {
        const oldRolesHex = await this.colonyClient.getUserRoles(
          address,
          teamId,
        );
        const oldRoles = parseInt(oldRolesHex, 16);
        // TODO: export the colonyRoles2Hex helper from ColonyJS
        /* eslint-disable no-bitwise */
        const newRoles =
          ([] as ColonyRole[])
            .concat(roles)
            .reduce((acc, current) => acc | (1 << current), 0) | oldRoles;
        /* eslint-enable no-bitwise */
        const hexRoles = utils.hexZeroPad(`0x${newRoles}`, 32);
        return [address, teamId, hexRoles] as [string, BigNumber, string];
      },
      {
        roles: ColonyRole.Architecture,
        domain: teamId,
      },
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyRoleSet_address_address_uint256_uint8_bool_EventObject>(
          'ColonyRoleSet',
          receipt,
        ),
        ...extractEvent<RecoveryRoleSetEventObject>('RecoveryRoleSet', receipt),
      }),
    );
  }

  /**
   * Unset (remove) roles from a user/contract
   *
   * @param address - Address of the wallet or contract to remove the roles from
   * @param roles - Role or array of roles to remove
   * @param teamId - Team to apply the role(s) in
   * @returns A [[TxCreator]]
   *
   * **Event data**
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
    return this.createPermissionedTxCreator(
      this.colonyClient,
      'setUserRoles',
      async () => {
        const oldRolesHex = await this.colonyClient.getUserRoles(
          address,
          teamId,
        );
        const oldRoles = parseInt(oldRolesHex, 16);
        // TODO: export the colonyRoles2Hex helper from ColonyJS
        /* eslint-disable no-bitwise */
        const newRoles =
          ([] as ColonyRole[])
            .concat(roles)
            .reduce((acc, current) => acc & ~(1 << current), 0b11111) &
          oldRoles;
        /* eslint-enable no-bitwise */
        const hexRoles = utils.hexZeroPad(`0x${newRoles}`, 32);
        return [address, teamId, hexRoles] as [string, BigNumber, string];
      },
      {
        roles: ColonyRole.Architecture,
        domain: teamId,
      },
      async (receipt) => ({
        // eslint-disable-next-line max-len
        ...extractEvent<ColonyRoleSet_address_address_uint256_uint8_bool_EventObject>(
          'ColonyRoleSet',
          receipt,
        ),
        ...extractEvent<RecoveryRoleSetEventObject>('RecoveryRoleSet', receipt),
      }),
    );
  }
}

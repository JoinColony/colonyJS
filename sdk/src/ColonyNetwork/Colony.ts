import {
  ColonyClientV10,
  SignerOrProvider,
  Id,
  ColonyRole,
  IBasicMetaTransaction,
  getChildIndex,
  getPermissionProofs,
} from '@colony/colony-js';
import {
  AnnotationEventObject,
  ColonyDataTypes,
  ColonyFundsClaimed_address_uint256_uint256_EventObject,
  // eslint-disable-next-line max-len
  ColonyFundsMovedBetweenFundingPots_address_uint256_uint256_uint256_address_EventObject,
  DomainAdded_uint256_EventObject,
  DomainDeprecatedEventObject,
  DomainMetadataEventObject,
  FundingPotAddedEventObject,
} from '@colony/colony-js/extras';
import {
  AnnotationMetadata,
  DomainMetadata,
  MetadataType,
} from '@colony/colony-event-metadata-parser';

import { BigNumberish, BytesLike, ContractReceipt } from 'ethers';

import { extractEvent } from '../utils';
import { ColonyToken } from './ColonyToken';
import { ColonyNetwork } from './ColonyNetwork';
import { OneTxPayment } from './OneTxPayment';
import { VotingReputation } from './VotingReputation';
import { Parameters, ParametersFrom2 } from '../types';
import { PermissionConfig, TxCreator } from './TxCreator';

export type SupportedColonyClient = ColonyClientV10;
export type SupportedColonyMethods = SupportedColonyClient['functions'];
export interface SupportedExtensions {
  motions?: VotingReputation;
  oneTx?: OneTxPayment;
}

export class Colony {
  /** The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
   * If this is not an option, Colony SDK might throw errors at certain points. Usage of ColonyJS is advised in these cases
   */
  static SupportedVersions: 10[] = [10];

  private colonyClient: SupportedColonyClient;

  address: string;

  colonyNetwork: ColonyNetwork;

  /**
   * An instance of the Colony's native token
   *
   * Currently only Tokens deployed via Colony are supported (no external, imported tokens) in Colony SDK. All other kinds will throw an error
   */
  colonyToken?: ColonyToken;

  ext: SupportedExtensions;

  signerOrProvider: SignerOrProvider;

  version: number;

  /**
   * Creates a new instance to connect to an existing Colony
   * @internal
   *
   * @remarks
   * Do not use this method directly but use [[ColonyNetwork.getColony]]
   *
   * @param colonyNetwork A Colony SDK `ColonyNetwork` instance
   * @param colonyClient A ColonyJS `ColonyClient` in the latest supported version
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

  /**
   * Creates a new [[TxCreator]] for non-permissioned Colony transactions
   * @internal
   *
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   *
   * @param contract A ColonyJS contract
   * @param method The transaction method to execute on the contract
   * @param args The arguments for the method
   * @param eventData A function that extracts the relevant event data from the [[ContractReceipt]]
   * @param metadataType The [[MetadataType]] if the event contains metadata
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
      contract,
      method,
      args,
      eventData,
      metadataType,
    });
  }

  /**
   * Creates a new [[TxCreator]] for permissioned Colony transactions
   * @internal
   *
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   *
   * @param contract A ColonyJS contract
   * @param method The transaction method to execute on the contract
   * @param args The arguments for the method
   * @param permissionConfig Relevant configuration for the permissioned Colony function
   * @param eventData A function that extracts the relevant event data from the [[ContractReceipt]]
   * @param metadataType The [[MetadataType]] if the event contains metadata
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
   * @internal
   *
   * @returns The internally used ColonyClient
   */
  getInternalColonyClient(): SupportedColonyClient {
    return this.colonyClient;
  }

  /**
   * Gets the colony's [[ColonyToken]]. Will instantiate it if it doesn't exist yet
   * @internal
   *
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
   * Installs colony extensions that can be instantiated in the callback function
   * @internal
   */
  installExtensions(extensions: SupportedExtensions) {
    this.ext = extensions;
  }

  /**
   * Get a token balance for a specific token and team. Defaults to the Colony's native token and the `Root` team.
   *
   * @remarks
   * The function will automatically figure out the corresponding pot for the given domain, as this is what's usually expected.
   *
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
   *
   * @param tokenAddress The address of the token to get the balance for. Default is the Colony's native token
   * @param teamId The teamId (domainId) of the team to get the balance for. Default is the `Root` team
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
   *
   * @param teamMetadata An IPFS [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file containing the metadata described below. For now, we would like to keep it agnostic to any IPFS upload mechanism, so you have to upload the file manually and provide your own hash (by using, for example, [Pinata](https://docs.pinata.cloud/))
   * @param teamMetadata The team metadata you would like to add (or an IPFS CID pointing to valid metadata). If [[DomainMetadata]] is provided directly (as opposed to a [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) for a JSON file) this requires an [[IpfsAdapter]] that can upload and pin to IPFS (like the [[PinataAdapter]]). See its documentation for more information.
   *
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
  createTeamWithData(teamMetadata: DomainMetadata | string) {
    return this.createPermissionedTxCreator(
      this.colonyClient,
      'addDomain(uint256,uint256,uint256,string)',
      async () => {
        let cid: string;
        if (typeof teamMetadata == 'string') {
          cid = teamMetadata;
        } else {
          cid = await this.colonyNetwork.ipfs.uploadMetadata(
            MetadataType.Domain,
            teamMetadata,
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
   * Create a team (domain) within a Colony with no metadata attached
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   *
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
  createTeam() {
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
        ...extractEvent<FundingPotAddedEventObject>('FundingPotAdded', receipt),
      }),
    );
  }

  /**
   * Deprecate (remove) or undeprecate a team
   *
   * Teams can be deprecated which will remove them from the UI. As they can't be deleted you can always undeprecate a team by passing `false` as the second argument.
   *
   * @param teamId Team to be (un)deprecated
   * @param deprecated `true`: Deprecate team; `false`: Undeprecate team
   *
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
   *
   * @param teamId The teamId to get the team information for
   *
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
   *
   * @param tokenAddress The address of the token to claim the funds for. Default is the Colony's native token
   *
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
   *
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
   *   ).forceTx();
   * })();
   * ```
   *
   * @param amount Amount to transfer between the teams
   * @param toTeam The team to transfer the funds to
   * @param fromTeam The team to transfer the funds from. Default is the Root team
   * @param tokenAddress The address of the token to be transferred. Default is the Colony's native token
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
   * @param userAddress The address of the account to check the reputation for
   * @param teamId The teamId (domainId) of the team to get the reputation for. Default is the `Root` team
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
   * @param userAddress The address of the account to check the reputation for
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
   *   ).forceTx();
   * })();
   * ```
   *
   * @param target Address of the contract to execute a method on
   * @param action Encoded action to execute
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
   *
   * @example
   * ```typescript
   * // Immediately executing async function
   * (async function() {
   *
   *   // Create a motion to pay 10 of the native token to some (maybe your own?) address
   *   // (forced transaction example)
   *   const [, { transactionHash }] = await colony.ext.oneTx.pay(
   *     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *     w`10`,
   *   ).motionTx();
   *   // Annotate the motion transaction with a little explanation :)
   *   await colony.annotateTransaction(
   *      transactionHash,
   *      { annotationMsg: 'I am creating this motion because I think I deserve a little bonus' },
   *   ).forceTx();
   * })();
   * ```
   *
   * @param txHash Transaction hash of the transaction to annotate (within the Colony)
   * @param annotationMetadata The annotation metadata you would like to annotate the transaction with (or an IPFS CID pointing to valid metadata)
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
}

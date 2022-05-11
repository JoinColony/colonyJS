import {
  ColonyClientV8,
  ColonyClientV9,
  ColonyNetworkClient,
  SignerOrProvider,
  Id,
  Extension,
} from '@colony/colony-js';

import {
  ColonyFundsClaimed_address_uint256_uint256_EventObject,
  DomainAdded_uint256_EventObject,
  FundingPotAddedEventObject,
} from '@colony/colony-js/extras';
import type { BigNumberish } from 'ethers';

import { ColonyToken } from './ColonyToken';
import { extractEvent } from '../utils';

export type SupportedColonyClient = ColonyClientV8 | ColonyClientV9;

export class Colony {
  /** The currently supported Colony version. If a Colony is not on this version it has to be upgraded.
   * If this is not an option, ColonySDK might throw errors at certain points. Usage of ColonyJS is advised in these cases
   */
  static SupportedVersions: (8 | 9)[] = [8, 9];

  private colonyClient: SupportedColonyClient;

  private networkClient: ColonyNetworkClient;

  private signerOrProvider: SignerOrProvider;

  address: string;

  version: number;

  /**
   * Creates a new instance to connect to an existing Colony
   * @internal
   *
   * @remarks
   * Do not use this method directly but use [[ColonyNetwork.getColony]]
   *
   * @param colonyClient A ColonyJS `ColonyClient` in the latest supported version
   * @returns A [[Colony]] abstaction instance
   */
  constructor(colonyClient: SupportedColonyClient) {
    this.colonyClient = colonyClient;
    this.networkClient = colonyClient.networkClient;
    this.signerOrProvider = colonyClient.signer || colonyClient.provider;
    this.address = colonyClient.address;
    this.version = colonyClient.clientVersion;
  }

  /**
   * Provide direct access to the internally used ColonyJS client. Only use when you know what you're doing
   *
   * @internal
   *
   * @returns The internally used ColonyClient
   */
  _getColonyClient(): SupportedColonyClient {
    return this.colonyClient;
  }

  /**
   * Get a new instance of a Colony's native Token
   *
   * @remarks
   * Currently only Tokens deployed via Colony are supported (no external, imported tokens) in Colony SDK. All other kinds will throw an error
   *
   * @returns A [[Token]] abstaction instance
   */
  getToken(): ColonyToken {
    return new ColonyToken(this.colonyClient);
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
   * import { constants, utils } from 'ethers';
   * // The `AddressZero` means ETH on mainnet and xDAI on Gnosis chain
   * const balance = await colony.getBalance(constants.AddressZero, 2);
   * // This will format the balance as a string in eth and not wei (i.e. 1.0 vs. 1000000000000000000)
   * console.info(utils.formatEther(balance));
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
   * Create a team within a Colony
   *
   * @remarks
   * Currently you can only add domains within the `Root` domain. This restriction will be lifted soon
   *
   *
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Description |
   * | :------ | :------ |
   * | `agent` | The address that is responsible for triggering this event |
   * | `domainId` | Integer domain id of the created team |
   * | `fundingPotId` | Integer id of the corresponding funding pot |
   */
  async createTeam() {
    const tx = await this.colonyClient['addDomainWithProofs(uint256)'](
      Id.RootDomain,
    );
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<DomainAdded_uint256_EventObject>('DomainAdded', receipt),
      ...extractEvent<FundingPotAddedEventObject>('FundingPotAdded', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Claim outstanding Colony funds.
   *
   * Anyone can call this function. Claims funds _for_ the Colony that have been sent to the Colony's contract address or minted funds of the Colony's native token. This function _has_ to be called in order for the funds to appear in the Colony's treasury. You can provide a token address for the token to be claimed. Otherwise it will claim the outstanding funds of the Colony's native token
   *
   * @param tokenAddress The address of the token to claim the funds for. Default is the Colony's native token
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Description |
   * | :------ | :------ |
   * | `agent` | The address that is responsible for triggering this event |
   * | `token` | The token address |
   * | `fee` | The fee deducted for rewards |
   * | `payoutRemainder` | The remaining funds moved to the top-level domain pot |
   */
  async claimFunds(
    tokenAddress: string = this.colonyClient.tokenClient.address,
  ) {
    const token = tokenAddress || this.colonyClient.tokenClient.address;
    const tx = await this.colonyClient.claimColonyFunds(token);
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<ColonyFundsClaimed_address_uint256_uint256_EventObject>(
        'ColonyFundsClaimed',
        receipt,
      ),
    };

    return [data, receipt] as [typeof data, typeof receipt];
  }

  /**
   * Make a payment to a single address using a single token
   *
   * @remarks Requires the `OneTxPayment` extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use ethers' `parseUnits` function (see example)
   *
   * @example
   * ```typescript
   * import { utils } from 'ethers';
   * import { Tokens } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Pay 10 XDAI (on Gnosis chain) to the following address
   *   await colony.pay(
   *      '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *      utils.parseUnits('10'),
   *      Tokens.Gnosis.XDAI,
   *   );
   * })();
   * ```
   *
   * @param recipient Wallet address of account to send the funds to (also awarded reputation when sending the native token)
   * @param amount Amount to pay in wei
   * @param tokenAddress The address of the token to make the payment in. Default is the Colony's native token
   * @param teamId The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [[Colony.moveFundsBetweenTeams]]. Defaults to the Colony's root team
   * @returns A tupel of event data and contract receipt
   *
   * **Event data**
   * | Property | Description |
   * | :------ | :------ |
   * | `agent` | The address that is responsible for triggering this event |
   * | `paymentId` | The newly added payment id |
   */
  async pay(
    recipient: string,
    amount: BigNumberish,
    tokenAddress: string = this.colonyClient.tokenClient.address,
    teamId: number = Id.RootDomain,
  ) {
    const oneTxClient = await this.colonyClient.getExtensionClient(
      Extension.OneTxPayment,
    );

    const tx = await oneTxClient.makePaymentFundedFromDomainWithProofs(
      // This function supports multiple receipients, amounts and tokens. Here only one of each is used
      [recipient],
      [tokenAddress],
      [amount],
      teamId,
      // Skill associated with this payment. Ignore for now
      Id.SkillIgnore,
    );

    const receipt = await tx.wait();
    const data = {
      // TODO: Add this line (export from ColonyJS first)
      // ...extractEvent<OneTxPaymentMadeEventObject>('OneTxPaymentMade', receipt),
    };

    return [data, receipt] as [typeof data, typeof receipt];
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
}

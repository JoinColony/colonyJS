import type {
  ExtensionUpgradedEventObject,
  OneTxPaymentMadeEventObject,
} from '@colony/colony-js/events';

import {
  ColonyRole,
  Extension,
  getExtensionHash,
  getPermissionProofs,
  Id,
  OneTxPaymentClientV4,
} from '@colony/colony-js';
import { BigNumber, BigNumberish } from 'ethers';

import { extractEvent } from '../utils';
import { Colony, SupportedColonyClient } from './Colony';

export type SupportedOneTxPaymentClient = OneTxPaymentClientV4;

export const getOneTxPaymentClient = async (
  colonyClient: SupportedColonyClient,
) => {
  const oneTxPaymentClient = await colonyClient.getExtensionClient(
    OneTxPayment.extensionType,
  );

  // TODO: Support more versions?
  if (
    oneTxPaymentClient.clientVersion !==
    OneTxPayment.getLatestSupportedVersion()
  ) {
    throw new Error(
      `The installed version ${oneTxPaymentClient.clientVersion} of the OneTxPayment extension is not supported. Please upgrade the extension in your Colony`,
    );
  }

  return oneTxPaymentClient;
};

/**
 * ## `OneTxPayment` (One Transaction Payment)
 *
 * Ordinarily payments require more than one transaction, because the payment lifecycle requires more than one permissioned role.
 *
 * In some use cases, there might be a need for one authorized individual to be able to create, funds, and finalize a payment within a single transaction.
 *
 * The OneTxPayment extension adds this functionality by adding a makePayment function which requires the caller to have both Funding and administration ability within the domain of the payment.
 *
 * Extension therefore requires Administration and Funding roles to function.
 *
 * Note: if you deployed your Colony using the Dapp, the OneTxPayment extension is already installed for you
 */
export class OneTxPayment {
  static supportedVersions: 4[] = [4];

  static extensionType: Extension.OneTxPayment = Extension.OneTxPayment;

  private colony: Colony;

  private oneTxPaymentClient: SupportedOneTxPaymentClient;

  address: string;

  version: number;

  static getLatestSupportedVersion() {
    return OneTxPayment.supportedVersions[
      OneTxPayment.supportedVersions.length - 1
    ];
  }

  constructor(colony: Colony, oneTxPaymentClient: SupportedOneTxPaymentClient) {
    this.address = oneTxPaymentClient.address;
    this.colony = colony;
    this.oneTxPaymentClient = oneTxPaymentClient;
    this.version = oneTxPaymentClient.clientVersion;
  }

  /**
   * Make a payment to a single or multiple addresses using one or more tokens
   *
   * @remarks Requires the `OneTxPayment` extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use our `w` or `toWei` functions (see example)
   *
   * @example
   * ```typescript
   * import { Id, Tokens, w } from '@colony/sdk';
   *
   * // Immediately executing async function
   * (async function() {
   *   // Pay 10 XDAI (on Gnosis chain) from the root domain to the following address
   *   // (forced transaction example)
   *   await colony.ext.oneTx.pay(
   *      '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *      w`10`,
   *      Id.RootDomain,
   *      Tokens.Gnosis.XDAI,
   *   ).tx();
   * })();
   * ```
   *
   * @param recipient - Wallet address of account to send the funds to (also awarded reputation when sending the native token) - can also be an array of addresses to pay
   * @param amount - Amount to pay in wei - can also be an array of amounts for the different tokens
   * @param tokenAddress - The address of the token to make the payment in. Default is the Colony's native token - can also be an array of token addresses (needs to be the same length as `amount`)
   * @param teamId - The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [[Colony.moveFundsToTeam]]. Defaults to the Colony's root team
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `fundamentalId` | BigNumber | The newly added payment id |
   * | `nPayouts` | BigNumber | Number of payouts in total |
   */
  pay(
    recipient: string | string[],
    amount: BigNumberish | BigNumberish[],
    teamId?: BigNumberish,
    tokenAddress?: string | string[],
  ) {
    const colonyClient = this.colony.getInternalColonyClient();

    const setReceipient = ([] as string[]).concat(recipient);
    const setTeamId = teamId || Id.RootDomain;
    const setTokenAddress = tokenAddress
      ? ([] as string[]).concat(tokenAddress)
      : Array(setReceipient.length).fill(colonyClient.tokenClient.address);
    const setAmount = ([] as BigNumberish[]).concat(amount);

    if (recipient.length !== setAmount.length) {
      throw new Error('recipient and amount arrays need to have the same size');
    }

    if (setTokenAddress.length !== setAmount.length) {
      throw new Error(
        'amount and tokenAddress arrays need to have the same size',
      );
    }

    // The list of recipients has to be orderd in ascending order.
    // So we have to reorder the amounts and tokens as well
    // TODO: technically, the list of tokens for a user also has to be sorted in ascending order.
    // Let's cross that bridge when we get to it
    const indices = Array.from(setReceipient.keys());
    indices.sort((a, b) => setReceipient[a].localeCompare(setReceipient[b]));
    const sortedRecipients = indices.map((i) => setReceipient[i]);
    const sortedAmounts = indices.map((i) => setAmount[i]);
    const sortedTokens = indices.map((i) => setTokenAddress[i]);

    return this.colony.createColonyTxCreator(
      this.oneTxPaymentClient,
      'makePaymentFundedFromDomain',
      async () => {
        // Manual permission proofs are needed here
        const [extPermissionDomainId, extChildSkillIndex] =
          await getPermissionProofs(
            colonyClient,
            setTeamId,
            [ColonyRole.Administration, ColonyRole.Funding],
            this.oneTxPaymentClient.address,
          );

        const [userPermissionDomainId, userChildSkillIndex] =
          await getPermissionProofs(colonyClient, setTeamId, [
            ColonyRole.Administration,
            ColonyRole.Funding,
          ]);

        return [
          extPermissionDomainId,
          extChildSkillIndex,
          userPermissionDomainId,
          userChildSkillIndex,
          sortedRecipients,
          sortedTokens,
          sortedAmounts,
          setTeamId,
          // Skill associated with this payment. Ignore for now
          Id.SkillIgnore,
        ] as [
          BigNumber,
          BigNumberish,
          BigNumberish,
          BigNumberish,
          string[],
          string[],
          BigNumberish[],
          BigNumberish,
          BigNumberish,
        ];
      },
      async (receipt) => ({
        ...extractEvent<OneTxPaymentMadeEventObject>(
          'OneTxPaymentMade',
          receipt,
        ),
      }),
    );
  }

  /**
   * Upgrade this extension to the next or a custom version
   *
   * This method upgrades this extension to a specified version or, if no version is provided to the next higher version.
   *
   * @remarks
   * * Only users with *Root* role are allowed to upgrade an extension (or another extension with appropriate permissions)
   * * Downgrading of extensions is not possible
   *
   * @param toVersion - Specify a custom version to upgrade the extension to
   *
   * @returns A transaction creator
   *
   * #### Event data
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `extensionId` | string | Extension id (name of the extension) that was upgraded |
   * | `oldVersion` | BigNumber | Version of the colony before the upgrade |
   * | `newVersion` | BigNumber | Version of the colony after the upgrade |
   */
  upgrade(toVersion?: BigNumberish) {
    const version = toVersion || this.version + 1;
    return this.colony.createColonyTxCreator(
      this.colony.getInternalColonyClient(),
      'upgradeExtension',
      [getExtensionHash(Extension.OneTxPayment), version],
      async (receipt) => ({
        ...extractEvent<ExtensionUpgradedEventObject>(
          'ExtensionUpgraded',
          receipt,
        ),
      }),
    );
  }
}

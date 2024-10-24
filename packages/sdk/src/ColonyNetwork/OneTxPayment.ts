import type { ColonyNetworkEvents, OneTxPaymentEvents } from '@colony/events';

import {
  type OneTxPaymentVersion,
  Extension,
  ColonyRole,
  Id,
  getContractVersion,
  getExtensionHash,
  getPermissionProofs,
  isExtensionCompatible,
} from '@colony/core';
import { type BigNumber, type BigNumberish, constants } from 'ethers';

import { extractEvent } from '../utils.js';
import {
  type OneTxPayment as OneTxPaymentContract3,
  OneTxPayment__factory as OneTxPaymentFactory3,
} from '../contracts/OneTxPayment/3/index.js';
import {
  type OneTxPayment as OneTxPaymentContract4,
  OneTxPayment__factory as OneTxPaymentFactory4,
} from '../contracts/OneTxPayment/4/index.js';
import {
  type OneTxPayment as OneTxPaymentContract5,
  OneTxPayment__factory as OneTxPaymentFactory5,
} from '../contracts/OneTxPayment/5/index.js';
import { type Colony } from './Colony.js';

const { AddressZero } = constants;

export type SupportedOneTxPaymentContract =
  | OneTxPaymentContract3
  | OneTxPaymentContract4
  | OneTxPaymentContract5;

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
  /**
   * The currently supported OneTXPayment contract version. If the extension contract is not on this version it has to be upgraded.
   */
  static supportedVersions = [
    { version: 3, factory: OneTxPaymentFactory3 },
    { version: 4, factory: OneTxPaymentFactory4 },
    { version: 5, factory: OneTxPaymentFactory5 },
  ];

  static extensionType: Extension.OneTxPayment = Extension.OneTxPayment;

  /**
   * Create an instance of a OneTxPayment extension client and connect the Colony to it
   *
   * Only supports the latest version of the OneTxPayment contract
   *
   * @param colony - The Colony instance
   *
   * @returns A connected OneTxPayment instance
   */
  static async connect(colony: Colony) {
    const address = await colony.colonyNetwork
      .getInternalNetworkContract()
      .getExtensionInstallation(
        getExtensionHash(OneTxPayment.extensionType),
        colony.address,
      );
    if (address === AddressZero) {
      throw new Error(
        `${OneTxPayment.extensionType} extension is not installed for this Colony`,
      );
    }

    const version = (await getContractVersion(
      address,
      colony.config.signerOrProvider,
    )) as OneTxPaymentVersion;

    if (
      !isExtensionCompatible(
        OneTxPayment.extensionType,
        version,
        colony.version,
      )
    ) {
      throw new Error(
        `Version ${version} of the ${OneTxPayment.extensionType} contract is not compatible with the installed Colony contract version ${colony.version}`,
      );
    }

    const Factory = OneTxPayment.supportedVersions.find(
      (v) => v.version === version,
    )?.factory;

    if (!Factory) {
      throw new Error(
        `Version ${version} of the ${OneTxPayment.extensionType} contract is not supported in the SDK as of now`,
      );
    }

    const oneTxPaymentContract = Factory.connect(
      address,
      colony.config.signerOrProvider,
    );

    return new OneTxPayment(colony, oneTxPaymentContract, version);
  }

  private colony: Colony;

  private oneTxPaymentContract: SupportedOneTxPaymentContract;

  /** The extension contract's address */
  address: string;

  /** The extension contract's version */
  version: OneTxPaymentVersion;

  /*
   * Get the latest supported version of the OneTxPayment extension in Colony SDK.
   *
   * Currently we only support one version but this might change in the future
   *
   * @returns The latest supported version for the OneTxPayment contract
   */
  static getLatestSupportedVersion() {
    return OneTxPayment.supportedVersions[
      OneTxPayment.supportedVersions.length - 1
    ]?.version as OneTxPaymentVersion;
  }

  /**
   * Creates a new instance to connect to an existing OneTxPayment extension contract
   *
   * @internal
   *
   * @remarks
   * Do not use this method directly but use {@link OneTxPayment.connect}
   */
  constructor(
    colony: Colony,
    oneTxPaymentContract: SupportedOneTxPaymentContract,
    deployedVersion: OneTxPaymentVersion,
  ) {
    this.address = oneTxPaymentContract.address;
    this.colony = colony;
    this.oneTxPaymentContract = oneTxPaymentContract;
    this.version = deployedVersion;
  }

  /**
   * Provide direct access to the internally used OneTxPayment contract. Only use when you know what you're doing
   * @internal
   *
   * @returns The internally used OneTxPaymentContract
   */
  getInternalVotingReputationContract(): SupportedOneTxPaymentContract {
    return this.oneTxPaymentContract;
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
   *   // Pay 10 CLNY (on ArbitrumOne chain) from the root domain to the following address
   *   // (forced transaction example)
   *   await colony.ext.oneTx.pay(
   *      '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *      w`10`,
   *      Id.RootDomain,
   *      Tokens.ArbitrumOne.CLNY,
   *   ).tx().mined();
   * })();
   * ```
   *
   * @param recipient - Wallet address of account to send the funds to (also awarded reputation when sending the native token) - can also be an array of addresses to pay
   * @param amount - Amount to pay in wei - can also be an array of amounts for the different tokens
   * @param tokenAddress - The address of the token to make the payment in. Default is the Colony's native token - can also be an array of token addresses (needs to be the same length as `amount`)
   * @param teamId - The team to use to send the funds from. Has to have funding of at least the amount you need to send. See {@link Colony.moveFundsToTeam}. Defaults to the Colony's root team
   * @returns A transaction creator
   *
   * #### Required permissions for forced transaction:
   *
   * * {@link ColonyRole.Administration}, {@link ColonyRole.Funding}
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
    const setReceipient = ([] as string[]).concat(recipient);
    const setTeamId = teamId || Id.RootDomain;
    const setTokenAddress = tokenAddress
      ? ([] as string[]).concat(tokenAddress)
      : Array(setReceipient.length).fill(this.colony.token.address);
    const setAmount = ([] as BigNumberish[]).concat(amount);

    if (setReceipient.length !== setAmount.length) {
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
      this.oneTxPaymentContract,
      'makePaymentFundedFromDomain',
      async () => {
        // Manual permission proofs are needed here
        const [extPermissionDomainId, extChildSkillIndex] =
          await getPermissionProofs(
            this.colony.colonyNetwork.getInternalNetworkContract(),
            this.colony.getInternalColonyContract(),
            setTeamId,
            [ColonyRole.Administration, ColonyRole.Funding],
            this.oneTxPaymentContract.address,
          );

        const [userPermissionDomainId, userChildSkillIndex] =
          await getPermissionProofs(
            this.colony.colonyNetwork.getInternalNetworkContract(),
            this.colony.getInternalColonyContract(),
            setTeamId,
            [ColonyRole.Administration, ColonyRole.Funding],
          );

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
        ...extractEvent<OneTxPaymentEvents.OneTxPaymentMadeEventObject>(
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
   * | `oldVersion` | BigNumber | Version of the extension before the upgrade |
   * | `newVersion` | BigNumber | Version of the extension after the upgrade |
   */
  upgrade(toVersion?: BigNumberish) {
    const version = toVersion || this.version + 1;
    return this.colony.createColonyTxCreator(
      this.colony.getInternalColonyContract(),
      'upgradeExtension',
      [getExtensionHash(Extension.OneTxPayment), version],
      async (receipt) => ({
        ...extractEvent<ColonyNetworkEvents.ExtensionUpgradedEventObject>(
          'ExtensionUpgraded',
          receipt,
        ),
      }),
    );
  }
}

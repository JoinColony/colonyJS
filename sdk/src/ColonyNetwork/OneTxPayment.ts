import {
  ColonyRole,
  Extension,
  getPermissionProofs,
  Id,
  OneTxPaymentClientV3,
} from '@colony/colony-js';

import { OneTxPaymentMadeEventObject } from '@colony/colony-js/extras';
import { BigNumber, BigNumberish } from 'ethers';
import { extractEvent } from '../utils';

import { Colony, SupportedColonyClient } from './Colony';

export type SupportedOneTxPaymentClient = OneTxPaymentClientV3;
export const SUPPORTED_ONE_TX_PAYMENT_VERSION = 3;

export const getOneTxPaymentClient = async (
  colonyClient: SupportedColonyClient,
) => {
  const oneTxPaymentClient = await colonyClient.getExtensionClient(
    Extension.OneTxPayment,
  );

  if (oneTxPaymentClient.clientVersion !== SUPPORTED_ONE_TX_PAYMENT_VERSION) {
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
  private colony: Colony;

  private oneTxPaymentClient: SupportedOneTxPaymentClient;

  address: string;

  constructor(colony: Colony, oneTxPaymentClient: SupportedOneTxPaymentClient) {
    this.address = oneTxPaymentClient.address;
    this.colony = colony;
    this.oneTxPaymentClient = oneTxPaymentClient;
  }

  /**
   * Make a payment to a single address using a single token
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
   *   await colony.pay(
   *      '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',
   *      w`10`,
   *      Id.RootDomain,
   *      Tokens.Gnosis.XDAI,
   *   ).forceTx();
   * })();
   * ```
   *
   * @param recipient Wallet address of account to send the funds to (also awarded reputation when sending the native token)
   * @param amount Amount to pay in wei
   * @param tokenAddress The address of the token to make the payment in. Default is the Colony's native token
   * @param teamId The team to use to send the funds from. Has to have funding of at least the amount you need to send. See [[Colony.moveFundsToTeam]]. Defaults to the Colony's root team
   * @returns A [[TxCreator]]
   *
   * **Event data**
   *
   * | Property | Type | Description |
   * | :------ | :------ | :------ |
   * | `agent` | string | The address that is responsible for triggering this event |
   * | `fundamentalId` | BigNumber | The newly added payment id |
   * | `nPayouts` | BigNumber | Number of payouts in total |
   */
  pay(
    recipient: string,
    amount: BigNumberish,
    teamId?: BigNumberish,
    tokenAddress?: string,
  ) {
    const setTeamId = teamId || Id.RootDomain;
    const colonyClient = this.colony.getInternalColonyClient();

    const setTokenAddress = tokenAddress || colonyClient.tokenClient.address;

    return this.colony.createTxCreator(
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
          [recipient],
          [setTokenAddress],
          [amount],
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
}

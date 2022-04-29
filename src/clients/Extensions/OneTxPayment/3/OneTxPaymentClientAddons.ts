/*
 * OneTxPayment Client Version 3 Addons autogenerated by
 * @colony/colony-js version v4.1.2 from colonyNetwork tag 'flwss'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */

import { ExtendedIColony } from '../../../../clients/Colony/extensions/commonExtensions';

import { OneTxPaymentClient } from './OneTxPaymentClient';

/*
 * Extra client methods
 */
export const getOneTxPaymentClientAddons = (
  oneTxPaymentClient: OneTxPaymentClient,
  colonyClient: ExtendedIColony,
): Record<string, any> => ({
  /*
   * Example withProofs method
   *
   * contractCallWithProofs: async (
   *  _domainId: BigNumberish,
   *  overrides?: TransactionOverrides,
   * ): Promise<ContractTransaction> => {
   *   const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
   *     colonyClient,
   *     _domainId,
   *     oneTxPaymentClient.address,
   *   );
   *   return oneTxPaymentClient.contractCall(extensionPDID, extensionCSI, _domainId, overrides);
   * },
   */
});

/*
 * Extra client methods estimates
 *
 * These are needed! Don't skip them!
 */
export const getOneTxPaymentClientEstimateAddons = (
  oneTxPaymentClient: OneTxPaymentClient,
  colonyClient: ExtendedIColony,
): Record<string, any> => ({
  /*
   * Example withProofs estimate method
   * (Mostly the same as the actual method, just that it calls the client
   * estimate contract call and doesn't pass in the transaction overrides)
   *
   * contractCallWithProofs: async (
   *  _domainId: BigNumberish,
   * ): Promise<ContractTransaction> => {
   *   const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
   *     colonyClient,
   *     _domainId,
   *     oneTxPaymentClient.address,
   *   );
   *   return oneTxPaymentClient.estimate.contractCall(extensionPDID, extensionCSI, _domainId);
   * },
   */
});

/* eslint-enable */

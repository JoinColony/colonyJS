/*
 * OneTxPayment Client Version 1 Addons autogenerated by
 * @colony/colony-js version 4.0.0-beta.0 from colonyNetwork tag 'clwss'
 *
 * Feel free to modify as needed!
 */

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */

import {
  BigNumberish,
  BigNumber,
  Overrides,
  ContractTransaction,
} from 'ethers';

import {
  AugmentedIColony,
  getExtensionPermissionProofs,
} from '../../../../clients/Core/augments/commonAugments';

import { OneTxPaymentClient } from './OneTxPaymentClient';

/*
 * Extra client methods
 */
export const getOneTxPaymentClientAugments = (
  oneTxPaymentClient: OneTxPaymentClient,
  colonyClient: AugmentedIColony,
): Record<string, any> => ({
  makePaymentWithProofs: async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.makePayment(
      extensionPDID,
      extensionCSI,
      userPDID,
      userCSI,
      _workers,
      _tokens,
      _amounts,
      _domainId,
      _skillId,
      overrides,
    );
  },
  makePaymentFundedFromDomainWithProofs: async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.makePaymentFundedFromDomain(
      extensionPDID,
      extensionCSI,
      userPDID,
      userCSI,
      _workers,
      _tokens,
      _amounts,
      _domainId,
      _skillId,
      overrides,
    );
  },
});

/*
 * Extra client methods estimates
 *
 * These are needed! Don't skip them!
 */
export const getOneTxPaymentClientEstimateAugments = (
  oneTxPaymentClient: OneTxPaymentClient,
  colonyClient: AugmentedIColony,
): Record<string, any> => ({
  makePaymentWithProofs: async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.estimateGas.makePayment(
      extensionPDID,
      extensionCSI,
      userPDID,
      userCSI,
      _workers,
      _tokens,
      _amounts,
      _domainId,
      _skillId,
    );
  },
  makePaymentFundedFromDomainWithProofs: async (
    _workers: string[],
    _tokens: string[],
    _amounts: BigNumberish[],
    _domainId: BigNumberish,
    _skillId: BigNumberish,
  ): Promise<BigNumber> => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.estimateGas.makePaymentFundedFromDomain(
      extensionPDID,
      extensionCSI,
      userPDID,
      userCSI,
      _workers,
      _tokens,
      _amounts,
      _domainId,
      _skillId,
    );
  },
});

/* eslint-enable */

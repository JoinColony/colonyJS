/* eslint-disable @typescript-eslint/no-explicit-any */

import { BigNumberish } from 'ethers/utils';

import {
  ExtendedIColony,
  getExtensionPermissionProofs,
} from '../../../../clients/Colony/extensions/commonExtensions';

import { OneTxPaymentClient } from './OneTxPaymentClient';

/*
 * Extra client encode interfaces
 */
export const getOneTxPaymentClientEncodeInterfaces = (
  oneTxPaymentClient: OneTxPaymentClient,
  colonyClient: ExtendedIColony,
): Record<string, (params: any) => Promise<string>> => ({
  makePaymentWithProofs: async ([
    _workers,
    _tokens,
    _amounts,
    _domainId,
    _skillId,
  ]: [string[], string[], BigNumberish[], BigNumberish, BigNumberish]): Promise<
    string
  > => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    return oneTxPaymentClient.interface.functions.makePayment.encode([
      extensionPDID,
      extensionCSI,
      userPDID,
      userCSI,
      _workers,
      _tokens,
      _amounts,
      _domainId,
      _skillId,
    ]);
  },
  makePaymentFundedFromDomainWithProofs: async ([
    _workers,
    _tokens,
    _amounts,
    _domainId,
    _skillId,
  ]: [string[], string[], BigNumberish[], BigNumberish, BigNumberish]): Promise<
    string
  > => {
    const [extensionPDID, extensionCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
      oneTxPaymentClient.address,
    );
    const [userPDID, userCSI] = await getExtensionPermissionProofs(
      colonyClient,
      _domainId,
    );

    // eslint-disable-next-line max-len
    return oneTxPaymentClient.interface.functions.makePaymentFundedFromDomain.encode(
      [
        extensionPDID,
        extensionCSI,
        userPDID,
        userCSI,
        _workers,
        _tokens,
        _amounts,
        _domainId,
        _skillId,
      ],
    );
  },
});

/* eslint-enable */

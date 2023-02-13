/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars  */

import { ExtendedIColony } from '../../../../clients/Colony/extensions/commonExtensions';

import { OneTxPaymentClient } from './OneTxPaymentClient';

/*
 * Extra client encode interfaces
 */
export const getOneTxPaymentClientEncodeInterfaces = (
  oneTxPaymentClient: OneTxPaymentClient,
  colonyClient: ExtendedIColony,
): Record<string, (params: any) => Promise<string>> => ({});

/* eslint-enable */

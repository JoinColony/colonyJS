/* @flow */
/* eslint-disable import/no-cycle */

import type { WalletObjectType } from '@colony/purser-core';

import getNetworkClient from './getNetworkClient';

type Address = string;

const getColonyClient = async (
  address: Address,
  network: string,
  wallet: WalletObjectType,
  infuraProjectId?: string,
) => {
  const networkClient = await getNetworkClient(
    network,
    wallet,
    infuraProjectId,
  );
  return networkClient.getColonyClientByAddress(address);
};

export default getColonyClient;

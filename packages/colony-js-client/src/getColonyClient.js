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
  verbose?: boolean,
) => {
  const networkClient = await getNetworkClient(
    network,
    wallet,
    infuraProjectId,
    verbose,
  );
  return networkClient.getColonyClientByAddress(address);
};

export default getColonyClient;

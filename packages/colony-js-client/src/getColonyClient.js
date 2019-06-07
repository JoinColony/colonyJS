/* @flow */
/* eslint-disable import/no-cycle */

import getNetworkClient from './getNetworkClient';

type Address = string;

const getColonyClient = async (
  address: Address,
  network: string,
  wallet: any,
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

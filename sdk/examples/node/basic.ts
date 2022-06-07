import { providers, utils } from 'ethers';

import { ColonyNetwork } from '../../src';

const { formatUnits } = utils;

const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');

// Get the Colony's CLNY funding in the ROOT team (id 1)
const start = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const metaColony = await colonyNetwork.getMetaColony();
  const funding = await metaColony.getBalance();
  const { address } = metaColony;
  console.info(
    `${formatUnits(
      funding,
    )} CLNY in root team of MetaColony with address: ${address}`,
  );
};

start();

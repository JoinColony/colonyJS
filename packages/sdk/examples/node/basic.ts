import { providers } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint, toEth } from '../../src';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

// Get the Colony's CLNY funding in the ROOT team (id 1)
const start = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const metaColony = await colonyNetwork.getMetaColony();
  const funding = await metaColony.getBalance();
  const { address } = metaColony;
  console.info(
    `${toEth(
      funding,
    )} CLNY in root team of MetaColony with address: ${address}`,
  );
};

start();

import { providers } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint } from '../../src';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

// Get the Metacolony's domains including their metadata
const start = async () => {
  const colonyNetwork = await ColonyNetwork.init(provider);
  const colony = await colonyNetwork.getColony(
    '0x364B3153A24bb9ECa28B8c7aCeB15E3942eb4fc5',
  );
  const data = await colony.graph.getTeamsWithMetadata();
  console.info(data);
};

start();

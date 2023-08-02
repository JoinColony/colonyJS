import { JsonRpcProvider } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint } from '../../src/index.js';
import { createSubgraphClient, ColonyGraph } from '../../src/graph/index.js';

const provider = new JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

const graphClient = createSubgraphClient();

// Get the Metacolony's domains including their metadata
const start = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const colony = await colonyNetwork.getColony(
    '0x364B3153A24bb9ECa28B8c7aCeB15E3942eb4fc5',
  );
  const colonyGraph = new ColonyGraph(colony, graphClient);
  const data = await colonyGraph.getTeamsWithMetadata();
  console.info(data);
};

start();

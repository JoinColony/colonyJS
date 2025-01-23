import { providers } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';

import {
  ColonyNetwork,
  ColonyRpcEndpoint,
  Id,
  toEth,
} from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

// Get the Colony's CLNY funding in the ROOT team (id 1)
const start = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const metaColony = await colonyNetwork.getMetaColony();
  const { address, token } = metaColony;
  const funding = await metaColony.getBalance(token.address, Id.RootTeam);
  const symbol = await token.symbol();
  console.info(
    `${toEth(funding)} ${symbol} (${
      token.address
    }) in root team of MetaColony with address: ${address}`,
  );
};

start();

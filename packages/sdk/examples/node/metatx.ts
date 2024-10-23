import { constants, providers, Wallet } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';

import { ColonyNetwork, ColonyRpcEndpoint } from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

// Claim ETH for the MetaColony using a Metatransaction
const start = async () => {
  const signer = Wallet.createRandom().connect(provider);
  const colonyNetwork = new ColonyNetwork(signer);
  const colony = await colonyNetwork.getMetaColony();
  const res = await colony.claimFunds(constants.AddressZero).tx().mined();
  console.info(res);
};

start();

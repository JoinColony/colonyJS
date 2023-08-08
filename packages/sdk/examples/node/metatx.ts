import { JsonRpcProvider, Wallet, ZeroAddress } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint } from '../../src/index.js';

const provider = new JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

// Claim ETH for the MetaColony using a Metatransaction
const start = async () => {
  const signer = Wallet.createRandom().connect(provider);
  const colonyNetwork = new ColonyNetwork(signer);
  const colony = await colonyNetwork.getMetaColony();
  const res = await colony.claimFunds(ZeroAddress).tx().mined();
  console.info(res);
};

start();

import { constants, providers, Wallet } from 'ethers';

import { ColonyNetwork, ColonyRpcEndpoint } from '../../src';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

// Claim ETH for the MetaColony using a Metatransaction
const start = async () => {
  const signer = Wallet.createRandom().connect(provider);
  const colonyNetwork = new ColonyNetwork(signer);
  const colony = await colonyNetwork.getMetaColony();
  const res = await colony.claimFunds(constants.AddressZero).tx().mined();
  console.info(res);
};

start();

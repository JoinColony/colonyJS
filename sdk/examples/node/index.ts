import { providers, utils } from 'ethers';
import { Tokens, getColonyNetworkClient, Network, Id } from '@colony/colony-js';

const { formatEther } = utils;

const provider = new providers.JsonRpcProvider('https://rpc.gnosischain.com/');

// Get the Colony's CLNY funding in the ROOT pot (id 1)
const start = async () => {
  const colonyNetworkClient = getColonyNetworkClient(Network.Xdai, provider);
  const metaColonyClient = await colonyNetworkClient.getMetaColonyClient();
  const funding = await metaColonyClient.getFundingPotBalance(
    Id.RootPot,
    Tokens.Gnosis.CLNY,
  );
  const { address } = metaColonyClient;
  console.info(
    `${formatEther(
      funding,
    )} CLNY in root domain of MetaColony with address: ${address}`,
  );
};

start();

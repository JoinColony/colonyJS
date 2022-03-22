import { providers, utils } from 'ethers';
import { CLNY, getColonyNetworkClient, Network, ROOT_POT_ID } from '@colony/colony-js';

const { formatEther } = utils;

const provider = new providers.JsonRpcProvider('https://rpc.gnosischain.com/');

const start = async () => {
    const colonyNetworkClient = getColonyNetworkClient(Network.Xdai, provider);
    const metaColonyClient = await colonyNetworkClient.getMetaColonyClient()
    const funding = await metaColonyClient.getFundingPotBalance(ROOT_POT_ID, CLNY.Xdai);
    console.info(`Current XDAI funding of the MetaColony: ${formatEther(funding)}`);
}

start();

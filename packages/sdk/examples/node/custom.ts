import { providers, utils } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';
import { erc20Abi } from 'abitype/abis';

import { type Address } from 'abitype';
import {
  ColonyNetwork,
  ColonyRpcEndpoint,
  CustomContract,
} from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

// Create a custom instance of the USDC token on Arbitrum One
const start = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const usdc = new CustomContract(
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    erc20Abi,
    colonyNetwork.config,
  );
  const metaColonyAddress = await colonyNetwork
    .getInternalNetworkContract()
    .getMetaColony();
  const funds = await usdc.read('balanceOf', [metaColonyAddress as Address]);
  const formattedFunds = utils.formatUnits(funds, 6);
  console.info(
    `${formattedFunds} USDC in root team of MetaColony with address: ${metaColonyAddress}`,
  );
};

start();

import { providers } from 'ethers';
import 'cross-fetch/dist/node-polyfill.js';
import { erc20Abi } from 'abitype/abis';

import { type Address } from 'abitype';
import {
  ColonyNetwork,
  ColonyRpcEndpoint,
  CustomContract,
  toEth,
} from '../../src/index.js';

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);

// Create a custom instance of the USDC token on Arbitrum One
const start = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const usdc = new CustomContract(
    colonyNetwork,
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    erc20Abi,
  );
  const metaColony = await colonyNetwork.getMetaColony();
  const { address } = metaColony;
  const [funds] = await usdc.read('balanceOf', [address as Address]);
  console.info(
    `${toEth(funds)} CLNY in root team of MetaColony with address: ${address}`,
  );
};

start();

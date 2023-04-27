import type { JsonRpcProvider } from '@ethersproject/providers';

import { providers } from 'ethers';
import { Network } from '@colony/core';

import getColonyNetworkClient from '../clients/ColonyNetworkClient';

let provider: JsonRpcProvider;

beforeAll(async () => {
  provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc/');
});

describe('ColonyNetwork', () => {
  it('Can get the colony network', async () => {
    const colonyNetworkClient = getColonyNetworkClient(
      Network.Gnosis,
      provider,
    );
    const metaColonyAddress = await colonyNetworkClient.getMetaColony();
    expect(metaColonyAddress).toEqual(
      '0xCFD3aa1EbC6119D80Ed47955a87A9d9C281A97B3',
    );
  });
});

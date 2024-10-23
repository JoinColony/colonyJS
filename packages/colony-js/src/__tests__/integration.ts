import type { JsonRpcProvider } from '@ethersproject/providers';

import 'cross-fetch/polyfill';
import { providers } from 'ethers';
import { Network, ColonyRpcEndpoint } from '@colony/core';

import getColonyNetworkClient from '../clients/ColonyNetworkClient.js';

let provider: JsonRpcProvider;

beforeAll(async () => {
  provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);
});

describe('ColonyNetwork', () => {
  it('Can get the colony network', async () => {
    const colonyNetworkClient = getColonyNetworkClient(
      Network.ArbitrumOne,
      provider,
    );
    const metaColonyAddress = await colonyNetworkClient.getMetaColony();
    expect(metaColonyAddress).toEqual(
      '0xa405A3353Bc7d6048C64BC3663f665A01fF3f43f',
    );
  });
});

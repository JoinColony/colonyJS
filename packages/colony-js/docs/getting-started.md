---
id: "getting-started"
sidebar_position: 1
---

# Getting started

```typescript
import { providers, utils, Wallet } from 'ethers';
import { getColonyNetworkClient, Id, Network, Tokens } from '@colony/colony-js';

const { formatEther } = utils;

const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc/');

const start = async () => {
  // Get a wallet instance
  const wallet = new Wallet(
    // This is a random private key (don't use this one for anything else and _definitely_ do not send valuables to the corresponding address)
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );

  // Check out the logs to see the wallet address
  console.log('Wallet Address:', wallet.address);

  // Get a network client instance for Arbitrum One
  const networkClient = await getColonyNetworkClient(
    Network.ArbitrumOne,
    wallet,
  );

  // Let's connect to the Meta Colony
  const metaColonyClient = await networkClient.getMetaColonyClient()
  // And check out it's CLNY funding
  const funding = await metaColonyClient.getFundingPotBalance(Id.RootPot, Tokens.ArbitrumOne.CLNY);
  // We can also see its address
  const { address } = metaColonyClient;
  console.info(`${formatEther(funding)} CLNY in root domain of MetaColony with address: ${address}`);
};

start();
```

<div align="center">
  <img src="https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_js.svg" width="600" />
</div>

# colonyJS

colonyJS is a JavaScript library with a simple and predictable interface for application-layer integrations with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. To learn more about Colony, you can visit [colony.io](https://colony.io/) or read the [White Paper](https://colony.io/whitepaper.pdf).

## Documentation

[🖺 Click here for docs!](https://docs.colony.io/colonyjs)

You should check out the `getColonyNetworkClient` function in `ColonyNetworkClient` and the docs for the extended colony contracts `clients/Colony/ColonyClientVX`.

## Get Started

```typescript
import { providers, utils, Wallet } from 'ethers';
import { getColonyNetworkClient, ColonRpcEndpoint, Id, Network, Tokens } from '@colony/colony-js';

const { formatEther } = utils;

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.Gnosis);

const start = async () => {
  // Get a wallet instance
  const wallet = new Wallet(
    // This is a random private key (don't use this one for anything else and _definitely_ do not send valuables to the corresponding address)
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );

  // Check out the logs to see the wallet address
  console.log('Wallet Address:', wallet.address);

  // Get a network client instance for Gnosis Chain
  const networkClient = getColonyNetworkClient(
    Network.Gnosis,
    wallet,
  );

  // Let's connect to the Meta Colony
  const metaColonyClient = await networkClient.getMetaColonyClient()
  // And check out it's CLNY funding
  const funding = await metaColonyClient.getFundingPotBalance(Id.RootPot, Tokens.Gnosis.CLNY);
  // We can also see its address
  const { address } = metaColonyClient;
  console.info(`${formatEther(funding)} CLNY in root domain of MetaColony with address: ${address}`);
};

start();
```

## Too complicated? Need more guidance?

Try [Colony SDK](https://docs.colony.io/colonysdk).

## License

GPL-3.0

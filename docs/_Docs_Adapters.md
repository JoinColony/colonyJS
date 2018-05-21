---
title: Adapters
section: Docs
order: 6
---

## What are Adapters?
Adapters represent the colonyJS solution for the many different ways to access the Ethereum blockchain provided by various JavaScript libraries. Adapters provide a wrapper for such libraries that enforces a standard and predictable API for use with Colony's contracts.

## Initialising an adapter

First, make sure you understand how to use [Loaders](../docs-loaders/ "Docs")

Adapters require the following parameters:

```js
{
  loader, // Instance of a Loader
  provider, // Interface to Ethereum, e.g. for sending/receiving transactions
  wallet, // Interface to an Ethereum wallet, e.g. for signing transactions
}
```

An example of initialising an adapter might look like this:

```js
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import { EtherscanLoader } from '@colony/colony-js-contract-loader-http';
import { providers, Wallet } from 'ethers';

// Create a provider, wallet and loader
const provider = providers.getDefaultProvider();
const privateKey = '0x...';
const wallet = new Wallet(privateKey);
const loader = new EtherscanLoader();

// Create the adapter
const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
});
```

## Using an adapter

Adapters can be used directly:

```js
const contractDefinition = await adapter.load({ contractName: 'Token' });
```

But we will probably be using them to create an instance of `ColonyNetworkClient`:

```js
import ColonyNetworkClient from '@colony/colony-js-client';

(async () => {

  const networkClient = new ColonyNetworkClient({ adapter });
  await networkClient.init(); // This will use the adapter to find and load the necessary contract

})();
```

## Officially supported adapters

- [ethers](https://github.com/JoinColony/colony-js/tree/master/packages/colony-js-adapter-ethers)
- web3: [Coming soon](https://github.com/JoinColony/colonyJS/issues/75)

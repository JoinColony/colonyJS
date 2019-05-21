---
title: Adapters
section: Components
order: 3
---

Adapters allow to access the Ethereum blockchain using different JavaScript libraries. Adapters wrap such libraries and enforce a standard for use with the colonyNetwork smart contracts.

## Parameters

Adapters require the following parameters:

```js

{
  loader, // Instance of a ContractLoader
  provider, // Instance of an Ethereum provider, e.g. for sending/receiving transactions
  wallet, // Instance of an Ethereum wallet, e.g. for signing transactions
}

```

## Initialization

Here is an example initializing an adapter using [ethers](https://github.com/ethers-io/ethers.js/):

```js

// Import the prerequisites
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { default: NetworkLoader } = require('@colony/colony-js-contract-loader-network');

// Set network
const network = 'rinkeby';

// Create instance of NetworkLoader
const loader = new NetworkLoader({ network });

// Create provider for wallet and ethers adapter
const provider = providers.getDefaultProvider(network);

// Set the private key
const privateKey = '0x000000000000000000000000000000000000000000000000000000000000000';

// Create wallet with private key and provider
const wallet = new Wallet(privateKey, provider);

// Create a new ethers adapter
const adapter = new EthersAdapter({
  loader,
  provider,
  wallet,
});

```

## Future Adapters

Check out [tailor](/tailor/docs-overview/) to learn more about adapters we plan to support in the future.

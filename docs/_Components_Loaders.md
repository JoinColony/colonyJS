---
title: Loaders
section: Components
order: 2
---

Loaders make it easy to load Ethereum smart contracts. To interact with a contract, whether it's deployed on a local or remote network, you need the address of the deployed contract and its Application Binary Interface (ABI).

Loaders can get the address and ABI of a deployed contract, in a certain version, at a particular location. This information can then passed as an object to the [adapter](/colonyjs/components-adapters/), which then initializes the contract for use within your application or service.

## Network Loader

Install the network loader:

```
yarn add @colony/colony-js-contract-loader-network
```

Load contract data from a given network using the network loader:

```js

import { NetworkLoader } from '@colony/colony-js-contract-loader-network';

const loader = new NetworkLoader({ network: 'goerli' });

```

## Trufflepig Loader

For local development, colonyJS provides a loader that accepts a contract name and returns its ABI from truffle-generated contract files being sniffed out by our very own [TrufflePig](https://github.com/JoinColony/trufflepig).

Install the http loader:

```
yarn add @colony/colony-js-contract-loader-http
```

Load contract data from trufflepig using the trufflepig loader:

```js

import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';

const loader = new TrufflepigLoader();

```

## Future Loaders

- Check out [tailor](/tailor/docs-overview/) to learn more about loaders we plan to support in the future.

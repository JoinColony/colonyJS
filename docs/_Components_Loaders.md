---
title: Loaders
section: Components
order: 2
---

Loaders make it possible to easily access and load Ethereum smart contracts. To interact with a contract, whether it's deployed on a local or remote network, you need the address of the deployed contract and its Application Binary Interface (ABI).

Loaders provide a simple way to get the address and ABI of a deployed contract, in a certain version, at a particular location. This information is passed as an object to the [adapter](/colonyjs/components-adapters/), which initialize the contract for use.

## Network Loader

Install `@colony/colony-js-contract-loader-network`:

```
yarn add @colony/colony-js-contract-loader-network
```

Load contract data from a given network using `NetworkLoader`:

```js

import { NetworkLoader } from '@colony/colony-js-contract-loader-network';

const loader = new NetworkLoader({ network: 'rinkeby' });

```

## Trufflepig Loader

For local development, colonyJS provides a loader that accepts a contract name and returns the contract's ABI from truffle-generated contract files being sniffed out by our very own [TrufflePig](https://github.com/JoinColony/trufflepig).

Install `@colony/colony-js-contract-loader-http`:

```
yarn add @colony/colony-js-contract-loader-http
```

Load contract data from Trufflepig using `TrufflepigLoader`:

```js

import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';

const loader = new TrufflepigLoader();

```

## Future Loaders

- Check out [tailor](/tailor/docs-overview/) to learn more about loaders we plan to support in the future.

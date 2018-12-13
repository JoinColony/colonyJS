---
title: Loaders
section: Docs
order: 6
---

Loaders make it possible to easily access and load Ethereum smart contracts.

To interact with a contract, whether it's deployed on a local or remote network, you need the address of the deployed contract and its Application Binary Interface (ABI).

Loaders provide a simple way to get the address and ABI of a deployed contract, in a certain version, at a particular location. This information is passed as an object to the [adapter](/colonyjs/docs-adapters/), which initialize the contract for use.

In a nutshell, the loader is an abstraction that takes an argument (e.g. the address of a contract) and returns a definition (e.g. the address of the contract and its ABI) from a specific source (e.g. an http host).

==TOC==

## Loader Examples

Let's take a look at some examples.

### EtherscanLoader

We imagine that the most useful case for developers will be a loader that accepts a contract address and returns the contract's ABI from an http source such as Etherscan's API.

Install `@colony/colony-js-contract-loader-http`:

```
yarn add @colony/colony-js-contract-loader-http
```

Load contract data from Etherscan using `EtherscanLoader`:

```js

import { EtherscanLoader } from '@colony/colony-js-contract-loader-http';

const loader = new EtherscanLoader();

const { abi, address } = await loader.load({
  contractAddress: '0xf000000000000000000000000000000000000000',
});

```

### TrufflePigLoader

For local development, colonyJS provides a loader that accepts a contract name and returns the contract's ABI from truffle-generated contract files being sniffed out by our very own [TrufflePig](https://github.com/JoinColony/trufflepig).

Install `@colony/colony-js-contract-loader-http`:

```
yarn add @colony/colony-js-contract-loader-http
```

Load contract data from Trufflepig using `TrufflepigLoader`:

```js

import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';

const loader = new TrufflepigLoader();

const { abi, address } = await loader.load({
  contractName: 'ColonyNetwork',
  version: 1,
});

```

### HttpLoader (using `transform`)

Both the `EtherscanLoader` and `TrufflepigLoader` are modified versions of the more general `HttpLoader`.

It's possible that a custom data source will deliver your data in a format different than Etherscan or TrufflePig. For this, it's necessary to utilize the `transform` property, which can transform the raw output of the source. The default behavior of `transform` is to return the JSON object that is passed to it.

Install `@colony/colony-js-contract-loader-http`:

```
yarn add @colony/colony-js-contract-loader-http
```

Load contract data from a custom data source using `HttpLoader` with `transform`:

```js

import { HttpLoader } from '@colony/colony-js-contract-loader-http';

const loader = new HttpLoader({
  endpoint: 'https://myDataSource.io/contracts?address=%%ADDRESS%%',
  transform(response, query) {
    return {
      address: query.contractAddress,
      abi: response.data.contractABI,
      bytecode: response.data.bytecode
    };
  },
});

const { abi, address, bytecode } = await loader.load({
  contractAddress: '0xf000000000000000000000000000000000000000',
});

```

### NetworkLoader

We've also made it convenient to load deployed colonyNetwork smart contracts.

Install `@colony/colony-js-contract-loader-network`:

```
yarn add @colony/colony-js-contract-loader-network
```

Load contract data from a given network using `NetworkLoader`:

```js

import { NetworkLoader } from '@colony/colony-js-contract-loader-network';

const loader = new NetworkLoader({ network: 'rinkeby' });

const { abi, address } = await loader.load({
  contractName: 'ColonyNetwork',
  version: 1,
});

```

## Future Loaders

We hope to extend functionality to load from more data sources such as:

* IPFS
* EthPM
* GitHub tagged releases
* Databases (including IndexedDB)
* Browser file API
* Swarm

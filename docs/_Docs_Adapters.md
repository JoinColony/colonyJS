---
title: Adapters
section: Docs
order: 3
---

## What are Adapters?
Adapters are the ColonyJS solution for there being many different ways to access the Ethereum blockchain, through various JavaScript libraries. Adapters provide a wrapper for such libraries that enforce a standard and predictable API for use with Colony's contracts.


## How to use an Adapter

First, make sure you understand how to use [Loaders](../docs-loaders/ "Docs")

Once a contract has a loader defined, an adapter constructor function can be defined.

### Interface with Ethers.JS

```js
import EthersAdapter from '@colony/colony-js-adapter-ethers';
import ContractLoaderHttp from '@colony/colony-js-contract-loader-http';
import { providers } from 'ethers';

/* create your provider or signer with ethers first: https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-a-contract */
const provider = providers.getDefaultProvider();

// In this example, we're pulling contracts from Etherscan
const loader = new EtherscanLoader();

const adapter = new EthersAdapter({
    loader,
    provider,
});
```

Loading a contract:

```js
const contract = await adapter.getContract({ name: 'ColonyNetwork' });
```

Interacting with a contract:

```js
const colonyCount = await contract.functions.getColonyCount();
console.log(colonyCount); // 1337
```

### Interface with web3.js



## Officially supported adapters

- [ethers](https://github.com/JoinColony/colony-js/tree/master/packages/colony-js-adapter-ethers)
- [web3](https://github.com/JoinColony/colony-js/tree/master/packages/colony-js-adapter-web3)

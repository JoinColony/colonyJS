---
title: Loaders
section: Docs
order: 5
---

## What are Loaders?
Loaders make it possible to easily access and load Ethereum smart contracts.

To interact with a contract, whether it's on mainnet, a testnet, or your local machine, one needs to have the contract's deployed address, together with its Application Binary Interface (ABI).

Loaders provide a simple way to get the address and ABI of a deployed contract, in a certain version, at a particular location (testnet, mainnet, local). This information is then passed as an object to the [adapters](../docs-adapters/ "Docs"), which initialize the contract for use with whichever web3 library they adapt to (such as web3.js or ethers).

In a nutshell, the loader is an abstraction that takes an argument (e.g. the name of a contract) and returns a definition (most likely the contract's ABI and address) from a specific source (e.g. an http host).

## How to use loaders
We imagine that the most useful case for developers will be for a loader to accept a contract name and return that contract's ABI from an http source such as Etherscan's API.

### Loading an ABI from Etherscan using an Address
```javascript
import { EtherscanLoader } from '@colony/colony-js-contract-loader-http';

// EtherscanLoader has a default endpoint:
// https://api.etherscan.io/api?module=contract&action=getabi&address=%%ADDRESS%%
const loader = new EtherscanLoader();

// The object may then be called by the adapter:
const { abi, address } = await loader.load({ contractAddress: '0xf000000000000000000000000000000000000000' });
 ```

### Loading contractAddress and ABI from TrufflePig using a name
For local development, contracts are quite commonly deployed, destroyed, and re-deployed multiple times to a local testRPC network. Colony's very own [TrufflePig](https://github.com/JoinColony/trufflepig) is a tool specially built to serve both contractAddress and ABI when given a unique name to specify a contract.

```javascript
import { TrufflepigLoader } from '@colony/colony-js-contract-loader-http';

// The default endpoint for TrufflePig is
// https://127.0.0.1:3030/contracts?name=%%NAME%%&address=%%ADDRESS%%&version=%%VERSION%%
const loader = new TrufflepigLoader();

// The object may then be called by the adapter:
const { abi, address, bytecode } = await loader.load({ contractName: 'ColonyNetwork' });
```

### Loading from a custom data source (using the `transform`)
It's possible that a custom data source will deliver your data in a format different than etherscan or TrufflePig. For this, it's necessary to utilize the `transform` property, which can transform the raw output of the source. The default behavior of `transform` is to return the JSON object that is passed to it.

```javascript
import { ContractHttpLoader } from '@colony/colony-js-contract-loader-http';

const loader = new ContractHttpLoader({
  endpoint: 'https://myDataSource.io/contracts?address=%%ADDRESS%%',
  transform(response, query) {
    return {
      address: query.contractAddress,
      abi: response.data.contractABI,
      bytecode: response.data.bytecode
    };
  },
});

// The object may then be called by the adapter:
const { abi, address, bytecode } = await loader.load({ contractAddress: '0xdeadbeef' });
```

## Future/Imaginable loaders
Both the `etherscanLoader` and `TrufflepigLoader` are modified versions of the more general `ContractHttpLoader`. We hope to extend functionality to load from more data sources, such as:


- File system (node)
- Databases (indexeddb on the browser, other dbs in node)
- IPFS (which might be a very specific http loader)
- Swarm
- Browser file API (for testing in the browser)

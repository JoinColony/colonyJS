---
title: Loaders
section: Docs
---

Loaders make it possible to easily access and load Ethereum smart contracts. They provide a simple way to get the ABI and address of a certain deployed contract in a certain version in a particular location (testnet, mainnet, local). This information needs to be fed into the [adapters](docs-adapters.html). These use it to initialise the contracts using the web3 library they adapt to. The loader abstracts the implicit knowledge of how to get ahold of the contract's ABI and address.

## How to use loaders

We'll use the http loader as an example again. In the browser we don't have a lot of ways to access external data. One of them is HTTP requests which is why we think the http loader is the most important one (most frequently used). The loader has a dead-simple API and just implements the `load` function. Here's how you'd use the http loader:

```javascript
const loader = new ContractHttpLoader({
  endpoint: `http://127.0.0.1:3030/contracts?name=%%NAME%%`,
  parser: 'truffle',
});

const { abi, address } = await loader.load('ColonyNetwork'); // Will be called by the adapter
```

As you can see in the example, loaders may implement a `parser` property. This can be used to transform the raw output provided by the source to extract the `ContractDefinition` we need (i.e. the ABI and address of the contract).

## Officially supported loaders

- [http](api-loaders.html#http-loader)

## Imaginable loaders

- File system (node)
- Databases (indexeddb on the browser, other dbs in node)
- IPFS (which might be a very specific http loader)
- Swarm
- Browser file API (for testing in the browser)
